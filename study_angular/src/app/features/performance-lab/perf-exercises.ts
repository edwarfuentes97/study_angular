import { Component } from '@angular/core';

@Component({
  selector: 'app-perf-exercises',
  template: `
    <div class="cards">
      <div class="card">
        <h3>1. &#64;defer — Lazy Loading Declarativo</h3>
        <p>
          Crea un componente pesado (chart/tabla grande). Cárgalo con <code>&#64;defer (on viewport)</code>.
          Agrega placeholder y loading. Prueba otros triggers: <code>on hover</code>,
          <code>on timer(3s)</code>, <code>when condition</code>.
        </p>
        <ul class="criteria">
          <li>&#64;defer funciona con on viewport</li>
          <li>placeholder y loading visibles</li>
          <li>Al menos 2 triggers probados</li>
        </ul>
        <div class="tip">&#64;defer (on viewport) solo carga cuando el elemento entra al viewport — perfecto para below-the-fold</div>
      </div>

      <div class="card">
        <h3>2. trackBy — Optimización de Listas</h3>
        <p>
          Crea una lista de 1000 items. Sin trackBy, shuffle la lista y mide re-renders.
          Con trackBy, mide la diferencia.
        </p>
        <ul class="criteria">
          <li>Lista de 1000 items renderizada</li>
          <li>Medición con/sin trackBy</li>
          <li>Diferencia documentada</li>
        </ul>
        <div class="tip">Usa Chrome DevTools Performance tab para medir el rendering time</div>
      </div>

      <div class="card">
        <h3>3. Virtual Scrolling — Listas Masivas</h3>
        <p>
          Genera 10,000 items. Muestra en <code>cdk-virtual-scroll-viewport</code>.
          Compara DOM nodes vs lista normal.
        </p>
        <ul class="criteria">
          <li>Virtual scroll funcionando</li>
          <li>Comparación de DOM nodes documentada</li>
          <li>Scroll suave</li>
        </ul>
        <div class="tip">Inspecciona el DOM: virtual scroll solo renderiza ~20 nodos vs 10,000</div>
      </div>

      <div class="card">
        <h3>4. OnPush Everywhere</h3>
        <p>
          Convierte todos los componentes del NgRx lab a OnPush.
          Verifica que todo sigue funcionando. ¿Qué necesitas cambiar?
        </p>
        <ul class="criteria">
          <li>Todos los componentes con OnPush</li>
          <li>Funcionalidad intacta</li>
          <li>Documentar cambios necesarios</li>
        </ul>
        <div class="tip">Con NgRx y async pipe/signals, OnPush funciona sin cambios extra</div>
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
export class PerfExercisesComponent {}
