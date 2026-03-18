import { Component } from '@angular/core';

interface GuideSection {
  title: string;
  level: string;
  questions: string[];
}

const GUIDE_SECTIONS: GuideSection[] = [
  {
    title: 'Nivel 1 — Angular Core',
    level: 'critical',
    questions: [
      '¿Cómo funciona Change Detection en Angular y cómo lo optimizas?',
      '¿Qué son Signals y cómo se comparan con RxJS?',
      '¿Cuál es la diferencia entre template-driven y reactive forms?',
      '¿Cómo implementas lazy loading en Angular?',
      '¿Qué son interceptors y guards? ¿Cuándo los usas?',
      '¿Cuál es la diferencia entre standalone components y NgModules?',
      '¿Cómo manejas el ciclo de vida de un componente?',
      '¿Qué es dependency injection y cómo funciona en Angular?',
    ],
  },
  {
    title: 'Nivel 1 — NgRx & State Management',
    level: 'critical',
    questions: [
      '¿Cuáles son los conceptos core de NgRx (Store, Actions, Reducers, Effects)?',
      '¿Cómo organizas el state en una aplicación grande con NgRx?',
      '¿Qué es EntityAdapter y cómo lo usas?',
      '¿Cómo manejas side effects con NgRx Effects?',
      '¿Qué son selectors y por qué son importantes?',
      '¿Cuándo usarías NgRx vs un servicio simple con Signals?',
    ],
  },
  {
    title: 'Nivel 1 — RxJS',
    level: 'critical',
    questions: [
      '¿Cuál es la diferencia entre Subject, BehaviorSubject y ReplaySubject?',
      '¿Cuándo usas switchMap vs mergeMap vs concatMap vs exhaustMap?',
      '¿Cómo implementas un search typeahead con RxJS?',
      '¿Qué operators usas para combinar streams y cuándo?',
      '¿Cómo previenes memory leaks con subscriptions?',
    ],
  },
  {
    title: 'Nivel 1 — TypeScript',
    level: 'critical',
    questions: [
      '¿Cómo usas generics en TypeScript y por qué son útiles?',
      '¿Qué son type guards y discriminated unions?',
      '¿Cuáles son los utility types más usados?',
      '¿Cómo manejas strict null checks y optional chaining?',
    ],
  },
  {
    title: 'Nivel 2 — Arquitectura & Patrones',
    level: 'high',
    questions: [
      '¿Cuál es la diferencia entre smart y presentational components?',
      '¿Cómo comunicas componentes en Angular?',
      '¿Cómo estructuras una aplicación enterprise en Angular?',
      '¿Qué patrones de diseño aplicas frecuentemente en Angular?',
      '¿Cómo manejas autenticación y autorización?',
    ],
  },
  {
    title: 'Nivel 2 — Performance',
    level: 'high',
    questions: [
      '¿Cómo usas @defer blocks para mejorar la carga?',
      '¿Qué es trackBy y por qué importa en listas?',
      '¿Cómo implementas virtual scrolling?',
      '¿Qué es la estrategia OnPush y cómo la aplicas?',
      '¿Cómo analizas y mejoras bundle size?',
    ],
  },
  {
    title: 'Nivel 3 — Testing',
    level: 'high',
    questions: [
      '¿Cómo testas componentes con dependencias?',
      '¿Cómo testas NgRx (reducers, effects, selectors)?',
      '¿Cuál es tu estrategia de testing en Angular?',
      '¿Cómo haces mocking de servicios HTTP?',
      '¿Qué herramientas usas para testing E2E?',
    ],
  },
  {
    title: 'Nivel 4 — Behavioral',
    level: 'complementary',
    questions: [
      'Describe un proyecto complejo que lideraste.',
      '¿Cómo manejas desacuerdos técnicos en el equipo?',
      '¿Cómo priorizas cuando tienes múltiples deadlines?',
      '¿Cuéntame de un bug difícil que resolviste?',
      '¿Cómo te mantienes actualizado con la tecnología?',
    ],
  },
  {
    title: 'Nivel 4 — System Design',
    level: 'complementary',
    questions: [
      '¿Cómo diseñarías un dashboard de analytics en tiempo real?',
      '¿Cómo implementarías micro-frontends?',
      '¿Cómo diseñas una aplicación offline-first?',
      '¿Cómo manejas i18n y l10n a escala?',
    ],
  },
];

@Component({
  templateUrl: './study-guide.html',
  styleUrl: './study-guide.css'
})
export class StudyGuideComponent {
  protected readonly sections = GUIDE_SECTIONS;
  private openSet = new Set<string>();

  protected toggle(section: string, index: number): void {
    const key = `${section}::${index}`;
    if (this.openSet.has(key)) {
      this.openSet.delete(key);
    } else {
      this.openSet.add(key);
    }
  }

  protected isOpen(section: string, index: number): boolean {
    return this.openSet.has(`${section}::${index}`);
  }
}
