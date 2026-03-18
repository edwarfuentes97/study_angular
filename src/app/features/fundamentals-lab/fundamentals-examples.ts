import { Component, Directive, ElementRef, HostListener, inject, Input, Pipe, PipeTransform, signal, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// === Custom Attribute Directive ===
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = '#58a6ff';
  private el = inject(ElementRef);

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.appHighlight;
    this.el.nativeElement.style.transition = 'background-color 0.2s';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }
}

// === Custom Pure Pipe ===
@Pipe({ name: 'filterBy' })
export class FilterByPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    if (!value) return items;
    return items.filter(item => item[field]?.toLowerCase().includes(value.toLowerCase()));
  }
}

// === Custom Impure Pipe ===
@Pipe({ name: 'sortBy', pure: false })
export class SortByPipe implements PipeTransform {
  transform(items: any[], field: string): any[] {
    return [...items].sort((a, b) => (a[field] > b[field] ? 1 : -1));
  }
}

@Component({
  imports: [CommonModule, FormsModule, HighlightDirective, FilterByPipe, SortByPipe],
  templateUrl: './fundamentals-examples.html',
  styleUrl: './fundamentals-examples.css',
})
export class FundamentalsExamplesComponent {
  // Directive demo
  highlightColor = '#3fb950';

  // Pipe demo
  today = new Date();
  price = 1234.5;
  searchTerm = '';
  fruits = [
    { name: 'Manzana', category: 'Frutas' },
    { name: 'Banana', category: 'Frutas' },
    { name: 'Zanahoria', category: 'Verduras' },
    { name: 'Brócoli', category: 'Verduras' },
    { name: 'Mango', category: 'Frutas' },
  ];

  // Lifecycle demo
  showChild = true;
  childInput = 'Hello';
  lifecycleLog = signal<string[]>([]);

  addLog(msg: string) {
    this.lifecycleLog.update(logs => [...logs, msg]);
  }
  clearLog() {
    this.lifecycleLog.set([]);
  }

  // ViewEncapsulation demo
  selectedEncapsulation = 'Emulated';
}
