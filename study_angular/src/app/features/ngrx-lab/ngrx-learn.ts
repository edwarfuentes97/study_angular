import { Component } from '@angular/core';
import { AutoGlossaryDirective } from '../../shared/directives/auto-glossary.directive';

@Component({
  selector: 'app-ngrx-learn',
  imports: [AutoGlossaryDirective],
  template: `
    <div class="learn-page" appAutoGlossary>
      <h2 class="page-title">📖 NgRx — Teoría y Conceptos</h2>

      <div class="card">
        <h3>🔴 ¿Qué es NgRx?</h3>
        <p>
          NgRx es la implementación del <strong>patrón Redux</strong> para Angular.
          Proporciona un flujo unidireccional de datos predecible mediante cinco piezas clave:
        </p>
        <ul>
          <li><strong>Store:</strong> Fuente única de verdad — un objeto inmutable que contiene todo el estado de la app.</li>
          <li><strong>Actions:</strong> Eventos que describen <em>qué pasó</em> (nunca cómo). Formato: <code>[Source] Event</code>.</li>
          <li><strong>Reducers:</strong> Funciones puras que reciben el estado actual + una action y retornan un <strong>nuevo</strong> estado.</li>
          <li><strong>Selectors:</strong> Funciones memoizadas que extraen y computan slices del Store.</li>
          <li><strong>Effects:</strong> Manejan side effects (HTTP, WebSocket, localStorage) fuera del reducer.</li>
        </ul>
        <pre><code class="language-typescript">// Ejemplo mínimo — Action
export const loadProducts = createAction('[Product Page] Load Products');

// Reducer
export const productReducer = createReducer(
  initialState,
  on(loadProducts, (state) => ({{ '{{' }} ...state, loading: true {{ '}}' }}))
);

// Selector
export const selectAllProducts = createSelector(
  selectProductState,
  (state) => state.products
);</code></pre>
      </div>

      <div class="card">
        <h3>🔄 Flujo de Datos</h3>
        <p>El ciclo completo de datos en NgRx sigue este camino:</p>
        <div class="flow-diagram">
          <span class="flow-step">Component</span>
          <span class="flow-arrow">→ dispatch(Action) →</span>
          <span class="flow-step">Reducer</span>
          <span class="flow-arrow">→</span>
          <span class="flow-step">Store</span>
          <span class="flow-arrow">→ Selector →</span>
          <span class="flow-step">Component</span>
        </div>
        <p>Para operaciones asíncronas, los <strong>Effects</strong> interceptan la action, realizan el side effect y despachan una nueva action con el resultado:</p>
        <pre><code class="language-typescript">// Effect — escucha loadProducts, llama al API, despacha success/failure
loadProducts$ = createEffect(() =>
  this.actions$.pipe(
    ofType(ProductActions.loadProducts),
    switchMap(() =>
      this.productService.getAll().pipe(
        map(products => ProductActions.loadProductsSuccess({{ '{' }} products {{ '}' }})),
        catchError(error => of(ProductActions.loadProductsFailure({{ '{' }} error {{ '}' }})))
      )
    )
  )
);</code></pre>
      </div>

      <div class="card">
        <h3>⚖️ ¿Cuándo usar NgRx vs Servicios simples?</h3>
        <table class="compare-table">
          <thead>
            <tr>
              <th>Criterio</th>
              <th>Servicio con BehaviorSubject</th>
              <th>NgRx Store</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Complejidad del estado</td>
              <td>Bajo — pocos datos compartidos</td>
              <td>Alto — muchos componentes leen/escriben</td>
            </tr>
            <tr>
              <td>Debugging</td>
              <td>console.log manual</td>
              <td>Redux DevTools, time-travel</td>
            </tr>
            <tr>
              <td>Boilerplate</td>
              <td>Mínimo</td>
              <td>Actions + Reducer + Selectors + Effects</td>
            </tr>
            <tr>
              <td>Testabilidad</td>
              <td>Buena</td>
              <td>Excelente — cada pieza es una función pura</td>
            </tr>
            <tr>
              <td>Equipo grande</td>
              <td>Difícil mantener consistencia</td>
              <td>Patrón único, convenciones claras</td>
            </tr>
            <tr>
              <td>Side effects</td>
              <td>Dentro del servicio</td>
              <td>Aislados en Effects</td>
            </tr>
          </tbody>
        </table>
        <p><strong>Regla práctica:</strong> Si tu app tiene más de 3 features que comparten estado, NgRx vale la pena.</p>
      </div>

      <div class="card">
        <h3>📦 &#64;ngrx/entity — EntityAdapter</h3>
        <p>
          <code>EntityAdapter</code> normaliza colecciones en un formato <code>{{ '{' }} ids: [], entities: {{ '{' }}{{ '}' }} {{ '}' }}</code>,
          eliminando arrays anidados y haciendo lookups O(1) por ID.
        </p>
        <pre><code class="language-typescript">import {{ '{' }} createEntityAdapter, EntityState {{ '}' }} from '&#64;ngrx/entity';

export interface Product {{ '{' }}
  id: string;
  name: string;
  sustainabilityScore: number;
{{ '}' }}

// Crear el adapter
export const productAdapter = createEntityAdapter&lt;Product&gt;();

// Estado inicial normalizado
export interface ProductState extends EntityState&lt;Product&gt; {{ '{' }}
  loading: boolean;
  error: string | null;
  selectedId: string | null;
{{ '}' }}

export const initialState: ProductState = productAdapter.getInitialState({{ '{' }}
  loading: false,
  error: null,
  selectedId: null,
{{ '}' }});

// En el reducer — operaciones CRUD limpias
on(loadProductsSuccess, (state, {{ '{' }} products {{ '}' }}) =>
  productAdapter.setAll(products, {{ '{' }} ...state, loading: false {{ '}' }})
),
on(addProductSuccess, (state, {{ '{' }} product {{ '}' }}) =>
  productAdapter.addOne(product, state)
),</code></pre>
        <p><strong>¿Por qué normalizar?</strong> Evita duplicados, simplifica updates, y los selectors son más eficientes.</p>
      </div>

      <div class="card">
        <h3>⚡ Standalone Integration (Angular 20+)</h3>
        <p>
          En Angular moderno no necesitas <code>StoreModule.forRoot()</code>.
          Usa las funciones <code>provide*</code> directamente:
        </p>
        <pre><code class="language-typescript">// app.config.ts — Setup global
export const appConfig: ApplicationConfig = {{ '{' }}
  providers: [
    provideStore(),          // Store vacío raíz
    provideEffects(),        // Effects raíz
    provideStoreDevtools({{ '{' }} maxAge: 25 {{ '}' }}),
  ]
{{ '}' }};

// Feature routes — lazy loaded con su propio state
export const NGRX_LAB_ROUTES: Routes = [{{ '{' }}
  path: '',
  providers: [
    provideState('products', productReducer),   // Feature state
    provideEffects(ProductEffects),              // Feature effects
  ],
  loadComponent: () => import('./ngrx-layout').then(m => m.NgrxLayoutComponent),
  children: [...]
{{ '}' }}];</code></pre>
        <p>Cada feature registra su estado de forma lazy — solo se carga cuando el usuario navega ahí.</p>
      </div>
    </div>
  `,
  styles: `
    .learn-page {
      max-width: 900px;
      margin: 0 auto;
      padding: 1rem 0;
    }
    .page-title {
      font-size: 1.3rem;
      margin-bottom: 1.2rem;
      color: var(--text);
    }
    .card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 1.4rem;
      margin-bottom: 1rem;
    }
    .card h3 {
      font-size: 1.1rem;
      margin-bottom: 0.8rem;
      color: var(--accent-blue);
    }
    .card p {
      color: var(--text);
      line-height: 1.6;
      margin-bottom: 0.6rem;
    }
    .card ul {
      padding-left: 1.4rem;
      color: var(--text);
      line-height: 1.7;
      margin-bottom: 0.8rem;
    }
    .card ul li { margin-bottom: 0.3rem; }
    .card strong { color: var(--accent-purple); }
    .card code {
      background: var(--bg-code, rgba(110,118,129,0.15));
      padding: 0.15rem 0.4rem;
      border-radius: 4px;
      font-size: 0.85rem;
    }
    pre {
      background: var(--bg-code, #161b22);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 1rem;
      overflow-x: auto;
      margin: 0.8rem 0;
    }
    pre code {
      background: none;
      padding: 0;
      font-size: 0.82rem;
      line-height: 1.5;
      color: var(--text);
    }
    .flow-diagram {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.3rem;
      margin: 0.8rem 0;
      font-size: 0.9rem;
    }
    .flow-step {
      background: var(--accent-blue);
      color: #fff;
      padding: 0.3rem 0.8rem;
      border-radius: 6px;
      font-weight: 600;
    }
    .flow-arrow { color: var(--text-muted); font-weight: 500; }
    .compare-table {
      width: 100%;
      border-collapse: collapse;
      margin: 0.8rem 0;
      font-size: 0.85rem;
    }
    .compare-table th,
    .compare-table td {
      border: 1px solid var(--border);
      padding: 0.5rem 0.7rem;
      text-align: left;
      color: var(--text);
    }
    .compare-table th {
      background: rgba(88,166,255,0.1);
      font-weight: 600;
    }
    .compare-table tr:hover td {
      background: rgba(88,166,255,0.04);
    }
    @media (max-width: 600px) {
      .flow-diagram { flex-direction: column; align-items: flex-start; }
      .compare-table { font-size: 0.78rem; }
    }
  `
})
export class NgrxLearnComponent {}
