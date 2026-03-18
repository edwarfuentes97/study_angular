import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-exercises',
  template: `
    <div class="cards">

      <div class="card">
        <h3>1. Change Detection</h3>
        <p>
          Crea dos componentes hijos: uno Default y otro OnPush. El padre cambia un input.
          ¿Cuál se re-renderiza? Muta un objeto vs reemplázalo y observa.
        </p>
        <ul class="criteria">
          <li>Ambos hijos creados con estrategias distintas</li>
          <li>Se demuestra la diferencia entre mutación y nueva referencia</li>
          <li>Se explica por qué OnPush no detecta la mutación</li>
        </ul>
        <div class="tip">Usa <code>console.log</code> en <code>ngDoCheck</code> para verificar</div>
      </div>

      <div class="card">
        <h3>2. Signals</h3>
        <p>
          Crea un carrito de compras con signals: items (signal), total (computed), effect que
          logee cada cambio. Conecta con un Observable usando toSignal.
        </p>
        <ul class="criteria">
          <li>signal/computed/effect funcionando correctamente</li>
          <li>toSignal conectado a un Observable</li>
        </ul>
        <div class="tip">effect() corre automáticamente cuando sus dependencias cambian</div>
      </div>

      <div class="card">
        <h3>3. Reactive Forms</h3>
        <p>
          Crea un formulario de registro multi-step: datos personales, dirección, habilidades
          (FormArray dinámico). Agrega validadores custom. Muestra errores inline.
        </p>
        <ul class="criteria">
          <li>Multi-step con navegación entre pasos</li>
          <li>FormArray dinámico para habilidades</li>
          <li>Validadores custom implementados</li>
          <li>Errores inline visibles al usuario</li>
        </ul>
        <div class="tip">Usa <code>form.get('field')?.errors</code> para acceder a errores específicos</div>
      </div>

      <div class="card">
        <h3>4. Lazy Loading</h3>
        <p>
          Crea un feature module lazy-loaded con rutas hijas. Verifica en Network tab que el
          chunk se carga solo al navegar.
        </p>
        <ul class="criteria">
          <li>Chunk separado visible en Network tab</li>
          <li>Rutas hijas funcionando correctamente</li>
        </ul>
        <div class="tip">Usa <code>loadChildren</code> con <code>import()</code> para lazy loading de rutas</div>
      </div>

      <div class="card">
        <h3>5. Interceptors</h3>
        <p>
          Implementa un interceptor que: agregue Authorization header, maneje errores 401
          (redirect a login), y muestre un loading spinner global.
        </p>
        <ul class="criteria">
          <li>Header Authorization agregado a cada request</li>
          <li>Error 401 manejado con redirect a login</li>
          <li>Spinner global funciona durante peticiones</li>
        </ul>
        <div class="tip">Usa <code>withInterceptors([fn])</code> en <code>provideHttpClient()</code> desde Angular 15+</div>
      </div>

    </div>
  `,
  styles: `
    :host { display: block; padding: 1rem 0; }
    .cards { display: flex; flex-direction: column; gap: 1rem; }
    .card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 1.2rem;
    }
    .card h3 { margin: 0 0 0.4rem; font-size: 1.05rem; }
    .card p { color: var(--text-muted); line-height: 1.6; margin: 0 0 0.6rem; }
    .criteria { list-style: none; padding: 0; margin: 0 0 0.6rem; }
    .criteria li::before { content: '✅ '; }
    .criteria li { color: var(--text-muted); padding: 0.15rem 0; font-size: 0.9rem; }
    .tip {
      border-left: 3px solid var(--accent-green);
      background: rgba(63,185,80,0.08);
      padding: 0.6rem 0.8rem;
      border-radius: 0 6px 6px 0;
      font-size: 0.88rem;
      color: var(--text-muted);
    }
    .tip::before { content: '💡 '; }
  `
})
export class AngularExercisesComponent {}
