import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="backdrop" (click)="cancel.emit()"></div>
    <form class="form-card" [formGroup]="form" (ngSubmit)="onSubmit()">
      <h3>{{ product ? 'Edit Product' : 'New Product' }}</h3>

      <label>
        <span>Name *</span>
        <input formControlName="name" placeholder="Product name" />
        @if (form.controls.name.touched && form.controls.name.invalid) {
          <span class="error">Name is required</span>
        }
      </label>

      <label>
        <span>Category</span>
        <input formControlName="category" placeholder="e.g. Textiles" />
      </label>

      <div class="row">
        <label class="half">
          <span>Price *</span>
          <input formControlName="price" type="number" step="0.01" min="0" placeholder="0.00" />
          @if (form.controls.price.touched && form.controls.price.invalid) {
            <span class="error">Min 0</span>
          }
        </label>

        <label class="half">
          <span>Sustainability (0–100) *</span>
          <input formControlName="sustainabilityScore" type="number" min="0" max="100" placeholder="0" />
          @if (form.controls.sustainabilityScore.touched && form.controls.sustainabilityScore.invalid) {
            <span class="error">0–100</span>
          }
        </label>
      </div>

      <label>
        <span>Description</span>
        <textarea formControlName="description" rows="3" placeholder="Optional description"></textarea>
      </label>

      <div class="actions">
        <button type="button" class="btn" (click)="cancel.emit()">Cancel</button>
        <button type="submit" class="btn btn-primary" [disabled]="form.invalid">
          {{ product ? 'Update' : 'Create' }}
        </button>
      </div>
    </form>
  `,
  styles: `
    .backdrop {
      position: fixed; inset: 0; background: rgba(0,0,0,.55); z-index: 100;
    }
    .form-card {
      position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
      z-index: 101; background: var(--bg-card); border: 1px solid var(--border);
      border-radius: 12px; padding: 1.5rem; width: 420px; max-width: 92vw;
      display: flex; flex-direction: column; gap: 1rem;
    }
    h3 { margin: 0; color: var(--text); }
    label {
      display: flex; flex-direction: column; gap: .25rem; font-size: .85rem; color: var(--text-muted);
    }
    input, textarea {
      background: var(--bg); border: 1px solid var(--border); border-radius: 6px;
      padding: .5rem .75rem; color: var(--text); font-size: .9rem; outline: none;
      transition: border-color .15s;
    }
    input:focus, textarea:focus { border-color: var(--accent-blue); }
    textarea { resize: vertical; font-family: inherit; }
    .error { color: var(--accent-red); font-size: .75rem; }
    .row { display: flex; gap: 1rem; }
    .half { flex: 1; }
    .actions { display: flex; justify-content: flex-end; gap: .5rem; margin-top: .5rem; }
    .btn {
      padding: .5rem 1rem; border-radius: 6px; border: 1px solid var(--border);
      background: var(--bg-card); color: var(--text); cursor: pointer; font-size: .85rem;
      transition: background .15s;
    }
    .btn:hover { background: var(--border); }
    .btn-primary { background: var(--accent-blue); border-color: var(--accent-blue); color: #fff; }
    .btn-primary:hover { opacity: .85; background: var(--accent-blue); }
    .btn-primary:disabled { opacity: .4; cursor: not-allowed; }
  `,
})
export class ProductFormComponent implements OnInit {
  @Input() product?: Product;
  @Output() save = new EventEmitter<Omit<Product, 'id'> | Product>();
  @Output() cancel = new EventEmitter<void>();

  form = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    category: new FormControl('', { nonNullable: true }),
    price: new FormControl(0, { nonNullable: true, validators: [Validators.required, Validators.min(0)] }),
    sustainabilityScore: new FormControl(50, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(0), Validators.max(100)],
    }),
    description: new FormControl('', { nonNullable: true }),
  });

  ngOnInit(): void {
    if (this.product) {
      this.form.patchValue({
        name: this.product.name,
        category: this.product.category,
        price: this.product.price,
        sustainabilityScore: this.product.sustainabilityScore,
        description: this.product.description ?? '',
      });
    }
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    const value = this.form.getRawValue();
    if (this.product) {
      this.save.emit({ ...value, id: this.product.id });
    } else {
      this.save.emit(value);
    }
  }
}
