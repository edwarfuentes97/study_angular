import { Directive, ElementRef, AfterViewInit, OnDestroy, inject } from '@angular/core';
import { GlossaryService } from '../services/glossary.service';

@Directive({
  selector: '[appAutoGlossary]',
})
export class AutoGlossaryDirective implements AfterViewInit, OnDestroy {
  private el = inject(ElementRef);
  private glossary = inject(GlossaryService);
  private observer: MutationObserver | null = null;
  private processed = false;

  ngAfterViewInit() {
    // Small delay to ensure Angular has rendered the template
    setTimeout(() => this.processElement(), 100);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  private processElement() {
    if (this.processed) return;
    this.processed = true;
    
    const container = this.el.nativeElement as HTMLElement;
    
    // Sort terms by length (longest first) to avoid partial matches
    const terms = [...this.glossary.terms].sort((a, b) => b.term.length - a.term.length);
    
    // Track which terms have already been matched to only do first occurrence
    const matched = new Set<string>();
    
    // Walk all text nodes, skip code blocks and already-processed nodes
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) => {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        const tag = parent.tagName.toLowerCase();
        if (['code', 'pre', 'script', 'style'].includes(tag)) return NodeFilter.FILTER_REJECT;
        if (parent.classList.contains('glossary-tip') || parent.classList.contains('glossary-term'))
          return NodeFilter.FILTER_REJECT;
        if (parent.closest('code') || parent.closest('pre') || parent.closest('.glossary-term'))
          return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const textNodes: Text[] = [];
    let node: Node | null;
    while (node = walker.nextNode()) {
      textNodes.push(node as Text);
    }

    // Process each text node
    for (const textNode of textNodes) {
      const text = textNode.textContent || '';
      if (text.trim().length < 2) continue;

      let replacements: { start: number; end: number; term: string; definition: string }[] = [];

      for (const t of terms) {
        if (matched.has(t.term.toLowerCase())) continue;
        
        // Case-insensitive search, word boundary where possible
        const escaped = t.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const pattern = t.term.includes(' ') || /[^a-zA-Z]/.test(t.term)
          ? new RegExp(escaped, 'i')
          : new RegExp(`\\b${escaped}\\b`, 'i');
        
        const match = pattern.exec(text);
        if (!match) continue;
        
        const start = match.index;
        const end = start + match[0].length;
        
        // Check no overlap with existing replacements
        const overlaps = replacements.some(r => 
          (start >= r.start && start < r.end) || (end > r.start && end <= r.end)
        );
        if (overlaps) continue;
        
        replacements.push({ start, end, term: t.term, definition: t.definition });
        matched.add(t.term.toLowerCase());
      }

      if (replacements.length === 0) continue;

      // Sort by position for left-to-right processing
      replacements.sort((a, b) => a.start - b.start);

      // Build new fragment
      const parent = textNode.parentNode!;
      const currentText = text;
      const fragment = document.createDocumentFragment();
      
      let lastIndex = 0;
      for (const r of replacements) {
        // Text before this match
        if (r.start > lastIndex) {
          fragment.appendChild(document.createTextNode(currentText.slice(lastIndex, r.start)));
        }
        
        // Create tooltip span with anchor ID for search navigation
        const span = document.createElement('span');
        const anchor = r.term.toLowerCase().replace(/[\s\/&]+/g, '-').replace(/[^a-z0-9\-@]/g, '');
        span.className = 'glossary-term';
        span.id = anchor;
        span.setAttribute('tabindex', '0');
        span.setAttribute('role', 'term');
        span.innerHTML = `${currentText.slice(r.start, r.end)}<span class="glossary-icon">ⓘ</span><span class="glossary-tip">${r.definition}</span>`;
        
        // Mobile tap toggle
        span.addEventListener('click', (e) => {
          e.stopPropagation();
          document.querySelectorAll('.glossary-term.active').forEach(el => {
            if (el !== span) el.classList.remove('active');
          });
          span.classList.toggle('active');
        });
        
        fragment.appendChild(span);
        lastIndex = r.end;
      }
      
      // Remaining text
      if (lastIndex < currentText.length) {
        fragment.appendChild(document.createTextNode(currentText.slice(lastIndex)));
      }
      
      parent.replaceChild(fragment, textNode);
    }
  }
}
