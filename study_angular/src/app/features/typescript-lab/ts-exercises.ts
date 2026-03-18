import { Component } from '@angular/core';

@Component({
  selector: 'app-ts-exercises',
  template: `
    <div class="cards">
      <div class="card">
        <h3>🧪 1. Generics — CrudService&lt;T&gt;</h3>
        <p>
          Crea un <code>CrudService&lt;T&gt;</code> genérico que maneje
          <code>getAll</code>, <code>getById</code>, <code>create</code>,
          <code>update</code> y <code>delete</code> para cualquier entidad.
        </p>
        <ul class="criteria">
          <li>Funciona con Product, User y cualquier tipo</li>
          <li>getAll / getById / create / update / delete implementados</li>
        </ul>
        <div class="tip">Usa <code>extends &#123; id: string &#125;</code> como constraint para asegurar que T tiene id</div>
      </div>

      <div class="card">
        <h3>🧪 2. Type Guards — isProduct()</h3>
        <p>
          Crea un type guard <code>isProduct()</code> que valide que un
          <code>unknown</code> tiene <code>id</code>, <code>name</code> y
          <code>price</code>. Úsalo para parsear datos de una API.
        </p>
        <ul class="criteria">
          <li>Type guard correcto con <code>is</code> keyword</li>
          <li>Parsea datos unknown de forma segura</li>
        </ul>
        <div class="tip">Verifica cada propiedad con <code>'in'</code> operator y <code>typeof</code></div>
      </div>

      <div class="card">
        <h3>🧪 3. Discriminated Unions — AsyncState&lt;T&gt;</h3>
        <p>
          Modela <code>AsyncState&lt;T&gt; = &#123;status:'idle'&#125; | &#123;status:'loading'&#125; |
          &#123;status:'success', data:T&#125; | &#123;status:'error', message:string&#125;</code>.
          Crea funciones que solo funcionen en ciertos estados.
        </p>
        <ul class="criteria">
          <li>Union correcta con campo discriminante <code>status</code></li>
          <li>Switch exhaustivo con verificación <code>never</code></li>
          <li>Funciones type-safe por estado</li>
        </ul>
        <div class="tip">Usa <code>never</code> en el default del switch para verificar exhaustividad</div>
      </div>

      <div class="card">
        <h3>🧪 4. Utility Types — Tipos derivados de Product</h3>
        <p>
          Dada la interfaz <code>Product</code>, crea:
          <code>ProductCreate</code> (sin id),
          <code>ProductSummary</code> (solo name y price),
          <code>ProductIndex</code> (<code>Record&lt;string, Product&gt;</code>).
        </p>
        <ul class="criteria">
          <li><code>Omit</code>, <code>Pick</code>, <code>Record</code> usados correctamente</li>
          <li>Tipos derivados son correctos y type-safe</li>
        </ul>
        <div class="tip">Combina utility types: <code>Partial&lt;Pick&lt;Product, 'name' | 'price'&gt;&gt;</code></div>
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
export class TsExercisesComponent {}
