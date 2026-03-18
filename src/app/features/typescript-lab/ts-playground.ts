import { Component, signal, computed } from '@angular/core';
import { Product } from '../../shared/models/product.model';

type GenericExample = 'Product' | 'User' | 'Order';

interface User {
  id: string;
  name: string;
  email: string;
}

interface Order {
  id: string;
  productId: string;
  quantity: number;
  total: number;
}

type LoadingState = { status: 'loading' };
type SuccessState<T> = { status: 'success'; data: T };
type ErrorState = { status: 'error'; message: string };
type ApiResponse = LoadingState | SuccessState<Product[]> | ErrorState;

type UtilityDemo = 'Partial' | 'Pick' | 'Omit' | 'Record';

@Component({
  templateUrl: './ts-playground.html',
  styleUrl: './ts-playground.css'
})
export class TsPlaygroundComponent {
  protected readonly genericTypes: GenericExample[] = ['Product', 'User', 'Order'];
  protected readonly utilityTypes: UtilityDemo[] = ['Partial', 'Pick', 'Omit', 'Record'];

  protected readonly selectedGeneric = signal<GenericExample>('Product');
  protected readonly currentState = signal<'loading' | 'success' | 'error'>('loading');
  protected readonly selectedUtility = signal<UtilityDemo>('Partial');

  protected readonly genericResolution = computed(() => {
    const map: Record<GenericExample, string> = {
      Product: `{
  add(item: Product): void;
  getAll(): Product[];            // → { id, name, category, price, sustainabilityScore, description? }
  findById(pred: (item: Product) => boolean): Product | undefined;
}`,
      User: `{
  add(item: User): void;
  getAll(): User[];               // → { id, name, email }
  findById(pred: (item: User) => boolean): User | undefined;
}`,
      Order: `{
  add(item: Order): void;
  getAll(): Order[];              // → { id, productId, quantity, total }
  findById(pred: (item: Order) => boolean): Order | undefined;
}`,
    };
    return map[this.selectedGeneric()];
  });

  protected readonly stateTypeInfo = computed(() => {
    const state = this.currentState();
    switch (state) {
      case 'loading':
        return {
          typeName: 'LoadingState',
          properties: 'status',
          value: JSON.stringify({ status: 'loading' } satisfies LoadingState, null, 2),
        };
      case 'success':
        return {
          typeName: 'SuccessState<Product[]>',
          properties: 'status, data',
          value: JSON.stringify(
            {
              status: 'success',
              data: [{ id: '1', name: 'Organic Cotton T-Shirt', category: 'Textiles', price: 29.99, sustainabilityScore: 85 }],
            } as SuccessState<Product[]>,
            null, 2,
          ),
        };
      case 'error':
        return {
          typeName: 'ErrorState',
          properties: 'status, message',
          value: JSON.stringify({ status: 'error', message: 'Network timeout' } satisfies ErrorState, null, 2),
        };
    }
  });

  protected readonly utilityInfo = computed(() => {
    const map: Record<UtilityDemo, { expression: string; result: string; useCase: string }> = {
      Partial: {
        expression: 'Partial<Product>',
        result: `{
  id?: string;
  name?: string;
  category?: string;
  price?: number;
  sustainabilityScore?: number;
  description?: string;
}`,
        useCase: 'Useful for update/patch operations where only some fields are provided.',
      },
      Pick: {
        expression: "Pick<Product, 'name' | 'price'>",
        result: `{
  name: string;
  price: number;
}`,
        useCase: 'Extract a subset of properties — great for DTOs or form models.',
      },
      Omit: {
        expression: "Omit<Product, 'id'>",
        result: `{
  name: string;
  category: string;
  price: number;
  sustainabilityScore: number;
  description?: string;
}`,
        useCase: 'Remove properties — perfect for creation payloads where the server assigns the id.',
      },
      Record: {
        expression: 'Record<string, Product>',
        result: `{
  [key: string]: Product;
}
// Example:
// { "1": { id: "1", name: "Organic Cotton T-Shirt", ... } }`,
        useCase: 'Dictionary/map pattern — NgRx EntityState uses this internally.',
      },
    };
    return map[this.selectedUtility()];
  });
}
