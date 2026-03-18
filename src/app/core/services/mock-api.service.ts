import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Product } from '../../shared/models/product.model';

let nextId = 100;
const MOCK_PRODUCTS: Product[] = [
  { id: '1', name: 'Organic Cotton T-Shirt', category: 'Textiles', price: 29.99, sustainabilityScore: 85, description: 'Made from 100% organic cotton' },
  { id: '2', name: 'Recycled Polyester Jacket', category: 'Outerwear', price: 89.99, sustainabilityScore: 72, description: 'Made from recycled PET bottles' },
  { id: '3', name: 'Bamboo Fiber Socks', category: 'Accessories', price: 12.99, sustainabilityScore: 90, description: 'Sustainable bamboo fiber blend' },
  { id: '4', name: 'Hemp Canvas Bag', category: 'Accessories', price: 34.99, sustainabilityScore: 95, description: 'Durable hemp canvas tote' },
  { id: '5', name: 'Linen Blend Pants', category: 'Textiles', price: 64.99, sustainabilityScore: 78, description: 'European linen blend' },
];

@Injectable({ providedIn: 'root' })
export class MockApiService {
  private products = [...MOCK_PRODUCTS];

  getProducts(): Observable<Product[]> {
    return of([...this.products]).pipe(delay(800));
  }

  getProduct(id: string): Observable<Product | undefined> {
    return of(this.products.find(p => p.id === id)).pipe(delay(500));
  }

  createProduct(product: Omit<Product, 'id'>): Observable<Product> {
    const newProduct = { ...product, id: String(++nextId) };
    this.products = [...this.products, newProduct];
    return of(newProduct).pipe(delay(600));
  }

  updateProduct(product: Product): Observable<Product> {
    this.products = this.products.map(p => p.id === product.id ? product : p);
    return of(product).pipe(delay(600));
  }

  deleteProduct(id: string): Observable<string> {
    this.products = this.products.filter(p => p.id !== id);
    return of(id).pipe(delay(400));
  }

  // Simulated search for RxJS lab
  search(term: string): Observable<Product[]> {
    return of(this.products).pipe(
      delay(300 + Math.random() * 700),
      map(products => products.filter(p =>
        p.name.toLowerCase().includes(term.toLowerCase()) ||
        p.category.toLowerCase().includes(term.toLowerCase())
      ))
    );
  }
}
