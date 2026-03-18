import { Component } from '@angular/core';

@Component({
  selector: 'app-testing-exercises',
  template: `
    <div class="cards">
      <div class="card">
        <h3>1. Component Test</h3>
        <p>
          Testa el TestingDemoComponent: verifica render inicial, click en botones
          cambia el contador, async carga de productos.
        </p>
        <ul class="criteria">
          <li>Test de render inicial pasa</li>
          <li>Test de click pasa</li>
          <li>Test async con fakeAsync pasa</li>
        </ul>
        <div class="tip">Usa fixture.debugElement.query(By.css('button')).triggerEventHandler('click')</div>
      </div>

      <div class="card">
        <h3>2. NgRx Reducer</h3>
        <p>
          Testa productReducer: que loadProductsSuccess agregue productos, que
          deleteProductSuccess elimine, que loadProducts setee loading=true.
        </p>
        <ul class="criteria">
          <li>3 tests de reducer pasando</li>
          <li>Estado verificado después de cada acción</li>
        </ul>
        <div class="tip">Los reducers son funciones puras: estado + acción = nuevo estado. Fácil de testear.</div>
      </div>

      <div class="card">
        <h3>3. NgRx Selectors</h3>
        <p>
          Testa selectAllProducts, selectHighSustainability con estado mock.
        </p>
        <ul class="criteria">
          <li>Selectores retornan datos correctos del estado mock</li>
          <li>Filtros funcionan</li>
        </ul>
        <div class="tip">Usa projector() para testear selectores con createSelector</div>
      </div>

      <div class="card">
        <h3>4. NgRx Effects</h3>
        <p>
          Testa loadProducts$ effect: que llame a MockApiService y despache success/failure.
        </p>
        <ul class="criteria">
          <li>Effect testado con provideMockActions</li>
          <li>Success y failure cubiertos</li>
        </ul>
        <div class="tip">Usa provideMockActions(() =&gt; actions$) con un Subject para emitir acciones</div>
      </div>

      <div class="card">
        <h3>5. Service Test</h3>
        <p>
          Testa MockApiService con HttpTestingController (o directamente): verifica
          getProducts, createProduct, search.
        </p>
        <ul class="criteria">
          <li>3+ tests de servicio pasando</li>
          <li>HTTP mock o spy correctos</li>
        </ul>
        <div class="tip">Para servicios sin HTTP real, puedes testear directamente sin HttpTestingController</div>
      </div>
    </div>
  `,
  styles: `
    :host { display: block; padding: 1rem 0; }
    .cards { display: flex; flex-direction: column; gap: 1rem; }
    .card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 8px; padding: 1.2rem; }
    .card h3 { margin: 0 0 0.4rem; font-size: 1.05rem; }
    .card p { color: var(--text-muted); line-height: 1.6; margin: 0 0 0.6rem; }
    .criteria { list-style: none; padding: 0; margin: 0 0 0.6rem; }
    .criteria li::before { content: '✅ '; }
    .criteria li { color: var(--text-muted); padding: 0.15rem 0; font-size: 0.9rem; }
    .tip { border-left: 3px solid var(--accent-green); background: rgba(63,185,80,0.08); padding: 0.6rem 0.8rem; border-radius: 0 6px 6px 0; font-size: 0.88rem; color: var(--text-muted); }
    .tip::before { content: '💡 '; }
  `
})
export class TestingExercisesComponent {}
