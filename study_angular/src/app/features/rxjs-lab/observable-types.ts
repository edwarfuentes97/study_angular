import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

interface LogEntry {
  time: string;
  message: string;
}

type SubjectType = 'Subject' | 'BehaviorSubject' | 'ReplaySubject' | 'AsyncSubject';

@Component({
  selector: 'app-observable-types',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div class="lab-header">
      <h2>🔬 Observable Types</h2>
      <p>Interactive demo: Subject vs BehaviorSubject vs ReplaySubject vs AsyncSubject</p>
      <nav class="lab-nav">
        <a routerLink="/lab/rxjs" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Observable Types</a>
        <a routerLink="/lab/rxjs/operators" routerLinkActive="active">Operators</a>
        <a routerLink="/lab/rxjs/search" routerLinkActive="active">Search</a>
        <a routerLink="/lab/rxjs/combining" routerLinkActive="active">Combining</a>
        <a routerLink="/lab/rxjs/memory" routerLinkActive="active">Memory Leaks</a>
      </nav>
    </div>

    <div class="tabs">
      @for (tab of subjectTypes; track tab) {
        <button class="tab-btn" [class.active]="activeTab() === tab" (click)="switchTab(tab)">
          {{ tab }}
        </button>
      }
    </div>

    <div class="tab-content card">
      <h3>{{ activeTab() }}</h3>
      <p class="description">{{ descriptions[activeTab()] }}</p>

      <div class="controls">
        <button class="btn btn-primary" (click)="createSubject()" [disabled]="subjectActive()">
          Create Subject
        </button>
        <button class="btn" (click)="emit()" [disabled]="!subjectActive() || completed()">
          Emit Value
        </button>
        <button class="btn" (click)="subscribeLate()" [disabled]="!subjectActive()">
          Subscribe Late
        </button>
        <button class="btn btn-danger" (click)="complete()" [disabled]="!subjectActive() || completed()">
          Complete
        </button>
        <button class="btn" (click)="reset()">Reset</button>
      </div>

      <div class="info-bar">
        <span class="tag tag-blue">Subscribers: {{ subscriberCount() }}</span>
        <span class="tag tag-green">Emissions: {{ emissionCount() }}</span>
        @if (completed()) {
          <span class="tag tag-red">Completed</span>
        }
      </div>

      <div class="output-log" #logContainer>
        @if (logs().length === 0) {
          <div class="log-entry" style="color: var(--text-muted)">
            Click "Create Subject" to start the demo...
          </div>
        }
        @for (entry of logs(); track $index) {
          <div class="log-entry">
            <span class="log-time">{{ entry.time }}</span>
            <span>{{ entry.message }}</span>
          </div>
        }
      </div>
    </div>
  `,
  styles: `
    :host { display: block; }
    .lab-nav {
      display: flex; gap: 0.5rem; margin-top: 0.6rem; flex-wrap: wrap;
    }
    .lab-nav a {
      padding: 0.3rem 0.7rem; border-radius: 6px; font-size: 0.85rem;
      border: 1px solid var(--border); color: var(--text-muted); text-decoration: none;
      transition: all 0.15s;
    }
    .lab-nav a:hover { border-color: var(--accent-blue); color: var(--text); }
    .lab-nav a.active { background: var(--accent-blue); color: #000; border-color: var(--accent-blue); }

    .tabs {
      display: flex; gap: 0.3rem; margin: 1rem 0 0;
    }
    .tab-btn {
      padding: 0.5rem 1rem; border: 1px solid var(--border); border-bottom: none;
      border-radius: 6px 6px 0 0; background: var(--bg); color: var(--text-muted);
      cursor: pointer; font-size: 0.85rem; transition: all 0.15s;
    }
    .tab-btn:hover { color: var(--text); }
    .tab-btn.active {
      background: var(--bg-card); color: var(--accent-blue);
      border-color: var(--accent-blue); border-bottom: 1px solid var(--bg-card);
    }

    .tab-content { border-radius: 0 8px 8px 8px; }
    .tab-content h3 { color: var(--accent-purple); margin-bottom: 0.3rem; }
    .description { color: var(--text-muted); font-size: 0.88rem; margin-bottom: 0.8rem; }

    .controls { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 0.8rem; }
    .info-bar { display: flex; gap: 0.5rem; margin-bottom: 0.8rem; flex-wrap: wrap; }
  `
})
export class ObservableTypesComponent {
  readonly subjectTypes: SubjectType[] = ['Subject', 'BehaviorSubject', 'ReplaySubject', 'AsyncSubject'];

  readonly descriptions: Record<SubjectType, string> = {
    Subject: 'Plain Subject — late subscribers miss previously emitted values.',
    BehaviorSubject: 'BehaviorSubject — requires initial value, late subscribers get the last emitted value.',
    ReplaySubject: 'ReplaySubject(2) — replays the last 2 values to late subscribers.',
    AsyncSubject: 'AsyncSubject — only emits the last value, and only when completed.',
  };

  activeTab = signal<SubjectType>('Subject');
  logs = signal<LogEntry[]>([]);
  subjectActive = signal(false);
  completed = signal(false);
  subscriberCount = signal(0);
  emissionCount = signal(0);

  private currentSubject: Subject<number> | null = null;
  private emitCounter = 0;
  private subIdCounter = 0;

  switchTab(tab: SubjectType) {
    this.reset();
    this.activeTab.set(tab);
  }

  createSubject() {
    this.reset();
    const type = this.activeTab();

    switch (type) {
      case 'Subject':
        this.currentSubject = new Subject<number>();
        break;
      case 'BehaviorSubject':
        this.currentSubject = new BehaviorSubject<number>(0);
        this.addLog('📦 BehaviorSubject created with initial value: 0');
        break;
      case 'ReplaySubject':
        this.currentSubject = new ReplaySubject<number>(2);
        break;
      case 'AsyncSubject':
        this.currentSubject = new AsyncSubject<number>();
        break;
    }

    this.subjectActive.set(true);
    this.addLog(`✨ ${type} created`);

    // Auto-subscribe first subscriber
    this.addSubscriber('Sub-A');
  }

  emit() {
    if (!this.currentSubject) return;
    this.emitCounter++;
    this.emissionCount.set(this.emitCounter);
    this.currentSubject.next(this.emitCounter);
    this.addLog(`📤 Emitted value: ${this.emitCounter}`);
  }

  subscribeLate() {
    if (!this.currentSubject) return;
    this.subIdCounter++;
    const name = `Late-${this.subIdCounter}`;
    this.addLog(`🔔 ${name} subscribing (after ${this.emitCounter} emissions)...`);
    this.addSubscriber(name);
  }

  complete() {
    if (!this.currentSubject) return;
    this.currentSubject.complete();
    this.completed.set(true);
    this.addLog('🏁 Subject completed');
  }

  reset() {
    if (this.currentSubject) {
      this.currentSubject.complete();
    }
    this.currentSubject = null;
    this.subjectActive.set(false);
    this.completed.set(false);
    this.subscriberCount.set(0);
    this.emissionCount.set(0);
    this.emitCounter = 0;
    this.subIdCounter = 0;
    this.logs.set([]);
  }

  private addSubscriber(name: string) {
    if (!this.currentSubject) return;
    this.subscriberCount.update(c => c + 1);

    this.currentSubject.subscribe({
      next: val => this.addLog(`  ➡️ ${name} received: ${val}`),
      complete: () => this.addLog(`  ✅ ${name} got complete notification`),
    });
  }

  private addLog(message: string) {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })
      + '.' + String(now.getMilliseconds()).padStart(3, '0');
    this.logs.update(l => [...l, { time, message }]);
  }
}
