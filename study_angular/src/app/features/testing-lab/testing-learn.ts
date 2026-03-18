import { Component } from '@angular/core';
import { AutoGlossaryDirective } from '../../shared/directives/auto-glossary.directive';

@Component({
  selector: 'app-testing-learn',
  template: `
    <div class="cards" appAutoGlossary>
      <div class="card">
        <h3>1. TestBed &amp; ComponentFixture</h3>
        <p>
          TestBed es el entorno de testing de Angular. Configura un módulo de prueba con
          <code>configureTestingModule</code>, crea instancias de componentes con
          <code>createComponent</code> y dispara la detección de cambios con
          <code>detectChanges()</code>.
        </p>
        <pre><code>describe('MyComponent', () =&gt; &#123;
  let fixture: ComponentFixture&lt;MyComponent&gt;;
  let component: MyComponent;

  beforeEach(async () =&gt; &#123;
    await TestBed.configureTestingModule(&#123;
      imports: [AutoGlossaryDirective, MyComponent]
    &#125;).compileComponents();
    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  &#125;);

  it('should render title', () =&gt; &#123;
    const el = fixture.nativeElement.querySelector('h1');
    expect(el.textContent).toContain('Mi Título');
  &#125;);
&#125;);</code></pre>
      </div>

      <div class="card">
        <h3>2. fakeAsync &amp; tick</h3>
        <p>
          <code>fakeAsync</code> permite ejecutar código asíncrono de forma síncrona en tests.
          <code>tick(ms)</code> simula el paso del tiempo, avanzando timers y promesas pendientes.
        </p>
        <pre><code>it('should load data after delay', fakeAsync(() =&gt; &#123;
  component.loadData();
  tick(1000); // simula 1 segundo
  fixture.detectChanges();
  expect(component.data().length).toBeGreaterThan(0);
&#125;));</code></pre>
      </div>

      <div class="card">
        <h3>3. Jasmine Spies</h3>
        <p>
          Los spies interceptan llamadas a métodos. Usa <code>spyOn</code> para espiar,
          <code>returnValue</code> para devolver datos mock, <code>callFake</code> para
          lógica personalizada y <code>toHaveBeenCalledWith</code> para verificar argumentos.
        </p>
        <pre><code>it('should call service on init', () =&gt; &#123;
  const service = TestBed.inject(ProductService);
  spyOn(service, 'getAll').and.returnValue(of(mockProducts));
  component.ngOnInit();
  expect(service.getAll).toHaveBeenCalled();
&#125;);</code></pre>
      </div>

      <div class="card">
        <h3>4. MockStore (NgRx)</h3>
        <p>
          <code>provideMockStore</code> crea un store falso para tests. Usa
          <code>overrideSelector</code> para definir valores de selectores y
          <code>setState</code> para cambiar el estado completo.
        </p>
        <pre><code>beforeEach(() =&gt; &#123;
  TestBed.configureTestingModule(&#123;
    imports: [AutoGlossaryDirective, ProductListComponent],
    providers: [
      provideMockStore(&#123;
        selectors: [
          &#123; selector: selectAllProducts, value: mockProducts &#125;,
          &#123; selector: selectLoading, value: false &#125;,
        ]
      &#125;)
    ]
  &#125;);
  store = TestBed.inject(MockStore);
&#125;);</code></pre>
      </div>

      <div class="card">
        <h3>5. HttpTestingController</h3>
        <p>
          Permite testear llamadas HTTP sin un servidor real. Intercepta requests con
          <code>expectOne</code>, verifica método y URL, y responde con <code>flush</code>.
        </p>
        <pre><code>it('should fetch products', () =&gt; &#123;
  service.getProducts().subscribe(products =&gt; &#123;
    expect(products.length).toBe(2);
  &#125;);
  const req = httpMock.expectOne('/api/products');
  expect(req.request.method).toBe('GET');
  req.flush(mockProducts);
&#125;);</code></pre>
      </div>

      <div class="card">
        <h3>6. Marble Testing</h3>
        <p>
          Los diagramas marble representan flujos RxJS como strings ASCII.
          Cada <code>-</code> = 10ms, letras = emisiones, <code>|</code> = complete,
          <code>#</code> = error.
        </p>
        <pre><code>// Diagrama: --a--b--c|
// - = 10ms, a/b/c = emisiones, | = complete
it('should map values', () =&gt; &#123;
  const source = cold('--a--b--c|', &#123; a: 1, b: 2, c: 3 &#125;);
  const expected = '--x--y--z|';
  const result = source.pipe(map(v =&gt; v * 10));
  expectObservable(result).toBe(expected, &#123; x: 10, y: 20, z: 30 &#125;);
&#125;);</code></pre>
      </div>
    </div>
  `,
  styles: `
    :host { display: block; padding: 1rem 0; }
    .cards { display: flex; flex-direction: column; gap: 1rem; }
    .card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 8px; padding: 1.2rem; }
    .card h3 { margin: 0 0 0.6rem; font-size: 1.1rem; }
    .card p { color: var(--text-muted); line-height: 1.6; margin: 0 0 0.8rem; }
    pre { background: var(--bg-code, #161b22); border: 1px solid var(--border); border-radius: 6px; padding: 0.8rem; overflow-x: auto; font-size: 0.85rem; line-height: 1.5; }
    code { color: var(--text); }
  `
})
export class TestingLearnComponent {}
