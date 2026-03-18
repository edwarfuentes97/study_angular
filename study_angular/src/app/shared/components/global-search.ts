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
  templateUrl: './global-search.html',
  styleUrl: './global-search.css'
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
