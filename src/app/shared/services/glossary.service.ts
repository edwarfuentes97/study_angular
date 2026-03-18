import { Injectable } from '@angular/core';

export interface GlossaryTerm {
  term: string;
  definition: string;
  topic: string;  // route path: 'ngrx', 'rxjs', 'angular', 'typescript', 'architecture', 'performance', 'testing'
}

export interface SearchResult {
  term: string;
  definition: string;
  topic: string;
  route: string;
}

@Injectable({ providedIn: 'root' })
export class GlossaryService {
  
  readonly terms: GlossaryTerm[] = [
    // NgRx terms
    { term: 'Store', definition: 'Objeto centralizado que contiene todo el estado de la aplicación. Solo se modifica mediante Actions + Reducers.', topic: 'ngrx' },
    { term: 'Actions', definition: 'Objetos que describen un evento que ocurrió (ej: usuario hizo login). Solo comunican intención al Store.', topic: 'ngrx' },
    { term: 'Reducers', definition: 'Funciones puras que reciben el estado actual y una Action, y retornan un nuevo estado sin mutar el original.', topic: 'ngrx' },
    { term: 'Effects', definition: 'Clases que manejan side effects (HTTP, timers, navegación). Escuchan Actions y emiten nuevas Actions.', topic: 'ngrx' },
    { term: 'Selectors', definition: 'Funciones puras que extraen porciones del estado. Usan memoización para evitar recálculos innecesarios.', topic: 'ngrx' },
    { term: 'Redux', definition: 'Patrón de arquitectura: Action → Reducer → Store → Vista. NgRx es su implementación para Angular.', topic: 'ngrx' },
    { term: 'flujo de datos unidireccional', definition: 'Vista despacha Actions → Reducer actualiza Store → Store notifica a la Vista. Nunca al revés.', topic: 'ngrx' },
    { term: 'inmutable', definition: 'Que no puede ser modificado después de crearse. En NgRx, cada cambio produce un nuevo objeto de estado.', topic: 'ngrx' },
    { term: 'single source of truth', definition: 'Principio donde toda la información de la app vive en un solo lugar (el Store), evitando datos desincronizados.', topic: 'ngrx' },
    { term: 'side effects', definition: 'Operaciones que interactúan con el mundo exterior: HTTP, localStorage, navegación. No son funciones puras.', topic: 'ngrx' },
    { term: 'Redux DevTools', definition: 'Extensión de navegador para inspeccionar estado, historial de acciones, y time-travel debugging.', topic: 'ngrx' },
    { term: 'time travel', definition: 'Retroceder y avanzar en el historial de estados en Redux DevTools. Útil para reproducir bugs.', topic: 'ngrx' },
    { term: 'funciones puras', definition: 'Siempre retornan lo mismo para mismos inputs, sin side effects. Predecibles y testeables.', topic: 'ngrx' },
    { term: 'feature states', definition: 'Porciones del estado global para un módulo/feature. Se registran con provideState() y permiten lazy loading.', topic: 'ngrx' },
    { term: 'memoización', definition: 'Caché de resultados: se reutiliza si inputs no cambiaron. Selectors y computed() la usan.', topic: 'ngrx' },
    { term: 'EntityAdapter', definition: 'Utilidad de @ngrx/entity con operaciones CRUD predefinidas (addOne, updateOne, removeOne, setAll).', topic: 'ngrx' },
    { term: 'boilerplate', definition: 'Código repetitivo para configurar algo. NgRx tiene bastante por cada feature.', topic: 'ngrx' },
    
    // RxJS terms
    { term: 'Observable', definition: 'Flujo de datos asíncrono. Es lazy: no hace nada hasta que alguien se suscribe con .subscribe().', topic: 'rxjs' },
    { term: 'Subject', definition: 'Observable multicast: comparte datos entre múltiples suscriptores. Emite valores con .next().', topic: 'rxjs' },
    { term: 'BehaviorSubject', definition: 'Subject con valor actual. Nuevos suscriptores reciben el último valor emitido. Ideal para estado.', topic: 'rxjs' },
    { term: 'ReplaySubject', definition: 'Subject que guarda los últimos N valores y los reproduce para nuevos suscriptores.', topic: 'rxjs' },
    { term: 'AsyncSubject', definition: 'Subject que solo emite el último valor cuando se completa. Poco usado, para resultados únicos.', topic: 'rxjs' },
    { term: 'operadores de flattening', definition: 'switchMap, mergeMap, concatMap, exhaustMap — transforman Observables anidados en flujo plano.', topic: 'rxjs' },
    { term: 'switchMap', definition: 'Cancela la suscripción anterior cuando llega un nuevo valor. Ideal para búsquedas en tiempo real.', topic: 'rxjs' },
    { term: 'mergeMap', definition: 'Ejecuta todas las suscripciones en paralelo sin cancelar. Para operaciones independientes.', topic: 'rxjs' },
    { term: 'concatMap', definition: 'Ejecuta suscripciones en secuencia, esperando que termine cada una. Cuando el orden importa.', topic: 'rxjs' },
    { term: 'exhaustMap', definition: 'Ignora nuevos valores mientras hay suscripción activa. Evita doble-click en login/submit.', topic: 'rxjs' },
    { term: 'memory leaks', definition: 'Fugas de memoria por suscripciones nunca canceladas. El componente muere pero el Observable sigue.', topic: 'rxjs' },
    { term: 'shareReplay', definition: 'Comparte un Observable entre suscriptores y cachea los últimos N valores. Evita HTTP duplicados.', topic: 'rxjs' },
    { term: 'pipe', definition: 'Método de Observable para encadenar operadores: obs$.pipe(filter(...), map(...)).', topic: 'rxjs' },
    { term: 'async pipe', definition: 'Pipe de Angular (| async) que suscribe en template y se desuscribe al destruir el componente.', topic: 'rxjs' },
    
    // Angular Core terms
    { term: 'Change Detection', definition: 'Mecanismo de Angular para detectar cambios y actualizar el DOM. Default revisa todo; OnPush solo si @Input cambia.', topic: 'angular' },
    { term: 'OnPush', definition: 'Estrategia que solo revisa cuando @Input cambia por referencia, se dispara un evento, o async pipe emite.', topic: 'angular' },
    { term: 'Signals', definition: 'Primitiva reactiva de Angular 17+ para estado. Síncronos, simples, integrados con Change Detection.', topic: 'angular' },
    { term: 'Lazy Loading', definition: 'Cargar módulos/componentes solo cuando se necesitan. Reduce el bundle inicial y tiempo de carga.', topic: 'angular' },
    { term: 'HTTP Interceptors', definition: 'Funciones que interceptan peticiones/respuestas HTTP. Agregan headers, manejan errores, cachean.', topic: 'angular' },
    { term: 'Route Guards', definition: 'Funciones que protegen rutas: canActivate (acceder), canDeactivate (salir), canLoad (cargar).', topic: 'angular' },
    { term: 'Standalone Components', definition: 'Componentes Angular 14+ sin NgModule. standalone: true y gestionan sus propias dependencias.', topic: 'angular' },
    { term: '@defer', definition: 'Angular 17+: carga diferida de componentes con triggers (on viewport, on idle, on hover).', topic: 'angular' },
    
    // TypeScript terms
    { term: 'Generics', definition: 'Parámetros de tipo para crear funciones/clases reutilizables con cualquier tipo. Ej: Array<T>.', topic: 'typescript' },
    { term: 'Type Guards', definition: 'Funciones que estrechan el tipo en un bloque condicional. TypeScript sabe el tipo exacto.', topic: 'typescript' },
    { term: 'Discriminated Unions', definition: 'Uniones con campo discriminante (status: loading | success). TypeScript estrecha por ese campo.', topic: 'typescript' },
    
    // Architecture terms
    { term: 'Smart/Dumb components', definition: 'Smart maneja lógica/Store; Dumb solo recibe @Input y emite @Output.', topic: 'architecture' },
    { term: 'Core module', definition: 'Módulo con servicios singleton, guards e interceptors. Se importa UNA vez en raíz.', topic: 'architecture' },
    { term: 'singleton', definition: 'Una sola instancia del servicio en toda la app. En Angular: providedIn: root.', topic: 'architecture' },
    { term: 'Shared module', definition: 'Módulo con componentes, pipes y directivas reutilizables para cualquier módulo.', topic: 'architecture' },
    { term: 'Feature modules', definition: 'Módulos autocontenidos por funcionalidad. Se cargan con lazy loading.', topic: 'architecture' },
    { term: 'SCAM pattern', definition: 'Single Component Angular Module: un componente por módulo. Reemplazado por Standalone.', topic: 'architecture' },
    { term: 'Barrel exports', definition: 'Archivos index.ts que re-exportan lo público de una carpeta. Simplifican imports.', topic: 'architecture' },
    { term: 'monorepo', definition: 'Repositorio único con múltiples proyectos/librerías. NX lo gestiona con builds incrementales.', topic: 'architecture' },
    { term: 'micro-frontend', definition: 'UI dividida en apps independientes que se despliegan por separado.', topic: 'architecture' },
    { term: 'Module Federation', definition: 'Webpack 5: apps comparten código en runtime. Base de micro-frontends.', topic: 'architecture' },
    { term: 'ADRs', definition: 'Architecture Decision Records: documentos cortos con decisiones técnicas y su razonamiento.', topic: 'architecture' },
    
    // Performance terms
    { term: 'trackBy', definition: 'Función con *ngFor que identifica items por ID, evitando re-renderizar toda la lista.', topic: 'performance' },
    { term: 'virtual scrolling', definition: 'Solo renderiza elementos visibles en pantalla. Mejora rendimiento con miles de items.', topic: 'performance' },
    { term: 'Web Workers', definition: 'Threads del navegador en segundo plano sin bloquear la UI. Para cálculos pesados.', topic: 'performance' },
    { term: 'Preloading strategies', definition: 'Pre-cargar módulos lazy-loaded en segundo plano después de la carga inicial.', topic: 'performance' },
    { term: 'SSR', definition: 'Server-Side Rendering: renderizar en servidor. Mejora SEO y tiempo de primera pintura.', topic: 'performance' },
    { term: 'hydration', definition: 'Angular toma el HTML del servidor y lo activa en el cliente sin destruirlo y recrearlo.', topic: 'performance' },
    { term: 'TTI', definition: 'Time To Interactive: cuánto tarda la página en responder a clicks y scroll.', topic: 'performance' },
    { term: 'AOT Compilation', definition: 'Ahead-Of-Time: compila templates a JS durante build. Más rápido, detecta errores antes.', topic: 'performance' },
    { term: 'Tree Shaking', definition: 'El bundler elimina código no usado (dead code). Reduce el tamaño del bundle final.', topic: 'performance' },
    { term: 'esbuild', definition: 'Bundler ultrarrápido (Go) usado por Angular 17+. 10-100x más rápido que Webpack.', topic: 'performance' },
    { term: 'bundle size', definition: 'Tamaño total de JS descargado. Menor = más rápido. Lazy loading y tree shaking lo reducen.', topic: 'performance' },
    { term: 'LCP', definition: 'Largest Contentful Paint: cuándo el elemento visible más grande termina de renderizarse.', topic: 'performance' },
    
    // Testing terms
    { term: 'TestBed', definition: 'Configura un módulo de testing aislado para compilar componentes con dependencias mock.', topic: 'testing' },
    
    // General / Cross-cutting
    { term: 'NX', definition: 'Framework para monorepos: build, testing, generación de código. Builds incrementales.', topic: 'architecture' },
    { term: 'Webpack', definition: 'Bundler que empaqueta código, estilos y assets. Angular lo usó por defecto hasta v16.', topic: 'performance' },
    { term: 'STAR', definition: 'Situación, Tarea, Acción, Resultado: método para respuestas behavioral en entrevistas.', topic: 'architecture' },
    { term: 'CI/CD', definition: 'Continuous Integration/Deployment: automatización de build, test y despliegue en cada push.', topic: 'architecture' },
    { term: 'WCAG', definition: 'Web Content Accessibility Guidelines: estándar con niveles A, AA, AAA para web accesible.', topic: 'architecture' },
    { term: 'ESG', definition: 'Environmental, Social, Governance: marco de sostenibilidad empresarial.', topic: 'architecture' },
    { term: 'Higg Index', definition: 'Herramientas para medir impacto ambiental y social en cadena de suministro textil.', topic: 'architecture' },
    { term: 'Computation caching', definition: 'NX almacena resultados de builds/tests previos y reutiliza si código no cambió.', topic: 'performance' },
    { term: 'Dependency graph', definition: 'Visualización NX de relaciones entre proyectos. Permite builds selectivos.', topic: 'architecture' },
    { term: 'memoizadas', definition: 'Caché de resultados: se reutiliza si inputs no cambiaron. Selectors y computed() la usan.', topic: 'ngrx' },

    // Fundamentals terms
    { term: 'Directivas', definition: 'Clases que modifican el DOM. 3 tipos: componentes (con template), estructurales (*ngIf, @if) y de atributo (ngClass, ngStyle).', topic: 'fundamentals' },
    { term: 'Pipes', definition: 'Transforman datos en el template. Pure (default, solo re-ejecuta si input cambia) o Impure (cada ciclo de CD).', topic: 'fundamentals' },
    { term: 'Lifecycle Hooks', definition: 'Métodos que Angular llama en momentos clave: ngOnInit, ngOnChanges, ngOnDestroy, ngAfterViewInit, etc.', topic: 'fundamentals' },
    { term: 'ngOnInit', definition: 'Se ejecuta una vez después del primer ngOnChanges. Ideal para inicialización, HTTP calls, setup de suscripciones.', topic: 'fundamentals' },
    { term: 'ngOnDestroy', definition: 'Se ejecuta cuando el componente se destruye. Para cleanup: unsubscribe, removeEventListener, clearInterval.', topic: 'fundamentals' },
    { term: 'ngOnChanges', definition: 'Se ejecuta cada vez que un @Input cambia. Recibe SimpleChanges con previousValue y currentValue.', topic: 'fundamentals' },
    { term: 'Content Projection', definition: 'Pasar contenido HTML de padre a hijo mediante <ng-content>. Single-slot o multi-slot con select.', topic: 'fundamentals' },
    { term: 'ng-content', definition: 'Elemento para proyectar contenido del padre al hijo. select="" para multi-slot projection.', topic: 'fundamentals' },
    { term: 'ng-template', definition: 'Template que no se renderiza por defecto. Se usa con *ngIf else, ngTemplateOutlet, directivas estructurales.', topic: 'fundamentals' },
    { term: 'ng-container', definition: 'Contenedor lógico que no genera elemento DOM. Ideal para agrupar directivas sin div extra.', topic: 'fundamentals' },
    { term: 'ViewEncapsulation', definition: 'Controla cómo se encapsulan los estilos CSS: Emulated (default), ShadowDom (nativo), None (global).', topic: 'fundamentals' },
    { term: 'Shadow DOM', definition: 'API nativa del navegador para encapsular DOM y CSS. Angular lo emula por defecto con atributos _nghost/_ngcontent.', topic: 'fundamentals' },
    { term: 'Dependency Injection', definition: 'Patrón donde Angular provee instancias de servicios automáticamente. Hierarchical injector tree.', topic: 'fundamentals' },
    { term: 'InjectionToken', definition: 'Token para inyectar valores no-clase (strings, configs). new InjectionToken<Type>(description).', topic: 'fundamentals' },
    { term: 'providedIn', definition: 'Metadato de @Injectable que define dónde registrar el servicio: root (singleton), any (por lazy module), platform.', topic: 'fundamentals' },
    { term: 'ViewChild', definition: 'Decorador para acceder a un elemento hijo o directiva desde la clase del componente. Alternativa signal: viewChild().', topic: 'fundamentals' },
    { term: 'ElementRef', definition: 'Wrapper del elemento DOM nativo. Acceso directo via nativeElement. Usar con precaución (no SSR-safe).', topic: 'fundamentals' },
    { term: 'TemplateRef', definition: 'Referencia a un ng-template. Se usa con ViewContainerRef para crear vistas dinámicamente.', topic: 'fundamentals' },
    { term: 'ViewContainerRef', definition: 'Punto de anclaje para insertar vistas (componentes/templates) dinámicamente en el DOM.', topic: 'fundamentals' },
    { term: 'Resolver', definition: 'Función que pre-carga datos antes de activar una ruta. El componente recibe los datos ya listos.', topic: 'fundamentals' },
    { term: 'ActivatedRoute', definition: 'Servicio con info de la ruta activa: params, queryParams, data, url. snapshot (estático) vs observable (reactivo).', topic: 'fundamentals' },
    { term: 'NgModule', definition: 'Clase con @NgModule que agrupa declarations, imports, exports, providers. Reemplazado por Standalone en Angular 20.', topic: 'fundamentals' },
    { term: 'DestroyRef', definition: 'Angular 16+ alternativa a ngOnDestroy. inject(DestroyRef).onDestroy(() => cleanup()). Funcional y composable.', topic: 'fundamentals' },
    { term: 'HttpClient', definition: 'Servicio de Angular para llamadas HTTP. Retorna Observables. Se configura con provideHttpClient().', topic: 'fundamentals' },
    { term: 'HttpParams', definition: 'Clase inmutable para construir query params: new HttpParams().set("q", term).set("page", 1).', topic: 'fundamentals' },
    { term: 'HttpHeaders', definition: 'Clase inmutable para headers HTTP: new HttpHeaders().set("Authorization", "Bearer token").', topic: 'fundamentals' },
    { term: 'HttpErrorResponse', definition: 'Objeto de error HTTP con status, message, url. Se captura con catchError() en el pipe del Observable.', topic: 'fundamentals' },
    { term: 'HttpTestingController', definition: 'Mock de HttpClient para tests. expectOne() verifica la URL, flush() envía respuesta mock, verify() confirma que no hay requests pendientes.', topic: 'fundamentals' },
    { term: 'withFetch', definition: 'Opción de provideHttpClient() que usa fetch() API nativa en vez de XMLHttpRequest. Mejor para SSR.', topic: 'fundamentals' },
    { term: 'idempotente', definition: 'Operación que produce el mismo resultado sin importar cuántas veces se ejecute. GET, PUT, DELETE son idempotentes; POST no.', topic: 'fundamentals' },
  ];

  // Map topic IDs to routes and labels
  private readonly topicRoutes: Record<string, { route: string; label: string }> = {
    'ngrx': { route: '/lab/ngrx', label: 'NgRx Lab' },
    'rxjs': { route: '/lab/rxjs', label: 'RxJS Lab' },
    'angular': { route: '/lab/angular', label: 'Angular Core Lab' },
    'typescript': { route: '/lab/typescript', label: 'TypeScript Lab' },
    'architecture': { route: '/lab/architecture', label: 'Architecture Lab' },
    'performance': { route: '/lab/performance', label: 'Performance Lab' },
    'testing': { route: '/lab/testing', label: 'Testing Lab' },
    'fundamentals': { route: '/lab/fundamentals', label: 'Angular Fundamentals' },
  };

  getDefinition(term: string): string | null {
    const found = this.terms.find(t => t.term.toLowerCase() === term.toLowerCase());
    return found?.definition ?? null;
  }

  search(query: string): SearchResult[] {
    if (!query || query.length < 2) return [];
    const q = query.toLowerCase();
    const results: SearchResult[] = [];

    for (const t of this.terms) {
      if (t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q)) {
        const info = this.topicRoutes[t.topic];
        results.push({
          term: t.term,
          definition: t.definition,
          topic: info?.label ?? t.topic,
          route: info?.route ?? '/lab/' + t.topic,
        });
      }
    }
    return results;
  }

  getTermsByTopic(topic: string): GlossaryTerm[] {
    return this.terms.filter(t => t.topic === topic);
  }

  getRoute(topic: string): string {
    return this.topicRoutes[topic]?.route ?? '/lab/' + topic;
  }
}
