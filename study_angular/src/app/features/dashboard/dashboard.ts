import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressService, STUDY_TOPICS } from '../../core/services/progress.service';
import { TopicId } from '../../shared/models/product.model';

@Component({
  imports: [RouterLink],
  template: `
    <section class="dashboard">
      <header class="dashboard-header">
        <h1>🎯 Plan de Estudios — Angular &amp; NgRx</h1>
        <div class="overall">
          <span class="overall-label">Progreso general</span>
          <div class="overall-bar">
            <div class="overall-fill" [style.width.%]="progress.overallPercent()"></div>
          </div>
          <span class="overall-pct">{{ progress.overallPercent() }}%</span>
        </div>
      </header>

      <div class="card-grid">
        @for (topic of topics; track topic.id) {
          <article class="topic-card">
            <div class="topic-head">
              <span class="topic-icon">{{ topic.icon }}</span>
              <h2>{{ topic.title }}</h2>
              <span class="topic-pct">{{ progress.topicPercents()[topic.id] }}%</span>
            </div>

            <ul class="subtopic-list">
              @for (sub of topic.subtopics; track sub) {
                <li>
                  <label class="subtopic-label">
                    <input
                      type="checkbox"
                      [checked]="progress.isCompleted(topicId(topic.id), sub)"
                      (change)="progress.toggleSubtopic(topicId(topic.id), sub)"
                    />
                    <span [class.done]="progress.isCompleted(topicId(topic.id), sub)">{{ sub }}</span>
                  </label>
                </li>
              }
            </ul>

            <div class="topic-progress-bar">
              <div class="topic-progress-fill"
                   [style.width.%]="progress.topicPercents()[topic.id]"></div>
            </div>

            <a class="lab-link" [routerLink]="topic.route">Ir al Lab →</a>
          </article>
        }
      </div>
    </section>
  `,
  styles: `
    .dashboard {
      max-width: 960px;
      margin: 0 auto;
    }

    .dashboard-header {
      margin-bottom: 1.5rem;
    }
    .dashboard-header h1 {
      font-size: 1.5rem;
      margin-bottom: 0.8rem;
    }

    .overall {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .overall-label {
      font-size: 0.85rem;
      color: var(--text-muted);
      white-space: nowrap;
    }
    .overall-bar {
      flex: 1;
      height: 8px;
      background: var(--border);
      border-radius: 4px;
      overflow: hidden;
    }
    .overall-fill {
      height: 100%;
      background: var(--accent-green);
      border-radius: 4px;
      transition: width 0.3s ease;
    }
    .overall-pct {
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--accent-green);
      min-width: 3rem;
      text-align: right;
    }

    .card-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
    @media (max-width: 680px) {
      .card-grid { grid-template-columns: 1fr; }
    }

    .topic-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
    }

    .topic-head {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .topic-icon { font-size: 1.2rem; }
    .topic-head h2 {
      flex: 1;
      font-size: 1rem;
      font-weight: 600;
    }
    .topic-pct {
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--accent-blue);
    }

    .subtopic-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }
    .subtopic-label {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.85rem;
      color: var(--text-muted);
      cursor: pointer;
    }
    .subtopic-label input[type="checkbox"] {
      accent-color: var(--accent-green);
      cursor: pointer;
    }
    .subtopic-label .done {
      text-decoration: line-through;
      color: var(--accent-green);
    }

    .topic-progress-bar {
      height: 4px;
      background: var(--border);
      border-radius: 2px;
      overflow: hidden;
    }
    .topic-progress-fill {
      height: 100%;
      background: var(--accent-blue);
      border-radius: 2px;
      transition: width 0.3s ease;
    }

    .lab-link {
      align-self: flex-end;
      font-size: 0.82rem;
      color: var(--accent-blue);
      text-decoration: none;
    }
    .lab-link:hover { text-decoration: underline; }
  `
})
export class DashboardComponent {
  protected readonly progress = inject(ProgressService);
  protected readonly topics = STUDY_TOPICS;

  /** Identity helper so the template can pass TopicId without casting. */
  protected topicId(id: string): TopicId {
    return id as TopicId;
  }
}
