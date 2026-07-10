import{a as s}from"./chunk-WXOJIICE.js";import"./chunk-BKIDS2JO.js";import{Db as n,Eb as t,Fb as l,Zb as e,fb as d,sa as i,ta as a}from"./chunk-G73V3KC4.js";import"./chunk-2NFLSA4Y.js";var m=class o{static \u0275fac=function(r){return new(r||o)};static \u0275cmp=d({type:o,selectors:[["app-angular-learn"]],decls:2102,vars:0,consts:[["appAutoGlossary","",1,"cards"],["id","1-change-detection",1,"card"],[1,"compare-table"],[1,"code-ref"],["id","2-signals",1,"card"],["id","3-reactive-forms",1,"card"],["id","4-lazy-loading",1,"card"],["id","5-interceptors-amp-guards",1,"card"],["id","6-dependency-injection-avanzada",1,"card"],["id","7-control-flow-moderno",1,"card"],["id","8-hydration-y-ssr",1,"card"]],template:function(r,u){r&1&&(n(0,"div",0)(1,"div",1)(2,"h3"),e(3,"1. Change Detection"),t(),n(4,"h4"),e(5,"\xBFC\xF3mo funciona?"),t(),n(6,"p"),e(7," Angular usa "),n(8,"strong"),e(9,"Zone.js"),t(),e(10," para interceptar "),n(11,"em"),e(12,"todos"),t(),e(13," los eventos as\xEDncronos (clicks, setTimeout, HTTP requests, Promises) y dispara un ciclo de Change Detection (CD) desde la ra\xEDz del \xE1rbol de componentes hacia abajo. En cada ciclo, Angular compara los valores actuales del template con los anteriores y actualiza el DOM si hay diferencias. "),t(),n(14,"h4"),e(15,"Zone.js por dentro"),t(),n(16,"p"),e(17," Zone.js hace "),n(18,"strong"),e(19,"monkey-patching"),t(),e(20," de las APIs as\xEDncronas del navegador ("),n(21,"code"),e(22,"addEventListener"),t(),e(23,", "),n(24,"code"),e(25,"setTimeout"),t(),e(26,", "),n(27,"code"),e(28,"Promise.then"),t(),e(29,", "),n(30,"code"),e(31,"XMLHttpRequest"),t(),e(32,"/"),n(33,"code"),e(34,"fetch"),t(),e(35,"). Angular ejecuta la app dentro de la "),n(36,"code"),e(37,"NgZone"),t(),e(38,": cuando la \xFAltima tarea as\xEDncrona termina, la zona emite "),n(39,"code"),e(40,"onMicrotaskEmpty"),t(),e(41," y "),n(42,"code"),e(43,"ApplicationRef.tick()"),t(),e(44,' inicia un ciclo de CD desde la ra\xEDz. Por eso "todo funciona m\xE1gicamente" sin avisarle a Angular\u2026 y por eso tambi\xE9n se revisa de m\xE1s. '),t(),n(45,"pre"),a(),n(46,"code"),e(47,`// Simplificaci\xF3n conceptual de lo que hace Zone.js
const originalSetTimeout = window.setTimeout;
window.setTimeout = (fn, delay) => originalSetTimeout(() => {
  fn();                          // 1. ejecuta tu callback
  ngZone.notifyTaskDone();       // 2. avisa a Angular
  // 3. onMicrotaskEmpty \u2192 ApplicationRef.tick() \u2192 CD en TODO el \xE1rbol
}, delay);

// Escapar de la zona: trabajo intensivo que NO debe disparar CD
export class CanvasComponent {
  private ngZone = inject(NgZone);

  startAnimation() {
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => this.drawFrame(), 16); // 60fps sin ciclos de CD
    });
  }

  // Volver a entrar cuando s\xED necesitas actualizar la UI
  finish() {
    this.ngZone.run(() => this.status = 'done');
  }
}`),t(),i(),t(),n(48,"h4"),e(49,"El \xE1rbol de Change Detection"),t(),n(50,"p"),e(51," CD recorre el \xE1rbol de componentes "),n(52,"strong"),e(53,"top-down"),t(),e(54," (de la ra\xEDz hacia las hojas), en una sola pasada y de forma "),n(55,"strong"),e(56,"unidireccional"),t(),e(57,': un padre se revisa siempre antes que sus hijos. Con Default se visita todo el \xE1rbol; con OnPush las ramas "limpias" se '),n(58,"strong"),e(59,"saltan completas"),t(),e(60," (incluidos sus descendientes). Por eso "),n(61,"code"),e(62,"markForCheck()"),t(),e(63," marca tambi\xE9n a los "),n(64,"em"),e(65,"ancestros"),t(),e(66,": si el camino desde la ra\xEDz no est\xE1 marcado, el ciclo nunca llegar\xEDa hasta el componente. En dev mode Angular ejecuta una segunda pasada de verificaci\xF3n \u2014 el origen del famoso "),n(67,"code"),e(68,"ExpressionChangedAfterItHasBeenCheckedError"),t(),e(69,". "),t(),n(70,"pre"),a(),n(71,"code"),e(72,`AppComponent (Default)            \u2190 tick() siempre empieza aqu\xED
\u251C\u2500\u2500 HeaderComponent (OnPush)      \u2190 limpio \u2192 se SALTA (y todo lo que cuelga de \xE9l)
\u251C\u2500\u2500 ListComponent (OnPush) \u2714      \u2190 @Input cambi\xF3 por referencia \u2192 se revisa
\u2502   \u2514\u2500\u2500 ItemComponent (OnPush)    \u2190 se eval\xFAan sus bindings porque el padre lo revisa
\u2514\u2500\u2500 FooterComponent (Default)     \u2190 se revisa en cada ciclo, cambie o no`),t(),i(),t(),n(73,"h4"),e(74,"Default Strategy"),t(),n(75,"p"),e(76," Revisa "),n(77,"strong"),e(78,"TODOS"),t(),e(79," los componentes en cada ciclo de CD, sin importar si cambiaron o no. Simple pero costoso en apps grandes \u2014 un solo click puede causar que cientos de componentes se revisen innecesariamente. "),t(),n(80,"pre"),a(),n(81,"code"),a(),e(82,`// Default \u2014 se revisa en CADA ciclo de CD, incluso si nada cambi\xF3
@Component({
  selector: 'app-default',
  template: \\\`<p>{{ heavyComputation() }}</p>\\\`
  // No se especifica changeDetection \u2192 usa Default
})
export class DefaultComponent {
  heavyComputation() {
    console.log('Se ejecuta en CADA ciclo de CD');
    return this.items.filter(i => i.active).length;
  }
}`),i(),t(),i(),t(),n(83,"h4"),e(84,"OnPush Strategy"),t(),n(85,"p"),e(86," Solo revisa el componente cuando ocurre una de estas condiciones: "),t(),n(87,"ul")(88,"li")(89,"strong"),e(90,"(a)"),t(),e(91," Un "),n(92,"code"),e(93,"@Input()"),t(),e(94," cambia por "),n(95,"strong"),e(96,"referencia"),t(),e(97," (no mutaci\xF3n)"),t(),n(98,"li")(99,"strong"),e(100,"(b)"),t(),e(101," Un evento DOM se dispara en el componente o en un hijo"),t(),n(102,"li")(103,"strong"),e(104,"(c)"),t(),e(105," Un "),n(106,"code"),e(107,"async"),t(),e(108," pipe emite un nuevo valor"),t(),n(109,"li")(110,"strong"),e(111,"(d)"),t(),e(112," Un "),n(113,"strong"),e(114,"Signal"),t(),e(115," le\xEDdo en el template cambia"),t(),n(116,"li")(117,"strong"),e(118,"(e)"),t(),e(119," Se llama "),n(120,"code"),e(121,"markForCheck()"),t(),e(122," manualmente"),t()(),n(123,"pre"),a(),n(124,"code"),a(),e(125,`@Component({
  selector: 'app-onpush',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \\\`
    <!-- (a) Input por referencia -->
    <p>{{ user.name }}</p>

    <!-- (b) Evento DOM -->
    <button (click)="increment()">+1</button>

    <!-- (c) Async pipe -->
    <p>{{ data$ | async }}</p>

    <!-- (d) Signal -->
    <p>{{ count() }}</p>
  \\\`
})
export class OnPushComponent {
  @Input() user!: { name: string };
  count = signal(0);
  data$ = inject(DataService).getData();

  increment() { this.count.update(v => v + 1); }
}`),i(),t(),i(),t(),n(126,"h4"),e(127,"ChangeDetectorRef"),t(),n(128,"p"),e(129," Permite controlar manualmente el ciclo de CD: "),t(),n(130,"pre"),a(),n(131,"code"),e(132,`export class ManualCDComponent {
  private cdr = inject(ChangeDetectorRef);

  // Fuerza una revisi\xF3n inmediata de este componente y sus hijos
  forceCheck() {
    this.cdr.detectChanges();
  }

  // Marca el componente como "dirty" \u2014 se revisar\xE1 en el pr\xF3ximo ciclo
  markDirty() {
    this.cdr.markForCheck();
  }

  // Desconecta el componente del \xE1rbol de CD \u2014 nunca se revisa autom\xE1ticamente
  detachFromCD() {
    this.cdr.detach();
  }

  // Reconecta al \xE1rbol de CD
  reattach() {
    this.cdr.reattach();
  }
}`),t(),i(),t(),n(133,"h4"),e(134,"markForCheck() vs detectChanges()"),t(),n(135,"table",2)(136,"thead")(137,"tr")(138,"th"),e(139,"Aspecto"),t(),n(140,"th")(141,"code"),e(142,"markForCheck()"),t()(),n(143,"th")(144,"code"),e(145,"detectChanges()"),t()()()(),n(146,"tbody")(147,"tr")(148,"td"),e(149,"Qu\xE9 hace"),t(),n(150,"td"),e(151,"Marca el componente "),n(152,"strong"),e(153,"y sus ancestros"),t(),e(154," como dirty"),t(),n(155,"td"),e(156,"Ejecuta CD "),n(157,"strong"),e(158,"s\xEDncronamente"),t(),e(159," en el componente y sus hijos"),t()(),n(160,"tr")(161,"td"),e(162,"Cu\xE1ndo corre la CD"),t(),n(163,"td"),e(164,"En el "),n(165,"strong"),e(166,"pr\xF3ximo ciclo"),t(),e(167," (se agrupa/coalesce con otros cambios)"),t(),n(168,"td")(169,"strong"),e(170,"Inmediatamente"),t(),e(171,", fuera del ciclo normal"),t()(),n(172,"tr")(173,"td"),e(174,"Riesgos"),t(),n(175,"td"),e(176,"Pr\xE1cticamente ninguno"),t(),n(177,"td")(178,"code"),e(179,"ExpressionChanged...Error"),t(),e(180,", ciclos infinitos, coste si se abusa"),t()(),n(181,"tr")(182,"td"),e(183,"Uso t\xEDpico"),t(),n(184,"td"),e(185,"OnPush + datos que llegan fuera de Angular (WebSocket, callbacks de libs de terceros)"),t(),n(186,"td"),e(187,"Componentes con "),n(188,"code"),e(189,"detach()"),t(),e(190,", forzar render en tests"),t()()()(),n(191,"p")(192,"strong"),e(193,"Regla pr\xE1ctica:"),t(),e(194," el 95% de las veces quieres "),n(195,"code"),e(196,"markForCheck()"),t(),e(197," (o mejor: un Signal, que lo hace por ti). "),n(198,"code"),e(199,"detectChanges()"),t(),e(200," es un martillo para casos muy puntuales. "),t(),n(201,"h4"),e(202,"Zoneless con provideZonelessChangeDetection()"),t(),n(203,"p"),e(204," Angular ya soporta un modelo "),n(205,"strong"),e(206,"sin Zone.js"),t(),e(207,": en vez de interceptar todas las APIs as\xEDncronas, la CD se programa solo cuando Angular recibe una "),n(208,"strong"),e(209,"notificaci\xF3n expl\xEDcita"),t(),e(210,". Disparan CD en modo zoneless: escribir un "),n(211,"strong"),e(212,"Signal"),t(),e(213," le\xEDdo en un template, "),n(214,"code"),e(215,"markForCheck()"),t(),e(216," (el "),n(217,"code"),e(218,"async"),t(),e(219," pipe lo llama internamente), eventos de template ("),n(220,"code"),e(221,"(click)"),t(),e(222,", etc.) y crear/destruir vistas din\xE1micas. Beneficios: menos overhead, sin polyfill de Zone.js en el bundle, stack traces limpios y mejor interop con librer\xEDas externas. "),t(),n(223,"pre"),a(),n(224,"code"),e(225,`// app.config.ts \u2014 activar Zoneless (estable desde Angular 20;
// en v18/19 se llamaba provideExperimentalZonelessChangeDetection)
export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    // Quita 'zone.js' del array "polyfills" en angular.json
  ]
};

// Con Zoneless, esto NO actualiza la UI (nadie notifica a Angular):
setTimeout(() => { this.value = 'nuevo'; }, 1000);   // \u274C

// Esto S\xCD funciona:
setTimeout(() => this.valueSignal.set('nuevo'), 1000); // \u2705 Signal
this.cdr.markForCheck();                                // \u2705 notificaci\xF3n expl\xEDcita
data$ | async                                           // \u2705 usa markForCheck por dentro

// Checklist de migraci\xF3n a zoneless:
// 1. Todos los componentes OnPush (o basados en signals)
// 2. Estado en Signals / async pipe \u2014 nada de mutar campos "a mano"
// 3. Nada que dependa de NgZone.onStable / tick impl\xEDcito`),t(),i(),t(),n(226,"h4"),e(227,"\u{1F9E0} Diagrama mental"),t(),n(228,"p")(229,"strong"),e(230,"Default"),t(),e(231,' = "rev\xEDsalo TODO siempre" \u2014 f\xE1cil pero lento.'),l(232,"br"),n(233,"strong"),e(234,"OnPush"),t(),e(235,' = "no me molestes a menos que algo cambie realmente" \u2014 r\xE1pido pero requiere inmutabilidad.'),l(236,"br"),n(237,"strong"),e(238,"Zoneless"),t(),e(239,' = "solo los Signals mandan" \u2014 el futuro de Angular. '),t(),n(240,"h4"),e(241,"\u26A0\uFE0F Errores comunes"),t(),n(242,"ul")(243,"li")(244,"strong"),e(245,"Mutar objeto con OnPush:"),t(),n(246,"code"),e(247,"this.user.name = 'Nuevo'"),t(),e(248," NO dispara CD porque la referencia no cambi\xF3. Soluci\xF3n: "),n(249,"code"),e(250,"this.user = { ...this.user, name: 'Nuevo' }"),t()(),n(251,"li")(252,"strong"),e(253,"ExpressionChangedAfterItHasBeenCheckedError:"),t(),e(254," Ocurre cuando un valor del template cambia durante el mismo ciclo de CD (por ejemplo, en "),n(255,"code"),e(256,"ngAfterViewInit"),t(),e(257,"). Soluciones modernas: mover el estado a un "),n(258,"strong"),e(259,"Signal"),t(),e(260,", usar "),n(261,"code"),e(262,"afterNextRender()"),t(),e(263,", o como \xFAltimo recurso diferir con "),n(264,"code"),e(265,"setTimeout"),t(),e(266,"/"),n(267,"code"),e(268,"queueMicrotask"),t(),e(269,". "),t(),n(270,"li")(271,"strong"),e(272,"Llamar funciones en el template:"),t(),n(273,"code"),a(),e(274,"{{ total() }}"),i(),t(),e(275," (m\xE9todo normal, no signal) se re-ejecuta en "),n(276,"em"),e(277,"cada"),t(),e(278," ciclo de CD. Soluci\xF3n: "),n(279,"code"),e(280,"computed()"),t(),e(281,", pipes puros o precalcular el valor. "),t(),n(282,"li")(283,"strong"),e(284,"Suscribirse y mutar un campo con OnPush:"),t(),e(285," el callback de "),n(286,"code"),e(287,"subscribe()"),t(),e(288," corre dentro de la zona, pero el componente OnPush no est\xE1 dirty \u2192 la vista no se actualiza. Soluci\xF3n: "),n(289,"code"),e(290,"async"),t(),e(291," pipe, "),n(292,"code"),e(293,"toSignal()"),t(),e(294," o "),n(295,"code"),e(296,"markForCheck()"),t(),e(297,". "),t(),n(298,"li")(299,"strong"),e(300,'Poner OnPush "a medias":'),t(),e(301," si el padre es OnPush y se salta, los hijos Default que cuelgan de \xE9l tampoco se revisan. La estrategia debe pensarse por "),n(302,"em"),e(303,"ramas"),t(),e(304,", no por componentes sueltos. "),t()(),n(305,"h4"),e(306,"\u2705 Mejores pr\xE1cticas"),t(),n(307,"ul")(308,"li"),e(309,"Usa "),n(310,"strong"),e(311,"OnPush por defecto"),t(),e(312," en componentes nuevos (config\xFAralo en los schematics de "),n(313,"code"),e(314,"angular.json"),t(),e(315,")."),t(),n(316,"li"),e(317,"Trata los "),n(318,"code"),e(319,"@Input()"),t(),e(320," como "),n(321,"strong"),e(322,"inmutables"),t(),e(323,": nuevas referencias, nunca mutaci\xF3n."),t(),n(324,"li"),e(325,"Prefiere "),n(326,"strong"),e(327,"Signals"),t(),e(328," o "),n(329,"code"),e(330,"async"),t(),e(331," pipe antes que "),n(332,"code"),e(333,"ChangeDetectorRef"),t(),e(334," manual."),t(),n(335,"li"),e(336,"Trabajo intensivo que no toca la UI \u2192 "),n(337,"code"),e(338,"NgZone.runOutsideAngular()"),t(),e(339,"."),t(),n(340,"li"),e(341,"Dise\xF1a hoy pensando en "),n(342,"strong"),e(343,"zoneless"),t(),e(344,": OnPush + Signals hace la migraci\xF3n trivial."),t()(),n(345,"h4"),e(346,"\u{1F3A4} Preguntas de entrevista"),t(),n(347,"ul")(348,"li")(349,"strong"),e(350,"\xBFQu\xE9 es Zone.js y c\xF3mo lo usa Angular?"),t(),e(351," Una librer\xEDa que hace monkey-patching de las APIs as\xEDncronas del navegador. Angular ejecuta la app dentro de NgZone y dispara "),n(352,"code"),e(353,"ApplicationRef.tick()"),t(),e(354," cuando la zona queda vac\xEDa de tareas, revisando todo el \xE1rbol de componentes. "),t(),n(355,"li")(356,"strong"),e(357,"\xBFQu\xE9 dispara CD en un componente OnPush?"),t(),e(358," Cambio de referencia en un "),n(359,"code"),e(360,"@Input"),t(),e(361,", un evento de template en el componente o sus hijos, una emisi\xF3n del "),n(362,"code"),e(363,"async"),t(),e(364," pipe, un Signal le\xEDdo en el template que cambia, o "),n(365,"code"),e(366,"markForCheck()"),t(),e(367,". "),t(),n(368,"li")(369,"strong"),e(370,"\xBFDiferencia entre markForCheck() y detectChanges()?"),t(),n(371,"code"),e(372,"markForCheck()"),t(),e(373," solo marca dirty hacia arriba y espera al pr\xF3ximo ciclo; "),n(374,"code"),e(375,"detectChanges()"),t(),e(376," ejecuta CD s\xEDncrona inmediata sobre el componente y sus hijos. "),t(),n(377,"li")(378,"strong"),e(379,"\xBFC\xF3mo preparar\xEDas una app para zoneless?"),t(),e(380," Migrar todo a OnPush, mover el estado a Signals (o "),n(381,"code"),e(382,"async"),t(),e(383," pipe), eliminar dependencias impl\xEDcitas de Zone.js (mutaciones en "),n(384,"code"),e(385,"setTimeout"),t(),e(386,", "),n(387,"code"),e(388,"onStable"),t(),e(389,") y activar "),n(390,"code"),e(391,"provideZonelessChangeDetection()"),t(),e(392,". "),t(),n(393,"li")(394,"strong"),e(395,"\xBFPor qu\xE9 OnPush exige inmutabilidad?"),t(),e(396," Porque la comprobaci\xF3n del input es por referencia ("),n(397,"code"),e(398,"==="),t(),e(399,"): si mutas el objeto, la referencia no cambia y Angular asume que no hay nada nuevo que renderizar. "),t()(),n(400,"div",3),e(401," \u{1F4C2} "),n(402,"code"),e(403,"features/angular-lab/change-detection/cd-demo.ts"),t(),e(404," \u2014 Default vs OnPush lado a lado "),t()(),n(405,"div",4)(406,"h3"),e(407,"2. Signals"),t(),n(408,"h4"),e(409,"2.1 \xBFQu\xE9 son los Signals?"),t(),n(410,"p"),e(411," Los Signals son una "),n(412,"strong"),e(413,"primitiva reactiva s\xEDncrona"),t(),e(414," introducida en Angular 16 que permite rastrear estado de forma granular. A diferencia de RxJS (que es as\xEDncrono y basado en push/subscribe), los Signals son "),n(415,"strong"),e(416,"s\xEDncronos"),t(),e(417," y basados en "),n(418,"strong"),e(419,"pull"),t(),e(420,": lees el valor cuando lo necesitas llam\xE1ndolo como funci\xF3n. "),t(),n(421,"p"),e(422," Angular los usa internamente para habilitar "),n(423,"strong"),e(424,"Change Detection granular"),t(),e(425," y eventualmente eliminar la dependencia en Zone.js (Zoneless Angular). Cuando un Signal cambia, Angular sabe "),n(426,"em"),e(427,"exactamente"),t(),e(428," qu\xE9 componentes necesitan actualizarse. "),t(),n(429,"h4"),e(430,"2.2 signal() \u2014 Estado mutable"),t(),n(431,"p")(432,"code"),e(433,"signal()"),t(),e(434," crea un valor reactivo mutable. Se lee llam\xE1ndolo como funci\xF3n, se escribe con "),n(435,"code"),e(436,".set()"),t(),e(437," o "),n(438,"code"),e(439,".update()"),t(),e(440,". "),t(),n(441,"pre"),a(),n(442,"code"),e(443,`import { signal } from '@angular/core';

// Crear un signal con valor inicial
const count = signal(0);

// Leer el valor (como funci\xF3n)
console.log(count()); // 0

// Escribir un nuevo valor
count.set(5);
console.log(count()); // 5

// Actualizar basado en el valor anterior
count.update(v => v + 1);
console.log(count()); // 6

// Con objetos (tipado expl\xEDcito)
interface User {
  name: string;
  age: number;
}
const user = signal<User>({ name: 'Ed', age: 30 });

// \u26A0\uFE0F mutate() fue removido en Angular 17
// Ahora se usa update() con spread para objetos:
user.update(u => ({ ...u, age: 31 }));

// Equality function \u2014 controla cu\xE1ndo se notifica a los consumidores
const position = signal(
  { x: 0, y: 0 },
  { equal: (a, b) => a.x === b.x && a.y === b.y }
);
// Si set() produce un valor "equal", NO se notifica`),t(),i(),t(),n(444,"h4"),e(445,"2.3 computed() \u2014 Derivaciones"),t(),n(446,"p")(447,"code"),e(448,"computed()"),t(),e(449," crea un Signal de "),n(450,"strong"),e(451,"solo lectura"),t(),e(452," derivado de otros Signals. Se recalcula "),n(453,"strong"),e(454,"solo cuando sus dependencias cambian"),t(),e(455," (memoizado autom\xE1ticamente). Es "),n(456,"strong"),e(457,"lazy"),t(),e(458,": no se calcula hasta que alguien lo lee. Y es "),n(459,"strong"),e(460,"glitch-free"),t(),e(461,": siempre muestra valores consistentes, nunca intermedios. "),t(),n(462,"pre"),a(),n(463,"code"),e(464,`import { signal, computed } from '@angular/core';

const firstName = signal('Eduardo');
const lastName = signal('Garc\xEDa');

// computed \u2014 se recalcula solo cuando firstName o lastName cambian
const fullName = computed(() => firstName() + ' ' + lastName());
console.log(fullName()); // 'Eduardo Garc\xEDa'

firstName.set('Carlos');
console.log(fullName()); // 'Carlos Garc\xEDa' \u2014 se recalcul\xF3 autom\xE1ticamente

// Ejemplo complejo: filtrado + ordenamiento + paginaci\xF3n
const items = signal<Product[]>([]);
const searchTerm = signal('');
const sortBy = signal<'name' | 'price'>('name');
const page = signal(1);
const pageSize = 10;

const filteredItems = computed(() =>
  items().filter(item =>
    item.name.toLowerCase().includes(searchTerm().toLowerCase())
  )
);

const sortedItems = computed(() => {
  const field = sortBy();
  return [...filteredItems()].sort((a, b) =>
    a[field] > b[field] ? 1 : -1
  );
});

const paginatedItems = computed(() => {
  const start = (page() - 1) * pageSize;
  return sortedItems().slice(start, start + pageSize);
});

const totalPages = computed(() =>
  Math.ceil(filteredItems().length / pageSize)
);`),t(),i(),t(),n(465,"h4"),e(466,"2.4 effect() \u2014 Side effects"),t(),n(467,"p")(468,"code"),e(469,"effect()"),t(),e(470," ejecuta c\xF3digo cuando los Signals que lee cambian. "),n(471,"strong"),e(472,"NO"),t(),e(473," se debe usar para cambiar otros Signals (anti-pattern). Casos de uso: logging, localStorage, analytics, manipulaci\xF3n manual del DOM. "),t(),n(474,"p")(475,"strong"),e(476,"Injection context:"),t(),e(477," se debe crear en el constructor, como campo de clase, o usando "),n(478,"code"),e(479,"runInInjectionContext()"),t(),e(480,". "),t(),n(481,"pre"),a(),n(482,"code"),e(483,`import { signal, effect, inject, Injector, runInInjectionContext } from '@angular/core';

// Ejemplo: persistir en localStorage
const count = signal(0);
effect(() => {
  localStorage.setItem('count', count().toString());
  console.log('Count guardado:', count());
});

// Cleanup function \u2014 se ejecuta antes de cada re-ejecuci\xF3n y al destruirse
effect((onCleanup) => {
  const id = setInterval(() => console.log('tick', count()), 1000);
  onCleanup(() => {
    clearInterval(id);
    console.log('Interval limpiado');
  });
});

// Fuera del injection context \u2014 usar runInInjectionContext
export class MyComponent {
  private injector = inject(Injector);
  count = signal(0);

  ngOnInit() {
    // \u274C effect(() => ...); // Error: no injection context
    // \u2705 Correcto:
    runInInjectionContext(this.injector, () => {
      effect(() => console.log('Count:', this.count()));
    });
  }
}`),t(),i(),t(),n(484,"h4"),e(485,"2.5 linkedSignal() \u2014 Angular 19+"),t(),n(486,"p")(487,"code"),e(488,"linkedSignal()"),t(),e(489," crea un Signal que se "),n(490,"strong"),e(491,"resetea autom\xE1ticamente"),t(),e(492," cuando su fuente cambia, pero tambi\xE9n se puede escribir manualmente. Ideal para formularios dependientes y selecciones que dependen de un contexto. "),t(),n(493,"pre"),a(),n(494,"code"),e(495,`import { signal, linkedSignal } from '@angular/core';

const items = signal(['Angular', 'React', 'Vue']);

// selected se resetea al primer item cuando items cambia
const selected = linkedSignal(() => items()[0]);
console.log(selected()); // 'Angular'

// Se puede escribir manualmente
selected.set('Vue');
console.log(selected()); // 'Vue'

// Cuando items cambia, selected se resetea
items.set(['Svelte', 'Solid', 'Qwik']);
console.log(selected()); // 'Svelte' \u2014 se resete\xF3 autom\xE1ticamente

// Caso de uso real: pa\xEDs \u2192 ciudad
const countries = signal(['M\xE9xico', 'Espa\xF1a', 'Argentina']);
const selectedCountry = signal('M\xE9xico');
const cities = computed(() => {
  const cityMap: Record<string, string[]> = {
    'M\xE9xico': ['CDMX', 'Guadalajara', 'Monterrey'],
    'Espa\xF1a': ['Madrid', 'Barcelona', 'Valencia'],
    'Argentina': ['Buenos Aires', 'C\xF3rdoba', 'Rosario'],
  };
  return cityMap[selectedCountry()] ?? [];
});
// Cuando el pa\xEDs cambia, la ciudad seleccionada se resetea a la primera
const selectedCity = linkedSignal(() => cities()[0]);`),t(),i(),t(),n(496,"h4"),e(497,"2.6 resource() \u2014 Angular 19+"),t(),n(498,"p")(499,"code"),e(500,"resource()"),t(),e(501," combina datos as\xEDncronos con Signals, proporcionando "),n(502,"code"),e(503,".value()"),t(),e(504,", "),n(505,"code"),e(506,".status()"),t(),e(507," y "),n(508,"code"),e(509,".error()"),t(),e(510," autom\xE1ticamente. Status puede ser: "),n(511,"strong"),e(512,"idle"),t(),e(513,", "),n(514,"strong"),e(515,"loading"),t(),e(516,", "),n(517,"strong"),e(518,"resolved"),t(),e(519,", "),n(520,"strong"),e(521,"error"),t(),e(522,". "),t(),n(523,"pre"),a(),n(524,"code"),e(525,`import { resource, signal } from '@angular/core';

// resource b\xE1sico
const products = resource({
  loader: () => fetch('/api/products').then(r => r.json())
});

// Usar en template o c\xF3digo:
products.value();   // Product[] | undefined
products.status();  // 'idle' | 'loading' | 'resolved' | 'error'
products.error();   // error object o undefined

// resource con dependencias \u2014 se recarga cuando selectedId cambia
const selectedId = signal('abc-123');
const productDetail = resource({
  request: () => ({ id: selectedId() }),
  loader: ({ request }) =>
    fetch(\\\`/api/products/\${request.id}\\\`).then(r => r.json())
});

// Cambiar el ID recarga autom\xE1ticamente
selectedId.set('xyz-456'); // productDetail se recarga`),t(),i(),t(),n(526,"h4"),e(527,"2.7 Interop con RxJS"),t(),n(528,"p"),e(529," Angular provee funciones para convertir entre Signals y Observables. "),n(530,"code"),e(531,"toSignal()"),t(),e(532," se auto-desuscribe al destruirse el componente. "),t(),n(533,"pre"),a(),n(534,"code"),e(535,`import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { signal } from '@angular/core';

// Observable \u2192 Signal
const products$ = this.http.get<Product[]>('/api/products');
const products = toSignal(products$, { initialValue: [] });
// products() devuelve Product[] \u2014 s\xEDncrono, sin async pipe

// Signal \u2192 Observable
const searchTerm = signal('');
const searchTerm$ = toObservable(searchTerm);
// searchTerm$ emite cada vez que searchTerm cambia

// toSignal se auto-desuscribe cuando el componente se destruye
// No necesitas takeUntilDestroyed() ni unsubscribe manual`),t(),i(),t(),n(536,"p")(537,"strong"),e(538,"\xBFCu\xE1ndo usar cada uno?"),t(),e(539," Signals para "),n(540,"em"),e(541,"estado de UI"),t(),e(542," (contadores, formularios, selecciones). RxJS para "),n(543,"em"),e(544,"streams de eventos"),t(),e(545," (WebSocket, event buses, operaciones complejas con timing como debounce, retry, race). "),t(),n(546,"h4"),e(547,"2.8 Signals vs BehaviorSubject"),t(),n(548,"table",2)(549,"thead")(550,"tr")(551,"th"),e(552,"Caracter\xEDstica"),t(),n(553,"th"),e(554,"Signal"),t(),n(555,"th"),e(556,"BehaviorSubject"),t()()(),n(557,"tbody")(558,"tr")(559,"td"),e(560,"S\xEDncrono"),t(),n(561,"td"),e(562,"\u2705 S\xED"),t(),n(563,"td"),e(564,"\u274C Async (schedulers)"),t()(),n(565,"tr")(566,"td"),e(567,"Lectura"),t(),n(568,"td")(569,"code"),e(570,"signal()"),t()(),n(571,"td")(572,"code"),e(573,".getValue()"),t(),e(574," o "),n(575,"code"),e(576,".subscribe()"),t()()(),n(577,"tr")(578,"td"),e(579,"Change Detection"),t(),n(580,"td"),e(581,"Autom\xE1tico (granular)"),t(),n(582,"td"),e(583,"Necesita async pipe o markForCheck"),t()(),n(584,"tr")(585,"td"),e(586,"Composici\xF3n"),t(),n(587,"td")(588,"code"),e(589,"computed()"),t()(),n(590,"td")(591,"code"),e(592,"combineLatest"),t(),e(593,", "),n(594,"code"),e(595,"map"),t()()(),n(596,"tr")(597,"td"),e(598,"Memory leaks"),t(),n(599,"td"),e(600,"No"),t(),n(601,"td"),e(602,"S\xED (si no unsubscribe)"),t()(),n(603,"tr")(604,"td"),e(605,"Side effects"),t(),n(606,"td")(607,"code"),e(608,"effect()"),t()(),n(609,"td")(610,"code"),e(611,"tap()"),t()()()()(),n(612,"h4"),e(613,"2.9 Patrones avanzados"),t(),n(614,"p")(615,"strong"),e(616,"Signal Store (NgRx SignalStore):"),t(),e(617," Alternativa m\xE1s simple al NgRx Store cl\xE1sico. Usa Signals internamente y reduce el boilerplate de Actions/Reducers/Effects. "),t(),n(618,"p")(619,"strong"),e(620,"Component state con Signals:"),t(),e(621," Reemplaza "),n(622,"code"),e(623,"BehaviorSubject"),t(),e(624," en servicios compartidos. Los componentes leen directamente "),n(625,"code"),e(626,"service.items()"),t(),e(627," sin "),n(628,"code"),e(629,"async"),t(),e(630," pipe. "),t(),n(631,"p")(632,"strong"),e(633,"Zoneless Angular:"),t(),e(634," Los Signals habilitan Change Detection sin Zone.js. Angular detecta exactamente qu\xE9 cambi\xF3 y actualiza solo esos componentes. "),t(),n(635,"pre"),a(),n(636,"code"),e(637,`// Servicio con Signals en vez de BehaviorSubject
@Injectable({ providedIn: 'root' })
export class CartService {
  // Antes: private itemsSubject = new BehaviorSubject<Item[]>([]);
  // Ahora:
  private items = signal<Item[]>([]);

  readonly allItems = this.items.asReadonly();
  readonly total = computed(() =>
    this.items().reduce((sum, i) => sum + i.price, 0)
  );
  readonly count = computed(() => this.items().length);

  addItem(item: Item) {
    this.items.update(list => [...list, item]);
  }

  removeItem(id: string) {
    this.items.update(list => list.filter(i => i.id !== id));
  }
}`),t(),i(),t(),n(638,"h4"),e(639,"2.10 untracked() \u2014 Leer sin crear dependencia"),t(),n(640,"p"),e(641," Dentro de un "),n(642,"code"),e(643,"computed()"),t(),e(644," o "),n(645,"code"),e(646,"effect()"),t(),e(647,", "),n(648,"em"),e(649,"toda"),t(),e(650," lectura de un Signal crea una dependencia reactiva. "),n(651,"code"),e(652,"untracked()"),t(),e(653," permite leer un Signal "),n(654,"strong"),e(655,"sin suscribirse"),t(),e(656," a \xE9l: el efecto no se re-ejecutar\xE1 cuando ese Signal cambie. "),t(),n(657,"pre"),a(),n(658,"code"),e(659,`import { signal, effect, untracked } from '@angular/core';

const counter = signal(0);
const currentUser = signal('Ed');

effect(() => {
  // Se re-ejecuta cuando counter cambia...
  const value = counter();

  // ...pero NO cuando currentUser cambia (solo se lee su valor actual)
  const user = untracked(currentUser);
  console.log(\`\${user} llev\xF3 el contador a \${value}\`);
});

// Tambi\xE9n sirve para invocar funciones que leen signals internamente
effect(() => {
  const value = counter();
  untracked(() => this.analytics.track('counter_changed', value));
});`),t(),i(),t(),n(660,"h4"),e(661,"2.11 input(), input.required(), model() y output()"),t(),n(662,"p"),e(663," Desde Angular 17.1+ los inputs pueden ser "),n(664,"strong"),e(665,"Signals"),t(),e(666,": son de solo lectura, participan en "),n(667,"code"),e(668,"computed()"),t(),e(669,", y "),n(670,"code"),e(671,"input.required()"),t(),e(672," obliga al padre a proveer el valor (error de compilaci\xF3n si falta). "),n(673,"code"),e(674,"model()"),t(),e(675," crea un Signal "),n(676,"em"),e(677,"escribible"),t(),e(678," con two-way binding "),n(679,"code"),e(680,"[(...)]"),t(),e(681,", y "),n(682,"code"),e(683,"output()"),t(),e(684," reemplaza a "),n(685,"code"),e(686,"@Output() + EventEmitter"),t(),e(687," con una API m\xE1s simple. "),t(),n(688,"pre"),a(),n(689,"code"),a(),e(690,`import { Component, input, model, output, computed } from '@angular/core';

@Component({
  selector: 'app-product-card',
  template: \`
    <h3>{{ product().name }}</h3>
    <p>{{ priceWithTax() | currency }}</p>
    <input type="checkbox" [checked]="selected()"
           (change)="selected.set(!selected())" />
    <button (click)="addToCart.emit(product().id)">Agregar</button>
  \`
})
export class ProductCardComponent {
  // input requerido \u2014 el padre DEBE pasarlo o no compila
  product = input.required<Product>();

  // input opcional con valor por defecto y transform
  discount = input(0, { transform: (v: number | string) => Number(v) });

  // model() \u2014 two-way binding: <app-product-card [(selected)]="isSelected" />
  selected = model(false);

  // output() \u2014 sin EventEmitter
  addToCart = output<string>();

  // Los inputs son signals \u2192 componen con computed()
  priceWithTax = computed(() =>
    this.product().price * (1 - this.discount()) * 1.16
  );
}

// En el padre:
// <app-product-card [product]="p" [discount]="0.1"
//                   [(selected)]="isSelected"
//                   (addToCart)="onAdd($event)" />`),i(),t(),i(),t(),n(691,"p")(692,"strong"),e(693,"Ventajas sobre "),n(694,"code"),e(695,"@Input()"),t(),e(696," cl\xE1sico:"),t(),e(697," tipado de required en compile-time, derivaciones con "),n(698,"code"),e(699,"computed()"),t(),e(700," en vez de "),n(701,"code"),e(702,"ngOnChanges"),t(),e(703,", funcionan de forma nativa con OnPush y zoneless, y son de solo lectura (el hijo no puede pisar el valor del padre por accidente). "),t(),n(704,"h4"),e(705,"\u2705 Mejores pr\xE1cticas"),t(),n(706,"ul")(707,"li")(708,"strong"),e(709,"Estado derivado \u2192 "),n(710,"code"),e(711,"computed()"),t(),e(712,", nunca "),n(713,"code"),e(714,"effect() + set()"),t(),e(715,"."),t(),e(716," El anti-pattern m\xE1s com\xFAn es sincronizar signals con efectos."),t(),n(717,"li"),e(718,"Exp\xF3n signals "),n(719,"strong"),e(720,"privados y escribibles"),t(),e(721," hacia fuera como "),n(722,"code"),e(723,"asReadonly()"),t(),e(724,"."),t(),n(725,"li"),e(726,"Reserva "),n(727,"code"),e(728,"effect()"),t(),e(729," para el "),n(730,"em"),e(731,"mundo exterior"),t(),e(732,": localStorage, analytics, DOM, logging."),t(),n(733,"li"),e(734,"Para objetos, define una "),n(735,"code"),e(736,"equal"),t(),e(737," function o mant\xE9n inmutabilidad estricta con "),n(738,"code"),e(739,"update()"),t(),e(740," + spread."),t(),n(741,"li"),e(742,"Combina con RxJS donde aporte: "),n(743,"code"),e(744,"toObservable()"),t(),e(745," \u2192 "),n(746,"code"),e(747,"debounceTime"),t(),e(748,"/"),n(749,"code"),e(750,"switchMap"),t(),e(751," \u2192 "),n(752,"code"),e(753,"toSignal()"),t(),e(754,"."),t()(),n(755,"h4"),e(756,"\u26A0\uFE0F Errores comunes"),t(),n(757,"ul")(758,"li")(759,"strong"),e(760,"Mutar en vez de reemplazar:"),t(),n(761,"code"),e(762,"items.update(l => { l.push(x); return l; })"),t(),e(763," devuelve la misma referencia \u2192 con la igualdad por defecto ("),n(764,"code"),e(765,"==="),t(),e(766,") nadie se entera. Usa "),n(767,"code"),e(768,"[...l, x]"),t(),e(769,". "),t(),n(770,"li")(771,"strong"),e(772,"Crear "),n(773,"code"),e(774,"effect()"),t(),e(775," en "),n(776,"code"),e(777,"ngOnInit"),t(),e(778,":"),t(),e(779," lanza error de injection context. Cr\xE9alo como campo de clase, en el constructor, o pasa "),n(780,"code"),e(781,"{ injector }"),t(),e(782,". "),t(),n(783,"li")(784,"strong"),e(785,"Escribir un Signal dentro de "),n(786,"code"),e(787,"computed()"),t(),e(788,":"),t(),e(789," prohibido \u2014 los computed deben ser funciones puras sin side effects. "),t(),n(790,"li")(791,"strong"),e(792,"Bucles con "),n(793,"code"),e(794,"effect()"),t(),e(795,":"),t(),e(796," leer y escribir el mismo Signal dentro de un efecto crea un ciclo. Suele indicar que necesitabas "),n(797,"code"),e(798,"computed()"),t(),e(799," o "),n(800,"code"),e(801,"linkedSignal()"),t(),e(802,". "),t(),n(803,"li")(804,"strong"),e(805,"Olvidar los par\xE9ntesis en el template:"),t(),n(806,"code"),a(),e(807,"{{ count }}"),i(),t(),e(808," imprime la funci\xF3n; es "),n(809,"code"),a(),e(810,"{{ count() }}"),i(),t(),e(811,". "),t()(),n(812,"h4"),e(813,"\u{1F3A4} Preguntas de entrevista"),t(),n(814,"ul")(815,"li")(816,"strong"),e(817,"\xBFSignal vs Observable \u2014 cu\xE1ndo usar cada uno?"),t(),e(818," Signals: estado s\xEDncrono de UI con lectura directa y CD granular. Observables: eventos en el tiempo, cancelaci\xF3n, operadores de timing (debounce, retry, race). Se combinan con "),n(819,"code"),e(820,"toSignal()"),t(),e(821,"/"),n(822,"code"),e(823,"toObservable()"),t(),e(824,". "),t(),n(825,"li")(826,"strong"),e(827,'\xBFQu\xE9 significa que computed() sea "glitch-free" y lazy?'),t(),e(828," Nunca expone valores intermedios inconsistentes (se recalcula de forma at\xF3mica) y no se eval\xFAa hasta que alguien lo lee; adem\xE1s memoiza el resultado. "),t(),n(829,"li")(830,"strong"),e(831,"\xBFPor qu\xE9 computed() en vez de effect() para derivar estado?"),t(),n(832,"code"),e(833,"computed()"),t(),e(834," es declarativo, memoizado y sin timing issues; "),n(835,"code"),e(836,"effect() + set()"),t(),e(837," introduce escrituras as\xEDncronas, posibles ciclos y estados intermedios inv\xE1lidos. "),t(),n(838,"li")(839,"strong"),e(840,"\xBFQu\xE9 hace untracked()?"),t(),e(841," Lee un Signal dentro de un contexto reactivo sin registrarlo como dependencia, evitando re-ejecuciones no deseadas. "),t(),n(842,"li")(843,"strong"),e(844,"\xBFinput() vs @Input()?"),t(),n(845,"code"),e(846,"input()"),t(),e(847," devuelve un Signal readonly: required en compile-time, componible con "),n(848,"code"),e(849,"computed()"),t(),e(850,", y notifica CD granular. "),n(851,"code"),e(852,"@Input()"),t(),e(853," es un campo mutable que requiere "),n(854,"code"),e(855,"ngOnChanges"),t(),e(856," para reaccionar. "),t(),n(857,"li")(858,"strong"),e(859,"\xBFC\xF3mo relacionas Signals con zoneless?"),t(),e(860,' Los Signals notifican a Angular exactamente qu\xE9 vista depende de qu\xE9 valor, eliminando la necesidad de Zone.js para saber "algo pudo cambiar". '),t()(),n(861,"div",3),e(862," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(863,"ul")(864,"li")(865,"code"),e(866,"features/angular-lab/signals/signals-demo.ts"),t(),e(867," \u2014 signal(), computed(), effect(), linkedSignal()"),t(),n(868,"li")(869,"code"),e(870,"core/services/progress.service.ts"),t(),e(871," \u2014 Servicio real con Signals para tracking de progreso"),t()()()(),n(872,"div",5)(873,"h3"),e(874,"3. Reactive Forms"),t(),n(875,"p"),e(876," Reactive Forms ofrecen un modelo "),n(877,"strong"),e(878,"expl\xEDcito e inmutable"),t(),e(879," del formulario en la clase del componente: el estado (valor, validez, "),n(880,"code"),e(881,"dirty"),t(),e(882,", "),n(883,"code"),e(884,"touched"),t(),e(885,", "),n(886,"code"),e(887,"pending"),t(),e(888,") vive en objetos "),n(889,"code"),e(890,"FormControl"),t(),e(891,"/"),n(892,"code"),e(893,"FormGroup"),t(),e(894,"/"),n(895,"code"),e(896,"FormArray"),t(),e(897,' y el template solo se "engancha" con '),n(898,"code"),e(899,"[formGroup]"),t(),e(900," y "),n(901,"code"),e(902,"formControlName"),t(),e(903,". Esto los hace predecibles, testeables sin DOM y componibles con RxJS. "),t(),n(904,"h4"),e(905,"3.1 Formularios tipados (Angular 14+)"),t(),n(906,"p"),e(907," Desde Angular 14 los formularios son "),n(908,"strong"),e(909,"estrictamente tipados"),t(),e(910,": "),n(911,"code"),e(912,"form.value"),t(),e(913," conoce la forma exacta de los datos. Ojo: "),n(914,"code"),e(915,"value"),t(),e(916," es "),n(917,"code"),e(918,"Partial<T>"),t(),e(919," (los controles "),n(920,"em"),e(921,"disabled"),t(),e(922," se excluyen), mientras que "),n(923,"code"),e(924,"getRawValue()"),t(),e(925," devuelve todo. Con "),n(926,"code"),e(927,"NonNullableFormBuilder"),t(),e(928," evitas el molesto "),n(929,"code"),e(930,"string | null"),t(),e(931," (al hacer "),n(932,"code"),e(933,"reset()"),t(),e(934," vuelve al valor inicial, no a "),n(935,"code"),e(936,"null"),t(),e(937,"). "),t(),n(938,"pre"),a(),n(939,"code"),e(940,`import { NonNullableFormBuilder, Validators } from '@angular/forms';

export class ProfileFormComponent {
  private fb = inject(NonNullableFormBuilder);

  form = this.fb.group({
    name:  ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    age:   [18, Validators.min(0)],
    address: this.fb.group({
      street: [''],
      city:   [''],
    }),
  });

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched(); // muestra todos los errores
      return;
    }
    // Tipado: { name: string; email: string; age: number; address: ... }
    const data = this.form.getRawValue();
    this.api.saveProfile(data);
  }
}

// Acceso tipado a controles y errores
this.form.controls.email.errors;   // { required: true } | { email: true } | null
this.form.controls.email.touched;  // boolean
this.form.controls.age.setValue(30);      // solo acepta number \u2705
// this.form.controls.age.setValue('30'); // \u274C error de compilaci\xF3n`),t(),i(),t(),n(941,"h4"),e(942,"3.2 FormArray \u2014 listas din\xE1micas"),t(),n(943,"pre"),a(),n(944,"code"),e(945,`form = this.fb.group({
  name: [''],
  skills: this.fb.array<string>([]),
});

get skills() { return this.form.controls.skills; }

addSkill()        { this.skills.push(this.fb.control('')); }
removeSkill(i: number) { this.skills.removeAt(i); }

// Template:
// <div formArrayName="skills">
//   @for (ctrl of skills.controls; track ctrl; let i = $index) {
//     <input [formControlName]="i" />
//     <button type="button" (click)="removeSkill(i)">\u2715</button>
//   }
// </div>`),t(),i(),t(),n(946,"h4"),e(947,"3.3 Validadores s\xEDncronos custom"),t(),n(948,"p"),e(949," Un validador es una "),n(950,"strong"),e(951,"funci\xF3n pura"),t(),e(952,": recibe el control y devuelve "),n(953,"code"),e(954,"null"),t(),e(955," (v\xE1lido) o un objeto de errores. Para validaci\xF3n "),n(956,"strong"),e(957,"cross-field"),t(),e(958," (comparar dos campos) se aplica al "),n(959,"code"),e(960,"FormGroup"),t(),e(961,", que recibe el grupo completo. "),t(),n(962,"pre"),a(),n(963,"code"),e(964,`// Validador parametrizable (factory)
export function forbiddenName(name: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null =>
    control.value === name
      ? { forbiddenName: { value: control.value } }
      : null;
}

// Cross-field: password === confirmPassword (se aplica al grupo)
export const passwordsMatch: ValidatorFn = (group: AbstractControl) => {
  const pass = group.get('password')?.value;
  const confirm = group.get('confirmPassword')?.value;
  return pass === confirm ? null : { passwordsMismatch: true };
};

form = this.fb.group(
  {
    username: ['', [Validators.required, forbiddenName('admin')]],
    password: ['', Validators.minLength(8)],
    confirmPassword: [''],
  },
  { validators: passwordsMatch }  // \u2190 validador a nivel de grupo
);

// Template: @if (form.hasError('passwordsMismatch')) { ... }`),t(),i(),t(),n(965,"h4"),e(966,"3.4 Validadores as\xEDncronos"),t(),n(967,"p"),e(968," Los "),n(969,"code"),e(970,"AsyncValidatorFn"),t(),e(971," devuelven "),n(972,"code"),e(973,"Observable"),t(),e(974," o "),n(975,"code"),e(976,"Promise"),t(),e(977," y solo corren "),n(978,"strong"),e(979,"despu\xE9s"),t(),e(980," de que los validadores s\xEDncronos pasan. Mientras esperan, el control queda en estado "),n(981,"code"),e(982,"pending"),t(),e(983,". Buenas pr\xE1cticas: debounce con "),n(984,"code"),e(985,"timer()"),t(),e(986," y cancelar la petici\xF3n anterior con "),n(987,"code"),e(988,"switchMap"),t(),e(989,". "),t(),n(990,"pre"),a(),n(991,"code"),e(992,`@Injectable({ providedIn: 'root' })
export class UsernameValidator {
  private api = inject(UserApiService);

  unique(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> =>
      timer(300).pipe(                       // debounce: espera a que dejen de teclear
        switchMap(() => this.api.checkUsername(control.value)),
        map(taken => (taken ? { usernameTaken: true } : null)),
        catchError(() => of(null)),          // si la API falla, no bloquees el form
      );
  }
}

username = this.fb.control('', {
  validators: [Validators.required],
  asyncValidators: [inject(UsernameValidator).unique()],
  updateOn: 'blur',   // valida al salir del campo, no en cada tecla
});

// Template:
// @if (username.pending) { <span>Verificando\u2026</span> }
// @if (username.hasError('usernameTaken')) { <span>Ya existe</span> }`),t(),i(),t(),n(993,"h4"),e(994,"3.5 valueChanges + operadores RxJS"),t(),n(995,"p"),e(996," Todo control expone "),n(997,"code"),e(998,"valueChanges"),t(),e(999," y "),n(1e3,"code"),e(1001,"statusChanges"),t(),e(1002," como Observables. El patr\xF3n cl\xE1sico de "),n(1003,"strong"),e(1004,"b\xFAsqueda reactiva"),t(),e(1005,": "),t(),n(1006,"pre"),a(),n(1007,"code"),e(1008,`search = this.fb.control('');

results$ = this.search.valueChanges.pipe(
  debounceTime(300),           // espera 300ms de silencio
  distinctUntilChanged(),      // ignora si el valor no cambi\xF3
  filter(term => term.length >= 2),
  switchMap(term => this.api.search(term)),  // cancela la request anterior
);

// O como Signal, sin async pipe:
results = toSignal(this.results$, { initialValue: [] });

// Reaccionar a un campo para habilitar/deshabilitar otro
constructor() {
  this.form.controls.hasDiscount.valueChanges
    .pipe(takeUntilDestroyed())   // cleanup autom\xE1tico
    .subscribe(has => {
      const code = this.form.controls.discountCode;
      has ? code.enable() : code.disable();
    });
}`),t(),i(),t(),n(1009,"h4"),e(1010,"3.6 updateOn \u2014 cu\xE1ndo se propaga el valor"),t(),n(1011,"p"),e(1012," Por defecto los controles se actualizan en cada tecla ("),n(1013,"code"),e(1014,"'change'"),t(),e(1015,"). "),n(1016,"code"),e(1017,"updateOn: 'blur'"),t(),e(1018," retrasa valor + validaci\xF3n hasta salir del campo, y "),n(1019,"code"),e(1020,"'submit'"),t(),e(1021," hasta el env\xEDo \u2014 clave para no disparar validadores as\xEDncronos (HTTP) en cada pulsaci\xF3n. "),t(),n(1022,"pre"),a(),n(1023,"code"),e(1024,`// Por control
email = new FormControl('', {
  validators: [Validators.email],
  updateOn: 'blur',
});

// Por grupo (aplica a todos los hijos que no lo sobrescriban)
form = new FormGroup({ ... }, { updateOn: 'submit' });`),t(),i(),t(),n(1025,"h4"),e(1026,"\u2705 Mejores pr\xE1cticas"),t(),n(1027,"ul")(1028,"li"),e(1029,"Usa "),n(1030,"code"),e(1031,"NonNullableFormBuilder"),t(),e(1032," y deja que TypeScript infiera los tipos del form."),t(),n(1033,"li")(1034,"code"),e(1035,"patchValue()"),t(),e(1036," para updates parciales, "),n(1037,"code"),e(1038,"setValue()"),t(),e(1039," cuando debes proveer todo (te protege de olvidar campos)."),t(),n(1040,"li"),e(1041,"En el submit: "),n(1042,"code"),e(1043,"form.markAllAsTouched()"),t(),e(1044," si es inv\xE1lido, y deshabilita el bot\xF3n con "),n(1045,"code"),e(1046,"form.pending"),t(),e(1047," en cuenta."),t(),n(1048,"li"),e(1049,"Suscripciones a "),n(1050,"code"),e(1051,"valueChanges"),t(),e(1052," siempre con "),n(1053,"code"),e(1054,"takeUntilDestroyed()"),t(),e(1055," o convi\xE9rtelas con "),n(1056,"code"),e(1057,"toSignal()"),t(),e(1058,"."),t(),n(1059,"li"),e(1060,"Extrae validadores a archivos propios y test\xE9alos como funciones puras."),t()(),n(1061,"h4"),e(1062,"\u26A0\uFE0F Errores comunes"),t(),n(1063,"ul")(1064,"li")(1065,"strong"),e(1066,"Usar "),n(1067,"code"),e(1068,"form.value"),t(),e(1069," con controles disabled:"),t(),e(1070," desaparecen del objeto (es "),n(1071,"code"),e(1072,"Partial"),t(),e(1073,"). Si los necesitas, usa "),n(1074,"code"),e(1075,"getRawValue()"),t(),e(1076,". "),t(),n(1077,"li")(1078,"strong"),e(1079,"Async validator sin debounce:"),t(),e(1080," una petici\xF3n HTTP por tecla. Combina "),n(1081,"code"),e(1082,"timer + switchMap"),t(),e(1083," o "),n(1084,"code"),e(1085,"updateOn: 'blur'"),t(),e(1086,". "),t(),n(1087,"li")(1088,"strong"),e(1089,"Poner el validador cross-field en un control:"),t(),e(1090," desde un control no ves a sus hermanos de forma fiable; va en el "),n(1091,"code"),e(1092,"FormGroup"),t(),e(1093,". "),t(),n(1094,"li")(1095,"strong"),e(1096,"Suscribirse a "),n(1097,"code"),e(1098,"valueChanges"),t(),e(1099," y hacer "),n(1100,"code"),e(1101,"setValue()"),t(),e(1102," del mismo control:"),t(),e(1103," bucle infinito. Usa "),n(1104,"code"),e(1105,"{ emitEvent: false }"),t(),e(1106,". "),t(),n(1107,"li")(1108,"strong"),e(1109,"Olvidar "),n(1110,"code"),e(1111,'type="button"'),t()(),e(1112," en botones de agregar/quitar dentro del "),n(1113,"code"),e(1114,"<form>"),t(),e(1115,": hacen submit accidental. "),t()(),n(1116,"h4"),e(1117,"\u{1F3A4} Preguntas de entrevista"),t(),n(1118,"ul")(1119,"li")(1120,"strong"),e(1121,"\xBFReactive vs Template-driven?"),t(),e(1122," Reactive: modelo en la clase, s\xEDncrono, tipado, testeable, escala a forms complejos. Template-driven: "),n(1123,"code"),e(1124,"ngModel"),t(),e(1125," en el HTML, as\xEDncrono, v\xE1lido para forms triviales. "),t(),n(1126,"li")(1127,"strong"),e(1128,"\xBFC\xF3mo validas que dos campos coincidan?"),t(),e(1129," Con un "),n(1130,"code"),e(1131,"ValidatorFn"),t(),e(1132," aplicado al "),n(1133,"code"),e(1134,"FormGroup"),t(),e(1135,", que lee ambos controles con "),n(1136,"code"),e(1137,"get()"),t(),e(1138," y devuelve el error a nivel de grupo. "),t(),n(1139,"li")(1140,"strong"),e(1141,"\xBFQu\xE9 es el estado "),n(1142,"code"),e(1143,"pending"),t(),e(1144,"?"),t(),e(1145," El control tiene validadores as\xEDncronos en vuelo; ni v\xE1lido ni inv\xE1lido todav\xEDa. \xDAtil para spinners y para bloquear el submit. "),t(),n(1146,"li")(1147,"strong"),e(1148,"\xBFsetValue vs patchValue?"),t(),n(1149,"code"),e(1150,"setValue"),t(),e(1151," exige el objeto completo y falla si falta un campo; "),n(1152,"code"),e(1153,"patchValue"),t(),e(1154," acepta parciales e ignora claves extra. "),t(),n(1155,"li")(1156,"strong"),e(1157,"\xBFQu\xE9 aportan los typed forms?"),t(),e(1158," Autocompletado y errores de compilaci\xF3n en "),n(1159,"code"),e(1160,"value"),t(),e(1161,", "),n(1162,"code"),e(1163,"setValue"),t(),e(1164,", "),n(1165,"code"),e(1166,"controls.x"),t(),e(1167," \u2014 antes todo era "),n(1168,"code"),e(1169,"any"),t(),e(1170," y los typos explotaban en runtime. "),t()(),n(1171,"div",3),e(1172," \u{1F4C2} "),n(1173,"code"),e(1174,"features/angular-lab/forms/reactive-form-demo.ts"),t(),e(1175," \u2014 FormGroup, FormArray, validadores custom "),t()(),n(1176,"div",6)(1177,"h3"),e(1178,"4. Lazy Loading"),t(),n(1179,"p"),e(1180," Lazy loading divide la app en "),n(1181,"strong"),e(1182,"chunks"),t(),e(1183," que el navegador descarga bajo demanda, reduciendo el bundle inicial (y el Time to Interactive). El bundler detecta los "),n(1184,"code"),e(1185,"import()"),t(),e(1186," din\xE1micos y genera un archivo JS separado por cada uno. Con "),n(1187,"code"),e(1188,"loadComponent"),t(),e(1189," se carga un componente standalone en una ruta; con "),n(1190,"code"),e(1191,"loadChildren"),t(),e(1192,", un \xE1rbol de rutas completo (una feature). "),t(),n(1193,"pre"),a(),n(1194,"code"),e(1195,`import { Routes } from '@angular/router';

export const routes: Routes = [
  // Lazy load de un componente standalone
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard').then(m => m.DashboardComponent)
  },
  // Lazy load de una feature completa (rutas hijas)
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.routes').then(m => m.ADMIN_ROUTES)
  },
  // Con default export no hace falta el .then()
  {
    path: 'about',
    loadComponent: () => import('./about/about')  // export default class...
  },
];`),t(),i(),t(),n(1196,"h4"),e(1197,"Preloading strategies"),t(),n(1198,"p"),e(1199," Sin preloading, el chunk se descarga al navegar (el usuario espera). Las estrategias descargan chunks "),n(1200,"strong"),e(1201,"en segundo plano"),t(),e(1202," despu\xE9s del arranque: "),n(1203,"code"),e(1204,"PreloadAllModules"),t(),e(1205," (todos), "),n(1206,"code"),e(1207,"NoPreloading"),t(),e(1208," (default, ninguno) o una "),n(1209,"strong"),e(1210,"estrategia custom"),t(),e(1211," para precargar solo lo probable. "),t(),n(1212,"pre"),a(),n(1213,"code"),e(1214,`// Estrategia selectiva: precarga solo rutas marcadas con data.preload
@Injectable({ providedIn: 'root' })
export class SelectivePreloadStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<unknown>): Observable<unknown> {
    return route.data?.['preload'] ? load() : of(null);
  }
}

export const routes: Routes = [
  { path: 'checkout', loadChildren: () => import('./checkout/routes'),
    data: { preload: true } },   // \u2190 cr\xEDtico, prec\xE1rgalo
  { path: 'reports',  loadChildren: () => import('./reports/routes') }, // solo on-demand
];

// app.config.ts
provideRouter(routes, withPreloading(SelectivePreloadStrategy));

// Alternativa built-in: precargar cuando el link entra en el viewport / hover
// provideRouter(routes, withComponentInputBinding(), withPreloading(...))`),t(),i(),t(),n(1215,"h4"),e(1216,"Guards funcionales en rutas lazy"),t(),n(1217,"p"),e(1218," Detalle importante: con "),n(1219,"code"),e(1220,"canActivate"),t(),e(1221,', la ruta ya "matche\xF3", as\xED que el chunk '),n(1222,"strong"),e(1223,"se descarga igual"),t(),e(1224," aunque el guard rechace. "),n(1225,"code"),e(1226,"canMatch"),t(),e(1227," corre "),n(1228,"em"),e(1229,"antes"),t(),e(1230," del match: si devuelve "),n(1231,"code"),e(1232,"false"),t(),e(1233,", el Router sigue probando otras rutas y el bundle "),n(1234,"strong"),e(1235,"nunca se descarga"),t(),e(1236," \u2014 ideal para rutas por rol. "),t(),n(1237,"pre"),a(),n(1238,"code"),e(1239,`export const adminOnly: CanMatchFn = () =>
  inject(AuthService).hasRole('admin');

export const routes: Routes = [
  // Misma URL, distinto bundle seg\xFAn el rol \u2014 canMatch decide cu\xE1l matchea
  { path: 'home', canMatch: [adminOnly],
    loadComponent: () => import('./admin-home') },
  { path: 'home',
    loadComponent: () => import('./user-home') },
];`),t(),i(),t(),n(1240,"h4"),e(1241,"\u2705 Mejores pr\xE1cticas"),t(),n(1242,"ul")(1243,"li"),e(1244,"Lazy-load por "),n(1245,"strong"),e(1246,"feature"),t(),e(1247," (con "),n(1248,"code"),e(1249,"loadChildren"),t(),e(1250," + archivo de rutas), no componente a componente."),t(),n(1251,"li"),e(1252,"La ruta inicial y el shell "),n(1253,"strong"),e(1254,"no"),t(),e(1255," se lazy-loadean: los necesitas ya."),t(),n(1256,"li"),e(1257,"Precarga selectiva de las rutas con m\xE1s probabilidad de visita."),t(),n(1258,"li"),e(1259,"Verifica el split real con "),n(1260,"code"),e(1261,"ng build --stats-json"),t(),e(1262," + source-map-explorer / esbuild analyzer."),t(),n(1263,"li"),e(1264,"Para diferir "),n(1265,"em"),e(1266,"trozos de una misma p\xE1gina"),t(),e(1267," usa "),n(1268,"code"),e(1269,"@defer"),t(),e(1270," (ver card de Control Flow), no rutas."),t()(),n(1271,"h4"),e(1272,"\u26A0\uFE0F Errores comunes"),t(),n(1273,"ul")(1274,"li")(1275,"strong"),e(1276,"Romper el code-splitting con un import est\xE1tico:"),t(),e(1277," si cualquier archivo del bundle inicial hace "),n(1278,"code"),e(1279,"import { AdminComponent } from ..."),t(),e(1280,", ese c\xF3digo se cuela en el chunk principal aunque la ruta sea lazy. "),t(),n(1281,"li")(1282,"strong"),e(1283,"Servicios "),n(1284,"code"),e(1285,"providedIn: 'root'"),t(),e(1286," vs providers de ruta:"),t(),e(1287," proveer un servicio en las rutas lazy crea una "),n(1288,"em"),e(1289,"instancia distinta"),t(),e(1290,' por inyector de ruta \u2014 a veces deseado, a veces un bug de "estado que se pierde". '),t(),n(1291,"li")(1292,"strong"),e(1293,"Usar "),n(1294,"code"),e(1295,"canActivate"),t(),e(1296," esperando ahorrar la descarga:"),t(),e(1297," el chunk ya se pidi\xF3; para eso es "),n(1298,"code"),e(1299,"canMatch"),t(),e(1300,". "),t()(),n(1301,"h4"),e(1302,"\u{1F3A4} Preguntas de entrevista"),t(),n(1303,"ul")(1304,"li")(1305,"strong"),e(1306,"\xBFC\xF3mo funciona lazy loading por debajo?"),t(),n(1307,"code"),e(1308,"import()"),t(),e(1309," din\xE1mico \u2192 el bundler corta un chunk separado \u2192 el Router lo descarga y ejecuta al activar la ruta (o antes, con preloading). "),t(),n(1310,"li")(1311,"strong"),e(1312,"\xBFloadComponent vs loadChildren?"),t(),n(1313,"code"),e(1314,"loadComponent"),t(),e(1315," carga un componente standalone individual; "),n(1316,"code"),e(1317,"loadChildren"),t(),e(1318," carga un array de rutas (una feature entera con sus hijos, guards y providers). "),t(),n(1319,"li")(1320,"strong"),e(1321,"\xBFcanMatch vs canActivate en rutas lazy?"),t(),n(1322,"code"),e(1323,"canMatch"),t(),e(1324," impide el match y la descarga del bundle, y permite fallback a otra ruta con el mismo path; "),n(1325,"code"),e(1326,"canActivate"),t(),e(1327," solo bloquea la activaci\xF3n. "),t(),n(1328,"li")(1329,"strong"),e(1330,"\xBFCu\xE1ndo NO conviene PreloadAllModules?"),t(),e(1331," Apps grandes en redes lentas o m\xF3viles: saturas la red descargando features que quiz\xE1 nunca se usen. Mejor una estrategia selectiva. "),t()(),n(1332,"div",3),e(1333," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(1334,"ul")(1335,"li")(1336,"code"),e(1337,"app.routes.ts"),t(),e(1338," \u2014 loadComponent() y loadChildren() en todas las rutas"),t(),n(1339,"li")(1340,"code"),e(1341,"features/angular-lab/lazy-feature/lazy-demo.routes.ts"),t(),e(1342," \u2014 Feature con rutas hijas lazy"),t()()()(),n(1343,"div",7)(1344,"h3"),e(1345,"5. Interceptors & Guards"),t(),n(1346,"p"),e(1347," Desde Angular 15+, interceptors y guards se escriben como "),n(1348,"strong"),e(1349,"funciones"),t(),e(1350," en vez de clases: menos boilerplate, tree-shakables y con acceso a servicios v\xEDa "),n(1351,"code"),e(1352,"inject()"),t(),e(1353,". Un "),n(1354,"code"),e(1355,"HttpInterceptorFn"),t(),e(1356," recibe "),n(1357,"code"),e(1358,"req"),t(),e(1359," y "),n(1360,"code"),e(1361,"next"),t(),e(1362," y forma una "),n(1363,"strong"),e(1364,"cadena"),t(),e(1365,": cada interceptor puede transformar la request (inmutable \u2192 siempre "),n(1366,"code"),e(1367,"clone()"),t(),e(1368,") y/o la response. Se registran con "),n(1369,"code"),e(1370,"provideHttpClient(withInterceptors([...]))"),t(),e(1371," y se ejecutan "),n(1372,"strong"),e(1373,"en el orden del array"),t(),e(1374," (y en orden inverso para la respuesta). "),t(),n(1375,"h4"),e(1376,"5.1 Auth token + manejo de 401"),t(),n(1377,"pre"),a(),n(1378,"code"),e(1379,`import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // \u26A0\uFE0F inject() SOLO en el cuerpo s\xEDncrono \u2014 captura los servicios aqu\xED,
  // no dentro de los callbacks de RxJS (ah\xED ya no hay injection context)
  const auth = inject(AuthService);
  const router = inject(Router);

  const token = auth.getToken();
  const cloned = token
    ? req.clone({ setHeaders: { Authorization: \`Bearer \${token}\` } })
    : req;

  return next(cloned).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status === 401) {
        auth.logout();
        router.navigate(['/login']);
      }
      return throwError(() => err);
    })
  );
};`),t(),i(),t(),n(1380,"h4"),e(1381,"5.2 Retry con backoff exponencial"),t(),n(1382,"pre"),a(),n(1383,"code"),e(1384,`export const retryInterceptor: HttpInterceptorFn = (req, next) => {
  // Solo reintenta GETs (los POST no son idempotentes)
  if (req.method !== 'GET') return next(req);

  return next(req).pipe(
    retry({
      count: 3,
      delay: (error: HttpErrorResponse, retryCount) => {
        // No reintentes errores del cliente (4xx)
        if (error.status >= 400 && error.status < 500) {
          return throwError(() => error);
        }
        // Backoff: 1s, 2s, 4s
        return timer(1000 * Math.pow(2, retryCount - 1));
      },
    })
  );
};`),t(),i(),t(),n(1385,"h4"),e(1386,"5.3 Logging con duraci\xF3n"),t(),n(1387,"pre"),a(),n(1388,"code"),e(1389,`export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  const started = performance.now();
  let status = 'failed';

  return next(req).pipe(
    tap(event => {
      if (event.type === HttpEventType.Response) status = \`\${event.status}\`;
    }),
    finalize(() => {
      const elapsed = Math.round(performance.now() - started);
      console.log(\`\${req.method} \${req.urlWithParams} \u2192 \${status} en \${elapsed}ms\`);
    })
  );
};`),t(),i(),t(),n(1390,"h4"),e(1391,"5.4 Caching de GETs"),t(),n(1392,"pre"),a(),n(1393,"code"),e(1394,`@Injectable({ providedIn: 'root' })
export class HttpCache {
  readonly store = new Map<string, HttpResponse<unknown>>();
}

export const cacheInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.method !== 'GET') return next(req);

  const cache = inject(HttpCache);
  const cached = cache.store.get(req.urlWithParams);
  if (cached) return of(cached.clone());   // respuesta s\xEDncrona desde cache

  return next(req).pipe(
    tap(event => {
      if (event instanceof HttpResponse) {
        cache.store.set(req.urlWithParams, event.clone());
      }
    })
  );
};

// Registro \u2014 el ORDEN importa: logging ve lo que auth ya modific\xF3
provideHttpClient(
  withInterceptors([authInterceptor, retryInterceptor, cacheInterceptor, loggingInterceptor])
);`),t(),i(),t(),n(1395,"h4"),e(1396,"5.5 Guards funcionales"),t(),n(1397,"p"),e(1398," Los guards son funciones que devuelven "),n(1399,"code"),e(1400,"boolean | UrlTree"),t(),e(1401," (o "),n(1402,"code"),e(1403,"Observable"),t(),e(1404,"/"),n(1405,"code"),e(1406,"Promise"),t(),e(1407," de ellos). Devolver un "),n(1408,"strong")(1409,"code"),e(1410,"UrlTree"),t()(),e(1411," es la forma correcta de redirigir \u2014 sin efectos colaterales de "),n(1412,"code"),e(1413,"navigate()"),t(),e(1414," dentro del guard. Tipos: "),n(1415,"code"),e(1416,"CanActivateFn"),t(),e(1417," (entrar), "),n(1418,"code"),e(1419,"CanActivateChildFn"),t(),e(1420," (hijos), "),n(1421,"code"),e(1422,"CanDeactivateFn"),t(),e(1423," (salir \u2014 cambios sin guardar), "),n(1424,"code"),e(1425,"CanMatchFn"),t(),e(1426," (matchear/descargar) y "),n(1427,"code"),e(1428,"ResolveFn"),t(),e(1429," (pre-cargar datos). "),t(),n(1430,"pre"),a(),n(1431,"code"),e(1432,`// CanActivateFn \u2014 con redirect v\xEDa UrlTree
export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  return auth.isLoggedIn()
    ? true
    : router.createUrlTree(['/login'], {
        queryParams: { returnUrl: state.url },  // volver despu\xE9s del login
      });
};

// CanDeactivateFn \u2014 evita perder cambios sin guardar
export interface HasUnsavedChanges {
  hasUnsavedChanges(): boolean;
}
export const unsavedChangesGuard: CanDeactivateFn<HasUnsavedChanges> =
  (component) =>
    !component.hasUnsavedChanges() || confirm('\xBFSalir sin guardar?');

// ResolveFn \u2014 datos listos antes de renderizar la ruta
export const userResolver: ResolveFn<User> = (route) =>
  inject(UserService).getById(route.paramMap.get('id')!);

export const routes: Routes = [
  {
    path: 'profile/:id',
    canActivate: [authGuard],
    canDeactivate: [unsavedChangesGuard],
    resolve: { user: userResolver },
    loadComponent: () => import('./profile/profile'),
  },
];`),t(),i(),t(),n(1433,"h4"),e(1434,"\u2705 Mejores pr\xE1cticas"),t(),n(1435,"ul")(1436,"li"),e(1437,"Redirige desde guards devolviendo "),n(1438,"code"),e(1439,"UrlTree"),t(),e(1440,", no llamando "),n(1441,"code"),e(1442,"router.navigate()"),t(),e(1443,"."),t(),n(1444,"li"),e(1445,"Captura los servicios con "),n(1446,"code"),e(1447,"inject()"),t(),e(1448," al inicio de la funci\xF3n, antes de cualquier callback as\xEDncrono."),t(),n(1449,"li"),e(1450,"Interceptors peque\xF1os y de responsabilidad \xFAnica; el orden de registro es parte del dise\xF1o."),t(),n(1451,"li"),e(1452,"Excluye endpoints (login, assets) con condiciones sobre "),n(1453,"code"),e(1454,"req.url"),t(),e(1455," o con "),n(1456,"code"),e(1457,"HttpContextToken"),t(),e(1458,"."),t(),n(1459,"li"),e(1460,"Guards con l\xF3gica compleja \u2192 delega en un servicio y test\xE9alo con "),n(1461,"code"),e(1462,"TestBed.runInInjectionContext()"),t(),e(1463,"."),t()(),n(1464,"h4"),e(1465,"\u26A0\uFE0F Errores comunes"),t(),n(1466,"ul")(1467,"li")(1468,"strong")(1469,"code"),e(1470,"inject()"),t(),e(1471," dentro de un callback RxJS"),t(),e(1472," (ej. en "),n(1473,"code"),e(1474,"catchError"),t(),e(1475,"): lanza "),n(1476,"code"),e(1477,"NG0203"),t(),e(1478," porque el injection context ya termin\xF3. Captura las dependencias fuera del pipe. "),t(),n(1479,"li")(1480,"strong"),e(1481,"Intentar mutar la request:"),t(),n(1482,"code"),e(1483,"HttpRequest"),t(),e(1484," es inmutable; "),n(1485,"code"),e(1486,"req.headers.set(...)"),t(),e(1487," devuelve una copia que est\xE1s descartando. Siempre "),n(1488,"code"),e(1489,"req.clone({...})"),t(),e(1490,". "),t(),n(1491,"li")(1492,"strong"),e(1493,"Reintentar o cachear POSTs:"),t(),e(1494," duplicas operaciones de escritura. Limita retry/cache a m\xE9todos idempotentes. "),t(),n(1495,"li")(1496,"strong"),e(1497,"Bucle infinito de refresh token:"),t(),e(1498," el interceptor de auth intercepta tambi\xE9n la petici\xF3n de refresh. M\xE1rcala con un "),n(1499,"code"),e(1500,"HttpContextToken"),t(),e(1501," para saltarla. "),t()(),n(1502,"h4"),e(1503,"\u{1F3A4} Preguntas de entrevista"),t(),n(1504,"ul")(1505,"li")(1506,"strong"),e(1507,"\xBFPor qu\xE9 "),n(1508,"code"),e(1509,"req.clone()"),t(),e(1510,"?"),t(),e(1511," Las requests son inmutables para que un retry/reintento reciba siempre la request original sin efectos acumulados de otros interceptors. "),t(),n(1512,"li")(1513,"strong"),e(1514,"\xBFEn qu\xE9 orden corren los interceptors?"),t(),e(1515," Request: en el orden del array de "),n(1516,"code"),e(1517,"withInterceptors"),t(),e(1518,". Response: en orden inverso (como capas de cebolla). "),t(),n(1519,"li")(1520,"strong"),e(1521,"\xBFInterceptor funcional vs de clase?"),t(),e(1522," Mismo poder; el funcional es menos c\xF3digo, tree-shakable y usa "),n(1523,"code"),e(1524,"inject()"),t(),e(1525,". Los de clase siguen soportados v\xEDa "),n(1526,"code"),e(1527,"withInterceptorsFromDi()"),t(),e(1528," (legacy). "),t(),n(1529,"li")(1530,"strong"),e(1531,"\xBFC\xF3mo redirige un guard correctamente?"),t(),e(1532," Devolviendo "),n(1533,"code"),e(1534,"router.createUrlTree([...])"),t(),e(1535,"; el Router cancela la navegaci\xF3n actual y ejecuta la nueva de forma at\xF3mica. "),t(),n(1536,"li")(1537,"strong"),e(1538,"\xBFResolver vs cargar datos en ngOnInit?"),t(),e(1539,' El resolver garantiza datos antes de renderizar (sin estados "cargando" parciales), pero bloquea la navegaci\xF3n; para UX fluida suele preferirse skeleton + carga en el componente. '),t()(),n(1540,"div",3),e(1541," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(1542,"ul")(1543,"li")(1544,"code"),e(1545,"core/interceptors/auth.interceptor.ts"),t(),e(1546," \u2014 HttpInterceptorFn funcional"),t(),n(1547,"li")(1548,"code"),e(1549,"core/guards/auth.guard.ts"),t(),e(1550," \u2014 CanActivateFn funcional"),t(),n(1551,"li")(1552,"code"),e(1553,"app.config.ts"),t(),e(1554," \u2014 provideHttpClient(withInterceptors([...]))"),t()()()(),n(1555,"div",8)(1556,"h3"),e(1557,"6. Dependency Injection Avanzada"),t(),n(1558,"p"),e(1559," El sistema de DI de Angular resuelve dependencias consultando una "),n(1560,"strong"),e(1561,"jerarqu\xEDa de inyectores"),t(),e(1562,". Entender esa jerarqu\xEDa \u2014y las formas de configurar providers\u2014 distingue a un dev senior: controla el "),n(1563,"em"),e(1564,"scope"),t(),e(1565," (singleton vs instancia por componente), el tree-shaking y la testabilidad. "),t(),n(1566,"h4"),e(1567,"6.1 providedIn y providers tree-shakables"),t(),n(1568,"p")(1569,"code"),e(1570,"providedIn: 'root'"),t(),e(1571," registra el servicio en el inyector ra\xEDz como "),n(1572,"strong"),e(1573,"singleton"),t(),e(1574," y lo hace "),n(1575,"strong"),e(1576,"tree-shakable"),t(),e(1577,": si nadie lo inyecta, no entra al bundle. Alternativas: "),n(1578,"code"),e(1579,"'platform'"),t(),e(1580," (compartido entre varias apps Angular en la misma p\xE1gina) y declararlo en el array "),n(1581,"code"),e(1582,"providers"),t(),e(1583," de un componente o una ruta (instancia por inyector). "),t(),n(1584,"pre"),a(),n(1585,"code"),e(1586,`// Singleton global, tree-shakable \u2014 el caso del 95%
@Injectable({ providedIn: 'root' })
export class CartService { ... }

// Instancia POR COMPONENTE (y sus hijos): estado aislado por instancia
@Component({
  selector: 'app-wizard',
  providers: [WizardStateService],  // cada <app-wizard> tiene el suyo
})
export class WizardComponent { ... }

// Instancia por FEATURE lazy (providers a nivel de ruta)
export const routes: Routes = [{
  path: 'admin',
  providers: [AdminAuditService],   // vive mientras la ruta est\xE9 activa
  loadChildren: () => import('./admin/admin.routes'),
}];`),t(),i(),t(),n(1587,"h4"),e(1588,"6.2 InjectionToken + useValue / useClass / useFactory / useExisting"),t(),n(1589,"p"),e(1590," Para inyectar cosas que "),n(1591,"strong"),e(1592,"no son clases"),t(),e(1593," (configs, funciones, primitivas) o para elegir implementaci\xF3n, se usa "),n(1594,"code"),e(1595,"InjectionToken"),t(),e(1596,' con las cuatro "recetas" de provider: '),t(),n(1597,"pre"),a(),n(1598,"code"),e(1599,`// Token tipado para configuraci\xF3n
export interface AppConfig {
  apiUrl: string;
  featureFlags: Record<string, boolean>;
}
export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

// useValue \u2014 un objeto literal
{ provide: APP_CONFIG, useValue: { apiUrl: '/api', featureFlags: {} } }

// useClass \u2014 sustituir implementaci\xF3n (ej. en tests o por entorno)
{ provide: LoggerService, useClass: environment.production
    ? RemoteLoggerService
    : ConsoleLoggerService }

// useFactory \u2014 construcci\xF3n con l\xF3gica y dependencias
{
  provide: STORAGE,
  useFactory: () => {
    const platformId = inject(PLATFORM_ID);
    return isPlatformBrowser(platformId) ? localStorage : new MemoryStorage();
  },
}

// useExisting \u2014 alias: dos tokens, UNA misma instancia
{ provide: BasicLogger, useExisting: LoggerService }

// Token con factory por defecto (no necesita provider expl\xEDcito)
export const WINDOW = new InjectionToken<Window>('window', {
  providedIn: 'root',
  factory: () => window,
});

// Consumo
export class ApiService {
  private config = inject(APP_CONFIG);
  private win = inject(WINDOW);
}`),t(),i(),t(),n(1600,"h4"),e(1601,"6.3 Jerarqu\xEDa de inyectores"),t(),n(1602,"p"),e(1603," Hay dos \xE1rboles paralelos: el "),n(1604,"strong"),e(1605,"EnvironmentInjector"),t(),e(1606," (root \u2192 providers de rutas lazy) y el "),n(1607,"strong"),e(1608,"ElementInjector"),t(),e(1609," (por elemento DOM con providers: componentes/directivas). Al resolver, Angular sube por el ElementInjector del componente; si no encuentra el token, salta al EnvironmentInjector y sube hasta root. Si nada lo provee: "),n(1610,"code"),e(1611,"NullInjectorError: No provider for X"),t(),e(1612,". "),t(),n(1613,"pre"),a(),n(1614,"code"),e(1615,`Resoluci\xF3n de inject(TokenX) desde un componente:

ElementInjector del componente
  \u2192 ElementInjector del padre \u2192 ... \u2192 ra\xEDz del \xE1rbol de elementos
    \u2192 EnvironmentInjector de la ruta (providers de ruta lazy)
      \u2192 EnvironmentInjector root (providedIn: 'root', app.config.ts)
        \u2192 PlatformInjector \u2192 NullInjector \u274C (error)`),t(),i(),t(),n(1616,"p"),e(1617," Modificadores de resoluci\xF3n con "),n(1618,"code"),e(1619,"inject()"),t(),e(1620,": "),t(),n(1621,"pre"),a(),n(1622,"code"),e(1623,`// No falles si no existe \u2192 devuelve null
private analytics = inject(AnalyticsService, { optional: true });

// Solo busca en el inyector del propio elemento
private local = inject(TabsService, { self: true, optional: true });

// Empieza a buscar en el PADRE (patr\xF3n: componentes anidados recursivos)
private parent = inject(MenuComponent, { skipSelf: true, optional: true });

// No pases del host (\xFAtil en directivas dentro de componentes)
private form = inject(ControlContainer, { host: true });`),t(),i(),t(),n(1624,"h4"),e(1625,"6.4 inject() vs constructor"),t(),n(1626,"pre"),a(),n(1627,"code"),e(1628,`// Antes (constructor injection)
constructor(
  private http: HttpClient,
  @Inject(APP_CONFIG) private config: AppConfig,
  @Optional() private logger?: LoggerService,
) {}

// Ahora (inject) \u2014 sin decoradores, tipos inferidos, funciona en funciones
private http = inject(HttpClient);
private config = inject(APP_CONFIG);          // tipo AppConfig inferido
private logger = inject(LoggerService, { optional: true });

// Habilita helpers reutilizables (composici\xF3n, estilo hooks)
export function injectQueryParam(name: string): Signal<string | null> {
  const route = inject(ActivatedRoute);
  return toSignal(route.queryParamMap.pipe(map(p => p.get(name))),
    { initialValue: null });
}`),t(),i(),t(),n(1629,"p")(1630,"strong"),e(1631,"Regla:"),t(),n(1632,"code"),e(1633,"inject()"),t(),e(1634," solo funciona en "),n(1635,"em"),e(1636,"injection context"),t(),e(1637,": inicializadores de campos, constructores, factories de providers, guards/interceptors funcionales y "),n(1638,"code"),e(1639,"runInInjectionContext()"),t(),e(1640,". En "),n(1641,"code"),e(1642,"ngOnInit"),t(),e(1643,", callbacks o "),n(1644,"code"),e(1645,"setTimeout"),t(),e(1646," lanza "),n(1647,"code"),e(1648,"NG0203"),t(),e(1649,". "),t(),n(1650,"h4"),e(1651,"\u26A0\uFE0F Errores comunes"),t(),n(1652,"ul")(1653,"li")(1654,"strong"),e(1655,"Doble instancia accidental:"),t(),e(1656," proveer en "),n(1657,"code"),e(1658,"providers"),t(),e(1659," de un componente un servicio que ya es "),n(1660,"code"),e(1661,"providedIn: 'root'"),t(),e(1662,' crea otra instancia para ese sub\xE1rbol \u2014 y "misteriosamente" el estado no se comparte. '),t(),n(1663,"li")(1664,"strong")(1665,"code"),e(1666,"inject()"),t(),e(1667," fuera de contexto:"),t(),e(1668," llamarlo en "),n(1669,"code"),e(1670,"ngOnInit"),t(),e(1671," o dentro de un callback. Mu\xE9velo a un campo de clase o usa "),n(1672,"code"),e(1673,"runInInjectionContext(injector, ...)"),t(),e(1674,". "),t(),n(1675,"li")(1676,"strong"),e(1677,"Token sin provider ni factory por defecto:"),t(),n(1678,"code"),e(1679,"NullInjectorError"),t(),e(1680," en runtime. Da al token una "),n(1681,"code"),e(1682,"factory"),t(),e(1683," o m\xE1rcalo "),n(1684,"code"),e(1685,"optional"),t(),e(1686," con fallback. "),t(),n(1687,"li")(1688,"strong"),e(1689,"L\xF3gica pesada en factories:"),t(),e(1690," los providers se instancian lazy pero de forma s\xEDncrona en la primera inyecci\xF3n \u2014 nada de HTTP en un "),n(1691,"code"),e(1692,"useFactory"),t(),e(1693,". "),t()(),n(1694,"h4"),e(1695,"\u{1F3A4} Preguntas de entrevista"),t(),n(1696,"ul")(1697,"li")(1698,"strong"),e(1699,"\xBFQu\xE9 es un InjectionToken y cu\xE1ndo lo usas?"),t(),e(1700," Un identificador \xFAnico y tipado para inyectar valores que no son clases (config, window, callbacks) o para desacoplar interfaz de implementaci\xF3n (las interfaces TS no existen en runtime). "),t(),n(1701,"li")(1702,"strong"),e(1703,"\xBFprovidedIn: 'root' vs providers de componente?"),t(),e(1704," Root: singleton global tree-shakable. Componente: una instancia por instancia del componente, destruida con \xE9l \u2014 ideal para estado local (wizard, tabs). "),t(),n(1705,"li")(1706,"strong"),e(1707,"\xBFC\xF3mo resuelve Angular una dependencia?"),t(),e(1708," Sube por el \xE1rbol de ElementInjectors del componente, luego por los EnvironmentInjectors (ruta \u2192 root \u2192 platform); el primer provider encontrado gana, o NullInjectorError. "),t(),n(1709,"li")(1710,"strong"),e(1711,"\xBFVentajas de inject() sobre constructor?"),t(),e(1712," Tipado sin decoradores, permite funciones helper reutilizables, evita problemas de herencia (no hay que repetir el constructor) y es la \xFAnica opci\xF3n en guards/interceptors funcionales. "),t()(),n(1713,"div",3),e(1714," \u{1F4C2} "),n(1715,"code"),e(1716,"app.config.ts"),t(),e(1717," \u2014 providers a nivel de aplicaci\xF3n (provideRouter, provideHttpClient) "),t()(),n(1718,"div",9)(1719,"h3"),e(1720,"7. Control Flow Moderno"),t(),n(1721,"p"),e(1722," Angular 17 introdujo la sintaxis de control flow nativa ("),n(1723,"code"),e(1724,"@if"),t(),e(1725,"/"),n(1726,"code"),e(1727,"@for"),t(),e(1728,"/"),n(1729,"code"),e(1730,"@switch"),t(),e(1731,"/"),n(1732,"code"),e(1733,"@defer"),t(),e(1734,"): integrada en el compilador (sin importar directivas), con mejor type-narrowing, hasta 90% m\xE1s r\xE1pida en listas que "),n(1735,"code"),e(1736,"*ngFor"),t(),e(1737," y con soporte de "),n(1738,"strong"),e(1739,"carga diferida declarativa"),t(),e(1740,". Es la sintaxis recomendada (hay migraci\xF3n autom\xE1tica: "),n(1741,"code"),e(1742,"ng generate @angular/core:control-flow"),t(),e(1743,"). "),t(),n(1744,"h4"),e(1745,"7.1 @if / @else"),t(),n(1746,"pre"),a(),n(1747,"code"),a(),e(1748,`@if (user(); as u) {
  <p>Hola, {{ u.name }}</p>      <!-- "as" guarda el valor ya narrowed -->
} @else if (isLoading()) {
  <app-spinner />
} @else {
  <a routerLink="/login">Inicia sesi\xF3n</a>
}`),i(),t(),i(),t(),n(1749,"h4"),e(1750,"7.2 @for con track obligatorio"),t(),n(1751,"p")(1752,"code"),e(1753,"track"),t(),e(1754," es "),n(1755,"strong"),e(1756,"obligatorio"),t(),e(1757," (en "),n(1758,"code"),e(1759,"*ngFor"),t(),e(1760," el trackBy era opcional y casi nadie lo usaba). Le dice a Angular la identidad de cada item para "),n(1761,"em"),e(1762,"reusar"),t(),e(1763," nodos DOM en vez de destruir y recrear al cambiar la lista. "),t(),n(1764,"pre"),a(),n(1765,"code"),a(),e(1766,`@for (product of products(); track product.id) {
  <app-product-card [product]="product" />

  <!-- Variables de contexto disponibles -->
  <span>{{ $index }} de {{ $count }}</span>
  @if ($first) { <span>\u2B50 primero</span> }
  <!-- tambi\xE9n: $last, $even, $odd -->
} @empty {
  <p>No hay productos que coincidan.</p>   <!-- sin ngIf extra -->
}`),i(),t(),i(),t(),n(1767,"h4"),e(1768,"7.3 @switch"),t(),n(1769,"pre"),a(),n(1770,"code"),e(1771,`@switch (status()) {
  @case ('loading') { <app-skeleton /> }
  @case ('error')   { <app-error [detail]="error()" /> }
  @case ('empty')   { <app-empty-state /> }
  @default          { <app-results [items]="items()" /> }
}`),t(),i(),t(),n(1772,"h4"),e(1773,"7.4 @defer \u2014 lazy loading dentro del template"),t(),n(1774,"p")(1775,"code"),e(1776,"@defer"),t(),e(1777," corta en un "),n(1778,"strong"),e(1779,"chunk separado"),t(),e(1780," los componentes usados dentro del bloque y los carga seg\xFAn un "),n(1781,"strong"),e(1782,"trigger"),t(),e(1783,". Es lazy loading a nivel de vista, sin tocar el router. Bloques asociados: "),n(1784,"code"),e(1785,"@placeholder"),t(),e(1786," (antes de cargar), "),n(1787,"code"),e(1788,"@loading"),t(),e(1789," (durante) y "),n(1790,"code"),e(1791,"@error"),t(),e(1792,". "),t(),n(1793,"pre"),a(),n(1794,"code"),e(1795,`@defer (on viewport) {
  <app-comments [postId]="postId()" />   <!-- chunk aparte -->
} @placeholder {
  <div class="comments-skeleton"></div>  <!-- requerido por "on viewport" -->
} @loading (minimum 300ms; after 100ms) {
  <app-spinner />                        <!-- evita flicker -->
} @error {
  <p>No se pudieron cargar los comentarios.</p>
}

<!-- Triggers disponibles -->
@defer (on idle) { ... }                <!-- default: requestIdleCallback -->
@defer (on interaction) { ... }         <!-- click/keydown en el placeholder -->
@defer (on hover) { ... }
@defer (on timer(3s)) { ... }
@defer (on immediate) { ... }
@defer (when panelOpen()) { ... }       <!-- condici\xF3n custom (one-shot) -->

<!-- prefetch: descarga antes, renderiza despu\xE9s -->
@defer (on interaction; prefetch on idle) {
  <app-heavy-chart />
}`),t(),i(),t(),n(1796,"h4"),e(1797,"\u2705 Mejores pr\xE1cticas"),t(),n(1798,"ul")(1799,"li")(1800,"code"),e(1801,"track item.id"),t(),e(1802," con IDs estables; "),n(1803,"code"),e(1804,"track $index"),t(),e(1805," solo para listas est\xE1ticas que nunca se reordenan."),t(),n(1806,"li"),e(1807,"Usa "),n(1808,"code"),e(1809,"@empty"),t(),e(1810," en vez de un "),n(1811,"code"),e(1812,"@if"),t(),e(1813," extra para listas vac\xEDas."),t(),n(1814,"li")(1815,"code"),e(1816,"@defer"),t(),e(1817,' para lo pesado y "below the fold": charts, editores, mapas, comentarios.'),t(),n(1818,"li"),e(1819,"Combina "),n(1820,"code"),e(1821,"@loading (minimum ...)"),t(),e(1822," para evitar parpadeos de spinner en conexiones r\xE1pidas."),t()(),n(1823,"h4"),e(1824,"\u26A0\uFE0F Errores comunes"),t(),n(1825,"ul")(1826,"li")(1827,"strong")(1828,"code"),e(1829,"track $index"),t(),e(1830," en listas que se reordenan/filtran:"),t(),e(1831," Angular reasigna datos a los DOM nodes equivocados (inputs descolocados, animaciones rotas). Usa un ID estable. "),t(),n(1832,"li")(1833,"strong")(1834,"code"),e(1835,"@defer (on viewport)"),t(),e(1836," sin "),n(1837,"code"),e(1838,"@placeholder"),t(),e(1839,":"),t(),e(1840," error de compilaci\xF3n \u2014 el trigger necesita un elemento que observar con IntersectionObserver. "),t(),n(1841,"li")(1842,"strong"),e(1843,"Esperar que "),n(1844,"code"),e(1845,"@defer"),t(),e(1846,' "des-renderice":'),t(),e(1847," una vez disparado, el contenido queda cargado; "),n(1848,"code"),e(1849,"when"),t(),e(1850," no es un "),n(1851,"code"),e(1852,"@if"),t(),e(1853," reactivo. "),t(),n(1854,"li")(1855,"strong"),e(1856,"Componentes del bloque "),n(1857,"code"),e(1858,"@defer"),t(),e(1859," referenciados tambi\xE9n fuera:"),t(),e(1860," si algo m\xE1s los importa est\xE1ticamente, no habr\xE1 chunk separado. "),t()(),n(1861,"h4"),e(1862,"\u{1F3A4} Preguntas de entrevista"),t(),n(1863,"ul")(1864,"li")(1865,"strong"),e(1866,"\xBFVentajas del nuevo control flow sobre *ngIf/*ngFor?"),t(),e(1867," Nativo del compilador (sin imports de CommonModule), type-narrowing real en "),n(1868,"code"),e(1869,"@if"),t(),e(1870,", "),n(1871,"code"),e(1872,"track"),t(),e(1873," obligatorio (mejor performance por defecto), "),n(1874,"code"),e(1875,"@empty"),t(),e(1876,", y "),n(1877,"code"),e(1878,"@defer"),t(),e(1879," que las directivas estructurales no pueden ofrecer. "),t(),n(1880,"li")(1881,"strong"),e(1882,"\xBFQu\xE9 hace exactamente "),n(1883,"code"),e(1884,"track"),t(),e(1885,"?"),t(),e(1886," Define la clave de identidad de cada item para el algoritmo de diffing: con ella Angular mueve/reusa nodos DOM existentes en vez de destruirlos y recrearlos. "),t(),n(1887,"li")(1888,"strong"),e(1889,"\xBFQu\xE9 genera "),n(1890,"code"),e(1891,"@defer"),t(),e(1892," en build?"),t(),e(1893," Un chunk JS independiente con los componentes/directivas/pipes usados solo dentro del bloque; se descarga cuando el trigger se cumple (o antes, con "),n(1894,"code"),e(1895,"prefetch"),t(),e(1896,"). "),t(),n(1897,"li")(1898,"strong"),e(1899,"\xBF"),n(1900,"code"),e(1901,"@defer"),t(),e(1902," vs lazy loading de rutas?"),t(),e(1903," Rutas: divide por navegaci\xF3n (p\xE1ginas). "),n(1904,"code"),e(1905,"@defer"),t(),e(1906,": divide dentro de una misma p\xE1gina por visibilidad/interacci\xF3n. Se complementan. "),t()(),n(1907,"div",3),e(1908," \u{1F4C2} "),n(1909,"code"),e(1910,"features/angular-lab/signals/signals-demo.html"),t(),e(1911," \u2014 @if/@for en acci\xF3n con signals "),t()(),n(1912,"div",10)(1913,"h3"),e(1914,"8. Hydration y SSR"),t(),n(1915,"p"),e(1916," Con "),n(1917,"strong"),e(1918,"SSR"),t(),e(1919," (Server-Side Rendering, paquete "),n(1920,"code"),e(1921,"@angular/ssr"),t(),e(1922,") el servidor renderiza el HTML de la ruta y el navegador muestra contenido "),n(1923,"em"),e(1924,"inmediatamente"),t(),e(1925,", mejorando FCP/LCP y SEO. Despu\xE9s, la app cliente arranca y "),n(1926,"strong"),e(1927,"hidrata"),t(),e(1928," ese HTML: en vez de destruirlo y re-renderizar (el comportamiento antiguo, que causaba parpadeo), Angular "),n(1929,"strong"),e(1930,"reutiliza el DOM existente"),t(),e(1931," y solo le adjunta listeners y estado. "),t(),n(1932,"h4"),e(1933,"8.1 Modos de renderizado"),t(),n(1934,"table",2)(1935,"thead")(1936,"tr")(1937,"th"),e(1938,"Modo"),t(),n(1939,"th"),e(1940,"D\xF3nde se genera el HTML"),t(),n(1941,"th"),e(1942,"Ideal para"),t()()(),n(1943,"tbody")(1944,"tr")(1945,"td")(1946,"strong"),e(1947,"CSR"),t(),e(1948," (default)"),t(),n(1949,"td"),e(1950,"Navegador, en runtime"),t(),n(1951,"td"),e(1952,"Dashboards, apps internas tras login"),t()(),n(1953,"tr")(1954,"td")(1955,"strong"),e(1956,"SSR"),t()(),n(1957,"td"),e(1958,"Servidor, por request"),t(),n(1959,"td"),e(1960,"Contenido din\xE1mico p\xFAblico (e-commerce, feeds)"),t()(),n(1961,"tr")(1962,"td")(1963,"strong"),e(1964,"SSG / Prerender"),t()(),n(1965,"td"),e(1966,"Servidor, en build time"),t(),n(1967,"td"),e(1968,"Landing pages, blogs, docs (contenido estable)"),t()()()(),n(1969,"h4"),e(1970,"8.2 Activar hydration + event replay"),t(),n(1971,"pre"),a(),n(1972,"code"),e(1973,`// app.config.ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(
      withEventReplay(),      // captura clicks ANTES de hidratar y los re-emite
      withHttpTransferCacheOptions({ includePostRequests: false }),
      // \u2191 las respuestas HTTP del servidor viajan embebidas en el HTML:
      //   el cliente NO repite las mismas requests al hidratar
    ),
  ],
};

// Configuraci\xF3n por ruta (Angular 19+): elegir modo por p\xE1gina
export const serverRoutes: ServerRoute[] = [
  { path: 'landing',   renderMode: RenderMode.Prerender },
  { path: 'products/**', renderMode: RenderMode.Server },
  { path: 'admin/**',  renderMode: RenderMode.Client },
];`),t(),i(),t(),n(1974,"h4"),e(1975,"8.3 Incremental hydration (Angular 19+)"),t(),n(1976,"p"),e(1977," Combina hydration con "),n(1978,"code"),e(1979,"@defer"),t(),e(1980,": el HTML llega completo del servidor, pero el "),n(1981,"strong"),e(1982,"JavaScript"),t(),e(1983," de cada bloque se descarga e hidrata solo cuando hace falta. Menos JS inicial, misma UI visible. "),t(),n(1984,"pre"),a(),n(1985,"code"),e(1986,`// requiere provideClientHydration(withIncrementalHydration())
@defer (hydrate on viewport) {
  <app-reviews />    <!-- HTML visible desde el server;
                          su JS se hidrata al entrar en pantalla -->
}
@defer (hydrate on interaction) { <app-configurator /> }
@defer (hydrate never) { <app-static-footer /> }  <!-- nunca se hidrata -->`),t(),i(),t(),n(1987,"h4"),e(1988,"8.4 C\xF3digo seguro para el servidor"),t(),n(1989,"pre"),a(),n(1990,"code"),e(1991,`// \u274C En el servidor no existen window/document/localStorage
ngOnInit() { this.width = window.innerWidth; } // ReferenceError en SSR

// \u2705 Opci\xF3n 1: afterNextRender \u2014 solo corre en el navegador, post-render
constructor() {
  afterNextRender(() => {
    this.width = window.innerWidth;
    this.chart = new Chart(this.canvas.nativeElement, ...);
  });
}

// \u2705 Opci\xF3n 2: comprobar la plataforma
private platformId = inject(PLATFORM_ID);
ngOnInit() {
  if (isPlatformBrowser(this.platformId)) {
    this.restoreFromLocalStorage();
  }
}`),t(),i(),t(),n(1992,"h4"),e(1993,"\u2705 Mejores pr\xE1cticas"),t(),n(1994,"ul")(1995,"li"),e(1996,"Todo acceso a APIs del navegador \u2192 "),n(1997,"code"),e(1998,"afterNextRender()"),t(),e(1999," o guardas de plataforma."),t(),n(2e3,"li"),e(2001,"Activa "),n(2002,"code"),e(2003,"withEventReplay()"),t(),e(2004,": sin \xE9l, los clicks previos a la hidrataci\xF3n se pierden."),t(),n(2005,"li"),e(2006,"Aprovecha el TransferCache de HTTP para no duplicar requests servidor/cliente."),t(),n(2007,"li"),e(2008,"HTML v\xE1lido estricto: la estructura que renderiza el servidor debe coincidir con la del cliente."),t(),n(2009,"li"),e(2010,"Como escape hatch puntual: atributo "),n(2011,"code"),e(2012,"ngSkipHydration"),t(),e(2013," en el host del componente problem\xE1tico."),t()(),n(2014,"h4"),e(2015,"\u26A0\uFE0F Errores comunes"),t(),n(2016,"ul")(2017,"li")(2018,"strong"),e(2019,"Manipulaci\xF3n directa del DOM"),t(),e(2020," ("),n(2021,"code"),e(2022,"document.querySelector"),t(),e(2023,", innerHTML manual, o librer\xEDas jQuery-style): el DOM del cliente deja de coincidir con el del servidor \u2192 "),n(2024,"em"),e(2025,"hydration mismatch"),t(),e(2026," (errores NG0500). "),t(),n(2027,"li")(2028,"strong"),e(2029,"HTML inv\xE1lido en templates:"),t(),e(2030," un "),n(2031,"code"),e(2032,"<div>"),t(),e(2033," dentro de "),n(2034,"code"),e(2035,"<p>"),t(),e(2036,", o "),n(2037,"code"),e(2038,"<tr>"),t(),e(2039," sin "),n(2040,"code"),e(2041,"<tbody>"),t(),e(2042,' \u2014 el navegador "recoloca" nodos y la estructura ya no coincide al hidratar. '),t(),n(2043,"li")(2044,"strong"),e(2045,"Renderizar contenido no determinista"),t(),e(2046," (fechas "),n(2047,"code"),e(2048,"Date.now()"),t(),e(2049,", aleatorios) distinto en servidor y cliente: mismatch garantizado. "),t(),n(2050,"li")(2051,"strong"),e(2052,"Usar "),n(2053,"code"),e(2054,"localStorage"),t(),e(2055,"/"),n(2056,"code"),e(2057,"window"),t(),e(2058," en constructores o ngOnInit:"),t(),e(2059," en SSR ese c\xF3digo corre en Node y explota. "),t()(),n(2060,"h4"),e(2061,"\u{1F3A4} Preguntas de entrevista"),t(),n(2062,"ul")(2063,"li")(2064,"strong"),e(2065,"\xBFQu\xE9 problema resuelve la hydration no destructiva?"),t(),e(2066," Antes Angular descartaba el HTML del servidor y re-renderizaba todo (flicker + trabajo duplicado); ahora reutiliza el DOM existente y solo adjunta listeners y estado. "),t(),n(2067,"li")(2068,"strong"),e(2069,"\xBFQu\xE9 es incremental hydration?"),t(),e(2070," Hidratar bloques "),n(2071,"code"),e(2072,"@defer"),t(),e(2073," bajo demanda ("),n(2074,"code"),e(2075,"hydrate on viewport/interaction"),t(),e(2076,"): el HTML es visible desde el inicio pero su JS se carga solo cuando se necesita. "),t(),n(2077,"li")(2078,"strong"),e(2079,'\xBFC\xF3mo evitas "window is not defined"?'),t(),e(2080," Moviendo el c\xF3digo de navegador a "),n(2081,"code"),e(2082,"afterNextRender()"),t(),e(2083,", usando "),n(2084,"code"),e(2085,"isPlatformBrowser(PLATFORM_ID)"),t(),e(2086,", o inyectando abstracciones ("),n(2087,"code"),e(2088,"DOCUMENT"),t(),e(2089,", tokens custom para "),n(2090,"code"),e(2091,"window"),t(),e(2092,"). "),t(),n(2093,"li")(2094,"strong"),e(2095,"\xBFSSR siempre es mejor?"),t(),e(2096," No: a\xF1ade infraestructura (servidor Node), latencia por request y complejidad. Para apps tras login sin SEO, CSR (o prerender del shell) suele ser m\xE1s simple y suficiente. "),t()(),n(2097,"div",3),e(2098," \u{1F4C2} "),n(2099,"code"),e(2100,"app.config.ts"),t(),e(2101," \u2014 punto de entrada donde se activar\xEDa provideClientHydration() "),t()()())},dependencies:[s],styles:["[_nghost-%COMP%]{display:block;padding:1rem 0}.cards[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.card[_ngcontent-%COMP%]{background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:1.2rem}.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 .6rem;font-size:1.1rem}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--text-muted);line-height:1.6;margin:0 0 .8rem}pre[_ngcontent-%COMP%]{background:var(--bg-code, #161b22);border:1px solid var(--border);border-radius:6px;padding:.8rem;overflow-x:auto;font-size:.85rem;line-height:1.5}code[_ngcontent-%COMP%]{color:var(--text)}"]})};export{m as AngularLearnComponent};
