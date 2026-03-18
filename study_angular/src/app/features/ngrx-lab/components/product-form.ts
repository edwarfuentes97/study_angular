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
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
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
