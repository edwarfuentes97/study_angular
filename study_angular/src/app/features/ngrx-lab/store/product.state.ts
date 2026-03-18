import { EntityState } from '@ngrx/entity';
import { Product } from '../../../shared/models/product.model';

export interface ProductState extends EntityState<Product> {
  selectedId: string | null;
  loading: boolean;
  error: string | null;
}
