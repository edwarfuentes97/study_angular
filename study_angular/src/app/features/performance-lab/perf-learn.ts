import { Component } from '@angular/core';
import { AutoGlossaryDirective } from '../../shared/directives/auto-glossary.directive';

@Component({
  selector: 'app-perf-learn',
  imports: [AutoGlossaryDirective],
  template: `
    <div class="cards" appAutoGlossary>
      <div class="card">
        <h3>1. OnPush + trackBy</h3>
        <p>
          La estrategia <strong>OnPush</strong> reduce drásticamente los ciclos de change detection:
          Angular solo verifica el componente cuando cambian sus <code>@Input()</code> por referencia,
          se dispara un evento del template, o se usa <code>markForCheck()</code> / un Observable con async pipe.
          Combinado con <code>track</code> en <code>&#64;for</code>, Angular reutiliza nodos DOM existentes
          en lugar de destruirlos y recrearlos al cambiar la lista.
        </p>
        <pre><code>&#64;Component(&#123;
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`
    &#64;for (item of items; track item.id) &#123;
      &lt;app-item [data]="item" /&gt;
    &#125;
  \`
&#125;)</code></pre>
      </div>

      <div class="card">
        <h3>2. &#64;defer Blocks</h3>
        <p>
          Los bloques <code>&#64;defer</code> permiten lazy-loading declarativo a nivel de template.
          Soportan múltiples triggers: <strong>on viewport</strong> (cuando entra al viewport),
          <strong>on hover</strong> (al pasar el mouse), <strong>on timer(Xms)</strong> (tras un delay),
          y <strong>when condition</strong> (cuando una expresión es true).
          Incluyen estados <code>&#64;placeholder</code>, <code>&#64;loading</code> y <code>&#64;error</code>
          para una UX completa durante la carga.
        </p>
        <pre><code>&#64;defer (on viewport) &#123;
  &lt;app-heavy-chart [data]="chartData" /&gt;
&#125; &#64;placeholder &#123;
  &lt;div class="placeholder"&gt;📊 Gráfico disponible&lt;/div&gt;
&#125; &#64;loading (minimum 300ms) &#123;
  &lt;div class="spinner"&gt;Cargando...&lt;/div&gt;
&#125; &#64;error &#123;
  &lt;div class="error"&gt;Error al cargar&lt;/div&gt;
&#125;</code></pre>
      </div>

      <div class="card">
        <h3>3. Virtual Scrolling</h3>
        <p>
          El CDK <code>ScrollingModule</code> proporciona <code>cdk-virtual-scroll-viewport</code>
          que solo renderiza los items visibles en el viewport. Con <code>itemSize</code> defines
          la altura fija de cada item. Esto reduce miles de nodos DOM a solo ~20 visibles,
          mejorando dramáticamente el rendimiento de listas grandes.
        </p>
        <pre ngNonBindable><code>&lt;cdk-virtual-scroll-viewport itemSize="48" class="viewport"&gt;
  &lt;div *cdkVirtualFor="let item of items" class="item"&gt;
    &#123;&#123; item.name &#125;&#125;
  &lt;/div&gt;
&lt;/cdk-virtual-scroll-viewport&gt;</code></pre>
      </div>

      <div class="card">
        <h3>4. Bundle Analysis</h3>
        <p>
          Usa <code>source-map-explorer</code> para visualizar qué ocupa espacio en tu bundle.
          Activa source maps en <code>angular.json</code>, haz un build de producción y analiza
          el treemap resultante. Identifica dependencias grandes, código duplicado y módulos
          que podrían lazy-loadearse.
        </p>
        <pre><code>// angular.json → "sourceMap": true
// Terminal:
// npx source-map-explorer dist/app/browser/*.js</code></pre>
      </div>

      <div class="card">
        <h3>5. Preloading Strategies</h3>
        <p>
          Las estrategias de precarga permiten cargar módulos lazy en background después del
          initial load. <code>PreloadAllModules</code> precarga todo automáticamente.
          Para control fino, crea una estrategia custom que precargue solo rutas marcadas
          con <code>data: &#123; preload: true &#125;</code>.
        </p>
        <pre><code>provideRouter(routes, withPreloading(PreloadAllModules))</code></pre>
      </div>

      <div class="card">
        <h3>6. Web Workers</h3>
        <p>
          Los Web Workers ejecutan código en un hilo separado, evitando bloquear el main thread
          con operaciones pesadas (procesamiento de datos, cálculos, compresión).
          Angular CLI facilita su creación con <code>ng generate web-worker</code>.
        </p>
        <pre><code>// Generar:
// ng generate web-worker my-worker

// app.component.ts
if (typeof Worker !== 'undefined') &#123;
  const worker = new Worker(new URL('./my-worker.worker', import.meta.url));
  worker.onmessage = (&#123; data &#125;) =&gt; &#123;
    console.log('Resultado:', data);
  &#125;;
  worker.postMessage(&#123; items: largeDataset &#125;);
&#125;

// my-worker.worker.ts
addEventListener('message', (&#123; data &#125;) =&gt; &#123;
  const result = heavyComputation(data.items);
  postMessage(result);
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
export class PerfLearnComponent {}
