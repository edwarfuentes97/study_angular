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
  templateUrl: './observable-types.html',
  styleUrl: './observable-types.css'
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
