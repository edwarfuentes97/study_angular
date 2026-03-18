import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

export interface LabStep {
  path: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-lab-layout',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="lab-shell">
      <div class="lab-top">
        <h2>{{ icon }} {{ title }}</h2>
        <nav class="step-nav">
          @for (step of steps; track step.path) {
            <a [routerLink]="step.path" routerLinkActive="active"
               [routerLinkActiveOptions]="{ exact: step.path === '' || step.path === '.' }">
              <span class="step-icon">{{ step.icon }}</span>
              {{ step.label }}
            </a>
          }
        </nav>
      </div>
      <div class="lab-body">
        <router-outlet />
      </div>
    </div>
  `,
  styles: `
    .lab-shell { min-height: 80vh; }
    .lab-top {
      margin-bottom: 1rem;
      padding-bottom: 0.8rem;
      border-bottom: 1px solid var(--border);
    }
    .lab-top h2 { font-size: 1.4rem; margin-bottom: 0.6rem; }
    .step-nav {
      display: flex;
      gap: 0;
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 8px;
      overflow: hidden;
    }
    .step-nav a {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
      padding: 0.6rem 1rem;
      color: var(--text-muted);
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 500;
      transition: all 0.15s;
      border-right: 1px solid var(--border);
      position: relative;
    }
    .step-nav a:last-child { border-right: none; }
    .step-nav a:hover { color: var(--text); background: rgba(88,166,255,0.05); }
    .step-nav a.active {
      color: var(--accent-blue);
      background: rgba(88,166,255,0.1);
    }
    .step-nav a.active::after {
      content: '';
      position: absolute;
      bottom: 0; left: 0; right: 0;
      height: 2px;
      background: var(--accent-blue);
    }
    .step-icon { font-size: 1.1rem; }
    .lab-body { padding: 0.5rem 0; }
  `
})
export class LabLayoutComponent {
  @Input() title = '';
  @Input() icon = '';
  @Input() steps: LabStep[] = [];
}
