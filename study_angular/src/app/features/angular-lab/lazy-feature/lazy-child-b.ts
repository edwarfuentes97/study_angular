import { Component } from '@angular/core';

@Component({
  selector: 'app-lazy-child-b',
  template: `
    <div class="card child-card">
      <h4>🅱️ Lazy Child B</h4>
      <p>Lazy Child B loaded at <strong>{{ loadedAt }}</strong></p>
      <p class="hint">
        Each child route is independently lazy-loaded via <code>loadComponent</code>.
        Navigate between children to see different timestamps.
      </p>
    </div>
  `,
  styles: `
    .child-card { border-left: 3px solid var(--accent-orange); }
    h4 { margin: 0 0 0.75rem; color: var(--accent-orange); }
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
export class LazyChildBComponent {
  loadedAt = new Date().toLocaleTimeString();
}
