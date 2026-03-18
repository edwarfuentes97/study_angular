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
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
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
