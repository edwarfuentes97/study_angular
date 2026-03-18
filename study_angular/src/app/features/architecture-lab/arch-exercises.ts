import { Component } from '@angular/core';

@Component({
  selector: 'app-arch-exercises',
  template: `
    <div class="cards">
      <!-- Ejercicio 1 -->
      <div class="card">
        <h3>1 · Smart / Dumb</h3>
        <p>
          Refactora un componente monolítico en un Smart container + 3 Dumb
          presentacionales. El Smart maneja Store/service, los Dumb solo
          &#64;Input/&#64;Output + OnPush.
        </p>
        <ul class="criteria">
          <li>Smart container creado</li>
          <li>3 componentes Dumb con OnPush</li>
          <li>Comunicación vía &#64;Input/&#64;Output</li>
        </ul>
        <div class="tip">El Smart component es el único que inyecta servicios o Store</div>
      </div>

      <!-- Ejercicio 2 -->
      <div class="card">
        <h3>2 · Comunicación</h3>
        <p>
          Implementa el mismo feature usando 4 patrones: &#64;Input/&#64;Output,
          shared service con BehaviorSubject, Signals, NgRx Store.
        </p>
        <ul class="criteria">
          <li>Los 4 patrones implementados y funcionando</li>
          <li>Se documenta cuándo usar cada uno</li>
        </ul>
        <div class="tip">Empieza con &#64;Input/&#64;Output para flujos padre→hijo simples, usa servicios para hermanos</div>
      </div>

      <!-- Ejercicio 3 -->
      <div class="card">
        <h3>3 · Folder Structure</h3>
        <p>
          Organiza el proyecto con core/ (servicios singleton), shared/
          (componentes reutilizables), features/ (por dominio). Agrega barrel
          exports (index.ts).
        </p>
        <ul class="criteria">
          <li>Estructura core/shared/features correcta</li>
          <li>Barrel exports funcionando</li>
          <li>Imports limpios</li>
        </ul>
        <div class="tip">Usa providedIn: 'root' para servicios en core/ — no necesitan módulo</div>
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
export class ArchExercisesComponent {}
