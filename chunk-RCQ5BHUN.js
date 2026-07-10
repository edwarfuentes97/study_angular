import{a as d}from"./chunk-WXOJIICE.js";import"./chunk-BKIDS2JO.js";import{Db as n,Eb as t,Zb as e,fb as o,sa as i,ta as a}from"./chunk-G73V3KC4.js";import"./chunk-2NFLSA4Y.js";var s=class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=o({type:l,selectors:[["app-perf-learn"]],decls:1975,vars:0,consts:[["appAutoGlossary","",1,"cards"],["id","1-onpush-trackby",1,"card"],[1,"code-ref"],["id","2-64defer-blocks",1,"card"],["id","3-virtual-scrolling",1,"card"],["id","4-bundle-analysis",1,"card"],["id","5-preloading-strategies",1,"card"],["id","6-web-workers",1,"card"],["id","estrategia-optimizacion",1,"card"],["id","anti-patterns-performance",1,"card"],["id","9-memoizacion-computed-signals-y-pure-pipes",1,"card"],["id","10-ngoptimizedimage-imagenes-optimizadas",1,"card"],["id","11-runoutsideangular-y-zoneless",1,"card"],["id","12-web-vitals-lcp-cls-e-inp",1,"card"],["id","13-ssr-hydration-e-incremental-hydration",1,"card"],["id","14-profiling-angular-devtools-y-chrome-performance",1,"card"],["id","15-memory-leaks-deteccion-y-prevencion",1,"card"]],template:function(r,u){r&1&&(n(0,"div",0)(1,"div",1)(2,"h3"),e(3,"1. OnPush + trackBy"),t(),n(4,"p"),e(5," La estrategia "),n(6,"strong"),e(7,"OnPush"),t(),e(8," reduce dr\xE1sticamente los ciclos de change detection. Con la estrategia "),n(9,"strong"),e(10,"Default"),t(),e(11,", cada evento (click, timer, HTTP response) hace que Angular recorra "),n(12,"em"),e(13,"todo el \xE1rbol de componentes"),t(),e(14," comparando cada binding. Con OnPush, Angular "),n(15,"strong"),e(16,"salta el componente completo"),t(),e(17,' (y su sub\xE1rbol) a menos que ocurra algo que lo marque como "dirty". '),t(),n(18,"h4"),e(19,"\xBFQu\xE9 dispara CD en un componente OnPush?"),t(),n(20,"ul")(21,"li")(22,"strong"),e(23,"Cambio de referencia en un "),n(24,"code"),e(25,"@Input()"),t(),e(26,":"),t(),e(27," Angular compara con "),n(28,"code"),e(29,"==="),t(),e(30,". Mutar el objeto NO cuenta; asignar uno nuevo s\xED."),t(),n(31,"li")(32,"strong"),e(33,"Un evento del propio template:"),t(),n(34,"code"),e(35,"(click)"),t(),e(36,", "),n(37,"code"),e(38,"(input)"),t(),e(39,", etc. disparados dentro del componente o de sus hijos."),t(),n(40,"li")(41,"strong"),e(42,"Un signal le\xEDdo en el template cambia:"),t(),e(43," los signals marcan el componente como dirty autom\xE1ticamente \u2014 es la forma m\xE1s ergon\xF3mica de trabajar con OnPush."),t(),n(44,"li")(45,"strong"),e(46,"El "),n(47,"code"),e(48,"async"),t(),e(49," pipe emite un valor nuevo"),t(),e(50," (internamente llama a "),n(51,"code"),e(52,"markForCheck()"),t(),e(53,")."),t(),n(54,"li")(55,"strong"),e(56,"Llamada manual a "),n(57,"code"),e(58,"ChangeDetectorRef.markForCheck()"),t(),e(59,"."),t()()(),n(60,"h4"),e(61,"Inmutabilidad: el requisito no negociable"),t(),n(62,"p"),e(63," OnPush compara "),n(64,"strong"),e(65,"referencias, no contenido"),t(),e(66,". Si mutas ("),n(67,"code"),e(68,"user.name = 'X'"),t(),e(69,", "),n(70,"code"),e(71,"array.push()"),t(),e(72,") la referencia no cambia y la vista queda desactualizada silenciosamente. La regla: todo cambio de estado crea un objeto/array nuevo (spread, "),n(73,"code"),e(74,".map()"),t(),e(75,", "),n(76,"code"),e(77,".filter()"),t(),e(78,"). Con signals, "),n(79,"code"),e(80,"set()"),t(),e(81," y "),n(82,"code"),e(83,"update()"),t(),e(84," te empujan naturalmente a este patr\xF3n. "),t(),n(85,"pre")(86,"code"),e(87,`@Component({
  selector: 'app-user-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \\\`
    @for (user of users(); track user.id) {
      <app-user-card [user]="user" />
    }
  \\\`
})
export class UserListComponent {
  users = signal<User[]>([]);

  rename(id: number, name: string) {
    // \u2705 Inmutabilidad: nueva referencia de array Y de objeto
    this.users.update(list =>
      list.map(u => u.id === id ? { ...u, name } : u)
    );
  }
}`),t()(),n(88,"h4"),e(89,"track en @for: por qu\xE9 es obligatorio"),t(),n(90,"p"),e(91," En Angular moderno "),n(92,"code"),e(93,"track"),t(),e(94," es "),n(95,"strong"),e(96,"obligatorio"),t(),e(97," en "),n(98,"code"),e(99,"@for"),t(),e(100," (con "),n(101,"code"),e(102,"*ngFor"),t(),e(103," el "),n(104,"code"),e(105,"trackBy"),t(),e(106," era opcional y se olvidaba). Sin una key estable, cuando la lista cambia Angular no sabe qu\xE9 item es cu\xE1l: "),n(107,"strong"),e(108,"destruye y recrea todos los nodos DOM"),t(),e(109,", pierde estado local (focus, inputs, animaciones) y re-ejecuta lifecycle hooks de cada componente hijo. "),t(),n(110,"p")(111,"strong"),e(112,"C\xF3mo elegir una buena key:"),t()(),n(113,"ul")(114,"li"),e(115,"\u2705 "),n(116,"strong"),e(117,"Un identificador \xFAnico y estable del dato:"),t(),n(118,"code"),e(119,"track item.id"),t(),e(120,", "),n(121,"code"),e(122,"track user.uuid"),t(),e(123,". Sobrevive a reordenamientos, inserciones y borrados."),t(),n(124,"li"),e(125,"\u26A0\uFE0F "),n(126,"code"),e(127,"track $index"),t(),e(128," solo es aceptable en listas "),n(129,"strong"),e(130,"est\xE1ticas"),t(),e(131,' (nunca se reordenan ni se insertan/borran items en medio). Si el orden cambia, Angular "recicla" nodos con datos equivocados.'),t(),n(132,"li"),e(133,"\u274C "),n(134,"code"),e(135,"track item"),t(),e(136," (el objeto entero) falla si recreas los objetos (p. ej. tras un fetch): cada referencia nueva = nodo DOM nuevo."),t()(),n(137,"h4"),e(138,"\u26A0\uFE0F Errores comunes"),t(),n(139,"ul")(140,"li")(141,"strong"),e(142,"Mutar estado con OnPush:"),t(),n(143,"code"),e(144,"this.items.push(x)"),t(),e(145," no actualiza la vista. Usa "),n(146,"code"),e(147,"this.items = [...this.items, x]"),t(),e(148," o signals."),t(),n(149,"li")(150,"strong"),e(151,"Poner OnPush solo en el padre:"),t(),e(152," el beneficio real llega cuando "),n(153,"em"),e(154,"todo el \xE1rbol"),t(),e(155," es OnPush; un hijo Default dentro de un padre OnPush s\xED se revisa cuando el padre se revisa."),t(),n(156,"li")(157,"strong"),e(158,"Confiar en "),n(159,"code"),e(160,"setTimeout"),t(),e(161,"/librer\xEDas externas:"),t(),e(162," si actualizan propiedades planas (no signals) dentro de un componente OnPush, necesitas "),n(163,"code"),e(164,"markForCheck()"),t(),e(165,"."),t(),n(166,"li")(167,"strong"),e(168,"Usar "),n(169,"code"),e(170,"detectChanges()"),t(),e(171," en vez de "),n(172,"code"),e(173,"markForCheck()"),t(),e(174,":"),t(),n(175,"code"),e(176,"detectChanges()"),t(),e(177," ejecuta CD s\xEDncrono inmediato (caro y puede causar errores de timing); "),n(178,"code"),e(179,"markForCheck()"),t(),e(180," solo marca el camino hasta la ra\xEDz para el pr\xF3ximo ciclo."),t()(),n(181,"h4"),e(182,"\u{1F3A4} Preguntas de entrevista"),t(),n(183,"ul")(184,"li")(185,"strong"),e(186,"\xBFQu\xE9 dispara change detection en un componente OnPush?"),t(),e(187," Cambio de referencia en un @Input, un evento del template, un signal le\xEDdo en el template que cambia, el async pipe al emitir, o markForCheck() manual."),t(),n(188,"li")(189,"strong"),e(190,"\xBFPor qu\xE9 OnPush exige inmutabilidad?"),t(),e(191," Porque compara inputs con "),n(192,"code"),e(193,"==="),t(),e(194,": una mutaci\xF3n conserva la referencia y el cambio pasa inadvertido."),t(),n(195,"li")(196,"strong"),e(197,"\xBFDiferencia entre markForCheck() y detectChanges()?"),t(),e(198," markForCheck() marca el componente y sus ancestros como dirty para el pr\xF3ximo ciclo (barato); detectChanges() ejecuta CD s\xEDncrono inmediato sobre ese sub\xE1rbol (caro)."),t(),n(199,"li")(200,"strong"),e(201,"\xBFQu\xE9 pasa en un @for sin una key estable?"),t(),e(202," Angular destruye y recrea todos los nodos DOM en cada cambio de lista: se pierde estado local y se dispara layout/paint innecesario."),t()(),n(203,"div",2),e(204," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(205,"ul")(206,"li")(207,"code"),e(208,"features/ngrx-lab/components/product-card.ts"),t(),e(209," \u2014 OnPush change detection"),t(),n(210,"li")(211,"code"),e(212,"features/performance-lab/perf-demo.ts"),t(),e(213," \u2014 trackBy comparaci\xF3n (con y sin)"),t()()()(),n(214,"div",3)(215,"h3"),e(216,"2. @defer Blocks"),t(),n(217,"p"),e(218," Los bloques "),n(219,"code"),e(220,"@defer"),t(),e(221," (Angular 17+) permiten "),n(222,"strong"),e(223,"lazy-loading declarativo a nivel de template"),t(),e(224,": el compilador extrae las dependencias del bloque (componentes, directivas, pipes standalone) a un "),n(225,"strong"),e(226,"chunk JavaScript separado"),t(),e(227,' que solo se descarga cuando se activa el trigger. Es code splitting sin tocar el router \u2014 ideal para contenido "below the fold", modales, gr\xE1ficos y widgets pesados. '),t(),n(228,"h4"),e(229,"Triggers disponibles"),t(),n(230,"table")(231,"thead")(232,"tr")(233,"th"),e(234,"Trigger"),t(),n(235,"th"),e(236,"Cu\xE1ndo carga"),t(),n(237,"th"),e(238,"Uso t\xEDpico"),t()()(),n(239,"tbody")(240,"tr")(241,"td")(242,"code"),e(243,"on idle"),t()(),n(244,"td"),e(245,"Cuando el browser est\xE1 ocioso ("),n(246,"code"),e(247,"requestIdleCallback"),t(),e(248,"). Es el "),n(249,"strong"),e(250,"default"),t(),e(251," si no especificas trigger."),t(),n(252,"td"),e(253,"Contenido secundario no urgente"),t()(),n(254,"tr")(255,"td")(256,"code"),e(257,"on viewport"),t()(),n(258,"td"),e(259,"Cuando el placeholder entra al viewport (IntersectionObserver)"),t(),n(260,"td"),e(261,"Secciones below the fold"),t()(),n(262,"tr")(263,"td")(264,"code"),e(265,"on interaction"),t()(),n(266,"td"),e(267,"Click o keydown sobre el placeholder (o un elemento referenciado)"),t(),n(268,"td"),e(269,"Tabs, acordeones, editores"),t()(),n(270,"tr")(271,"td")(272,"code"),e(273,"on hover"),t()(),n(274,"td"),e(275,"Mouseover / focusin sobre el placeholder"),t(),n(276,"td"),e(277,"Men\xFAs, tooltips ricos"),t()(),n(278,"tr")(279,"td")(280,"code"),e(281,"on timer(3s)"),t()(),n(282,"td"),e(283,"Despu\xE9s de un delay fijo"),t(),n(284,"td"),e(285,"Banners, contenido diferido temporal"),t()(),n(286,"tr")(287,"td")(288,"code"),e(289,"when condici\xF3n"),t()(),n(290,"td"),e(291,"Cuando la expresi\xF3n pasa a "),n(292,"code"),e(293,"true"),t(),e(294," (una sola vez, no vuelve atr\xE1s)"),t(),n(295,"td"),e(296,"Carga controlada por estado"),t()()()(),n(297,"p"),e(298," Los triggers "),n(299,"code"),e(300,"on viewport / interaction / hover"),t(),e(301," pueden observar otro elemento usando una template reference: "),n(302,"code"),e(303,"@defer (on interaction(botonAbrir))"),t(),e(304,". "),t(),n(305,"h4"),e(306,"prefetch: descargar antes, renderizar despu\xE9s"),t(),n(307,"p")(308,"code"),e(309,"prefetch"),t(),e(310," separa "),n(311,"em"),e(312,"descargar el chunk"),t(),e(313," de "),n(314,"em"),e(315,"renderizarlo"),t(),e(316,". Ejemplo: descargar el JS cuando el browser est\xE9 idle, pero instanciar el componente solo cuando el usuario haga scroll hasta \xE9l. As\xED la carga es instant\xE1nea cuando llega el momento. "),t(),n(317,"pre")(318,"code"),e(319,`@defer (on viewport; prefetch on idle) {
  <app-heavy-chart [data]="chartData" />
} @placeholder (minimum 500ms) {
  <div class="skeleton">\u{1F4CA} Gr\xE1fico disponible al hacer scroll</div>
} @loading (after 100ms; minimum 300ms) {
  <div class="spinner">Cargando...</div>
} @error {
  <div class="error">Error al cargar el gr\xE1fico</div>
}`),t()(),n(320,"h4"),e(321,"Los sub-bloques y sus par\xE1metros"),t(),n(322,"ul")(323,"li")(324,"strong")(325,"code"),e(326,"@placeholder (minimum 500ms)"),t()(),e(327," \u2014 contenido inicial antes de cargar. "),n(328,"code"),e(329,"minimum"),t(),e(330," evita flicker: se muestra al menos ese tiempo. Necesario para "),n(331,"code"),e(332,"on viewport / interaction / hover"),t(),e(333," (algo debe observarse)."),t(),n(334,"li")(335,"strong")(336,"code"),e(337,"@loading (after 100ms; minimum 300ms)"),t()(),e(338," \u2014 se muestra durante la descarga. "),n(339,"code"),e(340,"after"),t(),e(341," evita mostrar spinner en cargas r\xE1pidas; "),n(342,"code"),e(343,"minimum"),t(),e(344," evita el parpadeo spinner\u2192contenido."),t(),n(345,"li")(346,"strong")(347,"code"),e(348,"@error"),t()(),e(349," \u2014 si falla la carga del chunk (red ca\xEDda, deploy que invalid\xF3 hashes). Sin este bloque, el fallo es silencioso."),t()(),n(350,"h4"),e(351,"\u26A0\uFE0F Errores comunes"),t(),n(352,"ul")(353,"li")(354,"strong"),e(355,"El componente no se separa en chunk:"),t(),e(356," pasa si adem\xE1s lo referencias fuera del "),n(357,"code"),e(358,"@defer"),t(),e(359," (en el mismo template, con "),n(360,"code"),e(361,"@ViewChild"),t(),e(362,", o si no es standalone). Verifica en el build que aparece un lazy chunk nuevo."),t(),n(363,"li")(364,"strong"),e(365,"Deferir contenido above the fold:"),t(),e(366," empeora LCP y provoca layout shift. "),n(367,"code"),e(368,"@defer"),t(),e(369," es para lo que NO se ve al cargar."),t(),n(370,"li")(371,"strong"),e(372,"Placeholder sin dimensiones:"),t(),e(373," cuando el contenido real aparece, empuja el layout (CLS). Dale al placeholder el mismo tama\xF1o que el contenido final (skeleton)."),t(),n(374,"li")(375,"strong"),e(376,"Abusar de "),n(377,"code"),e(378,"when"),t(),e(379,' esperando que se "des-cargue":'),t(),e(380," una vez renderizado, el bloque no vuelve al placeholder aunque la condici\xF3n sea false (para eso usa "),n(381,"code"),e(382,"@if"),t(),e(383,")."),t()(),n(384,"h4"),e(385,"\u{1F3A4} Preguntas de entrevista"),t(),n(386,"ul")(387,"li")(388,"strong"),e(389,"\xBFQu\xE9 diferencia hay entre @defer y lazy loading de rutas?"),t(),e(390," El lazy loading de rutas divide el bundle por navegaci\xF3n; @defer divide "),n(391,"em"),e(392,"dentro de una misma p\xE1gina"),t(),e(393," a nivel de template, con triggers de UX."),t(),n(394,"li")(395,"strong"),e(396,"\xBFPara qu\xE9 sirve prefetch?"),t(),e(397," Descarga el chunk anticipadamente (p. ej. en idle) sin renderizarlo; al activarse el trigger principal el render es inmediato."),t(),n(398,"li")(399,"strong"),e(400,"\xBFQu\xE9 condiciones debe cumplir un componente para ser deferrable?"),t(),e(401," Ser standalone y no estar referenciado fuera del bloque @defer en ese archivo."),t(),n(402,"li")(403,"strong"),e(404,"\xBFCu\xE1l es el trigger por defecto?"),t(),n(405,"code"),e(406,"on idle"),t(),e(407,"."),t()(),n(408,"div",2),e(409," \u{1F4C2} "),n(410,"code"),e(411,"features/performance-lab/perf-demo.ts"),t(),e(412," \u2014 @defer (on viewport) con @placeholder y @loading "),t()(),n(413,"div",4)(414,"h3"),e(415,"3. Virtual Scrolling"),t(),n(416,"p"),e(417," El CDK "),n(418,"code"),e(419,"ScrollingModule"),t(),e(420," proporciona "),n(421,"code"),e(422,"cdk-virtual-scroll-viewport"),t(),e(423,', que solo renderiza los items visibles en el viewport (m\xE1s un peque\xF1o buffer). Una lista de 10,000 filas pasa de 10,000 nodos DOM a ~20: menos memoria, menos tiempo de paint y scroll fluido. El viewport calcula la altura total "virtual" con '),n(424,"code"),e(425,"itemSize \xD7 total"),t(),e(426," y va reciclando los nodos mientras el usuario hace scroll. "),t(),n(427,"pre"),a(),n(428,"code"),a(),e(429,`<cdk-virtual-scroll-viewport itemSize="48" class="viewport">
  <div *cdkVirtualFor="let item of items; trackBy: trackById" class="item">
    {{ item.name }}
  </div>
</cdk-virtual-scroll-viewport>

// El viewport NECESITA altura fija en CSS:
// .viewport { height: 400px; }`),i(),t(),i(),t(),n(430,"h4"),e(431,"Piezas clave"),t(),n(432,"ul")(433,"li")(434,"strong")(435,"code"),e(436,"itemSize"),t()(),e(437," \u2014 altura fija (px) de cada fila con la estrategia "),n(438,"code"),e(439,"FixedSizeVirtualScrollStrategy"),t(),e(440,'. Si el valor no coincide con la altura real, el scroll "salta" y el scrollbar miente.'),t(),n(441,"li")(442,"strong")(443,"code"),e(444,"minBufferPx"),t(),e(445," / "),n(446,"code"),e(447,"maxBufferPx"),t()(),e(448," \u2014 cu\xE1nto contenido extra renderizar fuera de pantalla para evitar huecos en scroll r\xE1pido."),t(),n(449,"li")(450,"strong")(451,"code"),e(452,"trackBy"),t(),e(453," en "),n(454,"code"),e(455,"*cdkVirtualFor"),t()(),e(456," \u2014 igual de importante que en @for: el viewport recicla templates y sin key estable re-renderiza de m\xE1s."),t(),n(457,"li"),e(458,"Para alturas variables existe "),n(459,"code"),e(460,"autosize"),t(),e(461," (en "),n(462,"code"),e(463,"@angular/cdk-experimental"),t(),e(464,") o estrategias custom implementando "),n(465,"code"),e(466,"VirtualScrollStrategy"),t(),e(467,"."),t()(),n(468,"h4"),e(469,"\xBFVirtual scroll o paginaci\xF3n?"),t(),n(470,"table")(471,"thead")(472,"tr")(473,"th"),e(474,"Criterio"),t(),n(475,"th"),e(476,"Virtual scroll"),t(),n(477,"th"),e(478,"Paginaci\xF3n"),t()()(),n(479,"tbody")(480,"tr")(481,"td"),e(482,"UX"),t(),n(483,"td"),e(484,"Exploraci\xF3n continua (feeds, logs, chats)"),t(),n(485,"td"),e(486,"Navegaci\xF3n por bloques, resultados de b\xFAsqueda"),t()(),n(487,"tr")(488,"td"),e(489,"Datos"),t(),n(490,"td"),e(491,"Ya cargados en memoria (o infinite scroll + API)"),t(),n(492,"td"),e(493,"Se piden por p\xE1gina al servidor"),t()(),n(494,"tr")(495,"td"),e(496,"SEO / links"),t(),n(497,"td"),e(498,"Malo: no hay URL por posici\xF3n"),t(),n(499,"td"),e(500,"Bueno: cada p\xE1gina es enlazable"),t()(),n(501,"tr")(502,"td"),e(503,"Alturas"),t(),n(504,"td"),e(505,"Idealmente fijas (itemSize)"),t(),n(506,"td"),e(507,"Indiferente"),t()(),n(508,"tr")(509,"td"),e(510,"Accesibilidad"),t(),n(511,"td"),e(512,"Cuidado: el DOM no contiene toda la lista (Ctrl+F, lectores)"),t(),n(513,"td"),e(514,"M\xE1s predecible"),t()()()(),n(515,"p"),e(516," Regla pr\xE1ctica: "),n(517,"strong"),e(518,"< 100 items"),t(),e(519," \u2192 lista normal con "),n(520,"code"),e(521,"track"),t(),e(522,"; "),n(523,"strong"),e(524,"cientos/miles ya en memoria"),t(),e(525," \u2192 virtual scroll; "),n(526,"strong"),e(527,"miles en servidor"),t(),e(528," \u2192 paginaci\xF3n (o virtual scroll + fetch incremental). "),t(),n(529,"h4"),e(530,"\u26A0\uFE0F Errores comunes"),t(),n(531,"ul")(532,"li")(533,"strong"),e(534,"Viewport sin altura CSS:"),t(),e(535," si el "),n(536,"code"),e(537,"cdk-virtual-scroll-viewport"),t(),e(538," no tiene height, renderiza 0 items o crece infinito."),t(),n(539,"li")(540,"strong")(541,"code"),e(542,"itemSize"),t(),e(543," incorrecto:"),t(),e(544," scrollbar impreciso y saltos al hacer scroll. Mide la fila real (incluye borders/padding)."),t(),n(545,"li")(546,"strong"),e(547,"Items con altura variable usando FixedSize:"),t(),e(548," usa autosize o normaliza las alturas."),t(),n(549,"li")(550,"strong"),e(551,"Usarlo para 30 items:"),t(),e(552," agrega complejidad (posicionamiento absoluto, eventos de scroll) sin beneficio medible."),t()(),n(553,"h4"),e(554,"\u{1F3A4} Preguntas de entrevista"),t(),n(555,"ul")(556,"li")(557,"strong"),e(558,"\xBFC\xF3mo funciona internamente el virtual scroll?"),t(),e(559," Renderiza solo los items del viewport + buffer, posiciona el contenido con transform y simula la altura total con un spacer calculado a partir de itemSize."),t(),n(560,"li")(561,"strong"),e(562,"\xBFCu\xE1ndo elegir\xEDas paginaci\xF3n en lugar de virtual scroll?"),t(),e(563,' Cuando los datos viven en el servidor, se necesita URL por p\xE1gina/SEO, o la UX es de "resultados" y no de feed.'),t(),n(564,"li")(565,"strong"),e(566,"\xBFQu\xE9 pasa si los items tienen alturas distintas?"),t(),e(567," FixedSize falla; se usa la estrategia autosize experimental o una VirtualScrollStrategy propia."),t()(),n(568,"div",2),e(569," \u{1F4C2} "),n(570,"code"),e(571,"features/performance-lab/perf-demo.ts"),t(),e(572," \u2014 cdk-virtual-scroll-viewport con 10,000 items "),t()(),n(573,"div",5)(574,"h3"),e(575,"4. Bundle Analysis"),t(),n(576,"p"),e(577," El JavaScript inicial es el mayor enemigo del startup: se descarga, parsea y ejecuta antes de que la app sea interactiva. La estrategia tiene dos partes: "),n(578,"strong"),e(579,"dividir"),t(),e(580," el c\xF3digo (lazy loading / code splitting) y "),n(581,"strong"),e(582,"medir"),t(),e(583," qu\xE9 ocupa espacio (analizadores de bundle + budgets que fallan el build si te pasas). "),t(),n(584,"h4"),e(585,"Lazy loading y code splitting"),t(),n(586,"p"),e(587," Cada "),n(588,"code"),e(589,"loadComponent()"),t(),e(590," / "),n(591,"code"),e(592,"loadChildren()"),t(),e(593," con "),n(594,"code"),e(595,"import()"),t(),e(596," din\xE1mico genera un chunk separado que solo se descarga al navegar. Los bloques "),n(597,"code"),e(598,"@defer"),t(),e(599," hacen lo mismo dentro de una p\xE1gina. "),t(),n(600,"pre")(601,"code"),e(602,`// app.routes.ts \u2014 cada feature es un chunk independiente
export const routes: Routes = [
  {
    path: 'reports',
    loadComponent: () =>
      import('./features/reports/reports.component')
        .then(m => m.ReportsComponent)
  },
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.routes')
  }
];`),t()(),n(603,"h4"),e(604,"Analizar el bundle"),t(),n(605,"pre")(606,"code"),e(607,`// Opci\xF3n A \u2014 source-map-explorer (treemap desde source maps)
// ng build --source-map
// npx source-map-explorer dist/app/browser/*.js

// Opci\xF3n B \u2014 esbuild (builder "application", Angular 17+)
// ng build --stats-json
// npx esbuild-visualizer --metadata dist/app/stats.json --open`),t()(),n(608,"p"),e(609,' Qu\xE9 buscar en el treemap: dependencias enormes (moment.js \u2192 date-fns, lodash completo \u2192 lodash-es con imports puntuales), c\xF3digo duplicado entre chunks, features que deber\xEDan ser lazy pero est\xE1n en el bundle inicial (un import est\xE1tico "accidental" desde un archivo eager arrastra todo el m\xF3dulo al main). '),t(),n(610,"h4"),e(611,"Budgets en angular.json: presupuesto que rompe el build"),t(),n(612,"pre")(613,"code"),e(614,`// angular.json \u2192 projects.app.architect.build.configurations.production
"budgets": [
  {
    "type": "initial",
    "maximumWarning": "500kB",
    "maximumError": "1MB"
  },
  {
    "type": "anyComponentStyle",
    "maximumWarning": "4kB",
    "maximumError": "8kB"
  }
]`),t()(),n(615,"p"),e(616," Los budgets convierten el tama\xF1o del bundle en una "),n(617,"strong"),e(618,"regresi\xF3n detectable en CI"),t(),e(619,": si un PR agrega una dependencia pesada, el build avisa (warning) o falla (error) antes de llegar a producci\xF3n. "),t(),n(620,"h4"),e(621,"\u26A0\uFE0F Errores comunes"),t(),n(622,"ul")(623,"li")(624,"strong"),e(625,"Import est\xE1tico que rompe el split:"),t(),e(626," importar un s\xEDmbolo de una feature lazy desde c\xF3digo eager (p. ej. un modelo o constante) mete todo el chunk en el main. Extrae lo compartido a "),n(627,"code"),e(628,"shared/"),t(),e(629,"."),t(),n(630,"li")(631,"strong"),e(632,"Analizar el build de desarrollo:"),t(),e(633," sin tree shaking ni minificaci\xF3n los n\xFAmeros no significan nada. Siempre analiza el build de producci\xF3n."),t(),n(634,"li")(635,"strong"),e(636,"Barrel files ("),n(637,"code"),e(638,"index.ts"),t(),e(639,") gigantes:"),t(),e(640," re-exportar todo desde un barrel puede impedir el tree shaking efectivo y crear dependencias circulares."),t(),n(641,"li")(642,"strong"),e(643,"Budgets tan holgados que nunca fallan:"),t(),e(644," aj\xFAstalos al tama\xF1o real actual + margen peque\xF1o, y b\xE1jalos cuando optimices."),t()(),n(645,"h4"),e(646,"\u{1F3A4} Preguntas de entrevista"),t(),n(647,"ul")(648,"li")(649,"strong"),e(650,"\xBFC\xF3mo reduces el bundle inicial de una app Angular?"),t(),e(651," Lazy loading de rutas, @defer, tree shaking con imports puntuales, revisar dependencias pesadas con un analizador y aplicar budgets para evitar regresiones."),t(),n(652,"li")(653,"strong"),e(654,"\xBFQu\xE9 diferencia hay entre lazy loading y tree shaking?"),t(),e(655," Tree shaking elimina c\xF3digo muerto en build time; lazy loading difiere la descarga de c\xF3digo vivo hasta que se necesita."),t(),n(656,"li")(657,"strong"),e(658,"\xBFC\xF3mo detectas qu\xE9 dependencia infl\xF3 el bundle?"),t(),e(659," Build de producci\xF3n con source maps o stats.json + source-map-explorer / esbuild-visualizer: el treemap muestra el peso por m\xF3dulo."),t()(),n(660,"div",2),e(661," \u{1F4C2} "),n(662,"code"),e(663,"app.routes.ts"),t(),e(664," \u2014 Lazy loading de todas las features reduce el bundle inicial "),t()(),n(665,"div",6)(666,"h3"),e(667,"5. Preloading Strategies"),t(),n(668,"p"),e(669," Las estrategias de precarga permiten cargar m\xF3dulos lazy en background despu\xE9s del initial load. "),n(670,"code"),e(671,"PreloadAllModules"),t(),e(672," precarga todo autom\xE1ticamente. Para control fino, crea una estrategia custom que precargue solo rutas marcadas con "),n(673,"code"),e(674,"data: { preload: true }"),t(),e(675,". "),t(),n(676,"pre")(677,"code"),e(678,"provideRouter(routes, withPreloading(PreloadAllModules))"),t()(),n(679,"h4"),e(680,"\u26A0\uFE0F Errores comunes"),t(),n(681,"ul")(682,"li")(683,"strong")(684,"code"),e(685,"PreloadAllModules"),t(),e(686," en apps grandes:"),t(),e(687," precargar 40 features compite por ancho de banda con im\xE1genes y datos del initial load. Usa una estrategia selectiva o basada en "),n(688,"code"),e(689,"navigator.connection"),t(),e(690," (no precargar en redes lentas)."),t(),n(691,"li")(692,"strong"),e(693,"Confundir preloading con eager loading:"),t(),e(694," el preloading ocurre "),n(695,"em"),e(696,"despu\xE9s"),t(),e(697," del initial load, en background; no afecta el bundle inicial."),t()(),n(698,"h4"),e(699,"\u{1F3A4} Preguntas de entrevista"),t(),n(700,"ul")(701,"li")(702,"strong"),e(703,"\xBFPreloading empeora el tiempo de carga inicial?"),t(),e(704," No: se ejecuta despu\xE9s de que la app es estable; solo consume red en background."),t(),n(705,"li")(706,"strong"),e(707,"\xBFC\xF3mo precargar\xEDas solo algunas rutas?"),t(),e(708," Con una PreloadingStrategy custom que lea "),n(709,"code"),e(710,"route.data['preload']"),t(),e(711," y decida llamar a "),n(712,"code"),e(713,"load()"),t(),e(714," o devolver "),n(715,"code"),e(716,"of(null)"),t(),e(717,"."),t()(),n(718,"div",2),e(719," \u{1F4C2} "),n(720,"code"),e(721,"app.routes.ts"),t(),e(722," \u2014 Rutas lazy-loaded listas para preloading strategies "),t()(),n(723,"div",7)(724,"h3"),e(725,"6. Web Workers"),t(),n(726,"p"),e(727," Los Web Workers ejecutan c\xF3digo en un hilo separado, evitando bloquear el main thread con operaciones pesadas (procesamiento de datos, c\xE1lculos, compresi\xF3n). Angular CLI facilita su creaci\xF3n con "),n(728,"code"),e(729,"ng generate web-worker"),t(),e(730,". "),t(),n(731,"pre")(732,"code"),e(733,`// Generar:
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
});`),t()(),n(734,"h4"),e(735,"\u26A0\uFE0F Errores comunes"),t(),n(736,"ul")(737,"li")(738,"strong"),e(739,"Usar workers para tareas triviales:"),t(),e(740," serializar los datos (structured clone) tiene costo; para c\xE1lculos de < 10-20 ms no compensa."),t(),n(741,"li")(742,"strong"),e(743,"Intentar tocar el DOM o inyectar servicios Angular dentro del worker:"),t(),e(744," el worker corre en otro contexto, sin DOM ni DI."),t(),n(745,"li")(746,"strong"),e(747,"Enviar objetos gigantes por copia:"),t(),e(748," para buffers grandes usa "),n(749,"code"),e(750,"Transferable"),t(),e(751," ("),n(752,"code"),e(753,"ArrayBuffer"),t(),e(754,") y evita la copia."),t()(),n(755,"h4"),e(756,"\u{1F3A4} Preguntas de entrevista"),t(),n(757,"ul")(758,"li")(759,"strong"),e(760,"\xBFCu\xE1ndo mueves trabajo a un Web Worker?"),t(),e(761," Cuando un c\xE1lculo s\xEDncrono bloquea el main thread > 50 ms (parsing masivo, orden/filtrado de datasets grandes, compresi\xF3n) y degradar\xEDa INP."),t(),n(762,"li")(763,"strong"),e(764,"\xBFC\xF3mo se comunican worker y componente?"),t(),e(765," Solo por mensajes ("),n(766,"code"),e(767,"postMessage"),t(),e(768," / "),n(769,"code"),e(770,"onmessage"),t(),e(771,") con structured clone o Transferables; no comparten memoria (salvo SharedArrayBuffer)."),t()()(),n(772,"div",8)(773,"h3"),e(774,"7 \xB7 Estrategia completa de optimizaci\xF3n"),t(),n(775,"p"),e(776," Checklist ordenado de mayor a menor impacto para optimizar una app Angular. Aplica cada nivel en orden: corregir change detection mal usado tiene m\xE1s efecto que cualquier ajuste de red o SSR. "),t(),n(777,"h4"),e(778,"Nivel 1 \u2014 Change Detection (mayor impacto)"),t(),n(779,"p"),e(780," Objetivo: "),n(781,"strong"),e(782,"OnPush en el 100 % de componentes"),t(),e(783,". Angular Default recorre todo el \xE1rbol en cada evento; OnPush lo limita a cambios de referencia en "),n(784,"code"),e(785,"@Input()"),t(),e(786,", eventos del template o "),n(787,"code"),e(788,"markForCheck()"),t(),e(789,". "),t(),n(790,"p")(791,"strong"),e(792,"Migrar a OnPush sin romper nada:"),t()(),n(793,"ol")(794,"li"),e(795,"Reemplazar mutaciones por inmutabilidad: "),n(796,"code"),e(797,"{ ...obj, prop: newVal }"),t(),e(798," en vez de "),n(799,"code"),e(800,"obj.prop = newVal"),t(),e(801,"."),t(),n(802,"li"),e(803,"Usar "),n(804,"code"),e(805,"async"),t(),e(806," pipe o signals para datos reactivos."),t(),n(807,"li"),e(808,"Agregar "),n(809,"code"),e(810,"changeDetection: ChangeDetectionStrategy.OnPush"),t(),e(811," al componente."),t()(),n(812,"p")(813,"strong"),e(814,"Signal-based components"),t(),e(815," ofrecen CD granular sin Zone.js. Para c\xF3digo que no necesita disparar CD (scroll listeners, animaciones de canvas), usa "),n(816,"code"),e(817,"NgZone.runOutsideAngular()"),t(),e(818,": "),t(),n(819,"pre"),a(),n(820,"code"),e(821,`@Component({ ... })
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
}`),t(),i(),t(),n(822,"h4"),e(823,"Nivel 2 \u2014 Bundle Size"),t(),n(824,"ul")(825,"li")(826,"strong"),e(827,"Lazy loading de TODAS las features:"),t(),n(828,"code"),e(829,"loadChildren()"),t(),e(830," / "),n(831,"code"),e(832,"loadComponent()"),t(),e(833,"."),t(),n(834,"li")(835,"strong"),e(836,"Analizar bundle:"),t(),n(837,"code"),e(838,"ng build --stats-json && npx source-map-explorer dist/**/*.js"),t()(),n(839,"li")(840,"strong"),e(841,"Tree shaking:"),t(),e(842," importar selectivamente "),n(843,"code"),e(844,"import { map } from 'rxjs/operators'"),t(),e(845,", nunca "),n(846,"code"),e(847,"import * as rx from 'rxjs'"),t(),e(848,"."),t(),n(849,"li"),e(850,"Remover dependencias innecesarias del "),n(851,"code"),e(852,"package.json"),t(),e(853,"."),t(),n(854,"li")(855,"strong"),e(856,"Preloading strategies:"),t(),n(857,"code"),e(858,"PreloadAllModules"),t(),e(859," o una estrategia custom para rutas frecuentes."),t()(),n(860,"p")(861,"strong"),e(862,"Estrategia de preloading custom:"),t()(),n(863,"pre"),a(),n(864,"code"),e(865,`@Injectable({ providedIn: 'root' })
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
provideRouter(routes, withPreloading(SelectivePreloadStrategy))`),t(),i(),t(),n(866,"h4"),e(867,"Nivel 3 \u2014 Rendering"),t(),n(868,"ul")(869,"li")(870,"strong")(871,"code"),e(872,"trackBy"),t(),e(873," en TODOS los "),n(874,"code"),e(875,"@for"),t(),e(876," / "),n(877,"code"),e(878,"*ngFor"),t(),e(879,":"),t(),e(880," evita re-crear nodos DOM al cambiar la lista."),t(),n(881,"li")(882,"strong"),e(883,"Virtual scrolling"),t(),e(884," para listas largas (100+ items): "),n(885,"code"),e(886,"cdk-virtual-scroll-viewport"),t(),e(887,"."),t(),n(888,"li")(889,"strong")(890,"code"),e(891,"@defer"),t()(),e(892," para componentes pesados below the fold."),t(),n(893,"li")(894,"strong"),e(895,"Evitar funciones en templates:"),t(),n(896,"code"),a(),e(897,"{{ getTotal() }}"),i(),t(),e(898," se recalcula en cada CD cycle \u2192 usar "),n(899,"code"),e(900,"computed"),t(),e(901," signal o un pipe puro."),t(),n(902,"li")(903,"code"),e(904,"ngClass"),t(),e(905," / "),n(906,"code"),e(907,"ngStyle"),t(),e(908," con objetos cacheados, no funciones."),t()(),n(909,"h4"),e(910,"Nivel 4 \u2014 Network"),t(),n(911,"ul")(912,"li")(913,"code"),e(914,"shareReplay(1)"),t(),e(915," para cachear HTTP responses compartidas."),t(),n(916,"li"),e(917,"HTTP caching con interceptor: ETag, If-None-Match."),t(),n(918,"li"),e(919,"Prefetch data con resolvers."),t(),n(920,"li"),e(921,"Pagination vs infinite scroll vs virtual scroll \u2014 elige seg\xFAn el UX."),t(),n(922,"li"),e(923,"Compress: gzip / brotli en servidor."),t()(),n(924,"p")(925,"strong"),e(926,"Interceptor de cach\xE9 HTTP con ETag:"),t()(),n(927,"pre"),a(),n(928,"code"),e(929,`export function httpCacheInterceptor(): HttpInterceptorFn {
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
provideHttpClient(withInterceptors([httpCacheInterceptor()]))`),t(),i(),t(),n(930,"h4"),e(931,"Nivel 5 \u2014 SSR & Hydration"),t(),n(932,"ul")(933,"li")(934,"strong"),e(935,"Server-Side Rendering"),t(),e(936," mejora LCP y SEO."),t(),n(937,"li")(938,"strong"),e(939,"Hydration (Angular 16+):"),t(),e(940," no destruye y recrea el DOM del servidor, lo reutiliza."),t(),n(941,"li")(942,"code"),e(943,"provideClientHydration()"),t(),e(944," en "),n(945,"code"),e(946,"app.config"),t(),e(947,"."),t(),n(948,"li")(949,"code"),e(950,"afterNextRender()"),t(),e(951," para c\xF3digo que solo debe correr en el browser (acceso a "),n(952,"code"),e(953,"window"),t(),e(954,", "),n(955,"code"),e(956,"document"),t(),e(957,", etc.)."),t()(),n(958,"pre"),a(),n(959,"code"),e(960,`// app.config.ts
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
}`),t(),i(),t(),n(961,"h4"),e(962,"Nivel 6 \u2014 Web Workers"),t(),n(963,"ul")(964,"li"),e(965,"Para c\xE1lculos pesados: parsing CSV, procesamiento de im\xE1genes, ordenamiento masivo."),t(),n(966,"li")(967,"code"),e(968,"ng generate web-worker my-worker"),t()(),n(969,"li"),e(970,"No pueden acceder al DOM."),t(),n(971,"li"),e(972,"Comunicaci\xF3n por mensajes: "),n(973,"code"),e(974,"worker.postMessage()"),t(),e(975," / "),n(976,"code"),e(977,"worker.onmessage"),t(),e(978,"."),t()(),n(979,"h4"),e(980,"M\xE9tricas a medir"),t(),n(981,"table")(982,"thead")(983,"tr")(984,"th"),e(985,"M\xE9trica"),t(),n(986,"th"),e(987,"Target"),t(),n(988,"th"),e(989,"Herramienta"),t()()(),n(990,"tbody")(991,"tr")(992,"td"),e(993,"LCP"),t(),n(994,"td"),e(995,"< 2.5 s"),t(),n(996,"td"),e(997,"Lighthouse"),t()(),n(998,"tr")(999,"td"),e(1e3,"FID / INP"),t(),n(1001,"td"),e(1002,"< 200 ms"),t(),n(1003,"td"),e(1004,"Lighthouse"),t()(),n(1005,"tr")(1006,"td"),e(1007,"CLS"),t(),n(1008,"td"),e(1009,"< 0.1"),t(),n(1010,"td"),e(1011,"Lighthouse"),t()(),n(1012,"tr")(1013,"td"),e(1014,"Bundle size"),t(),n(1015,"td"),e(1016,"< 200 KB initial"),t(),n(1017,"td"),e(1018,"source-map-explorer"),t()(),n(1019,"tr")(1020,"td"),e(1021,"Component renders"),t(),n(1022,"td"),e(1023,"M\xEDnimos"),t(),n(1024,"td"),e(1025,"Angular DevTools"),t()()()(),n(1026,"div",2),e(1027," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(1028,"ul")(1029,"li")(1030,"code"),e(1031,"app.config.ts"),t(),e(1032," \u2014 provideRouter con preloading strategy"),t(),n(1033,"li")(1034,"code"),e(1035,"app.routes.ts"),t(),e(1036," \u2014 Lazy loading de todas las features"),t(),n(1037,"li")(1038,"code"),e(1039,"features/performance-lab/perf-demo.ts"),t(),e(1040," \u2014 trackBy, @defer, virtual scrolling"),t()()()(),n(1041,"div",9)(1042,"h3"),e(1043,"8 \xB7 Anti-patterns de Performance"),t(),n(1044,"p"),e(1045," Errores comunes que degradan el rendimiento de una app Angular. Cada uno muestra el c\xF3digo incorrecto (\u274C) y la correcci\xF3n (\u2705). "),t(),n(1046,"h4"),e(1047,"1. Funciones en template \u2014 se ejecutan en cada CD cycle"),t(),n(1048,"pre"),a(),n(1049,"code"),a(),e(1050,`// \u274C MAL \u2014 getTotal() se llama en CADA ciclo de change detection
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
}`),i(),t(),i(),t(),n(1051,"p")(1052,"strong"),e(1053,"\xBFPor qu\xE9?"),t(),e(1054," Angular ejecuta las expresiones del template en cada ciclo de CD. Un "),n(1055,"code"),e(1056,"computed"),t(),e(1057," signal memoriza el resultado y solo recalcula cuando sus dependencias cambian. "),t(),n(1058,"h4"),e(1059,"2. Suscripciones manuales sin cleanup \u2014 memory leaks"),t(),n(1060,"pre"),a(),n(1061,"code"),e(1062,`// \u274C MAL \u2014 suscripci\xF3n nunca se limpia \u2192 memory leak
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
}`),t(),i(),t(),n(1063,"p")(1064,"strong"),e(1065,"\xBFPor qu\xE9?"),t(),e(1066," Las suscripciones manuales persisten despu\xE9s de destruir el componente. El "),n(1067,"code"),e(1068,"async"),t(),e(1069," pipe o "),n(1070,"code"),e(1071,"takeUntilDestroyed"),t(),e(1072," garantizan la limpieza autom\xE1tica. "),t(),n(1073,"h4"),e(1074,"3. Importar m\xF3dulos enteros \u2014 bundle bloat"),t(),n(1075,"pre"),a(),n(1076,"code"),e(1077,`// \u274C MAL \u2014 importa TODO RxJS (~45 KB)
import * as rx from 'rxjs';
const result$ = rx.of(1).pipe(rx.map(x => x * 2));

// \u2705 BIEN \u2014 tree-shakeable, solo importa lo usado (~2 KB)
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
const result$ = of(1).pipe(map(x => x * 2));`),t(),i(),t(),n(1078,"p")(1079,"strong"),e(1080,"\xBFPor qu\xE9?"),t(),e(1081," Los import con "),n(1082,"code"),e(1083,"*"),t(),e(1084," impiden que el bundler elimine c\xF3digo no utilizado (tree shaking). Importar solo los s\xEDmbolos necesarios reduce dr\xE1sticamente el tama\xF1o del bundle. "),t(),n(1085,"h4"),e(1086,"4. No usar trackBy \u2014 re-renderiza toda la lista"),t(),n(1087,"pre"),a(),n(1088,"code"),e(1089,`// \u274C MAL \u2014 sin track, Angular destruye y recrea todos los nodos DOM
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
})`),t(),i(),t(),n(1090,"p")(1091,"strong"),e(1092,"\xBFPor qu\xE9?"),t(),e(1093," Sin un "),n(1094,"code"),e(1095,"track"),t(),e(1096," estable, Angular no puede identificar qu\xE9 elementos cambiaron. Usar "),n(1097,"code"),e(1098,"$index"),t(),e(1099," falla cuando el orden cambia. Siempre usa una propiedad \xFAnica como "),n(1100,"code"),e(1101,"id"),t(),e(1102,". "),t(),n(1103,"h4"),e(1104,"5. Mutaci\xF3n de objetos con OnPush \u2014 cambios invisibles"),t(),n(1105,"pre"),a(),n(1106,"code"),e(1107,`// \u274C MAL \u2014 mutar el array no cambia la referencia \u2192 OnPush no detecta
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
}`),t(),i(),t(),n(1108,"p")(1109,"strong"),e(1110,"\xBFPor qu\xE9?"),t(),n(1111,"code"),e(1112,"OnPush"),t(),e(1113," compara referencias, no contenido. Mutar un objeto/array mantiene la misma referencia, as\xED que Angular ignora el cambio. Siempre crea nuevas referencias con spread o "),n(1114,"code"),e(1115,".map()"),t(),e(1116,". "),t(),n(1117,"h4"),e(1118,"6. ExpressionChangedAfterItHasBeenCheckedError"),t(),n(1119,"pre"),a(),n(1120,"code"),e(1121,`// \u274C MAL \u2014 cambiar estado en ngAfterViewInit dispara el error
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
}`),t(),i(),t(),n(1122,"p")(1123,"strong"),e(1124,"\xBFPor qu\xE9?"),t(),e(1125," Angular verifica que los bindings no cambien entre el check y el re-check (en dev mode). Modificar estado en "),n(1126,"code"),e(1127,"ngAfterViewInit"),t(),e(1128," viola esta regla. Usa "),n(1129,"code"),e(1130,"afterNextRender"),t(),e(1131," o programa el cambio para el siguiente frame. "),t(),n(1132,"h4"),e(1133,"7. Observables sin compartir \u2014 m\xFAltiples HTTP calls"),t(),n(1134,"pre"),a(),n(1135,"code"),e(1136,`// \u274C MAL \u2014 cada suscripci\xF3n dispara un HTTP request nuevo
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
}`),t(),i(),t(),n(1137,"p")(1138,"strong"),e(1139,"\xBFPor qu\xE9?"),t(),e(1140," Cada "),n(1141,"code"),e(1142,".subscribe()"),t(),e(1143," a un Observable HTTP fr\xEDo crea una nueva petici\xF3n. "),n(1144,"code"),e(1145,"shareReplay"),t(),e(1146," con "),n(1147,"code"),e(1148,"refCount: true"),t(),e(1149," comparte la respuesta y libera el cach\xE9 cuando no hay suscriptores. "),t()(),n(1150,"div",10)(1151,"h3"),e(1152,"9. Memoizaci\xF3n \u2014 computed signals y pure pipes"),t(),n(1153,"p"),e(1154," Memoizar = "),n(1155,"strong"),e(1156,"cachear el resultado de un c\xE1lculo"),t(),e(1157," y recalcular solo cuando cambian sus entradas. En Angular hay dos herramientas nativas: "),n(1158,"code"),e(1159,"computed()"),t(),e(1160," (signals) y los "),n(1161,"strong"),e(1162,"pure pipes"),t(),e(1163,". El anti-patr\xF3n que ambas resuelven es el mismo: "),n(1164,"strong"),e(1165,"llamar m\xE9todos en el template"),t(),e(1166,". "),t(),n(1167,"h4"),e(1168,"\xBFPor qu\xE9 los m\xE9todos en template son costosos?"),t(),n(1169,"p"),e(1170," Angular no puede saber si "),n(1171,"code"),e(1172,"getTotal()"),t(),e(1173," es pura o depende de algo externo, as\xED que la "),n(1174,"strong"),e(1175,"re-ejecuta en cada ciclo de change detection"),t(),e(1176," \u2014 que en apps con estrategia Default puede correr decenas de veces por segundo (cada click, keypress, respuesta HTTP...). Un "),n(1177,"code"),e(1178,"filter().map().reduce()"),t(),e(1179,' "inocente" dentro de un '),n(1180,"code"),e(1181,"@for"),t(),e(1182," de 50 items se convierte en miles de ejecuciones por segundo. "),t(),n(1183,"pre"),a(),n(1184,"code"),a(),e(1185,`// \u274C Se ejecuta en CADA ciclo de CD
template: \\\`<p>Total: {{ getTotal() }}</p>\\\`

// \u2705 computed: memoizado, recalcula SOLO si cambian sus dependencias
items = signal<Item[]>([]);
total = computed(() =>
  this.items().reduce((sum, i) => sum + i.price, 0)
);
template: \\\`<p>Total: {{ total() }}</p>\\\``),i(),t(),i(),t(),n(1186,"h4"),e(1187,"Pure pipes: memoizaci\xF3n por argumentos"),t(),n(1188,"p"),e(1189," Un pipe con "),n(1190,"code"),e(1191,"pure: true"),t(),e(1192," (el default) solo se re-ejecuta cuando "),n(1193,"strong"),e(1194,"cambia la referencia de sus argumentos"),t(),e(1195,". Es la opci\xF3n id\xF3nea para transformar datos que llegan por "),n(1196,"code"),e(1197,"@Input()"),t(),e(1198," o cuando la misma transformaci\xF3n se usa en muchos templates. "),t(),n(1199,"pre"),a(),n(1200,"code"),a(),e(1201,`@Pipe({ name: 'fileSize' })  // pure por defecto
export class FileSizePipe implements PipeTransform {
  transform(bytes: number): string {
    if (bytes < 1024) return \\\`\${bytes} B\\\`;
    if (bytes < 1_048_576) return \\\`\${(bytes / 1024).toFixed(1)} KB\\\`;
    return \\\`\${(bytes / 1_048_576).toFixed(1)} MB\\\`;
  }
}

// template \u2014 solo se recalcula si doc.size cambia de valor
// {{ doc.size | fileSize }}`),i(),t(),i(),t(),n(1202,"h4"),e(1203,"\xBFcomputed o pipe?"),t(),n(1204,"ul")(1205,"li")(1206,"strong")(1207,"code"),e(1208,"computed()"),t()(),e(1209," \u2014 l\xF3gica derivada del estado del componente (signals). Encadenable, testeable, granular con OnPush/zoneless."),t(),n(1210,"li")(1211,"strong"),e(1212,"Pure pipe"),t(),e(1213," \u2014 transformaci\xF3n reutilizable y sin estado (formatos, unidades, filtros). Se comparte entre toda la app."),t(),n(1214,"li")(1215,"strong"),e(1216,"Impure pipe"),t(),e(1217," ("),n(1218,"code"),e(1219,"pure: false"),t(),e(1220,") \u2014 casi nunca: se ejecuta en cada CD, igual de caro que un m\xE9todo en template."),t()(),n(1221,"h4"),e(1222,"\u26A0\uFE0F Errores comunes"),t(),n(1223,"ul")(1224,"li")(1225,"strong"),e(1226,"computed con side effects:"),t(),n(1227,"code"),e(1228,"computed()"),t(),e(1229," debe ser puro; para efectos usa "),n(1230,"code"),e(1231,"effect()"),t(),e(1232,"."),t(),n(1233,"li")(1234,"strong"),e(1235,"Pure pipe con arrays mutados:"),t(),e(1236," si mutas el array la referencia no cambia y el pipe no se re-ejecuta \u2014 el gemelo del problema de OnPush."),t(),n(1237,"li")(1238,"strong"),e(1239,"Getters en template creyendo que se cachean:"),t(),n(1240,"code"),e(1241,"get total()"),t(),e(1242," se ejecuta en cada CD igual que un m\xE9todo."),t(),n(1243,"li")(1244,"strong"),e(1245,"Crear objetos/arrays inline en el template"),t(),e(1246," ("),n(1247,"code"),e(1248,'[options]="{ compact: true }"'),t(),e(1249,"): nueva referencia en cada CD \u2192 el hijo OnPush se re-renderiza siempre."),t()(),n(1250,"h4"),e(1251,"\u{1F3A4} Preguntas de entrevista"),t(),n(1252,"ul")(1253,"li")(1254,"strong"),e(1255,"\xBFPor qu\xE9 no llamar m\xE9todos en el template?"),t(),e(1256," Angular los re-ejecuta en cada ciclo de CD porque no puede asumir que son puros; con listas y CD frecuente el costo escala multiplicativamente."),t(),n(1257,"li")(1258,"strong"),e(1259,"\xBFCu\xE1ndo se re-ejecuta un pure pipe?"),t(),e(1260," Solo cuando cambia la referencia (o valor primitivo) de sus argumentos."),t(),n(1261,"li")(1262,"strong"),e(1263,"\xBFQu\xE9 ventaja tiene computed() sobre un m\xE9todo?"),t(),e(1264," Memoiza el resultado y rastrea sus dependencias: recalcula \xFAnicamente cuando alguno de los signals le\xEDdos cambia."),t()(),n(1265,"div",2),e(1266," \u{1F4C2} "),n(1267,"code"),e(1268,"features/performance-lab/perf-demo.ts"),t(),e(1269," \u2014 signals + contadores de render que evidencian re-ejecuciones "),t()(),n(1270,"div",11)(1271,"h3"),e(1272,"10. NgOptimizedImage \u2014 im\xE1genes optimizadas"),t(),n(1273,"p"),e(1274," Las im\xE1genes suelen ser el elemento LCP y la primera causa de CLS. La directiva "),n(1275,"code"),e(1276,"NgOptimizedImage"),t(),e(1277," ("),n(1278,"code"),e(1279,"@angular/common"),t(),e(1280,") aplica las best practices autom\xE1ticamente: "),n(1281,"strong"),e(1282,"lazy loading por defecto"),t(),e(1283,", exige "),n(1284,"code"),e(1285,"width"),t(),e(1286,"/"),n(1287,"code"),e(1288,"height"),t(),e(1289," para reservar espacio (evita layout shift), genera "),n(1290,"code"),e(1291,"srcset"),t(),e(1292," responsive y con "),n(1293,"code"),e(1294,"priority"),t(),e(1295," emite "),n(1296,"code"),e(1297,'fetchpriority="high"'),t(),e(1298," + "),n(1299,"code"),e(1300,'<link rel="preload">'),t(),e(1301," para la imagen cr\xEDtica. "),t(),n(1302,"pre")(1303,"code"),e(1304,`import { NgOptimizedImage } from '@angular/common';

@Component({
  imports: [NgOptimizedImage],
  template: \\\`
    <!-- Imagen LCP (hero): priority = eager + preload + fetchpriority -->
    <img ngSrc="/assets/hero.webp" width="1200" height="600"
         priority alt="Dashboard" />

    <!-- Grid responsive: sizes genera el srcset adecuado -->
    <img ngSrc="/assets/products/p-101.webp" width="400" height="300"
         sizes="(max-width: 768px) 100vw, 33vw" alt="Producto" />

    <!-- Contenedor fluido: fill en lugar de width/height -->
    <div class="banner">  <!-- position: relative -->
      <img ngSrc="/assets/banner.webp" fill alt="" />
    </div>
  \\\`
})`),t()(),n(1305,"h4"),e(1306,"Image loaders para CDNs"),t(),n(1307,"p"),e(1308," Con un loader, "),n(1309,"code"),e(1310,"ngSrc"),t(),e(1311," se transforma en URLs del CDN con resize/format autom\xE1tico (Cloudinary, Imgix, ImageKit, Netlify o uno custom): "),t(),n(1312,"pre")(1313,"code"),e(1314,`// app.config.ts
providers: [
  provideImgixLoader('https://mi-cuenta.imgix.net'),
  // o custom:
  {
    provide: IMAGE_LOADER,
    useValue: (config: ImageLoaderConfig) =>
      \\\`https://cdn.midominio.com/\${config.src}?w=\${config.width}&fmt=webp\\\`
  }
]`),t()(),n(1315,"h4"),e(1316,"Best practices"),t(),n(1317,"ul")(1318,"li")(1319,"code"),e(1320,"priority"),t(),n(1321,"strong"),e(1322,"solo"),t(),e(1323," en la imagen LCP (1 por p\xE1gina, above the fold)."),t(),n(1324,"li"),e(1325,"Formatos modernos: WebP/AVIF reducen 30-60 % vs JPEG."),t(),n(1326,"li")(1327,"code"),e(1328,"width"),t(),e(1329,"/"),n(1330,"code"),e(1331,"height"),t(),e(1332," con el "),n(1333,"strong"),e(1334,"aspect ratio real"),t(),e(1335," del archivo \u2014 la directiva avisa si lo distorsionas."),t(),n(1336,"li"),e(1337,"Todo lo below the fold se queda con el lazy loading por defecto."),t()(),n(1338,"h4"),e(1339,"\u26A0\uFE0F Errores comunes"),t(),n(1340,"ul")(1341,"li")(1342,"strong"),e(1343,"Olvidar "),n(1344,"code"),e(1345,"priority"),t(),e(1346," en el hero:"),t(),e(1347," la imagen LCP se carga lazy y el LCP se dispara. NgOptimizedImage lo detecta y lanza warning en dev."),t(),n(1348,"li")(1349,"strong"),e(1350,"Poner "),n(1351,"code"),e(1352,"priority"),t(),e(1353," en muchas im\xE1genes:"),t(),e(1354," todas compiten por la red y ninguna llega antes."),t(),n(1355,"li")(1356,"strong")(1357,"code"),e(1358,"fill"),t(),e(1359," sin "),n(1360,"code"),e(1361,"position: relative"),t()(),e(1362," en el contenedor: la imagen se posiciona respecto a otro ancestro."),t(),n(1363,"li")(1364,"strong"),e(1365,"Servir una imagen de 2000px en un slot de 300px:"),t(),e(1366," usa un loader/CDN que redimensione seg\xFAn el "),n(1367,"code"),e(1368,"srcset"),t(),e(1369,"."),t()(),n(1370,"h4"),e(1371,"\u{1F3A4} Preguntas de entrevista"),t(),n(1372,"ul")(1373,"li")(1374,"strong"),e(1375,"\xBFQu\xE9 hace exactamente "),n(1376,"code"),e(1377,"priority"),t(),e(1378,"?"),t(),e(1379," Desactiva el lazy loading, marca "),n(1380,"code"),e(1381,'fetchpriority="high"'),t(),e(1382," y genera un preload hint: la imagen cr\xEDtica empieza a descargarse lo antes posible."),t(),n(1383,"li")(1384,"strong"),e(1385,"\xBFC\xF3mo evita CLS NgOptimizedImage?"),t(),e(1386," Obliga a declarar width/height (o fill) para que el browser reserve el espacio antes de descargar la imagen."),t(),n(1387,"li")(1388,"strong"),e(1389,"\xBFPara qu\xE9 sirve "),n(1390,"code"),e(1391,"sizes"),t(),e(1392,"?"),t(),e(1393," Le dice al browser qu\xE9 ancho ocupar\xE1 la imagen en cada breakpoint para que elija la variante correcta del srcset."),t()()(),n(1394,"div",12)(1395,"h3"),e(1396,"11. runOutsideAngular y Zoneless"),t(),n(1397,"p")(1398,"strong"),e(1399,"Zone.js"),t(),e(1400,' parchea las APIs as\xEDncronas del browser (eventos, timers, promises, XHR) para saber "algo pas\xF3 \u2192 ejecuta change detection". El problema: eventos de alta frecuencia ('),n(1401,"code"),e(1402,"scroll"),t(),e(1403,", "),n(1404,"code"),e(1405,"mousemove"),t(),e(1406,", "),n(1407,"code"),e(1408,"requestAnimationFrame"),t(),e(1409,", websockets con ticks) disparan CD "),n(1410,"strong"),e(1411,"decenas de veces por segundo"),t(),e(1412," aunque la UI no necesite actualizarse. "),t(),n(1413,"h4"),e(1414,"runOutsideAngular: escapar de la zona"),t(),n(1415,"pre")(1416,"code"),e(1417,`@Component({ /* ... */ })
export class CanvasChartComponent {
  private ngZone = inject(NgZone);
  private fps = signal(0);

  constructor() {
    this.ngZone.runOutsideAngular(() => {
      // \u2705 el loop de animaci\xF3n NO dispara CD en cada frame
      const loop = () => {
        this.drawFrame();
        requestAnimationFrame(loop);
      };
      requestAnimationFrame(loop);
    });
  }

  private onStatsReady(fps: number) {
    // Volver a la zona SOLO cuando la UI debe actualizarse
    this.ngZone.run(() => this.fps.set(fps));
  }
}`),t()(),n(1418,"p"),e(1419," Casos de uso: listeners de scroll/resize/mousemove, animaciones canvas/WebGL, integraci\xF3n con librer\xEDas third-party (charts, mapas), polling. Regla: corre fuera lo frecuente, y re-entra con "),n(1420,"code"),e(1421,"ngZone.run()"),t(),e(1422," (o actualiza un signal) solo cuando haya algo que pintar. "),t(),n(1423,"h4"),e(1424,"Zoneless: Angular sin Zone.js"),t(),n(1425,"p"),e(1426," El modo "),n(1427,"strong"),e(1428,"zoneless"),t(),e(1429,' elimina Zone.js: la CD ya no se dispara "por si acaso", sino por '),n(1430,"strong"),e(1431,"notificaciones expl\xEDcitas"),t(),e(1432," \u2014 signals le\xEDdos en templates, eventos de template, "),n(1433,"code"),e(1434,"async"),t(),e(1435," pipe y "),n(1436,"code"),e(1437,"markForCheck()"),t(),e(1438,". Beneficios: menos JS inicial (~13 KB de zone.js), sin parcheo global, stack traces limpios y CD proporcional a lo que realmente cambi\xF3. "),t(),n(1439,"pre")(1440,"code"),e(1441,`// app.config.ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    // y elimina 'zone.js' de "polyfills" en angular.json
  ]
};

// En zoneless, esto NO actualiza la UI:
setTimeout(() => { this.title = 'nuevo'; }, 1000);       // \u274C

// Esto s\xED:
setTimeout(() => this.title.set('nuevo'), 1000);          // \u2705 signal`),t()(),n(1442,"h4"),e(1443,"\u26A0\uFE0F Errores comunes"),t(),n(1444,"ul")(1445,"li")(1446,"strong"),e(1447,"Olvidar re-entrar a la zona:"),t(),e(1448," actualizas una propiedad plana desde un callback fuera de la zona y la vista no cambia. Usa "),n(1449,"code"),e(1450,"ngZone.run()"),t(),e(1451," o signals (funcionan en ambos mundos)."),t(),n(1452,"li")(1453,"strong"),e(1454,"Migrar a zoneless con estado en propiedades mutables:"),t(),e(1455," todo lo que la vista muestre debe fluir por signals / async pipe / eventos; lo dem\xE1s queda congelado."),t(),n(1456,"li")(1457,"strong"),e(1458,"Registrar listeners fuera de la zona y no removerlos:"),t(),e(1459," sigue siendo un memory leak; guarda la referencia y limpia en "),n(1460,"code"),e(1461,"DestroyRef.onDestroy()"),t(),e(1462,"."),t()(),n(1463,"h4"),e(1464,"\u{1F3A4} Preguntas de entrevista"),t(),n(1465,"ul")(1466,"li")(1467,"strong"),e(1468,"\xBFQu\xE9 hace Zone.js y qu\xE9 costo tiene?"),t(),e(1469," Parchea las APIs async para disparar CD tras cada tarea; el costo es CD excesiva con eventos de alta frecuencia y overhead global."),t(),n(1470,"li")(1471,"strong"),e(1472,"\xBFCu\xE1ndo usar\xEDas runOutsideAngular?"),t(),e(1473," Para trabajo frecuente que no cambia la UI en cada tick: animaciones, scroll/mousemove, polling, librer\xEDas de terceros."),t(),n(1474,"li")(1475,"strong"),e(1476,"\xBFQu\xE9 requisitos tiene una app zoneless?"),t(),e(1477,' Que toda actualizaci\xF3n de la vista pase por signals, async pipe, eventos de template o markForCheck() \u2014 nada de confiar en que "el setTimeout refresca solo".'),t()()(),n(1478,"div",13)(1479,"h3"),e(1480,"12. Web Vitals: LCP, CLS e INP"),t(),n(1481,"p"),e(1482," Los "),n(1483,"strong"),e(1484,"Core Web Vitals"),t(),e(1485," son las m\xE9tricas de experiencia de usuario que Google usa para medir (y rankear) p\xE1ginas. Se miden sobre usuarios reales (field data / CrUX), no solo en Lighthouse. "),t(),n(1486,"table")(1487,"thead")(1488,"tr")(1489,"th"),e(1490,"M\xE9trica"),t(),n(1491,"th"),e(1492,"Qu\xE9 mide"),t(),n(1493,"th"),e(1494,"Bueno"),t(),n(1495,"th"),e(1496,"Pobre"),t()()(),n(1497,"tbody")(1498,"tr")(1499,"td")(1500,"strong"),e(1501,"LCP"),t(),e(1502," (Largest Contentful Paint)"),t(),n(1503,"td"),e(1504,"Cu\xE1ndo se pinta el elemento m\xE1s grande visible (hero, t\xEDtulo)"),t(),n(1505,"td"),e(1506,"\u2264 2.5 s"),t(),n(1507,"td"),e(1508,"> 4 s"),t()(),n(1509,"tr")(1510,"td")(1511,"strong"),e(1512,"CLS"),t(),e(1513," (Cumulative Layout Shift)"),t(),n(1514,"td"),e(1515,'Cu\xE1nto "salta" el layout durante la vida de la p\xE1gina'),t(),n(1516,"td"),e(1517,"\u2264 0.1"),t(),n(1518,"td"),e(1519,"> 0.25"),t()(),n(1520,"tr")(1521,"td")(1522,"strong"),e(1523,"INP"),t(),e(1524," (Interaction to Next Paint)"),t(),n(1525,"td"),e(1526,"Latencia de la peor interacci\xF3n (click/tecla \u2192 siguiente frame). Reemplaz\xF3 a FID en 2024"),t(),n(1527,"td"),e(1528,"\u2264 200 ms"),t(),n(1529,"td"),e(1530,"> 500 ms"),t()()()(),n(1531,"h4"),e(1532,"C\xF3mo mejorarlas en Angular"),t(),n(1533,"ul")(1534,"li")(1535,"strong"),e(1536,"LCP:"),t(),e(1537," SSR (el HTML llega renderizado), "),n(1538,"code"),e(1539,"NgOptimizedImage"),t(),e(1540," con "),n(1541,"code"),e(1542,"priority"),t(),e(1543," en la imagen hero, bundle inicial peque\xF1o (lazy loading + @defer), preconnect a CDNs y fuentes con "),n(1544,"code"),e(1545,"font-display: swap"),t(),e(1546,"."),t(),n(1547,"li")(1548,"strong"),e(1549,"CLS:"),t(),e(1550," dimensiones expl\xEDcitas en im\xE1genes/iframes/ads, skeletons con el tama\xF1o real en "),n(1551,"code"),e(1552,"@placeholder"),t(),e(1553," y estados de loading, no insertar banners encima del contenido ya pintado."),t(),n(1554,"li")(1555,"strong"),e(1556,"INP:"),t(),e(1557," handlers cortos (< 50 ms), OnPush/zoneless para que un click no revise toda la app, c\xE1lculos pesados a Web Workers o troceados ("),n(1558,"code"),e(1559,"scheduler.yield"),t(),e(1560,"/"),n(1561,"code"),e(1562,"setTimeout"),t(),e(1563,"), evitar m\xE9todos costosos en template."),t()(),n(1564,"h4"),e(1565,"Medir en usuarios reales (RUM)"),t(),n(1566,"pre")(1567,"code"),e(1568,`// npm i web-vitals
import { onLCP, onCLS, onINP } from 'web-vitals';

export function initWebVitals() {
  const report = (metric: { name: string; value: number }) =>
    navigator.sendBeacon('/analytics', JSON.stringify(metric));

  onLCP(report);
  onCLS(report);
  onINP(report);
}

// main.ts
bootstrapApplication(AppComponent, appConfig)
  .then(() => initWebVitals());`),t()(),n(1569,"h4"),e(1570,"\u26A0\uFE0F Errores comunes"),t(),n(1571,"ul")(1572,"li")(1573,"strong"),e(1574,"Optimizar solo para Lighthouse local:"),t(),e(1575," tu m\xE1quina con cach\xE9 caliente no es un m\xF3vil de gama media con 4G. Usa field data (CrUX, RUM)."),t(),n(1576,"li")(1577,"strong"),e(1578,"Confundir FID con INP:"),t(),e(1579," FID med\xEDa solo el delay de la primera interacci\xF3n; INP mide todas las interacciones e incluye el procesamiento del handler y el render."),t(),n(1580,"li")(1581,"strong"),e(1582,"Spinner que causa CLS:"),t(),e(1583," un loading peque\xF1o que se reemplaza por contenido grande desplaza todo lo de abajo."),t()(),n(1584,"h4"),e(1585,"\u{1F3A4} Preguntas de entrevista"),t(),n(1586,"ul")(1587,"li")(1588,"strong"),e(1589,"\xBFQu\xE9 mide INP y c\xF3mo lo mejorar\xEDas en Angular?"),t(),e(1590," La latencia de interacci\xF3n hasta el siguiente paint; se mejora acortando handlers, con OnPush/zoneless, workers y evitando trabajo pesado en template."),t(),n(1591,"li")(1592,"strong"),e(1593,"\xBFC\xF3mo ayuda SSR al LCP?"),t(),e(1594," El HTML ya llega renderizado desde el servidor: el contenido principal se pinta sin esperar a descargar y ejecutar el JS."),t(),n(1595,"li")(1596,"strong"),e(1597,"\xBFQu\xE9 provoca CLS en una SPA y c\xF3mo lo previenes?"),t(),e(1598," Contenido async sin espacio reservado; se previene con dimensiones expl\xEDcitas y skeletons del tama\xF1o final."),t()()(),n(1599,"div",14)(1600,"h3"),e(1601,"13. SSR, Hydration e Incremental Hydration"),t(),n(1602,"p"),e(1603," Con "),n(1604,"strong"),e(1605,"SSR"),t(),e(1606," ("),n(1607,"code"),e(1608,"@angular/ssr"),t(),e(1609,") el servidor renderiza la ruta y env\xEDa HTML completo: el usuario ve contenido de inmediato (mejor LCP y SEO) mientras el JS se descarga en paralelo. "),n(1610,"strong"),e(1611,"Hydration"),t(),e(1612," es el paso siguiente: en lugar de destruir ese DOM y re-renderizar desde cero (comportamiento antiguo, causaba flicker), Angular "),n(1613,"strong"),e(1614,"reutiliza el DOM existente"),t(),e(1615,", adjunta listeners y restaura estado. "),t(),n(1616,"pre")(1617,"code"),e(1618,`// app.config.ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(
      withEventReplay(),           // captura clicks pre-hydration y los re-emite
      withIncrementalHydration()   // habilita hydrate triggers en @defer
    )
  ]
};`),t()(),n(1619,"h4"),e(1620,"Reglas para que la hydration funcione"),t(),n(1621,"ul")(1622,"li"),e(1623,"El HTML del servidor y el del cliente deben "),n(1624,"strong"),e(1625,"coincidir"),t(),e(1626,": nada de manipular DOM directo ("),n(1627,"code"),e(1628,"innerHTML"),t(),e(1629,", jQuery) ni HTML inv\xE1lido ("),n(1630,"code"),e(1631,"<div>"),t(),e(1632," dentro de "),n(1633,"code"),e(1634,"<p>"),t(),e(1635,", "),n(1636,"code"),e(1637,"<tr>"),t(),e(1638," fuera de "),n(1639,"code"),e(1640,"<table>"),t(),e(1641,")."),t(),n(1642,"li"),e(1643,"C\xF3digo browser-only (acceso a "),n(1644,"code"),e(1645,"window"),t(),e(1646,", "),n(1647,"code"),e(1648,"document"),t(),e(1649,", canvas) va en "),n(1650,"code"),e(1651,"afterNextRender()"),t(),e(1652,"."),t(),n(1653,"li"),e(1654,"Componentes problem\xE1ticos pueden excluirse con "),n(1655,"code"),e(1656,"ngSkipHydration"),t(),e(1657," (\xFAltimo recurso)."),t(),n(1658,"li")(1659,"code"),e(1660,"HttpClient"),t(),e(1661," con SSR cachea las respuestas del servidor y las "),n(1662,"strong"),e(1663,"transfiere al cliente"),t(),e(1664," (TransferState) para no repetir los requests."),t()(),n(1665,"h4"),e(1666,"Incremental hydration: hidratar solo lo que se usa"),t(),n(1667,"p"),e(1668," Con hydration completa, toda la p\xE1gina se hidrata al cargar el JS. La "),n(1669,"strong"),e(1670,"incremental hydration"),t(),e(1671," (Angular 19+) combina SSR con "),n(1672,"code"),e(1673,"@defer"),t(),e(1674,": el HTML del bloque llega renderizado del servidor y "),n(1675,"strong"),e(1676,"se muestra desde el primer momento"),t(),e(1677,", pero su JavaScript no se descarga ni ejecuta hasta el trigger "),n(1678,"code"),e(1679,"hydrate"),t(),e(1680,'. Es "islands architecture" en Angular. '),t(),n(1681,"pre")(1682,"code"),e(1683,`@defer (hydrate on viewport) {
  <app-comments />   <!-- HTML visible desde el server-render;
                          JS solo cuando entra al viewport -->
}

@defer (hydrate on interaction) {
  <app-video-player />
}

@defer (hydrate never) {
  <app-static-footer />   <!-- nunca se hidrata: HTML puro -->
}`),t()(),n(1684,"h4"),e(1685,"\u26A0\uFE0F Errores comunes"),t(),n(1686,"ul")(1687,"li")(1688,"strong"),e(1689,"Acceder a "),n(1690,"code"),e(1691,"window"),t(),e(1692," en el constructor/ngOnInit:"),t(),e(1693," revienta en el servidor (Node no tiene DOM). Usa "),n(1694,"code"),e(1695,"afterNextRender()"),t(),e(1696,"."),t(),n(1697,"li")(1698,"strong"),e(1699,"HTML mal anidado:"),t(),e(1700,' el browser lo "corrige" al parsear y ya no coincide con lo que Angular espera \u2192 hydration mismatch.'),t(),n(1701,"li")(1702,"strong"),e(1703,"Renderizar contenido dependiente de datos no deterministas"),t(),e(1704," (fecha/aleatorio distinto en server y client) \u2192 mismatch visual."),t(),n(1705,"li")(1706,"strong"),e(1707,"Asumir que hydration = interactividad inmediata:"),t(),e(1708," hasta que el JS carga, los clicks se pierden \u2014 por eso existe "),n(1709,"code"),e(1710,"withEventReplay()"),t(),e(1711,"."),t()(),n(1712,"h4"),e(1713,"\u{1F3A4} Preguntas de entrevista"),t(),n(1714,"ul")(1715,"li")(1716,"strong"),e(1717,"\xBFQu\xE9 es hydration y qu\xE9 problema resuelve?"),t(),e(1718," Reutilizar el DOM renderizado en el servidor en lugar de destruirlo y re-crearlo: elimina el flicker y mejora LCP/CLS."),t(),n(1719,"li")(1720,"strong"),e(1721,"\xBFQu\xE9 aporta la incremental hydration?"),t(),e(1722," El HTML server-rendered se muestra ya, pero el JS de cada isla se difiere hasta su trigger \u2014 se hidrata solo lo que el usuario usa."),t(),n(1723,"li")(1724,"strong"),e(1725,"\xBFC\xF3mo evitas repetir requests HTTP tras SSR?"),t(),e(1726," Con el caching/TransferState de provideClientHydration: las respuestas del servidor viajan embebidas y el cliente las reutiliza."),t()()(),n(1727,"div",15)(1728,"h3"),e(1729,"14. Profiling con Angular DevTools y Chrome Performance"),t(),n(1730,"p"),e(1731," Regla de oro: "),n(1732,"strong"),e(1733,"medir antes de optimizar"),t(),e(1734,'. Sin un profile, "optimizas" por intuici\xF3n y sueles atacar el problema equivocado. Dos herramientas complementarias: '),n(1735,"strong"),e(1736,"Angular DevTools"),t(),e(1737," (qu\xE9 hace Angular) y el "),n(1738,"strong"),e(1739,"panel Performance de Chrome"),t(),e(1740," (qu\xE9 hace el browser). "),t(),n(1741,"h4"),e(1742,"Angular DevTools (extensi\xF3n de Chrome/Firefox)"),t(),n(1743,"ul")(1744,"li")(1745,"strong"),e(1746,"Components tab:"),t(),e(1747," inspecciona el \xE1rbol, inputs/outputs, signals y la estrategia de CD de cada componente."),t(),n(1748,"li")(1749,"strong"),e(1750,"Profiler tab:"),t(),e(1751," graba interacciones y muestra "),n(1752,"em"),e(1753,"cada ciclo de change detection"),t(),e(1754,": qu\xE9 lo dispar\xF3, qu\xE9 componentes se revisaron y cu\xE1nto tard\xF3 cada uno (flame graph / bar chart)."),t(),n(1755,"li"),e(1756,"Qu\xE9 buscar: componentes que se re-revisan en "),n(1757,"em"),e(1758,"cada"),t(),e(1759," ciclo sin cambiar (candidatos a OnPush), ciclos de CD demasiado frecuentes (eventos de alta frecuencia dentro de la zona) y componentes individuales lentos (l\xF3gica cara en getters/m\xE9todos de template)."),t()(),n(1760,"h4"),e(1761,"Chrome Performance panel"),t(),n(1762,"ul")(1763,"li"),e(1764,"Graba con "),n(1765,"strong"),e(1766,"CPU throttling 4x-6x"),t(),e(1767," para simular hardware real."),t(),n(1768,"li")(1769,"strong"),e(1770,"Long tasks"),t(),e(1771," (bloques rojos > 50 ms) bloquean el main thread y degradan INP: expande el flame chart para ver qu\xE9 funci\xF3n los causa."),t(),n(1772,"li"),e(1773,"Distingue las fases: "),n(1774,"em"),e(1775,"Scripting"),t(),e(1776," (JS/CD), "),n(1777,"em"),e(1778,"Rendering"),t(),e(1779," (style/layout) y "),n(1780,"em"),e(1781,"Painting"),t(),e(1782,". Muchos rec\xE1lculos de layout intercalados con JS = "),n(1783,"strong"),e(1784,"layout thrashing"),t(),e(1785," (leer "),n(1786,"code"),e(1787,"offsetHeight"),t(),e(1788," y escribir estilos en un loop)."),t(),n(1789,"li"),e(1790,"La pesta\xF1a "),n(1791,"strong"),e(1792,"Lighthouse"),t(),e(1793," automatiza un diagn\xF3stico inicial; el panel Performance explica el porqu\xE9."),t()(),n(1794,"pre")(1795,"code"),e(1796,`// Marcar c\xF3digo propio para verlo en el timeline
performance.mark('filter-start');
const result = this.applyFilters(rows);
performance.mark('filter-end');
performance.measure('filter', 'filter-start', 'filter-end');
// \u2192 aparece en Performance panel \u2192 "Timings"`),t()(),n(1797,"h4"),e(1798,"Workflow sugerido"),t(),n(1799,"ol")(1800,"li"),e(1801,"Reproduce la lentitud con una interacci\xF3n concreta."),t(),n(1802,"li"),e(1803,"Angular DevTools Profiler: \xBFla CD corre demasiado o hay un componente lento?"),t(),n(1804,"li"),e(1805,"Chrome Performance: \xBFel tiempo se va en scripting, layout o paint?"),t(),n(1806,"li"),e(1807,"Aplica el fix (OnPush, computed, defer, worker...) y "),n(1808,"strong"),e(1809,"vuelve a medir"),t(),e(1810,"."),t()(),n(1811,"h4"),e(1812,"\u26A0\uFE0F Errores comunes"),t(),n(1813,"ul")(1814,"li")(1815,"strong"),e(1816,"Perfilar en modo dev:"),t(),e(1817," los checks extra de desarrollo distorsionan; para n\xFAmeros reales usa un build de producci\xF3n (los profiles dev sirven para comparar relativo)."),t(),n(1818,"li")(1819,"strong"),e(1820,"Perfilar sin throttling"),t(),e(1821," en una workstation potente: los usuarios no tienen tu m\xE1quina."),t(),n(1822,"li")(1823,"strong"),e(1824,"Optimizar sin baseline:"),t(),e(1825,' guarda el profile "antes" para demostrar la mejora.'),t()(),n(1826,"h4"),e(1827,"\u{1F3A4} Preguntas de entrevista"),t(),n(1828,"ul")(1829,"li")(1830,"strong"),e(1831,"\xBFC\xF3mo detectas qu\xE9 componente ralentiza la app?"),t(),e(1832," Con el Profiler de Angular DevTools: grabar la interacci\xF3n y ordenar los componentes por tiempo de CD por ciclo."),t(),n(1833,"li")(1834,"strong"),e(1835,"\xBFQu\xE9 es una long task y por qu\xE9 importa?"),t(),e(1836," Trabajo > 50 ms en el main thread; durante ese tiempo el browser no responde a input \u2192 INP alto."),t(),n(1837,"li")(1838,"strong"),e(1839,"\xBFQu\xE9 es layout thrashing?"),t(),e(1840," Alternar lecturas (offsetWidth) y escrituras de estilos forzando rec\xE1lculos de layout s\xEDncronos repetidos; se arregla agrupando lecturas y escrituras."),t()()(),n(1841,"div",16)(1842,"h3"),e(1843,"15. Memory Leaks \u2014 detecci\xF3n y prevenci\xF3n"),t(),n(1844,"p"),e(1845," Un memory leak en una SPA es memoria que "),n(1846,"strong"),e(1847,"deber\xEDa liberarse al destruir un componente pero sigue referenciada"),t(),e(1848,". Como la app vive horas sin recargar, los leaks se acumulan: la app se vuelve lenta, el GC trabaja cada vez m\xE1s y al final la pesta\xF1a crashea. "),t(),n(1849,"h4"),e(1850,"Las 5 fuentes cl\xE1sicas en Angular"),t(),n(1851,"ul")(1852,"li")(1853,"strong"),e(1854,"Suscripciones RxJS sin cleanup"),t(),e(1855," a streams que no completan ("),n(1856,"code"),e(1857,"Subject"),t(),e(1858," de un servicio, "),n(1859,"code"),e(1860,"interval"),t(),e(1861,", router events, store). El closure retiene el componente entero."),t(),n(1862,"li")(1863,"strong"),e(1864,"Event listeners globales:"),t(),n(1865,"code"),e(1866,"window.addEventListener('resize', ...)"),t(),e(1867," sin el "),n(1868,"code"),e(1869,"removeEventListener"),t(),e(1870," correspondiente."),t(),n(1871,"li")(1872,"strong")(1873,"code"),e(1874,"setInterval"),t(),e(1875," / "),n(1876,"code"),e(1877,"requestAnimationFrame"),t()(),e(1878," sin "),n(1879,"code"),e(1880,"clearInterval"),t(),e(1881," / "),n(1882,"code"),e(1883,"cancelAnimationFrame"),t(),e(1884,"."),t(),n(1885,"li")(1886,"strong"),e(1887,"Librer\xEDas third-party sin "),n(1888,"code"),e(1889,"destroy()"),t(),e(1890,":"),t(),e(1891," charts, mapas y editores que registran sus propios listeners."),t(),n(1892,"li")(1893,"strong"),e(1894,"Referencias en servicios root:"),t(),e(1895," guardar componentes/elementos DOM en un singleton (caches, registries) los mantiene vivos para siempre."),t()(),n(1896,"pre")(1897,"code"),e(1898,`@Component({ /* ... */ })
export class DashboardComponent {
  private destroyRef = inject(DestroyRef);

  constructor() {
    // \u2705 RxJS: se cancela al destruir el componente
    interval(5000)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.refresh());

    // \u2705 Listener global con cleanup registrado
    const onResize = () => this.relayout();
    window.addEventListener('resize', onResize);
    this.destroyRef.onDestroy(() =>
      window.removeEventListener('resize', onResize)
    );

    // \u2705 Librer\xEDa externa con destroy()
    afterNextRender(() => {
      const chart = new Chart(this.canvas(), { /* ... */ });
      this.destroyRef.onDestroy(() => chart.destroy());
    });
  }
}`),t()(),n(1899,"h4"),e(1900,"Detectar leaks con Chrome DevTools"),t(),n(1901,"ol")(1902,"li")(1903,"strong"),e(1904,"Sospecha:"),t(),e(1905,' en Performance, graba con "Memory" activado: si el heap sube en escalera y el GC nunca lo baja al nivel inicial, hay leak.'),t(),n(1906,"li")(1907,"strong"),e(1908,"T\xE9cnica de los 3 snapshots"),t(),e(1909," (Memory \u2192 Heap snapshot): snapshot \u2192 navega para montar/desmontar el componente sospechoso varias veces \u2192 fuerza GC (icono \u{1F5D1}) \u2192 snapshot. Compara: si instancias del componente siguen creciendo, hay leak."),t(),n(1910,"li")(1911,"strong"),e(1912,"Buscar la causa:"),t(),e(1913," filtra por el nombre de la clase del componente y revisa "),n(1914,"em"),e(1915,"Retainers"),t(),e(1916,": la cadena de referencias muestra qui\xE9n lo mantiene vivo (un Subscriber, un listener, un array en un servicio...)."),t(),n(1917,"li")(1918,"strong"),e(1919,"Detached elements:"),t(),e(1920,' nodos DOM fuera del documento pero retenidos por JS \u2014 en el snapshot se llaman "Detached <div>".'),t()(),n(1921,"h4"),e(1922,"\u26A0\uFE0F Errores comunes"),t(),n(1923,"ul")(1924,"li")(1925,"strong"),e(1926,'"HttpClient no necesita unsubscribe, entonces nada lo necesita":'),t(),e(1927," los observables HTTP completan solos, pero Subjects, intervals, router events y stores NO."),t(),n(1928,"li")(1929,"strong")(1930,"code"),e(1931,"takeUntilDestroyed()"),t(),e(1932," fuera del injection context"),t(),e(1933," sin pasar "),n(1934,"code"),e(1935,"DestroyRef"),t(),e(1936,": lanza error. En ngOnInit u otros m\xE9todos: "),n(1937,"code"),e(1938,"takeUntilDestroyed(this.destroyRef)"),t(),e(1939,"."),t(),n(1940,"li")(1941,"strong"),e(1942,"Remover el listener con otra referencia de funci\xF3n:"),t(),n(1943,"code"),e(1944,"removeEventListener('resize', () => ...)"),t(),e(1945," no remueve nada; guarda la misma referencia."),t(),n(1946,"li")(1947,"strong"),e(1948,"Comparar snapshots sin forzar GC:"),t(),e(1949," memoria pendiente de recolecci\xF3n parece leak sin serlo."),t()(),n(1950,"h4"),e(1951,"\u{1F3A4} Preguntas de entrevista"),t(),n(1952,"ul")(1953,"li")(1954,"strong"),e(1955,"\xBFC\xF3mo confirmas un memory leak en una SPA?"),t(),e(1956," Heap snapshots repetidos tras montar/desmontar el componente con GC forzado: si las instancias crecen monot\xF3nicamente, hay leak; los Retainers muestran la causa."),t(),n(1957,"li")(1958,"strong"),e(1959,"\xBFQu\xE9 observables requieren cleanup?"),t(),e(1960," Los que no completan: Subjects de servicios, interval/timer, fromEvent, router events, stores. HTTP completa solo."),t(),n(1961,"li")(1962,"strong"),e(1963,"\xBFQu\xE9 mecanismos modernos de cleanup ofrece Angular?"),t(),n(1964,"code"),e(1965,"takeUntilDestroyed()"),t(),e(1966,", "),n(1967,"code"),e(1968,"DestroyRef.onDestroy()"),t(),e(1969,", el async pipe y los effects (se limpian con su contexto)."),t()(),n(1970,"div",2),e(1971," \u{1F4C2} "),n(1972,"code"),e(1973,"features/performance-lab/perf-learn.html"),t(),e(1974," \u2014 ver tambi\xE9n la card 8 (anti-patterns), punto 2: suscripciones sin cleanup "),t()()())},dependencies:[d],styles:["[_nghost-%COMP%]{display:block;padding:1rem 0}.cards[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.card[_ngcontent-%COMP%]{background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:1.2rem}.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 .6rem;font-size:1.1rem}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--text-muted);line-height:1.6;margin:0 0 .8rem}pre[_ngcontent-%COMP%]{background:var(--bg-code, #161b22);border:1px solid var(--border);border-radius:6px;padding:.8rem;overflow-x:auto;font-size:.85rem;line-height:1.5}code[_ngcontent-%COMP%]{color:var(--text)}.card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:1.1rem 0 .5rem;font-size:.95rem;color:var(--text)}.card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{color:var(--text-muted);line-height:1.6;margin:0 0 .8rem;padding-left:1.4rem}.card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:.35rem}.card[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;font-size:.85rem;margin:0 0 .9rem}.card[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid var(--border);padding:.4rem .6rem;text-align:left;vertical-align:top}.card[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:var(--bg, #0d1117);color:var(--text)}.card[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{color:var(--text-muted)}.code-ref[_ngcontent-%COMP%]{margin-top:.8rem;padding:.5rem .7rem;background:var(--bg, #0d1117);border-left:3px solid var(--accent-orange, #d29922);border-radius:4px;font-size:.82rem;color:var(--text-muted)}.code-ref[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:.3rem 0 0}"]})};export{s as PerfLearnComponent};
