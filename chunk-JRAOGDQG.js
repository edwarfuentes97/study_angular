import{a as d}from"./chunk-EVHMM366.js";import"./chunk-WS4L6SOG.js";import{Db as n,Eb as t,Zb as e,fb as o,sa as i,ta as a}from"./chunk-G73V3KC4.js";import"./chunk-2NFLSA4Y.js";var s=class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=o({type:l,selectors:[["app-perf-learn"]],decls:521,vars:0,consts:[["appAutoGlossary","",1,"cards"],["id","1-onpush-trackby",1,"card"],[1,"code-ref"],["id","2-64defer-blocks",1,"card"],["id","3-virtual-scrolling",1,"card"],["id","4-bundle-analysis",1,"card"],["id","5-preloading-strategies",1,"card"],["id","6-web-workers",1,"card"],["id","estrategia-optimizacion",1,"card"],["id","anti-patterns-performance",1,"card"]],template:function(r,c){r&1&&(n(0,"div",0)(1,"div",1)(2,"h3"),e(3,"1. OnPush + trackBy"),t(),n(4,"p"),e(5," La estrategia "),n(6,"strong"),e(7,"OnPush"),t(),e(8," reduce dr\xE1sticamente los ciclos de change detection: Angular solo verifica el componente cuando cambian sus "),n(9,"code"),e(10,"@Input()"),t(),e(11," por referencia, se dispara un evento del template, o se usa "),n(12,"code"),e(13,"markForCheck()"),t(),e(14," / un Observable con async pipe. Combinado con "),n(15,"code"),e(16,"track"),t(),e(17," en "),n(18,"code"),e(19,"@for"),t(),e(20,", Angular reutiliza nodos DOM existentes en lugar de destruirlos y recrearlos al cambiar la lista. "),t(),n(21,"pre")(22,"code"),e(23,`@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \\\`
    @for (item of items; track item.id) {
      <app-item [data]="item" />
    }
  \\\`
})`),t()(),n(24,"div",2),e(25," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(26,"ul")(27,"li")(28,"code"),e(29,"features/ngrx-lab/components/product-card.ts"),t(),e(30," \u2014 OnPush change detection"),t(),n(31,"li")(32,"code"),e(33,"features/performance-lab/perf-demo.ts"),t(),e(34," \u2014 trackBy comparaci\xF3n (con y sin)"),t()()()(),n(35,"div",3)(36,"h3"),e(37,"2. @defer Blocks"),t(),n(38,"p"),e(39," Los bloques "),n(40,"code"),e(41,"@defer"),t(),e(42," permiten lazy-loading declarativo a nivel de template. Soportan m\xFAltiples triggers: "),n(43,"strong"),e(44,"on viewport"),t(),e(45," (cuando entra al viewport), "),n(46,"strong"),e(47,"on hover"),t(),e(48," (al pasar el mouse), "),n(49,"strong"),e(50,"on timer(Xms)"),t(),e(51," (tras un delay), y "),n(52,"strong"),e(53,"when condition"),t(),e(54," (cuando una expresi\xF3n es true). Incluyen estados "),n(55,"code"),e(56,"@placeholder"),t(),e(57,", "),n(58,"code"),e(59,"@loading"),t(),e(60," y "),n(61,"code"),e(62,"@error"),t(),e(63," para una UX completa durante la carga. "),t(),n(64,"pre")(65,"code"),e(66,`@defer (on viewport) {
  <app-heavy-chart [data]="chartData" />
} @placeholder {
  <div class="placeholder">\u{1F4CA} Gr\xE1fico disponible</div>
} @loading (minimum 300ms) {
  <div class="spinner">Cargando...</div>
} @error {
  <div class="error">Error al cargar</div>
}`),t()(),n(67,"div",2),e(68," \u{1F4C2} "),n(69,"code"),e(70,"features/performance-lab/perf-demo.ts"),t(),e(71," \u2014 @defer (on viewport) con @placeholder y @loading "),t()(),n(72,"div",4)(73,"h3"),e(74,"3. Virtual Scrolling"),t(),n(75,"p"),e(76," El CDK "),n(77,"code"),e(78,"ScrollingModule"),t(),e(79," proporciona "),n(80,"code"),e(81,"cdk-virtual-scroll-viewport"),t(),e(82," que solo renderiza los items visibles en el viewport. Con "),n(83,"code"),e(84,"itemSize"),t(),e(85," defines la altura fija de cada item. Esto reduce miles de nodos DOM a solo ~20 visibles, mejorando dram\xE1ticamente el rendimiento de listas grandes. "),t(),n(86,"pre"),a(),n(87,"code"),e(88,`<cdk-virtual-scroll-viewport itemSize="48" class="viewport">
  <div *cdkVirtualFor="let item of items" class="item">
    {{ item.name }}
  </div>
</cdk-virtual-scroll-viewport>`),t(),i(),t(),n(89,"div",2),e(90," \u{1F4C2} "),n(91,"code"),e(92,"features/performance-lab/perf-demo.ts"),t(),e(93," \u2014 cdk-virtual-scroll-viewport con 10,000 items "),t()(),n(94,"div",5)(95,"h3"),e(96,"4. Bundle Analysis"),t(),n(97,"p"),e(98," Usa "),n(99,"code"),e(100,"source-map-explorer"),t(),e(101," para visualizar qu\xE9 ocupa espacio en tu bundle. Activa source maps en "),n(102,"code"),e(103,"angular.json"),t(),e(104,", haz un build de producci\xF3n y analiza el treemap resultante. Identifica dependencias grandes, c\xF3digo duplicado y m\xF3dulos que podr\xEDan lazy-loadearse. "),t(),n(105,"pre")(106,"code"),e(107,`// angular.json \u2192 "sourceMap": true
// Terminal:
// npx source-map-explorer dist/app/browser/*.js`),t()(),n(108,"div",2),e(109," \u{1F4C2} "),n(110,"code"),e(111,"app.routes.ts"),t(),e(112," \u2014 Lazy loading de todas las features reduce el bundle inicial "),t()(),n(113,"div",6)(114,"h3"),e(115,"5. Preloading Strategies"),t(),n(116,"p"),e(117," Las estrategias de precarga permiten cargar m\xF3dulos lazy en background despu\xE9s del initial load. "),n(118,"code"),e(119,"PreloadAllModules"),t(),e(120," precarga todo autom\xE1ticamente. Para control fino, crea una estrategia custom que precargue solo rutas marcadas con "),n(121,"code"),e(122,"data: { preload: true }"),t(),e(123,". "),t(),n(124,"pre")(125,"code"),e(126,"provideRouter(routes, withPreloading(PreloadAllModules))"),t()(),n(127,"div",2),e(128," \u{1F4C2} "),n(129,"code"),e(130,"app.routes.ts"),t(),e(131," \u2014 Rutas lazy-loaded listas para preloading strategies "),t()(),n(132,"div",7)(133,"h3"),e(134,"6. Web Workers"),t(),n(135,"p"),e(136," Los Web Workers ejecutan c\xF3digo en un hilo separado, evitando bloquear el main thread con operaciones pesadas (procesamiento de datos, c\xE1lculos, compresi\xF3n). Angular CLI facilita su creaci\xF3n con "),n(137,"code"),e(138,"ng generate web-worker"),t(),e(139,". "),t(),n(140,"pre")(141,"code"),e(142,`// Generar:
// ng generate web-worker my-worker

// app.component.ts
if (typeof Worker !== 'undefined') {
  const worker = new Worker(new URL('./my-worker.worker', import.meta.url));
  worker.onmessage = ({ data }) => {
    console.log('Resultado:', data);
  };
  worker.postMessage({ items: largeDataset });
}

// my-worker.worker.ts
addEventListener('message', ({ data }) => {
  const result = heavyComputation(data.items);
  postMessage(result);
});`),t()()(),n(143,"div",8)(144,"h3"),e(145,"7 \xB7 Estrategia completa de optimizaci\xF3n"),t(),n(146,"p"),e(147," Checklist ordenado de mayor a menor impacto para optimizar una app Angular. Aplica cada nivel en orden: corregir change detection mal usado tiene m\xE1s efecto que cualquier ajuste de red o SSR. "),t(),n(148,"h4"),e(149,"Nivel 1 \u2014 Change Detection (mayor impacto)"),t(),n(150,"p"),e(151," Objetivo: "),n(152,"strong"),e(153,"OnPush en el 100 % de componentes"),t(),e(154,". Angular Default recorre todo el \xE1rbol en cada evento; OnPush lo limita a cambios de referencia en "),n(155,"code"),e(156,"@Input()"),t(),e(157,", eventos del template o "),n(158,"code"),e(159,"markForCheck()"),t(),e(160,". "),t(),n(161,"p")(162,"strong"),e(163,"Migrar a OnPush sin romper nada:"),t()(),n(164,"ol")(165,"li"),e(166,"Reemplazar mutaciones por inmutabilidad: "),n(167,"code"),e(168,"{ ...obj, prop: newVal }"),t(),e(169," en vez de "),n(170,"code"),e(171,"obj.prop = newVal"),t(),e(172,"."),t(),n(173,"li"),e(174,"Usar "),n(175,"code"),e(176,"async"),t(),e(177," pipe o signals para datos reactivos."),t(),n(178,"li"),e(179,"Agregar "),n(180,"code"),e(181,"changeDetection: ChangeDetectionStrategy.OnPush"),t(),e(182," al componente."),t()(),n(183,"p")(184,"strong"),e(185,"Signal-based components"),t(),e(186," ofrecen CD granular sin Zone.js. Para c\xF3digo que no necesita disparar CD (scroll listeners, animaciones de canvas), usa "),n(187,"code"),e(188,"NgZone.runOutsideAngular()"),t(),e(189,": "),t(),n(190,"pre"),a(),n(191,"code"),e(192,`@Component({ ... })
export class ScrollTrackerComponent {
  private ngZone = inject(NgZone);
  private scrollY = signal(0);

  constructor() {
    // Ejecuta fuera de Zone \u2192 no dispara CD en cada scroll
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('scroll', () => {
        this.scrollY.set(window.scrollY);
      });
    });
  }
}`),t(),i(),t(),n(193,"h4"),e(194,"Nivel 2 \u2014 Bundle Size"),t(),n(195,"ul")(196,"li")(197,"strong"),e(198,"Lazy loading de TODAS las features:"),t(),n(199,"code"),e(200,"loadChildren()"),t(),e(201," / "),n(202,"code"),e(203,"loadComponent()"),t(),e(204,"."),t(),n(205,"li")(206,"strong"),e(207,"Analizar bundle:"),t(),n(208,"code"),e(209,"ng build --stats-json && npx source-map-explorer dist/**/*.js"),t()(),n(210,"li")(211,"strong"),e(212,"Tree shaking:"),t(),e(213," importar selectivamente "),n(214,"code"),e(215,"import { map } from 'rxjs/operators'"),t(),e(216,", nunca "),n(217,"code"),e(218,"import * as rx from 'rxjs'"),t(),e(219,"."),t(),n(220,"li"),e(221,"Remover dependencias innecesarias del "),n(222,"code"),e(223,"package.json"),t(),e(224,"."),t(),n(225,"li")(226,"strong"),e(227,"Preloading strategies:"),t(),n(228,"code"),e(229,"PreloadAllModules"),t(),e(230," o una estrategia custom para rutas frecuentes."),t()(),n(231,"p")(232,"strong"),e(233,"Estrategia de preloading custom:"),t()(),n(234,"pre"),a(),n(235,"code"),e(236,`@Injectable({ providedIn: 'root' })
export class SelectivePreloadStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    // Solo precarga rutas marcadas con data.preload = true
    return route.data?.['preload'] ? load() : of(null);
  }
}

// app.routes.ts
export const routes: Routes = [
  {
    path: 'products',
    loadComponent: () => import('./features/products/products.component'),
    data: { preload: true }   // \u2190 se precarga en background
  },
  {
    path: 'admin',
    loadComponent: () => import('./features/admin/admin.component')
    // sin preload \u2192 se carga solo cuando el usuario navega
  }
];

// app.config.ts
provideRouter(routes, withPreloading(SelectivePreloadStrategy))`),t(),i(),t(),n(237,"h4"),e(238,"Nivel 3 \u2014 Rendering"),t(),n(239,"ul")(240,"li")(241,"strong")(242,"code"),e(243,"trackBy"),t(),e(244," en TODOS los "),n(245,"code"),e(246,"@for"),t(),e(247," / "),n(248,"code"),e(249,"*ngFor"),t(),e(250,":"),t(),e(251," evita re-crear nodos DOM al cambiar la lista."),t(),n(252,"li")(253,"strong"),e(254,"Virtual scrolling"),t(),e(255," para listas largas (100+ items): "),n(256,"code"),e(257,"cdk-virtual-scroll-viewport"),t(),e(258,"."),t(),n(259,"li")(260,"strong")(261,"code"),e(262,"@defer"),t()(),e(263," para componentes pesados below the fold."),t(),n(264,"li")(265,"strong"),e(266,"Evitar funciones en templates:"),t(),n(267,"code"),a(),e(268,"{{ getTotal() }}"),i(),t(),e(269," se recalcula en cada CD cycle \u2192 usar "),n(270,"code"),e(271,"computed"),t(),e(272," signal o un pipe puro."),t(),n(273,"li")(274,"code"),e(275,"ngClass"),t(),e(276," / "),n(277,"code"),e(278,"ngStyle"),t(),e(279," con objetos cacheados, no funciones."),t()(),n(280,"h4"),e(281,"Nivel 4 \u2014 Network"),t(),n(282,"ul")(283,"li")(284,"code"),e(285,"shareReplay(1)"),t(),e(286," para cachear HTTP responses compartidas."),t(),n(287,"li"),e(288,"HTTP caching con interceptor: ETag, If-None-Match."),t(),n(289,"li"),e(290,"Prefetch data con resolvers."),t(),n(291,"li"),e(292,"Pagination vs infinite scroll vs virtual scroll \u2014 elige seg\xFAn el UX."),t(),n(293,"li"),e(294,"Compress: gzip / brotli en servidor."),t()(),n(295,"p")(296,"strong"),e(297,"Interceptor de cach\xE9 HTTP con ETag:"),t()(),n(298,"pre"),a(),n(299,"code"),e(300,`export function httpCacheInterceptor(): HttpInterceptorFn {
  const cache = new Map<string, { etag: string; body: any }>();

  return (req, next) => {
    if (req.method !== 'GET') return next(req);

    const cached = cache.get(req.urlWithParams);
    let headers = req.headers;
    if (cached) {
      headers = headers.set('If-None-Match', cached.etag);
    }

    return next(req.clone({ headers })).pipe(
      map(event => {
        if (event instanceof HttpResponse) {
          const etag = event.headers.get('ETag');
          if (etag) {
            cache.set(req.urlWithParams, {
              etag,
              body: event.body
            });
          }
        }
        return event;
      }),
      catchError(err => {
        // 304 Not Modified \u2192 devolver respuesta cacheada
        if (err.status === 304 && cached) {
          return of(new HttpResponse({
            body: cached.body,
            status: 200
          }));
        }
        return throwError(() => err);
      })
    );
  };
}

// app.config.ts
provideHttpClient(withInterceptors([httpCacheInterceptor()]))`),t(),i(),t(),n(301,"h4"),e(302,"Nivel 5 \u2014 SSR & Hydration"),t(),n(303,"ul")(304,"li")(305,"strong"),e(306,"Server-Side Rendering"),t(),e(307," mejora LCP y SEO."),t(),n(308,"li")(309,"strong"),e(310,"Hydration (Angular 16+):"),t(),e(311," no destruye y recrea el DOM del servidor, lo reutiliza."),t(),n(312,"li")(313,"code"),e(314,"provideClientHydration()"),t(),e(315," en "),n(316,"code"),e(317,"app.config"),t(),e(318,"."),t(),n(319,"li")(320,"code"),e(321,"afterNextRender()"),t(),e(322," para c\xF3digo que solo debe correr en el browser (acceso a "),n(323,"code"),e(324,"window"),t(),e(325,", "),n(326,"code"),e(327,"document"),t(),e(328,", etc.)."),t()(),n(329,"pre"),a(),n(330,"code"),e(331,`// app.config.ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideRouter(routes),
    provideHttpClient()
  ]
};

// Componente que necesita APIs del browser
@Component({ ... })
export class ChartComponent {
  constructor() {
    afterNextRender(() => {
      // Seguro: solo corre en el browser despu\xE9s del render
      const canvas = document.getElementById('chart') as HTMLCanvasElement;
      new Chart(canvas, { /* config */ });
    });
  }
}`),t(),i(),t(),n(332,"h4"),e(333,"Nivel 6 \u2014 Web Workers"),t(),n(334,"ul")(335,"li"),e(336,"Para c\xE1lculos pesados: parsing CSV, procesamiento de im\xE1genes, ordenamiento masivo."),t(),n(337,"li")(338,"code"),e(339,"ng generate web-worker my-worker"),t()(),n(340,"li"),e(341,"No pueden acceder al DOM."),t(),n(342,"li"),e(343,"Comunicaci\xF3n por mensajes: "),n(344,"code"),e(345,"worker.postMessage()"),t(),e(346," / "),n(347,"code"),e(348,"worker.onmessage"),t(),e(349,"."),t()(),n(350,"h4"),e(351,"M\xE9tricas a medir"),t(),n(352,"table")(353,"thead")(354,"tr")(355,"th"),e(356,"M\xE9trica"),t(),n(357,"th"),e(358,"Target"),t(),n(359,"th"),e(360,"Herramienta"),t()()(),n(361,"tbody")(362,"tr")(363,"td"),e(364,"LCP"),t(),n(365,"td"),e(366,"< 2.5 s"),t(),n(367,"td"),e(368,"Lighthouse"),t()(),n(369,"tr")(370,"td"),e(371,"FID / INP"),t(),n(372,"td"),e(373,"< 200 ms"),t(),n(374,"td"),e(375,"Lighthouse"),t()(),n(376,"tr")(377,"td"),e(378,"CLS"),t(),n(379,"td"),e(380,"< 0.1"),t(),n(381,"td"),e(382,"Lighthouse"),t()(),n(383,"tr")(384,"td"),e(385,"Bundle size"),t(),n(386,"td"),e(387,"< 200 KB initial"),t(),n(388,"td"),e(389,"source-map-explorer"),t()(),n(390,"tr")(391,"td"),e(392,"Component renders"),t(),n(393,"td"),e(394,"M\xEDnimos"),t(),n(395,"td"),e(396,"Angular DevTools"),t()()()(),n(397,"div",2),e(398," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(399,"ul")(400,"li")(401,"code"),e(402,"app.config.ts"),t(),e(403," \u2014 provideRouter con preloading strategy"),t(),n(404,"li")(405,"code"),e(406,"app.routes.ts"),t(),e(407," \u2014 Lazy loading de todas las features"),t(),n(408,"li")(409,"code"),e(410,"features/performance-lab/perf-demo.ts"),t(),e(411," \u2014 trackBy, @defer, virtual scrolling"),t()()()(),n(412,"div",9)(413,"h3"),e(414,"8 \xB7 Anti-patterns de Performance"),t(),n(415,"p"),e(416," Errores comunes que degradan el rendimiento de una app Angular. Cada uno muestra el c\xF3digo incorrecto (\u274C) y la correcci\xF3n (\u2705). "),t(),n(417,"h4"),e(418,"1. Funciones en template \u2014 se ejecutan en cada CD cycle"),t(),n(419,"pre"),a(),n(420,"code"),e(421,`// \u274C MAL \u2014 getTotal() se llama en CADA ciclo de change detection
@Component({
  template: \\\`<span>Total: {{ getTotal() }}</span>\\\`
})
export class OrderComponent {
  items = signal<Item[]>([]);
  getTotal(): number {
    return this.items().reduce((sum, i) => sum + i.price, 0);
  }
}

// \u2705 BIEN \u2014 computed() solo recalcula cuando items() cambia
@Component({
  template: \\\`<span>Total: {{ total() }}</span>\\\`
})
export class OrderComponent {
  items = signal<Item[]>([]);
  total = computed(() =>
    this.items().reduce((sum, i) => sum + i.price, 0)
  );
}`),t(),i(),t(),n(422,"p")(423,"strong"),e(424,"\xBFPor qu\xE9?"),t(),e(425," Angular ejecuta las expresiones del template en cada ciclo de CD. Un "),n(426,"code"),e(427,"computed"),t(),e(428," signal memoriza el resultado y solo recalcula cuando sus dependencias cambian. "),t(),n(429,"h4"),e(430,"2. Suscripciones manuales sin cleanup \u2014 memory leaks"),t(),n(431,"pre"),a(),n(432,"code"),e(433,`// \u274C MAL \u2014 suscripci\xF3n nunca se limpia \u2192 memory leak
@Component({ ... })
export class ChatComponent implements OnInit {
  messages: Message[] = [];

  ngOnInit() {
    this.chatService.messages$.subscribe(msgs => {
      this.messages = msgs;
    });
  }
}

// \u2705 BIEN \u2014 Opci\xF3n A: async pipe (se des-suscribe autom\xE1ticamente)
@Component({
  template: \\\`
    @for (msg of messages$ | async; track msg.id) {
      <app-message [data]="msg" />
    }
  \\\`
})
export class ChatComponent {
  messages$ = inject(ChatService).messages$;
}

// \u2705 BIEN \u2014 Opci\xF3n B: DestroyRef + takeUntilDestroyed
@Component({ ... })
export class ChatComponent {
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.chatService.messages$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(msgs => this.messages = msgs);
  }
}`),t(),i(),t(),n(434,"p")(435,"strong"),e(436,"\xBFPor qu\xE9?"),t(),e(437," Las suscripciones manuales persisten despu\xE9s de destruir el componente. El "),n(438,"code"),e(439,"async"),t(),e(440," pipe o "),n(441,"code"),e(442,"takeUntilDestroyed"),t(),e(443," garantizan la limpieza autom\xE1tica. "),t(),n(444,"h4"),e(445,"3. Importar m\xF3dulos enteros \u2014 bundle bloat"),t(),n(446,"pre"),a(),n(447,"code"),e(448,`// \u274C MAL \u2014 importa TODO RxJS (~45 KB)
import * as rx from 'rxjs';
const result$ = rx.of(1).pipe(rx.map(x => x * 2));

// \u2705 BIEN \u2014 tree-shakeable, solo importa lo usado (~2 KB)
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
const result$ = of(1).pipe(map(x => x * 2));`),t(),i(),t(),n(449,"p")(450,"strong"),e(451,"\xBFPor qu\xE9?"),t(),e(452," Los import con "),n(453,"code"),e(454,"*"),t(),e(455," impiden que el bundler elimine c\xF3digo no utilizado (tree shaking). Importar solo los s\xEDmbolos necesarios reduce dr\xE1sticamente el tama\xF1o del bundle. "),t(),n(456,"h4"),e(457,"4. No usar trackBy \u2014 re-renderiza toda la lista"),t(),n(458,"pre"),a(),n(459,"code"),e(460,`// \u274C MAL \u2014 sin track, Angular destruye y recrea todos los nodos DOM
@Component({
  template: \\\`
    @for (user of users(); track $index) {
      <app-user-card [user]="user" />
    }
  \\\`
})

// \u2705 BIEN \u2014 track por ID: Angular reutiliza nodos existentes
@Component({
  template: \\\`
    @for (user of users(); track user.id) {
      <app-user-card [user]="user" />
    }
  \\\`
})`),t(),i(),t(),n(461,"p")(462,"strong"),e(463,"\xBFPor qu\xE9?"),t(),e(464," Sin un "),n(465,"code"),e(466,"track"),t(),e(467," estable, Angular no puede identificar qu\xE9 elementos cambiaron. Usar "),n(468,"code"),e(469,"$index"),t(),e(470," falla cuando el orden cambia. Siempre usa una propiedad \xFAnica como "),n(471,"code"),e(472,"id"),t(),e(473,". "),t(),n(474,"h4"),e(475,"5. Mutaci\xF3n de objetos con OnPush \u2014 cambios invisibles"),t(),n(476,"pre"),a(),n(477,"code"),e(478,`// \u274C MAL \u2014 mutar el array no cambia la referencia \u2192 OnPush no detecta
updateUser(index: number, name: string) {
  this.users[index].name = name;  // mutaci\xF3n
}

// \u2705 BIEN \u2014 nueva referencia \u2192 OnPush detecta el cambio
updateUser(index: number, name: string) {
  this.users = this.users.map((u, i) =>
    i === index ? { ...u, name } : u
  );
}

// \u2705 MEJOR \u2014 con signals, update() crea nueva referencia
users = signal<User[]>([]);

updateUser(index: number, name: string) {
  this.users.update(list =>
    list.map((u, i) => i === index ? { ...u, name } : u)
  );
}`),t(),i(),t(),n(479,"p")(480,"strong"),e(481,"\xBFPor qu\xE9?"),t(),n(482,"code"),e(483,"OnPush"),t(),e(484," compara referencias, no contenido. Mutar un objeto/array mantiene la misma referencia, as\xED que Angular ignora el cambio. Siempre crea nuevas referencias con spread o "),n(485,"code"),e(486,".map()"),t(),e(487,". "),t(),n(488,"h4"),e(489,"6. ExpressionChangedAfterItHasBeenCheckedError"),t(),n(490,"pre"),a(),n(491,"code"),e(492,`// \u274C MAL \u2014 cambiar estado en ngAfterViewInit dispara el error
@Component({ ... })
export class BadComponent implements AfterViewInit {
  title = '';

  ngAfterViewInit() {
    this.title = 'Loaded';  // ERROR en dev mode
  }
}

// \u2705 BIEN \u2014 usar afterNextRender o un signal con efecto
@Component({ ... })
export class GoodComponent {
  title = signal('');

  constructor() {
    afterNextRender(() => {
      this.title.set('Loaded');
    });
  }
}`),t(),i(),t(),n(493,"p")(494,"strong"),e(495,"\xBFPor qu\xE9?"),t(),e(496," Angular verifica que los bindings no cambien entre el check y el re-check (en dev mode). Modificar estado en "),n(497,"code"),e(498,"ngAfterViewInit"),t(),e(499," viola esta regla. Usa "),n(500,"code"),e(501,"afterNextRender"),t(),e(502," o programa el cambio para el siguiente frame. "),t(),n(503,"h4"),e(504,"7. Observables sin compartir \u2014 m\xFAltiples HTTP calls"),t(),n(505,"pre"),a(),n(506,"code"),e(507,`// \u274C MAL \u2014 cada suscripci\xF3n dispara un HTTP request nuevo
@Injectable({ providedIn: 'root' })
export class UserService {
  getUser(id: number) {
    return this.http.get<User>(\\\`/api/users/\${id}\\\`);
  }
}
// Si 3 componentes llaman getUser(1) \u2192 3 HTTP requests

// \u2705 BIEN \u2014 shareReplay cachea y comparte la \xFAltima respuesta
@Injectable({ providedIn: 'root' })
export class UserService {
  private userCache = new Map<number, Observable<User>>();

  getUser(id: number): Observable<User> {
    if (!this.userCache.has(id)) {
      this.userCache.set(id,
        this.http.get<User>(\\\`/api/users/\${id}\\\`).pipe(
          shareReplay({ bufferSize: 1, refCount: true })
        )
      );
    }
    return this.userCache.get(id)!;
  }
}`),t(),i(),t(),n(508,"p")(509,"strong"),e(510,"\xBFPor qu\xE9?"),t(),e(511," Cada "),n(512,"code"),e(513,".subscribe()"),t(),e(514," a un Observable HTTP fr\xEDo crea una nueva petici\xF3n. "),n(515,"code"),e(516,"shareReplay"),t(),e(517," con "),n(518,"code"),e(519,"refCount: true"),t(),e(520," comparte la respuesta y libera el cach\xE9 cuando no hay suscriptores. "),t()()())},dependencies:[d],styles:["[_nghost-%COMP%]{display:block;padding:1rem 0}.cards[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.card[_ngcontent-%COMP%]{background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:1.2rem}.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 .6rem;font-size:1.1rem}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--text-muted);line-height:1.6;margin:0 0 .8rem}pre[_ngcontent-%COMP%]{background:var(--bg-code, #161b22);border:1px solid var(--border);border-radius:6px;padding:.8rem;overflow-x:auto;font-size:.85rem;line-height:1.5}code[_ngcontent-%COMP%]{color:var(--text)}"]})};export{s as PerfLearnComponent};
