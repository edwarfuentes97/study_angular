import { Component, inject, OnInit, OnDestroy, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap, catchError, tap, takeUntil } from 'rxjs/operators';
import { MockApiService } from '../../core/services/mock-api.service';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-search-typeahead',
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule],
  template: `
    <div class="lab-header">
      <h2>🔍 Search Typeahead</h2>
      <p>Debounced search with switchMap — type to search products</p>
      <nav class="lab-nav">
        <a routerLink="/lab/rxjs" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Observable Types</a>
        <a routerLink="/lab/rxjs/operators" routerLinkActive="active">Operators</a>
        <a routerLink="/lab/rxjs/search" routerLinkActive="active">Search</a>
        <a routerLink="/lab/rxjs/combining" routerLinkActive="active">Combining</a>
        <a routerLink="/lab/rxjs/memory" routerLinkActive="active">Memory Leaks</a>
      </nav>
    </div>

    <div class="lab-section">
      <h3>RxJS Pipeline</h3>
      <pre><code>valueChanges.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  filter(term => term.length >= 2),
  switchMap(term => mockApi.search(term)),
  catchError(() => of([]))
)</code></pre>
    </div>

    <div class="search-box">
      <input
        [formControl]="searchControl"
        type="text"
        placeholder="Search products... (try 'cotton', 'bag', 'accessories')"
        class="search-input"
      />
      @if (searching()) {
        <span class="search-indicator">⏳ Searching...</span>
      }
    </div>

    <div class="results-info">
      @if (searchControl.value && searchControl.value.length >= 2) {
        <span class="tag tag-blue">{{ results().length }} result(s) for "{{ lastSearchTerm() }}"</span>
      } @else if (searchControl.value && searchControl.value.length > 0) {
        <span class="tag tag-orange">Type at least 2 characters</span>
      }
    </div>

    <div class="results-grid">
      @for (product of results(); track product.id) {
        <div class="product-card card">
          <div class="product-header">
            <h4>{{ product.name }}</h4>
            <span class="price">\${{ product.price.toFixed(2) }}</span>
          </div>
          <div class="product-meta">
            <span class="tag tag-blue">{{ product.category }}</span>
            <span class="score" [style.color]="product.sustainabilityScore >= 80 ? 'var(--accent-green)' : 'var(--accent-orange)'">
              🌱 {{ product.sustainabilityScore }}/100
            </span>
          </div>
          @if (product.description) {
            <p class="product-desc">{{ product.description }}</p>
          }
        </div>
      }
      @if (results().length === 0 && lastSearchTerm() && !searching()) {
        <div class="no-results">No products found for "{{ lastSearchTerm() }}"</div>
      }
    </div>

    <div class="lab-section">
      <h3>Event Log</h3>
      <div class="output-log">
        @for (entry of logs(); track $index) {
          <div class="log-entry">
            <span class="log-time">{{ entry.time }}</span>
            <span>{{ entry.message }}</span>
          </div>
        }
        @if (logs().length === 0) {
          <div class="log-entry" style="color: var(--text-muted)">Start typing to see events...</div>
        }
      </div>
    </div>
  `,
  styles: `
    :host { display: block; }
    .lab-nav {
      display: flex; gap: 0.5rem; margin-top: 0.6rem; flex-wrap: wrap;
    }
    .lab-nav a {
      padding: 0.3rem 0.7rem; border-radius: 6px; font-size: 0.85rem;
      border: 1px solid var(--border); color: var(--text-muted); text-decoration: none;
      transition: all 0.15s;
    }
    .lab-nav a:hover { border-color: var(--accent-blue); color: var(--text); }
    .lab-nav a.active { background: var(--accent-blue); color: #000; border-color: var(--accent-blue); }

    .search-box { position: relative; margin: 1rem 0; }
    .search-input {
      width: 100%; padding: 0.7rem 1rem; background: var(--bg-card);
      border: 1px solid var(--border); border-radius: 8px; color: var(--text);
      font-size: 0.95rem; outline: none; transition: border-color 0.15s;
    }
    .search-input:focus { border-color: var(--accent-blue); }
    .search-input::placeholder { color: var(--text-muted); }
    .search-indicator {
      position: absolute; right: 1rem; top: 50%; transform: translateY(-50%);
      color: var(--accent-yellow); font-size: 0.85rem;
    }

    .results-info { margin-bottom: 0.8rem; }
    .results-grid {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 0.8rem; margin-bottom: 1.2rem;
    }
    .product-card { transition: border-color 0.15s; }
    .product-card:hover { border-color: var(--accent-blue); }
    .product-header { display: flex; justify-content: space-between; align-items: start; gap: 0.5rem; }
    .product-header h4 { font-size: 0.95rem; color: var(--text); }
    .price { color: var(--accent-green); font-weight: 600; white-space: nowrap; }
    .product-meta { display: flex; gap: 0.5rem; align-items: center; margin-top: 0.5rem; }
    .score { font-size: 0.82rem; }
    .product-desc { color: var(--text-muted); font-size: 0.82rem; margin-top: 0.4rem; }
    .no-results { color: var(--text-muted); font-style: italic; padding: 1rem; }
  `
})
export class SearchTypeaheadComponent implements OnInit, OnDestroy {
  private readonly mockApi = inject(MockApiService);
  private readonly destroy$ = new Subject<void>();

  searchControl = new FormControl('', { nonNullable: true });

  results = signal<Product[]>([]);
  searching = signal(false);
  lastSearchTerm = signal('');
  logs = signal<{ time: string; message: string }[]>([]);

  ngOnInit() {
    this.searchControl.valueChanges.pipe(
      tap(term => this.addLog(`⌨️ Input changed: "${term}"`)),
      debounceTime(300),
      tap(term => this.addLog(`⏱️ Debounced: "${term}"`)),
      distinctUntilChanged(),
      tap(term => this.addLog(`🔄 Distinct: "${term}"`)),
      filter(term => {
        if (term.length < 2) {
          this.results.set([]);
          this.lastSearchTerm.set('');
          return false;
        }
        return true;
      }),
      tap(term => {
        this.searching.set(true);
        this.lastSearchTerm.set(term);
        this.addLog(`🔍 Searching for: "${term}"...`);
      }),
      switchMap(term => this.mockApi.search(term).pipe(
        catchError(err => {
          this.addLog(`❌ Error: ${err.message}`);
          return of([] as Product[]);
        }),
      )),
      takeUntil(this.destroy$),
    ).subscribe(results => {
      this.searching.set(false);
      this.results.set(results);
      this.addLog(`✅ Got ${results.length} result(s)`);
    });
  }

  private addLog(message: string) {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })
      + '.' + String(now.getMilliseconds()).padStart(3, '0');
    this.logs.update(l => [...l, { time, message }]);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
