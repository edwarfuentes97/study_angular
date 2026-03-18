import{a as d}from"./chunk-B3USI2EE.js";import"./chunk-L5YHS2GO.js";import{Cb as n,Db as t,Xb as e,eb as l,sa as i,ta as r}from"./chunk-UB4H3XYQ.js";import"./chunk-2NFLSA4Y.js";var s=class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=l({type:o,selectors:[["ng-component"]],decls:1353,vars:0,consts:[["appAutoGlossary","",1,"learn-page"],["id","a-directivas-los-3-tipos",1,"card"],[1,"language-typescript"],["id","b-pipes-pure-vs-impure",1,"card"],[1,"comparison-table"],["id","c-ciclo-de-vida-de-componentes-lifecycle-hooks",1,"card"],[1,"lifecycle-order"],[1,"arrow"],["id","d-content-projection-ng-content",1,"card"],["id","e-viewencapsulation-shadow-dom",1,"card"],["id","f-dependency-injection-di",1,"card"],[1,"code-ref"],["id","core-shared-feature-modules",1,"card"],["id","g-template-reference-variables-amp-viewchild",1,"card"],["id","h-httpclient-amp-llamadas-api",1,"card"],["id","i-routing-avanzado",1,"card"],["id","j-modules-vs-standalone",1,"card"],["id","k-decoradores-importantes",1,"card"]],template:function(a,c){a&1&&(n(0,"div",0)(1,"h2"),e(2,"\u{1F7E2} Angular Fundamentals \u2014 Conceptos Esenciales"),t(),n(3,"p"),e(4,"Todo lo que un Senior Angular developer debe dominar. Estos temas aparecen constantemente en entrevistas t\xE9cnicas."),t(),n(5,"div",1)(6,"h3"),e(7,"A. Directivas \u2014 Los 3 Tipos"),t(),n(8,"p"),e(9,"Las "),n(10,"strong"),e(11,"Directivas"),t(),e(12," son clases que modifican elementos del DOM. Todo en Angular es una directiva bajo el cap\xF3 \u2014 incluso los componentes."),t(),n(13,"h4"),e(14,"1. Componentes (Directivas con Template)"),t(),n(15,"p"),e(16,"El tipo m\xE1s com\xFAn. "),n(17,"code"),e(18,"@Component"),t(),e(19," hereda de "),n(20,"code"),e(21,"@Directive"),t(),e(22," y a\xF1ade un template HTML."),t(),n(23,"pre"),r(),n(24,"code",2),e(25,`@Component({
  selector: 'app-hero',
  template: '<h1>{{ name }}</h1>'
})
export class HeroComponent {
  name = 'Angular';
}`),t(),i(),t(),n(26,"h4"),e(27,"2. Directivas Estructurales \u2014 Modifican el DOM"),t(),n(28,"p"),e(29,"A\xF1aden, eliminan o manipulan elementos del DOM. Se reconocen por el prefijo "),n(30,"code"),e(31,"*"),t(),e(32," (sintaxis de microsintaxis) o el nuevo control flow."),t(),n(33,"ul")(34,"li")(35,"strong"),e(36,"Cl\xE1sicas:"),t(),n(37,"code"),e(38,"*ngIf"),t(),e(39,", "),n(40,"code"),e(41,"*ngFor"),t(),e(42,", "),n(43,"code"),e(44,"*ngSwitch"),t()(),n(45,"li")(46,"strong"),e(47,"Nuevo Control Flow (Angular 17+):"),t(),n(48,"code"),r(),e(49,"@if"),i(),t(),e(50,", "),n(51,"code"),r(),e(52,"@for"),i(),t(),e(53,", "),n(54,"code"),r(),e(55,"@switch"),i(),t(),e(56," \u2014 built-in, mejor rendimiento, no requiere import"),t()(),n(57,"p")(58,"strong"),e(59,"\xBFC\xF3mo funciona internamente?"),t(),e(60," Angular convierte "),n(61,"code"),e(62,"*ngIf"),t(),e(63," en un "),n(64,"code"),e(65,"<ng-template>"),t(),e(66," + usa "),n(67,"code"),e(68,"ViewContainerRef"),t(),e(69," para insertar/remover la vista:"),t(),n(70,"pre"),r(),n(71,"code",2),e(72,`// Esto:
<div *ngIf="show">Hola</div>

// Angular lo convierte internamente a:
<ng-template [ngIf]="show">
  <div>Hola</div>
</ng-template>`),t(),i(),t(),n(73,"h4"),e(74,"3. Directivas de Atributo \u2014 Modifican Apariencia/Comportamiento"),t(),n(75,"p"),e(76,"No cambian la estructura del DOM, sino la apariencia o el comportamiento de un elemento existente."),t(),n(77,"ul")(78,"li")(79,"code"),e(80,"ngClass"),t(),e(81," \u2014 a\xF1ade/remueve clases CSS din\xE1micamente"),t(),n(82,"li")(83,"code"),e(84,"ngStyle"),t(),e(85," \u2014 aplica estilos inline din\xE1micamente"),t(),n(86,"li"),e(87,"Custom attribute directives (ej: "),n(88,"code"),e(89,"appHighlight"),t(),e(90,")"),t()(),n(91,"h4"),e(92,"Directiva Custom \u2014 Attribute Directive"),t(),n(93,"pre"),r(),n(94,"code",2),e(95,`@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = 'yellow';
  private el = inject(ElementRef);

  @HostListener('mouseenter') onEnter() {
    this.el.nativeElement.style.backgroundColor = this.appHighlight;
  }
  @HostListener('mouseleave') onLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }
}

// Uso: <p [appHighlight]="'cyan'">Hover me</p>`),t(),i(),t(),n(96,"h4"),e(97,"Directiva Custom \u2014 Structural Directive"),t(),n(98,"pre"),r(),n(99,"code",2),e(100,`@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  private templateRef = inject(TemplateRef<any>);
  private vcRef = inject(ViewContainerRef);
  private hasView = false;

  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.vcRef.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.vcRef.clear();
      this.hasView = false;
    }
  }
}

// Uso: <div *appUnless="isLoading">Contenido</div>`),t(),i(),t()(),n(101,"div",3)(102,"h3"),e(103,"B. Pipes \u2014 Pure vs Impure"),t(),n(104,"p"),e(105,"Los "),n(106,"strong"),e(107,"Pipes"),t(),e(108," transforman datos en el template. Sintaxis: "),n(109,"code"),r(),e(110,"{{ value | pipeName:arg1:arg2 }}"),i(),t()(),n(111,"h4"),e(112,"Built-in Pipes"),t(),n(113,"table",4)(114,"thead")(115,"tr")(116,"th"),e(117,"Pipe"),t(),n(118,"th"),e(119,"Uso"),t(),n(120,"th"),e(121,"Ejemplo"),t()()(),n(122,"tbody")(123,"tr")(124,"td")(125,"code"),e(126,"date"),t()(),n(127,"td"),e(128,"Formatear fechas"),t(),n(129,"td")(130,"code"),r(),e(131,"{{ today | date:'dd/MM/yyyy' }}"),i(),t()()(),n(132,"tr")(133,"td")(134,"code"),e(135,"currency"),t()(),n(136,"td"),e(137,"Formato moneda"),t(),n(138,"td")(139,"code"),r(),e(140,"{{ price | currency:'USD' }}"),i(),t()()(),n(141,"tr")(142,"td")(143,"code"),e(144,"percent"),t()(),n(145,"td"),e(146,"Formato porcentaje"),t(),n(147,"td")(148,"code"),r(),e(149,"{{ 0.85 | percent }}"),i(),t(),e(150," \u2192 85%"),t()(),n(151,"tr")(152,"td")(153,"code"),e(154,"decimal"),t()(),n(155,"td"),e(156,"Formato num\xE9rico"),t(),n(157,"td")(158,"code"),r(),e(159,"{{ 3.14159 | number:'1.2-2' }}"),i(),t(),e(160," \u2192 3.14"),t()(),n(161,"tr")(162,"td")(163,"code"),e(164,"uppercase"),t()(),n(165,"td"),e(166,"May\xFAsculas"),t(),n(167,"td")(168,"code"),r(),e(169,"{{ 'hola' | uppercase }}"),i(),t(),e(170," \u2192 HOLA"),t()(),n(171,"tr")(172,"td")(173,"code"),e(174,"lowercase"),t()(),n(175,"td"),e(176,"Min\xFAsculas"),t(),n(177,"td")(178,"code"),r(),e(179,"{{ 'HOLA' | lowercase }}"),i(),t(),e(180," \u2192 hola"),t()(),n(181,"tr")(182,"td")(183,"code"),e(184,"titlecase"),t()(),n(185,"td"),e(186,"Capitalizar"),t(),n(187,"td")(188,"code"),r(),e(189,"{{ 'hola mundo' | titlecase }}"),i(),t(),e(190," \u2192 Hola Mundo"),t()(),n(191,"tr")(192,"td")(193,"code"),e(194,"json"),t()(),n(195,"td"),e(196,"Debug objetos"),t(),n(197,"td")(198,"code"),r(),e(199,"{{ obj | json }}"),i(),t()()(),n(200,"tr")(201,"td")(202,"code"),e(203,"async"),t()(),n(204,"td"),e(205,"Suscribir Observable/Promise"),t(),n(206,"td")(207,"code"),r(),e(208,"{{ data$ | async }}"),i(),t()()(),n(209,"tr")(210,"td")(211,"code"),e(212,"slice"),t()(),n(213,"td"),e(214,"Subcadena/subarray"),t(),n(215,"td")(216,"code"),r(),e(217,"{{ items | slice:0:5 }}"),i(),t()()(),n(218,"tr")(219,"td")(220,"code"),e(221,"keyvalue"),t()(),n(222,"td"),e(223,"Iterar objetos"),t(),n(224,"td")(225,"code"),r(),e(226,"@for (item of obj | keyvalue; track item.key)"),i(),t()()()()(),n(227,"h4"),e(228,"Pure Pipes (default) \u2014 Mejor Rendimiento"),t(),n(229,"p"),e(230,"Solo se re-ejecutan cuando el "),n(231,"strong"),e(232,"valor de referencia"),t(),e(233," del input cambia. Angular usa "),n(234,"code"),e(235,"==="),t(),e(236," para comparar."),t(),n(237,"ul")(238,"li"),e(239,"\u2705 Rendimiento \xF3ptimo \u2014 se ejecuta pocas veces"),t(),n(240,"li"),e(241,"\u26A0\uFE0F NO detecta cambios dentro de arrays/objetos mutados"),t(),n(242,"li"),e(243,"Para arrays: crear nuevo array ("),n(244,"code"),e(245,"[...arr, newItem]"),t(),e(246,") para triggear el pipe"),t()(),n(247,"pre"),r(),n(248,"code",2),e(249,`@Pipe({ name: 'filterBy' }) // pure: true por defecto
export class FilterByPipe implements PipeTransform {
  transform(items: string[], search: string): string[] {
    if (!search) return items;
    return items.filter(i => i.toLowerCase().includes(search.toLowerCase()));
  }
}`),t(),i(),t(),n(250,"h4"),e(251,"Impure Pipes ("),n(252,"code"),e(253,"pure: false"),t(),e(254,") \u2014 Cuidado con el Rendimiento"),t(),n(255,"p"),e(256,"Se re-ejecutan en "),n(257,"strong"),e(258,"CADA ciclo de Change Detection"),t(),e(259,". Necesarias cuando el array se muta in-place, pero son costosas."),t(),n(260,"pre"),r(),n(261,"code",2),e(262,`@Pipe({ name: 'sortBy', pure: false })
export class SortByPipe implements PipeTransform {
  transform(items: any[], field: string): any[] {
    return [...items].sort((a, b) => a[field] > b[field] ? 1 : -1);
  }
}`),t(),i(),t(),n(263,"h4"),e(264,"\u26A1 Cu\xE1ndo usar cada una"),t(),n(265,"table",4)(266,"thead")(267,"tr")(268,"th"),e(269,"Aspecto"),t(),n(270,"th"),e(271,"Pure"),t(),n(272,"th"),e(273,"Impure"),t()()(),n(274,"tbody")(275,"tr")(276,"td"),e(277,"Ejecuci\xF3n"),t(),n(278,"td"),e(279,"Solo si referencia cambia"),t(),n(280,"td"),e(281,"Cada ciclo de CD"),t()(),n(282,"tr")(283,"td"),e(284,"Rendimiento"),t(),n(285,"td"),e(286,"\u2705 Excelente"),t(),n(287,"td"),e(288,"\u26A0\uFE0F Puede ser costoso"),t()(),n(289,"tr")(290,"td"),e(291,"Detecta mutaciones"),t(),n(292,"td"),e(293,"\u274C No"),t(),n(294,"td"),e(295,"\u2705 S\xED"),t()(),n(296,"tr")(297,"td"),e(298,"Uso ideal"),t(),n(299,"td"),e(300,"Transformaciones simples"),t(),n(301,"td"),e(302,"Arrays mutados, filtros din\xE1micos"),t()()()()(),n(303,"div",5)(304,"h3"),e(305,"C. Ciclo de Vida de Componentes (Lifecycle Hooks)"),t(),n(306,"p"),e(307,"Angular llama estos m\xE9todos en momentos espec\xEDficos del ciclo de vida del componente."),t(),n(308,"h4"),e(309,"Orden de Ejecuci\xF3n"),t(),n(310,"div",6)(311,"span"),e(312,"constructor"),t(),n(313,"span",7),e(314,"\u2192"),t(),n(315,"span"),e(316,"ngOnChanges"),t(),n(317,"span",7),e(318,"\u2192"),t(),n(319,"span"),e(320,"ngOnInit"),t(),n(321,"span",7),e(322,"\u2192"),t(),n(323,"span"),e(324,"ngDoCheck"),t(),n(325,"span",7),e(326,"\u2192"),t(),n(327,"span"),e(328,"ngAfterContentInit"),t(),n(329,"span",7),e(330,"\u2192"),t(),n(331,"span"),e(332,"ngAfterContentChecked"),t(),n(333,"span",7),e(334,"\u2192"),t(),n(335,"span"),e(336,"ngAfterViewInit"),t(),n(337,"span",7),e(338,"\u2192"),t(),n(339,"span"),e(340,"ngAfterViewChecked"),t(),n(341,"span",7),e(342,"\u2192"),t(),n(343,"span"),e(344,"ngOnDestroy"),t()(),n(345,"h4")(346,"code"),e(347,"constructor"),t()(),n(348,"p"),e(349,"Se ejecuta cuando Angular instancia la clase. "),n(350,"strong"),e(351,"Solo para inyecci\xF3n de dependencias."),t(),e(352," NO hacer l\xF3gica aqu\xED \u2014 los "),n(353,"code"),e(354,"@Input()"),t(),e(355," a\xFAn no tienen valor."),t(),n(356,"h4")(357,"code"),e(358,"ngOnChanges(changes: SimpleChanges)"),t()(),n(359,"p"),e(360,"Se ejecuta "),n(361,"strong"),e(362,"antes de ngOnInit"),t(),e(363," y cada vez que un "),n(364,"code"),e(365,"@Input()"),t(),e(366," cambia. Recibe un objeto con valores previos y actuales."),t(),n(367,"pre"),r(),n(368,"code",2),e(369,`ngOnChanges(changes: SimpleChanges) {
  if (changes['userId']) {
    console.log('Prev:', changes['userId'].previousValue);
    console.log('Curr:', changes['userId'].currentValue);
    console.log('First:', changes['userId'].firstChange);
  }
}`),t(),i(),t(),n(370,"h4")(371,"code"),e(372,"ngOnInit"),t()(),n(373,"p"),e(374,"Se ejecuta "),n(375,"strong"),e(376,"una sola vez"),t(),e(377," despu\xE9s del primer "),n(378,"code"),e(379,"ngOnChanges"),t(),e(380,". Ideal para:"),t(),n(381,"ul")(382,"li"),e(383,"Llamadas HTTP iniciales"),t(),n(384,"li"),e(385,"Setup de suscripciones"),t(),n(386,"li"),e(387,"L\xF3gica que depende de "),n(388,"code"),e(389,"@Input()"),t(),e(390," valores"),t()(),n(391,"h4")(392,"code"),e(393,"ngDoCheck"),t()(),n(394,"p"),e(395,"Se ejecuta en "),n(396,"strong"),e(397,"cada ciclo de Change Detection"),t(),e(398,". Peligroso para rendimiento. Solo usar para detecci\xF3n de cambios custom que Angular no detecta (ej: mutaciones profundas de objetos)."),t(),n(399,"h4")(400,"code"),e(401,"ngAfterContentInit"),t(),e(402," / "),n(403,"code"),e(404,"ngAfterContentChecked"),t()(),n(405,"p"),e(406,"Se ejecutan despu\xE9s de que Angular proyecta el contenido externo ("),n(407,"code"),e(408,"<ng-content>"),t(),e(409,") en el componente. "),n(410,"code"),e(411,"Init"),t(),e(412," se ejecuta una vez; "),n(413,"code"),e(414,"Checked"),t(),e(415," en cada CD."),t(),n(416,"h4")(417,"code"),e(418,"ngAfterViewInit"),t(),e(419," / "),n(420,"code"),e(421,"ngAfterViewChecked"),t()(),n(422,"p"),e(423,"Se ejecutan despu\xE9s de que Angular inicializa las vistas hijas del componente. Aqu\xED es seguro acceder a "),n(424,"code"),e(425,"@ViewChild"),t(),e(426,"."),t(),n(427,"pre"),r(),n(428,"code",2),e(429,`@ViewChild('myInput') inputRef!: ElementRef;

ngAfterViewInit() {
  // Ahora inputRef est\xE1 disponible
  this.inputRef.nativeElement.focus();
}`),t(),i(),t(),n(430,"h4")(431,"code"),e(432,"ngOnDestroy"),t()(),n(433,"p")(434,"strong"),e(435,"Cleanup obligatorio."),t(),e(436," Se ejecuta cuando el componente se destruye."),t(),n(437,"ul")(438,"li"),e(439,"Cancelar suscripciones: "),n(440,"code"),e(441,"subscription.unsubscribe()"),t()(),n(442,"li"),e(443,"Remover event listeners: "),n(444,"code"),e(445,"removeEventListener()"),t()(),n(446,"li"),e(447,"Limpiar timers: "),n(448,"code"),e(449,"clearInterval()"),t(),e(450,", "),n(451,"code"),e(452,"clearTimeout()"),t()()(),n(453,"h4"),e(454,"Alternativas Modernas (Angular 16+)"),t(),n(455,"pre"),r(),n(456,"code",2),e(457,`// DestroyRef \u2014 alternativa funcional a ngOnDestroy
export class MyComponent {
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    const sub = this.data$.subscribe(d => this.process(d));
    this.destroyRef.onDestroy(() => sub.unsubscribe());
  }
}

// afterNextRender \u2014 ejecutar c\xF3digo despu\xE9s del primer render (SSR-safe)
export class ChartComponent {
  constructor() {
    afterNextRender(() => {
      // Acceso seguro al DOM \u2014 solo se ejecuta en el browser
      this.initChart();
    });
  }
}

// afterRender \u2014 ejecutar despu\xE9s de CADA render
export class AnimComponent {
  constructor() {
    afterRender(() => {
      this.updateAnimation();
    });
  }
}`),t(),i(),t()(),n(458,"div",8)(459,"h3"),e(460,"D. Content Projection (ng-content)"),t(),n(461,"p"),e(462,'Mecanismo para pasar HTML del componente padre al hijo. Similar a "slots" en Vue/Web Components.'),t(),n(463,"h4"),e(464,"Single Slot"),t(),n(465,"pre"),r(),n(466,"code",2),e(467,`// card.component.html
<div class="card">
  <ng-content />
</div>

// Uso:
<app-card>
  <p>Este contenido se proyecta dentro del card</p>
</app-card>`),t(),i(),t(),n(468,"h4"),e(469,"Multi-Slot Projection"),t(),n(470,"pre"),r(),n(471,"code",2),e(472,`// panel.component.html
<div class="panel">
  <header><ng-content select=".panel-header" /></header>
  <main><ng-content /></main>
  <footer><ng-content select="[footer]" /></footer>
</div>

// Uso:
<app-panel>
  <div class="panel-header">T\xEDtulo</div>
  <p>Contenido principal (slot por defecto)</p>
  <div footer>Pie de p\xE1gina</div>
</app-panel>`),t(),i(),t(),n(473,"h4"),e(474,"ng-container vs ng-template"),t(),n(475,"table",4)(476,"thead")(477,"tr")(478,"th"),e(479,"Elemento"),t(),n(480,"th"),e(481,"Se renderiza"),t(),n(482,"th"),e(483,"Uso principal"),t()()(),n(484,"tbody")(485,"tr")(486,"td")(487,"code"),e(488,"<ng-container>"),t()(),n(489,"td"),e(490,"\u274C No genera elemento DOM"),t(),n(491,"td"),e(492,"Agrupar directivas sin div extra. Ej: "),n(493,"code"),e(494,'<ng-container *ngIf="x">'),t()()(),n(495,"tr")(496,"td")(497,"code"),e(498,"<ng-template>"),t()(),n(499,"td"),e(500,"\u274C No se renderiza por defecto"),t(),n(501,"td"),e(502,"Definir templates reutilizables. Se instancia con "),n(503,"code"),e(504,"*ngIf else"),t(),e(505,", "),n(506,"code"),e(507,"ngTemplateOutlet"),t(),e(508,", o "),n(509,"code"),e(510,"ViewContainerRef"),t()()()()(),n(511,"h4"),e(512,"ngTemplateOutlet \u2014 Renderizar Templates Din\xE1micamente"),t(),n(513,"pre"),r(),n(514,"code",2),e(515,`// Definir template
<ng-template #greetTpl let-name="name">
  <p>Hola, {{ name }}!</p>
</ng-template>

// Renderizar din\xE1micamente
<ng-container
  [ngTemplateOutlet]="greetTpl"
  [ngTemplateOutletContext]="{ name: 'Angular' }"
/>

// Uso avanzado: componente que acepta template custom
@Component({
  selector: 'app-list',
  template: \\\`
    @for (item of items; track item) {
      <ng-container
        [ngTemplateOutlet]="itemTpl"
        [ngTemplateOutletContext]="{ $implicit: item }"
      />
    }
  \\\`
})
export class ListComponent {
  @Input() items: any[] = [];
  @ContentChild(TemplateRef) itemTpl!: TemplateRef<any>;
}`),t(),i(),t(),n(516,"h4"),e(517,"Conditional Projection"),t(),n(518,"pre"),r(),n(519,"code",2),e(520,`// Proyecci\xF3n condicional: solo mostrar si hay contenido
<div class="card">
  @if (showHeader) {
    <header><ng-content select=".header" /></header>
  }
  <ng-content />
</div>`),t(),i(),t()(),n(521,"div",9)(522,"h3"),e(523,"E. ViewEncapsulation (Shadow DOM)"),t(),n(524,"p"),e(525,"Controla c\xF3mo Angular encapsula los estilos CSS de cada componente."),t(),n(526,"table",4)(527,"thead")(528,"tr")(529,"th"),e(530,"Modo"),t(),n(531,"th"),e(532,"Mecanismo"),t(),n(533,"th"),e(534,"CSS Aislado"),t(),n(535,"th"),e(536,"Cu\xE1ndo usar"),t()()(),n(537,"tbody")(538,"tr")(539,"td")(540,"strong"),e(541,"Emulated"),t(),e(542," (default)"),t(),n(543,"td"),e(544,"Angular a\xF1ade atributos "),n(545,"code"),e(546,"_nghost-xxx"),t(),e(547," y "),n(548,"code"),e(549,"_ngcontent-xxx"),t()(),n(550,"td"),e(551,"\u2705 S\xED (emulado)"),t(),n(552,"td"),e(553,"99% de los casos \u2014 es el default por buena raz\xF3n"),t()(),n(554,"tr")(555,"td")(556,"strong"),e(557,"ShadowDom"),t()(),n(558,"td"),e(559,"Usa Shadow DOM nativo del navegador"),t(),n(560,"td"),e(561,"\u2705 S\xED (nativo)"),t(),n(562,"td"),e(563,"Web Components, aislamiento total. No todos los componentes lo soportan bien"),t()(),n(564,"tr")(565,"td")(566,"strong"),e(567,"None"),t()(),n(568,"td"),e(569,"Sin encapsulaci\xF3n \u2014 estilos globales"),t(),n(570,"td"),e(571,"\u274C No"),t(),n(572,"td"),e(573,"Estilos globales de librer\xEDa, overrides. Usar con cuidado"),t()()()(),n(574,"pre"),r(),n(575,"code",2),e(576,`import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-styled',
  template: '<p>Styled component</p>',
  styles: ['p { color: red; }'],
  encapsulation: ViewEncapsulation.Emulated // default
})
export class StyledComponent {}

// Emulated genera en el DOM:
// <p _ngcontent-abc="">Styled component</p>
// CSS: p[_ngcontent-abc] { color: red; }

// ShadowDom genera:
// #shadow-root
//   <style>p { color: red; }</style>
//   <p>Styled component</p>

// None genera:
// <p>Styled component</p>
// CSS global: p { color: red; } (\xA1afecta TODOS los <p>!)`),t(),i(),t(),n(577,"h4"),e(578,"::ng-deep (Deprecated pero a\xFAn usado)"),t(),n(579,"p"),e(580,"Permite que estilos de un componente padre penetren la encapsulaci\xF3n de componentes hijos. "),n(581,"strong"),e(582,"Deprecated"),t(),e(583," pero sin reemplazo oficial a\xFAn."),t(),n(584,"pre"),r(),n(585,"code",2),e(586,`// Rompe la encapsulaci\xF3n del componente hijo
:host ::ng-deep .child-class {
  color: blue;
}

// Alternativa: usar ViewEncapsulation.None en el hijo
// o CSS custom properties (variables) que s\xED atraviesan Shadow DOM`),t(),i(),t()(),n(587,"div",10)(588,"h3"),e(589,"F. Dependency Injection (DI) \u2014 En Profundidad"),t(),n(590,"p"),e(591,"El sistema de DI de Angular es jer\xE1rquico, potente y a veces confuso. Dominar DI es clave para entrevistas senior."),t(),n(592,"h4"),e(593,"\xBFC\xF3mo funciona DI internamente?"),t(),n(594,"p"),e(595," Cuando Angular necesita crear un componente o servicio, mira sus dependencias (par\xE1metros del constructor o "),n(596,"code"),e(597,"inject()"),t(),e(598,"). Para cada dependencia, busca un "),n(599,"strong"),e(600,"provider"),t(),e(601," registrado subiendo por el "),n(602,"strong"),e(603,"\xE1rbol de injectors"),t(),e(604,": "),t(),n(605,"ol")(606,"li")(607,"strong"),e(608,"ElementInjector"),t(),e(609," del componente actual (providers en @Component)"),t(),n(610,"li"),e(611,"ElementInjector del componente padre, abuelo, etc."),t(),n(612,"li")(613,"strong"),e(614,"ModuleInjector"),t(),e(615," del m\xF3dulo que declar\xF3 el componente"),t(),n(616,"li"),e(617,"ModuleInjector ra\xEDz (root) \u2014 donde viven los "),n(618,"code"),e(619,"providedIn: 'root'"),t()(),n(620,"li")(621,"strong"),e(622,"PlatformInjector"),t(),e(623," \u2014 nivel plataforma (raro, para multi-app)"),t(),n(624,"li")(625,"strong"),e(626,"NullInjector"),t(),e(627," \u2014 si llega aqu\xED, lanza error (a menos que sea @Optional)"),t()(),n(628,"pre"),r(),n(629,"code",2),e(630,`// Visualizaci\xF3n del \xE1rbol de injectors:
//
// NullInjector (throws error)
//   \u2514\u2500 PlatformInjector
//       \u2514\u2500 RootModuleInjector (providedIn: 'root')
//           \u251C\u2500 LazyModuleInjector A (providers del lazy module)
//           \u2502   \u2514\u2500 ElementInjector ComponentA (providers en @Component)
//           \u2502       \u2514\u2500 ElementInjector ChildComponent
//           \u2514\u2500 LazyModuleInjector B
//               \u2514\u2500 ElementInjector ComponentB`),t(),i(),t(),n(631,"h4"),e(632,"providedIn \u2014 Las opciones y cu\xE1ndo usar cada una"),t(),n(633,"table",4)(634,"thead")(635,"tr")(636,"th"),e(637,"Valor"),t(),n(638,"th"),e(639,"Comportamiento"),t(),n(640,"th"),e(641,"Tree-shakeable"),t(),n(642,"th"),e(643,"Cu\xE1ndo usar"),t()()(),n(644,"tbody")(645,"tr")(646,"td")(647,"code"),e(648,"providedIn: 'root'"),t()(),n(649,"td"),e(650,"Singleton global \u2014 UNA instancia para toda la app"),t(),n(651,"td"),e(652,"\u2705 S\xED"),t(),n(653,"td")(654,"strong"),e(655,"Opci\xF3n por defecto"),t(),e(656,". Auth, HTTP, config, state"),t()(),n(657,"tr")(658,"td")(659,"code"),e(660,"providedIn: 'any'"),t()(),n(661,"td"),e(662,"Una instancia por cada lazy-loaded module + una para eager modules"),t(),n(663,"td"),e(664,"\u2705 S\xED"),t(),n(665,"td"),e(666,"Servicios que necesitan estado aislado por feature"),t()(),n(667,"tr")(668,"td")(669,"code"),e(670,"providedIn: 'platform'"),t()(),n(671,"td"),e(672,"Compartido entre m\xFAltiples apps Angular en la misma p\xE1gina"),t(),n(673,"td"),e(674,"\u2705 S\xED"),t(),n(675,"td"),e(676,"Micro-frontends con shared state"),t()(),n(677,"tr")(678,"td")(679,"code"),e(680,"providers: []"),t(),e(681," en @Component"),t(),n(682,"td"),e(683,"Nueva instancia por CADA instancia del componente"),t(),n(684,"td"),e(685,"\u274C No"),t(),n(686,"td"),e(687,"Estado por componente (ej: FormStateService)"),t()(),n(688,"tr")(689,"td")(690,"code"),e(691,"providers: []"),t(),e(692," en ruta"),t(),n(693,"td"),e(694,"Singleton para esa ruta y sus hijos"),t(),n(695,"td"),e(696,"\u274C No"),t(),n(697,"td"),e(698,"Feature-level services (NgRx provideState)"),t()(),n(699,"tr")(700,"td")(701,"code"),e(702,"providers: []"),t(),e(703," en @NgModule"),t(),n(704,"td"),e(705,"Singleton en ese module injector"),t(),n(706,"td"),e(707,"\u274C No"),t(),n(708,"td"),e(709,"Legacy \u2014 evitar en apps nuevas"),t()()()(),n(710,"h4"),e(711,"\u26A0\uFE0F El problema del Singleton en Lazy Modules"),t(),n(712,"p"),e(713," Si un servicio se registra en "),n(714,"code"),e(715,"providers"),t(),e(716," de un "),n(717,"strong"),e(718,"lazy-loaded module"),t(),e(719,", Angular crea un "),n(720,"strong"),e(721,"nuevo injector hijo"),t(),e(722,", y ese servicio es un "),n(723,"strong"),e(724,"singleton SOLO dentro de ese module"),t(),e(725,", NO el mismo que el del root. Esto causa bugs sutiles: "),t(),n(726,"pre"),r(),n(727,"code",2),e(728,`// \u274C PROBLEMA: AuthService registrado en SharedModule
@NgModule({
  providers: [AuthService]  // \u2190 cada lazy module que importe SharedModule
})                           //   obtiene su PROPIA instancia de AuthService
export class SharedModule {}

// \u2705 SOLUCI\xD3N 1: providedIn: 'root' (preferido)
@Injectable({ providedIn: 'root' })
export class AuthService {}

// \u2705 SOLUCI\xD3N 2: forRoot() pattern (legacy)
@NgModule({})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [AuthService]  // solo se registra en root
    };
  }
}`),t(),i(),t(),n(729,"h4"),e(730,"Provider Types \u2014 Todos los tipos en detalle"),t(),n(731,"pre"),r(),n(732,"code",2),e(733,`// === useClass \u2014 reemplazar implementaci\xF3n ===
// \xDAtil para testing, o estrategias diferentes por entorno
providers: [
  { provide: LoggerService, useClass: environment.production 
    ? ProdLoggerService 
    : DevLoggerService }
]

// === useValue \u2014 proveer un valor est\xE1tico ===
// Para configuraci\xF3n, tokens, constantes
providers: [
  { provide: API_URL, useValue: 'https://api.example.com' },
  { provide: IS_PRODUCTION, useValue: true },
  { provide: APP_CONFIG, useValue: { theme: 'dark', lang: 'es' } }
]

// === useFactory \u2014 l\xF3gica condicional ===
// Cuando necesitas l\xF3gica para crear el servicio
// deps: servicios que la factory necesita
providers: [{
  provide: StorageService,
  useFactory: (platform: Platform) => {
    if (platform.isBrowser) {
      return new LocalStorageService();
    } else {
      return new InMemoryStorageService();  // SSR
    }
  },
  deps: [Platform]
}]

// === useExisting \u2014 alias ===
// Redirige un token a otro provider existente
providers: [
  NewLoggerService,
  { provide: OldLoggerService, useExisting: NewLoggerService }
  // Cuando alguien pida OldLogger, recibe la instancia de NewLogger
]`),t(),i(),t(),n(734,"h4"),e(735,"InjectionToken \u2014 Para valores no-clase"),t(),n(736,"p"),e(737," Las clases sirven como su propio token de DI, pero para valores primitivos (strings, n\xFAmeros, objetos de config) necesitas un "),n(738,"code"),e(739,"InjectionToken"),t(),e(740,": "),t(),n(741,"pre"),r(),n(742,"code",2),e(743,`// Crear token tipado
export const API_URL = new InjectionToken<string>('API Base URL');
export const APP_CONFIG = new InjectionToken<AppConfig>('App Configuration');
export const FEATURE_FLAGS = new InjectionToken<FeatureFlags>('Feature Flags');

// Token con factory (se auto-provee, tree-shakeable)
export const WINDOW = new InjectionToken<Window>('Window Reference', {
  providedIn: 'root',
  factory: () => window  // valor por defecto
});

export const IS_BROWSER = new InjectionToken<boolean>('Is Browser', {
  providedIn: 'root',
  factory: () => typeof window !== 'undefined'
});

// Proveer en config
export const appConfig: ApplicationConfig = {
  providers: [
    { provide: API_URL, useValue: 'https://api.worldly.com' },
    { provide: APP_CONFIG, useValue: { theme: 'dark', maxRetries: 3 } },
  ]
};

// Inyectar
export class ApiService {
  private url = inject(API_URL);
  private config = inject(APP_CONFIG);
  private isBrowser = inject(IS_BROWSER);
}`),t(),i(),t(),n(744,"h4"),e(745,"Multi Providers \u2014 Arrays de servicios"),t(),n(746,"pre"),r(),n(747,"code",2),e(748,`// Cuando VARIOS providers deben registrarse bajo el mismo token
// Angular los inyecta como un ARRAY

export const APP_INITIALIZER = new InjectionToken<(() => void)[]>('App Init');

providers: [
  { provide: APP_INITIALIZER, useFactory: () => () => loadConfig(), multi: true },
  { provide: APP_INITIALIZER, useFactory: () => () => loadTranslations(), multi: true },
  { provide: APP_INITIALIZER, useFactory: () => () => initAnalytics(), multi: true },
]
// Resultado: [loadConfig, loadTranslations, initAnalytics]

// Caso de uso real: HTTP_INTERCEPTORS (class-based, legacy)
providers: [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
]`),t(),i(),t(),n(749,"h4"),e(750,"inject() vs Constructor \u2014 Comparaci\xF3n completa"),t(),n(751,"pre"),r(),n(752,"code",2),e(753,`// \u2705 MODERNO: inject() function (Angular 14+, preferido)
export class UserService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private config = inject(APP_CONFIG);
  private logger = inject(LoggerService, { optional: true }); // no lanza error si no existe
}

// \u2705 CL\xC1SICO: Constructor injection (a\xFAn v\xE1lido)
export class UserService {
  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(APP_CONFIG) private config: AppConfig,
    @Optional() private logger: LoggerService // decorador para optional
  ) {}
}

// inject() funciona en m\xE1s contextos:
// \u2705 Functional guards
export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  return auth.isLoggedIn() || router.createUrlTree(['/login']);
};

// \u2705 Functional interceptors
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthService).getToken();
  return next(req.clone({ setHeaders: { Authorization: \`Bearer \${token}\` } }));
};

// \u2705 Factory functions
export function createApiService(): ApiService {
  const http = inject(HttpClient);
  const url = inject(API_URL);
  return new ApiService(http, url);
}`),t(),i(),t(),n(754,"h4"),e(755,"Decoradores de resoluci\xF3n avanzados"),t(),n(756,"pre"),r(),n(757,"code",2),e(758,`// @Optional / { optional: true } \u2014 no lanza error si no se encuentra
private logger = inject(LoggerService, { optional: true });

// @Self / { self: true } \u2014 solo busca en el propio ElementInjector
private service = inject(MyService, { self: true });
// \xDAtil para: asegurar que el servicio es una instancia local

// @SkipSelf / { skipSelf: true } \u2014 salta el propio injector, busca en padre
private parentService = inject(MyService, { skipSelf: true });
// \xDAtil para: acceder al servicio del componente padre

// @Host / { host: true } \u2014 busca solo hasta el host component
private hostService = inject(MyService, { host: true });

// Combinaciones:
// "Quiero el del padre, pero si no existe, no pasa nada"
private parentOpt = inject(MyService, { skipSelf: true, optional: true });`),t(),i(),t(),n(759,"h4"),e(760,"Patr\xF3n: Component-level providers para estado local"),t(),n(761,"pre"),r(),n(762,"code",2),e(763,`// Servicio que maneja estado de un formulario
@Injectable() // NO providedIn: 'root' \u2014 se crea por componente
export class FormStateService {
  private state = signal<FormData>({ name: '', email: '' });
  
  readonly formState = this.state.asReadonly();
  
  updateField(field: string, value: string) {
    this.state.update(s => ({ ...s, [field]: value }));
  }
  
  reset() { this.state.set({ name: '', email: '' }); }
}

@Component({
  providers: [FormStateService], // \u2190 nueva instancia POR CADA componente
  template: \`...\`
})
export class UserFormComponent {
  private formState = inject(FormStateService);
  // Cada instancia de UserFormComponent tiene su propio FormStateService
}`),t(),i(),t(),n(764,"div",11),e(765," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(766,"ul")(767,"li")(768,"code"),e(769,"core/services/progress.service.ts"),t(),e(770," \u2014 providedIn: 'root', singleton global con Signals"),t(),n(771,"li")(772,"code"),e(773,"core/services/mock-api.service.ts"),t(),e(774," \u2014 providedIn: 'root', servicio HTTP simulado"),t(),n(775,"li")(776,"code"),e(777,"core/interceptors/auth.interceptor.ts"),t(),e(778," \u2014 Functional interceptor con inject()"),t(),n(779,"li")(780,"code"),e(781,"core/guards/auth.guard.ts"),t(),e(782," \u2014 Functional guard con inject()"),t(),n(783,"li")(784,"code"),e(785,"app.config.ts"),t(),e(786," \u2014 provideHttpClient(withInterceptors([...])), provideStore()"),t(),n(787,"li")(788,"code"),e(789,"features/ngrx-lab/ngrx-lab.routes.ts"),t(),e(790," \u2014 providers a nivel de ruta (provideState, provideEffects)"),t()()()(),n(791,"div",12)(792,"h3"),e(793,"F2. Core Module vs Shared Module vs Feature Module"),t(),n(794,"p"),e(795," Aunque Angular 20 usa Standalone por defecto, estos conceptos arquitect\xF3nicos siguen siendo preguntas frecuentes en entrevistas y definen c\xF3mo organizar providers y c\xF3digo. "),t(),n(796,"h4"),e(797,"Core Module (ahora: carpeta core/)"),t(),n(798,"p"),e(799,"Contiene servicios "),n(800,"strong"),e(801,"singleton"),t(),e(802," que se usan en TODA la app. Se importa UNA sola vez en el root."),t(),n(803,"ul")(804,"li"),e(805,"Auth service, API services, config service"),t(),n(806,"li"),e(807,"HTTP interceptors"),t(),n(808,"li"),e(809,"Route guards"),t(),n(810,"li"),e(811,"Modelos de dominio globales"),t(),n(812,"li")(813,"strong"),e(814,"Regla"),t(),e(815,": todo en core/ tiene "),n(816,"code"),e(817,"providedIn: 'root'"),t(),e(818," o se registra en app.config"),t()(),n(819,"pre"),r(),n(820,"code",2),e(821,`// Patr\xF3n legacy: CoreModule con guard anti-reimportaci\xF3n
@NgModule({
  providers: [AuthService, ConfigService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('CoreModule ya est\xE1 cargado. Solo importar en AppModule.');
    }
  }
}

// Patr\xF3n moderno (Angular 20): NO necesita m\xF3dulo
// Todo es providedIn: 'root' y se organiza por carpeta
// src/app/core/
//   services/auth.service.ts     \u2192 @Injectable({ providedIn: 'root' })
//   interceptors/auth.interceptor.ts \u2192 HttpInterceptorFn
//   guards/auth.guard.ts         \u2192 CanActivateFn`),t(),i(),t(),n(822,"h4"),e(823,"Shared Module (ahora: carpeta shared/)"),t(),n(824,"p"),e(825," Contiene componentes, directivas y pipes "),n(826,"strong"),e(827,"reutilizables y sin estado"),t(),e(828,". Se puede importar en cualquier feature. "),t(),n(829,"ul")(830,"li"),e(831,"Componentes UI: Button, Card, Modal, Spinner, Table"),t(),n(832,"li"),e(833,"Directivas: Highlight, Tooltip, Autosize"),t(),n(834,"li"),e(835,"Pipes: FormatDate, FilterBy, TruncateText"),t(),n(836,"li")(837,"strong"),e(838,"Regla"),t(),e(839,": NUNCA incluir servicios con estado en shared/"),t(),n(840,"li")(841,"strong"),e(842,"Regla"),t(),e(843,": shared/ NO importa de core/ ni de features/"),t()(),n(844,"pre"),r(),n(845,"code",2),e(846,`// Patr\xF3n legacy: SharedModule que re-exporta todo
@NgModule({
  declarations: [ButtonComponent, SpinnerComponent, FilterPipe],
  imports: [CommonModule, FormsModule],
  exports: [
    ButtonComponent, SpinnerComponent, FilterPipe,
    CommonModule, FormsModule  // re-exportar m\xF3dulos comunes
  ]
  // \u26A0\uFE0F NO poner providers aqu\xED \u2014 causa m\xFAltiples instancias en lazy modules
})
export class SharedModule {}

// Patr\xF3n moderno: Standalone + barrel export
// shared/components/index.ts
export { ButtonComponent } from './button.component';
export { SpinnerComponent } from './spinner.component';

// Usar en cualquier componente:
import { ButtonComponent } from '../../shared/components';

@Component({
  imports: [ButtonComponent],  // import directo, sin m\xF3dulo
  template: \`<app-button label="Save" />\`
})`),t(),i(),t(),n(847,"h4"),e(848,"Feature Module (ahora: carpeta features/)"),t(),n(849,"p"),e(850," Cada feature es autocontenida: sus componentes, servicios, rutas y estado. Se carga con "),n(851,"strong"),e(852,"lazy loading"),t(),e(853,". "),t(),n(854,"pre"),r(),n(855,"code",2),e(856,`// Patr\xF3n legacy: Feature NgModule
@NgModule({
  declarations: [ProductListComponent, ProductCardComponent],
  imports: [CommonModule, SharedModule, ProductRoutingModule],
  providers: [ProductService]
})
export class ProductModule {}

// Patr\xF3n moderno: Feature routes (sin m\xF3dulo)
// features/products/products.routes.ts
export const PRODUCT_ROUTES: Routes = [{
  path: '',
  providers: [
    provideState('products', productReducer),  // state scoped a esta feature
    provideEffects(ProductEffects),
  ],
  loadComponent: () => import('./product-list').then(m => m.ProductListComponent),
  children: [...]
}];

// En app.routes.ts:
{ path: 'products', loadChildren: () => 
  import('./features/products/products.routes').then(m => m.PRODUCT_ROUTES) }`),t(),i(),t(),n(857,"h4"),e(858,"Tabla resumen: Core vs Shared vs Feature"),t(),n(859,"table",4)(860,"thead")(861,"tr")(862,"th"),e(863,"Aspecto"),t(),n(864,"th"),e(865,"Core"),t(),n(866,"th"),e(867,"Shared"),t(),n(868,"th"),e(869,"Feature"),t()()(),n(870,"tbody")(871,"tr")(872,"td")(873,"strong"),e(874,"Contiene"),t()(),n(875,"td"),e(876,"Services, guards, interceptors"),t(),n(877,"td"),e(878,"Components, directives, pipes"),t(),n(879,"td"),e(880,"Todo lo de un dominio"),t()(),n(881,"tr")(882,"td")(883,"strong"),e(884,"Scope"),t()(),n(885,"td"),e(886,"Singleton global"),t(),n(887,"td"),e(888,"Reutilizable, sin estado"),t(),n(889,"td"),e(890,"Autocontenido"),t()(),n(891,"tr")(892,"td")(893,"strong"),e(894,"Se importa en"),t()(),n(895,"td"),e(896,"Solo AppModule/app.config"),t(),n(897,"td"),e(898,"Cualquier feature"),t(),n(899,"td"),e(900,"Lazy-loaded por ruta"),t()(),n(901,"tr")(902,"td")(903,"strong"),e(904,"Providers?"),t()(),n(905,"td"),e(906,"\u2705 S\xED (providedIn: root)"),t(),n(907,"td"),e(908,"\u274C NUNCA servicios con estado"),t(),n(909,"td"),e(910,"\u2705 Feature-level"),t()(),n(911,"tr")(912,"td")(913,"strong"),e(914,"Ejemplo"),t()(),n(915,"td"),e(916,"AuthService, ConfigService"),t(),n(917,"td"),e(918,"ButtonComponent, FilterPipe"),t(),n(919,"td"),e(920,"ProductListComponent + store"),t()()()(),n(921,"h4"),e(922,"forRoot() / forChild() Pattern (legacy pero preguntado en entrevistas)"),t(),n(923,"pre"),r(),n(924,"code",2),e(925,`// Problema: SharedModule con providers se importa en m\xFAltiples lazy modules
// Cada lazy module crea su propia instancia del servicio (no singleton!)

// Soluci\xF3n: forRoot() pattern
@NgModule({
  declarations: [SpinnerComponent],
  exports: [SpinnerComponent]
})
export class SharedModule {
  // forRoot() \u2014 solo se llama en AppModule, registra servicios
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [NotificationService, ConfigService]
    };
  }
  
  // forChild() \u2014 se llama en feature modules, no registra servicios
  static forChild(): ModuleWithProviders<SharedModule> {
    return { ngModule: SharedModule };
  }
}

// Ejemplo real: RouterModule
RouterModule.forRoot(routes)   // en AppModule \u2014 configura Router service
RouterModule.forChild(routes)  // en Feature \u2014 solo registra rutas

// \u2705 En Angular 20 con Standalone, todo esto es innecesario:
// provideRouter(routes) en app.config
// Componentes se importan directamente`),t(),i(),t(),n(926,"div",11),e(927," \u{1F4C2} Estructura actual del proyecto: "),n(928,"ul")(929,"li")(930,"code"),e(931,"core/services/"),t(),e(932," \u2014 Servicios singleton (progress, mock-api) con providedIn: 'root'"),t(),n(933,"li")(934,"code"),e(935,"core/interceptors/"),t(),e(936," \u2014 Interceptor funcional"),t(),n(937,"li")(938,"code"),e(939,"core/guards/"),t(),e(940," \u2014 Guard funcional"),t(),n(941,"li")(942,"code"),e(943,"shared/components/"),t(),e(944," \u2014 Componentes reutilizables (lab-layout, global-search)"),t(),n(945,"li")(946,"code"),e(947,"shared/directives/"),t(),e(948," \u2014 Directiva auto-glossary"),t(),n(949,"li")(950,"code"),e(951,"shared/services/"),t(),e(952," \u2014 Glossary service (providedIn: 'root')"),t(),n(953,"li")(954,"code"),e(955,"features/*/"),t(),e(956," \u2014 Cada feature con sus propias rutas, componentes y store"),t()()()(),n(957,"div",13)(958,"h3"),e(959,"G. Template Reference Variables & ViewChild"),t(),n(960,"p"),e(961,"Acceder a elementos del DOM o instancias de componentes hijos desde la clase."),t(),n(962,"h4"),e(963,"Template Reference Variables ("),n(964,"code"),e(965,"#ref"),t(),e(966,")"),t(),n(967,"pre"),r(),n(968,"code",2),e(969,`// En el template \u2014 acceso directo al elemento o componente
<input #nameInput type="text">
<button (click)="greet(nameInput.value)">Saludar</button>

// Si es un componente, #ref apunta a la instancia del componente
<app-timer #timer />
<button (click)="timer.start()">Start</button>`),t(),i(),t(),n(970,"h4"),e(971,"@ViewChild / @ViewChildren"),t(),n(972,"pre"),r(),n(973,"code",2),e(974,`// Acceder desde la clase del componente
@ViewChild('nameInput') inputRef!: ElementRef<HTMLInputElement>;
@ViewChild(TimerComponent) timer!: TimerComponent;
@ViewChildren(ItemComponent) items!: QueryList<ItemComponent>;

ngAfterViewInit() {
  this.inputRef.nativeElement.focus();
  this.timer.start();
  this.items.forEach(item => item.highlight());
}`),t(),i(),t(),n(975,"h4"),e(976,"ElementRef vs TemplateRef vs ViewContainerRef"),t(),n(977,"table",4)(978,"thead")(979,"tr")(980,"th"),e(981,"Clase"),t(),n(982,"th"),e(983,"Qu\xE9 representa"),t(),n(984,"th"),e(985,"Uso principal"),t()()(),n(986,"tbody")(987,"tr")(988,"td")(989,"code"),e(990,"ElementRef"),t()(),n(991,"td"),e(992,"Wrapper del elemento DOM nativo"),t(),n(993,"td"),e(994,"Acceso a "),n(995,"code"),e(996,"nativeElement"),t(),e(997,". \u26A0\uFE0F No SSR-safe"),t()(),n(998,"tr")(999,"td")(1e3,"code"),e(1001,"TemplateRef"),t()(),n(1002,"td"),e(1003,"Referencia a un "),n(1004,"code"),e(1005,"<ng-template>"),t()(),n(1006,"td"),e(1007,"Crear vistas embebidas din\xE1micamente"),t()(),n(1008,"tr")(1009,"td")(1010,"code"),e(1011,"ViewContainerRef"),t()(),n(1012,"td"),e(1013,"Punto de anclaje en el DOM"),t(),n(1014,"td"),e(1015,"Insertar/remover vistas y componentes din\xE1micamente"),t()()()(),n(1016,"h4"),e(1017,"Signal-based Queries (Angular 17+)"),t(),n(1018,"pre"),r(),n(1019,"code",2),e(1020,`// Alternativas modernas basadas en signals
export class MyComponent {
  // ViewChild \u2192 viewChild()
  nameInput = viewChild<ElementRef>('nameInput');
  timer = viewChild.required(TimerComponent);

  // ViewChildren \u2192 viewChildren()
  items = viewChildren(ItemComponent);

  // ContentChild \u2192 contentChild()
  header = contentChild<ElementRef>('.header');

  // ContentChildren \u2192 contentChildren()
  tabs = contentChildren(TabComponent);

  doSomething() {
    // Acceso via signal \u2014 siempre actualizado
    this.nameInput()?.nativeElement.focus();
    this.timer().start();
    this.items().forEach(i => i.highlight());
  }
}`),t(),i(),t()(),n(1021,"div",14)(1022,"h3"),e(1023,"H. HttpClient & Llamadas API"),t(),n(1024,"h4"),e(1025,"Configuraci\xF3n"),t(),n(1026,"p"),e(1027," Angular usa "),n(1028,"strong"),e(1029,"HttpClient"),t(),e(1030," del paquete "),n(1031,"code"),e(1032,"@angular/common/http"),t(),e(1033,". Se registra con "),n(1034,"code"),e(1035,"provideHttpClient()"),t(),e(1036," en la configuraci\xF3n de la app: "),t(),n(1037,"pre"),r(),n(1038,"code",2),e(1039,`// app.config.ts
import { provideHttpClient, withInterceptors, withFetch } from '@angular/common/http';

export const appConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor, loggingInterceptor]),
      withFetch()  // usa fetch() API en vez de XMLHttpRequest
    ),
  ]
};`),t(),i(),t(),n(1040,"h4"),e(1041,"M\xE9todos HTTP principales"),t(),n(1042,"p"),e(1043,"HttpClient retorna "),n(1044,"strong"),e(1045,"Observables"),t(),e(1046," \u2014 son lazy, no se ejecutan hasta "),n(1047,"code"),e(1048,".subscribe()"),t(),e(1049," o "),n(1050,"code"),e(1051,"| async"),t(),e(1052,":"),t(),n(1053,"pre"),r(),n(1054,"code",2),e(1055,`import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private http = inject(HttpClient);
  private apiUrl = '/api/products';

  // GET \u2014 obtener lista
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  // GET con params \u2014 b\xFAsqueda/paginaci\xF3n
  search(term: string, page = 1): Observable<Product[]> {
    const params = new HttpParams()
      .set('q', term)
      .set('page', page)
      .set('limit', 20);
    return this.http.get<Product[]>(this.apiUrl, { params });
  }

  // GET por ID
  getById(id: string): Observable<Product> {
    return this.http.get<Product>(\`\${this.apiUrl}/\${id}\`);
  }

  // POST \u2014 crear
  create(product: Partial<Product>): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  // PUT \u2014 reemplazar completo
  update(id: string, product: Product): Observable<Product> {
    return this.http.put<Product>(\`\${this.apiUrl}/\${id}\`, product);
  }

  // PATCH \u2014 actualizaci\xF3n parcial
  patch(id: string, changes: Partial<Product>): Observable<Product> {
    return this.http.patch<Product>(\`\${this.apiUrl}/\${id}\`, changes);
  }

  // DELETE
  delete(id: string): Observable<void> {
    return this.http.delete<void>(\`\${this.apiUrl}/\${id}\`);
  }
}`),t(),i(),t(),n(1056,"h4"),e(1057,"Headers personalizados"),t(),n(1058,"pre"),r(),n(1059,"code",2),e(1060,`const headers = new HttpHeaders()
  .set('Authorization', \`Bearer \${token}\`)
  .set('Content-Type', 'application/json');

this.http.get<Data>('/api/data', { headers });`),t(),i(),t(),n(1061,"h4"),e(1062,"Manejo de errores"),t(),n(1063,"p"),e(1064,"Los errores HTTP llegan como "),n(1065,"code"),e(1066,"HttpErrorResponse"),t(),e(1067,". Se manejan con "),n(1068,"code"),e(1069,"catchError"),t(),e(1070," de RxJS:"),t(),n(1071,"pre"),r(),n(1072,"code",2),e(1073,`import { catchError, retry, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

getProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(this.apiUrl).pipe(
    retry(2),  // reintentar 2 veces antes de fallar
    catchError((error: HttpErrorResponse) => {
      if (error.status === 0) {
        // Error de red (sin conexi\xF3n)
        console.error('Network error:', error.error);
      } else if (error.status === 401) {
        // No autorizado \u2014 redirigir a login
        this.router.navigate(['/login']);
      } else if (error.status === 404) {
        // No encontrado
        console.error('Not found');
      } else {
        // Error del servidor (500, etc)
        console.error(\`Server error \${error.status}:\`, error.message);
      }
      return throwError(() => error);
    })
  );
}`),t(),i(),t(),n(1074,"h4"),e(1075,"Interceptors (funcionales, Angular 15+)"),t(),n(1076,"p"),e(1077,"Los interceptors procesan TODAS las peticiones/respuestas HTTP en un pipeline:"),t(),n(1078,"pre"),r(),n(1079,"code",2),e(1080,`// auth.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthService).getToken();
  
  if (token) {
    req = req.clone({
      setHeaders: { Authorization: \`Bearer \${token}\` }
    });
  }
  
  return next(req);
};

// logging.interceptor.ts \u2014 medir tiempo de respuesta
export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  const start = Date.now();
  return next(req).pipe(
    tap({
      next: () => console.log(\`\${req.method} \${req.url} \u2014 \${Date.now() - start}ms\`),
      error: (err) => console.error(\`\${req.method} \${req.url} FAILED \u2014 \${err.status}\`)
    })
  );
};

// error-handler.interceptor.ts \u2014 manejo global de errores
export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        inject(Router).navigate(['/login']);
      }
      return throwError(() => error);
    })
  );
};`),t(),i(),t(),n(1081,"h4"),e(1082,"Patrones comunes en componentes"),t(),n(1083,"pre"),r(),n(1084,"code",2),e(1085,`// \u274C MAL \u2014 suscripci\xF3n manual, posible memory leak
@Component({...})
export class ProductsComponent {
  products: Product[] = [];
  ngOnInit() {
    this.productService.getAll().subscribe(p => this.products = p);
  }
}

// \u2705 BIEN \u2014 async pipe (auto-unsubscribe)
@Component({
  template: \`
    @if (products$ | async; as products) {
      @for (p of products; track p.id) {
        <app-product-card [product]="p" />
      }
    } @else {
      <p>Cargando...</p>
    }
  \`
})
export class ProductsComponent {
  products$ = inject(ProductService).getAll();
}

// \u2705 MEJOR \u2014 con Signals (Angular 18+)
@Component({
  template: \`
    @for (p of products(); track p.id) {
      <app-product-card [product]="p" />
    }
  \`
})
export class ProductsComponent {
  products = toSignal(inject(ProductService).getAll(), {
    initialValue: []
  });
}`),t(),i(),t(),n(1086,"h4"),e(1087,"HttpClient + NgRx Effects"),t(),n(1088,"p"),e(1089,"En apps con NgRx, las llamadas HTTP van en "),n(1090,"strong"),e(1091,"Effects"),t(),e(1092,", NO en componentes:"),t(),n(1093,"pre"),r(),n(1094,"code",2),e(1095,`// product.effects.ts
loadProducts$ = createEffect(() =>
  this.actions$.pipe(
    ofType(ProductActions.loadProducts),
    switchMap(() =>
      this.http.get<Product[]>('/api/products').pipe(
        map(products => ProductActions.loadProductsSuccess({ products })),
        catchError(error =>
          of(ProductActions.loadProductsFailure({ error: error.message }))
        )
      )
    )
  )
);`),t(),i(),t(),n(1096,"h4"),e(1097,"Testing con HttpTestingController"),t(),n(1098,"pre"),r(),n(1099,"code",2),e(1100,`// product.service.spec.ts
describe('ProductService', () => {
  let service: ProductService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(ProductService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  it('should GET products', () => {
    const mockProducts = [{ id: '1', name: 'Test' }];
    
    service.getAll().subscribe(products => {
      expect(products).toEqual(mockProducts);
    });

    const req = httpTesting.expectOne('/api/products');
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts);
  });

  afterEach(() => {
    httpTesting.verify(); // ninguna petici\xF3n pendiente
  });
});`),t(),i(),t(),n(1101,"h4"),e(1102,"Tabla resumen: GET vs POST vs PUT vs PATCH vs DELETE"),t(),n(1103,"table",4)(1104,"tr")(1105,"th"),e(1106,"M\xE9todo"),t(),n(1107,"th"),e(1108,"Uso"),t(),n(1109,"th"),e(1110,"Body"),t(),n(1111,"th"),e(1112,"Idempotente"),t()(),n(1113,"tr")(1114,"td")(1115,"strong"),e(1116,"GET"),t()(),n(1117,"td"),e(1118,"Obtener datos"),t(),n(1119,"td"),e(1120,"No"),t(),n(1121,"td"),e(1122,"S\xED"),t()(),n(1123,"tr")(1124,"td")(1125,"strong"),e(1126,"POST"),t()(),n(1127,"td"),e(1128,"Crear recurso"),t(),n(1129,"td"),e(1130,"S\xED"),t(),n(1131,"td"),e(1132,"No"),t()(),n(1133,"tr")(1134,"td")(1135,"strong"),e(1136,"PUT"),t()(),n(1137,"td"),e(1138,"Reemplazar recurso completo"),t(),n(1139,"td"),e(1140,"S\xED"),t(),n(1141,"td"),e(1142,"S\xED"),t()(),n(1143,"tr")(1144,"td")(1145,"strong"),e(1146,"PATCH"),t()(),n(1147,"td"),e(1148,"Actualizaci\xF3n parcial"),t(),n(1149,"td"),e(1150,"S\xED"),t(),n(1151,"td"),e(1152,"No*"),t()(),n(1153,"tr")(1154,"td")(1155,"strong"),e(1156,"DELETE"),t()(),n(1157,"td"),e(1158,"Eliminar recurso"),t(),n(1159,"td"),e(1160,"Opcional"),t(),n(1161,"td"),e(1162,"S\xED"),t()()(),n(1163,"div",11),e(1164," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(1165,"ul")(1166,"li")(1167,"code"),e(1168,"core/services/mock-api.service.ts"),t(),e(1169," \u2014 Servicio simulado con getProducts, createProduct, updateProduct, deleteProduct"),t(),n(1170,"li")(1171,"code"),e(1172,"core/interceptors/auth.interceptor.ts"),t(),e(1173," \u2014 Interceptor funcional que agrega Authorization header"),t(),n(1174,"li")(1175,"code"),e(1176,"features/ngrx-lab/store/product.effects.ts"),t(),e(1177," \u2014 HttpClient en Effects con switchMap + catchError"),t(),n(1178,"li")(1179,"code"),e(1180,"app.config.ts"),t(),e(1181," \u2014 provideHttpClient(withInterceptors([...]))"),t()()()(),n(1182,"div",15)(1183,"h3"),e(1184,"I. Routing Avanzado"),t(),n(1185,"h4"),e(1186,"Route Params, Query Params & Fragments"),t(),n(1187,"pre"),r(),n(1188,"code",2),e(1189,`// Definir ruta con par\xE1metro
{ path: 'user/:id', component: UserComponent }

// Navegar
this.router.navigate(['/user', 42], {
  queryParams: { tab: 'profile' },
  fragment: 'bio'
});
// URL: /user/42?tab=profile#bio`),t(),i(),t(),n(1190,"h4"),e(1191,"ActivatedRoute \u2014 snapshot vs observable"),t(),n(1192,"pre"),r(),n(1193,"code",2),e(1194,`export class UserComponent {
  private route = inject(ActivatedRoute);

  // Snapshot \u2014 valor est\xE1tico (NO se actualiza si la ruta cambia sin destruir el componente)
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    const tab = this.route.snapshot.queryParams['tab'];
  }

  // Observable \u2014 reactivo (SE actualiza cuando cambian los params)
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.loadUser(params['id']); // Se re-ejecuta al navegar /user/1 \u2192 /user/2
    });
  }
}
// \u26A1 Usar observable cuando el mismo componente puede recibir diferentes params
// (ej: lista de usuarios con navegaci\xF3n entre ellos)`),t(),i(),t(),n(1195,"h4"),e(1196,"Resolvers \u2014 Pre-cargar datos"),t(),n(1197,"pre"),r(),n(1198,"code",2),e(1199,`// Functional resolver (Angular 15+)
export const userResolver: ResolveFn<User> = (route) => {
  const userService = inject(UserService);
  return userService.getById(route.params['id']);
};

// En la ruta
{
  path: 'user/:id',
  component: UserDetailComponent,
  resolve: { user: userResolver }
}

// En el componente \u2014 datos ya disponibles
export class UserDetailComponent {
  private route = inject(ActivatedRoute);
  user = this.route.snapshot.data['user'] as User;
}`),t(),i(),t(),n(1200,"h4"),e(1201,"Router Events"),t(),n(1202,"pre"),r(),n(1203,"code",2),e(1204,`export class AppComponent {
  private router = inject(Router);

  constructor() {
    this.router.events.pipe(
      filter(e => e instanceof NavigationStart)
    ).subscribe(event => {
      console.log('Navegando a:', event.url);
    });
  }
}
// Eventos: NavigationStart \u2192 NavigationEnd / NavigationCancel / NavigationError`),t(),i(),t(),n(1205,"h4"),e(1206,"Nested Routes & Route Data"),t(),n(1207,"pre"),r(),n(1208,"code",2),e(1209,`{
  path: 'admin',
  component: AdminLayoutComponent,
  data: { role: 'admin' }, // datos est\xE1ticos
  children: [
    { path: '', component: AdminDashboard },
    { path: 'users', component: AdminUsers },
    { path: 'settings', component: AdminSettings },
  ]
}`),t(),i(),t(),n(1210,"h4"),e(1211,"Functional Guards (Angular 15+)"),t(),n(1212,"pre"),r(),n(1213,"code",2),e(1214,`// Guard como funci\xF3n \u2014 reemplaza CanActivate class
export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isLoggedIn()) return true;
  return router.createUrlTree(['/login'], {
    queryParams: { returnUrl: state.url }
  });
};

// Uso en rutas
{ path: 'admin', canActivate: [authGuard], component: AdminComponent }`),t(),i(),t()(),n(1215,"div",16)(1216,"h3"),e(1217,"J. Modules vs Standalone"),t(),n(1218,"h4"),e(1219,"NgModule (Cl\xE1sico \u2014 Angular 2-13)"),t(),n(1220,"pre"),r(),n(1221,"code",2),e(1222,`@NgModule({
  declarations: [AppComponent, HeaderComponent], // componentes que PERTENECEN a este m\xF3dulo
  imports: [BrowserModule, FormsModule],          // otros m\xF3dulos necesarios
  exports: [HeaderComponent],                      // lo que otros m\xF3dulos pueden usar
  providers: [AuthService],                        // servicios (scope: este m\xF3dulo)
  bootstrap: [AppComponent]                        // componente ra\xEDz (solo en AppModule)
})
export class AppModule {}

// Bootstrap cl\xE1sico
platformBrowserDynamic().bootstrapModule(AppModule);`),t(),i(),t(),n(1223,"h4"),e(1224,"Standalone (Angular 14+ \u2014 Default en Angular 20)"),t(),n(1225,"pre"),r(),n(1226,"code",2),e(1227,`// En Angular 20, standalone es el default \u2014 no necesitas declararlo
@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule], // importa directamente lo que necesita
  template: '<nav>...</nav>'
})
export class HeaderComponent {}

// Bootstrap standalone
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideAnimations(),
  ]
});`),t(),i(),t(),n(1228,"h4"),e(1229,"Migraci\xF3n NgModule \u2192 Standalone"),t(),n(1230,"table",4)(1231,"thead")(1232,"tr")(1233,"th"),e(1234,"Aspecto"),t(),n(1235,"th"),e(1236,"NgModule"),t(),n(1237,"th"),e(1238,"Standalone"),t()()(),n(1239,"tbody")(1240,"tr")(1241,"td"),e(1242,"Declaraci\xF3n"),t(),n(1243,"td")(1244,"code"),e(1245,"declarations"),t(),e(1246," en m\xF3dulo"),t(),n(1247,"td"),e(1248,"Componente se auto-contiene"),t()(),n(1249,"tr")(1250,"td"),e(1251,"Dependencias"),t(),n(1252,"td"),e(1253,"M\xF3dulo importa otros m\xF3dulos"),t(),n(1254,"td"),e(1255,"Componente importa lo que necesita"),t()(),n(1256,"tr")(1257,"td"),e(1258,"Providers"),t(),n(1259,"td")(1260,"code"),e(1261,"providers"),t(),e(1262," en m\xF3dulo"),t(),n(1263,"td")(1264,"code"),e(1265,"providedIn: 'root'"),t(),e(1266," o "),n(1267,"code"),e(1268,"providers"),t(),e(1269," en componente"),t()(),n(1270,"tr")(1271,"td"),e(1272,"Bootstrap"),t(),n(1273,"td")(1274,"code"),e(1275,"platformBrowserDynamic().bootstrapModule()"),t()(),n(1276,"td")(1277,"code"),e(1278,"bootstrapApplication()"),t()()(),n(1279,"tr")(1280,"td"),e(1281,"Lazy loading"),t(),n(1282,"td")(1283,"code"),e(1284,"loadChildren: () => Module"),t()(),n(1285,"td")(1286,"code"),e(1287,"loadComponent"),t(),e(1288," o "),n(1289,"code"),e(1290,"loadChildren: () => Routes"),t()()(),n(1291,"tr")(1292,"td"),e(1293,"Tree shaking"),t(),n(1294,"td"),e(1295,"\u26A0\uFE0F M\xF3dulo entero"),t(),n(1296,"td"),e(1297,"\u2705 Componente individual"),t()()()(),n(1298,"h4"),e(1299,"\xBFPor qu\xE9 Angular 20 ya no necesita NgModule?"),t(),n(1300,"ul")(1301,"li"),e(1302,"Standalone es el default \u2014 "),n(1303,"code"),e(1304,"standalone: true"),t(),e(1305," ya no es necesario declarar"),t(),n(1306,"li"),e(1307,"Mejor tree shaking \u2014 solo se incluye lo que se importa"),t(),n(1308,"li"),e(1309,"Menos boilerplate \u2014 no m\xE1s archivos "),n(1310,"code"),e(1311,".module.ts"),t()(),n(1312,"li"),e(1313,"Lazy loading m\xE1s simple \u2014 "),n(1314,"code"),e(1315,"loadComponent"),t(),e(1316," directamente"),t(),n(1317,"li"),e(1318,"Providers funcionales: "),n(1319,"code"),e(1320,"provideRouter()"),t(),e(1321,", "),n(1322,"code"),e(1323,"provideHttpClient()"),t(),e(1324,", etc."),t()()(),n(1325,"div",17)(1326,"h3"),e(1327,"K. Decoradores Importantes"),t(),n(1328,"h4"),e(1329,"@Input() / @Output() \u2014 Comunicaci\xF3n Padre-Hijo"),t(),n(1330,"pre"),r(),n(1331,"code",2),e(1332,`// Hijo recibe datos del padre
@Input() title = '';
@Input({ required: true }) userId!: string; // obligatorio
@Input({ transform: booleanAttribute }) disabled = false; // transforma "true" string \u2192 true boolean
@Input({ alias: 'label' }) buttonLabel = ''; // nombre diferente en el template

// Hijo emite eventos al padre
@Output() saved = new EventEmitter<User>();
this.saved.emit(user);

// En el padre:
// <app-child [title]="'Hola'" [userId]="id" (saved)="onSave($event)" />`),t(),i(),t(),n(1333,"h4"),e(1334,"Model Inputs \u2014 Two-Way Binding con Signals (Angular 17+)"),t(),n(1335,"pre"),r(),n(1336,"code",2),e(1337,`// Hijo \u2014 model input (se\xF1al de lectura/escritura)
export class ToggleComponent {
  checked = model(false); // crea un WritableSignal

  toggle() {
    this.checked.update(v => !v);
  }
}

// Padre \u2014 two-way binding con banana-in-a-box
// <app-toggle [(checked)]="isActive" />
// isActive se actualiza autom\xE1ticamente cuando el hijo cambia checked`),t(),i(),t(),n(1338,"h4"),e(1339,"@HostListener / @HostBinding"),t(),n(1340,"pre"),r(),n(1341,"code",2),e(1342,`@Directive({ selector: '[appDropdown]' })
export class DropdownDirective {
  // Bindea una propiedad del elemento host
  @HostBinding('class.open') isOpen = false;

  // Escucha eventos del elemento host
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('document:click', ['$event.target'])
  onDocumentClick(target: HTMLElement) {
    // Cerrar si click fuera del elemento
  }
}`),t(),i(),t(),n(1343,"h4"),e(1344,"host: property \u2014 Alternativa Moderna"),t(),n(1345,"pre"),r(),n(1346,"code",2),e(1347,`// Preferido en Angular moderno \u2014 sin decoradores
@Component({
  selector: 'app-button',
  host: {
    '[class.active]': 'isActive',
    '[attr.aria-pressed]': 'isActive',
    '(click)': 'onClick()',
    'role': 'button',
    '[tabindex]': '0',
  },
  template: '<ng-content />'
})
export class ButtonComponent {
  isActive = false;
  onClick() { this.isActive = !this.isActive; }
}`),t(),i(),t(),n(1348,"h4"),e(1349,"@ContentChild / @ContentChildren"),t(),n(1350,"pre"),r(),n(1351,"code",2),e(1352,`// Acceder al contenido proyectado (ng-content)
@ContentChild('headerRef') header!: ElementRef;
@ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

ngAfterContentInit() {
  // header y tabs est\xE1n disponibles aqu\xED
  console.log('Tabs:', this.tabs.length);
  this.tabs.changes.subscribe(() => {
    console.log('Tabs cambiaron:', this.tabs.length);
  });
}

// Signal alternatives (Angular 17+):
header = contentChild<ElementRef>('headerRef');
tabs = contentChildren(TabComponent);`),t(),i(),t()()())},dependencies:[d],styles:[".learn-page[_ngcontent-%COMP%]{max-width:900px}.card[_ngcontent-%COMP%]{margin-bottom:1rem}.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:var(--accent-green);margin-bottom:.5rem}.card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:var(--accent-blue);margin:.6rem 0 .3rem;font-size:.95rem}.card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:.3rem 0 .5rem 1.2rem}.card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:.25rem;line-height:1.4}.lifecycle-order[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.3rem;margin:.5rem 0}.lifecycle-order[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:var(--bg-code);padding:.2rem .5rem;border-radius:4px;font-size:.8rem;font-family:monospace}.lifecycle-order[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{background:none;color:var(--text-muted)}pre[_ngcontent-%COMP%]{margin:.5rem 0}code.language-typescript[_ngcontent-%COMP%]{font-size:.8rem}.comparison-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;font-size:.82rem;margin:.5rem 0}.comparison-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .comparison-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.4rem .6rem;border:1px solid var(--border);text-align:left}.comparison-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:var(--bg-code);font-weight:600}"]})};export{s as FundamentalsLearnComponent};
