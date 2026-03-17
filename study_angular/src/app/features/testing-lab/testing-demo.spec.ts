import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { of, delay, throwError, Observable } from 'rxjs';
import { TestingDemoComponent } from './testing-demo';
import { MockApiService } from '../../core/services/mock-api.service';
import { Product } from '../../shared/models/product.model';

describe('TestingDemoComponent', () => {
  let component: TestingDemoComponent;
  let fixture: ComponentFixture<TestingDemoComponent>;
  let mockApiService: jasmine.SpyObj<MockApiService>;

  const mockProducts: Product[] = [
    { id: '1', name: 'Organic Cotton T-Shirt', category: 'Textiles', price: 29.99, sustainabilityScore: 85 },
    { id: '2', name: 'Recycled Polyester Jacket', category: 'Outerwear', price: 89.99, sustainabilityScore: 72 },
  ];

  beforeEach(async () => {
    mockApiService = jasmine.createSpyObj<MockApiService>('MockApiService', [
      'getProducts',
      'getProduct',
      'createProduct',
      'updateProduct',
      'deleteProduct',
      'search',
    ]);

    // Default: return empty observable (tests override as needed)
    mockApiService.getProducts.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      imports: [TestingDemoComponent],
      providers: [
        { provide: MockApiService, useValue: mockApiService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // ── Test 1: Component creation ─────────────────────────────
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // ── Test 2: Counter increment / decrement / reset ──────────
  describe('Counter', () => {
    it('should start at 0', () => {
      expect(component.counter()).toBe(0);
    });

    it('should increment the counter', () => {
      component.increment();
      expect(component.counter()).toBe(1);

      component.increment();
      component.increment();
      expect(component.counter()).toBe(3);
    });

    it('should decrement the counter', () => {
      component.decrement();
      expect(component.counter()).toBe(-1);
    });

    it('should reset the counter to 0', () => {
      component.increment();
      component.increment();
      component.increment();
      expect(component.counter()).toBe(3);

      component.reset();
      expect(component.counter()).toBe(0);
    });

    it('should display the counter value in the template', () => {
      component.increment();
      component.increment();
      fixture.detectChanges();

      const counterEl: HTMLElement = fixture.nativeElement.querySelector('[data-testid="counter-value"]');
      expect(counterEl.textContent?.trim()).toBe('2');
    });
  });

  // ── Test 3: Service mock with jasmine spy ──────────────────
  describe('Product loading with mocked service', () => {
    it('should call MockApiService.getProducts when loadProducts is called', () => {
      mockApiService.getProducts.and.returnValue(of(mockProducts));
      component.loadProducts();
      expect(mockApiService.getProducts).toHaveBeenCalledTimes(1);
    });

    it('should populate products after successful load', () => {
      mockApiService.getProducts.and.returnValue(of(mockProducts));
      component.loadProducts();
      expect(component.products()).toEqual(mockProducts);
      expect(component.loading()).toBeFalse();
      expect(component.error()).toBeNull();
    });

    it('should render product rows in the template', () => {
      mockApiService.getProducts.and.returnValue(of(mockProducts));
      component.loadProducts();
      fixture.detectChanges();

      const rows = fixture.nativeElement.querySelectorAll('[data-testid="product-row"]');
      expect(rows.length).toBe(2);
      expect(rows[0].textContent).toContain('Organic Cotton T-Shirt');
    });

    it('should show empty message when no products are loaded', () => {
      fixture.detectChanges();
      const emptyEl: HTMLElement = fixture.nativeElement.querySelector('[data-testid="empty-message"]');
      expect(emptyEl).toBeTruthy();
      expect(emptyEl.textContent).toContain('No products loaded');
    });

    it('should set error on service failure', () => {
      mockApiService.getProducts.and.returnValue(throwError(() => new Error('Network error')));
      component.loadProducts();
      expect(component.error()).toBe('Network error');
      expect(component.loading()).toBeFalse();
    });
  });

  // ── Test 4: Async testing with fakeAsync / tick ────────────
  describe('Async behavior with fakeAsync', () => {
    it('should show loading state and then products after delay', fakeAsync(() => {
      // Simulate a delayed response (800ms like the real service)
      mockApiService.getProducts.and.returnValue(
        of(mockProducts).pipe(delay(800))
      );

      component.loadProducts();
      expect(component.loading()).toBeTrue();
      expect(component.products().length).toBe(0);

      fixture.detectChanges();
      const loadingEl = fixture.nativeElement.querySelector('[data-testid="loading-indicator"]');
      expect(loadingEl).toBeTruthy();

      // Fast-forward time
      tick(800);
      expect(component.loading()).toBeFalse();
      expect(component.products()).toEqual(mockProducts);

      fixture.detectChanges();
      const rows = fixture.nativeElement.querySelectorAll('[data-testid="product-row"]');
      expect(rows.length).toBe(2);
    }));

    it('should show error after async failure', fakeAsync(() => {
      mockApiService.getProducts.and.returnValue(
        new Observable(subscriber => {
          setTimeout(() => {
            subscriber.error(new Error('Timeout'));
          }, 500);
        })
      );

      component.loadProducts();
      expect(component.loading()).toBeTrue();

      tick(500);
      expect(component.loading()).toBeFalse();
      expect(component.error()).toBe('Timeout');

      fixture.detectChanges();
      const errorEl: HTMLElement = fixture.nativeElement.querySelector('[data-testid="error-message"]');
      expect(errorEl).toBeTruthy();
      expect(errorEl.textContent).toContain('Timeout');
    }));
  });

  // ── TODO: NgRx test examples ───────────────────────────────
  // TODO: Add NgRx reducer test example
  //   describe('Product Reducer', () => {
  //     it('should set loading on loadProducts action', () => { ... });
  //     it('should populate entities on loadProductsSuccess', () => { ... });
  //   });

  // TODO: Add NgRx selector test example
  //   describe('Product Selectors', () => {
  //     it('should select all products', () => { ... });
  //     it('should select loading state', () => { ... });
  //   });

  // TODO: Add NgRx effects test example
  //   describe('Product Effects', () => {
  //     it('should dispatch loadProductsSuccess on successful API call', () => { ... });
  //     it('should dispatch loadProductsFailure on API error', () => { ... });
  //   });
});
