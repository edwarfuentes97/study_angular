import{a as d}from"./chunk-WXOJIICE.js";import"./chunk-BKIDS2JO.js";import{Db as n,Eb as t,Zb as e,fb as o,sa as i,ta as r}from"./chunk-G73V3KC4.js";import"./chunk-2NFLSA4Y.js";var s=class l{static \u0275fac=function(a){return new(a||l)};static \u0275cmp=o({type:l,selectors:[["ng-component"]],decls:2190,vars:0,consts:[["appAutoGlossary","",1,"learn-page"],["id","a-directivas-los-3-tipos",1,"card"],[1,"language-typescript"],["id","b-pipes-pure-vs-impure",1,"card"],[1,"comparison-table"],["id","c-ciclo-de-vida-de-componentes-lifecycle-hooks",1,"card"],[1,"lifecycle-order"],[1,"arrow"],["id","d-content-projection-ng-content",1,"card"],["id","e-viewencapsulation-shadow-dom",1,"card"],[1,"language-css"],["id","f-dependency-injection-di",1,"card"],[1,"code-ref"],["id","core-shared-feature-modules",1,"card"],["id","g-template-reference-variables-amp-viewchild",1,"card"],["id","h-httpclient-amp-llamadas-api",1,"card"],["id","i-routing-avanzado",1,"card"],["id","j-modules-vs-standalone",1,"card"],["id","k-decoradores-importantes",1,"card"]],template:function(a,c){a&1&&(n(0,"div",0)(1,"h2"),e(2,"\u{1F7E2} Angular Fundamentals \u2014 Conceptos Esenciales"),t(),n(3,"p"),e(4,"Todo lo que un Senior Angular developer debe dominar. Estos temas aparecen constantemente en entrevistas t\xE9cnicas."),t(),n(5,"div",1)(6,"h3"),e(7,"A. Directivas \u2014 Los 3 Tipos"),t(),n(8,"p"),e(9,"Las "),n(10,"strong"),e(11,"Directivas"),t(),e(12," son clases que modifican elementos del DOM. Todo en Angular es una directiva bajo el cap\xF3 \u2014 incluso los componentes."),t(),n(13,"h4"),e(14,"1. Componentes (Directivas con Template)"),t(),n(15,"p"),e(16,"El tipo m\xE1s com\xFAn. "),n(17,"code"),e(18,"@Component"),t(),e(19," hereda de "),n(20,"code"),e(21,"@Directive"),t(),e(22," y a\xF1ade un template HTML."),t(),n(23,"pre"),r(),n(24,"code",2),e(25,`@Component({
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

// Uso: <div *appUnless="isLoading">Contenido</div>`),t(),i(),t(),n(101,"h4"),e(102,"Directive Composition API \u2014 hostDirectives (Angular 15+)"),t(),n(103,"p"),e(104,"Permite "),n(105,"strong"),e(106,"componer"),t(),e(107," directivas dentro de un componente u otra directiva sin usarlas en el template. El host adopta su comportamiento \u2014 reutilizaci\xF3n sin herencia de clases."),t(),n(108,"pre"),r(),n(109,"code",2),e(110,`@Directive({ selector: '[appTooltip]' })
export class TooltipDirective {
  @Input() appTooltip = '';
  // l\xF3gica de tooltip...
}

@Component({
  selector: 'app-icon-button',
  hostDirectives: [
    TooltipDirective, // se aplica al host autom\xE1ticamente
    {
      directive: HighlightDirective,
      inputs: ['appHighlight: color'],  // exponer input con alias
      outputs: ['toggled'],             // exponer output
    },
  ],
  template: '<ng-content />'
})
export class IconButtonComponent {
  // El host puede inyectar la instancia de la directiva compuesta
  private tooltip = inject(TooltipDirective);
}

// Uso: <app-icon-button color="cyan" appTooltip="Guardar" />
// Sin hostDirectives habr\xEDa que repetir las directivas en cada template`),t(),i(),t(),n(111,"h4"),e(112,"\u26A0\uFE0F Errores comunes"),t(),n(113,"ul")(114,"li"),e(115,"Manipular el DOM con "),n(116,"code"),e(117,"nativeElement.style"),t(),e(118," directamente \u2014 preferir "),n(119,"code"),e(120,"Renderer2"),t(),e(121," o "),n(122,"code"),e(123,"@HostBinding"),t(),e(124," (SSR-safe y m\xE1s testeable)."),t(),n(125,"li"),e(126,"Aplicar "),n(127,"strong"),e(128,"dos directivas estructurales"),t(),e(129," al mismo elemento ("),n(130,"code"),e(131,"*ngIf"),t(),e(132," + "),n(133,"code"),e(134,"*ngFor"),t(),e(135,") \u2014 no compila; envolver una en "),n(136,"code"),e(137,"<ng-container>"),t(),e(138,"."),t(),n(139,"li"),e(140,"Olvidar los corchetes en el selector: "),n(141,"code"),e(142,"selector: 'appHighlight'"),t(),e(143," crea una directiva de "),n(144,"em"),e(145,"elemento"),t(),e(146,", no de atributo. Debe ser "),n(147,"code"),e(148,"'[appHighlight]'"),t(),e(149,"."),t(),n(150,"li"),e(151,"En "),n(152,"code"),e(153,"hostDirectives"),t(),e(154,", los inputs/outputs de la directiva compuesta NO se exponen por defecto \u2014 hay que listarlos expl\xEDcitamente."),t(),n(155,"li"),e(156,"A\xF1adir listeners con "),n(157,"code"),e(158,"addEventListener"),t(),e(159," sin removerlos en "),n(160,"code"),e(161,"ngOnDestroy"),t(),e(162," \u2014 "),n(163,"code"),e(164,"@HostListener"),t(),e(165," se limpia solo."),t()(),n(166,"h4"),e(167,"\u{1F3A4} Preguntas de entrevista"),t(),n(168,"ul")(169,"li")(170,"strong"),e(171,"\xBFQu\xE9 hace el asterisco en "),n(172,"code"),e(173,"*ngIf"),t(),e(174,"?"),t(),e(175," \u2014 Es az\xFAcar sint\xE1ctico: Angular envuelve el elemento en un "),n(176,"code"),e(177,"<ng-template>"),t(),e(178," y la directiva usa "),n(179,"code"),e(180,"ViewContainerRef"),t(),e(181," para crear/destruir la vista."),t(),n(182,"li")(183,"strong"),e(184,"\xBFDiferencia entre directiva estructural y de atributo?"),t(),e(185," \u2014 La estructural a\xF1ade/quita elementos del DOM (inyecta "),n(186,"code"),e(187,"TemplateRef"),t(),e(188," + "),n(189,"code"),e(190,"ViewContainerRef"),t(),e(191,"); la de atributo modifica un elemento existente (inyecta "),n(192,"code"),e(193,"ElementRef"),t(),e(194,")."),t(),n(195,"li")(196,"strong"),e(197,"\xBFPara qu\xE9 sirve "),n(198,"code"),e(199,"hostDirectives"),t(),e(200,"?"),t(),e(201," \u2014 Composici\xF3n de comportamiento (tooltips, a11y, CDK) sin herencia de clases ni repetir directivas en cada template."),t(),n(202,"li")(203,"strong"),e(204,"\xBFUn componente es una directiva?"),t(),e(205," \u2014 S\xED: "),n(206,"code"),e(207,"@Component"),t(),e(208," extiende "),n(209,"code"),e(210,"@Directive"),t(),e(211," a\xF1adiendo un template. Por eso un elemento solo puede tener UN componente pero varias directivas."),t()()(),n(212,"div",3)(213,"h3"),e(214,"B. Pipes \u2014 Pure vs Impure"),t(),n(215,"p"),e(216,"Los "),n(217,"strong"),e(218,"Pipes"),t(),e(219," transforman datos en el template. Sintaxis: "),n(220,"code"),r(),e(221,"{{ value | pipeName:arg1:arg2 }}"),i(),t()(),n(222,"h4"),e(223,"Built-in Pipes"),t(),n(224,"table",4)(225,"thead")(226,"tr")(227,"th"),e(228,"Pipe"),t(),n(229,"th"),e(230,"Uso"),t(),n(231,"th"),e(232,"Ejemplo"),t()()(),n(233,"tbody")(234,"tr")(235,"td")(236,"code"),e(237,"date"),t()(),n(238,"td"),e(239,"Formatear fechas"),t(),n(240,"td")(241,"code"),r(),e(242,"{{ today | date:'dd/MM/yyyy' }}"),i(),t()()(),n(243,"tr")(244,"td")(245,"code"),e(246,"currency"),t()(),n(247,"td"),e(248,"Formato moneda"),t(),n(249,"td")(250,"code"),r(),e(251,"{{ price | currency:'USD' }}"),i(),t()()(),n(252,"tr")(253,"td")(254,"code"),e(255,"percent"),t()(),n(256,"td"),e(257,"Formato porcentaje"),t(),n(258,"td")(259,"code"),r(),e(260,"{{ 0.85 | percent }}"),i(),t(),e(261," \u2192 85%"),t()(),n(262,"tr")(263,"td")(264,"code"),e(265,"decimal"),t()(),n(266,"td"),e(267,"Formato num\xE9rico"),t(),n(268,"td")(269,"code"),r(),e(270,"{{ 3.14159 | number:'1.2-2' }}"),i(),t(),e(271," \u2192 3.14"),t()(),n(272,"tr")(273,"td")(274,"code"),e(275,"uppercase"),t()(),n(276,"td"),e(277,"May\xFAsculas"),t(),n(278,"td")(279,"code"),r(),e(280,"{{ 'hola' | uppercase }}"),i(),t(),e(281," \u2192 HOLA"),t()(),n(282,"tr")(283,"td")(284,"code"),e(285,"lowercase"),t()(),n(286,"td"),e(287,"Min\xFAsculas"),t(),n(288,"td")(289,"code"),r(),e(290,"{{ 'HOLA' | lowercase }}"),i(),t(),e(291," \u2192 hola"),t()(),n(292,"tr")(293,"td")(294,"code"),e(295,"titlecase"),t()(),n(296,"td"),e(297,"Capitalizar"),t(),n(298,"td")(299,"code"),r(),e(300,"{{ 'hola mundo' | titlecase }}"),i(),t(),e(301," \u2192 Hola Mundo"),t()(),n(302,"tr")(303,"td")(304,"code"),e(305,"json"),t()(),n(306,"td"),e(307,"Debug objetos"),t(),n(308,"td")(309,"code"),r(),e(310,"{{ obj | json }}"),i(),t()()(),n(311,"tr")(312,"td")(313,"code"),e(314,"async"),t()(),n(315,"td"),e(316,"Suscribir Observable/Promise"),t(),n(317,"td")(318,"code"),r(),e(319,"{{ data$ | async }}"),i(),t()()(),n(320,"tr")(321,"td")(322,"code"),e(323,"slice"),t()(),n(324,"td"),e(325,"Subcadena/subarray"),t(),n(326,"td")(327,"code"),r(),e(328,"{{ items | slice:0:5 }}"),i(),t()()(),n(329,"tr")(330,"td")(331,"code"),e(332,"keyvalue"),t()(),n(333,"td"),e(334,"Iterar objetos"),t(),n(335,"td")(336,"code"),r(),e(337,"@for (item of obj | keyvalue; track item.key)"),i(),t()()()()(),n(338,"h4"),e(339,"Pure Pipes (default) \u2014 Mejor Rendimiento"),t(),n(340,"p"),e(341,"Solo se re-ejecutan cuando el "),n(342,"strong"),e(343,"valor de referencia"),t(),e(344," del input cambia. Angular usa "),n(345,"code"),e(346,"==="),t(),e(347," para comparar."),t(),n(348,"ul")(349,"li"),e(350,"\u2705 Rendimiento \xF3ptimo \u2014 se ejecuta pocas veces"),t(),n(351,"li"),e(352,"\u26A0\uFE0F NO detecta cambios dentro de arrays/objetos mutados"),t(),n(353,"li"),e(354,"Para arrays: crear nuevo array ("),n(355,"code"),e(356,"[...arr, newItem]"),t(),e(357,") para triggear el pipe"),t()(),n(358,"pre"),r(),n(359,"code",2),e(360,`@Pipe({ name: 'filterBy' }) // pure: true por defecto
export class FilterByPipe implements PipeTransform {
  transform(items: string[], search: string): string[] {
    if (!search) return items;
    return items.filter(i => i.toLowerCase().includes(search.toLowerCase()));
  }
}`),t(),i(),t(),n(361,"h4"),e(362,"Impure Pipes ("),n(363,"code"),e(364,"pure: false"),t(),e(365,") \u2014 Cuidado con el Rendimiento"),t(),n(366,"p"),e(367,"Se re-ejecutan en "),n(368,"strong"),e(369,"CADA ciclo de Change Detection"),t(),e(370,". Necesarias cuando el array se muta in-place, pero son costosas."),t(),n(371,"pre"),r(),n(372,"code",2),e(373,`@Pipe({ name: 'sortBy', pure: false })
export class SortByPipe implements PipeTransform {
  transform(items: any[], field: string): any[] {
    return [...items].sort((a, b) => a[field] > b[field] ? 1 : -1);
  }
}`),t(),i(),t(),n(374,"h4"),e(375,"\u26A1 Cu\xE1ndo usar cada una"),t(),n(376,"table",4)(377,"thead")(378,"tr")(379,"th"),e(380,"Aspecto"),t(),n(381,"th"),e(382,"Pure"),t(),n(383,"th"),e(384,"Impure"),t()()(),n(385,"tbody")(386,"tr")(387,"td"),e(388,"Ejecuci\xF3n"),t(),n(389,"td"),e(390,"Solo si referencia cambia"),t(),n(391,"td"),e(392,"Cada ciclo de CD"),t()(),n(393,"tr")(394,"td"),e(395,"Rendimiento"),t(),n(396,"td"),e(397,"\u2705 Excelente"),t(),n(398,"td"),e(399,"\u26A0\uFE0F Puede ser costoso"),t()(),n(400,"tr")(401,"td"),e(402,"Detecta mutaciones"),t(),n(403,"td"),e(404,"\u274C No"),t(),n(405,"td"),e(406,"\u2705 S\xED"),t()(),n(407,"tr")(408,"td"),e(409,"Uso ideal"),t(),n(410,"td"),e(411,"Transformaciones simples"),t(),n(412,"td"),e(413,"Arrays mutados, filtros din\xE1micos"),t()()()(),n(414,"h4"),e(415,"Async Pipe \u2014 c\xF3mo funciona por dentro"),t(),n(416,"p"),e(417,"Es un pipe "),n(418,"strong"),e(419,"impure"),t(),e(420,": se suscribe al Observable/Promise, guarda la \xFAltima emisi\xF3n y llama a "),n(421,"code"),e(422,"ChangeDetectorRef.markForCheck()"),t(),e(423," en cada valor. Al destruirse el componente se "),n(424,"strong"),e(425,"desuscribe autom\xE1ticamente"),t(),e(426," \u2014 cero memory leaks."),t(),n(427,"pre"),r(),n(428,"code",2),e(429,`// \u26A0\uFE0F Cada | async crea una suscripci\xF3n INDEPENDIENTE:
<p>{{ (user$ | async)?.name }}</p>
<p>{{ (user$ | async)?.email }}</p>   // \xA12 requests HTTP!

// \u2705 Suscribirse una sola vez con "as"
@if (user$ | async; as user) {
  <p>{{ user.name }}</p>
  <p>{{ user.email }}</p>
}

// \u2705 O compartir la fuente:
user$ = this.http.get<User>('/api/me').pipe(shareReplay(1));`),t(),i(),t(),n(430,"h4"),e(431,"\u26A0\uFE0F Errores comunes"),t(),n(432,"ul")(433,"li"),e(434,"Llamar "),n(435,"strong"),e(436,"m\xE9todos en el template"),t(),e(437," ("),n(438,"code"),r(),e(439,"{{ format(value) }}"),i(),t(),e(440,") \u2014 se re-ejecutan en CADA ciclo de CD. Un pure pipe (o un "),n(441,"code"),e(442,"computed()"),t(),e(443,") memoiza el resultado."),t(),n(444,"li"),e(445,"Hacer un pipe "),n(446,"code"),e(447,"pure: false"),t(),e(448,' "para que funcione" con arrays mutados \u2014 el fix correcto suele ser inmutabilidad ('),n(449,"code"),e(450,"[...arr, item]"),t(),e(451,")."),t(),n(452,"li"),e(453,"Varios "),n(454,"code"),e(455,"| async"),t(),e(456," sobre el mismo Observable fr\xEDo \u2192 m\xFAltiples suscripciones y requests duplicadas."),t(),n(457,"li")(458,"code"),e(459,"DatePipe"),t(),e(460," usa la timezone del navegador por defecto \u2014 cuidado con fechas UTC del backend (se puede pasar timezone como argumento)."),t(),n(461,"li"),e(462,"Olvidar a\xF1adir el pipe a "),n(463,"code"),e(464,"imports"),t(),e(465," del componente standalone \u2014 error de compilaci\xF3n NG8004 (pipe no encontrado)."),t()(),n(466,"h4"),e(467,"\u{1F3A4} Preguntas de entrevista"),t(),n(468,"ul")(469,"li")(470,"strong"),e(471,"\xBFPor qu\xE9 el async pipe es impure?"),t(),e(472," \u2014 Debe re-evaluarse en cada CD porque el Observable puede emitir en cualquier momento; su estado interno cambia sin que cambie la referencia del input."),t(),n(473,"li")(474,"strong"),e(475,"\xBFPipe puro vs m\xE9todo en el template?"),t(),e(476," \u2014 El m\xE9todo se ejecuta en cada ciclo de CD; el pipe puro solo cuando cambia la referencia del argumento (memoizaci\xF3n gratis)."),t(),n(477,"li")(478,"strong"),e(479,"\xBFC\xF3mo pasas varios argumentos a un pipe?"),t(),e(480," \u2014 "),n(481,"code"),r(),e(482,"{{ value | myPipe:arg1:arg2 }}"),i(),t(),e(483,"; llegan como par\xE1metros adicionales de "),n(484,"code"),e(485,"transform()"),t(),e(486,"."),t(),n(487,"li")(488,"strong"),e(489,"\xBFQu\xE9 devuelve "),n(490,"code"),e(491,"async"),t(),e(492," antes de la primera emisi\xF3n?"),t(),e(493," \u2014 "),n(494,"code"),e(495,"null"),t(),e(496,"; por eso se combina con "),n(497,"code"),e(498,"@if ... as"),t(),e(499," o con "),n(500,"code"),e(501,"startWith"),t(),e(502," para un valor inicial."),t()()(),n(503,"div",5)(504,"h3"),e(505,"C. Ciclo de Vida de Componentes (Lifecycle Hooks)"),t(),n(506,"p"),e(507,"Angular llama estos m\xE9todos en momentos espec\xEDficos del ciclo de vida del componente."),t(),n(508,"h4"),e(509,"Orden de Ejecuci\xF3n"),t(),n(510,"div",6)(511,"span"),e(512,"constructor"),t(),n(513,"span",7),e(514,"\u2192"),t(),n(515,"span"),e(516,"ngOnChanges"),t(),n(517,"span",7),e(518,"\u2192"),t(),n(519,"span"),e(520,"ngOnInit"),t(),n(521,"span",7),e(522,"\u2192"),t(),n(523,"span"),e(524,"ngDoCheck"),t(),n(525,"span",7),e(526,"\u2192"),t(),n(527,"span"),e(528,"ngAfterContentInit"),t(),n(529,"span",7),e(530,"\u2192"),t(),n(531,"span"),e(532,"ngAfterContentChecked"),t(),n(533,"span",7),e(534,"\u2192"),t(),n(535,"span"),e(536,"ngAfterViewInit"),t(),n(537,"span",7),e(538,"\u2192"),t(),n(539,"span"),e(540,"ngAfterViewChecked"),t(),n(541,"span",7),e(542,"\u2192"),t(),n(543,"span"),e(544,"ngOnDestroy"),t()(),n(545,"h4")(546,"code"),e(547,"constructor"),t()(),n(548,"p"),e(549,"Se ejecuta cuando Angular instancia la clase. "),n(550,"strong"),e(551,"Solo para inyecci\xF3n de dependencias."),t(),e(552," NO hacer l\xF3gica aqu\xED \u2014 los "),n(553,"code"),e(554,"@Input()"),t(),e(555," a\xFAn no tienen valor."),t(),n(556,"h4")(557,"code"),e(558,"ngOnChanges(changes: SimpleChanges)"),t()(),n(559,"p"),e(560,"Se ejecuta "),n(561,"strong"),e(562,"antes de ngOnInit"),t(),e(563," y cada vez que un "),n(564,"code"),e(565,"@Input()"),t(),e(566," cambia. Recibe un objeto con valores previos y actuales."),t(),n(567,"pre"),r(),n(568,"code",2),e(569,`ngOnChanges(changes: SimpleChanges) {
  if (changes['userId']) {
    console.log('Prev:', changes['userId'].previousValue);
    console.log('Curr:', changes['userId'].currentValue);
    console.log('First:', changes['userId'].firstChange);
  }
}`),t(),i(),t(),n(570,"h4")(571,"code"),e(572,"ngOnInit"),t()(),n(573,"p"),e(574,"Se ejecuta "),n(575,"strong"),e(576,"una sola vez"),t(),e(577," despu\xE9s del primer "),n(578,"code"),e(579,"ngOnChanges"),t(),e(580,". Ideal para:"),t(),n(581,"ul")(582,"li"),e(583,"Llamadas HTTP iniciales"),t(),n(584,"li"),e(585,"Setup de suscripciones"),t(),n(586,"li"),e(587,"L\xF3gica que depende de "),n(588,"code"),e(589,"@Input()"),t(),e(590," valores"),t()(),n(591,"h4")(592,"code"),e(593,"ngDoCheck"),t()(),n(594,"p"),e(595,"Se ejecuta en "),n(596,"strong"),e(597,"cada ciclo de Change Detection"),t(),e(598,". Peligroso para rendimiento. Solo usar para detecci\xF3n de cambios custom que Angular no detecta (ej: mutaciones profundas de objetos)."),t(),n(599,"h4")(600,"code"),e(601,"ngAfterContentInit"),t(),e(602," / "),n(603,"code"),e(604,"ngAfterContentChecked"),t()(),n(605,"p"),e(606,"Se ejecutan despu\xE9s de que Angular proyecta el contenido externo ("),n(607,"code"),e(608,"<ng-content>"),t(),e(609,") en el componente. "),n(610,"code"),e(611,"Init"),t(),e(612," se ejecuta una vez; "),n(613,"code"),e(614,"Checked"),t(),e(615," en cada CD."),t(),n(616,"h4")(617,"code"),e(618,"ngAfterViewInit"),t(),e(619," / "),n(620,"code"),e(621,"ngAfterViewChecked"),t()(),n(622,"p"),e(623,"Se ejecutan despu\xE9s de que Angular inicializa las vistas hijas del componente. Aqu\xED es seguro acceder a "),n(624,"code"),e(625,"@ViewChild"),t(),e(626,"."),t(),n(627,"pre"),r(),n(628,"code",2),e(629,`@ViewChild('myInput') inputRef!: ElementRef;

ngAfterViewInit() {
  // Ahora inputRef est\xE1 disponible
  this.inputRef.nativeElement.focus();
}`),t(),i(),t(),n(630,"h4")(631,"code"),e(632,"ngOnDestroy"),t()(),n(633,"p")(634,"strong"),e(635,"Cleanup obligatorio."),t(),e(636," Se ejecuta cuando el componente se destruye."),t(),n(637,"ul")(638,"li"),e(639,"Cancelar suscripciones: "),n(640,"code"),e(641,"subscription.unsubscribe()"),t()(),n(642,"li"),e(643,"Remover event listeners: "),n(644,"code"),e(645,"removeEventListener()"),t()(),n(646,"li"),e(647,"Limpiar timers: "),n(648,"code"),e(649,"clearInterval()"),t(),e(650,", "),n(651,"code"),e(652,"clearTimeout()"),t()()(),n(653,"h4"),e(654,"Alternativas Modernas (Angular 16+)"),t(),n(655,"pre"),r(),n(656,"code",2),e(657,`// DestroyRef \u2014 alternativa funcional a ngOnDestroy
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
}`),t(),i(),t(),n(658,"h4"),e(659,"\u26A0\uFE0F Errores comunes"),t(),n(660,"ul")(661,"li"),e(662,"Acceder a "),n(663,"code"),e(664,"@ViewChild"),t(),e(665," en "),n(666,"code"),e(667,"ngOnInit"),t(),e(668," \u2014 a\xFAn es "),n(669,"code"),e(670,"undefined"),t(),e(671,"; est\xE1 disponible en "),n(672,"code"),e(673,"ngAfterViewInit"),t(),e(674," (o usar "),n(675,"code"),e(676,"viewChild()"),t(),e(677," signal query)."),t(),n(678,"li"),e(679,"Mutar estado que afecta al template dentro de "),n(680,"code"),e(681,"ngAfterViewInit"),t(),e(682," \u2014 provoca "),n(683,"strong"),e(684,"NG0100: ExpressionChangedAfterItHasBeenCheckedError"),t(),e(685," en dev mode. Soluci\xF3n: mover la l\xF3gica, usar signals, o diferir con "),n(686,"code"),e(687,"afterNextRender"),t(),e(688,"."),t(),n(689,"li"),e(690,"L\xF3gica pesada en "),n(691,"code"),e(692,"ngDoCheck"),t(),e(693," / "),n(694,"code"),e(695,"ngAfterViewChecked"),t(),e(696," \u2014 se ejecutan en CADA ciclo de CD y degradan el rendimiento."),t(),n(697,"li")(698,"code"),e(699,"ngOnChanges"),t(),e(700," NO se dispara al "),n(701,"strong"),e(702,"mutar"),t(),e(703," un objeto/array de un "),n(704,"code"),e(705,"@Input"),t(),e(706," (misma referencia) \u2014 pasar siempre nuevas referencias."),t(),n(707,"li"),e(708,"Olvidar desuscribirse \u2014 preferir "),n(709,"code"),e(710,"takeUntilDestroyed()"),t(),e(711,", "),n(712,"code"),e(713,"| async"),t(),e(714," o "),n(715,"code"),e(716,"toSignal()"),t(),e(717," antes que unsubscribe manual."),t(),n(718,"li"),e(719,"Tocar "),n(720,"code"),e(721,"window"),t(),e(722,"/"),n(723,"code"),e(724,"document"),t(),e(725," en "),n(726,"code"),e(727,"ngOnInit"),t(),e(728," con SSR \u2014 usar "),n(729,"code"),e(730,"afterNextRender()"),t(),e(731,", que solo corre en el browser."),t()(),n(732,"h4"),e(733,"\u{1F3A4} Preguntas de entrevista"),t(),n(734,"ul")(735,"li")(736,"strong"),e(737,"\xBFPor qu\xE9 no leer "),n(738,"code"),e(739,"@Input"),t(),e(740," en el constructor?"),t(),e(741," \u2014 Angular asigna los inputs DESPU\xC9S de instanciar la clase; el primer punto seguro es "),n(742,"code"),e(743,"ngOnChanges"),t(),e(744,"/"),n(745,"code"),e(746,"ngOnInit"),t(),e(747,"."),t(),n(748,"li")(749,"strong"),e(750,"\xBFDiferencia entre "),n(751,"code"),e(752,"ngAfterContentInit"),t(),e(753," y "),n(754,"code"),e(755,"ngAfterViewInit"),t(),e(756,"?"),t(),e(757," \u2014 Content = HTML proyectado con "),n(758,"code"),e(759,"ng-content"),t(),e(760," (se inicializa antes); View = template propio del componente y sus hijos."),t(),n(761,"li")(762,"strong"),e(763,"\xBFQu\xE9 es NG0100 y c\xF3mo se arregla?"),t(),e(764," \u2014 Un valor cambi\xF3 despu\xE9s de que Angular lo verificara en el mismo ciclo de CD. Se arregla moviendo la mutaci\xF3n (ngOnInit, afterNextRender) o haciendo el flujo unidireccional con signals."),t(),n(765,"li")(766,"strong"),e(767,"\xBF"),n(768,"code"),e(769,"afterNextRender"),t(),e(770," vs "),n(771,"code"),e(772,"ngAfterViewInit"),t(),e(773,"?"),t(),e(774," \u2014 "),n(775,"code"),e(776,"afterNextRender"),t(),e(777," solo corre en el browser (SSR-safe) y tras el render REAL del DOM; ideal para medir layout o inicializar librer\xEDas de terceros (charts, maps)."),t(),n(778,"li")(779,"strong"),e(780,"\xBFSe ejecuta "),n(781,"code"),e(782,"ngOnChanges"),t(),e(783," si el componente no tiene inputs?"),t(),e(784," \u2014 No; en ese caso el primer hook tras el constructor es "),n(785,"code"),e(786,"ngOnInit"),t(),e(787,"."),t()()(),n(788,"div",8)(789,"h3"),e(790,"D. Content Projection (ng-content)"),t(),n(791,"p"),e(792,'Mecanismo para pasar HTML del componente padre al hijo. Similar a "slots" en Vue/Web Components.'),t(),n(793,"h4"),e(794,"Single Slot"),t(),n(795,"pre"),r(),n(796,"code",2),e(797,`// card.component.html
<div class="card">
  <ng-content />
</div>

// Uso:
<app-card>
  <p>Este contenido se proyecta dentro del card</p>
</app-card>`),t(),i(),t(),n(798,"h4"),e(799,"Multi-Slot Projection"),t(),n(800,"pre"),r(),n(801,"code",2),e(802,`// panel.component.html
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
</app-panel>`),t(),i(),t(),n(803,"h4"),e(804,"ng-container vs ng-template"),t(),n(805,"table",4)(806,"thead")(807,"tr")(808,"th"),e(809,"Elemento"),t(),n(810,"th"),e(811,"Se renderiza"),t(),n(812,"th"),e(813,"Uso principal"),t()()(),n(814,"tbody")(815,"tr")(816,"td")(817,"code"),e(818,"<ng-container>"),t()(),n(819,"td"),e(820,"\u274C No genera elemento DOM"),t(),n(821,"td"),e(822,"Agrupar directivas sin div extra. Ej: "),n(823,"code"),e(824,'<ng-container *ngIf="x">'),t()()(),n(825,"tr")(826,"td")(827,"code"),e(828,"<ng-template>"),t()(),n(829,"td"),e(830,"\u274C No se renderiza por defecto"),t(),n(831,"td"),e(832,"Definir templates reutilizables. Se instancia con "),n(833,"code"),e(834,"*ngIf else"),t(),e(835,", "),n(836,"code"),e(837,"ngTemplateOutlet"),t(),e(838,", o "),n(839,"code"),e(840,"ViewContainerRef"),t()()()()(),n(841,"h4"),e(842,"ngTemplateOutlet \u2014 Renderizar Templates Din\xE1micamente"),t(),n(843,"pre"),r(),n(844,"code",2),e(845,`// Definir template
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
}`),t(),i(),t(),n(846,"h4"),e(847,"Conditional Projection"),t(),n(848,"pre"),r(),n(849,"code",2),e(850,`// Proyecci\xF3n condicional: solo mostrar si hay contenido
<div class="card">
  @if (showHeader) {
    <header><ng-content select=".header" /></header>
  }
  <ng-content />
</div>`),t(),i(),t(),n(851,"h4"),e(852,"ngProjectAs \u2014 Forzar el slot de proyecci\xF3n"),t(),n(853,"p"),e(854,"Cuando el nodo ra\xEDz no cumple el selector del slot (ej: un "),n(855,"code"),e(856,"ng-container"),t(),e(857,"), "),n(858,"code"),e(859,"ngProjectAs"),t(),e(860," indica en qu\xE9 slot proyectarlo:"),t(),n(861,"pre"),r(),n(862,"code",2),e(863,`<app-panel>
  <!-- ng-container no matchea ".panel-header", pero ngProjectAs lo fuerza -->
  <ng-container ngProjectAs=".panel-header">
    @if (showTitle) {
      <h2>T\xEDtulo condicional</h2>
    }
  </ng-container>
</app-panel>

// Fallback content (Angular 18+): default si NO se proyecta nada
<ng-content select="[header]">
  <h2>T\xEDtulo por defecto</h2>
</ng-content>`),t(),i(),t(),n(864,"h4"),e(865,"\u26A0\uFE0F Errores comunes"),t(),n(866,"ul")(867,"li"),e(868,"El contenido proyectado "),n(869,"strong"),e(870,"pertenece al padre"),t(),e(871,": sus bindings, pipes y ciclo de vida se eval\xFAan en el contexto del padre, no del hijo que lo proyecta."),t(),n(872,"li"),e(873,"Poner "),n(874,"code"),e(875,"ng-content"),t(),e(876," dentro de "),n(877,"code"),e(878,"@if"),t(),e(879," NO destruye/re-crea el contenido: el contenido se instancia UNA sola vez; ocultar el slot solo lo desconecta visualmente."),t(),n(880,"li"),e(881,"Repetir "),n(882,"code"),e(883,"<ng-content />"),t(),e(884," para duplicar contenido no funciona \u2014 solo se proyecta en el primer slot. Para repetir: recibir un "),n(885,"code"),e(886,"TemplateRef"),t(),e(887," y usar "),n(888,"code"),e(889,"ngTemplateOutlet"),t(),e(890,"."),t(),n(891,"li")(892,"code"),e(893,"select"),t(),e(894," solo eval\xFAa el "),n(895,"strong"),e(896,"nodo ra\xEDz"),t(),e(897," del contenido proyectado, no sus descendientes \u2014 por eso existe "),n(898,"code"),e(899,"ngProjectAs"),t(),e(900,"."),t()(),n(901,"h4"),e(902,"\u{1F3A4} Preguntas de entrevista"),t(),n(903,"ul")(904,"li")(905,"strong"),e(906,"\xBFng-content vs ng-template?"),t(),e(907," \u2014 "),n(908,"code"),e(909,"ng-content"),t(),e(910," proyecta HTML del padre tal cual (se instancia siempre, una vez); "),n(911,"code"),e(912,"ng-template"),t(),e(913," define una vista NO renderizada que se instancia bajo demanda (lazy, repetible, con contexto propio)."),t(),n(914,"li")(915,"strong"),e(916,"\xBFC\xF3mo accedes al contenido proyectado desde el hijo?"),t(),e(917," \u2014 "),n(918,"code"),e(919,"@ContentChild"),t(),e(920,"/"),n(921,"code"),e(922,"@ContentChildren"),t(),e(923," (o "),n(924,"code"),e(925,"contentChild()"),t(),e(926," signal), disponibles a partir de "),n(927,"code"),e(928,"ngAfterContentInit"),t(),e(929,"."),t(),n(930,"li")(931,"strong"),e(932,"\xBFC\xF3mo har\xEDas un componente tabla con filas personalizables?"),t(),e(933," \u2014 El consumidor pasa un "),n(934,"code"),e(935,"<ng-template>"),t(),e(936,"; el componente lo captura con "),n(937,"code"),e(938,"@ContentChild(TemplateRef)"),t(),e(939," y lo renderiza por fila con "),n(940,"code"),e(941,"ngTemplateOutlet"),t(),e(942," + contexto ("),n(943,"code"),e(944,"$implicit"),t(),e(945,")."),t()()(),n(946,"div",9)(947,"h3"),e(948,"E. ViewEncapsulation (Shadow DOM)"),t(),n(949,"p"),e(950,"Controla c\xF3mo Angular encapsula los estilos CSS de cada componente."),t(),n(951,"table",4)(952,"thead")(953,"tr")(954,"th"),e(955,"Modo"),t(),n(956,"th"),e(957,"Mecanismo"),t(),n(958,"th"),e(959,"CSS Aislado"),t(),n(960,"th"),e(961,"Cu\xE1ndo usar"),t()()(),n(962,"tbody")(963,"tr")(964,"td")(965,"strong"),e(966,"Emulated"),t(),e(967," (default)"),t(),n(968,"td"),e(969,"Angular a\xF1ade atributos "),n(970,"code"),e(971,"_nghost-xxx"),t(),e(972," y "),n(973,"code"),e(974,"_ngcontent-xxx"),t()(),n(975,"td"),e(976,"\u2705 S\xED (emulado)"),t(),n(977,"td"),e(978,"99% de los casos \u2014 es el default por buena raz\xF3n"),t()(),n(979,"tr")(980,"td")(981,"strong"),e(982,"ShadowDom"),t()(),n(983,"td"),e(984,"Usa Shadow DOM nativo del navegador"),t(),n(985,"td"),e(986,"\u2705 S\xED (nativo)"),t(),n(987,"td"),e(988,"Web Components, aislamiento total. No todos los componentes lo soportan bien"),t()(),n(989,"tr")(990,"td")(991,"strong"),e(992,"None"),t()(),n(993,"td"),e(994,"Sin encapsulaci\xF3n \u2014 estilos globales"),t(),n(995,"td"),e(996,"\u274C No"),t(),n(997,"td"),e(998,"Estilos globales de librer\xEDa, overrides. Usar con cuidado"),t()()()(),n(999,"pre"),r(),n(1e3,"code",2),e(1001,`import { ViewEncapsulation } from '@angular/core';

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
// CSS global: p { color: red; } (\xA1afecta TODOS los <p>!)`),t(),i(),t(),n(1002,"h4"),e(1003,"::ng-deep (Deprecated pero a\xFAn usado)"),t(),n(1004,"p"),e(1005,"Permite que estilos de un componente padre penetren la encapsulaci\xF3n de componentes hijos. "),n(1006,"strong"),e(1007,"Deprecated"),t(),e(1008," pero sin reemplazo oficial a\xFAn."),t(),n(1009,"pre"),r(),n(1010,"code",2),e(1011,`// Rompe la encapsulaci\xF3n del componente hijo
:host ::ng-deep .child-class {
  color: blue;
}

// Alternativa: usar ViewEncapsulation.None en el hijo
// o CSS custom properties (variables) que s\xED atraviesan Shadow DOM`),t(),i(),t(),n(1012,"h4"),e(1013,":host y :host-context"),t(),n(1014,"pre"),r(),n(1015,"code",10),e(1016,`/* :host \u2014 estiliza el ELEMENTO HOST del componente (la etiqueta <app-card>) */
:host {
  display: block;        /* los custom elements son inline por defecto */
  border: 1px solid gray;
}

/* :host(selector) \u2014 solo cuando el host cumple la condici\xF3n */
:host(.selected) { border-color: cyan; }
:host([disabled]) { opacity: 0.5; }

/* :host-context(selector) \u2014 seg\xFAn un ANCESTRO (theming) */
:host-context(.dark-theme) {
  background: #1e1e1e;
  color: white;
}

/* Theming recomendado: CSS custom properties atraviesan cualquier encapsulaci\xF3n */
:host { color: var(--card-text, #333); }`),t(),i(),t(),n(1017,"h4"),e(1018,"\u26A0\uFE0F Errores comunes"),t(),n(1019,"ul")(1020,"li"),e(1021,"Usar "),n(1022,"code"),e(1023,"::ng-deep"),t(),e(1024," SIN "),n(1025,"code"),e(1026,":host"),t(),e(1027," delante \u2014 el estilo compilado se vuelve "),n(1028,"strong"),e(1029,"global"),t(),e(1030," y afecta a toda la app."),t(),n(1031,"li"),e(1032,"Con "),n(1033,"code"),e(1034,"ViewEncapsulation.None"),t(),e(1035,", los estilos se inyectan globales y "),n(1036,"strong"),e(1037,"persisten"),t(),e(1038," aunque el componente ya no est\xE9 en pantalla \u2014 colisiones dif\xEDciles de depurar."),t(),n(1039,"li"),e(1040,"Los estilos Emulated NO aplican a HTML insertado con "),n(1041,"code"),e(1042,"[innerHTML]"),t(),e(1043," \u2014 ese markup no recibe los atributos "),n(1044,"code"),e(1045,"_ngcontent"),t(),e(1046,"."),t(),n(1047,"li"),e(1048,"Olvidar que el host es "),n(1049,"code"),e(1050,"display: inline"),t(),e(1051,' por defecto \u2014 el cl\xE1sico "mi componente no toma width/height" se arregla con '),n(1052,"code"),e(1053,":host { display: block }"),t(),e(1054,"."),t()(),n(1055,"h4"),e(1056,"\u{1F3A4} Preguntas de entrevista"),t(),n(1057,"ul")(1058,"li")(1059,"strong"),e(1060,"\xBFC\xF3mo emula Angular el Shadow DOM?"),t(),e(1061," \u2014 A\xF1ade atributos \xFAnicos ("),n(1062,"code"),e(1063,"_nghost-xxx"),t(),e(1064,", "),n(1065,"code"),e(1066,"_ngcontent-xxx"),t(),e(1067,") a los elementos y reescribe los selectores CSS para incluirlos."),t(),n(1068,"li")(1069,"strong"),e(1070,"\xBFC\xF3mo estilizar un componente de librer\xEDa sin ::ng-deep?"),t(),e(1071," \u2014 CSS custom properties, inputs de clase/estilo, la API de theming de la librer\xEDa, o estilos globales bien acotados en "),n(1072,"code"),e(1073,"styles.css"),t(),e(1074,"."),t(),n(1075,"li")(1076,"strong"),e(1077,"\xBFCu\xE1ndo usar ShadowDom real?"),t(),e(1078," \u2014 Al exportar Web Components (Angular Elements) que deben aislarse en p\xE1ginas de terceros. Ojo: los estilos globales de la app NO entran al shadow root."),t(),n(1079,"li")(1080,"strong"),e(1081,"\xBFPara qu\xE9 sirve "),n(1082,"code"),e(1083,":host-context"),t(),e(1084,"?"),t(),e(1085," \u2014 Aplicar estilos condicionados por una clase de un ancestro fuera del componente (ej: "),n(1086,"code"),e(1087,".dark-theme"),t(),e(1088," en "),n(1089,"code"),e(1090,"<body>"),t(),e(1091,") sin romper la encapsulaci\xF3n."),t()()(),n(1092,"div",11)(1093,"h3"),e(1094,"F. Dependency Injection (DI) \u2014 En Profundidad"),t(),n(1095,"p"),e(1096,"El sistema de DI de Angular es jer\xE1rquico, potente y a veces confuso. Dominar DI es clave para entrevistas senior."),t(),n(1097,"h4"),e(1098,"\xBFC\xF3mo funciona DI internamente?"),t(),n(1099,"p"),e(1100," Cuando Angular necesita crear un componente o servicio, mira sus dependencias (par\xE1metros del constructor o "),n(1101,"code"),e(1102,"inject()"),t(),e(1103,"). Para cada dependencia, busca un "),n(1104,"strong"),e(1105,"provider"),t(),e(1106," registrado subiendo por el "),n(1107,"strong"),e(1108,"\xE1rbol de injectors"),t(),e(1109,": "),t(),n(1110,"ol")(1111,"li")(1112,"strong"),e(1113,"ElementInjector"),t(),e(1114," del componente actual (providers en @Component)"),t(),n(1115,"li"),e(1116,"ElementInjector del componente padre, abuelo, etc."),t(),n(1117,"li")(1118,"strong"),e(1119,"ModuleInjector"),t(),e(1120," del m\xF3dulo que declar\xF3 el componente"),t(),n(1121,"li"),e(1122,"ModuleInjector ra\xEDz (root) \u2014 donde viven los "),n(1123,"code"),e(1124,"providedIn: 'root'"),t()(),n(1125,"li")(1126,"strong"),e(1127,"PlatformInjector"),t(),e(1128," \u2014 nivel plataforma (raro, para multi-app)"),t(),n(1129,"li")(1130,"strong"),e(1131,"NullInjector"),t(),e(1132," \u2014 si llega aqu\xED, lanza error (a menos que sea @Optional)"),t()(),n(1133,"pre"),r(),n(1134,"code",2),e(1135,`// Visualizaci\xF3n del \xE1rbol de injectors:
//
// NullInjector (throws error)
//   \u2514\u2500 PlatformInjector
//       \u2514\u2500 RootModuleInjector (providedIn: 'root')
//           \u251C\u2500 LazyModuleInjector A (providers del lazy module)
//           \u2502   \u2514\u2500 ElementInjector ComponentA (providers en @Component)
//           \u2502       \u2514\u2500 ElementInjector ChildComponent
//           \u2514\u2500 LazyModuleInjector B
//               \u2514\u2500 ElementInjector ComponentB`),t(),i(),t(),n(1136,"h4"),e(1137,"providedIn \u2014 Las opciones y cu\xE1ndo usar cada una"),t(),n(1138,"table",4)(1139,"thead")(1140,"tr")(1141,"th"),e(1142,"Valor"),t(),n(1143,"th"),e(1144,"Comportamiento"),t(),n(1145,"th"),e(1146,"Tree-shakeable"),t(),n(1147,"th"),e(1148,"Cu\xE1ndo usar"),t()()(),n(1149,"tbody")(1150,"tr")(1151,"td")(1152,"code"),e(1153,"providedIn: 'root'"),t()(),n(1154,"td"),e(1155,"Singleton global \u2014 UNA instancia para toda la app"),t(),n(1156,"td"),e(1157,"\u2705 S\xED"),t(),n(1158,"td")(1159,"strong"),e(1160,"Opci\xF3n por defecto"),t(),e(1161,". Auth, HTTP, config, state"),t()(),n(1162,"tr")(1163,"td")(1164,"code"),e(1165,"providedIn: 'any'"),t()(),n(1166,"td"),e(1167,"Una instancia por cada lazy-loaded module + una para eager modules"),t(),n(1168,"td"),e(1169,"\u2705 S\xED"),t(),n(1170,"td"),e(1171,"Servicios que necesitan estado aislado por feature"),t()(),n(1172,"tr")(1173,"td")(1174,"code"),e(1175,"providedIn: 'platform'"),t()(),n(1176,"td"),e(1177,"Compartido entre m\xFAltiples apps Angular en la misma p\xE1gina"),t(),n(1178,"td"),e(1179,"\u2705 S\xED"),t(),n(1180,"td"),e(1181,"Micro-frontends con shared state"),t()(),n(1182,"tr")(1183,"td")(1184,"code"),e(1185,"providers: []"),t(),e(1186," en @Component"),t(),n(1187,"td"),e(1188,"Nueva instancia por CADA instancia del componente"),t(),n(1189,"td"),e(1190,"\u274C No"),t(),n(1191,"td"),e(1192,"Estado por componente (ej: FormStateService)"),t()(),n(1193,"tr")(1194,"td")(1195,"code"),e(1196,"providers: []"),t(),e(1197," en ruta"),t(),n(1198,"td"),e(1199,"Singleton para esa ruta y sus hijos"),t(),n(1200,"td"),e(1201,"\u274C No"),t(),n(1202,"td"),e(1203,"Feature-level services (NgRx provideState)"),t()(),n(1204,"tr")(1205,"td")(1206,"code"),e(1207,"providers: []"),t(),e(1208," en @NgModule"),t(),n(1209,"td"),e(1210,"Singleton en ese module injector"),t(),n(1211,"td"),e(1212,"\u274C No"),t(),n(1213,"td"),e(1214,"Legacy \u2014 evitar en apps nuevas"),t()()()(),n(1215,"h4"),e(1216,"\u26A0\uFE0F El problema del Singleton en Lazy Modules"),t(),n(1217,"p"),e(1218," Si un servicio se registra en "),n(1219,"code"),e(1220,"providers"),t(),e(1221," de un "),n(1222,"strong"),e(1223,"lazy-loaded module"),t(),e(1224,", Angular crea un "),n(1225,"strong"),e(1226,"nuevo injector hijo"),t(),e(1227,", y ese servicio es un "),n(1228,"strong"),e(1229,"singleton SOLO dentro de ese module"),t(),e(1230,", NO el mismo que el del root. Esto causa bugs sutiles: "),t(),n(1231,"pre"),r(),n(1232,"code",2),e(1233,`// \u274C PROBLEMA: AuthService registrado en SharedModule
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
}`),t(),i(),t(),n(1234,"h4"),e(1235,"Provider Types \u2014 Todos los tipos en detalle"),t(),n(1236,"pre"),r(),n(1237,"code",2),e(1238,`// === useClass \u2014 reemplazar implementaci\xF3n ===
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
]`),t(),i(),t(),n(1239,"h4"),e(1240,"InjectionToken \u2014 Para valores no-clase"),t(),n(1241,"p"),e(1242," Las clases sirven como su propio token de DI, pero para valores primitivos (strings, n\xFAmeros, objetos de config) necesitas un "),n(1243,"code"),e(1244,"InjectionToken"),t(),e(1245,": "),t(),n(1246,"pre"),r(),n(1247,"code",2),e(1248,`// Crear token tipado
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
}`),t(),i(),t(),n(1249,"h4"),e(1250,"Multi Providers \u2014 Arrays de servicios"),t(),n(1251,"pre"),r(),n(1252,"code",2),e(1253,`// Cuando VARIOS providers deben registrarse bajo el mismo token
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
]`),t(),i(),t(),n(1254,"h4"),e(1255,"inject() vs Constructor \u2014 Comparaci\xF3n completa"),t(),n(1256,"pre"),r(),n(1257,"code",2),e(1258,`// \u2705 MODERNO: inject() function (Angular 14+, preferido)
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
}`),t(),i(),t(),n(1259,"h4"),e(1260,"Decoradores de resoluci\xF3n avanzados"),t(),n(1261,"pre"),r(),n(1262,"code",2),e(1263,`// @Optional / { optional: true } \u2014 no lanza error si no se encuentra
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
private parentOpt = inject(MyService, { skipSelf: true, optional: true });`),t(),i(),t(),n(1264,"h4"),e(1265,"Patr\xF3n: Component-level providers para estado local"),t(),n(1266,"pre"),r(),n(1267,"code",2),e(1268,`// Servicio que maneja estado de un formulario
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
}`),t(),i(),t(),n(1269,"h4"),e(1270,"\u26A0\uFE0F Errores comunes"),t(),n(1271,"ul")(1272,"li"),e(1273,"Llamar "),n(1274,"code"),e(1275,"inject()"),t(),e(1276," fuera de un "),n(1277,"strong"),e(1278,"contexto de inyecci\xF3n"),t(),e(1279," (dentro de un callback o m\xE9todo) \u2014 error "),n(1280,"strong"),e(1281,"NG0203"),t(),e(1282,". Solo vale en constructor, inicializadores de campo, factories y funciones provide*. Para diferirlo: "),n(1283,"code"),e(1284,"runInInjectionContext(injector, () => ...)"),t(),e(1285,"."),t(),n(1286,"li"),e(1287,"Dependencia circular entre servicios (A inyecta B y B inyecta A) \u2014 error "),n(1288,"strong"),e(1289,"NG0200"),t(),e(1290,". Redise\xF1ar (extraer un tercer servicio) o, como \xFAltimo recurso, "),n(1291,"code"),e(1292,"forwardRef"),t(),e(1293,"."),t(),n(1294,"li"),e(1295,"Olvidar "),n(1296,"code"),e(1297,"multi: true"),t(),e(1298," al a\xF1adir a un token multi-provider \u2014 "),n(1299,"strong"),e(1300,"sobrescribes"),t(),e(1301," todos los providers anteriores en vez de a\xF1adir uno m\xE1s."),t(),n(1302,"li"),e(1303,"Registrar en "),n(1304,"code"),e(1305,"providers"),t(),e(1306," de "),n(1307,"code"),e(1308,"@Component"),t(),e(1309," un servicio que esperabas singleton \u2014 cada instancia del componente crea una nueva instancia del servicio."),t(),n(1310,"li"),e(1311,"Servicios con estado en providers de m\xF3dulos/rutas lazy \u2014 instancias duplicadas silenciosas (ver secci\xF3n del singleton en lazy modules)."),t()(),n(1312,"h4"),e(1313,"\u{1F3A4} Preguntas de entrevista"),t(),n(1314,"ul")(1315,"li")(1316,"strong"),e(1317,"\xBFC\xF3mo resuelve Angular una dependencia?"),t(),e(1318," \u2014 Sube por el \xE1rbol: ElementInjector del componente \u2192 padres \u2192 EnvironmentInjector (root) \u2192 NullInjector (error NG0201 si no la encuentra)."),t(),n(1319,"li")(1320,"strong"),e(1321,"\xBFQu\xE9 pasa si padre e hijo proveen el mismo token?"),t(),e(1322," \u2014 Cada uno recibe la instancia m\xE1s cercana en el \xE1rbol: el hijo la suya, el padre la suya (shadowing jer\xE1rquico)."),t(),n(1323,"li")(1324,"strong"),e(1325,"\xBFCu\xE1ndo es obligatorio "),n(1326,"code"),e(1327,"inject()"),t(),e(1328," en vez del constructor?"),t(),e(1329," \u2014 En funciones sin clase: functional guards, resolvers, interceptors y factory functions."),t(),n(1330,"li")(1331,"strong"),e(1332,"\xBFPor qu\xE9 "),n(1333,"code"),e(1334,"InjectionToken"),t(),e(1335," y no un string como token?"),t(),e(1336," \u2014 Los strings pueden colisionar y no tienen tipo; el token es \xFAnico por referencia y est\xE1 tipado gen\xE9ricamente."),t(),n(1337,"li")(1338,"strong"),e(1339,"\xBFQu\xE9 significa que un provider sea tree-shakeable?"),t(),e(1340," \u2014 Con "),n(1341,"code"),e(1342,"providedIn"),t(),e(1343,", el servicio se registra desde s\xED mismo (no desde un m\xF3dulo), as\xED el bundler lo elimina del bundle si nadie lo inyecta."),t()(),n(1344,"div",12),e(1345," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(1346,"ul")(1347,"li")(1348,"code"),e(1349,"core/services/progress.service.ts"),t(),e(1350," \u2014 providedIn: 'root', singleton global con Signals"),t(),n(1351,"li")(1352,"code"),e(1353,"core/services/mock-api.service.ts"),t(),e(1354," \u2014 providedIn: 'root', servicio HTTP simulado"),t(),n(1355,"li")(1356,"code"),e(1357,"core/interceptors/auth.interceptor.ts"),t(),e(1358," \u2014 Functional interceptor con inject()"),t(),n(1359,"li")(1360,"code"),e(1361,"core/guards/auth.guard.ts"),t(),e(1362," \u2014 Functional guard con inject()"),t(),n(1363,"li")(1364,"code"),e(1365,"app.config.ts"),t(),e(1366," \u2014 provideHttpClient(withInterceptors([...])), provideStore()"),t(),n(1367,"li")(1368,"code"),e(1369,"features/ngrx-lab/ngrx-lab.routes.ts"),t(),e(1370," \u2014 providers a nivel de ruta (provideState, provideEffects)"),t()()()(),n(1371,"div",13)(1372,"h3"),e(1373,"F2. Core Module vs Shared Module vs Feature Module"),t(),n(1374,"p"),e(1375," Aunque Angular 20 usa Standalone por defecto, estos conceptos arquitect\xF3nicos siguen siendo preguntas frecuentes en entrevistas y definen c\xF3mo organizar providers y c\xF3digo. "),t(),n(1376,"h4"),e(1377,"Core Module (ahora: carpeta core/)"),t(),n(1378,"p"),e(1379,"Contiene servicios "),n(1380,"strong"),e(1381,"singleton"),t(),e(1382," que se usan en TODA la app. Se importa UNA sola vez en el root."),t(),n(1383,"ul")(1384,"li"),e(1385,"Auth service, API services, config service"),t(),n(1386,"li"),e(1387,"HTTP interceptors"),t(),n(1388,"li"),e(1389,"Route guards"),t(),n(1390,"li"),e(1391,"Modelos de dominio globales"),t(),n(1392,"li")(1393,"strong"),e(1394,"Regla"),t(),e(1395,": todo en core/ tiene "),n(1396,"code"),e(1397,"providedIn: 'root'"),t(),e(1398," o se registra en app.config"),t()(),n(1399,"pre"),r(),n(1400,"code",2),e(1401,`// Patr\xF3n legacy: CoreModule con guard anti-reimportaci\xF3n
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
//   guards/auth.guard.ts         \u2192 CanActivateFn`),t(),i(),t(),n(1402,"h4"),e(1403,"Shared Module (ahora: carpeta shared/)"),t(),n(1404,"p"),e(1405," Contiene componentes, directivas y pipes "),n(1406,"strong"),e(1407,"reutilizables y sin estado"),t(),e(1408,". Se puede importar en cualquier feature. "),t(),n(1409,"ul")(1410,"li"),e(1411,"Componentes UI: Button, Card, Modal, Spinner, Table"),t(),n(1412,"li"),e(1413,"Directivas: Highlight, Tooltip, Autosize"),t(),n(1414,"li"),e(1415,"Pipes: FormatDate, FilterBy, TruncateText"),t(),n(1416,"li")(1417,"strong"),e(1418,"Regla"),t(),e(1419,": NUNCA incluir servicios con estado en shared/"),t(),n(1420,"li")(1421,"strong"),e(1422,"Regla"),t(),e(1423,": shared/ NO importa de core/ ni de features/"),t()(),n(1424,"pre"),r(),n(1425,"code",2),e(1426,`// Patr\xF3n legacy: SharedModule que re-exporta todo
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
})`),t(),i(),t(),n(1427,"h4"),e(1428,"Feature Module (ahora: carpeta features/)"),t(),n(1429,"p"),e(1430," Cada feature es autocontenida: sus componentes, servicios, rutas y estado. Se carga con "),n(1431,"strong"),e(1432,"lazy loading"),t(),e(1433,". "),t(),n(1434,"pre"),r(),n(1435,"code",2),e(1436,`// Patr\xF3n legacy: Feature NgModule
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
  import('./features/products/products.routes').then(m => m.PRODUCT_ROUTES) }`),t(),i(),t(),n(1437,"h4"),e(1438,"Tabla resumen: Core vs Shared vs Feature"),t(),n(1439,"table",4)(1440,"thead")(1441,"tr")(1442,"th"),e(1443,"Aspecto"),t(),n(1444,"th"),e(1445,"Core"),t(),n(1446,"th"),e(1447,"Shared"),t(),n(1448,"th"),e(1449,"Feature"),t()()(),n(1450,"tbody")(1451,"tr")(1452,"td")(1453,"strong"),e(1454,"Contiene"),t()(),n(1455,"td"),e(1456,"Services, guards, interceptors"),t(),n(1457,"td"),e(1458,"Components, directives, pipes"),t(),n(1459,"td"),e(1460,"Todo lo de un dominio"),t()(),n(1461,"tr")(1462,"td")(1463,"strong"),e(1464,"Scope"),t()(),n(1465,"td"),e(1466,"Singleton global"),t(),n(1467,"td"),e(1468,"Reutilizable, sin estado"),t(),n(1469,"td"),e(1470,"Autocontenido"),t()(),n(1471,"tr")(1472,"td")(1473,"strong"),e(1474,"Se importa en"),t()(),n(1475,"td"),e(1476,"Solo AppModule/app.config"),t(),n(1477,"td"),e(1478,"Cualquier feature"),t(),n(1479,"td"),e(1480,"Lazy-loaded por ruta"),t()(),n(1481,"tr")(1482,"td")(1483,"strong"),e(1484,"Providers?"),t()(),n(1485,"td"),e(1486,"\u2705 S\xED (providedIn: root)"),t(),n(1487,"td"),e(1488,"\u274C NUNCA servicios con estado"),t(),n(1489,"td"),e(1490,"\u2705 Feature-level"),t()(),n(1491,"tr")(1492,"td")(1493,"strong"),e(1494,"Ejemplo"),t()(),n(1495,"td"),e(1496,"AuthService, ConfigService"),t(),n(1497,"td"),e(1498,"ButtonComponent, FilterPipe"),t(),n(1499,"td"),e(1500,"ProductListComponent + store"),t()()()(),n(1501,"h4"),e(1502,"forRoot() / forChild() Pattern (legacy pero preguntado en entrevistas)"),t(),n(1503,"pre"),r(),n(1504,"code",2),e(1505,`// Problema: SharedModule con providers se importa en m\xFAltiples lazy modules
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
// Componentes se importan directamente`),t(),i(),t(),n(1506,"div",12),e(1507," \u{1F4C2} Estructura actual del proyecto: "),n(1508,"ul")(1509,"li")(1510,"code"),e(1511,"core/services/"),t(),e(1512," \u2014 Servicios singleton (progress, mock-api) con providedIn: 'root'"),t(),n(1513,"li")(1514,"code"),e(1515,"core/interceptors/"),t(),e(1516," \u2014 Interceptor funcional"),t(),n(1517,"li")(1518,"code"),e(1519,"core/guards/"),t(),e(1520," \u2014 Guard funcional"),t(),n(1521,"li")(1522,"code"),e(1523,"shared/components/"),t(),e(1524," \u2014 Componentes reutilizables (lab-layout, global-search)"),t(),n(1525,"li")(1526,"code"),e(1527,"shared/directives/"),t(),e(1528," \u2014 Directiva auto-glossary"),t(),n(1529,"li")(1530,"code"),e(1531,"shared/services/"),t(),e(1532," \u2014 Glossary service (providedIn: 'root')"),t(),n(1533,"li")(1534,"code"),e(1535,"features/*/"),t(),e(1536," \u2014 Cada feature con sus propias rutas, componentes y store"),t()()()(),n(1537,"div",14)(1538,"h3"),e(1539,"G. Template Reference Variables & ViewChild"),t(),n(1540,"p"),e(1541,"Acceder a elementos del DOM o instancias de componentes hijos desde la clase."),t(),n(1542,"h4"),e(1543,"Template Reference Variables ("),n(1544,"code"),e(1545,"#ref"),t(),e(1546,")"),t(),n(1547,"pre"),r(),n(1548,"code",2),e(1549,`// En el template \u2014 acceso directo al elemento o componente
<input #nameInput type="text">
<button (click)="greet(nameInput.value)">Saludar</button>

// Si es un componente, #ref apunta a la instancia del componente
<app-timer #timer />
<button (click)="timer.start()">Start</button>`),t(),i(),t(),n(1550,"h4"),e(1551,"@ViewChild / @ViewChildren"),t(),n(1552,"pre"),r(),n(1553,"code",2),e(1554,`// Acceder desde la clase del componente
@ViewChild('nameInput') inputRef!: ElementRef<HTMLInputElement>;
@ViewChild(TimerComponent) timer!: TimerComponent;
@ViewChildren(ItemComponent) items!: QueryList<ItemComponent>;

ngAfterViewInit() {
  this.inputRef.nativeElement.focus();
  this.timer.start();
  this.items.forEach(item => item.highlight());
}`),t(),i(),t(),n(1555,"h4"),e(1556,"ElementRef vs TemplateRef vs ViewContainerRef"),t(),n(1557,"table",4)(1558,"thead")(1559,"tr")(1560,"th"),e(1561,"Clase"),t(),n(1562,"th"),e(1563,"Qu\xE9 representa"),t(),n(1564,"th"),e(1565,"Uso principal"),t()()(),n(1566,"tbody")(1567,"tr")(1568,"td")(1569,"code"),e(1570,"ElementRef"),t()(),n(1571,"td"),e(1572,"Wrapper del elemento DOM nativo"),t(),n(1573,"td"),e(1574,"Acceso a "),n(1575,"code"),e(1576,"nativeElement"),t(),e(1577,". \u26A0\uFE0F No SSR-safe"),t()(),n(1578,"tr")(1579,"td")(1580,"code"),e(1581,"TemplateRef"),t()(),n(1582,"td"),e(1583,"Referencia a un "),n(1584,"code"),e(1585,"<ng-template>"),t()(),n(1586,"td"),e(1587,"Crear vistas embebidas din\xE1micamente"),t()(),n(1588,"tr")(1589,"td")(1590,"code"),e(1591,"ViewContainerRef"),t()(),n(1592,"td"),e(1593,"Punto de anclaje en el DOM"),t(),n(1594,"td"),e(1595,"Insertar/remover vistas y componentes din\xE1micamente"),t()()()(),n(1596,"h4"),e(1597,"Signal-based Queries (Angular 17+)"),t(),n(1598,"pre"),r(),n(1599,"code",2),e(1600,`// Alternativas modernas basadas en signals
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
}`),t(),i(),t(),n(1601,"h4"),e(1602,"Opciones: static y read"),t(),n(1603,"pre"),r(),n(1604,"code",2),e(1605,`// { static: true } \u2014 disponible YA en ngOnInit,
// PERO solo si el elemento NO est\xE1 dentro de @if/@for/ng-template
@ViewChild('title', { static: true }) titleRef!: ElementRef;
ngOnInit() { this.titleRef.nativeElement.focus(); } // \u2705

// { read: ... } \u2014 QU\xC9 extraer del elemento consultado
@ViewChild('host', { read: ViewContainerRef }) vcRef!: ViewContainerRef;
@ViewChild(MyComponent, { read: ElementRef }) el!: ElementRef;
// Sin read, Angular devuelve la instancia del componente si lo es,
// o ElementRef si es un elemento plano`),t(),i(),t(),n(1606,"h4"),e(1607,"\u26A0\uFE0F Errores comunes"),t(),n(1608,"ul")(1609,"li"),e(1610,"Leer "),n(1611,"code"),e(1612,"@ViewChild"),t(),e(1613," en "),n(1614,"code"),e(1615,"ngOnInit"),t(),e(1616," sin "),n(1617,"code"),e(1618,"static: true"),t(),e(1619," \u2014 es "),n(1620,"code"),e(1621,"undefined"),t(),e(1622," hasta "),n(1623,"code"),e(1624,"ngAfterViewInit"),t(),e(1625,"."),t(),n(1626,"li"),e(1627,"Consultar un elemento dentro de "),n(1628,"code"),e(1629,"@if"),t(),e(1630," \u2014 la query cl\xE1sica no lo encuentra hasta que se renderiza. Soluci\xF3n: un setter en el "),n(1631,"code"),e(1632,"@ViewChild"),t(),e(1633,", o "),n(1634,"code"),e(1635,"viewChild()"),t(),e(1636," signal + "),n(1637,"code"),e(1638,"effect()"),t(),e(1639,"."),t(),n(1640,"li"),e(1641,"Manipular "),n(1642,"code"),e(1643,"nativeElement"),t(),e(1644," para todo \u2014 para escribir en el DOM preferir bindings del template o "),n(1645,"code"),e(1646,"Renderer2"),t(),e(1647," (SSR y seguridad)."),t(),n(1648,"li"),e(1649,"Usar "),n(1650,"code"),e(1651,"@ViewChild"),t(),e(1652," para contenido proyectado \u2014 eso es "),n(1653,"code"),e(1654,"@ContentChild"),t(),e(1655," (vive en el content, no en la view)."),t(),n(1656,"li"),e(1657,"Suscribirse a "),n(1658,"code"),e(1659,"QueryList.changes"),t(),e(1660," sin desuscribirse \u2014 memory leak cl\xE1sico."),t()(),n(1661,"h4"),e(1662,"\u{1F3A4} Preguntas de entrevista"),t(),n(1663,"ul")(1664,"li")(1665,"strong"),e(1666,"\xBFViewChild vs ContentChild?"),t(),e(1667," \u2014 ViewChild consulta el template PROPIO del componente; ContentChild consulta lo proyectado por el padre v\xEDa "),n(1668,"code"),e(1669,"ng-content"),t(),e(1670,". Disponibles en AfterViewInit y AfterContentInit respectivamente."),t(),n(1671,"li")(1672,"strong"),e(1673,"\xBFVentajas de "),n(1674,"code"),e(1675,"viewChild()"),t(),e(1676," signal query?"),t(),e(1677," \u2014 Es reactiva (usable en "),n(1678,"code"),e(1679,"computed"),t(),e(1680,"/"),n(1681,"code"),e(1682,"effect"),t(),e(1683,"), elimina los problemas de timing de los hooks, y "),n(1684,"code"),e(1685,"viewChild.required()"),t(),e(1686," falla expl\xEDcitamente si no existe."),t(),n(1687,"li")(1688,"strong"),e(1689,"\xBFD\xF3nde es visible una template reference variable?"),t(),e(1690," \u2014 En todo el template, salvo que se declare dentro de un "),n(1691,"code"),e(1692,"ng-template"),t(),e(1693," o bloque estructural: ah\xED queda acotada a esa vista."),t()()(),n(1694,"div",15)(1695,"h3"),e(1696,"H. HttpClient & Llamadas API"),t(),n(1697,"h4"),e(1698,"Configuraci\xF3n"),t(),n(1699,"p"),e(1700," Angular usa "),n(1701,"strong"),e(1702,"HttpClient"),t(),e(1703," del paquete "),n(1704,"code"),e(1705,"@angular/common/http"),t(),e(1706,". Se registra con "),n(1707,"code"),e(1708,"provideHttpClient()"),t(),e(1709," en la configuraci\xF3n de la app: "),t(),n(1710,"pre"),r(),n(1711,"code",2),e(1712,`// app.config.ts
import { provideHttpClient, withInterceptors, withFetch } from '@angular/common/http';

export const appConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor, loggingInterceptor]),
      withFetch()  // usa fetch() API en vez de XMLHttpRequest
    ),
  ]
};`),t(),i(),t(),n(1713,"h4"),e(1714,"M\xE9todos HTTP principales"),t(),n(1715,"p"),e(1716,"HttpClient retorna "),n(1717,"strong"),e(1718,"Observables"),t(),e(1719," \u2014 son lazy, no se ejecutan hasta "),n(1720,"code"),e(1721,".subscribe()"),t(),e(1722," o "),n(1723,"code"),e(1724,"| async"),t(),e(1725,":"),t(),n(1726,"pre"),r(),n(1727,"code",2),e(1728,`import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

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
}`),t(),i(),t(),n(1729,"h4"),e(1730,"Headers personalizados"),t(),n(1731,"pre"),r(),n(1732,"code",2),e(1733,`const headers = new HttpHeaders()
  .set('Authorization', \`Bearer \${token}\`)
  .set('Content-Type', 'application/json');

this.http.get<Data>('/api/data', { headers });`),t(),i(),t(),n(1734,"h4"),e(1735,"observe y responseType \u2014 M\xE1s all\xE1 del body"),t(),n(1736,"p"),e(1737,"Por defecto HttpClient entrega solo el "),n(1738,"strong"),e(1739,"body"),t(),e(1740," parseado como JSON. Con "),n(1741,"code"),e(1742,"observe"),t(),e(1743," y "),n(1744,"code"),e(1745,"responseType"),t(),e(1746," controlas qu\xE9 recibes:"),t(),n(1747,"pre"),r(),n(1748,"code",2),e(1749,`// observe: 'response' \u2014 HttpResponse completo (status, headers, body)
this.http.get<User[]>('/api/users', { observe: 'response' })
  .subscribe(res => {
    console.log(res.status);                        // 200
    console.log(res.headers.get('X-Total-Count'));  // paginaci\xF3n
    this.users = res.body ?? [];
  });

// observe: 'events' + reportProgress \u2014 progress bar de upload/download
this.http.post('/api/upload', formData, {
  observe: 'events',
  reportProgress: true
}).subscribe(event => {
  if (event.type === HttpEventType.UploadProgress) {
    this.progress = Math.round(100 * event.loaded / (event.total ?? 1));
  } else if (event.type === HttpEventType.Response) {
    console.log('Upload completo:', event.body);
  }
});

// responseType \u2014 cuando la respuesta NO es JSON
this.http.get('/api/report.pdf', { responseType: 'blob' });  // archivos
this.http.get('/legal/terms', { responseType: 'text' });    // texto plano`),t(),i(),t(),n(1750,"h4"),e(1751,"Manejo de errores"),t(),n(1752,"p"),e(1753,"Los errores HTTP llegan como "),n(1754,"code"),e(1755,"HttpErrorResponse"),t(),e(1756,". Se manejan con "),n(1757,"code"),e(1758,"catchError"),t(),e(1759," de RxJS:"),t(),n(1760,"pre"),r(),n(1761,"code",2),e(1762,`import { catchError, retry, throwError } from 'rxjs';
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
}`),t(),i(),t(),n(1763,"h4"),e(1764,"Interceptors (funcionales, Angular 15+)"),t(),n(1765,"p"),e(1766,"Los interceptors procesan TODAS las peticiones/respuestas HTTP en un pipeline:"),t(),n(1767,"pre"),r(),n(1768,"code",2),e(1769,`// auth.interceptor.ts
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
};`),t(),i(),t(),n(1770,"h4"),e(1771,"Patrones comunes en componentes"),t(),n(1772,"pre"),r(),n(1773,"code",2),e(1774,`// \u274C MAL \u2014 suscripci\xF3n manual, posible memory leak
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
}`),t(),i(),t(),n(1775,"h4"),e(1776,"HttpClient + NgRx Effects"),t(),n(1777,"p"),e(1778,"En apps con NgRx, las llamadas HTTP van en "),n(1779,"strong"),e(1780,"Effects"),t(),e(1781,", NO en componentes:"),t(),n(1782,"pre"),r(),n(1783,"code",2),e(1784,`// product.effects.ts
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
);`),t(),i(),t(),n(1785,"h4"),e(1786,"Testing con HttpTestingController"),t(),n(1787,"pre"),r(),n(1788,"code",2),e(1789,`// product.service.spec.ts
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
});`),t(),i(),t(),n(1790,"h4"),e(1791,"Tabla resumen: GET vs POST vs PUT vs PATCH vs DELETE"),t(),n(1792,"table",4)(1793,"tr")(1794,"th"),e(1795,"M\xE9todo"),t(),n(1796,"th"),e(1797,"Uso"),t(),n(1798,"th"),e(1799,"Body"),t(),n(1800,"th"),e(1801,"Idempotente"),t()(),n(1802,"tr")(1803,"td")(1804,"strong"),e(1805,"GET"),t()(),n(1806,"td"),e(1807,"Obtener datos"),t(),n(1808,"td"),e(1809,"No"),t(),n(1810,"td"),e(1811,"S\xED"),t()(),n(1812,"tr")(1813,"td")(1814,"strong"),e(1815,"POST"),t()(),n(1816,"td"),e(1817,"Crear recurso"),t(),n(1818,"td"),e(1819,"S\xED"),t(),n(1820,"td"),e(1821,"No"),t()(),n(1822,"tr")(1823,"td")(1824,"strong"),e(1825,"PUT"),t()(),n(1826,"td"),e(1827,"Reemplazar recurso completo"),t(),n(1828,"td"),e(1829,"S\xED"),t(),n(1830,"td"),e(1831,"S\xED"),t()(),n(1832,"tr")(1833,"td")(1834,"strong"),e(1835,"PATCH"),t()(),n(1836,"td"),e(1837,"Actualizaci\xF3n parcial"),t(),n(1838,"td"),e(1839,"S\xED"),t(),n(1840,"td"),e(1841,"No*"),t()(),n(1842,"tr")(1843,"td")(1844,"strong"),e(1845,"DELETE"),t()(),n(1846,"td"),e(1847,"Eliminar recurso"),t(),n(1848,"td"),e(1849,"Opcional"),t(),n(1850,"td"),e(1851,"S\xED"),t()()(),n(1852,"h4"),e(1853,"\u26A0\uFE0F Errores comunes"),t(),n(1854,"ul")(1855,"li"),e(1856,"Olvidar "),n(1857,"code"),e(1858,".subscribe()"),t(),e(1859," \u2014 los Observables de HttpClient son fr\xEDos: "),n(1860,"strong"),e(1861,"sin suscripci\xF3n no hay request"),t(),e(1862,"."),t(),n(1863,"li"),e(1864,"Suscripciones anidadas (subscribe dentro de subscribe) \u2014 usar "),n(1865,"code"),e(1866,"switchMap"),t(),e(1867," para requests dependientes o "),n(1868,"code"),e(1869,"forkJoin"),t(),e(1870," para paralelas."),t(),n(1871,"li")(1872,"code"),e(1873,"HttpParams"),t(),e(1874," y "),n(1875,"code"),e(1876,"HttpHeaders"),t(),e(1877," son "),n(1878,"strong"),e(1879,"inmutables"),t(),e(1880,": "),n(1881,"code"),e(1882,"params.set(...)"),t(),e(1883," devuelve una NUEVA instancia; hay que encadenar o reasignar."),t(),n(1884,"li"),e(1885,"No tipar las respuestas ("),n(1886,"code"),e(1887,"get<Product[]>"),t(),e(1888,") \u2014 se pierde el chequeo de tipos. Ojo: el gen\xE9rico es solo compile-time; no valida nada en runtime."),t(),n(1889,"li"),e(1890,"Poner "),n(1891,"code"),e(1892,"retry()"),t(),e(1893," en mutaciones (POST) \u2014 puedes duplicar operaciones; reintentar solo GETs idempotentes."),t()(),n(1894,"h4"),e(1895,"\u{1F3A4} Preguntas de entrevista"),t(),n(1896,"ul")(1897,"li")(1898,"strong"),e(1899,"\xBFPor qu\xE9 Observables y no Promises?"),t(),e(1900," \u2014 Cancelables (unsubscribe aborta la request), componibles con operadores (retry, switchMap), lazy, y se integran con async pipe y NgRx."),t(),n(1901,"li")(1902,"strong"),e(1903,"\xBFC\xF3mo cancelas una request en curso?"),t(),e(1904," \u2014 Desuscribi\xE9ndote: manualmente, con "),n(1905,"code"),e(1906,"switchMap"),t(),e(1907," (cancela la anterior al llegar una nueva), o con "),n(1908,"code"),e(1909,"takeUntilDestroyed()"),t(),e(1910,"."),t(),n(1911,"li")(1912,"strong"),e(1913,"\xBFEn qu\xE9 orden corren los interceptors?"),t(),e(1914," \u2014 En el orden de registro para la request y en orden INVERSO para la response (pipeline tipo cebolla)."),t(),n(1915,"li")(1916,"strong"),e(1917,"\xBFQu\xE9 hace "),n(1918,"code"),e(1919,"withFetch()"),t(),e(1920,"?"),t(),e(1921," \u2014 Cambia el backend de XMLHttpRequest a la Fetch API: necesario para streaming en SSR y recomendado en apps modernas."),t()(),n(1922,"div",12),e(1923," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(1924,"ul")(1925,"li")(1926,"code"),e(1927,"core/services/mock-api.service.ts"),t(),e(1928," \u2014 Servicio simulado con getProducts, createProduct, updateProduct, deleteProduct"),t(),n(1929,"li")(1930,"code"),e(1931,"core/interceptors/auth.interceptor.ts"),t(),e(1932," \u2014 Interceptor funcional que agrega Authorization header"),t(),n(1933,"li")(1934,"code"),e(1935,"features/ngrx-lab/store/product.effects.ts"),t(),e(1936," \u2014 HttpClient en Effects con switchMap + catchError"),t(),n(1937,"li")(1938,"code"),e(1939,"app.config.ts"),t(),e(1940," \u2014 provideHttpClient(withInterceptors([...]))"),t()()()(),n(1941,"div",16)(1942,"h3"),e(1943,"I. Routing Avanzado"),t(),n(1944,"h4"),e(1945,"Route Params, Query Params & Fragments"),t(),n(1946,"pre"),r(),n(1947,"code",2),e(1948,`// Definir ruta con par\xE1metro
{ path: 'user/:id', component: UserComponent }

// Navegar
this.router.navigate(['/user', 42], {
  queryParams: { tab: 'profile' },
  fragment: 'bio'
});
// URL: /user/42?tab=profile#bio`),t(),i(),t(),n(1949,"h4"),e(1950,"ActivatedRoute \u2014 snapshot vs observable"),t(),n(1951,"pre"),r(),n(1952,"code",2),e(1953,`export class UserComponent {
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
// (ej: lista de usuarios con navegaci\xF3n entre ellos)`),t(),i(),t(),n(1954,"h4"),e(1955,"Resolvers \u2014 Pre-cargar datos"),t(),n(1956,"pre"),r(),n(1957,"code",2),e(1958,`// Functional resolver (Angular 15+)
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
}`),t(),i(),t(),n(1959,"h4"),e(1960,"Router Events"),t(),n(1961,"pre"),r(),n(1962,"code",2),e(1963,`export class AppComponent {
  private router = inject(Router);

  constructor() {
    this.router.events.pipe(
      filter(e => e instanceof NavigationStart)
    ).subscribe(event => {
      console.log('Navegando a:', event.url);
    });
  }
}
// Eventos: NavigationStart \u2192 NavigationEnd / NavigationCancel / NavigationError`),t(),i(),t(),n(1964,"h4"),e(1965,"Nested Routes & Route Data"),t(),n(1966,"pre"),r(),n(1967,"code",2),e(1968,`{
  path: 'admin',
  component: AdminLayoutComponent,
  data: { role: 'admin' }, // datos est\xE1ticos
  children: [
    { path: '', component: AdminDashboard },
    { path: 'users', component: AdminUsers },
    { path: 'settings', component: AdminSettings },
  ]
}`),t(),i(),t(),n(1969,"h4"),e(1970,"Functional Guards (Angular 15+)"),t(),n(1971,"pre"),r(),n(1972,"code",2),e(1973,`// Guard como funci\xF3n \u2014 reemplaza CanActivate class
export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isLoggedIn()) return true;
  return router.createUrlTree(['/login'], {
    queryParams: { returnUrl: state.url }
  });
};

// Uso en rutas
{ path: 'admin', canActivate: [authGuard], component: AdminComponent }`),t(),i(),t(),n(1974,"h4"),e(1975,"paramMap y Route Params como Inputs (Angular 16+)"),t(),n(1976,"pre"),r(),n(1977,"code",2),e(1978,`// paramMap \u2014 API preferida sobre params (get/getAll/has, valores siempre string)
this.route.paramMap.subscribe(pm => this.load(pm.get('id')!));

// withComponentInputBinding \u2014 params, queryParams, data y resolvers
// llegan directo como inputs del componente (sin inyectar ActivatedRoute)
provideRouter(routes, withComponentInputBinding())

export class UserDetailComponent {
  id = input.required<string>();   // \u2190 route param :id
  tab = input<string>();           // \u2190 queryParam ?tab=...
  user = input<User>();            // \u2190 resolver { user: userResolver }
}`),t(),i(),t(),n(1979,"h4"),e(1980,"Otros Guards: CanDeactivate y CanMatch"),t(),n(1981,"pre"),r(),n(1982,"code",2),e(1983,`// CanDeactivate \u2014 confirmar salida con cambios sin guardar
export const unsavedChangesGuard: CanDeactivateFn<EditorComponent> =
  (component) => component.form.pristine || confirm('\xBFDescartar cambios?');

// CanMatch \u2014 decide si la ruta MATCHEA (permite rutas alternativas)
// Bonus: si rechaza, el bundle lazy NI SIQUIERA se descarga
{ path: 'admin', canMatch: [isAdminGuard], loadComponent: () => import('./admin') },
{ path: 'admin', component: AccessDeniedComponent }, // fallback si no matchea

// Secuencia completa de Router Events:
// NavigationStart \u2192 RouteConfigLoadStart/End (lazy) \u2192 RoutesRecognized
// \u2192 GuardsCheckStart \u2192 GuardsCheckEnd \u2192 ResolveStart \u2192 ResolveEnd
// \u2192 NavigationEnd | NavigationCancel | NavigationError`),t(),i(),t(),n(1984,"h4"),e(1985,"\u26A0\uFE0F Errores comunes"),t(),n(1986,"ul")(1987,"li"),e(1988,"Usar "),n(1989,"code"),e(1990,"snapshot"),t(),e(1991," cuando el mismo componente se reutiliza entre navegaciones ("),n(1992,"code"),e(1993,"/user/1 \u2192 /user/2"),t(),e(1994,") \u2014 el Router NO destruye el componente y el snapshot queda obsoleto."),t(),n(1995,"li"),e(1996,"Navegaci\xF3n relativa sin "),n(1997,"code"),e(1998,"relativeTo"),t(),e(1999,": "),n(2e3,"code"),e(2001,"router.navigate(['../edit'], { relativeTo: this.route })"),t(),e(2002,"."),t(),n(2003,"li"),e(2004,"Guards/resolvers que devuelven Observables que "),n(2005,"strong"),e(2006,"nunca completan"),t(),e(2007," (ej: un BehaviorSubject de estado) \u2014 la navegaci\xF3n se cuelga; cerrar con "),n(2008,"code"),e(2009,"take(1)"),t(),e(2010," o "),n(2011,"code"),e(2012,"first()"),t(),e(2013,"."),t(),n(2014,"li"),e(2015,"Por defecto los guards y resolvers NO se re-ejecutan si solo cambian los queryParams \u2014 configurar "),n(2016,"code"),e(2017,"runGuardsAndResolvers"),t(),e(2018," si lo necesitas."),t(),n(2019,"li"),e(2020,"Un resolver lento bloquea toda la navegaci\xF3n \u2014 para mejor UX, considerar skeleton + carga en el componente."),t()(),n(2021,"h4"),e(2022,"\u{1F3A4} Preguntas de entrevista"),t(),n(2023,"ul")(2024,"li")(2025,"strong"),e(2026,"\xBFRoute params vs queryParams?"),t(),e(2027," \u2014 Los params identifican el recurso y son parte del path ("),n(2028,"code"),e(2029,"/user/:id"),t(),e(2030,", obligatorios); los queryParams son estado opcional ("),n(2031,"code"),e(2032,"?page=2&sort=asc"),t(),e(2033,"), ideales para filtros/paginaci\xF3n compartibles por URL."),t(),n(2034,"li")(2035,"strong"),e(2036,"\xBFResolver vs cargar en ngOnInit?"),t(),e(2037," \u2014 Resolver: los datos existen antes de renderizar (sin flicker), pero retrasa la navegaci\xF3n. ngOnInit: navegaci\xF3n instant\xE1nea con estado de loading. Elegir seg\xFAn UX."),t(),n(2038,"li")(2039,"strong"),e(2040,"\xBFCanMatch vs CanActivate?"),t(),e(2041," \u2014 CanMatch decide si la ruta participa en el matching (y evita descargar el bundle lazy); CanActivate solo bloquea la activaci\xF3n de una ruta ya elegida."),t(),n(2042,"li")(2043,"strong"),e(2044,"\xBFC\xF3mo detectar el fin de una navegaci\xF3n?"),t(),e(2045," \u2014 "),n(2046,"code"),e(2047,"router.events"),t(),e(2048," filtrando "),n(2049,"code"),e(2050,"NavigationEnd"),t(),e(2051," (analytics, scroll-to-top, spinners globales)."),t()()(),n(2052,"div",17)(2053,"h3"),e(2054,"J. Modules vs Standalone"),t(),n(2055,"h4"),e(2056,"NgModule (Cl\xE1sico \u2014 Angular 2-13)"),t(),n(2057,"pre"),r(),n(2058,"code",2),e(2059,`@NgModule({
  declarations: [AppComponent, HeaderComponent], // componentes que PERTENECEN a este m\xF3dulo
  imports: [BrowserModule, FormsModule],          // otros m\xF3dulos necesarios
  exports: [HeaderComponent],                      // lo que otros m\xF3dulos pueden usar
  providers: [AuthService],                        // servicios (scope: este m\xF3dulo)
  bootstrap: [AppComponent]                        // componente ra\xEDz (solo en AppModule)
})
export class AppModule {}

// Bootstrap cl\xE1sico
platformBrowserDynamic().bootstrapModule(AppModule);`),t(),i(),t(),n(2060,"h4"),e(2061,"Standalone (Angular 14+ \u2014 Default en Angular 20)"),t(),n(2062,"pre"),r(),n(2063,"code",2),e(2064,`// En Angular 20, standalone es el default \u2014 no necesitas declararlo
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
});`),t(),i(),t(),n(2065,"h4"),e(2066,"Migraci\xF3n NgModule \u2192 Standalone"),t(),n(2067,"table",4)(2068,"thead")(2069,"tr")(2070,"th"),e(2071,"Aspecto"),t(),n(2072,"th"),e(2073,"NgModule"),t(),n(2074,"th"),e(2075,"Standalone"),t()()(),n(2076,"tbody")(2077,"tr")(2078,"td"),e(2079,"Declaraci\xF3n"),t(),n(2080,"td")(2081,"code"),e(2082,"declarations"),t(),e(2083," en m\xF3dulo"),t(),n(2084,"td"),e(2085,"Componente se auto-contiene"),t()(),n(2086,"tr")(2087,"td"),e(2088,"Dependencias"),t(),n(2089,"td"),e(2090,"M\xF3dulo importa otros m\xF3dulos"),t(),n(2091,"td"),e(2092,"Componente importa lo que necesita"),t()(),n(2093,"tr")(2094,"td"),e(2095,"Providers"),t(),n(2096,"td")(2097,"code"),e(2098,"providers"),t(),e(2099," en m\xF3dulo"),t(),n(2100,"td")(2101,"code"),e(2102,"providedIn: 'root'"),t(),e(2103," o "),n(2104,"code"),e(2105,"providers"),t(),e(2106," en componente"),t()(),n(2107,"tr")(2108,"td"),e(2109,"Bootstrap"),t(),n(2110,"td")(2111,"code"),e(2112,"platformBrowserDynamic().bootstrapModule()"),t()(),n(2113,"td")(2114,"code"),e(2115,"bootstrapApplication()"),t()()(),n(2116,"tr")(2117,"td"),e(2118,"Lazy loading"),t(),n(2119,"td")(2120,"code"),e(2121,"loadChildren: () => Module"),t()(),n(2122,"td")(2123,"code"),e(2124,"loadComponent"),t(),e(2125," o "),n(2126,"code"),e(2127,"loadChildren: () => Routes"),t()()(),n(2128,"tr")(2129,"td"),e(2130,"Tree shaking"),t(),n(2131,"td"),e(2132,"\u26A0\uFE0F M\xF3dulo entero"),t(),n(2133,"td"),e(2134,"\u2705 Componente individual"),t()()()(),n(2135,"h4"),e(2136,"\xBFPor qu\xE9 Angular 20 ya no necesita NgModule?"),t(),n(2137,"ul")(2138,"li"),e(2139,"Standalone es el default \u2014 "),n(2140,"code"),e(2141,"standalone: true"),t(),e(2142," ya no es necesario declarar"),t(),n(2143,"li"),e(2144,"Mejor tree shaking \u2014 solo se incluye lo que se importa"),t(),n(2145,"li"),e(2146,"Menos boilerplate \u2014 no m\xE1s archivos "),n(2147,"code"),e(2148,".module.ts"),t()(),n(2149,"li"),e(2150,"Lazy loading m\xE1s simple \u2014 "),n(2151,"code"),e(2152,"loadComponent"),t(),e(2153," directamente"),t(),n(2154,"li"),e(2155,"Providers funcionales: "),n(2156,"code"),e(2157,"provideRouter()"),t(),e(2158,", "),n(2159,"code"),e(2160,"provideHttpClient()"),t(),e(2161,", etc."),t()()(),n(2162,"div",18)(2163,"h3"),e(2164,"K. Decoradores Importantes"),t(),n(2165,"h4"),e(2166,"@Input() / @Output() \u2014 Comunicaci\xF3n Padre-Hijo"),t(),n(2167,"pre"),r(),n(2168,"code",2),e(2169,`// Hijo recibe datos del padre
@Input() title = '';
@Input({ required: true }) userId!: string; // obligatorio
@Input({ transform: booleanAttribute }) disabled = false; // transforma "true" string \u2192 true boolean
@Input({ alias: 'label' }) buttonLabel = ''; // nombre diferente en el template

// Hijo emite eventos al padre
@Output() saved = new EventEmitter<User>();
this.saved.emit(user);

// En el padre:
// <app-child [title]="'Hola'" [userId]="id" (saved)="onSave($event)" />`),t(),i(),t(),n(2170,"h4"),e(2171,"Model Inputs \u2014 Two-Way Binding con Signals (Angular 17+)"),t(),n(2172,"pre"),r(),n(2173,"code",2),e(2174,`// Hijo \u2014 model input (se\xF1al de lectura/escritura)
export class ToggleComponent {
  checked = model(false); // crea un WritableSignal

  toggle() {
    this.checked.update(v => !v);
  }
}

// Padre \u2014 two-way binding con banana-in-a-box
// <app-toggle [(checked)]="isActive" />
// isActive se actualiza autom\xE1ticamente cuando el hijo cambia checked`),t(),i(),t(),n(2175,"h4"),e(2176,"@HostListener / @HostBinding"),t(),n(2177,"pre"),r(),n(2178,"code",2),e(2179,`@Directive({ selector: '[appDropdown]' })
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
}`),t(),i(),t(),n(2180,"h4"),e(2181,"host: property \u2014 Alternativa Moderna"),t(),n(2182,"pre"),r(),n(2183,"code",2),e(2184,`// Preferido en Angular moderno \u2014 sin decoradores
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
}`),t(),i(),t(),n(2185,"h4"),e(2186,"@ContentChild / @ContentChildren"),t(),n(2187,"pre"),r(),n(2188,"code",2),e(2189,`// Acceder al contenido proyectado (ng-content)
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
