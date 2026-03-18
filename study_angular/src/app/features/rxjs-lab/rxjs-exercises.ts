import { Component } from '@angular/core';

@Component({
  selector: 'app-rxjs-exercises',
  template: `
    <div class="exercises-page">
      <h2 class="page-title">🧪 RxJS — Laboratorio</h2>
      <p class="page-desc">Completa cada ejercicio para dominar la programación reactiva.</p>

      <div class="card exercise">
        <h3>1️⃣ Ejercicio: Observable Types</h3>
        <p>
          Crea un <code>Subject</code>, <code>BehaviorSubject</code> y <code>ReplaySubject</code>.
          Emite valores, suscribe tarde, y observa las diferencias. Documenta qué recibe
          cada late subscriber.
        </p>
        <div class="criteria">
          <h4>✅ Criterios de aceptación</h4>
          <ul>
            <li>Crea los 3 tipos de Subject en un componente</li>
            <li>Emite al menos 3 valores en cada uno <strong>antes</strong> de la suscripción tardía</li>
            <li>El <code>Subject</code> late subscriber no recibe valores anteriores</li>
            <li>El <code>BehaviorSubject</code> late subscriber recibe el último valor</li>
            <li>El <code>ReplaySubject(2)</code> late subscriber recibe los últimos 2 valores</li>
            <li>Los resultados se muestran en pantalla (no solo en console.log)</li>
          </ul>
        </div>
        <div class="hint">
          💡 <strong>Tip:</strong> Usa un array de logs para cada Subject y muéstralos en el template
          con <code>&#64;for</code>. Así puedes comparar visualmente qué recibió cada uno.
        </div>
      </div>

      <div class="card exercise">
        <h3>2️⃣ Ejercicio: Search Typeahead</h3>
        <p>
          Implementa un campo de búsqueda con: <code>debounceTime(300)</code>,
          <code>distinctUntilChanged()</code>, <code>filter(term.length >= 2)</code>,
          <code>switchMap</code> → API call, <code>catchError</code> para errores.
        </p>
        <div class="criteria">
          <h4>✅ Criterios de aceptación</h4>
          <ul>
            <li>Input de texto con evento <code>input</code> conectado a un Subject</li>
            <li>Pipeline: <code>debounceTime(300) → distinctUntilChanged() → filter → switchMap</code></li>
            <li>No hace llamadas si el término tiene menos de 2 caracteres</li>
            <li>Escribir rápido no genera múltiples requests (debounce funciona)</li>
            <li>Si el usuario cambia el término, la búsqueda anterior se cancela (switchMap)</li>
            <li>Errores no rompen el stream — se muestra mensaje de error</li>
          </ul>
        </div>
        <div class="hint">
          💡 <strong>Tip:</strong> Crea un <code>MockApiService</code> con <code>delay(500)</code>
          para simular latencia y poder observar la cancelación de switchMap.
        </div>
      </div>

      <div class="card exercise">
        <h3>3️⃣ Ejercicio: Flattening Operators</h3>
        <p>
          Dado un botón que dispara una llamada HTTP, implementa 4 versiones:
          <code>switchMap</code> (búsqueda), <code>exhaustMap</code> (login),
          <code>concatMap</code> (guardar orden), <code>mergeMap</code> (descargas paralelas).
        </p>
        <div class="criteria">
          <h4>✅ Criterios de aceptación</h4>
          <ul>
            <li>4 botones, uno para cada operador</li>
            <li><code>switchMap</code>: clicks rápidos cancelan el request anterior</li>
            <li><code>exhaustMap</code>: clicks rápidos se ignoran hasta que termine el actual</li>
            <li><code>concatMap</code>: clicks rápidos se encolan y ejecutan en orden</li>
            <li><code>mergeMap</code>: todos los clicks se ejecutan en paralelo</li>
            <li>Cada botón muestra un contador de requests activos/completados</li>
          </ul>
        </div>
        <div class="hint">
          💡 <strong>Tip:</strong> Usa <code>of('result').pipe(delay(2000))</code> como fake HTTP
          para que sea visible la diferencia entre operadores.
        </div>
      </div>

      <div class="card exercise">
        <h3>4️⃣ Ejercicio: Combining Streams</h3>
        <p>
          Combina un stream de usuario con uno de configuración usando <code>combineLatest</code>.
          Usa <code>forkJoin</code> para 3 llamadas HTTP paralelas. Usa <code>withLatestFrom</code>
          para enriquecer un click con datos actuales.
        </p>
        <div class="criteria">
          <h4>✅ Criterios de aceptación</h4>
          <ul>
            <li><code>combineLatest</code>: al cambiar usuario O config, se recalcula el resultado</li>
            <li><code>forkJoin</code>: un botón "Cargar todo" dispara 3 requests en paralelo</li>
            <li><code>forkJoin</code>: muestra spinner hasta que las 3 completen</li>
            <li><code>withLatestFrom</code>: un botón "Guardar" toma el estado actual del form</li>
            <li>Cada sección muestra el output en tiempo real</li>
          </ul>
        </div>
        <div class="hint">
          💡 <strong>Tip:</strong> <code>combineLatest</code> no emite hasta que <em>todos</em> los
          streams hayan emitido al menos una vez. Usa <code>startWith()</code> si necesitas
          un valor inicial.
        </div>
      </div>

      <div class="card exercise">
        <h3>5️⃣ Ejercicio: Memory Leaks</h3>
        <p>
          Crea un componente con <code>interval(1000)</code>. Muestra/oculta el componente.
          Observa que el interval sigue corriendo. Corrige usando
          <code>takeUntilDestroyed()</code> + <code>DestroyRef</code>.
        </p>
        <div class="criteria">
          <h4>✅ Criterios de aceptación</h4>
          <ul>
            <li>Componente hijo con <code>interval(1000)</code> que incrementa un contador</li>
            <li>Botón toggle para mostrar/ocultar el componente hijo</li>
            <li>Console.log demuestra que el interval NO se detiene al ocultar (bug)</li>
            <li>Corregir con <code>takeUntilDestroyed()</code> — el interval se detiene al destruir</li>
            <li>Alternativa: mostrar versión con <code>toSignal(interval(1000))</code> que se limpia sola</li>
            <li>Botón "Ver console" que muestra los logs en pantalla</li>
          </ul>
        </div>
        <div class="hint">
          💡 <strong>Tip:</strong> Abre DevTools → Console antes de toggle. Verás los logs seguir
          apareciendo después de destruir el componente sin cleanup. Con
          <code>takeUntilDestroyed()</code> los logs se detienen inmediatamente.
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
export class RxjsExercisesComponent {}
