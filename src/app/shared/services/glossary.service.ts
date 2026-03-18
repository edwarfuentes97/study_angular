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
        { term: 'Store', definition: `Es el contenedor central del estado global.

Piensa en él como la fuente única de verdad:
• los componentes no mutan estado directo
• despachan Actions
• los Reducers calculan el nuevo state
• los Selectors leen slices del Store

Úsalo cuando:
• varios componentes dependen de los mismos datos
• necesitas trazabilidad y debugging serio
• quieres evitar estado duplicado o desincronizado

En este proyecto:
• features/ngrx-lab/store/product.state.ts
• features/ngrx-lab/store/product.reducer.ts
• app.config.ts

Riesgo:
• si el estado es solo local o simple, meterlo al Store agrega boilerplate`, topic: 'ngrx' },
        { term: 'Actions', definition: `Describen QUÉ pasó, no cómo reaccionar.

Regla mental:
• action = evento del negocio o de la UI
• reducer/effect = reacción a ese evento

Buenas prácticas:
• nómbralas como [Source] Event
• incluye solo el payload necesario
• no metas lógica dentro de la action

Caso típico:
• [Product Page] Load Products
• [Product API] Load Products Success
• [Product Form] Create Product

En este proyecto:
• features/ngrx-lab/store/product.actions.ts

Error común:
• usar actions como comandos demasiado específicos en vez de eventos del dominio`, topic: 'ngrx' },
        { term: 'Reducers', definition: `Son funciones puras que reciben (state, action) y devuelven un nuevo state.

Reglas duras:
• no hacen HTTP
• no navegan
• no usan timers
• no mutan el state actual

Qué sí hacen:
• cambian flags como loading
• guardan datos de success/failure
• actualizan colecciones y selectedId

En este proyecto:
• features/ngrx-lab/store/product.reducer.ts

Pista de entrevista:
• si hay side effects, no es reducer: eso va en Effects`, topic: 'ngrx' },
        { term: 'Effects', definition: `Es la capa donde viven los side effects.

Ciclo típico:
• entra una Action al stream actions$
• ofType filtra la que interesa
• el effect llama API / navegación / storage
• despacha Success o Failure
• el Reducer actualiza el state final

Claves:
• createEffect(() => ...)
• catchError debe ir dentro del flattening operator
• el operador elegido cambia el comportamiento: switchMap, exhaustMap, mergeMap, concatMap

En este proyecto:
• features/ngrx-lab/store/product.effects.ts

Error crítico:
• si catchError queda afuera, el effect puede morir y dejar de escuchar actions`, topic: 'ngrx' },
        { term: 'Selectors', definition: `Son funciones de lectura del estado, memoizadas y composables.

Qué hacen:
• extraen slices del Store
• combinan datos derivados
• evitan recalcular si el input no cambió por referencia

Úsalos para:
• aislar la forma real del state
• mantener componentes tontos
• centralizar lógica de lectura

En este proyecto:
• features/ngrx-lab/store/product.selectors.ts

Regla práctica:
• la lógica de lectura compleja va en selectors, no en el componente`, topic: 'ngrx' },
    { term: 'NgRx lifecycle', definition: `El ciclo completo suele ser:
• componente despacha action
• reducer cambia flags o state base
• effect llama API si hace falta
• success/failure vuelve al Store
• selectors recalculan
• la vista re-renderiza

Dominar este ciclo es más importante que memorizar la API exacta.`, topic: 'ngrx' },
    { term: 'Facade Pattern', definition: `Es una capa intermedia que encapsula Store, selectors y dispatches.

Beneficios:
• componentes menos acoplados a NgRx
• testing más simple
• API de feature más clara

Trade-off:
• agregas otra capa; úsala cuando realmente ordena el dominio.`, topic: 'ngrx' },
    { term: 'Optimistic Updates', definition: `Actualizas la UI antes de que el servidor confirme.

Flujo:
• action de update
• reducer cambia UI enseguida
• effect llama API
• si falla, otra action revierte el cambio

Ventaja: UX más rápida.
Riesgo: rollback y consistencia.`, topic: 'ngrx' },
    { term: 'Meta-reducers', definition: `Son reducers envoltorio que interceptan TODAS las actions y states.

Úsalos para:
• logging global
• freeze state en dev
• hydration / persistencia

Piensa en ellos como middleware a nivel reducer.`, topic: 'ngrx' },
    { term: 'Redux', definition: 'Patrón de arquitectura: Action → Reducer → Store → Vista. NgRx es su implementación para Angular.', topic: 'ngrx' },
    { term: 'flujo de datos unidireccional', definition: 'Vista despacha Actions → Reducer actualiza Store → Store notifica a la Vista. Nunca al revés.', topic: 'ngrx' },
    { term: 'inmutable', definition: 'Que no puede ser modificado después de crearse. En NgRx, cada cambio produce un nuevo objeto de estado.', topic: 'ngrx' },
    { term: 'single source of truth', definition: 'Principio donde toda la información de la app vive en un solo lugar (el Store), evitando datos desincronizados.', topic: 'ngrx' },
    { term: 'side effects', definition: 'Operaciones que interactúan con el mundo exterior: HTTP, localStorage, navegación. No son funciones puras.', topic: 'ngrx' },
    { term: 'Redux DevTools', definition: 'Extensión de navegador para inspeccionar estado, historial de acciones, y time-travel debugging.', topic: 'ngrx' },
    { term: 'time travel', definition: 'Retroceder y avanzar en el historial de estados en Redux DevTools. Útil para reproducir bugs.', topic: 'ngrx' },
    { term: 'funciones puras', definition: 'Siempre retornan lo mismo para mismos inputs, sin side effects. Predecibles y testeables.', topic: 'ngrx' },
    { term: 'feature states', definition: 'Porciones del estado global para un módulo/feature. Se registran con provideState() y permiten lazy loading.', topic: 'ngrx' },
        { term: 'memoización', definition: `Es una caché de resultados.

Cómo funciona:
• Angular/NgRx guarda el último input y el último resultado
• si el input no cambió por referencia, devuelve el valor cacheado
• no vuelve a ejecutar la función derivada

Dónde la ves:
• createSelector en NgRx
• computed en Signals

Por qué importa:
• menos trabajo de CPU
• menos recomputación inútil
• ayuda a que el rendering sea más predecible`, topic: 'ngrx' },
    { term: 'EntityAdapter', definition: 'Utilidad de @ngrx/entity con operaciones CRUD predefinidas (addOne, updateOne, removeOne, setAll).', topic: 'ngrx' },
    { term: 'boilerplate', definition: 'Código repetitivo para configurar algo. NgRx tiene bastante por cada feature.', topic: 'ngrx' },
    
    // RxJS terms
        { term: 'Observable', definition: `Es una secuencia de valores a lo largo del tiempo.

Piensa en él como un productor lazy:
• no hace nada hasta que alguien se suscribe
• puede emitir 0, 1 o muchos valores
• puede completar o fallar

Úsalo para:
• HTTP
• eventos del DOM
• formularios reactivos
• WebSockets y timers

En Angular importa porque:
• HttpClient retorna Observables
• valueChanges de forms también
• Router y Store exponen streams`, topic: 'rxjs' },
        { term: 'Subject', definition: `Es un Observable hot y multicast.

Significa que:
• puedes hacer next() manualmente
• varios suscriptores reciben el mismo valor
• sirve como puente entre código imperativo y reactivo

Úsalo cuando:
• quieres modelar eventos internos
• necesitas disparar acciones manualmente

Riesgo:
• usarlo como event bus global suele volverse un anti-pattern
• si el estado ya es estable y síncrono, a veces un Signal es mejor`, topic: 'rxjs' },
        { term: 'BehaviorSubject', definition: `Es un Subject con memoria del valor actual.

Comportamiento:
• necesita valor inicial
• todo nuevo suscriptor recibe inmediatamente el último valor
• luego sigue recibiendo los próximos

Úsalo cuando:
• quieres un estado compartido simple
• necesitas exponer current value a nuevos suscriptores

En este proyecto:
• se estudia como alternativa a Signals/Store dentro de la guía RxJS

Riesgo:
• para estado global complejo termina mezclando lectura, escritura y side effects en el mismo servicio`, topic: 'rxjs' },
        { term: 'ReplaySubject', definition: `Es un Subject que re-emite los últimos N valores a nuevos suscriptores.

Útil cuando:
• un suscriptor llega tarde pero necesita contexto previo
• quieres cachear algunos eventos anteriores

Diferencia con BehaviorSubject:
• BehaviorSubject recuerda 1 valor actual
• ReplaySubject puede recordar varios valores

Riesgo:
• si guardas demasiados valores, crece el uso de memoria`, topic: 'rxjs' },
    { term: 'AsyncSubject', definition: 'Subject que solo emite el último valor cuando se completa. Poco usado, para resultados únicos.', topic: 'rxjs' },
        { term: 'operadores de flattening', definition: `Son operadores que transforman Observable<Observable<T>> en un flujo plano.

Regla de decisión rápida:
• switchMap = quédate con la última
• exhaustMap = quédate con la primera hasta terminar
• mergeMap = ejecuta todas en paralelo
• concatMap = ejecútalas en orden, una por una

La diferencia real no es sintaxis: es política de concurrencia.
Eso es lo que suelen preguntar en entrevistas senior.`, topic: 'rxjs' },
        { term: 'switchMap', definition: `Úsalo cuando solo te importa la petición más reciente.

Comportamiento:
• llega un valor o action
• arranca la petición interna
• si llega otra antes de terminar, cancela la anterior
• mantiene viva solo la última

Caso típico:
• LOAD / refresh
• búsquedas
• autocompletado
• filtros que cambian rápido
• navegación donde la respuesta vieja ya no importa

En este proyecto:
• features/ngrx-lab/store/product.effects.ts:16
• features/rxjs-lab/search-typeahead.ts

Por qué tiene sentido:
• evita que una respuesta vieja sobrescriba datos más nuevos

Riesgo:
• si la operación no debería cancelarse (por ejemplo create o payment), no conviene`, topic: 'rxjs' },
        { term: 'mergeMap', definition: `Úsalo cuando quieres permitir varias operaciones en paralelo.

Comportamiento:
• cada action dispara su propia petición
• ninguna cancela a otra
• todas pueden correr al mismo tiempo
• las respuestas pueden volver en cualquier orden

Caso típico:
• DELETE
• descargas paralelas
• trabajo concurrente sobre elementos distintos

En este proyecto:
• features/ngrx-lab/store/product.effects.ts:44
• features/ngrx-lab/store/product.effects.ts:55

Ventaja:
• mejor rendimiento cuando las operaciones son independientes

Riesgo importante:
• si el orden importa, puede dejar estado inconsistente`, topic: 'rxjs' },
        { term: 'concatMap', definition: `Úsalo cuando necesitas procesar las actions una por una, en orden.

Comportamiento:
• llega una action y arranca la petición
• si llega otra mientras tanto, no la ignora ni la ejecuta en paralelo
• la pone en cola
• ejecuta la siguiente solo cuando termina la anterior

Caso típico:
• update secuencial
• guardado ordenado
• operaciones dependientes entre sí

En este proyecto:
• features/rxjs-lab/flattening-operators.ts
• features/rxjs-lab/rxjs-learn.html

Ventaja:
• evita race conditions por respuestas fuera de orden

Costo:
• menos paralelismo; si llegan muchas actions se forma cola`, topic: 'rxjs' },
        { term: 'exhaustMap', definition: `Úsalo cuando la primera petición debe terminar y las demás deben ignorarse mientras tanto.

Comportamiento:
• llega una action
• arranca la petición
• si llegan más mientras sigue en curso, las ignora
• cuando termina, recién acepta una nueva

Caso típico:
• CREATE
• LOGIN
• submit de formularios
• pagos o acciones donde el doble click es peligroso

En este proyecto:
• features/ngrx-lab/store/product.effects.ts:30

Ventaja:
• evita duplicados sin lógica extra de deshabilitar botón

Riesgo:
• las acciones extra no se cancelan ni se encolan: simplemente se pierden`, topic: 'rxjs' },
    { term: 'memory leaks', definition: 'Fugas de memoria por suscripciones nunca canceladas. El componente muere pero el Observable sigue.', topic: 'rxjs' },
        { term: 'shareReplay', definition: `Comparte una suscripción y además cachea los últimos valores.

Úsalo cuando:
• varias partes consumen el mismo HTTP
• no quieres repetir requests idénticos
• quieres que un suscriptor tardío reciba el último resultado

Comportamiento típico:
• primera suscripción ejecuta la fuente
• las siguientes comparten el resultado
• con bufferSize: 1 recuerda el último valor

Ojo con refCount:
• refCount: true limpia cuando no hay suscriptores
• sin eso puedes dejar caché viva demasiado tiempo`, topic: 'rxjs' },
    { term: 'operadores pipeables', definition: `Son funciones que se encadenan con observable.pipe(...).

Cada operador recibe un Observable y devuelve otro Observable.

Ejemplos:
• transformación: map, switchMap
• filtrado: filter, takeUntil, debounceTime
• combinación: combineLatest, forkJoin
• utilidad: tap, catchError, finalize

La gracia de RxJS no es memorizar nombres: es elegir la política correcta para cada flujo.`, topic: 'rxjs' },
    { term: 'combineLatest', definition: `Combina el último valor de cada fuente.

Emite cuando:
• todas las fuentes emitieron al menos una vez
• luego cualquiera de ellas vuelve a emitir

Úsalo para:
• combinar filtros
• mezclar estado de usuario + configuración

En este proyecto:
• features/rxjs-lab/combining-operators.ts`, topic: 'rxjs' },
    { term: 'forkJoin', definition: `Es el Promise.all de RxJS.

Comportamiento:
• espera a que TODAS las fuentes completen
• emite una sola vez con el último valor de cada una

Úsalo para:
• carga inicial de varias APIs en paralelo

Riesgo:
• si una fuente nunca completa, forkJoin nunca emite`, topic: 'rxjs' },
    { term: 'withLatestFrom', definition: `Toma el valor actual de otra fuente cuando la principal emite.

Modelo mental:
• el stream A dispara
• el stream B solo aporta contexto

Úsalo para:
• enriquecer un click con estado actual
• mandar save con los datos más recientes del form`, topic: 'rxjs' },
    { term: 'debounceTime', definition: `Espera un tiempo de silencio antes de emitir.

Úsalo para:
• búsqueda
• inputs ruidosos
• escenarios donde no quieres reaccionar a cada tecla

En este proyecto:
• features/rxjs-lab/search-typeahead.ts`, topic: 'rxjs' },
    { term: 'distinctUntilChanged', definition: `Evita emitir el mismo valor consecutivo.

Muy útil junto con debounceTime en búsquedas.

Ojo:
• con objetos compara por referencia
• si necesitas otra lógica, pasa un comparator custom`, topic: 'rxjs' },
    { term: 'takeUntil', definition: `Mantiene viva una suscripción hasta que otra fuente emite.

Patrón clásico de cleanup:
• destroy$ Subject
• takeUntil(destroy$) en ngOnInit
• next/complete en ngOnDestroy

En Angular moderno suele competir con takeUntilDestroyed().`, topic: 'rxjs' },
    { term: 'pipe', definition: 'Método de Observable para encadenar operadores: obs$.pipe(filter(...), map(...)).', topic: 'rxjs' },
    { term: 'async pipe', definition: 'Pipe de Angular (| async) que suscribe en template y se desuscribe al destruir el componente.', topic: 'rxjs' },
    
    // Angular Core terms
        { term: 'Change Detection', definition: `Es el mecanismo con el que Angular decide qué partes del árbol revisar y re-renderizar.

Modelo mental:
• Default = revísalo casi todo
• OnPush = revísame solo cuando haya una razón real

Qué dispara revisión:
• eventos DOM
• timers / promesas / HTTP (Zone.js)
• emisiones del async pipe
• cambios de Signals
• markForCheck / detectChanges manual

En este proyecto:
• features/angular-lab/change-detection/cd-demo.ts
• features/angular-lab/signals/signals-demo.ts`, topic: 'angular' },
        { term: 'OnPush', definition: `Es una estrategia de Change Detection orientada a performance.

Solo revisa el componente si:
• cambia un Input por referencia
• ocurre un evento dentro del componente o un hijo
• emite el async pipe
• cambia un Signal leído por la template
• llamas markForCheck() manualmente

Úsalo cuando:
• quieres reducir renders innecesarios
• trabajas con datos inmutables
• tienes listas o pantallas grandes

Riesgo:
• si mutas un objeto existente, OnPush puede no enterarse`, topic: 'angular' },
        { term: 'Signals', definition: `Es la primitiva reactiva síncrona de Angular para manejar estado.

Qué piezas la forman:
• signal = estado mutable
• computed = valor derivado y memoizado
• effect = side effects reactivos
• linkedSignal = estado dependiente que puede resetearse

Úsalos cuando:
• quieres estado local/simple de UI
• necesitas integración directa con Change Detection
• quieres reemplazar BehaviorSubject en casos sencillos

En este proyecto:
• features/angular-lab/signals/signals-demo.ts
• core/services/progress.service.ts

Riesgo:
• para streams asíncronos complejos, cancelación o composición avanzada, RxJS sigue siendo mejor`, topic: 'angular' },
    { term: 'computed', definition: `Es un valor derivado de uno o varios Signals.

Características:
• solo lectura
• memoizado automáticamente
• se recalcula cuando cambian sus dependencias

Úsalo para totales, filtros, labels, flags derivados.

En este proyecto:
• features/angular-lab/signals/signals-demo.ts`, topic: 'angular' },
    { term: 'effect', definition: `Sirve para ejecutar side effects reactivos cuando cambian Signals.

Úsalo para:
• logging
• localStorage
• analytics
• integración manual con APIs externas

No es para modelar estado derivado: para eso va computed.`, topic: 'angular' },
    { term: 'linkedSignal', definition: `Es un Signal dependiente que puede resetearse cuando cambia su fuente.

Caso mental:
• cambia la lista de items
• el selectedItem se resetea de forma coherente

Útil para formularios y selects dependientes.`, topic: 'angular' },
    { term: 'resource', definition: `Es la abstracción de Angular para datos asíncronos basados en Signals.

Te da junto:
• valor
• loading status
• error

Sirve cuando quieres una experiencia tipo Signal para fetch/data loading.`, topic: 'angular' },
    { term: 'ChangeDetectorRef', definition: `Es la herramienta manual para intervenir en Change Detection.

Métodos clave:
• markForCheck = marca el componente para próximo chequeo
• detectChanges = fuerza chequeo inmediato
• detach = lo saca del árbol de CD

Úsalo solo cuando entiendes bien el costo y el motivo.`, topic: 'angular' },
        { term: 'Lazy Loading', definition: `Carga una feature solo cuando el usuario realmente la necesita.

Beneficios:
• reduce el bundle inicial
• mejora first load
• separa claramente las features

Lo ves con:
• loadChildren() para rutas completas
• loadComponent() para componentes standalone
• @defer para rendering tardío dentro de una página

En este proyecto:
• app.routes.ts
• features/*/*.routes.ts`, topic: 'angular' },
    { term: 'HTTP Interceptors', definition: 'Funciones que interceptan peticiones/respuestas HTTP. Agregan headers, manejan errores, cachean.', topic: 'angular' },
    { term: 'Route Guards', definition: 'Funciones que protegen rutas: canActivate (acceder), canDeactivate (salir), canLoad (cargar).', topic: 'angular' },
    { term: 'Standalone Components', definition: 'Componentes Angular 14+ sin NgModule. standalone: true y gestionan sus propias dependencias.', topic: 'angular' },
        { term: '@defer', definition: `Sirve para diferir el render de bloques pesados.

Úsalo cuando:
• el contenido está below the fold
• el componente es costoso
• no quieres pagar su costo en el primer render

Permite:
• triggers como viewport, idle, hover o timer
• placeholder, loading y error blocks

En este proyecto:
• features/performance-lab/perf-demo.ts

Idea mental:
• lazy loading divide bundles
• @defer divide el trabajo de render dentro de la vista`, topic: 'angular' },
    
    // TypeScript terms
    { term: 'Generics', definition: 'Parámetros de tipo para crear funciones/clases reutilizables con cualquier tipo. Ej: Array<T>.', topic: 'typescript' },
    { term: 'Type Guards', definition: 'Funciones que estrechan el tipo en un bloque condicional. TypeScript sabe el tipo exacto.', topic: 'typescript' },
    { term: 'Discriminated Unions', definition: 'Uniones con campo discriminante (status: loading | success). TypeScript estrecha por ese campo.', topic: 'typescript' },
    
    // Architecture terms
    { term: 'Smart/Dumb components', definition: 'Smart maneja lógica/Store; Dumb solo recibe @Input y emite @Output.', topic: 'architecture' },
        { term: 'Core module', definition: `Es la parte central de la app donde viven los singletons globales.

Qué suele contener:
• auth
• config
• API services
• interceptors
• guards

Regla clásica:
• se importa una sola vez en la raíz

En Angular moderno:
• muchas veces ya no existe como NgModule real
• sigue existiendo como carpeta core/ + providedIn: 'root'`, topic: 'architecture' },
        { term: 'singleton', definition: `Singleton significa una sola instancia viva para toda la app o para un scope concreto.

En Angular puede significar:
• global con providedIn: 'root'
• por lazy feature con providedIn: 'any' o providers de ruta
• por componente con providers en @Component

Error común:
• creer que un servicio siempre es singleton global cuando en realidad vive dentro de un lazy module`, topic: 'architecture' },
        { term: 'Shared module', definition: `Es la zona de reutilización transversal.

Qué va ahí:
• componentes presentacionales reutilizables
• directivas comunes
• pipes
• utilidades puras

Qué NO debería ir ahí:
• servicios con estado compartido
• lógica de negocio de un feature
• providers que creen instancias duplicadas en lazy modules

En Angular standalone:
• el concepto sigue vivo aunque ya no uses SharedModule como clase`, topic: 'architecture' },
    { term: 'SignalStore', definition: `Es una alternativa moderna al Store clásico para estado de feature.

Combina:
• Signals para estado
• computed para derivaciones
• métodos para mutaciones

Úsalo cuando quieres algo más estructurado que un servicio con signals, pero más liviano que NgRx Store.`, topic: 'architecture' },
    { term: 'Feature modules', definition: 'Módulos autocontenidos por funcionalidad. Se cargan con lazy loading.', topic: 'architecture' },
    { term: 'SCAM pattern', definition: 'Single Component Angular Module: un componente por módulo. Reemplazado por Standalone.', topic: 'architecture' },
    { term: 'Barrel exports', definition: 'Archivos index.ts que re-exportan lo público de una carpeta. Simplifican imports.', topic: 'architecture' },
    { term: 'monorepo', definition: 'Repositorio único con múltiples proyectos/librerías. NX lo gestiona con builds incrementales.', topic: 'architecture' },
    { term: 'micro-frontend', definition: 'UI dividida en apps independientes que se despliegan por separado.', topic: 'architecture' },
    { term: 'Module Federation', definition: 'Webpack 5: apps comparten código en runtime. Base de micro-frontends.', topic: 'architecture' },
    { term: 'ADRs', definition: 'Architecture Decision Records: documentos cortos con decisiones técnicas y su razonamiento.', topic: 'architecture' },
    
    // Performance terms
        { term: 'trackBy', definition: `Le dice a Angular cómo identificar cada item de una lista.

Sin trackBy:
• si la lista cambia, Angular puede recrear muchos nodos DOM

Con trackBy:
• conserva los elementos cuyo identity no cambió
• reduce renders, flicker y trabajo de CD

Úsalo siempre en listas medianas o grandes.

En este proyecto:
• features/performance-lab/perf-demo.ts`, topic: 'performance' },
        { term: 'virtual scrolling', definition: `Renderiza solo los items visibles en pantalla.

Idea mental:
• tienes 10,000 filas
• el usuario ve quizá 20 o 30
• no necesitas pintar las 10,000 al mismo tiempo

Úsalo cuando:
• la lista es muy grande
• el DOM empieza a pesar

En este proyecto:
• features/performance-lab/perf-demo.ts
• usa cdk-virtual-scroll-viewport`, topic: 'performance' },
    { term: 'Web Workers', definition: 'Threads del navegador en segundo plano sin bloquear la UI. Para cálculos pesados.', topic: 'performance' },
    { term: 'Preloading strategies', definition: 'Pre-cargar módulos lazy-loaded en segundo plano después de la carga inicial.', topic: 'performance' },
        { term: 'SSR', definition: `Server-Side Rendering significa que el HTML inicial se genera en el servidor.

Beneficios:
• mejor LCP
• mejor SEO
• el usuario ve contenido antes

No resuelve todo por sí solo:
• luego el cliente debe hidratar la app
• si el JS es enorme, la interacción puede seguir tardando`, topic: 'performance' },
        { term: 'hydration', definition: `Es el proceso en el que Angular toma el HTML ya renderizado en servidor y lo 'activa' en el cliente.

Beneficio clave:
• no destruye y vuelve a crear todo el DOM
• conserva el trabajo hecho por SSR

Problemas típicos:
• diferencias entre HTML servidor y cliente
• acceso directo a window/document demasiado pronto`, topic: 'performance' },
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
        { term: 'Dependency Injection', definition: `Es el sistema con el que Angular resuelve dependencias automáticamente.

Modelo mental:
• pides una dependencia
• Angular busca un provider registrado
• lo resuelve subiendo por el árbol de injectors

Importa porque controla:
• scope de instancias
• reusabilidad
• testabilidad
• aislamiento por feature o por componente`, topic: 'fundamentals' },
    { term: 'InjectionToken', definition: 'Token para inyectar valores no-clase (strings, configs). new InjectionToken<Type>(description).', topic: 'fundamentals' },
        { term: 'providedIn', definition: `Define dónde vive el servicio y cuántas instancias habrá.

Resumen rápido:
• root = singleton global
• any = una instancia por lazy boundary / contexto
• platform = compartido entre apps Angular de la misma página

Regla práctica:
• root para la mayoría de servicios globales
• any o providers de ruta/componente cuando quieres aislamiento

En este proyecto:
• core/services/progress.service.ts
• core/services/mock-api.service.ts`, topic: 'fundamentals' },
    { term: 'providers', definition: `Es la lista donde registras dependencias manualmente en un scope concreto.

Dónde puede vivir:
• app config / root
• una ruta
• un componente
• un módulo legacy

La pregunta clave no es 'cómo lo registro' sino 'qué scope necesito'.`, topic: 'fundamentals' },
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
