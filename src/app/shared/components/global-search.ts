import { Component, ElementRef, HostListener, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { Router } from '@angular/router';
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
  imports: [FormsModule, SlicePipe],
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
    const anchor = result.term.toLowerCase().replace(/[\s\/&]+/g, '-').replace(/[^a-z0-9\-@]/g, '');
    this.router.navigate([result.route], { fragment: anchor }).then(() => {
      // Wait for navigation + render, then find and scroll to the element
      setTimeout(() => this.scrollAndHighlight(anchor), 200);
    });
  }

  private scrollAndHighlight(anchor: string) {
    // Try exact ID match first, then search text content
    let target = document.getElementById(anchor);
    if (!target) {
      // Fallback: find glossary-term span or any element containing the text
      const allTerms = document.querySelectorAll('.glossary-term');
      for (const el of Array.from(allTerms)) {
        const text = el.childNodes[0]?.textContent?.trim().toLowerCase() || '';
        if (text === anchor.replace(/-/g, ' ') || text === anchor) {
          target = el as HTMLElement;
          break;
        }
      }
    }
    if (!target) {
      // Last resort: find by ID prefix match
      const all = document.querySelectorAll('[id]');
      for (const el of Array.from(all)) {
        if (el.id.startsWith(anchor.substring(0, 8))) {
          target = el as HTMLElement;
          break;
        }
      }
    }
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      target.classList.add('search-highlight');
      setTimeout(() => target!.classList.remove('search-highlight'), 3000);
    }
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
