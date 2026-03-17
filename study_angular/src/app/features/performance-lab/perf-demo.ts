import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

// ── Heavy component to be deferred ────────────────────────────
@Component({
  selector: 'app-heavy',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="heavy-inner">
      <p class="heavy-title">🏋️ Heavy Component Loaded!</p>
      <p class="heavy-info">This component renders {{ rows.length }} rows — loaded only when scrolled into viewport.</p>
      <div class="heavy-list">
        @for (row of rows; track row) {
          <div class="heavy-row">Row #{{ row }} — computed value: {{ row * 17 % 97 }}</div>
        }
      </div>
    </div>
  `,
  styles: `
    .heavy-inner { padding: 0.5rem; }
    .heavy-title { font-weight: 700; color: var(--accent-green); margin-bottom: 0.3rem; }
    .heavy-info { font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.5rem; }
    .heavy-list { max-height: 200px; overflow-y: auto; }
    .heavy-row {
      font-size: 0.78rem; padding: 0.2rem 0.4rem; color: var(--text-muted);
      border-bottom: 1px solid rgba(48,54,61,0.3);
    }
  `,
})
export class HeavyComponent {
  readonly rows = Array.from({ length: 200 }, (_, i) => i + 1);
}

// ═══════════════════════════════════════════════════════════════
// Main Performance Lab
// ═══════════════════════════════════════════════════════════════

@Component({
  imports: [ScrollingModule, HeavyComponent, DecimalPipe],
  template: `
    <section class="lab">
      <header class="lab-header">
        <h2>⚡ Performance Lab</h2>
        <p>&#64;defer blocks, trackBy optimization & virtual scrolling</p>
      </header>

      <!-- ── @defer Section ───────────────────────── -->
      <div class="lab-section">
        <h3>1. &#64;defer — Lazy Component Loading</h3>
        <div class="card">
          <p class="explanation">
            <code>&#64;defer</code> blocks let you lazy-load parts of the template.
            The heavy component below loads <strong>only when scrolled into the viewport</strong>.
          </p>

          <pre><code>&#64;defer (on viewport) {{ '{' }}
  &lt;app-heavy /&gt;
{{ '}' }} &#64;placeholder {{ '{' }}
  &lt;p&gt;Scroll here to load heavy component...&lt;/p&gt;
{{ '}' }} &#64;loading (minimum 500ms) {{ '{' }}
  &lt;p&gt;Loading heavy component...&lt;/p&gt;
{{ '}' }}</code></pre>

          <div class="trigger-table">
            <h4>Available &#64;defer triggers:</h4>
            <div class="trigger-grid">
              <div class="trigger-item"><code>on viewport</code><span>Element enters viewport</span></div>
              <div class="trigger-item"><code>on idle</code><span>Browser idle callback</span></div>
              <div class="trigger-item"><code>on hover</code><span>Mouse hovers element</span></div>
              <div class="trigger-item"><code>on interaction</code><span>Click or keydown</span></div>
              <div class="trigger-item"><code>on timer(5s)</code><span>After delay</span></div>
              <div class="trigger-item"><code>when condition</code><span>Boolean expression</span></div>
            </div>
          </div>

          <div class="defer-zone">
            @defer (on viewport) {
              <app-heavy />
            } @placeholder {
              <div class="placeholder-box">⬇ Scroll here to trigger &#64;defer load…</div>
            } @loading (minimum 300ms) {
              <div class="loading-box">⏳ Loading heavy component…</div>
            }
          </div>
        </div>
      </div>

      <!-- ── trackBy Section ──────────────────────── -->
      <div class="lab-section">
        <h3>2. trackBy — Efficient List Rendering</h3>
        <div class="card">
          <p class="explanation">
            Without <code>track</code>, Angular destroys and recreates every DOM element on shuffle.
            With <code>track item.id</code>, it only moves existing elements.
          </p>

          <div class="controls">
            <button class="btn btn-primary" (click)="shuffleLists()">🔀 Shuffle Lists</button>
            <span class="shuffle-count">Shuffles: {{ shuffleCount() }}</span>
          </div>

          <div class="lists-split">
            <div class="list-col">
              <h4>Without track <span class="tag tag-red">Re-renders all</span></h4>
              <div class="render-count">Render count: {{ noTrackRenders }}</div>
              <div class="mini-list">
                @for (item of noTrackList(); track $index) {
                  <div class="mini-row">{{ renderNoTrack() }}{{ item.name }} — #{{ item.id }}</div>
                }
              </div>
            </div>

            <div class="list-col">
              <h4>With track item.id <span class="tag tag-green">Moves DOM</span></h4>
              <div class="render-count">Render count: {{ withTrackRenders }}</div>
              <div class="mini-list">
                @for (item of withTrackList(); track item.id) {
                  <div class="mini-row">{{ renderWithTrack() }}{{ item.name }} — #{{ item.id }}</div>
                }
              </div>
            </div>
          </div>

          <pre><code>// ❌ Without trackBy — re-creates all DOM nodes on change
&#64;for (item of items; track $index) {{ '{' }} ... {{ '}' }}

// ✅ With trackBy — Angular reuses DOM, only reorders
&#64;for (item of items; track item.id) {{ '{' }} ... {{ '}' }}</code></pre>
        </div>
      </div>

      <!-- ── Virtual Scrolling Section ────────────── -->
      <div class="lab-section">
        <h3>3. Virtual Scrolling — 10,000 Items</h3>
        <div class="card">
          <p class="explanation">
            A normal list would render <strong>10,000 DOM nodes</strong>.
            <code>cdk-virtual-scroll-viewport</code> renders only <strong>~20 visible items</strong>,
            drastically reducing memory and paint time.
          </p>

          <pre><code>&lt;cdk-virtual-scroll-viewport itemSize="36" class="viewport"&gt;
  &lt;div *cdkVirtualFor="let item of bigList" class="vs-row"&gt;
    {{ '{{' }} item.label {{ '}}' }}
  &lt;/div&gt;
&lt;/cdk-virtual-scroll-viewport&gt;</code></pre>

          <div class="vs-container">
            <cdk-virtual-scroll-viewport itemSize="36" class="viewport">
              <div *cdkVirtualFor="let item of bigList" class="vs-row">
                <span class="vs-id">#{{ item.id }}</span>
                <span class="vs-label">{{ item.label }}</span>
                <span class="vs-score">Score: {{ item.score }}</span>
              </div>
            </cdk-virtual-scroll-viewport>
            <div class="vs-stats">
              <p>Total items: <strong>{{ bigList.length | number }}</strong></p>
              <p>DOM nodes rendered: <strong>~20</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .lab { max-width: 900px; margin: 0 auto; }

    .explanation {
      color: var(--text-muted);
      font-size: 0.88rem;
      margin-bottom: 0.6rem;
    }

    /* defer triggers table */
    .trigger-table h4 {
      font-size: 0.9rem;
      margin-bottom: 0.4rem;
      color: var(--text);
    }
    .trigger-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.4rem;
      margin-bottom: 0.8rem;
    }
    @media (max-width: 600px) {
      .trigger-grid { grid-template-columns: repeat(2, 1fr); }
    }
    .trigger-item {
      display: flex; flex-direction: column; gap: 0.15rem;
      padding: 0.4rem 0.5rem; background: var(--bg); border-radius: 4px;
      font-size: 0.8rem;
    }
    .trigger-item span { color: var(--text-muted); font-size: 0.75rem; }

    .defer-zone { margin-top: 0.5rem; }
    .placeholder-box, .loading-box {
      padding: 1.5rem; text-align: center; border-radius: 6px;
      border: 2px dashed var(--border); color: var(--text-muted); font-size: 0.9rem;
    }
    .loading-box { border-color: var(--accent-orange); color: var(--accent-orange); }

    /* trackBy */
    .controls {
      display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;
    }
    .shuffle-count { color: var(--text-muted); font-size: 0.85rem; }

    .lists-split {
      display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 0.75rem;
    }
    @media (max-width: 600px) {
      .lists-split { grid-template-columns: 1fr; }
    }
    .list-col h4 { font-size: 0.88rem; margin-bottom: 0.3rem; }
    .render-count { font-size: 0.78rem; color: var(--accent-orange); margin-bottom: 0.3rem; }
    .mini-list {
      background: var(--bg); border: 1px solid var(--border); border-radius: 4px;
      max-height: 180px; overflow-y: auto;
    }
    .mini-row {
      padding: 0.3rem 0.5rem; font-size: 0.8rem;
      border-bottom: 1px solid rgba(48,54,61,0.3);
    }

    /* Virtual scrolling */
    .vs-container { margin-top: 0.5rem; }
    .viewport {
      height: 300px;
      border: 1px solid var(--border);
      border-radius: 6px;
      background: var(--bg);
    }
    .vs-row {
      display: flex; align-items: center; gap: 1rem;
      padding: 0 0.8rem; height: 36px; font-size: 0.82rem;
      border-bottom: 1px solid rgba(48,54,61,0.3);
    }
    .vs-id { color: var(--accent-blue); min-width: 3.5rem; font-weight: 600; }
    .vs-label { flex: 1; }
    .vs-score { color: var(--accent-green); min-width: 4rem; text-align: right; }
    .vs-stats {
      display: flex; gap: 1.5rem; margin-top: 0.5rem;
      font-size: 0.82rem; color: var(--text-muted);
    }
    .vs-stats strong { color: var(--accent-purple); }

    pre { margin: 0.4rem 0; }
  `
})
export class PerfDemoComponent {
  // ── trackBy demo state ───────────────────────────────────────
  private readonly trackItems = [
    { id: 1, name: 'Organic Cotton T-Shirt' },
    { id: 2, name: 'Recycled Polyester Jacket' },
    { id: 3, name: 'Bamboo Fiber Socks' },
    { id: 4, name: 'Hemp Canvas Bag' },
    { id: 5, name: 'Linen Blend Pants' },
    { id: 6, name: 'Tencel Dress' },
  ];

  protected readonly noTrackList = signal([...this.trackItems]);
  protected readonly withTrackList = signal([...this.trackItems]);
  protected readonly shuffleCount = signal(0);

  protected noTrackRenders = 0;
  protected withTrackRenders = 0;

  protected renderNoTrack(): string {
    this.noTrackRenders++;
    return '';
  }

  protected renderWithTrack(): string {
    this.withTrackRenders++;
    return '';
  }

  protected shuffleLists() {
    const shuffled = [...this.trackItems].sort(() => Math.random() - 0.5);
    this.noTrackRenders = 0;
    this.withTrackRenders = 0;
    this.noTrackList.set([...shuffled]);
    this.withTrackList.set([...shuffled]);
    this.shuffleCount.update(n => n + 1);
  }

  // ── Virtual scroll data (10,000 items) ───────────────────────
  readonly bigList = Array.from({ length: 10_000 }, (_, i) => ({
    id: i + 1,
    label: `Product-${String(i + 1).padStart(5, '0')}`,
    score: Math.round(Math.random() * 100),
  }));
}
