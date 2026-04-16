import{a as d}from"./chunk-EVHMM366.js";import"./chunk-WS4L6SOG.js";import{Db as n,Eb as t,Fb as o,Zb as e,fb as s,sa as i,ta as a}from"./chunk-G73V3KC4.js";import"./chunk-2NFLSA4Y.js";var m=class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=s({type:l,selectors:[["app-angular-learn"]],decls:474,vars:0,consts:[["appAutoGlossary","",1,"cards"],["id","1-change-detection",1,"card"],[1,"code-ref"],["id","2-signals",1,"card"],[1,"compare-table"],["id","3-reactive-forms",1,"card"],["id","4-lazy-loading",1,"card"],["id","5-interceptors-amp-guards",1,"card"]],template:function(r,u){r&1&&(n(0,"div",0)(1,"div",1)(2,"h3"),e(3,"1. Change Detection"),t(),n(4,"h4"),e(5,"\xBFC\xF3mo funciona?"),t(),n(6,"p"),e(7," Angular usa "),n(8,"strong"),e(9,"Zone.js"),t(),e(10," para interceptar "),n(11,"em"),e(12,"todos"),t(),e(13," los eventos as\xEDncronos (clicks, setTimeout, HTTP requests, Promises) y dispara un ciclo de Change Detection (CD) desde la ra\xEDz del \xE1rbol de componentes hacia abajo. En cada ciclo, Angular compara los valores actuales del template con los anteriores y actualiza el DOM si hay diferencias. "),t(),n(14,"h4"),e(15,"Default Strategy"),t(),n(16,"p"),e(17," Revisa "),n(18,"strong"),e(19,"TODOS"),t(),e(20," los componentes en cada ciclo de CD, sin importar si cambiaron o no. Simple pero costoso en apps grandes \u2014 un solo click puede causar que cientos de componentes se revisen innecesariamente. "),t(),n(21,"pre"),a(),n(22,"code"),e(23,`// Default \u2014 se revisa en CADA ciclo de CD, incluso si nada cambi\xF3
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
}`),t(),i(),t(),n(24,"h4"),e(25,"OnPush Strategy"),t(),n(26,"p"),e(27," Solo revisa el componente cuando ocurre una de estas condiciones: "),t(),n(28,"ul")(29,"li")(30,"strong"),e(31,"(a)"),t(),e(32," Un "),n(33,"code"),e(34,"@Input()"),t(),e(35," cambia por "),n(36,"strong"),e(37,"referencia"),t(),e(38," (no mutaci\xF3n)"),t(),n(39,"li")(40,"strong"),e(41,"(b)"),t(),e(42," Un evento DOM se dispara en el componente o en un hijo"),t(),n(43,"li")(44,"strong"),e(45,"(c)"),t(),e(46," Un "),n(47,"code"),e(48,"async"),t(),e(49," pipe emite un nuevo valor"),t(),n(50,"li")(51,"strong"),e(52,"(d)"),t(),e(53," Un "),n(54,"strong"),e(55,"Signal"),t(),e(56," le\xEDdo en el template cambia"),t(),n(57,"li")(58,"strong"),e(59,"(e)"),t(),e(60," Se llama "),n(61,"code"),e(62,"markForCheck()"),t(),e(63," manualmente"),t()(),n(64,"pre"),a(),n(65,"code"),e(66,`@Component({
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
}`),t(),i(),t(),n(67,"h4"),e(68,"ChangeDetectorRef"),t(),n(69,"p"),e(70," Permite controlar manualmente el ciclo de CD: "),t(),n(71,"pre"),a(),n(72,"code"),e(73,`export class ManualCDComponent {
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
}`),t(),i(),t(),n(74,"h4"),e(75,"Zoneless Angular (experimental)"),t(),n(76,"p"),e(77," Angular est\xE1 migrando hacia un modelo sin Zone.js. Con Zoneless, solo los "),n(78,"strong"),e(79,"Signals"),t(),e(80," y llamadas expl\xEDcitas a "),n(81,"code"),e(82,"markForCheck()"),t(),e(83," disparan Change Detection. Esto elimina la sobrecarga de Zone.js y da control total sobre cu\xE1ndo se actualiza la UI. "),t(),n(84,"pre"),a(),n(85,"code"),e(86,`// app.config.ts \u2014 activar Zoneless
export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    // Ya NO necesitas Zone.js \u2014 qu\xEDtalo de polyfills
  ]
};

// Con Zoneless, setTimeout NO dispara CD:
setTimeout(() => this.value = 'nuevo', 1000); // \u274C NO actualiza la UI

// Solo signals y markForCheck funcionan:
this.mySignal.set('nuevo');    // \u2705 Dispara CD
this.cdr.markForCheck();       // \u2705 Dispara CD`),t(),i(),t(),n(87,"h4"),e(88,"\u{1F9E0} Diagrama mental"),t(),n(89,"p")(90,"strong"),e(91,"Default"),t(),e(92,' = "rev\xEDsalo TODO siempre" \u2014 f\xE1cil pero lento.'),o(93,"br"),n(94,"strong"),e(95,"OnPush"),t(),e(96,' = "no me molestes a menos que algo cambie realmente" \u2014 r\xE1pido pero requiere inmutabilidad.'),o(97,"br"),n(98,"strong"),e(99,"Zoneless"),t(),e(100,' = "solo los Signals mandan" \u2014 el futuro de Angular. '),t(),n(101,"h4"),e(102,"\u26A0\uFE0F Errores comunes"),t(),n(103,"ul")(104,"li")(105,"strong"),e(106,"Mutar objeto con OnPush:"),t(),n(107,"code"),e(108,"this.user.name = 'Nuevo'"),t(),e(109," NO dispara CD porque la referencia no cambi\xF3. Soluci\xF3n: "),n(110,"code"),e(111,"this.user = { ...this.user, name: 'Nuevo' }"),t()(),n(112,"li")(113,"strong"),e(114,"ExpressionChangedAfterItHasBeenCheckedError:"),t(),e(115," Ocurre cuando un valor del template cambia durante el mismo ciclo de CD (por ejemplo, en "),n(116,"code"),e(117,"ngOnInit"),t(),e(118," o "),n(119,"code"),e(120,"ngAfterViewInit"),t(),e(121,"). Soluci\xF3n: usar "),n(122,"code"),e(123,"setTimeout"),t(),e(124," o mover la l\xF3gica al constructor/signal. "),t()(),n(125,"div",2),e(126," \u{1F4C2} "),n(127,"code"),e(128,"features/angular-lab/change-detection/cd-demo.ts"),t(),e(129," \u2014 Default vs OnPush lado a lado "),t()(),n(130,"div",3)(131,"h3"),e(132,"2. Signals"),t(),n(133,"h4"),e(134,"2.1 \xBFQu\xE9 son los Signals?"),t(),n(135,"p"),e(136," Los Signals son una "),n(137,"strong"),e(138,"primitiva reactiva s\xEDncrona"),t(),e(139," introducida en Angular 16 que permite rastrear estado de forma granular. A diferencia de RxJS (que es as\xEDncrono y basado en push/subscribe), los Signals son "),n(140,"strong"),e(141,"s\xEDncronos"),t(),e(142," y basados en "),n(143,"strong"),e(144,"pull"),t(),e(145,": lees el valor cuando lo necesitas llam\xE1ndolo como funci\xF3n. "),t(),n(146,"p"),e(147," Angular los usa internamente para habilitar "),n(148,"strong"),e(149,"Change Detection granular"),t(),e(150," y eventualmente eliminar la dependencia en Zone.js (Zoneless Angular). Cuando un Signal cambia, Angular sabe "),n(151,"em"),e(152,"exactamente"),t(),e(153," qu\xE9 componentes necesitan actualizarse. "),t(),n(154,"h4"),e(155,"2.2 signal() \u2014 Estado mutable"),t(),n(156,"p")(157,"code"),e(158,"signal()"),t(),e(159," crea un valor reactivo mutable. Se lee llam\xE1ndolo como funci\xF3n, se escribe con "),n(160,"code"),e(161,".set()"),t(),e(162," o "),n(163,"code"),e(164,".update()"),t(),e(165,". "),t(),n(166,"pre"),a(),n(167,"code"),e(168,`import { signal } from '@angular/core';

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
// Si set() produce un valor "equal", NO se notifica`),t(),i(),t(),n(169,"h4"),e(170,"2.3 computed() \u2014 Derivaciones"),t(),n(171,"p")(172,"code"),e(173,"computed()"),t(),e(174," crea un Signal de "),n(175,"strong"),e(176,"solo lectura"),t(),e(177," derivado de otros Signals. Se recalcula "),n(178,"strong"),e(179,"solo cuando sus dependencias cambian"),t(),e(180," (memoizado autom\xE1ticamente). Es "),n(181,"strong"),e(182,"lazy"),t(),e(183,": no se calcula hasta que alguien lo lee. Y es "),n(184,"strong"),e(185,"glitch-free"),t(),e(186,": siempre muestra valores consistentes, nunca intermedios. "),t(),n(187,"pre"),a(),n(188,"code"),e(189,`import { signal, computed } from '@angular/core';

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
);`),t(),i(),t(),n(190,"h4"),e(191,"2.4 effect() \u2014 Side effects"),t(),n(192,"p")(193,"code"),e(194,"effect()"),t(),e(195," ejecuta c\xF3digo cuando los Signals que lee cambian. "),n(196,"strong"),e(197,"NO"),t(),e(198," se debe usar para cambiar otros Signals (anti-pattern). Casos de uso: logging, localStorage, analytics, manipulaci\xF3n manual del DOM. "),t(),n(199,"p")(200,"strong"),e(201,"Injection context:"),t(),e(202," se debe crear en el constructor, como campo de clase, o usando "),n(203,"code"),e(204,"runInInjectionContext()"),t(),e(205,". "),t(),n(206,"pre"),a(),n(207,"code"),e(208,`import { signal, effect, inject, Injector, runInInjectionContext } from '@angular/core';

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
}`),t(),i(),t(),n(209,"h4"),e(210,"2.5 linkedSignal() \u2014 Angular 19+"),t(),n(211,"p")(212,"code"),e(213,"linkedSignal()"),t(),e(214," crea un Signal que se "),n(215,"strong"),e(216,"resetea autom\xE1ticamente"),t(),e(217," cuando su fuente cambia, pero tambi\xE9n se puede escribir manualmente. Ideal para formularios dependientes y selecciones que dependen de un contexto. "),t(),n(218,"pre"),a(),n(219,"code"),e(220,`import { signal, linkedSignal } from '@angular/core';

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
const selectedCity = linkedSignal(() => cities()[0]);`),t(),i(),t(),n(221,"h4"),e(222,"2.6 resource() \u2014 Angular 19+"),t(),n(223,"p")(224,"code"),e(225,"resource()"),t(),e(226," combina datos as\xEDncronos con Signals, proporcionando "),n(227,"code"),e(228,".value()"),t(),e(229,", "),n(230,"code"),e(231,".status()"),t(),e(232," y "),n(233,"code"),e(234,".error()"),t(),e(235," autom\xE1ticamente. Status puede ser: "),n(236,"strong"),e(237,"idle"),t(),e(238,", "),n(239,"strong"),e(240,"loading"),t(),e(241,", "),n(242,"strong"),e(243,"resolved"),t(),e(244,", "),n(245,"strong"),e(246,"error"),t(),e(247,". "),t(),n(248,"pre"),a(),n(249,"code"),e(250,`import { resource, signal } from '@angular/core';

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
selectedId.set('xyz-456'); // productDetail se recarga`),t(),i(),t(),n(251,"h4"),e(252,"2.7 Interop con RxJS"),t(),n(253,"p"),e(254," Angular provee funciones para convertir entre Signals y Observables. "),n(255,"code"),e(256,"toSignal()"),t(),e(257," se auto-desuscribe al destruirse el componente. "),t(),n(258,"pre"),a(),n(259,"code"),e(260,`import { toSignal, toObservable } from '@angular/core/rxjs-interop';
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
// No necesitas takeUntilDestroyed() ni unsubscribe manual`),t(),i(),t(),n(261,"p")(262,"strong"),e(263,"\xBFCu\xE1ndo usar cada uno?"),t(),e(264," Signals para "),n(265,"em"),e(266,"estado de UI"),t(),e(267," (contadores, formularios, selecciones). RxJS para "),n(268,"em"),e(269,"streams de eventos"),t(),e(270," (WebSocket, event buses, operaciones complejas con timing como debounce, retry, race). "),t(),n(271,"h4"),e(272,"2.8 Signals vs BehaviorSubject"),t(),n(273,"table",4)(274,"thead")(275,"tr")(276,"th"),e(277,"Caracter\xEDstica"),t(),n(278,"th"),e(279,"Signal"),t(),n(280,"th"),e(281,"BehaviorSubject"),t()()(),n(282,"tbody")(283,"tr")(284,"td"),e(285,"S\xEDncrono"),t(),n(286,"td"),e(287,"\u2705 S\xED"),t(),n(288,"td"),e(289,"\u274C Async (schedulers)"),t()(),n(290,"tr")(291,"td"),e(292,"Lectura"),t(),n(293,"td")(294,"code"),e(295,"signal()"),t()(),n(296,"td")(297,"code"),e(298,".getValue()"),t(),e(299," o "),n(300,"code"),e(301,".subscribe()"),t()()(),n(302,"tr")(303,"td"),e(304,"Change Detection"),t(),n(305,"td"),e(306,"Autom\xE1tico (granular)"),t(),n(307,"td"),e(308,"Necesita async pipe o markForCheck"),t()(),n(309,"tr")(310,"td"),e(311,"Composici\xF3n"),t(),n(312,"td")(313,"code"),e(314,"computed()"),t()(),n(315,"td")(316,"code"),e(317,"combineLatest"),t(),e(318,", "),n(319,"code"),e(320,"map"),t()()(),n(321,"tr")(322,"td"),e(323,"Memory leaks"),t(),n(324,"td"),e(325,"No"),t(),n(326,"td"),e(327,"S\xED (si no unsubscribe)"),t()(),n(328,"tr")(329,"td"),e(330,"Side effects"),t(),n(331,"td")(332,"code"),e(333,"effect()"),t()(),n(334,"td")(335,"code"),e(336,"tap()"),t()()()()(),n(337,"h4"),e(338,"2.9 Patrones avanzados"),t(),n(339,"p")(340,"strong"),e(341,"Signal Store (NgRx SignalStore):"),t(),e(342," Alternativa m\xE1s simple al NgRx Store cl\xE1sico. Usa Signals internamente y reduce el boilerplate de Actions/Reducers/Effects. "),t(),n(343,"p")(344,"strong"),e(345,"Component state con Signals:"),t(),e(346," Reemplaza "),n(347,"code"),e(348,"BehaviorSubject"),t(),e(349," en servicios compartidos. Los componentes leen directamente "),n(350,"code"),e(351,"service.items()"),t(),e(352," sin "),n(353,"code"),e(354,"async"),t(),e(355," pipe. "),t(),n(356,"p")(357,"strong"),e(358,"Zoneless Angular:"),t(),e(359," Los Signals habilitan Change Detection sin Zone.js. Angular detecta exactamente qu\xE9 cambi\xF3 y actualiza solo esos componentes. "),t(),n(360,"pre"),a(),n(361,"code"),e(362,`// Servicio con Signals en vez de BehaviorSubject
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
}`),t(),i(),t(),n(363,"div",2),e(364," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(365,"ul")(366,"li")(367,"code"),e(368,"features/angular-lab/signals/signals-demo.ts"),t(),e(369," \u2014 signal(), computed(), effect(), linkedSignal()"),t(),n(370,"li")(371,"code"),e(372,"core/services/progress.service.ts"),t(),e(373," \u2014 Servicio real con Signals para tracking de progreso"),t()()()(),n(374,"div",5)(375,"h3"),e(376,"3. Reactive Forms"),t(),n(377,"p"),e(378," Reactive Forms ofrecen un modelo imperativo para construir formularios complejos. "),n(379,"code"),e(380,"FormGroup"),t(),e(381," agrupa controles, "),n(382,"code"),e(383,"FormControl"),t(),e(384," maneja valores individuales, y "),n(385,"code"),e(386,"FormArray"),t(),e(387," permite listas din\xE1micas. Los "),n(388,"code"),e(389,"Validators"),t(),e(390," built-in cubren casos comunes (required, minLength, pattern), y puedes crear validadores custom como funciones puras. El estado del formulario (valid, dirty, touched) se actualiza autom\xE1ticamente. "),t(),n(391,"pre")(392,"code"),e(393,`import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

// FormGroup con validadores
const form = new FormGroup({
  name:  new FormControl('', [Validators.required, Validators.minLength(3)]),
  email: new FormControl('', [Validators.required, Validators.email]),
  skills: new FormArray([new FormControl('Angular')])
});

// Agregar din\xE1micamente al FormArray
(form.get('skills') as FormArray).push(new FormControl('RxJS'));

// Validador custom
function forbiddenName(name: string): ValidatorFn {
  return (control: AbstractControl) =>
    control.value === name ? { forbiddenName: { value: control.value } } : null;
}

// Acceder a errores
form.get('email')?.errors;    // { required: true } | { email: true } | null
form.get('email')?.touched;   // boolean`),t()(),n(394,"div",2),e(395," \u{1F4C2} "),n(396,"code"),e(397,"features/angular-lab/forms/reactive-form-demo.ts"),t(),e(398," \u2014 FormGroup, FormArray, validadores custom "),t()(),n(399,"div",6)(400,"h3"),e(401,"4. Lazy Loading"),t(),n(402,"p"),e(403," Lazy loading permite cargar m\xF3dulos o componentes standalone bajo demanda, reduciendo el bundle inicial. Con "),n(404,"code"),e(405,"loadComponent"),t(),e(406," se carga un componente standalone directamente en una ruta. Con "),n(407,"code"),e(408,"loadChildren"),t(),e(409," se carga un archivo de rutas completo. Las estrategias de preloading ("),n(410,"code"),e(411,"PreloadAllModules"),t(),e(412,", "),n(413,"code"),e(414,"NoPreloading"),t(),e(415,", o custom) controlan cu\xE1ndo se descargan los chunks en segundo plano. "),t(),n(416,"pre")(417,"code"),e(418,`import { Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';

// Lazy load de un componente standalone
export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard').then(m => m.DashboardComponent)
  },
  // Lazy load de rutas hijas
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.routes').then(m => m.ADMIN_ROUTES)
  },
];

// Preloading strategy en provideRouter
provideRouter(routes, withPreloading(PreloadAllModules));`),t()(),n(419,"div",2),e(420," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(421,"ul")(422,"li")(423,"code"),e(424,"app.routes.ts"),t(),e(425," \u2014 loadComponent() y loadChildren() en todas las rutas"),t(),n(426,"li")(427,"code"),e(428,"features/angular-lab/lazy-feature/lazy-demo.routes.ts"),t(),e(429," \u2014 Feature con rutas hijas lazy"),t()()()(),n(430,"div",7)(431,"h3"),e(432,"5. Interceptors & Guards"),t(),n(433,"p"),e(434," Desde Angular 15+, los interceptors y guards se escriben como funciones en vez de clases. Los interceptors funcionales reciben "),n(435,"code"),e(436,"req"),t(),e(437," y "),n(438,"code"),e(439,"next"),t(),e(440,", permitiendo modificar requests, manejar errores, y encadenar l\xF3gica. Los guards funcionales ("),n(441,"code"),e(442,"CanActivateFn"),t(),e(443,", "),n(444,"code"),e(445,"CanMatchFn"),t(),e(446,") simplifican la protecci\xF3n de rutas usando "),n(447,"code"),e(448,"inject()"),t(),e(449," para acceder a servicios. Se registran con "),n(450,"code"),e(451,"withInterceptors()"),t(),e(452," en "),n(453,"code"),e(454,"provideHttpClient()"),t(),e(455,". "),t(),n(456,"pre")(457,"code"),e(458,`import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

// Interceptor funcional \u2014 agrega token y maneja 401
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthService).getToken();
  const cloned = req.clone({
    setHeaders: { Authorization: \\\`Bearer \${token}\\\` }
  });
  return next(cloned).pipe(
    catchError(err => {
      if (err.status === 401) inject(Router).navigate(['/login']);
      return throwError(() => err);
    })
  );
};

// Guard funcional
export const authGuard: CanActivateFn = () =>
  inject(AuthService).isLoggedIn() || inject(Router).createUrlTree(['/login']);

// Registro
provideHttpClient(withInterceptors([authInterceptor]));`),t()(),n(459,"div",2),e(460," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(461,"ul")(462,"li")(463,"code"),e(464,"core/interceptors/auth.interceptor.ts"),t(),e(465," \u2014 HttpInterceptorFn funcional"),t(),n(466,"li")(467,"code"),e(468,"core/guards/auth.guard.ts"),t(),e(469," \u2014 CanActivateFn funcional"),t(),n(470,"li")(471,"code"),e(472,"app.config.ts"),t(),e(473," \u2014 provideHttpClient(withInterceptors([...]))"),t()()()()())},dependencies:[d],styles:["[_nghost-%COMP%]{display:block;padding:1rem 0}.cards[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.card[_ngcontent-%COMP%]{background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:1.2rem}.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 .6rem;font-size:1.1rem}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--text-muted);line-height:1.6;margin:0 0 .8rem}pre[_ngcontent-%COMP%]{background:var(--bg-code, #161b22);border:1px solid var(--border);border-radius:6px;padding:.8rem;overflow-x:auto;font-size:.85rem;line-height:1.5}code[_ngcontent-%COMP%]{color:var(--text)}"]})};export{m as AngularLearnComponent};
