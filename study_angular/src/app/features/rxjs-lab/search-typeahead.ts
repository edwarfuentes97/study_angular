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
  templateUrl: './search-typeahead.html',
  styleUrl: './search-typeahead.css'
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
