import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-lazy-demo',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="lab-header">
      <h2>⚡ Angular Core Lab</h2>
      <p>Explore Angular's core concepts: change detection, signals, forms, and lazy loading.</p>
    </div>

    <nav class="lab-tabs">
      <a routerLink="/lab/angular" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
        Change Detection
      </a>
      <a routerLink="/lab/angular/signals" routerLinkActive="active">Signals</a>
      <a routerLink="/lab/angular/forms" routerLinkActive="active">Forms</a>
      <a routerLink="/lab/angular/lazy" routerLinkActive="active">Lazy Loading</a>
    </nav>

    <section class="lab-section">
      <h3>Lazy-Loaded Feature Module</h3>

      <div class="card banner">
        <span class="banner-icon">🚀</span>
        <div>
          <p><strong>This component was lazy-loaded!</strong></p>
          <p class="hint">Loaded at: <code>{{ loadedAt }}</code></p>
          <p class="hint">
            The entire <code>lazy-feature/</code> bundle is only fetched when you navigate to this route,
            reducing the initial bundle size.
          </p>
        </div>
      </div>

      <nav class="child-tabs">
        <a routerLink="/lab/angular/lazy" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
          Overview
        </a>
        <a routerLink="/lab/angular/lazy/child-a" routerLinkActive="active">Child A</a>
        <a routerLink="/lab/angular/lazy/child-b" routerLinkActive="active">Child B</a>
      </nav>

      <router-outlet />
    </section>
  `,
  styles: `
    .lab-tabs {
      display: flex; gap: 0.5rem; margin-bottom: 1.5rem;
      border-bottom: 1px solid var(--border); padding-bottom: 0.75rem;
    }
    .lab-tabs a {
      padding: 0.5rem 1rem; border-radius: 6px 6px 0 0;
      color: var(--text-muted); text-decoration: none; font-weight: 500;
      border: 1px solid transparent; transition: all 0.2s;
    }
    .lab-tabs a:hover { color: var(--text); background: var(--bg-card); }
    .lab-tabs a.active {
      color: var(--accent-purple); border-color: var(--border);
      border-bottom-color: var(--bg); background: var(--bg-card);
    }

    .banner {
      display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1.5rem;
    }
    .banner-icon { font-size: 2rem; }
    .banner p { margin: 0.25rem 0; }
    .hint { color: var(--text-muted); font-size: 0.85rem; }
    .hint code {
      background: var(--bg-code); padding: 0.1rem 0.35rem;
      border-radius: 4px; font-size: 0.8rem;
    }

    .child-tabs {
      display: flex; gap: 0.5rem; margin-bottom: 1rem;
      border-bottom: 1px solid var(--border); padding-bottom: 0.5rem;
    }
    .child-tabs a {
      padding: 0.4rem 0.85rem; border-radius: 6px;
      color: var(--text-muted); text-decoration: none; font-size: 0.9rem;
      transition: all 0.2s;
    }
    .child-tabs a:hover { color: var(--text); background: var(--bg-card); }
    .child-tabs a.active { color: var(--accent-green); background: rgba(63,185,80,0.1); }
  `,
})
export class LazyDemoComponent {
  loadedAt = new Date().toLocaleTimeString();
}
