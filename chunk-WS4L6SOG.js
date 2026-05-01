import{ha as r}from"./chunk-G73V3KC4.js";var s=class n{terms=[{term:"Store",definition:`Es el contenedor central del estado global.

Piensa en \xE9l como la fuente \xFAnica de verdad:
\u2022 los componentes no mutan estado directo
\u2022 despachan Actions
\u2022 los Reducers calculan el nuevo state
\u2022 los Selectors leen slices del Store

\xDAsalo cuando:
\u2022 varios componentes dependen de los mismos datos
\u2022 necesitas trazabilidad y debugging serio
\u2022 quieres evitar estado duplicado o desincronizado

En este proyecto:
\u2022 features/ngrx-lab/store/product.state.ts
\u2022 features/ngrx-lab/store/product.reducer.ts
\u2022 app.config.ts

Riesgo:
\u2022 si el estado es solo local o simple, meterlo al Store agrega boilerplate`,topic:"ngrx"},{term:"Actions",definition:`Describen QU\xC9 pas\xF3, no c\xF3mo reaccionar.

Regla mental:
\u2022 action = evento del negocio o de la UI
\u2022 reducer/effect = reacci\xF3n a ese evento

Buenas pr\xE1cticas:
\u2022 n\xF3mbralas como [Source] Event
\u2022 incluye solo el payload necesario
\u2022 no metas l\xF3gica dentro de la action

Caso t\xEDpico:
\u2022 [Product Page] Load Products
\u2022 [Product API] Load Products Success
\u2022 [Product Form] Create Product

En este proyecto:
\u2022 features/ngrx-lab/store/product.actions.ts

Error com\xFAn:
\u2022 usar actions como comandos demasiado espec\xEDficos en vez de eventos del dominio`,topic:"ngrx"},{term:"Reducers",definition:`Son funciones puras que reciben (state, action) y devuelven un nuevo state.

Reglas duras:
\u2022 no hacen HTTP
\u2022 no navegan
\u2022 no usan timers
\u2022 no mutan el state actual

Qu\xE9 s\xED hacen:
\u2022 cambian flags como loading
\u2022 guardan datos de success/failure
\u2022 actualizan colecciones y selectedId

En este proyecto:
\u2022 features/ngrx-lab/store/product.reducer.ts

Pista de entrevista:
\u2022 si hay side effects, no es reducer: eso va en Effects`,topic:"ngrx"},{term:"Effects",definition:`Es la capa donde viven los side effects.

Ciclo t\xEDpico:
\u2022 entra una Action al stream actions$
\u2022 ofType filtra la que interesa
\u2022 el effect llama API / navegaci\xF3n / storage
\u2022 despacha Success o Failure
\u2022 el Reducer actualiza el state final

Claves:
\u2022 createEffect(() => ...)
\u2022 catchError debe ir dentro del flattening operator
\u2022 el operador elegido cambia el comportamiento: switchMap, exhaustMap, mergeMap, concatMap

En este proyecto:
\u2022 features/ngrx-lab/store/product.effects.ts

Error cr\xEDtico:
\u2022 si catchError queda afuera, el effect puede morir y dejar de escuchar actions`,topic:"ngrx"},{term:"Selectors",definition:`Son funciones de lectura del estado, memoizadas y composables.

Qu\xE9 hacen:
\u2022 extraen slices del Store
\u2022 combinan datos derivados
\u2022 evitan recalcular si el input no cambi\xF3 por referencia

\xDAsalos para:
\u2022 aislar la forma real del state
\u2022 mantener componentes tontos
\u2022 centralizar l\xF3gica de lectura

En este proyecto:
\u2022 features/ngrx-lab/store/product.selectors.ts

Regla pr\xE1ctica:
\u2022 la l\xF3gica de lectura compleja va en selectors, no en el componente`,topic:"ngrx"},{term:"NgRx lifecycle",definition:`El ciclo completo suele ser:
\u2022 componente despacha action
\u2022 reducer cambia flags o state base
\u2022 effect llama API si hace falta
\u2022 success/failure vuelve al Store
\u2022 selectors recalculan
\u2022 la vista re-renderiza

Dominar este ciclo es m\xE1s importante que memorizar la API exacta.`,topic:"ngrx"},{term:"Facade Pattern",definition:`Es una capa intermedia que encapsula Store, selectors y dispatches.

Beneficios:
\u2022 componentes menos acoplados a NgRx
\u2022 testing m\xE1s simple
\u2022 API de feature m\xE1s clara

Trade-off:
\u2022 agregas otra capa; \xFAsala cuando realmente ordena el dominio.`,topic:"ngrx"},{term:"Optimistic Updates",definition:`Actualizas la UI antes de que el servidor confirme.

Flujo:
\u2022 action de update
\u2022 reducer cambia UI enseguida
\u2022 effect llama API
\u2022 si falla, otra action revierte el cambio

Ventaja: UX m\xE1s r\xE1pida.
Riesgo: rollback y consistencia.`,topic:"ngrx"},{term:"Meta-reducers",definition:`Son reducers envoltorio que interceptan TODAS las actions y states.

\xDAsalos para:
\u2022 logging global
\u2022 freeze state en dev
\u2022 hydration / persistencia

Piensa en ellos como middleware a nivel reducer.`,topic:"ngrx"},{term:"Redux",definition:"Patr\xF3n de arquitectura: Action \u2192 Reducer \u2192 Store \u2192 Vista. NgRx es su implementaci\xF3n para Angular.",topic:"ngrx"},{term:"flujo de datos unidireccional",definition:"Vista despacha Actions \u2192 Reducer actualiza Store \u2192 Store notifica a la Vista. Nunca al rev\xE9s.",topic:"ngrx"},{term:"inmutable",definition:"Que no puede ser modificado despu\xE9s de crearse. En NgRx, cada cambio produce un nuevo objeto de estado.",topic:"ngrx"},{term:"single source of truth",definition:"Principio donde toda la informaci\xF3n de la app vive en un solo lugar (el Store), evitando datos desincronizados.",topic:"ngrx"},{term:"side effects",definition:"Operaciones que interact\xFAan con el mundo exterior: HTTP, localStorage, navegaci\xF3n. No son funciones puras.",topic:"ngrx"},{term:"Redux DevTools",definition:"Extensi\xF3n de navegador para inspeccionar estado, historial de acciones, y time-travel debugging.",topic:"ngrx"},{term:"time travel",definition:"Retroceder y avanzar en el historial de estados en Redux DevTools. \xDAtil para reproducir bugs.",topic:"ngrx"},{term:"funciones puras",definition:"Siempre retornan lo mismo para mismos inputs, sin side effects. Predecibles y testeables.",topic:"ngrx"},{term:"feature states",definition:"Porciones del estado global para un m\xF3dulo/feature. Se registran con provideState() y permiten lazy loading.",topic:"ngrx"},{term:"memoizaci\xF3n",definition:`Es una cach\xE9 de resultados.

C\xF3mo funciona:
\u2022 Angular/NgRx guarda el \xFAltimo input y el \xFAltimo resultado
\u2022 si el input no cambi\xF3 por referencia, devuelve el valor cacheado
\u2022 no vuelve a ejecutar la funci\xF3n derivada

D\xF3nde la ves:
\u2022 createSelector en NgRx
\u2022 computed en Signals

Por qu\xE9 importa:
\u2022 menos trabajo de CPU
\u2022 menos recomputaci\xF3n in\xFAtil
\u2022 ayuda a que el rendering sea m\xE1s predecible`,topic:"ngrx"},{term:"EntityAdapter",definition:"Utilidad de @ngrx/entity con operaciones CRUD predefinidas (addOne, updateOne, removeOne, setAll).",topic:"ngrx"},{term:"boilerplate",definition:"C\xF3digo repetitivo para configurar algo. NgRx tiene bastante por cada feature.",topic:"ngrx"},{term:"Observable",definition:`Es una secuencia de valores a lo largo del tiempo.

Piensa en \xE9l como un productor lazy:
\u2022 no hace nada hasta que alguien se suscribe
\u2022 puede emitir 0, 1 o muchos valores
\u2022 puede completar o fallar

\xDAsalo para:
\u2022 HTTP
\u2022 eventos del DOM
\u2022 formularios reactivos
\u2022 WebSockets y timers

En Angular importa porque:
\u2022 HttpClient retorna Observables
\u2022 valueChanges de forms tambi\xE9n
\u2022 Router y Store exponen streams`,topic:"rxjs"},{term:"Subject",definition:`Es un Observable hot y multicast.

Significa que:
\u2022 puedes hacer next() manualmente
\u2022 varios suscriptores reciben el mismo valor
\u2022 sirve como puente entre c\xF3digo imperativo y reactivo

\xDAsalo cuando:
\u2022 quieres modelar eventos internos
\u2022 necesitas disparar acciones manualmente

Riesgo:
\u2022 usarlo como event bus global suele volverse un anti-pattern
\u2022 si el estado ya es estable y s\xEDncrono, a veces un Signal es mejor`,topic:"rxjs"},{term:"BehaviorSubject",definition:`Es un Subject con memoria del valor actual.

Comportamiento:
\u2022 necesita valor inicial
\u2022 todo nuevo suscriptor recibe inmediatamente el \xFAltimo valor
\u2022 luego sigue recibiendo los pr\xF3ximos

\xDAsalo cuando:
\u2022 quieres un estado compartido simple
\u2022 necesitas exponer current value a nuevos suscriptores

En este proyecto:
\u2022 se estudia como alternativa a Signals/Store dentro de la gu\xEDa RxJS

Riesgo:
\u2022 para estado global complejo termina mezclando lectura, escritura y side effects en el mismo servicio`,topic:"rxjs"},{term:"ReplaySubject",definition:`Es un Subject que re-emite los \xFAltimos N valores a nuevos suscriptores.

\xDAtil cuando:
\u2022 un suscriptor llega tarde pero necesita contexto previo
\u2022 quieres cachear algunos eventos anteriores

Diferencia con BehaviorSubject:
\u2022 BehaviorSubject recuerda 1 valor actual
\u2022 ReplaySubject puede recordar varios valores

Riesgo:
\u2022 si guardas demasiados valores, crece el uso de memoria`,topic:"rxjs"},{term:"AsyncSubject",definition:"Subject que solo emite el \xFAltimo valor cuando se completa. Poco usado, para resultados \xFAnicos.",topic:"rxjs"},{term:"operadores de flattening",definition:`Son operadores que transforman Observable<Observable<T>> en un flujo plano.

Regla de decisi\xF3n r\xE1pida:
\u2022 switchMap = qu\xE9date con la \xFAltima
\u2022 exhaustMap = qu\xE9date con la primera hasta terminar
\u2022 mergeMap = ejecuta todas en paralelo
\u2022 concatMap = ejec\xFAtalas en orden, una por una

La diferencia real no es sintaxis: es pol\xEDtica de concurrencia.
Eso es lo que suelen preguntar en entrevistas senior.`,topic:"rxjs"},{term:"switchMap",definition:`\xDAsalo cuando solo te importa la petici\xF3n m\xE1s reciente.

Comportamiento:
\u2022 llega un valor o action
\u2022 arranca la petici\xF3n interna
\u2022 si llega otra antes de terminar, cancela la anterior
\u2022 mantiene viva solo la \xFAltima

Caso t\xEDpico:
\u2022 LOAD / refresh
\u2022 b\xFAsquedas
\u2022 autocompletado
\u2022 filtros que cambian r\xE1pido
\u2022 navegaci\xF3n donde la respuesta vieja ya no importa

En este proyecto:
\u2022 features/ngrx-lab/store/product.effects.ts:16
\u2022 features/rxjs-lab/search-typeahead.ts

Por qu\xE9 tiene sentido:
\u2022 evita que una respuesta vieja sobrescriba datos m\xE1s nuevos

Riesgo:
\u2022 si la operaci\xF3n no deber\xEDa cancelarse (por ejemplo create o payment), no conviene`,topic:"rxjs"},{term:"mergeMap",definition:`\xDAsalo cuando quieres permitir varias operaciones en paralelo.

Comportamiento:
\u2022 cada action dispara su propia petici\xF3n
\u2022 ninguna cancela a otra
\u2022 todas pueden correr al mismo tiempo
\u2022 las respuestas pueden volver en cualquier orden

Caso t\xEDpico:
\u2022 DELETE
\u2022 descargas paralelas
\u2022 trabajo concurrente sobre elementos distintos

En este proyecto:
\u2022 features/ngrx-lab/store/product.effects.ts:44
\u2022 features/ngrx-lab/store/product.effects.ts:55

Ventaja:
\u2022 mejor rendimiento cuando las operaciones son independientes

Riesgo importante:
\u2022 si el orden importa, puede dejar estado inconsistente`,topic:"rxjs"},{term:"concatMap",definition:`\xDAsalo cuando necesitas procesar las actions una por una, en orden.

Comportamiento:
\u2022 llega una action y arranca la petici\xF3n
\u2022 si llega otra mientras tanto, no la ignora ni la ejecuta en paralelo
\u2022 la pone en cola
\u2022 ejecuta la siguiente solo cuando termina la anterior

Caso t\xEDpico:
\u2022 update secuencial
\u2022 guardado ordenado
\u2022 operaciones dependientes entre s\xED

En este proyecto:
\u2022 features/rxjs-lab/flattening-operators.ts
\u2022 features/rxjs-lab/rxjs-learn.html

Ventaja:
\u2022 evita race conditions por respuestas fuera de orden

Costo:
\u2022 menos paralelismo; si llegan muchas actions se forma cola`,topic:"rxjs"},{term:"exhaustMap",definition:`\xDAsalo cuando la primera petici\xF3n debe terminar y las dem\xE1s deben ignorarse mientras tanto.

Comportamiento:
\u2022 llega una action
\u2022 arranca la petici\xF3n
\u2022 si llegan m\xE1s mientras sigue en curso, las ignora
\u2022 cuando termina, reci\xE9n acepta una nueva

Caso t\xEDpico:
\u2022 CREATE
\u2022 LOGIN
\u2022 submit de formularios
\u2022 pagos o acciones donde el doble click es peligroso

En este proyecto:
\u2022 features/ngrx-lab/store/product.effects.ts:30

Ventaja:
\u2022 evita duplicados sin l\xF3gica extra de deshabilitar bot\xF3n

Riesgo:
\u2022 las acciones extra no se cancelan ni se encolan: simplemente se pierden`,topic:"rxjs"},{term:"memory leaks",definition:"Fugas de memoria por suscripciones nunca canceladas. El componente muere pero el Observable sigue.",topic:"rxjs"},{term:"shareReplay",definition:`Comparte una suscripci\xF3n y adem\xE1s cachea los \xFAltimos valores.

\xDAsalo cuando:
\u2022 varias partes consumen el mismo HTTP
\u2022 no quieres repetir requests id\xE9nticos
\u2022 quieres que un suscriptor tard\xEDo reciba el \xFAltimo resultado

Comportamiento t\xEDpico:
\u2022 primera suscripci\xF3n ejecuta la fuente
\u2022 las siguientes comparten el resultado
\u2022 con bufferSize: 1 recuerda el \xFAltimo valor

Ojo con refCount:
\u2022 refCount: true limpia cuando no hay suscriptores
\u2022 sin eso puedes dejar cach\xE9 viva demasiado tiempo`,topic:"rxjs"},{term:"operadores pipeables",definition:`Son funciones que se encadenan con observable.pipe(...).

Cada operador recibe un Observable y devuelve otro Observable.

Ejemplos:
\u2022 transformaci\xF3n: map, switchMap
\u2022 filtrado: filter, takeUntil, debounceTime
\u2022 combinaci\xF3n: combineLatest, forkJoin
\u2022 utilidad: tap, catchError, finalize

La gracia de RxJS no es memorizar nombres: es elegir la pol\xEDtica correcta para cada flujo.`,topic:"rxjs"},{term:"combineLatest",definition:`Combina el \xFAltimo valor de cada fuente.

Emite cuando:
\u2022 todas las fuentes emitieron al menos una vez
\u2022 luego cualquiera de ellas vuelve a emitir

\xDAsalo para:
\u2022 combinar filtros
\u2022 mezclar estado de usuario + configuraci\xF3n

En este proyecto:
\u2022 features/rxjs-lab/combining-operators.ts`,topic:"rxjs"},{term:"forkJoin",definition:`Es el Promise.all de RxJS.

Comportamiento:
\u2022 espera a que TODAS las fuentes completen
\u2022 emite una sola vez con el \xFAltimo valor de cada una

\xDAsalo para:
\u2022 carga inicial de varias APIs en paralelo

Riesgo:
\u2022 si una fuente nunca completa, forkJoin nunca emite`,topic:"rxjs"},{term:"withLatestFrom",definition:`Toma el valor actual de otra fuente cuando la principal emite.

Modelo mental:
\u2022 el stream A dispara
\u2022 el stream B solo aporta contexto

\xDAsalo para:
\u2022 enriquecer un click con estado actual
\u2022 mandar save con los datos m\xE1s recientes del form`,topic:"rxjs"},{term:"debounceTime",definition:`Espera un tiempo de silencio antes de emitir.

\xDAsalo para:
\u2022 b\xFAsqueda
\u2022 inputs ruidosos
\u2022 escenarios donde no quieres reaccionar a cada tecla

En este proyecto:
\u2022 features/rxjs-lab/search-typeahead.ts`,topic:"rxjs"},{term:"distinctUntilChanged",definition:`Evita emitir el mismo valor consecutivo.

Muy \xFAtil junto con debounceTime en b\xFAsquedas.

Ojo:
\u2022 con objetos compara por referencia
\u2022 si necesitas otra l\xF3gica, pasa un comparator custom`,topic:"rxjs"},{term:"takeUntil",definition:`Mantiene viva una suscripci\xF3n hasta que otra fuente emite.

Patr\xF3n cl\xE1sico de cleanup:
\u2022 destroy$ Subject
\u2022 takeUntil(destroy$) en ngOnInit
\u2022 next/complete en ngOnDestroy

En Angular moderno suele competir con takeUntilDestroyed().`,topic:"rxjs"},{term:"pipe",definition:"M\xE9todo de Observable para encadenar operadores: obs$.pipe(filter(...), map(...)).",topic:"rxjs"},{term:"async pipe",definition:"Pipe de Angular (| async) que suscribe en template y se desuscribe al destruir el componente.",topic:"rxjs"},{term:"Change Detection",definition:`Es el mecanismo con el que Angular decide qu\xE9 partes del \xE1rbol revisar y re-renderizar.

Modelo mental:
\u2022 Default = rev\xEDsalo casi todo
\u2022 OnPush = rev\xEDsame solo cuando haya una raz\xF3n real

Qu\xE9 dispara revisi\xF3n:
\u2022 eventos DOM
\u2022 timers / promesas / HTTP (Zone.js)
\u2022 emisiones del async pipe
\u2022 cambios de Signals
\u2022 markForCheck / detectChanges manual

En este proyecto:
\u2022 features/angular-lab/change-detection/cd-demo.ts
\u2022 features/angular-lab/signals/signals-demo.ts`,topic:"angular"},{term:"OnPush",definition:`Es una estrategia de Change Detection orientada a performance.

Solo revisa el componente si:
\u2022 cambia un Input por referencia
\u2022 ocurre un evento dentro del componente o un hijo
\u2022 emite el async pipe
\u2022 cambia un Signal le\xEDdo por la template
\u2022 llamas markForCheck() manualmente

\xDAsalo cuando:
\u2022 quieres reducir renders innecesarios
\u2022 trabajas con datos inmutables
\u2022 tienes listas o pantallas grandes

Riesgo:
\u2022 si mutas un objeto existente, OnPush puede no enterarse`,topic:"angular"},{term:"Signals",definition:`Es la primitiva reactiva s\xEDncrona de Angular para manejar estado.

Qu\xE9 piezas la forman:
\u2022 signal = estado mutable
\u2022 computed = valor derivado y memoizado
\u2022 effect = side effects reactivos
\u2022 linkedSignal = estado dependiente que puede resetearse

\xDAsalos cuando:
\u2022 quieres estado local/simple de UI
\u2022 necesitas integraci\xF3n directa con Change Detection
\u2022 quieres reemplazar BehaviorSubject en casos sencillos

En este proyecto:
\u2022 features/angular-lab/signals/signals-demo.ts
\u2022 core/services/progress.service.ts

Riesgo:
\u2022 para streams as\xEDncronos complejos, cancelaci\xF3n o composici\xF3n avanzada, RxJS sigue siendo mejor`,topic:"angular"},{term:"computed",definition:`Es un valor derivado de uno o varios Signals.

Caracter\xEDsticas:
\u2022 solo lectura
\u2022 memoizado autom\xE1ticamente
\u2022 se recalcula cuando cambian sus dependencias

\xDAsalo para totales, filtros, labels, flags derivados.

En este proyecto:
\u2022 features/angular-lab/signals/signals-demo.ts`,topic:"angular"},{term:"effect",definition:`Sirve para ejecutar side effects reactivos cuando cambian Signals.

\xDAsalo para:
\u2022 logging
\u2022 localStorage
\u2022 analytics
\u2022 integraci\xF3n manual con APIs externas

No es para modelar estado derivado: para eso va computed.`,topic:"angular"},{term:"linkedSignal",definition:`Es un Signal dependiente que puede resetearse cuando cambia su fuente.

Caso mental:
\u2022 cambia la lista de items
\u2022 el selectedItem se resetea de forma coherente

\xDAtil para formularios y selects dependientes.`,topic:"angular"},{term:"resource",definition:`Es la abstracci\xF3n de Angular para datos as\xEDncronos basados en Signals.

Te da junto:
\u2022 valor
\u2022 loading status
\u2022 error

Sirve cuando quieres una experiencia tipo Signal para fetch/data loading.`,topic:"angular"},{term:"ChangeDetectorRef",definition:`Es la herramienta manual para intervenir en Change Detection.

M\xE9todos clave:
\u2022 markForCheck = marca el componente para pr\xF3ximo chequeo
\u2022 detectChanges = fuerza chequeo inmediato
\u2022 detach = lo saca del \xE1rbol de CD

\xDAsalo solo cuando entiendes bien el costo y el motivo.`,topic:"angular"},{term:"Lazy Loading",definition:`Carga una feature solo cuando el usuario realmente la necesita.

Beneficios:
\u2022 reduce el bundle inicial
\u2022 mejora first load
\u2022 separa claramente las features

Lo ves con:
\u2022 loadChildren() para rutas completas
\u2022 loadComponent() para componentes standalone
\u2022 @defer para rendering tard\xEDo dentro de una p\xE1gina

En este proyecto:
\u2022 app.routes.ts
\u2022 features/*/*.routes.ts`,topic:"angular"},{term:"HTTP Interceptors",definition:"Funciones que interceptan peticiones/respuestas HTTP. Agregan headers, manejan errores, cachean.",topic:"angular"},{term:"Route Guards",definition:"Funciones que protegen rutas: canActivate (acceder), canDeactivate (salir), canLoad (cargar).",topic:"angular"},{term:"Standalone Components",definition:"Componentes Angular 14+ sin NgModule. standalone: true y gestionan sus propias dependencias.",topic:"angular"},{term:"@defer",definition:`Sirve para diferir el render de bloques pesados.

\xDAsalo cuando:
\u2022 el contenido est\xE1 below the fold
\u2022 el componente es costoso
\u2022 no quieres pagar su costo en el primer render

Permite:
\u2022 triggers como viewport, idle, hover o timer
\u2022 placeholder, loading y error blocks

En este proyecto:
\u2022 features/performance-lab/perf-demo.ts

Idea mental:
\u2022 lazy loading divide bundles
\u2022 @defer divide el trabajo de render dentro de la vista`,topic:"angular"},{term:"Generics",definition:"Par\xE1metros de tipo para crear funciones/clases reutilizables con cualquier tipo. Ej: Array<T>.",topic:"typescript"},{term:"Type Guards",definition:"Funciones que estrechan el tipo en un bloque condicional. TypeScript sabe el tipo exacto.",topic:"typescript"},{term:"Discriminated Unions",definition:"Uniones con campo discriminante (status: loading | success). TypeScript estrecha por ese campo.",topic:"typescript"},{term:"Smart/Dumb components",definition:"Smart maneja l\xF3gica/Store; Dumb solo recibe @Input y emite @Output.",topic:"architecture"},{term:"Core module",definition:`Es la parte central de la app donde viven los singletons globales.

Qu\xE9 suele contener:
\u2022 auth
\u2022 config
\u2022 API services
\u2022 interceptors
\u2022 guards

Regla cl\xE1sica:
\u2022 se importa una sola vez en la ra\xEDz

En Angular moderno:
\u2022 muchas veces ya no existe como NgModule real
\u2022 sigue existiendo como carpeta core/ + providedIn: 'root'`,topic:"architecture"},{term:"singleton",definition:`Singleton significa una sola instancia viva para toda la app o para un scope concreto.

En Angular puede significar:
\u2022 global con providedIn: 'root'
\u2022 por lazy feature con providedIn: 'any' o providers de ruta
\u2022 por componente con providers en @Component

Error com\xFAn:
\u2022 creer que un servicio siempre es singleton global cuando en realidad vive dentro de un lazy module`,topic:"architecture"},{term:"Shared module",definition:`Es la zona de reutilizaci\xF3n transversal.

Qu\xE9 va ah\xED:
\u2022 componentes presentacionales reutilizables
\u2022 directivas comunes
\u2022 pipes
\u2022 utilidades puras

Qu\xE9 NO deber\xEDa ir ah\xED:
\u2022 servicios con estado compartido
\u2022 l\xF3gica de negocio de un feature
\u2022 providers que creen instancias duplicadas en lazy modules

En Angular standalone:
\u2022 el concepto sigue vivo aunque ya no uses SharedModule como clase`,topic:"architecture"},{term:"SignalStore",definition:`Es una alternativa moderna al Store cl\xE1sico para estado de feature.

Combina:
\u2022 Signals para estado
\u2022 computed para derivaciones
\u2022 m\xE9todos para mutaciones

\xDAsalo cuando quieres algo m\xE1s estructurado que un servicio con signals, pero m\xE1s liviano que NgRx Store.`,topic:"architecture"},{term:"Feature modules",definition:"M\xF3dulos autocontenidos por funcionalidad. Se cargan con lazy loading.",topic:"architecture"},{term:"SCAM pattern",definition:"Single Component Angular Module: un componente por m\xF3dulo. Reemplazado por Standalone.",topic:"architecture"},{term:"Barrel exports",definition:"Archivos index.ts que re-exportan lo p\xFAblico de una carpeta. Simplifican imports.",topic:"architecture"},{term:"monorepo",definition:"Repositorio \xFAnico con m\xFAltiples proyectos/librer\xEDas. NX lo gestiona con builds incrementales.",topic:"architecture"},{term:"micro-frontend",definition:"UI dividida en apps independientes que se despliegan por separado.",topic:"architecture"},{term:"Module Federation",definition:"Webpack 5: apps comparten c\xF3digo en runtime. Base de micro-frontends.",topic:"architecture"},{term:"ADRs",definition:"Architecture Decision Records: documentos cortos con decisiones t\xE9cnicas y su razonamiento.",topic:"architecture"},{term:"trackBy",definition:`Le dice a Angular c\xF3mo identificar cada item de una lista.

Sin trackBy:
\u2022 si la lista cambia, Angular puede recrear muchos nodos DOM

Con trackBy:
\u2022 conserva los elementos cuyo identity no cambi\xF3
\u2022 reduce renders, flicker y trabajo de CD

\xDAsalo siempre en listas medianas o grandes.

En este proyecto:
\u2022 features/performance-lab/perf-demo.ts`,topic:"performance"},{term:"virtual scrolling",definition:`Renderiza solo los items visibles en pantalla.

Idea mental:
\u2022 tienes 10,000 filas
\u2022 el usuario ve quiz\xE1 20 o 30
\u2022 no necesitas pintar las 10,000 al mismo tiempo

\xDAsalo cuando:
\u2022 la lista es muy grande
\u2022 el DOM empieza a pesar

En este proyecto:
\u2022 features/performance-lab/perf-demo.ts
\u2022 usa cdk-virtual-scroll-viewport`,topic:"performance"},{term:"Web Workers",definition:"Threads del navegador en segundo plano sin bloquear la UI. Para c\xE1lculos pesados.",topic:"performance"},{term:"Preloading strategies",definition:"Pre-cargar m\xF3dulos lazy-loaded en segundo plano despu\xE9s de la carga inicial.",topic:"performance"},{term:"SSR",definition:`Server-Side Rendering significa que el HTML inicial se genera en el servidor.

Beneficios:
\u2022 mejor LCP
\u2022 mejor SEO
\u2022 el usuario ve contenido antes

No resuelve todo por s\xED solo:
\u2022 luego el cliente debe hidratar la app
\u2022 si el JS es enorme, la interacci\xF3n puede seguir tardando`,topic:"performance"},{term:"hydration",definition:`Es el proceso en el que Angular toma el HTML ya renderizado en servidor y lo 'activa' en el cliente.

Beneficio clave:
\u2022 no destruye y vuelve a crear todo el DOM
\u2022 conserva el trabajo hecho por SSR

Problemas t\xEDpicos:
\u2022 diferencias entre HTML servidor y cliente
\u2022 acceso directo a window/document demasiado pronto`,topic:"performance"},{term:"TTI",definition:"Time To Interactive: cu\xE1nto tarda la p\xE1gina en responder a clicks y scroll.",topic:"performance"},{term:"AOT Compilation",definition:"Ahead-Of-Time: compila templates a JS durante build. M\xE1s r\xE1pido, detecta errores antes.",topic:"performance"},{term:"Tree Shaking",definition:"El bundler elimina c\xF3digo no usado (dead code). Reduce el tama\xF1o del bundle final.",topic:"performance"},{term:"esbuild",definition:"Bundler ultrarr\xE1pido (Go) usado por Angular 17+. 10-100x m\xE1s r\xE1pido que Webpack.",topic:"performance"},{term:"bundle size",definition:"Tama\xF1o total de JS descargado. Menor = m\xE1s r\xE1pido. Lazy loading y tree shaking lo reducen.",topic:"performance"},{term:"LCP",definition:"Largest Contentful Paint: cu\xE1ndo el elemento visible m\xE1s grande termina de renderizarse.",topic:"performance"},{term:"TestBed",definition:"Configura un m\xF3dulo de testing aislado para compilar componentes con dependencias mock.",topic:"testing"},{term:"NX",definition:"Framework para monorepos: build, testing, generaci\xF3n de c\xF3digo. Builds incrementales.",topic:"architecture"},{term:"Webpack",definition:"Bundler que empaqueta c\xF3digo, estilos y assets. Angular lo us\xF3 por defecto hasta v16.",topic:"performance"},{term:"STAR",definition:"Situaci\xF3n, Tarea, Acci\xF3n, Resultado: m\xE9todo para respuestas behavioral en entrevistas.",topic:"architecture"},{term:"CI/CD",definition:"Continuous Integration/Deployment: automatizaci\xF3n de build, test y despliegue en cada push.",topic:"architecture"},{term:"WCAG",definition:"Web Content Accessibility Guidelines: est\xE1ndar con niveles A, AA, AAA para web accesible.",topic:"architecture"},{term:"ESG",definition:"Environmental, Social, Governance: marco de sostenibilidad empresarial.",topic:"architecture"},{term:"Higg Index",definition:"Herramientas para medir impacto ambiental y social en cadena de suministro textil.",topic:"architecture"},{term:"Computation caching",definition:"NX almacena resultados de builds/tests previos y reutiliza si c\xF3digo no cambi\xF3.",topic:"performance"},{term:"Dependency graph",definition:"Visualizaci\xF3n NX de relaciones entre proyectos. Permite builds selectivos.",topic:"architecture"},{term:"memoizadas",definition:"Cach\xE9 de resultados: se reutiliza si inputs no cambiaron. Selectors y computed() la usan.",topic:"ngrx"},{term:"Directivas",definition:"Clases que modifican el DOM. 3 tipos: componentes (con template), estructurales (*ngIf, @if) y de atributo (ngClass, ngStyle).",topic:"fundamentals"},{term:"Pipes",definition:"Transforman datos en el template. Pure (default, solo re-ejecuta si input cambia) o Impure (cada ciclo de CD).",topic:"fundamentals"},{term:"Lifecycle Hooks",definition:"M\xE9todos que Angular llama en momentos clave: ngOnInit, ngOnChanges, ngOnDestroy, ngAfterViewInit, etc.",topic:"fundamentals"},{term:"ngOnInit",definition:"Se ejecuta una vez despu\xE9s del primer ngOnChanges. Ideal para inicializaci\xF3n, HTTP calls, setup de suscripciones.",topic:"fundamentals"},{term:"ngOnDestroy",definition:"Se ejecuta cuando el componente se destruye. Para cleanup: unsubscribe, removeEventListener, clearInterval.",topic:"fundamentals"},{term:"ngOnChanges",definition:"Se ejecuta cada vez que un @Input cambia. Recibe SimpleChanges con previousValue y currentValue.",topic:"fundamentals"},{term:"Content Projection",definition:"Pasar contenido HTML de padre a hijo mediante <ng-content>. Single-slot o multi-slot con select.",topic:"fundamentals"},{term:"ng-content",definition:'Elemento para proyectar contenido del padre al hijo. select="" para multi-slot projection.',topic:"fundamentals"},{term:"ng-template",definition:"Template que no se renderiza por defecto. Se usa con *ngIf else, ngTemplateOutlet, directivas estructurales.",topic:"fundamentals"},{term:"ng-container",definition:"Contenedor l\xF3gico que no genera elemento DOM. Ideal para agrupar directivas sin div extra.",topic:"fundamentals"},{term:"ViewEncapsulation",definition:"Controla c\xF3mo se encapsulan los estilos CSS: Emulated (default), ShadowDom (nativo), None (global).",topic:"fundamentals"},{term:"Shadow DOM",definition:"API nativa del navegador para encapsular DOM y CSS. Angular lo emula por defecto con atributos _nghost/_ngcontent.",topic:"fundamentals"},{term:"Dependency Injection",definition:`Es el sistema con el que Angular resuelve dependencias autom\xE1ticamente.

Modelo mental:
\u2022 pides una dependencia
\u2022 Angular busca un provider registrado
\u2022 lo resuelve subiendo por el \xE1rbol de injectors

Importa porque controla:
\u2022 scope de instancias
\u2022 reusabilidad
\u2022 testabilidad
\u2022 aislamiento por feature o por componente`,topic:"fundamentals"},{term:"InjectionToken",definition:"Token para inyectar valores no-clase (strings, configs). new InjectionToken<Type>(description).",topic:"fundamentals"},{term:"providedIn",definition:`Define d\xF3nde vive el servicio y cu\xE1ntas instancias habr\xE1.

Resumen r\xE1pido:
\u2022 root = singleton global
\u2022 any = una instancia por lazy boundary / contexto
\u2022 platform = compartido entre apps Angular de la misma p\xE1gina

Regla pr\xE1ctica:
\u2022 root para la mayor\xEDa de servicios globales
\u2022 any o providers de ruta/componente cuando quieres aislamiento

En este proyecto:
\u2022 core/services/progress.service.ts
\u2022 core/services/mock-api.service.ts`,topic:"fundamentals"},{term:"providers",definition:`Es la lista donde registras dependencias manualmente en un scope concreto.

D\xF3nde puede vivir:
\u2022 app config / root
\u2022 una ruta
\u2022 un componente
\u2022 un m\xF3dulo legacy

La pregunta clave no es 'c\xF3mo lo registro' sino 'qu\xE9 scope necesito'.`,topic:"fundamentals"},{term:"ViewChild",definition:"Decorador para acceder a un elemento hijo o directiva desde la clase del componente. Alternativa signal: viewChild().",topic:"fundamentals"},{term:"ElementRef",definition:"Wrapper del elemento DOM nativo. Acceso directo via nativeElement. Usar con precauci\xF3n (no SSR-safe).",topic:"fundamentals"},{term:"TemplateRef",definition:"Referencia a un ng-template. Se usa con ViewContainerRef para crear vistas din\xE1micamente.",topic:"fundamentals"},{term:"ViewContainerRef",definition:"Punto de anclaje para insertar vistas (componentes/templates) din\xE1micamente en el DOM.",topic:"fundamentals"},{term:"Resolver",definition:"Funci\xF3n que pre-carga datos antes de activar una ruta. El componente recibe los datos ya listos.",topic:"fundamentals"},{term:"ActivatedRoute",definition:"Servicio con info de la ruta activa: params, queryParams, data, url. snapshot (est\xE1tico) vs observable (reactivo).",topic:"fundamentals"},{term:"NgModule",definition:"Clase con @NgModule que agrupa declarations, imports, exports, providers. Reemplazado por Standalone en Angular 20.",topic:"fundamentals"},{term:"DestroyRef",definition:"Angular 16+ alternativa a ngOnDestroy. inject(DestroyRef).onDestroy(() => cleanup()). Funcional y composable.",topic:"fundamentals"},{term:"HttpClient",definition:"Servicio de Angular para llamadas HTTP. Retorna Observables. Se configura con provideHttpClient().",topic:"fundamentals"},{term:"HttpParams",definition:'Clase inmutable para construir query params: new HttpParams().set("q", term).set("page", 1).',topic:"fundamentals"},{term:"HttpHeaders",definition:'Clase inmutable para headers HTTP: new HttpHeaders().set("Authorization", "Bearer token").',topic:"fundamentals"},{term:"HttpErrorResponse",definition:"Objeto de error HTTP con status, message, url. Se captura con catchError() en el pipe del Observable.",topic:"fundamentals"},{term:"HttpTestingController",definition:"Mock de HttpClient para tests. expectOne() verifica la URL, flush() env\xEDa respuesta mock, verify() confirma que no hay requests pendientes.",topic:"fundamentals"},{term:"withFetch",definition:"Opci\xF3n de provideHttpClient() que usa fetch() API nativa en vez de XMLHttpRequest. Mejor para SSR.",topic:"fundamentals"},{term:"idempotente",definition:"Operaci\xF3n que produce el mismo resultado sin importar cu\xE1ntas veces se ejecute. GET, PUT, DELETE son idempotentes; POST no.",topic:"fundamentals"}];topicRoutes={ngrx:{route:"/lab/ngrx",label:"NgRx Lab"},rxjs:{route:"/lab/rxjs",label:"RxJS Lab"},angular:{route:"/lab/angular",label:"Angular Core Lab"},typescript:{route:"/lab/typescript",label:"TypeScript Lab"},architecture:{route:"/lab/architecture",label:"Architecture Lab"},performance:{route:"/lab/performance",label:"Performance Lab"},testing:{route:"/lab/testing",label:"Testing Lab"},playwright:{route:"/lab/playwright",label:"Playwright Lab"},fundamentals:{route:"/lab/fundamentals",label:"Angular Fundamentals"}};getDefinition(e){return this.terms.find(t=>t.term.toLowerCase()===e.toLowerCase())?.definition??null}search(e){if(!e||e.length<2)return[];let a=e.toLowerCase(),t=[];for(let o of this.terms)if(o.term.toLowerCase().includes(a)||o.definition.toLowerCase().includes(a)){let i=this.topicRoutes[o.topic];t.push({term:o.term,definition:o.definition,topic:i?.label??o.topic,route:i?.route??"/lab/"+o.topic})}return t}getTermsByTopic(e){return this.terms.filter(a=>a.topic===e)}getRoute(e){return this.topicRoutes[e]?.route??"/lab/"+e}static \u0275fac=function(a){return new(a||n)};static \u0275prov=r({token:n,factory:n.\u0275fac,providedIn:"root"})};export{s as a};
