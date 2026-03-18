import { Component } from '@angular/core';

@Component({
  selector: 'app-lazy-child-a',
  template: `
    <div class="card child-card">
      <h4>🅰️ Lazy Child A</h4>
      <p>Lazy Child A loaded at <strong>{{ loadedAt }}</strong></p>
      <p class="hint">
        This child component was also lazy-loaded as part of the <code>lazy-feature</code> chunk.
        It shares the same bundle as the parent but has its own route.
      </p>
    </div>
  `,
  styles: `
    .child-card { border-left: 3px solid var(--accent-blue); }
    h4 { margin: 0 0 0.75rem; color: var(--accent-blue); }
    p { margin: 0.25rem 0; }
    .hint {
      color: var(--text-muted); font-size: 0.85rem; margin-top: 0.5rem;
    }
    .hint code {
      background: var(--bg-code); padding: 0.1rem 0.35rem;
      border-radius: 4px; font-size: 0.8rem;
    }
  `,
})
export class LazyChildAComponent {
  loadedAt = new Date().toLocaleTimeString();
}
