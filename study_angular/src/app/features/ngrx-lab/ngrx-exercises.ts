import { Component } from '@angular/core';

@Component({
  selector: 'app-ngrx-exercises',
  template: `
    <div class="exercises-page">
      <h2 class="page-title">🧪 NgRx — Laboratorio</h2>
      <p class="page-desc">Completa cada ejercicio en orden. Cada uno construye sobre el anterior.</p>

      <div class="card exercise">
        <h3>1️⃣ Ejercicio: Crear las Actions</h3>
        <p>
          Crea actions para un CRUD de productos siguiendo el patrón
          <code>[Source] Event</code>. Incluye actions para Load, Create, Update,
          Delete con Success/Failure para cada una.
        </p>
        <div class="criteria">
          <h4>✅ Criterios de aceptación</h4>
          <ul>
            <li>Archivo <code>product.actions.ts</code> con al menos 10 actions</li>
            <li>Cada action usa <code>createAction</code> con el patrón <code>[Product Page] Load Products</code></li>
            <li>Actions de éxito reciben <code>props&lt;{{ '{' }} products: Product[] {{ '}' }}&gt;()</code></li>
            <li>Actions de error reciben <code>props&lt;{{ '{' }} error: string {{ '}' }}&gt;()</code></li>
          </ul>
        </div>
        <div class="hint">
          💡 <strong>Tip:</strong> Agrupa las actions en un namespace usando
          <code>createActionGroup()</code> de NgRx 15+ para menos boilerplate.
        </div>
      </div>

      <div class="card exercise">
        <h3>2️⃣ Ejercicio: Implementar el Reducer</h3>
        <p>
          Usa <code>createEntityAdapter</code> para normalizar el estado.
          Implementa <code>on()</code> handlers para cada action. El estado debe
          incluir <code>loading</code>, <code>error</code>, y <code>selectedId</code>.
        </p>
        <div class="criteria">
          <h4>✅ Criterios de aceptación</h4>
          <ul>
            <li>Estado extiende <code>EntityState&lt;Product&gt;</code></li>
            <li>Propiedades extra: <code>loading: boolean</code>, <code>error: string | null</code>, <code>selectedId: string | null</code></li>
            <li>Load → <code>loading: true</code>, Success → <code>setAll + loading: false</code></li>
            <li>Create/Update/Delete success usan métodos del adapter (<code>addOne</code>, <code>updateOne</code>, <code>removeOne</code>)</li>
            <li>Failure → <code>error</code> se actualiza, <code>loading: false</code></li>
          </ul>
        </div>
        <div class="hint">
          💡 <strong>Tip:</strong> <code>productAdapter.getInitialState({{ '{' }} loading: false, error: null, selectedId: null {{ '}' }})</code>
          combina el estado de la entidad con tus propiedades custom.
        </div>
      </div>

      <div class="card exercise">
        <h3>3️⃣ Ejercicio: Crear Effects</h3>
        <p>
          Implementa effects que: escuchen <code>loadProducts</code> y llamen al
          <code>MockApiService</code>, usen <code>switchMap</code> para load y
          <code>exhaustMap</code> para create, manejen errores con <code>catchError</code>.
        </p>
        <div class="criteria">
          <h4>✅ Criterios de aceptación</h4>
          <ul>
            <li>Effect <code>loadProducts$</code> usa <code>switchMap</code> (cancela requests previos)</li>
            <li>Effect <code>createProduct$</code> usa <code>exhaustMap</code> (ignora clicks duplicados)</li>
            <li>Cada effect despacha action de Success o Failure</li>
            <li><code>catchError</code> retorna <code>of(failureAction)</code> sin romper el stream</li>
            <li>Inyecta servicios con <code>inject()</code> en lugar de constructor</li>
          </ul>
        </div>
        <div class="hint">
          💡 <strong>Tip:</strong> Usa la API funcional de effects:
          <code>createEffect((actions$ = inject(Actions)) => ...)</code>
        </div>
      </div>

      <div class="card exercise">
        <h3>4️⃣ Ejercicio: Selectors memoizados</h3>
        <p>
          Crea selectors compuestos: <code>selectAll</code>, <code>selectById(id)</code>,
          <code>selectHighSustainability</code> (score ≥ 80),
          <code>selectProductsWithStatus</code> (loading + products combinados).
        </p>
        <div class="criteria">
          <h4>✅ Criterios de aceptación</h4>
          <ul>
            <li>Feature selector: <code>selectProductState</code></li>
            <li><code>selectAllProducts</code> usa los selectores del adapter</li>
            <li><code>selectProductById</code> es un selector factory que recibe <code>id</code></li>
            <li><code>selectHighSustainability</code> filtra productos con <code>sustainabilityScore >= 80</code></li>
            <li><code>selectProductsWithStatus</code> combina <code>selectAll</code> + <code>selectLoading</code> en un ViewModel</li>
          </ul>
        </div>
        <div class="hint">
          💡 <strong>Tip:</strong> Para selectores parametrizados usa
          <code>createSelector(selectEntities, (entities) => entities[id])</code>
          dentro de una función que reciba el id.
        </div>
      </div>

      <div class="card exercise">
        <h3>5️⃣ Ejercicio: Smart/Dumb Components</h3>
        <p>
          <code>ProductListComponent</code> como Smart (dispatch + selectors),
          <code>ProductCardComponent</code> como Dumb (solo <code>&#64;Input</code>/
          <code>&#64;Output</code>, OnPush).
        </p>
        <div class="criteria">
          <h4>✅ Criterios de aceptación</h4>
          <ul>
            <li>Smart component inyecta <code>Store</code> y usa <code>store.select()</code></li>
            <li>Smart despacha actions: <code>store.dispatch(loadProducts())</code></li>
            <li>Dumb component tiene solo <code>&#64;Input product</code> y <code>&#64;Output delete/edit</code></li>
            <li>Dumb usa <code>changeDetection: ChangeDetectionStrategy.OnPush</code></li>
            <li>Async pipe o <code>toSignal()</code> en el template del Smart</li>
          </ul>
        </div>
        <div class="hint">
          💡 <strong>Tip:</strong> Con signals de Angular 20 puedes usar
          <code>this.store.selectSignal(selectAll)</code> para evitar el async pipe.
        </div>
      </div>

      <div class="card exercise">
        <h3>6️⃣ Ejercicio: DevTools</h3>
        <p>
          Abre Redux DevTools en el navegador, observa el state tree, haz time travel
          entre acciones.
        </p>
        <div class="criteria">
          <h4>✅ Criterios de aceptación</h4>
          <ul>
            <li>Extension Redux DevTools instalada en Chrome/Firefox</li>
            <li>Puedes ver el state tree completo con la feature <code>products</code></li>
            <li>Al despachar actions aparecen en el log con su payload</li>
            <li>Time-travel: saltar entre actions muestra cambios en la UI</li>
            <li><code>provideStoreDevtools({{ '{' }} maxAge: 25 {{ '}' }})</code> está en <code>app.config.ts</code></li>
          </ul>
        </div>
        <div class="hint">
          💡 <strong>Tip:</strong> Usa <code>maxAge</code> para limitar el historial y no consumir memoria excesiva.
        </div>
      </div>
    </div>
  `,
  styles: `
    .exercises-page {
      max-width: 900px;
      margin: 0 auto;
      padding: 1rem 0;
    }
    .page-title {
      font-size: 1.3rem;
      margin-bottom: 0.4rem;
      color: var(--text);
    }
    .page-desc {
      color: var(--text-muted);
      margin-bottom: 1.2rem;
      font-size: 0.9rem;
    }
    .card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 1.4rem;
      margin-bottom: 1rem;
    }
    .card h3 {
      font-size: 1.05rem;
      margin-bottom: 0.7rem;
      color: var(--accent-blue);
    }
    .card p {
      color: var(--text);
      line-height: 1.6;
      margin-bottom: 0.7rem;
    }
    .card code {
      background: var(--bg-code, rgba(110,118,129,0.15));
      padding: 0.15rem 0.4rem;
      border-radius: 4px;
      font-size: 0.84rem;
    }
    .criteria {
      background: rgba(88,166,255,0.06);
      border: 1px solid rgba(88,166,255,0.15);
      border-radius: 8px;
      padding: 0.8rem 1rem;
      margin: 0.7rem 0;
    }
    .criteria h4 {
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
      color: var(--accent-blue);
    }
    .criteria ul {
      padding-left: 1.2rem;
      color: var(--text);
      font-size: 0.88rem;
      line-height: 1.7;
    }
    .criteria li { margin-bottom: 0.2rem; }
    .hint {
      background: rgba(63,185,80,0.08);
      border-left: 3px solid var(--accent-green, #3fb950);
      border-radius: 0 8px 8px 0;
      padding: 0.7rem 1rem;
      margin-top: 0.7rem;
      color: var(--text);
      font-size: 0.88rem;
      line-height: 1.5;
    }
    .hint strong { color: var(--accent-green, #3fb950); }
    @media (max-width: 600px) {
      .card { padding: 1rem; }
    }
  `
})
export class NgrxExercisesComponent {}
