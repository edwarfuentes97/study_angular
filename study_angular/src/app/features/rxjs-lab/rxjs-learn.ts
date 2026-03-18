import { Component } from '@angular/core';
import { AutoGlossaryDirective } from '../../shared/directives/auto-glossary.directive';

@Component({
  selector: 'app-rxjs-learn',
  imports: [AutoGlossaryDirective],
  template: `
    <div class="learn-page" appAutoGlossary>
      <h2 class="page-title">📖 RxJS — Teoría y Conceptos</h2>

      <div class="card">
        <h3>🔵 Observable vs Promise</h3>
        <table class="compare-table">
          <thead>
            <tr>
              <th>Característica</th>
              <th>Promise</th>
              <th>Observable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ejecución</td>
              <td><strong>Eager</strong> — se ejecuta al crearse</td>
              <td><strong>Lazy</strong> — solo al suscribirse</td>
            </tr>
            <tr>
              <td>Valores</td>
              <td>Un solo valor</td>
              <td>Múltiples valores en el tiempo</td>
            </tr>
            <tr>
              <td>Cancelación</td>
              <td>No se puede cancelar</td>
              <td><code>unsubscribe()</code> cancela</td>
            </tr>
            <tr>
              <td>Operadores</td>
              <td><code>.then()</code>, <code>.catch()</code></td>
              <td>100+ operadores composables</td>
            </tr>
            <tr>
              <td>Multicast</td>
              <td>Siempre compartida</td>
              <td>Unicast por defecto, multicast con Subject</td>
            </tr>
          </tbody>
        </table>
        <pre><code class="language-typescript">// Promise — eager, un solo valor
const promise = new Promise(resolve => {{ '{' }}
  console.log('Ejecutado inmediatamente');
  resolve(42);
{{ '}' }});

// Observable — lazy, múltiples valores
const obs$ = new Observable(subscriber => {{ '{' }}
  console.log('Ejecutado al suscribirse');
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
{{ '}' }});</code></pre>
      </div>

      <div class="card">
        <h3>📡 Subject Types</h3>
        <p>Los Subjects son Observables <strong>multicast</strong> que también son Observers (puedes emitir valores con <code>.next()</code>).</p>
        <table class="compare-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Late Subscriber recibe</th>
              <th>Uso típico</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>Subject</code></td>
              <td>Nada — solo valores futuros</td>
              <td>Event bus, notificaciones</td>
            </tr>
            <tr>
              <td><code>BehaviorSubject</code></td>
              <td>Último valor emitido (requiere valor inicial)</td>
              <td>Estado actual, config, auth status</td>
            </tr>
            <tr>
              <td><code>ReplaySubject(n)</code></td>
              <td>Últimos N valores</td>
              <td>Cache de mensajes, historial</td>
            </tr>
            <tr>
              <td><code>AsyncSubject</code></td>
              <td>Solo el último valor, al completar</td>
              <td>HTTP responses, cálculos finales</td>
            </tr>
          </tbody>
        </table>
        <pre><code class="language-typescript">// BehaviorSubject — siempre tiene valor actual
const user$ = new BehaviorSubject&lt;User | null&gt;(null);
user$.next({{ '{' }} name: 'Ana' {{ '}' }});

// Late subscriber recibe 'Ana' inmediatamente
user$.subscribe(u => console.log(u)); // {{ '{' }} name: 'Ana' {{ '}' }}

// ReplaySubject — guarda últimos N valores
const messages$ = new ReplaySubject&lt;string&gt;(3);
messages$.next('msg1');
messages$.next('msg2');
messages$.next('msg3');
messages$.next('msg4');

// Late subscriber recibe: msg2, msg3, msg4
messages$.subscribe(m => console.log(m));</code></pre>
      </div>

      <div class="card">
        <h3>🔀 Operadores de Flattening</h3>
        <p>Transforman un Observable que emite Observables internos en un stream plano. La diferencia está en cómo manejan la <strong>concurrencia</strong>:</p>
        <table class="compare-table">
          <thead>
            <tr>
              <th>Operador</th>
              <th>Comportamiento</th>
              <th>Caso de uso</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>switchMap</code></td>
              <td><strong>Cancela</strong> el inner anterior al recibir nuevo valor</td>
              <td>Búsqueda typeahead, autocomplete</td>
            </tr>
            <tr>
              <td><code>mergeMap</code></td>
              <td>Ejecuta todos en <strong>paralelo</strong></td>
              <td>Descargas paralelas, logs</td>
            </tr>
            <tr>
              <td><code>concatMap</code></td>
              <td>Ejecuta en <strong>secuencia</strong>, espera que termine cada uno</td>
              <td>Guardar formularios, orden importa</td>
            </tr>
            <tr>
              <td><code>exhaustMap</code></td>
              <td><strong>Ignora</strong> nuevos valores mientras hay uno en progreso</td>
              <td>Login button, submit de formulario</td>
            </tr>
          </tbody>
        </table>
        <pre><code class="language-typescript">// switchMap — autocomplete: cancela búsqueda anterior
searchInput$.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap(term => this.api.search(term))
).subscribe(results => this.results = results);

// exhaustMap — login: ignora clicks mientras se procesa
loginClick$.pipe(
  exhaustMap(() => this.auth.login(credentials))
).subscribe(user => this.router.navigate(['/home']));</code></pre>
      </div>

      <div class="card">
        <h3>🔗 Combining Operators</h3>
        <p>Combinan múltiples streams en uno solo:</p>
        <ul>
          <li><strong><code>combineLatest</code>:</strong> Emite cuando <em>cualquiera</em> de los streams emite (después de que todos hayan emitido al menos una vez). Ideal para derivar estado combinado.</li>
          <li><strong><code>forkJoin</code>:</strong> Espera a que <em>todos</em> completen y emite los últimos valores como array. Perfecto para llamadas HTTP paralelas.</li>
          <li><strong><code>withLatestFrom</code>:</strong> Cuando el source emite, toma el valor más reciente de otro stream. Útil para enriquecer eventos con datos actuales.</li>
        </ul>
        <pre><code class="language-typescript">// combineLatest — actualiza cuando cualquiera cambia
combineLatest([user$, config$]).pipe(
  map(([user, config]) => ({{ '{' }} ...user, theme: config.theme {{ '}' }}))
);

// forkJoin — espera todas las llamadas HTTP
forkJoin([
  this.http.get('/api/users'),
  this.http.get('/api/products'),
  this.http.get('/api/orders')
]).subscribe(([users, products, orders]) => {{ '{' }}
  // Los tres disponibles aquí
{{ '}' }});

// withLatestFrom — enriquece click con datos actuales
saveClick$.pipe(
  withLatestFrom(formData$),
  switchMap(([_, data]) => this.api.save(data))
);</code></pre>
      </div>

      <div class="card">
        <h3>🚨 Memory Leaks</h3>
        <p>
          Las suscripciones que no se cancelan siguen ejecutándose después de destruir el componente.
          Especialmente peligroso con <code>interval()</code>, <code>fromEvent()</code>, y WebSockets.
        </p>
        <h4 style="margin-top: 0.8rem; color: var(--accent-green, #3fb950);">4 Patrones para evitarlos:</h4>
        <pre><code class="language-typescript">// 1. takeUntilDestroyed() — ✅ Recomendado en Angular 20
import {{ '{' }} takeUntilDestroyed {{ '}' }} from '&#64;angular/core/rxjs-interop';

// En el constructor o campo del componente
interval(1000).pipe(
  takeUntilDestroyed()   // Se cancela automáticamente al destruir
).subscribe(n => console.log(n));

// 2. DestroyRef + callback manual
const destroyRef = inject(DestroyRef);
const sub = interval(1000).subscribe(n => console.log(n));
destroyRef.onDestroy(() => sub.unsubscribe());

// 3. async pipe en template — se cancela automáticamente
// &lt;div&gt;{{ '{{' }} data$ | async {{ '}}' }}&lt;/div&gt;

// 4. toSignal() — Angular signals, se limpia solo
const count = toSignal(interval(1000), {{ '{' }} initialValue: 0 {{ '}' }});</code></pre>
        <p><strong>Regla:</strong> Si no usas <code>async</code> pipe, <code>toSignal()</code>, o <code>takeUntilDestroyed()</code>, necesitas cancelar manualmente.</p>
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
    .card h4 {
      font-size: 0.95rem;
      margin-bottom: 0.5rem;
      color: var(--accent-purple);
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
      .compare-table { font-size: 0.78rem; }
    }
  `
})
export class RxjsLearnComponent {}
