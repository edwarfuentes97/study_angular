import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="card">
      <div class="card-header">
        <span class="category">{{ product.category }}</span>
        <span class="price">{{ product.price | currency }}</span>
      </div>

      <h3 class="name">{{ product.name }}</h3>

      @if (product.description) {
        <p class="desc">{{ product.description }}</p>
      }

      <div class="sustainability">
        <div class="bar-label">
          <span>Sustainability</span>
          <span [class]="scoreClass">{{ product.sustainabilityScore }}/100</span>
        </div>
        <div class="bar-track">
          <div
            class="bar-fill"
            [style.width.%]="product.sustainabilityScore"
            [style.background]="barColor">
          </div>
        </div>
      </div>

      <div class="actions">
        <button class="btn" (click)="edit.emit(product)">✏️ Edit</button>
        <button class="btn btn-danger" (click)="delete.emit(product.id)">🗑 Delete</button>
      </div>
    </div>
  `,
  styles: `
    .card {
      background: var(--bg-card); border: 1px solid var(--border); border-radius: 10px;
      padding: 1.25rem; display: flex; flex-direction: column; gap: .75rem;
      transition: border-color .2s;
    }
    .card:hover { border-color: var(--accent-blue); }
    .card-header { display: flex; justify-content: space-between; align-items: center; }
    .category {
      font-size: .75rem; text-transform: uppercase; letter-spacing: .05em;
      color: var(--accent-purple); font-weight: 600;
    }
    .price { font-weight: 700; color: var(--accent-green); }
    .name { margin: 0; font-size: 1.1rem; color: var(--text); }
    .desc { margin: 0; color: var(--text-muted); font-size: .85rem; line-height: 1.4; }
    .sustainability { display: flex; flex-direction: column; gap: .3rem; }
    .bar-label {
      display: flex; justify-content: space-between; font-size: .8rem; color: var(--text-muted);
    }
    .bar-track {
      height: 6px; background: var(--border); border-radius: 3px; overflow: hidden;
    }
    .bar-fill {
      height: 100%; border-radius: 3px; transition: width .4s ease;
    }
    .score-high { color: var(--accent-green); font-weight: 600; }
    .score-mid { color: var(--accent-yellow); font-weight: 600; }
    .score-low { color: var(--accent-red); font-weight: 600; }
    .actions { display: flex; gap: .5rem; margin-top: auto; }
    .btn {
      flex: 1; padding: .4rem .75rem; border-radius: 6px; border: 1px solid var(--border);
      background: var(--bg-card); color: var(--text); cursor: pointer; font-size: .8rem;
      transition: background .15s;
    }
    .btn:hover { background: var(--border); }
    .btn-danger { border-color: var(--accent-red); color: var(--accent-red); }
    .btn-danger:hover { background: rgba(248, 81, 73, .15); }
  `,
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() edit = new EventEmitter<Product>();
  @Output() delete = new EventEmitter<string>();

  get scoreClass(): string {
    const s = this.product.sustainabilityScore;
    if (s >= 80) return 'score-high';
    if (s >= 50) return 'score-mid';
    return 'score-low';
  }

  get barColor(): string {
    const s = this.product.sustainabilityScore;
    if (s >= 80) return 'var(--accent-green)';
    if (s >= 50) return 'var(--accent-yellow)';
    return 'var(--accent-red)';
  }
}
