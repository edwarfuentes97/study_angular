import { Component, ElementRef, HostListener, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GlossaryService, SearchResult } from '../services/glossary.service';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

interface ResultGroup {
  topic: string;
  topicLabel: string;
  items: SearchResult[];
}

@Component({
  selector: 'app-global-search',
  imports: [FormsModule, RouterLink, SlicePipe],
  template: `
    <div class="search-container" [class.active]="results().length > 0 && query().length > 0">
      <div class="search-input-wrap">
        <span class="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Buscar término, concepto o tema..."
          [ngModel]="query()"
          (ngModelChange)="onQueryChange($event)"
          (focus)="onFocus()"
          (keydown)="onKeydown($event)"
          class="search-input"
        />
        @if (query().length > 0) {
          <button class="search-clear" (click)="clear()">✕</button>
        }
      </div>
      @if (showResults() && results().length > 0) {
        <div class="search-results">
          @for (group of groupedResults(); track group.topic) {
            <div class="result-group">
              <div class="result-topic-header">{{ group.topicLabel }}</div>
              @for (result of group.items; track result.term; let i = $index) {
                <a class="result-item" [class.highlighted]="isHighlighted(group, i)"
                   [routerLink]="result.route"
                   (click)="selectResult(result)"
                   (mouseenter)="highlightedIndex.set(getGlobalIndex(group, i))">
                  <span class="result-term">{{ result.term }}</span>
                  <span class="result-def">{{ result.definition | slice:0:80 }}{{ result.definition.length > 80 ? '...' : '' }}</span>
                </a>
              }
            </div>
          }
          <div class="result-footer">
            {{ results().length }} resultado{{ results().length !== 1 ? 's' : '' }} encontrado{{ results().length !== 1 ? 's' : '' }}
          </div>
        </div>
      }
      @if (showResults() && query().length >= 2 && results().length === 0) {
        <div class="search-results">
          <div class="no-results">No se encontraron resultados para "{{ query() }}"</div>
        </div>
      }
    </div>
  `,
  styles: `
    .search-container {
      position: relative;
      width: 100%;
    }
    .search-input-wrap {
      display: flex;
      align-items: center;
      background: var(--bg-code, #161b22);
      border: 1px solid var(--border, #30363d);
      border-radius: 8px;
      padding: 0.4rem 0.6rem;
      transition: border-color 0.15s;
    }
    .search-container.active .search-input-wrap,
    .search-input-wrap:focus-within {
      border-color: var(--accent-blue, #58a6ff);
    }
    .search-icon { font-size: 0.9rem; margin-right: 0.4rem; opacity: 0.6; }
    .search-input {
      flex: 1;
      background: none;
      border: none;
      outline: none;
      color: var(--text, #e6edf3);
      font-size: 0.85rem;
      font-family: inherit;
    }
    .search-input::placeholder { color: var(--text-muted, #8b949e); }
    .search-clear {
      background: none;
      border: none;
      color: var(--text-muted);
      cursor: pointer;
      font-size: 0.8rem;
      padding: 0.2rem;
    }
    .search-clear:hover { color: var(--text); }
    .search-results {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      right: 0;
      background: var(--bg-card, #0d1117);
      border: 1px solid var(--border, #30363d);
      border-radius: 8px;
      max-height: 400px;
      overflow-y: auto;
      z-index: 1000;
      box-shadow: 0 8px 24px rgba(0,0,0,0.5);
    }
    .result-group { padding: 0.2rem 0; }
    .result-topic-header {
      padding: 0.4rem 0.8rem 0.2rem;
      font-size: 0.72rem;
      font-weight: 600;
      color: var(--accent-blue, #58a6ff);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .result-item {
      display: block;
      padding: 0.4rem 0.8rem;
      text-decoration: none;
      cursor: pointer;
      transition: background 0.1s;
    }
    .result-item:hover, .result-item.highlighted {
      background: rgba(88,166,255,0.08);
    }
    .result-term {
      display: block;
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--text, #e6edf3);
    }
    .result-def {
      display: block;
      font-size: 0.75rem;
      color: var(--text-muted, #8b949e);
      margin-top: 0.1rem;
      line-height: 1.3;
    }
    .result-footer {
      padding: 0.4rem 0.8rem;
      font-size: 0.72rem;
      color: var(--text-muted);
      border-top: 1px solid var(--border);
      text-align: center;
    }
    .no-results {
      padding: 1rem;
      text-align: center;
      color: var(--text-muted);
      font-size: 0.85rem;
    }
  `
})
export class GlobalSearchComponent implements OnInit, OnDestroy {
  private glossary = inject(GlossaryService);
  private router = inject(Router);
  private elRef = inject(ElementRef);

  query = signal('');
  results = signal<SearchResult[]>([]);
  showResults = signal(false);
  highlightedIndex = signal(-1);

  private searchSubject = new Subject<string>();
  private sub!: Subscription;

  ngOnInit() {
    this.sub = this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
    ).subscribe(q => {
      this.results.set(this.glossary.search(q));
      this.showResults.set(true);
      this.highlightedIndex.set(-1);
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  onQueryChange(value: string) {
    this.query.set(value);
    this.searchSubject.next(value);
  }

  onFocus() {
    if (this.results().length > 0) {
      this.showResults.set(true);
    }
  }

  clear() {
    this.query.set('');
    this.results.set([]);
    this.showResults.set(false);
  }

  selectResult(result: SearchResult) {
    this.showResults.set(false);
    this.query.set('');
    this.router.navigate([result.route]);
  }

  groupedResults(): ResultGroup[] {
    const groups = new Map<string, ResultGroup>();
    for (const r of this.results()) {
      if (!groups.has(r.topic)) {
        groups.set(r.topic, { topic: r.topic, topicLabel: r.topic, items: [] });
      }
      groups.get(r.topic)!.items.push(r);
    }
    return Array.from(groups.values());
  }

  getGlobalIndex(group: ResultGroup, localIndex: number): number {
    let offset = 0;
    for (const g of this.groupedResults()) {
      if (g.topic === group.topic) return offset + localIndex;
      offset += g.items.length;
    }
    return -1;
  }

  isHighlighted(group: ResultGroup, localIndex: number): boolean {
    return this.highlightedIndex() === this.getGlobalIndex(group, localIndex);
  }

  onKeydown(event: KeyboardEvent) {
    const total = this.results().length;
    if (event.key === 'Escape') {
      this.showResults.set(false);
      return;
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.highlightedIndex.set(Math.min(this.highlightedIndex() + 1, total - 1));
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.highlightedIndex.set(Math.max(this.highlightedIndex() - 1, 0));
    }
    if (event.key === 'Enter' && this.highlightedIndex() >= 0) {
      event.preventDefault();
      const allResults = this.results();
      const result = allResults[this.highlightedIndex()];
      if (result) this.selectResult(result);
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.showResults.set(false);
    }
  }
}
