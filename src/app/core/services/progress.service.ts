import { Injectable, signal, computed } from '@angular/core';
import { TopicId, StudyTopic } from '../../shared/models/product.model';

export interface SubtopicProgress {
  completed: boolean;
}

export interface TopicProgress {
  subtopics: Record<string, SubtopicProgress>;
}

const STORAGE_KEY = 'study-angular-progress';

export const STUDY_TOPICS: StudyTopic[] = [
  {
    id: 'ngrx', title: 'NgRx — State Management', icon: '🔴',
    level: 'critical', route: '/lab/ngrx',
    subtopics: ['Store & Actions', 'Reducers & EntityAdapter', 'Effects & HTTP', 'Selectors', 'Standalone Integration']
  },
  {
    id: 'rxjs', title: 'RxJS — Programación Reactiva', icon: '🔴',
    level: 'critical', route: '/lab/rxjs',
    subtopics: ['Observable Types', 'Flattening Operators', 'Search Typeahead', 'Combining Operators', 'Memory Leaks']
  },
  {
    id: 'angular-core', title: 'Angular Core Avanzado', icon: '🔴',
    level: 'critical', route: '/lab/angular',
    subtopics: ['Change Detection', 'Signals', 'Reactive Forms', 'Lazy Loading', 'Interceptors & Guards']
  },
  {
    id: 'typescript', title: 'TypeScript Avanzado', icon: '🔴',
    level: 'critical', route: '/lab/typescript',
    subtopics: ['Generics', 'Type Guards', 'Discriminated Unions', 'Utility Types']
  },
  {
    id: 'architecture', title: 'Arquitectura', icon: '🟠',
    level: 'high', route: '/lab/architecture',
    subtopics: ['Smart/Dumb Components', 'Component Communication', 'Enterprise Structure']
  },
  {
    id: 'performance', title: 'Performance', icon: '🟠',
    level: 'high', route: '/lab/performance',
    subtopics: ['@defer Blocks', 'trackBy', 'Virtual Scrolling', 'OnPush Strategy']
  },
  {
    id: 'testing', title: 'Testing', icon: '🟠',
    level: 'high', route: '/lab/testing',
    subtopics: ['Component Tests', 'NgRx Tests', 'Service Tests']
  },
  {
    id: 'fundamentals' as TopicId, title: 'Angular Fundamentals', icon: '🟢',
    level: 'critical', route: '/lab/fundamentals',
    subtopics: ['Directivas', 'Pipes', 'Lifecycle Hooks', 'Content Projection', 'ViewEncapsulation', 'HttpClient & API', 'Dependency Injection', 'Template Refs & ViewChild', 'Routing Avanzado', 'Modules vs Standalone', 'Decoradores']
  },
  {
    id: 'behavioral', title: 'Behavioral & System Design', icon: '💬',
    level: 'complementary', route: '/study-guide',
    subtopics: ['STAR Method', 'System Design', 'Cultural Fit']
  },
];

@Injectable({ providedIn: 'root' })
export class ProgressService {
  private _progress = signal<Record<TopicId, TopicProgress>>(this.load());

  readonly progress = this._progress.asReadonly();

  readonly overallPercent = computed(() => {
    const p = this._progress();
    let total = 0, done = 0;
    for (const topic of STUDY_TOPICS) {
      for (const sub of topic.subtopics) {
        total++;
        if (p[topic.id]?.subtopics[sub]?.completed) done++;
      }
    }
    return total === 0 ? 0 : Math.round((done / total) * 100);
  });

  readonly topicPercents = computed(() => {
    const p = this._progress();
    const result: Record<string, number> = {};
    for (const topic of STUDY_TOPICS) {
      const total = topic.subtopics.length;
      const done = topic.subtopics.filter(s => p[topic.id]?.subtopics[s]?.completed).length;
      result[topic.id] = total === 0 ? 0 : Math.round((done / total) * 100);
    }
    return result;
  });

  toggleSubtopic(topicId: TopicId, subtopic: string): void {
    const current = { ...this._progress() };
    if (!current[topicId]) {
      current[topicId] = { subtopics: {} };
    }
    const sub = current[topicId].subtopics[subtopic];
    current[topicId] = {
      ...current[topicId],
      subtopics: {
        ...current[topicId].subtopics,
        [subtopic]: { completed: !sub?.completed }
      }
    };
    this._progress.set(current);
    this.save(current);
  }

  isCompleted(topicId: TopicId, subtopic: string): boolean {
    return this._progress()[topicId]?.subtopics[subtopic]?.completed ?? false;
  }

  private load(): Record<TopicId, TopicProgress> {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {} as any;
    } catch {
      return {} as any;
    }
  }

  private save(data: Record<TopicId, TopicProgress>): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }
}
