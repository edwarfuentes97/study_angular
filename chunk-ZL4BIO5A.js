import{a as x}from"./chunk-WXOJIICE.js";import"./chunk-BKIDS2JO.js";import{Db as n,Eb as t,Fb as i,Ta as a,Zb as e,ac as l,cc as r,dc as m,ec as c,fb as s,fc as u}from"./chunk-G73V3KC4.js";import"./chunk-2NFLSA4Y.js";var p=class d{static \u0275fac=function(o){return new(o||d)};static \u0275cmp=s({type:d,selectors:[["app-rxjs-learn"]],decls:2282,vars:72,consts:[["appAutoGlossary","",1,"learn-page"],[1,"page-title"],["id","observable-vs-promise",1,"card"],[1,"compare-table"],[1,"language-typescript"],[1,"pitfalls"],[1,"interview"],[1,"code-ref"],["id","marble-diagrams",1,"card"],[1,"language-text"],["id","cold-vs-hot-observables",1,"card"],["id","subject-types",1,"card"],["id","operadores-de-flattening",1,"card"],["id","combining-operators",1,"card"],["id","memory-leaks",1,"card"],[2,"margin-top","0.8rem","color","var(--accent-green, #3fb950)"],["id","operadores-pipeables",1,"card"],["id","transformacion-deep-dive",1,"card"],[2,"color","var(--accent-red, #f85149)"],["id","filtrado-deep-dive",1,"card"],["id","combinacion-deep-dive",1,"card"],["id","manejo-de-errores",1,"card"],["id","multicasting-sharereplay",1,"card"],["id","patrones-rxjs-angular",1,"card"]],template:function(o,S){o&1&&(n(0,"div",0)(1,"h2",1),e(2,"\u{1F4D6} RxJS \u2014 Teor\xEDa y Conceptos"),t(),n(3,"div",2)(4,"h3"),e(5,"\u{1F535} Observable vs Promise"),t(),n(6,"table",3)(7,"thead")(8,"tr")(9,"th"),e(10,"Caracter\xEDstica"),t(),n(11,"th"),e(12,"Promise"),t(),n(13,"th"),e(14,"Observable"),t()()(),n(15,"tbody")(16,"tr")(17,"td"),e(18,"Ejecuci\xF3n"),t(),n(19,"td")(20,"strong"),e(21,"Eager"),t(),e(22," \u2014 se ejecuta al crearse"),t(),n(23,"td")(24,"strong"),e(25,"Lazy"),t(),e(26," \u2014 solo al suscribirse"),t()(),n(27,"tr")(28,"td"),e(29,"Valores"),t(),n(30,"td"),e(31,"Un solo valor"),t(),n(32,"td"),e(33,"M\xFAltiples valores en el tiempo"),t()(),n(34,"tr")(35,"td"),e(36,"Cancelaci\xF3n"),t(),n(37,"td"),e(38,"No se puede cancelar"),t(),n(39,"td")(40,"code"),e(41,"unsubscribe()"),t(),e(42," cancela"),t()(),n(43,"tr")(44,"td"),e(45,"Operadores"),t(),n(46,"td")(47,"code"),e(48,".then()"),t(),e(49,", "),n(50,"code"),e(51,".catch()"),t()(),n(52,"td"),e(53,"100+ operadores composables"),t()(),n(54,"tr")(55,"td"),e(56,"Multicast"),t(),n(57,"td"),e(58,"Siempre compartida"),t(),n(59,"td"),e(60,"Unicast por defecto, multicast con Subject"),t()()()(),n(61,"pre")(62,"code",4),e(63),t()(),n(64,"h4"),e(65,"Conversi\xF3n entre Promise y Observable"),t(),n(66,"pre")(67,"code",4),e(68,`import { firstValueFrom, lastValueFrom, defer } from 'rxjs';

// Observable \u2192 Promise (moderno; reemplaza al deprecado .toPromise())
const user = await firstValueFrom(this.http.get<User>('/api/me'));

// Promise \u2192 Observable de forma LAZY (se ejecuta al suscribirse)
const data$ = defer(() => fetch('/api/data').then(r => r.json()));
// \u26A0\uFE0F from(promise) NO es lazy: la Promise ya est\xE1 en ejecuci\xF3n`),t()(),n(69,"h4"),e(70,"\u26A0\uFE0F Errores comunes"),t(),n(71,"ul",5)(72,"li"),e(73,"Usar "),n(74,"code"),e(75,"from(promise)"),t(),e(76," creyendo que es lazy \u2014 la Promise se ejecut\xF3 al crearse. Usa "),n(77,"code"),e(78,"defer(() => promesa())"),t(),e(79," para diferir la ejecuci\xF3n."),t(),n(80,"li"),e(81,"Hacer "),n(82,"code"),e(83,"await firstValueFrom(stream$)"),t(),e(84," sobre un stream que quiz\xE1 nunca emite (p. ej. un "),n(85,"code"),e(86,"Subject"),t(),e(87,") \u2014 el "),n(88,"code"),e(89,"await"),t(),e(90," se queda colgado. A\xF1ade "),n(91,"code"),e(92,"timeout()"),t(),e(93," o valor por defecto."),t(),n(94,"li"),e(95,"Suscribirse varias veces a un cold Observable sin darse cuenta: cada "),n(96,"code"),e(97,"subscribe()"),t(),e(98," repite el trabajo (p. ej. otra petici\xF3n HTTP)."),t()(),n(99,"h4"),e(100,"\u{1F3A4} Preguntas de entrevista"),t(),n(101,"div",6)(102,"p")(103,"strong"),e(104,"P:"),t(),e(105," \xBFTres diferencias clave entre Promise y Observable?"),i(106,"br"),n(107,"strong"),e(108,"R:"),t(),e(109," Lazy vs eager, m\xFAltiples valores en el tiempo vs uno solo, y cancelable con "),n(110,"code"),e(111,"unsubscribe()"),t(),e(112," vs no cancelable."),t(),n(113,"p")(114,"strong"),e(115,"P:"),t(),e(116," \xBFC\xF3mo cancelas una petici\xF3n HTTP en Angular?"),i(117,"br"),n(118,"strong"),e(119,"R:"),t(),n(120,"code"),e(121,"HttpClient"),t(),e(122," devuelve Observables: al desuscribirse (manual, v\xEDa "),n(123,"code"),e(124,"switchMap"),t(),e(125,", o al destruirse un "),n(126,"code"),e(127,"async"),t(),e(128," pipe) la petici\xF3n XHR se aborta de verdad."),t()(),n(129,"div",7),e(130," \u{1F4C2} "),n(131,"code"),e(132,"features/rxjs-lab/observable-types.ts"),t(),e(133," \u2014 Demostraci\xF3n interactiva de Observable, Subject, BehaviorSubject "),t()(),n(134,"div",8)(135,"h3"),e(136,"\u{1F4C8} Marble Diagrams"),t(),n(137,"p"),e(138," Los marble diagrams son la "),n(139,"strong"),e(140,"notaci\xF3n est\xE1ndar"),t(),e(141," para describir streams en el tiempo. Dominarlos permite leer la documentaci\xF3n oficial, razonar sobre operadores y comunicar comportamiento as\xEDncrono en entrevistas y code reviews. "),t(),n(142,"pre")(143,"code",9),e(144,`Leyenda:
  --a--b--c-->   el tiempo avanza a la derecha; a, b, c son emisiones (next)
  |              complete \u2014 el stream termin\xF3 con \xE9xito
  #              error \u2014 el stream termin\xF3 con fallo
  (ab|)          emisiones s\xEDncronas agrupadas: emite a, b y completa a la vez

Ejemplo \u2014 map(x => x * 10):
  Source:  --1----2----3--|
  Output:  -10---20---30--|

Ejemplo \u2014 debounceTime(30):
  Source:  --a-b-c------d----|
  Output:  ---------c------d-|`),t()(),n(145,"p"),e(146,"Esta notaci\xF3n es "),n(147,"strong"),e(148,"ejecutable"),t(),e(149," en tests con "),n(150,"code"),e(151,"TestScheduler"),t(),e(152," (marble testing), con tiempo virtual:"),t(),n(153,"pre")(154,"code",4),e(155,`import { TestScheduler } from 'rxjs/testing';

const scheduler = new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected);
});

scheduler.run(({ cold, expectObservable }) => {
  const source$ = cold('--a--b--c--|', { a: 1, b: 2, c: 3 });
  const result$ = source$.pipe(map(x => x * 10));
  expectObservable(result$).toBe('--x--y--z--|', { x: 10, y: 20, z: 30 });
});`),t()(),n(156,"h4"),e(157,"\u26A0\uFE0F Errores comunes"),t(),n(158,"ul",5)(159,"li"),e(160,"Confundir "),n(161,"code"),e(162,"|"),t(),e(163," (complete) con "),n(164,"code"),e(165,"#"),t(),e(166," (error): "),n(167,"code"),e(168,"catchError"),t(),e(169," solo reacciona ante "),n(170,"code"),e(171,"#"),t(),e(172,', no ante un complete "vac\xEDo".'),t(),n(173,"li"),e(174,"Olvidar que en marble testing el tiempo es "),n(175,"strong"),e(176,"virtual"),t(),e(177,": "),n(178,"code"),e(179,"debounceTime(300)"),t(),e(180," se simula instant\xE1neamente, no espera 300 ms reales."),t()(),n(181,"h4"),e(182,"\u{1F3A4} Preguntas de entrevista"),t(),n(183,"div",6)(184,"p")(185,"strong"),e(186,"P:"),t(),e(187," \xBFQu\xE9 significa "),n(188,"code"),e(189,"--a--(bc)--|"),t(),e(190,"?"),i(191,"br"),n(192,"strong"),e(193,"R:"),t(),e(194," Emite "),n(195,"code"),e(196,"a"),t(),e(197,", luego "),n(198,"code"),e(199,"b"),t(),e(200," y "),n(201,"code"),e(202,"c"),t(),e(203," en el mismo instante, y despu\xE9s completa."),t(),n(204,"p")(205,"strong"),e(206,"P:"),t(),e(207," \xBFPor qu\xE9 marble testing y no "),n(208,"code"),e(209,"setTimeout"),t(),e(210," en los tests?"),i(211,"br"),n(212,"strong"),e(213,"R:"),t(),e(214," TestScheduler usa tiempo virtual: tests deterministas e instant\xE1neos, sin flakiness ni esperas reales."),t()()(),n(215,"div",10)(216,"h3"),e(217,"\u{1F321}\uFE0F Cold vs Hot Observables"),t(),n(218,"p"),e(219," Un Observable "),n(220,"strong"),e(221,"cold"),t(),e(222," crea su productor de datos "),n(223,"em"),e(224,"dentro"),t(),e(225," de cada suscripci\xF3n: cada "),n(226,"code"),e(227,"subscribe()"),t(),e(228," arranca una ejecuci\xF3n nueva e independiente ("),n(229,"strong"),e(230,"unicast"),t(),e(231,"). Un Observable "),n(232,"strong"),e(233,"hot"),t(),e(234," comparte un productor que vive "),n(235,"em"),e(236,"fuera"),t(),e(237,": los suscriptores se conectan a una emisi\xF3n en curso y se pierden lo anterior ("),n(238,"strong"),e(239,"multicast"),t(),e(240,"). "),t(),n(241,"table",3)(242,"thead")(243,"tr")(244,"th"),e(245,"Aspecto"),t(),n(246,"th"),e(247,"Cold \u2744\uFE0F"),t(),n(248,"th"),e(249,"Hot \u{1F525}"),t()()(),n(250,"tbody")(251,"tr")(252,"td"),e(253,"Productor"),t(),n(254,"td"),e(255,"Se crea al suscribirse"),t(),n(256,"td"),e(257,"Existe independientemente"),t()(),n(258,"tr")(259,"td"),e(260,"Suscriptores"),t(),n(261,"td"),e(262,"Cada uno su propia ejecuci\xF3n (unicast)"),t(),n(263,"td"),e(264,"Comparten las emisiones (multicast)"),t()(),n(265,"tr")(266,"td"),e(267,"Late subscriber"),t(),n(268,"td"),e(269,"Recibe todo desde el inicio"),t(),n(270,"td"),e(271,"Se pierde lo ya emitido"),t()(),n(272,"tr")(273,"td"),e(274,"Ejemplos"),t(),n(275,"td")(276,"code"),e(277,"HttpClient"),t(),e(278,", "),n(279,"code"),e(280,"of"),t(),e(281,", "),n(282,"code"),e(283,"timer"),t(),e(284,", "),n(285,"code"),e(286,"interval"),t()(),n(287,"td")(288,"code"),e(289,"Subject"),t(),e(290,", "),n(291,"code"),e(292,"fromEvent"),t(),e(293,", WebSocket, router events"),t()()()(),n(294,"pre")(295,"code",4),e(296,`// COLD: cada suscripci\xF3n genera SU PROPIO valor
const cold$ = new Observable<number>(sub => sub.next(Math.random()));
cold$.subscribe(v => console.log('A:', v)); // A: 0.183
cold$.subscribe(v => console.log('B:', v)); // B: 0.771 (\xA1distinto!)

// HOT: el productor est\xE1 fuera; todos ven lo mismo
const subject$ = new Subject<number>();
subject$.subscribe(v => console.log('A:', v));
subject$.subscribe(v => console.log('B:', v));
subject$.next(Math.random()); // A y B reciben el MISMO valor

// Cold \u2192 Hot: multicasting
const shared$ = this.http.get<Data>('/api/data').pipe(shareReplay(1));`),t()(),n(297,"h4"),e(298,"\u26A0\uFE0F Errores comunes"),t(),n(299,"ul",5)(300,"li"),e(301,"Suscribirse dos veces al mismo "),n(302,"code"),e(303,"HttpClient.get()"),t(),e(304," (p. ej. un "),n(305,"code"),e(306,"tap"),t(),e(307," de logging y un "),n(308,"code"),e(309,"async"),t(),e(310," pipe) \u2192 2 peticiones HTTP reales."),t(),n(311,"li"),e(312,'Suscribirse tarde a un hot Observable esperando recibir el "estado actual" \u2014 para eso existe '),n(313,"code"),e(314,"BehaviorSubject"),t(),e(315," o "),n(316,"code"),e(317,"shareReplay(1)"),t(),e(318,"."),t(),n(319,"li"),e(320,"Creer que un "),n(321,"code"),e(322,"Subject"),t(),e(323," guarda valores: sin replay, todo lo emitido antes de suscribirse se pierde."),t()(),n(324,"h4"),e(325,"\u{1F3A4} Preguntas de entrevista"),t(),n(326,"div",6)(327,"p")(328,"strong"),e(329,"P:"),t(),e(330," \xBF"),n(331,"code"),e(332,"HttpClient"),t(),e(333," devuelve un Observable cold o hot?"),i(334,"br"),n(335,"strong"),e(336,"R:"),t(),e(337," Cold: cada suscripci\xF3n dispara una petici\xF3n nueva; por eso se cachea con "),n(338,"code"),e(339,"shareReplay"),t(),e(340,"."),t(),n(341,"p")(342,"strong"),e(343,"P:"),t(),e(344," \xBFC\xF3mo conviertes un cold Observable en hot?"),i(345,"br"),n(346,"strong"),e(347,"R:"),t(),e(348," Con multicasting: "),n(349,"code"),e(350,"share()"),t(),e(351,", "),n(352,"code"),e(353,"shareReplay()"),t(),e(354," o canaliz\xE1ndolo por un "),n(355,"code"),e(356,"Subject"),t(),e(357,"."),t()(),n(358,"div",7),e(359," \u{1F4C2} "),n(360,"code"),e(361,"features/rxjs-lab/observable-types.ts"),t(),e(362," \u2014 Subjects (hot) con suscriptores tard\xEDos en vivo "),t()(),n(363,"div",11)(364,"h3"),e(365,"\u{1F4E1} Subject Types"),t(),n(366,"p"),e(367,"Los Subjects son Observables "),n(368,"strong"),e(369,"multicast"),t(),e(370," que tambi\xE9n son Observers (puedes emitir valores con "),n(371,"code"),e(372,".next()"),t(),e(373,")."),t(),n(374,"table",3)(375,"thead")(376,"tr")(377,"th"),e(378,"Tipo"),t(),n(379,"th"),e(380,"Late Subscriber recibe"),t(),n(381,"th"),e(382,"Uso t\xEDpico"),t()()(),n(383,"tbody")(384,"tr")(385,"td")(386,"code"),e(387,"Subject"),t()(),n(388,"td"),e(389,"Nada \u2014 solo valores futuros"),t(),n(390,"td"),e(391,"Event bus, notificaciones"),t()(),n(392,"tr")(393,"td")(394,"code"),e(395,"BehaviorSubject"),t()(),n(396,"td"),e(397,"\xDAltimo valor emitido (requiere valor inicial)"),t(),n(398,"td"),e(399,"Estado actual, config, auth status"),t()(),n(400,"tr")(401,"td")(402,"code"),e(403,"ReplaySubject(n)"),t()(),n(404,"td"),e(405,"\xDAltimos N valores"),t(),n(406,"td"),e(407,"Cache de mensajes, historial"),t()(),n(408,"tr")(409,"td")(410,"code"),e(411,"AsyncSubject"),t()(),n(412,"td"),e(413,"Solo el \xFAltimo valor, al completar"),t(),n(414,"td"),e(415,"HTTP responses, c\xE1lculos finales"),t()()()(),n(416,"pre")(417,"code",4),e(418),t()(),n(419,"h4"),e(420,"Caso real: servicio de autenticaci\xF3n con BehaviorSubject"),t(),n(421,"pre")(422,"code",4),e(423,`@Injectable({ providedIn: 'root' })
export class AuthService {
  // Estado privado mutable, API p\xFAblica de SOLO lectura
  private readonly userSubject = new BehaviorSubject<User | null>(null);
  readonly user$ = this.userSubject.asObservable();
  readonly isLoggedIn$ = this.user$.pipe(map(u => u !== null));

  login(credentials: Credentials) {
    return this.http.post<User>('/api/login', credentials).pipe(
      tap(user => this.userSubject.next(user))
    );
  }

  logout() {
    this.userSubject.next(null);
  }
}`),t()(),n(424,"h4"),e(425,"Casos de uso reales por tipo"),t(),n(426,"ul")(427,"li")(428,"strong"),e(429,"Subject"),t(),e(430," \u2014 event bus entre componentes hermanos, notificaciones toast, env\xEDo de mensajes por WebSocket."),t(),n(431,"li")(432,"strong"),e(433,"BehaviorSubject"),t(),e(434,' \u2014 estado con "valor actual": usuario logueado, tema, filtros de tabla, carrito. Es la base de los '),n(435,"em"),e(436,"state services"),t(),e(437," y permite lectura s\xEDncrona con "),n(438,"code"),e(439,".value"),t(),e(440,"."),t(),n(441,"li")(442,"strong"),e(443,"ReplaySubject(n)"),t(),e(444,' \u2014 historial: \xFAltimos N mensajes de chat, \xFAltimos eventos de navegaci\xF3n para un "volver atr\xE1s" inteligente.'),t(),n(445,"li")(446,"strong"),e(447,"AsyncSubject"),t(),e(448," \u2014 solo el resultado final de un proceso largo; raro en la pr\xE1ctica (una petici\xF3n de "),n(449,"code"),e(450,"HttpClient"),t(),e(451," ya se comporta parecido)."),t()(),n(452,"h4"),e(453,"\u26A0\uFE0F Errores comunes"),t(),n(454,"ul",5)(455,"li"),e(456,"Exponer el "),n(457,"code"),e(458,"Subject"),t(),e(459," directamente: cualquier consumidor puede hacer "),n(460,"code"),e(461,"next()"),t(),e(462,". Exp\xF3n "),n(463,"code"),e(464,"asObservable()"),t(),e(465," y m\xE9todos de mutaci\xF3n controlados."),t(),n(466,"li"),e(467,"Abusar de "),n(468,"code"),e(469,".value"),t(),e(470," del "),n(471,"code"),e(472,"BehaviorSubject"),t(),e(473," en vez de componer streams \u2014 rompe la reactividad y esconde dependencias."),t(),n(474,"li"),e(475,"Olvidar que un Subject tras "),n(476,"code"),e(477,"complete()"),t(),e(478," o "),n(479,"code"),e(480,"error()"),t(),e(481," queda "),n(482,"strong"),e(483,"muerto"),t(),e(484,": nunca vuelve a emitir, aunque llames "),n(485,"code"),e(486,"next()"),t(),e(487,"."),t(),n(488,"li"),e(489,"Crear un Subject donde bastaba un Observable derivado ("),n(490,"code"),e(491,"map"),t(),e(492,", "),n(493,"code"),e(494,"combineLatest"),t(),e(495,") \u2014 estado duplicado que acaba desincronizado."),t()(),n(496,"h4"),e(497,"\u{1F3A4} Preguntas de entrevista"),t(),n(498,"div",6)(499,"p")(500,"strong"),e(501,"P:"),t(),e(502," \xBFDiferencia entre Subject y BehaviorSubject?"),i(503,"br"),n(504,"strong"),e(505,"R:"),t(),e(506," BehaviorSubject exige valor inicial, recuerda el \xFAltimo valor y lo entrega de inmediato a nuevos suscriptores; Subject no recuerda nada."),t(),n(507,"p")(508,"strong"),e(509,"P:"),t(),e(510," \xBF"),n(511,"code"),e(512,"ReplaySubject(1)"),t(),e(513," es lo mismo que "),n(514,"code"),e(515,"BehaviorSubject"),t(),e(516,"?"),i(517,"br"),n(518,"strong"),e(519,"R:"),t(),e(520," Parecido, pero no: ReplaySubject no requiere valor inicial, no expone "),n(521,"code"),e(522,".value"),t(),e(523," s\xEDncrono y sigue re-emitiendo su buffer incluso despu\xE9s de "),n(524,"code"),e(525,"complete()"),t(),e(526,"."),t(),n(527,"p")(528,"strong"),e(529,"P:"),t(),e(530," \xBFEn qu\xE9 sentido un Subject es a la vez Observable y Observer?"),i(531,"br"),n(532,"strong"),e(533,"R:"),t(),e(534," Implementa ambas interfaces: puedes suscribirte a \xE9l (Observable) y puedes empujarle valores con "),n(535,"code"),e(536,"next/error/complete"),t(),e(537," (Observer), lo que lo hace ideal como puente multicast."),t()(),n(538,"div",7),e(539," \u{1F4C2} "),n(540,"code"),e(541,"features/rxjs-lab/observable-types.ts"),t(),e(542," \u2014 Subject, BehaviorSubject, ReplaySubject, AsyncSubject en acci\xF3n "),t()(),n(543,"div",12)(544,"h3"),e(545,"\u{1F500} Operadores de Flattening"),t(),n(546,"p"),e(547,"Transforman un Observable que emite Observables internos en un stream plano. La diferencia est\xE1 en c\xF3mo manejan la "),n(548,"strong"),e(549,"concurrencia"),t(),e(550,":"),t(),n(551,"table",3)(552,"thead")(553,"tr")(554,"th"),e(555,"Operador"),t(),n(556,"th"),e(557,"Comportamiento"),t(),n(558,"th"),e(559,"Caso de uso"),t()()(),n(560,"tbody")(561,"tr")(562,"td")(563,"code"),e(564,"switchMap"),t()(),n(565,"td")(566,"strong"),e(567,"Cancela"),t(),e(568," el inner anterior al recibir nuevo valor"),t(),n(569,"td"),e(570,"B\xFAsqueda typeahead, autocomplete"),t()(),n(571,"tr")(572,"td")(573,"code"),e(574,"mergeMap"),t()(),n(575,"td"),e(576,"Ejecuta todos en "),n(577,"strong"),e(578,"paralelo"),t()(),n(579,"td"),e(580,"Descargas paralelas, logs"),t()(),n(581,"tr")(582,"td")(583,"code"),e(584,"concatMap"),t()(),n(585,"td"),e(586,"Ejecuta en "),n(587,"strong"),e(588,"secuencia"),t(),e(589,", espera que termine cada uno"),t(),n(590,"td"),e(591,"Guardar formularios, orden importa"),t()(),n(592,"tr")(593,"td")(594,"code"),e(595,"exhaustMap"),t()(),n(596,"td")(597,"strong"),e(598,"Ignora"),t(),e(599," nuevos valores mientras hay uno en progreso"),t(),n(600,"td"),e(601,"Login button, submit de formulario"),t()()()(),n(602,"pre")(603,"code",4),e(604,`// switchMap \u2014 autocomplete: cancela b\xFAsqueda anterior
searchInput$.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap(term => this.api.search(term))
).subscribe(results => this.results = results);

// exhaustMap \u2014 login: ignora clicks mientras se procesa
loginClick$.pipe(
  exhaustMap(() => this.auth.login(credentials))
).subscribe(user => this.router.navigate(['/home']));`),t()(),n(605,"h4"),e(606,"\u{1F9E0} Regla mental para elegir"),t(),n(607,"ul")(608,"li")(609,"strong"),e(610,"switchMap"),t(),e(611,' \u2192 "solo me importa lo \xFAltimo": b\xFAsquedas, autocomplete, par\xE1metros de ruta. '),n(612,"em"),e(613,"Ideal para lecturas."),t()(),n(614,"li")(615,"strong"),e(616,"concatMap"),t(),e(617,' \u2192 "el orden importa": guardar cambios, colas de escritura. '),n(618,"em"),e(619,"Ideal para escrituras secuenciales."),t()(),n(620,"li")(621,"strong"),e(622,"mergeMap"),t(),e(623,' \u2192 "todo en paralelo, el orden no importa": subir varios archivos, borrados en lote.'),t(),n(624,"li")(625,"strong"),e(626,"exhaustMap"),t(),e(627,' \u2192 "ignora hasta que termine lo actual": login, submit \u2014 evita el doble env\xEDo.'),t()(),n(628,"h4"),e(629,"\u26A0\uFE0F Errores comunes"),t(),n(630,"ul",5)(631,"li"),e(632,"Usar "),n(633,"code"),e(634,"switchMap"),t(),e(635," para escrituras (POST/PUT/DELETE): si llega otro valor, la petici\xF3n en vuelo se cancela en el cliente pero "),n(636,"strong"),e(637,"puede haber llegado al servidor"),t(),e(638," \u2014 estado inconsistente. Usa "),n(639,"code"),e(640,"concatMap"),t(),e(641," o "),n(642,"code"),e(643,"exhaustMap"),t(),e(644,"."),t(),n(645,"li")(646,"code"),e(647,"mergeMap"),t(),e(648," sin l\xEDmite de concurrencia sobre listas grandes \u2192 cientos de peticiones simult\xE1neas. Usa el segundo argumento: "),n(649,"code"),e(650,"mergeMap(fn, 4)"),t(),e(651,"."),t(),n(652,"li")(653,"code"),e(654,"concatMap"),t(),e(655," con un inner que nunca completa (p. ej. un Subject) \u2192 la cola se congela para siempre."),t(),n(656,"li"),e(657,"Anidar "),n(658,"code"),e(659,"subscribe()"),t(),e(660," dentro de "),n(661,"code"),e(662,"subscribe()"),t(),e(663," en vez de aplanar \u2014 pierdes cancelaci\xF3n, composici\xF3n y control de errores."),t()(),n(664,"h4"),e(665,"\u{1F3A4} Preguntas de entrevista"),t(),n(666,"div",6)(667,"p")(668,"strong"),e(669,"P:"),t(),e(670," \xBFQu\xE9 operador usar\xEDas en un typeahead y por qu\xE9?"),i(671,"br"),n(672,"strong"),e(673,"R:"),t(),n(674,"code"),e(675,"switchMap"),t(),e(676,": cancela la petici\xF3n anterior y evita la race condition en la que una respuesta lenta y obsoleta pisa a la m\xE1s reciente."),t(),n(677,"p")(678,"strong"),e(679,"P:"),t(),e(680," \xBFDiferencia entre "),n(681,"code"),e(682,"exhaustMap"),t(),e(683," y "),n(684,"code"),e(685,"throttleTime"),t(),e(686," para evitar doble click?"),i(687,"br"),n(688,"strong"),e(689,"R:"),t(),n(690,"code"),e(691,"throttleTime"),t(),e(692," ignora por un tiempo fijo; "),n(693,"code"),e(694,"exhaustMap"),t(),e(695," ignora mientras la operaci\xF3n interna siga activa \u2014 se adapta a la duraci\xF3n real del trabajo."),t()(),n(696,"div",7),e(697," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(698,"ul")(699,"li")(700,"code"),e(701,"features/rxjs-lab/flattening-operators.ts"),t(),e(702," \u2014 Comparaci\xF3n interactiva de los 4 operadores"),t(),n(703,"li")(704,"code"),e(705,"features/ngrx-lab/store/product.effects.ts"),t(),e(706," \u2014 switchMap (load), exhaustMap (create), mergeMap (update/delete)"),t(),n(707,"li")(708,"code"),e(709,"features/rxjs-lab/search-typeahead.ts"),t(),e(710," \u2014 switchMap en b\xFAsqueda real con debounceTime"),t()()()(),n(711,"div",13)(712,"h3"),e(713,"\u{1F517} Combining Operators"),t(),n(714,"p"),e(715,"Combinan m\xFAltiples streams en uno solo:"),t(),n(716,"ul")(717,"li")(718,"strong")(719,"code"),e(720,"combineLatest"),t(),e(721,":"),t(),e(722," Emite cuando "),n(723,"em"),e(724,"cualquiera"),t(),e(725," de los streams emite (despu\xE9s de que todos hayan emitido al menos una vez). Ideal para derivar estado combinado."),t(),n(726,"li")(727,"strong")(728,"code"),e(729,"forkJoin"),t(),e(730,":"),t(),e(731," Espera a que "),n(732,"em"),e(733,"todos"),t(),e(734," completen y emite los \xFAltimos valores como array. Perfecto para llamadas HTTP paralelas."),t(),n(735,"li")(736,"strong")(737,"code"),e(738,"withLatestFrom"),t(),e(739,":"),t(),e(740," Cuando el source emite, toma el valor m\xE1s reciente de otro stream. \xDAtil para enriquecer eventos con datos actuales."),t()(),n(741,"pre")(742,"code",4),e(743),t()(),n(744,"div",7),e(745," \u{1F4C2} "),n(746,"code"),e(747,"features/rxjs-lab/combining-operators.ts"),t(),e(748," \u2014 combineLatest, forkJoin, withLatestFrom en acci\xF3n "),t()(),n(749,"div",14)(750,"h3"),e(751,"\u{1F6A8} Memory Leaks"),t(),n(752,"p"),e(753," Las suscripciones que no se cancelan siguen ejecut\xE1ndose despu\xE9s de destruir el componente. Especialmente peligroso con "),n(754,"code"),e(755,"interval()"),t(),e(756,", "),n(757,"code"),e(758,"fromEvent()"),t(),e(759,", y WebSockets. "),t(),n(760,"h4",15),e(761,"4 Patrones para evitarlos:"),t(),n(762,"pre")(763,"code",4),e(764),t()(),n(765,"p")(766,"strong"),e(767,"Regla:"),t(),e(768," Si no usas "),n(769,"code"),e(770,"async"),t(),e(771," pipe, "),n(772,"code"),e(773,"toSignal()"),t(),e(774,", o "),n(775,"code"),e(776,"takeUntilDestroyed()"),t(),e(777,", necesitas cancelar manualmente."),t(),n(778,"h4"),e(779,"\u26A0\uFE0F Errores comunes"),t(),n(780,"ul",5)(781,"li"),e(782,"Creer que "),n(783,"code"),e(784,"HttpClient"),t(),e(785,' "no necesita cleanup": completa solo, s\xED, pero si el componente se destruye antes de la respuesta el callback a\xFAn se ejecuta sobre un componente muerto.'),t(),n(786,"li"),e(787,"Llamar "),n(788,"code"),e(789,"takeUntilDestroyed()"),t(),e(790," sin argumento fuera del injection context (dentro de "),n(791,"code"),e(792,"ngOnInit"),t(),e(793," o de un handler) \u2192 error en runtime. P\xE1sale un "),n(794,"code"),e(795,"DestroyRef"),t(),e(796," inyectado."),t(),n(797,"li"),e(798,"Con el patr\xF3n cl\xE1sico: olvidar el "),n(799,"code"),e(800,"destroy$.next()"),t(),e(801," en "),n(802,"code"),e(803,"ngOnDestroy"),t(),e(804,", o poner "),n(805,"code"),e(806,"takeUntil"),t(),e(807," antes del \xFAltimo operador del pipe."),t(),n(808,"li")(809,"code"),e(810,"fromEvent(window, 'scroll')"),t(),e(811," sin cleanup: el listener retiene el componente entero en su closure \u2014 uno de los leaks m\xE1s grandes y silenciosos."),t(),n(812,"li"),e(813,'Guardar suscripciones en variables sueltas "para luego" y nunca llamar '),n(814,"code"),e(815,"unsubscribe()"),t(),e(816,"; si lo haces manual, usa un "),n(817,"code"),e(818,"Subscription"),t(),e(819," contenedor con "),n(820,"code"),e(821,".add()"),t(),e(822,"."),t()(),n(823,"h4"),e(824,"\u{1F3A4} Preguntas de entrevista"),t(),n(825,"div",6)(826,"p")(827,"strong"),e(828,"P:"),t(),e(829," \xBFQu\xE9 suscripciones necesitan unsubscribe manual?"),i(830,"br"),n(831,"strong"),e(832,"R:"),t(),e(833," Las de fuentes que no completan (interval, fromEvent, Subjects, store) suscritas en TypeScript sin "),n(834,"code"),e(835,"async"),t(),e(836," pipe, "),n(837,"code"),e(838,"toSignal"),t(),e(839," ni "),n(840,"code"),e(841,"takeUntilDestroyed"),t(),e(842,"."),t(),n(843,"p")(844,"strong"),e(845,"P:"),t(),e(846," \xBFC\xF3mo detectar\xEDas un memory leak de RxJS en producci\xF3n?"),i(847,"br"),n(848,"strong"),e(849,"R:"),t(),e(850," S\xEDntomas: logs o peticiones que contin\xFAan tras destruir el componente, memoria creciente al navegar ida y vuelta. Diagn\xF3stico: heap snapshots en DevTools buscando componentes retenidos por closures de suscripciones."),t(),n(851,"p")(852,"strong"),e(853,"P:"),t(),e(854," \xBFVentaja de "),n(855,"code"),e(856,"takeUntilDestroyed"),t(),e(857," sobre el patr\xF3n "),n(858,"code"),e(859,"destroy$"),t(),e(860,"?"),i(861,"br"),n(862,"strong"),e(863,"R:"),t(),e(864," Elimina el boilerplate (Subject + ngOnDestroy) y los olvidos: se engancha a "),n(865,"code"),e(866,"DestroyRef"),t(),e(867,", as\xED el cleanup queda garantizado por el framework."),t()(),n(868,"div",7),e(869," \u{1F4C2} "),n(870,"code"),e(871,"features/rxjs-lab/memory-leaks.ts"),t(),e(872," \u2014 Demostraci\xF3n de leak + 3 patrones de soluci\xF3n (takeUntil, DestroyRef, async pipe) "),t()(),n(873,"div",16)(874,"h3"),e(875,"\u{1F527} Operadores Pipeables en Profundidad"),t(),n(876,"h4"),e(877,"\xBFQu\xE9 es un operador pipeable?"),t(),n(878,"p"),e(879," Es una "),n(880,"strong"),e(881,"funci\xF3n pura"),t(),e(882," que recibe un Observable y retorna un "),n(883,"em"),e(884,"nuevo"),t(),e(885," Observable sin mutar el original. Se encadenan dentro de "),n(886,"code"),e(887,".pipe()"),t(),e(888,", lo que permite composici\xF3n funcional legible y tree-shakeable. "),t(),n(889,"pre")(890,"code",4),e(891),t()(),n(892,"h4"),e(893,"Categor\xEDas de operadores"),t(),n(894,"table",3)(895,"thead")(896,"tr")(897,"th"),e(898,"Categor\xEDa"),t(),n(899,"th"),e(900,"Operadores"),t(),n(901,"th"),e(902,"Uso"),t()()(),n(903,"tbody")(904,"tr")(905,"td")(906,"strong"),e(907,"Transformaci\xF3n"),t()(),n(908,"td")(909,"code"),e(910,"map"),t(),e(911,", "),n(912,"code"),e(913,"switchMap"),t(),e(914,", "),n(915,"code"),e(916,"mergeMap"),t(),e(917,", "),n(918,"code"),e(919,"concatMap"),t(),e(920,", "),n(921,"code"),e(922,"exhaustMap"),t(),e(923,", "),n(924,"code"),e(925,"scan"),t(),e(926,", "),n(927,"code"),e(928,"reduce"),t()(),n(929,"td"),e(930,"Transformar valores emitidos"),t()(),n(931,"tr")(932,"td")(933,"strong"),e(934,"Filtrado"),t()(),n(935,"td")(936,"code"),e(937,"filter"),t(),e(938,", "),n(939,"code"),e(940,"take"),t(),e(941,", "),n(942,"code"),e(943,"takeUntil"),t(),e(944,", "),n(945,"code"),e(946,"takeWhile"),t(),e(947,", "),n(948,"code"),e(949,"first"),t(),e(950,", "),n(951,"code"),e(952,"last"),t(),e(953,", "),n(954,"code"),e(955,"skip"),t(),e(956,", "),n(957,"code"),e(958,"distinctUntilChanged"),t(),e(959,", "),n(960,"code"),e(961,"debounceTime"),t(),e(962,", "),n(963,"code"),e(964,"throttleTime"),t()(),n(965,"td"),e(966,"Controlar qu\xE9 valores pasan"),t()(),n(967,"tr")(968,"td")(969,"strong"),e(970,"Combinaci\xF3n"),t()(),n(971,"td")(972,"code"),e(973,"combineLatest"),t(),e(974,", "),n(975,"code"),e(976,"forkJoin"),t(),e(977,", "),n(978,"code"),e(979,"withLatestFrom"),t(),e(980,", "),n(981,"code"),e(982,"merge"),t(),e(983,", "),n(984,"code"),e(985,"concat"),t(),e(986,", "),n(987,"code"),e(988,"zip"),t(),e(989,", "),n(990,"code"),e(991,"race"),t()(),n(992,"td"),e(993,"Combinar m\xFAltiples streams"),t()(),n(994,"tr")(995,"td")(996,"strong"),e(997,"Creaci\xF3n"),t()(),n(998,"td")(999,"code"),e(1e3,"of"),t(),e(1001,", "),n(1002,"code"),e(1003,"from"),t(),e(1004,", "),n(1005,"code"),e(1006,"interval"),t(),e(1007,", "),n(1008,"code"),e(1009,"timer"),t(),e(1010,", "),n(1011,"code"),e(1012,"fromEvent"),t(),e(1013,", "),n(1014,"code"),e(1015,"EMPTY"),t(),e(1016,", "),n(1017,"code"),e(1018,"NEVER"),t(),e(1019,", "),n(1020,"code"),e(1021,"throwError"),t()(),n(1022,"td"),e(1023,"Crear Observables"),t()(),n(1024,"tr")(1025,"td")(1026,"strong"),e(1027,"Utilidad"),t()(),n(1028,"td")(1029,"code"),e(1030,"tap"),t(),e(1031,", "),n(1032,"code"),e(1033,"delay"),t(),e(1034,", "),n(1035,"code"),e(1036,"finalize"),t(),e(1037,", "),n(1038,"code"),e(1039,"timeout"),t(),e(1040,", "),n(1041,"code"),e(1042,"retry"),t(),e(1043,", "),n(1044,"code"),e(1045,"retryWhen"),t(),e(1046,", "),n(1047,"code"),e(1048,"catchError"),t()(),n(1049,"td"),e(1050,"Control y debugging"),t()(),n(1051,"tr")(1052,"td")(1053,"strong"),e(1054,"Multicasting"),t()(),n(1055,"td")(1056,"code"),e(1057,"share"),t(),e(1058,", "),n(1059,"code"),e(1060,"shareReplay"),t(),e(1061,", "),n(1062,"code"),e(1063,"publish"),t(),e(1064,", "),n(1065,"code"),e(1066,"refCount"),t()(),n(1067,"td"),e(1068,"Compartir suscripciones"),t()()()(),n(1069,"div",7),e(1070," \u{1F4C2} "),n(1071,"code"),e(1072,"features/rxjs-lab/flattening-operators.ts"),t(),e(1073," \u2014 Operadores pipeables aplicados en componentes reales "),t()(),n(1074,"div",17)(1075,"h3"),e(1076,"\u{1F504} Operadores de Transformaci\xF3n \u2014 Deep Dive"),t(),n(1077,"h4"),e(1078,"1. map \u2014 Transformaci\xF3n 1:1"),t(),n(1079,"p"),e(1080,"Transforma cada valor emitido aplicando una funci\xF3n. Nunca cambia la cantidad de emisiones."),t(),n(1081,"pre")(1082,"code",4),e(1083,`of(1, 2, 3).pipe(
  map(x => x * 2)
).subscribe(v => console.log(v));
// Output: 2, 4, 6`),t()(),n(1084,"h4"),e(1085,"2. switchMap \u2014 \u2B50 EL M\xC1S IMPORTANTE"),t(),n(1086,"p"),e(1087," Al recibir un nuevo valor, "),n(1088,"strong"),e(1089,"cancela"),t(),e(1090," la suscripci\xF3n interna anterior y crea una nueva. Es el operador por defecto para b\xFAsquedas, autocomplete y navegaci\xF3n. "),t(),n(1091,"pre")(1092,"code",9),e(1093,`Diagrama \u2014 switchMap cancela inner al recibir nuevo outer:

Source:  --A--------B--------C-->
Inner:   --1-2-3    --4-5    --6-7-8-->
Output:  --1-2------4-5------6-7-8-->
          \u2191          \u2191
          A's stream  B's stream cancelled
          cancelled   when C arrives
          when B arrives`),t()(),n(1094,"p")(1095,"strong"),e(1096,"C\xF3digo completo de b\xFAsqueda con manejo de errores:"),t()(),n(1097,"pre")(1098,"code",4),e(1099,`this.searchInput.valueChanges.pipe(
  debounceTime(300),            // espera 300ms de silencio
  distinctUntilChanged(),       // ignora si el valor no cambi\xF3
  filter(term => term.length >= 2), // m\xEDnimo 2 caracteres
  switchMap(term => this.api.search(term).pipe(
    catchError(() => of([]))    // error NO mata el stream externo
  ))
).subscribe(results => this.results = results);`),t()(),n(1100,"h4"),e(1101,"3. mergeMap (flatMap) \u2014 Paralelo sin cancelar"),t(),n(1102,"p"),e(1103," Ejecuta "),n(1104,"strong"),e(1105,"TODAS"),t(),e(1106," las suscripciones internas en paralelo. Ninguna se cancela. Acepta un par\xE1metro de concurrencia: "),n(1107,"code"),e(1108,"mergeMap(fn, 3)"),t(),e(1109," \u2014 m\xE1ximo 3 simult\xE1neas. "),t(),n(1110,"pre")(1111,"code",9),e(1112,`Diagrama \u2014 mergeMap mantiene todas las suscripciones:

Source:  --A--------B--------C-->
Inner:   --1-2-3    --4-5-6  --7-8-->
Output:  --1-2-3----4-5-6----7-8-->
          \u2191          \u2191        \u2191
          All inner streams run to completion`),t()(),n(1113,"pre")(1114,"code",4),e(1115),t()(),n(1116,"h4"),e(1117,"4. concatMap \u2014 Secuencial estricto"),t(),n(1118,"p"),e(1119," Espera a que la suscripci\xF3n interna "),n(1120,"strong"),e(1121,"complete"),t(),e(1122," antes de procesar el siguiente valor. "),n(1123,"span",18),e(1124,"\u26A0\uFE0F PELIGRO:"),t(),e(1125," si el inner Observable nunca completa, la cola se bloquea para siempre. "),t(),n(1126,"pre")(1127,"code",9),e(1128,`Diagrama \u2014 concatMap espera completar antes de siguiente:

Source:  --A----B----C-->
Inner:   --1-2| --3-4| --5-6|
Output:  --1-2----3-4----5-6-->
          \u2191      \u2191
          B waits for A to complete
                 C waits for B to complete`),t()(),n(1129,"pre")(1130,"code",4),e(1131,`// Guardar cambios en orden estricto
changes$.pipe(
  concatMap(change => this.api.save(change))
).subscribe(() => console.log('Guardado en orden'));`),t()(),n(1132,"h4"),e(1133,"5. exhaustMap \u2014 Ignora mientras est\xE1 ocupado"),t(),n(1134,"p"),e(1135," Mientras hay una suscripci\xF3n interna activa, "),n(1136,"strong"),e(1137,"ignora completamente"),t(),e(1138," los nuevos valores del source. Perfecto para evitar doble-click en formularios y botones de login. "),t(),n(1139,"pre")(1140,"code",9),e(1141,`Diagrama \u2014 exhaustMap descarta B y C:

Source:  --A--B--C--------D-->
Inner:   --1-2-3|         --4-5|
Output:  --1-2-3----------4-5-->
          \u2191  \u2191  \u2191         \u2191
          A  B  C ignored  D processed
          processing       (inner finished)
          active`),t()(),n(1142,"pre")(1143,"code",4),e(1144,`// Login: ignora clicks adicionales mientras se procesa
this.loginBtn.click$.pipe(
  exhaustMap(() => this.auth.login(this.credentials))
).subscribe(user => this.router.navigate(['/home']));`),t()(),n(1145,"h4"),e(1146,"6. scan \u2014 Acumulador progresivo"),t(),n(1147,"p"),e(1148," Como "),n(1149,"code"),e(1150,"Array.reduce()"),t(),e(1151,", pero emite "),n(1152,"strong"),e(1153,"cada valor acumulado"),t(),e(1154," en vez de solo el final. Ideal para contadores, estado acumulado y running totals. "),t(),n(1155,"pre")(1156,"code",4),e(1157,`// Contador de clicks
clicks$.pipe(
  scan((count) => count + 1, 0)
).subscribe(n => console.log(n));
// Output: 1, 2, 3, 4...

// Acumular lista de items
newItem$.pipe(
  scan((items, item) => [...items, item], [] as Item[])
).subscribe(allItems => this.items = allItems);`),t()(),n(1158,"h4"),e(1159,"scan vs reduce"),t(),n(1160,"p")(1161,"code"),e(1162,"reduce"),t(),e(1163," acumula igual que "),n(1164,"code"),e(1165,"scan"),t(),e(1166,", pero "),n(1167,"strong"),e(1168,"solo emite el resultado final cuando la fuente completa"),t(),e(1169,". Con streams infinitos (clicks, WebSocket, Subjects) "),n(1170,"code"),e(1171,"reduce"),t(),e(1172," no emite jam\xE1s \u2014 usa "),n(1173,"code"),e(1174,"scan"),t(),e(1175,". "),t(),n(1176,"pre")(1177,"code",4),e(1178,`of(1, 2, 3, 4).pipe(scan((acc, n) => acc + n, 0));
// Emite: 1, 3, 6, 10 (cada paso intermedio)

of(1, 2, 3, 4).pipe(reduce((acc, n) => acc + n, 0));
// Emite: 10 (solo al completar la fuente)`),t()(),n(1179,"h4"),e(1180,"7. Tabla de decisi\xF3n: \xBFCu\xE1l usar?"),t(),n(1181,"table",3)(1182,"thead")(1183,"tr")(1184,"th"),e(1185,"Situaci\xF3n"),t(),n(1186,"th"),e(1187,"Operador"),t(),n(1188,"th"),e(1189,"Por qu\xE9"),t()()(),n(1190,"tbody")(1191,"tr")(1192,"td"),e(1193,"B\xFAsqueda / autocomplete"),t(),n(1194,"td")(1195,"code"),e(1196,"switchMap"),t()(),n(1197,"td"),e(1198,"Cancela peticiones obsoletas"),t()(),n(1199,"tr")(1200,"td"),e(1201,"Login / Submit formulario"),t(),n(1202,"td")(1203,"code"),e(1204,"exhaustMap"),t()(),n(1205,"td"),e(1206,"Evita doble env\xEDo"),t()(),n(1207,"tr")(1208,"td"),e(1209,"Guardar cambios en orden"),t(),n(1210,"td")(1211,"code"),e(1212,"concatMap"),t()(),n(1213,"td"),e(1214,"Mantiene secuencia estricta"),t()(),n(1215,"tr")(1216,"td"),e(1217,"Descargas paralelas"),t(),n(1218,"td")(1219,"code"),e(1220,"mergeMap"),t()(),n(1221,"td"),e(1222,"M\xE1xima velocidad, sin esperas"),t()(),n(1223,"tr")(1224,"td"),e(1225,"Acumular estado"),t(),n(1226,"td")(1227,"code"),e(1228,"scan"),t()(),n(1229,"td"),e(1230,"Emite progresivamente"),t()()()(),n(1231,"h4"),e(1232,"\u26A0\uFE0F Errores comunes"),t(),n(1233,"ul",5)(1234,"li"),e(1235,"Devolver un valor plano dentro de "),n(1236,"code"),e(1237,"switchMap"),t(),e(1238," \u2014 el callback debe retornar un "),n(1239,"code"),e(1240,"Observable"),t(),e(1241,", "),n(1242,"code"),e(1243,"Promise"),t(),e(1244," o iterable."),t(),n(1245,"li"),e(1246,"Poner "),n(1247,"code"),e(1248,"catchError"),t(),e(1249," fuera del inner Observable: el primer error mata el stream principal y, p. ej., el typeahead deja de responder para siempre."),t(),n(1250,"li"),e(1251,"Mutar el acumulador en "),n(1252,"code"),e(1253,"scan"),t(),e(1254," \u2014 retorna siempre un objeto/array nuevo para no romper "),n(1255,"code"),e(1256,"distinctUntilChanged"),t(),e(1257," ni change detection OnPush."),t(),n(1258,"li"),e(1259,"Usar "),n(1260,"code"),e(1261,"reduce"),t(),e(1262," sobre un stream que nunca completa: no ver\xE1s ninguna emisi\xF3n."),t()(),n(1263,"h4"),e(1264,"\u{1F3A4} Preguntas de entrevista"),t(),n(1265,"div",6)(1266,"p")(1267,"strong"),e(1268,"P:"),t(),e(1269," \xBFDiferencia entre "),n(1270,"code"),e(1271,"map"),t(),e(1272," y "),n(1273,"code"),e(1274,"switchMap"),t(),e(1275,"?"),i(1276,"br"),n(1277,"strong"),e(1278,"R:"),t(),n(1279,"code"),e(1280,"map"),t(),e(1281," transforma cada valor 1:1 de forma s\xEDncrona; "),n(1282,"code"),e(1283,"switchMap"),t(),e(1284," proyecta cada valor a un Observable interno, se suscribe a \xE9l y cancela el anterior."),t(),n(1285,"p")(1286,"strong"),e(1287,"P:"),t(),e(1288," \xBFQu\xE9 pasa si usas "),n(1289,"code"),e(1290,"mergeMap"),t(),e(1291," en un buscador?"),i(1292,"br"),n(1293,"strong"),e(1294,"R:"),t(),e(1295," Las respuestas pueden llegar desordenadas y una b\xFAsqueda vieja puede sobrescribir a la \xFAltima \u2014 la race condition cl\xE1sica que "),n(1296,"code"),e(1297,"switchMap"),t(),e(1298," evita cancelando."),t(),n(1299,"p")(1300,"strong"),e(1301,"P:"),t(),e(1302,' \xBFC\xF3mo implementar\xEDas un contador de "no le\xEDdos" con RxJS?'),i(1303,"br"),n(1304,"strong"),e(1305,"R:"),t(),n(1306,"code"),e(1307,"notifications$.pipe(scan(acc => acc + 1, 0))"),t(),e(1308,", reseteando con un "),n(1309,"code"),e(1310,"merge"),t(),e(1311," de eventos de lectura que emitan un valor de reset."),t()(),n(1312,"div",7),e(1313," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(1314,"ul")(1315,"li")(1316,"code"),e(1317,"features/rxjs-lab/flattening-operators.ts"),t(),e(1318," \u2014 Comparaci\xF3n interactiva de los 4 operadores"),t(),n(1319,"li")(1320,"code"),e(1321,"features/rxjs-lab/search-typeahead.ts"),t(),e(1322," \u2014 switchMap con debounceTime en b\xFAsqueda real"),t(),n(1323,"li")(1324,"code"),e(1325,"features/ngrx-lab/store/product.effects.ts"),t(),e(1326," \u2014 switchMap, exhaustMap, mergeMap en effects"),t()()()(),n(1327,"div",19)(1328,"h3"),e(1329,"\u{1F50D} Operadores de Filtrado \u2014 Deep Dive"),t(),n(1330,"h4"),e(1331,"1. filter \u2014 Predicado b\xE1sico"),t(),n(1332,"p"),e(1333,"Solo deja pasar valores que cumplan la condici\xF3n. Equivale a "),n(1334,"code"),e(1335,"Array.filter()"),t(),e(1336," pero para streams."),t(),n(1337,"pre")(1338,"code",4),e(1339,`numbers$.pipe(
  filter(n => n % 2 === 0)  // solo pares
)`),t()(),n(1340,"h4"),e(1341,"2. debounceTime(ms) \u2014 Espera silencio"),t(),n(1342,"p"),e(1343," Espera "),n(1344,"strong"),e(1345,"X milisegundos de silencio"),t(),e(1346," antes de emitir el \xFAltimo valor. Si llega un nuevo valor antes de que pase el tiempo, reinicia el temporizador. Ideal para "),n(1347,"strong"),e(1348,"inputs de b\xFAsqueda"),t(),e(1349,". "),t(),n(1350,"h4"),e(1351,"3. throttleTime(ms) \u2014 Limita frecuencia"),t(),n(1352,"p"),e(1353," Emite el "),n(1354,"strong"),e(1355,"primer valor"),t(),e(1356,", luego ignora todo durante X milisegundos. Ideal para eventos de "),n(1357,"strong"),e(1358,"scroll"),t(),e(1359," y "),n(1360,"strong"),e(1361,"resize"),t(),e(1362,". "),t(),n(1363,"pre")(1364,"code",9),e(1365,`Comparaci\xF3n debounceTime vs throttleTime:

Input:    --A-B-C------D-E----->
                 300ms gap

debounce: ----------C--------E->  (espera silencio, emite \xFAltimo)
throttle: --A--------D-------->   (emite primero, ignora el resto)`),t()(),n(1366,"h4"),e(1367,"4. distinctUntilChanged \u2014 Solo si cambi\xF3"),t(),n(1368,"p"),e(1369," Solo emite si el valor es diferente al anterior. "),n(1370,"span",18),e(1371,"\u26A0\uFE0F Cuidado con objetos:"),t(),e(1372," compara por referencia. Usa un comparador custom para objetos: "),t(),n(1373,"pre")(1374,"code",4),e(1375,`// Primitivos \u2014 funciona directo
search$.pipe(distinctUntilChanged())

// Objetos \u2014 necesita comparador custom
user$.pipe(
  distinctUntilChanged((prev, curr) => prev.id === curr.id)
)`),t()(),n(1376,"h4"),e(1377,"5. take(n) \u2014 Solo N valores"),t(),n(1378,"p"),e(1379," Emite los primeros "),n(1380,"code"),e(1381,"n"),t(),e(1382," valores y luego "),n(1383,"strong"),e(1384,"completa"),t(),e(1385," el Observable. "),n(1386,"code"),e(1387,"take(1)"),t(),e(1388,' es muy com\xFAn: "dame el primer valor y desuscr\xEDbete autom\xE1ticamente". '),t(),n(1389,"pre")(1390,"code",4),e(1391,`// take(1) \u2014 equivale a un "one-shot"
this.store.select(selectUser).pipe(
  take(1)  // obtiene valor actual y se desuscribe
).subscribe(user => console.log(user));`),t()(),n(1392,"h4"),e(1393,"6. takeUntil(notifier$) \u2014 Patr\xF3n de cleanup cl\xE1sico"),t(),n(1394,"p"),e(1395,"Emite valores hasta que el "),n(1396,"code"),e(1397,"notifier$"),t(),e(1398," emite. Es el patr\xF3n tradicional para limpiar suscripciones:"),t(),n(1399,"pre")(1400,"code",4),e(1401),t()(),n(1402,"h4"),e(1403,"7. takeUntilDestroyed() \u2014 Angular 16+ \u2705 Recomendado"),t(),n(1404,"p"),e(1405,"Reemplaza el patr\xF3n manual de "),n(1406,"code"),e(1407,"takeUntil"),t(),e(1408," + "),n(1409,"code"),e(1410,"Subject"),t(),e(1411,". M\xE1s limpio y menos propenso a errores:"),t(),n(1412,"pre")(1413,"code",4),e(1414),t()(),n(1415,"h4"),e(1416,"8. first() y skip(n)"),t(),n(1417,"p")(1418,"code"),e(1419,"first()"),t(),e(1420," \u2014 Emite el primer valor que cumpla la condici\xF3n (o error si no hay ninguno). "),n(1421,"code"),e(1422,"skip(n)"),t(),e(1423," \u2014 Ignora los primeros "),n(1424,"code"),e(1425,"n"),t(),e(1426," valores y emite a partir del siguiente. "),t(),n(1427,"pre")(1428,"code",4),e(1429,`// first con condici\xF3n \u2014 primer usuario admin
users$.pipe(
  first(user => user.role === 'admin')
).subscribe(admin => console.log(admin));
// \u26A0\uFE0F Si no hay admin, lanza EmptyError

// skip \u2014 ignorar estado inicial
formValue$.pipe(
  skip(1)  // ignora el valor inicial del formulario
).subscribe(val => this.markDirty());`),t()(),n(1430,"h4"),e(1431,"\u26A0\uFE0F Errores comunes"),t(),n(1432,"ul",5)(1433,"li"),e(1434,"Poner "),n(1435,"code"),e(1436,"debounceTime"),t(),e(1437," DESPU\xC9S de "),n(1438,"code"),e(1439,"switchMap"),t(),e(1440,": debe ir antes para frenar las peticiones, no para retrasar las respuestas."),t(),n(1441,"li")(1442,"code"),e(1443,"distinctUntilChanged()"),t(),e(1444," con objetos compara por "),n(1445,"strong"),e(1446,"referencia"),t(),e(1447," \u2014 pasa un comparador custom o compara claves primitivas."),t(),n(1448,"li")(1449,"code"),e(1450,"first()"),t(),e(1451," sobre un stream que completa sin emitir lanza "),n(1452,"code"),e(1453,"EmptyError"),t(),e(1454,"; usa "),n(1455,"code"),e(1456,"take(1)"),t(),e(1457," si el silencio es un caso v\xE1lido."),t(),n(1458,"li"),e(1459,"Colocar "),n(1460,"code"),e(1461,"takeUntil(destroy$)"),t(),e(1462," antes de un "),n(1463,"code"),e(1464,"switchMap"),t(),e(1465," o "),n(1466,"code"),e(1467,"shareReplay"),t(),e(1468,": la suscripci\xF3n interna puede sobrevivir. Regla: "),n(1469,"strong")(1470,"code"),e(1471,"takeUntil"),t(),e(1472," siempre al final del pipe"),t(),e(1473,"."),t(),n(1474,"li"),e(1475,"Usar "),n(1476,"code"),e(1477,"debounceTime"),t(),e(1478," donde tocaba "),n(1479,"code"),e(1480,"throttleTime"),t(),e(1481," en scroll: con eventos continuos, debounce no emite nada hasta que el usuario para."),t()(),n(1482,"h4"),e(1483,"\u{1F3A4} Preguntas de entrevista"),t(),n(1484,"div",6)(1485,"p")(1486,"strong"),e(1487,"P:"),t(),e(1488," \xBF"),n(1489,"code"),e(1490,"debounceTime"),t(),e(1491," vs "),n(1492,"code"),e(1493,"throttleTime"),t(),e(1494,"?"),i(1495,"br"),n(1496,"strong"),e(1497,"R:"),t(),e(1498," Debounce espera X ms de silencio y emite el \xFAltimo valor (inputs de b\xFAsqueda); throttle emite el primero y bloquea durante X ms (scroll, resize, clicks repetidos)."),t(),n(1499,"p")(1500,"strong"),e(1501,"P:"),t(),e(1502," \xBFPor qu\xE9 "),n(1503,"code"),e(1504,"takeUntil"),t(),e(1505," debe ir al final del pipe?"),i(1506,"br"),n(1507,"strong"),e(1508,"R:"),t(),e(1509," Los operadores posteriores crean nuevas suscripciones internas que el notifier ya no corta; ponerlo al final garantiza que toda la cadena se cierre."),t(),n(1510,"p")(1511,"strong"),e(1512,"P:"),t(),e(1513," \xBF"),n(1514,"code"),e(1515,"take(1)"),t(),e(1516," vs "),n(1517,"code"),e(1518,"first()"),t(),e(1519,"?"),i(1520,"br"),n(1521,"strong"),e(1522,"R:"),t(),e(1523," Ambos completan tras el primer valor, pero "),n(1524,"code"),e(1525,"first()"),t(),e(1526," lanza "),n(1527,"code"),e(1528,"EmptyError"),t(),e(1529," si la fuente completa sin emitir (y acepta predicado); "),n(1530,"code"),e(1531,"take(1)"),t(),e(1532," completa en silencio."),t()(),n(1533,"div",7),e(1534," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(1535,"ul")(1536,"li")(1537,"code"),e(1538,"features/rxjs-lab/search-typeahead.ts"),t(),e(1539," \u2014 debounceTime + distinctUntilChanged + filter en b\xFAsqueda"),t(),n(1540,"li")(1541,"code"),e(1542,"features/rxjs-lab/memory-leaks.ts"),t(),e(1543," \u2014 takeUntil y takeUntilDestroyed para cleanup"),t()()()(),n(1544,"div",20)(1545,"h3"),e(1546,"\u{1F517} Operadores de Combinaci\xF3n \u2014 Deep Dive"),t(),n(1547,"h4"),e(1548,"1. combineLatest \u2014 \xDAltimo de cada fuente, reactivo"),t(),n(1549,"p"),e(1550," Emite un array con el "),n(1551,"strong"),e(1552,"\xFAltimo valor de CADA fuente"),t(),e(1553," cada vez que cualquiera emite. Solo empieza a emitir cuando "),n(1554,"strong"),e(1555,"TODOS"),t(),e(1556," han emitido al menos una vez. "),t(),n(1557,"pre")(1558,"code",9),e(1559,`Diagrama \u2014 combineLatest:

a$:  --1----2-----------3-->
b$:  ----X------Y----------->
Out: ---[1,X]-[2,X]-[2,Y]-[3,Y]-->
     \u2191         \u2191     \u2191     \u2191
     Ambos     a$    b$    a$ emiti\xF3
     emitieron emiti\xF3 emiti\xF3`),t()(),n(1560,"pre")(1561,"code",4),e(1562),t()(),n(1563,"h4"),e(1564,"2. forkJoin \u2014 Esperar que TODOS completen (como Promise.all)"),t(),n(1565,"p"),e(1566," Espera a que "),n(1567,"strong"),e(1568,"todos los Observables completen"),t(),e(1569,", luego emite un array (o objeto) con el \xFAltimo valor de cada uno. "),n(1570,"span",18),e(1571,"\u26A0\uFE0F PELIGRO:"),t(),e(1572," Si un Observable nunca completa, forkJoin "),n(1573,"strong"),e(1574,"nunca emite"),t(),e(1575,". "),t(),n(1576,"pre")(1577,"code",4),e(1578),t()(),n(1579,"h4"),e(1580,"3. withLatestFrom \u2014 Enriquecer evento con datos"),t(),n(1581,"p"),e(1582," Cuando el "),n(1583,"strong"),e(1584,"source emite"),t(),e(1585,", toma el \xFAltimo valor de otro Observable. El segundo Observable "),n(1586,"strong"),e(1587,"NO trigger"),t(),e(1588," emisiones por s\xED solo. "),t(),n(1589,"pre")(1590,"code",4),e(1591,`// Click de guardar + datos actuales del formulario
this.saveClick$.pipe(
  withLatestFrom(this.store.select(selectFormData)),
  map(([_, formData]) => formData),
  switchMap(data => this.api.save(data))
).subscribe(() => this.showSuccess());`),t()(),n(1592,"h4"),e(1593,"4. merge, concat, zip, race"),t(),n(1594,"pre")(1595,"code",4),e(1596),t()(),n(1597,"h4"),e(1598,"5. startWith \u2014 Valor inicial inmediato"),t(),n(1599,"p"),e(1600," Emite un valor s\xEDncrono antes que los de la fuente. Imprescindible con "),n(1601,"code"),e(1602,"combineLatest"),t(),e(1603," (que exige que todas las fuentes hayan emitido) y para pintar estado inicial en el template sin esperar al primer evento. "),t(),n(1604,"pre")(1605,"code",4),e(1606,`// Sin startWith, combineLatest no arranca hasta que
// el usuario toque TODOS los filtros:
combineLatest([
  this.search$.pipe(startWith('')),
  this.category$.pipe(startWith('all')),
  this.sort$.pipe(startWith('name'))
]).pipe(
  switchMap(([term, cat, sort]) => this.api.getProducts(term, cat, sort))
).subscribe(products => this.products = products);`),t()(),n(1607,"h4"),e(1608,"Tabla de decisi\xF3n: \xBFCu\xE1l combinador usar?"),t(),n(1609,"table",3)(1610,"thead")(1611,"tr")(1612,"th"),e(1613,"Necesito..."),t(),n(1614,"th"),e(1615,"Operador"),t(),n(1616,"th"),e(1617,"Comportamiento"),t()()(),n(1618,"tbody")(1619,"tr")(1620,"td"),e(1621,"\xDAltimo valor de cada fuente, reactivo"),t(),n(1622,"td")(1623,"code"),e(1624,"combineLatest"),t()(),n(1625,"td"),e(1626,"Emite cuando cualquiera emite"),t()(),n(1627,"tr")(1628,"td"),e(1629,"Esperar que TODOS completen"),t(),n(1630,"td")(1631,"code"),e(1632,"forkJoin"),t()(),n(1633,"td"),e(1634,"Como "),n(1635,"code"),e(1636,"Promise.all()"),t()()(),n(1637,"tr")(1638,"td"),e(1639,"Enriquecer evento con dato actual"),t(),n(1640,"td")(1641,"code"),e(1642,"withLatestFrom"),t()(),n(1643,"td"),e(1644,"Solo source trigger emisi\xF3n"),t()(),n(1645,"tr")(1646,"td"),e(1647,"Mezclar streams independientes"),t(),n(1648,"td")(1649,"code"),e(1650,"merge"),t()(),n(1651,"td"),e(1652,"El primero que emita pasa"),t()(),n(1653,"tr")(1654,"td"),e(1655,"Secuencia ordenada de streams"),t(),n(1656,"td")(1657,"code"),e(1658,"concat"),t()(),n(1659,"td"),e(1660,"Primero a$, luego b$"),t()(),n(1661,"tr")(1662,"td"),e(1663,"Parear valores 1:1"),t(),n(1664,"td")(1665,"code"),e(1666,"zip"),t()(),n(1667,"td"),e(1668,"Espera par de ambos"),t()(),n(1669,"tr")(1670,"td"),e(1671,"El m\xE1s r\xE1pido gana"),t(),n(1672,"td")(1673,"code"),e(1674,"race"),t()(),n(1675,"td"),e(1676,"Cancela los dem\xE1s"),t()(),n(1677,"tr")(1678,"td"),e(1679,"Valor inicial antes de la fuente"),t(),n(1680,"td")(1681,"code"),e(1682,"startWith"),t()(),n(1683,"td"),e(1684,"Emisi\xF3n s\xEDncrona inmediata"),t()()()(),n(1685,"h4"),e(1686,"\u26A0\uFE0F Errores comunes"),t(),n(1687,"ul",5)(1688,"li")(1689,"code"),e(1690,"combineLatest"),t(),e(1691," no emite hasta que TODAS las fuentes hayan emitido \u2014 a\xF1ade "),n(1692,"code"),e(1693,"startWith"),t(),e(1694," a las opcionales."),t(),n(1695,"li")(1696,"code"),e(1697,"forkJoin"),t(),e(1698," con fuentes que no completan (Subjects, selectores de store) \u2192 nunca emite. Aplica "),n(1699,"code"),e(1700,"take(1)"),t(),e(1701," a cada una."),t(),n(1702,"li"),e(1703,"En "),n(1704,"code"),e(1705,"forkJoin"),t(),e(1706,", si UNA fuente falla, todo el conjunto falla y pierdes las dem\xE1s respuestas \u2014 captura por fuente: "),n(1707,"code"),e(1708,"catchError(() => of(null))"),t(),e(1709,"."),t(),n(1710,"li"),e(1711,'"Glitches" de '),n(1712,"code"),e(1713,"combineLatest"),t(),e(1714,": si dos fuentes derivan del mismo origen, emite estados intermedios inconsistentes. Mitiga con "),n(1715,"code"),e(1716,"debounceTime(0)"),t(),e(1717,"."),t(),n(1718,"li"),e(1719,"Confundir "),n(1720,"code"),e(1721,"zip"),t(),e(1722," con "),n(1723,"code"),e(1724,"combineLatest"),t(),e(1725,": zip empareja estrictamente 1:1 y bufferiza \u2014 puede acumular memoria si una fuente emite mucho m\xE1s r\xE1pido que la otra."),t()(),n(1726,"h4"),e(1727,"\u{1F3A4} Preguntas de entrevista"),t(),n(1728,"div",6)(1729,"p")(1730,"strong"),e(1731,"P:"),t(),e(1732," \xBF"),n(1733,"code"),e(1734,"combineLatest"),t(),e(1735," vs "),n(1736,"code"),e(1737,"withLatestFrom"),t(),e(1738,"?"),i(1739,"br"),n(1740,"strong"),e(1741,"R:"),t(),e(1742," En combineLatest cualquier fuente dispara una emisi\xF3n; en withLatestFrom solo el source dispara y las dem\xE1s aportan su \xFAltimo valor de forma pasiva."),t(),n(1743,"p")(1744,"strong"),e(1745,"P:"),t(),e(1746," \xBFEquivalentes RxJS de "),n(1747,"code"),e(1748,"Promise.all"),t(),e(1749," y "),n(1750,"code"),e(1751,"Promise.race"),t(),e(1752,"?"),i(1753,"br"),n(1754,"strong"),e(1755,"R:"),t(),n(1756,"code"),e(1757,"forkJoin"),t(),e(1758," y "),n(1759,"code"),e(1760,"race"),t(),e(1761,". Y "),n(1762,"code"),e(1763,"combineLatest"),t(),e(1764," no tiene equivalente en Promises: reacciona en el tiempo."),t(),n(1765,"p")(1766,"strong"),e(1767,"P:"),t(),e(1768," \xBFPor qu\xE9 tu "),n(1769,"code"),e(1770,"forkJoin"),t(),e(1771,' "no emite nada"?'),i(1772,"br"),n(1773,"strong"),e(1774,"R:"),t(),e(1775," Alguna fuente no completa (t\xEDpicamente un Subject o un selector de store). forkJoin solo emite cuando todas completan."),t()(),n(1776,"div",7),e(1777," \u{1F4C2} "),n(1778,"code"),e(1779,"features/rxjs-lab/combining-operators.ts"),t(),e(1780," \u2014 combineLatest, forkJoin, withLatestFrom, merge en acci\xF3n "),t()(),n(1781,"div",21)(1782,"h3"),e(1783,"\u{1F6E1}\uFE0F Manejo de Errores"),t(),n(1784,"p"),e(1785," En RxJS un error es "),n(1786,"strong"),e(1787,"terminal"),t(),e(1788,": cierra la suscripci\xF3n y ning\xFAn operador vuelve a ejecutarse en ese stream. Por eso el manejo de errores no es un detalle est\xE9tico \u2014 decide si tu stream sobrevive al primer fallo. "),t(),n(1789,"h4"),e(1790,"1. catchError \u2014 capturar y reemplazar"),t(),n(1791,"p"),e(1792,"Intercepta el error y debe retornar un "),n(1793,"strong"),e(1794,"Observable de reemplazo"),t(),e(1795," (o relanzar):"),t(),n(1796,"pre")(1797,"code",4),e(1798,`this.http.get<Product[]>('/api/products').pipe(
  catchError(err => {
    if (err.status === 404) return of([]);   // valor por defecto
    if (err.status === 401) return EMPTY;    // completar sin emitir
    return throwError(() => err);            // relanzar hacia arriba
  })
)`),t()(),n(1799,"h4"),e(1800,"2. EMPTY vs throwError vs of(fallback)"),t(),n(1801,"table",3)(1802,"thead")(1803,"tr")(1804,"th"),e(1805,"Estrategia"),t(),n(1806,"th"),e(1807,"Efecto"),t(),n(1808,"th"),e(1809,"Cu\xE1ndo"),t()()(),n(1810,"tbody")(1811,"tr")(1812,"td")(1813,"code"),e(1814,"of(fallback)"),t()(),n(1815,"td"),e(1816,"Emite un valor por defecto y completa"),t(),n(1817,"td"),e(1818,"La UI debe seguir funcionando (lista vac\xEDa, cache)"),t()(),n(1819,"tr")(1820,"td")(1821,"code"),e(1822,"EMPTY"),t()(),n(1823,"td"),e(1824,"Completa sin emitir nada"),t(),n(1825,"td"),e(1826,"Silenciar el error: no hay nada que mostrar"),t()(),n(1827,"tr")(1828,"td")(1829,"code"),e(1830,"throwError(() => err)"),t()(),n(1831,"td"),e(1832,"Propaga el error aguas arriba"),t(),n(1833,"td"),e(1834,"Que lo maneje un interceptor, un effect o un handler global"),t()()()(),n(1835,"h4"),e(1836,"3. \xBFD\xD3NDE poner catchError? \u2014 La pregunta clave"),t(),n(1837,"pre")(1838,"code",4),e(1839,`// \u274C FUERA del switchMap: el primer error "completa" el stream
// externo y el buscador deja de responder PARA SIEMPRE
input$.pipe(
  switchMap(term => this.api.search(term)),
  catchError(() => of([]))
)

// \u2705 DENTRO del switchMap: solo se reemplaza el inner fallido;
// el stream externo sigue vivo para la siguiente b\xFAsqueda
input$.pipe(
  switchMap(term => this.api.search(term).pipe(
    catchError(() => of([]))
  ))
)`),t()(),n(1840,"h4"),e(1841,"4. retry con delay \u2014 backoff exponencial (RxJS 7.4+)"),t(),n(1842,"p"),e(1843,"La API moderna de "),n(1844,"code"),e(1845,"retry"),t(),e(1846," con objeto de configuraci\xF3n reemplaza al deprecado "),n(1847,"code"),e(1848,"retryWhen"),t(),e(1849,":"),t(),n(1850,"pre")(1851,"code",4),e(1852,`this.http.get<Data>('/api/data').pipe(
  retry({
    count: 3,
    delay: (error, retryCount) => {
      // No reintentar errores de cliente (4xx)
      if (error.status >= 400 && error.status < 500) {
        return throwError(() => error);
      }
      return timer(Math.pow(2, retryCount) * 1000); // 2s, 4s, 8s
    }
  }),
  catchError(() => of(fallbackData))
)`),t()(),n(1853,"h4"),e(1854,"5. finalize \u2014 cleanup garantizado"),t(),n(1855,"p"),e(1856,"Se ejecuta al terminar el stream por "),n(1857,"strong"),e(1858,"cualquier"),t(),e(1859," v\xEDa: complete, error o unsubscribe. Es el "),n(1860,"code"),e(1861,"finally"),t(),e(1862," de RxJS:"),t(),n(1863,"pre")(1864,"code",4),e(1865,`this.loading.set(true);
this.api.load().pipe(
  finalize(() => this.loading.set(false))  // spinner SIEMPRE se apaga
).subscribe(data => this.data.set(data));`),t()(),n(1866,"h4"),e(1867,"\u26A0\uFE0F Errores comunes"),t(),n(1868,"ul",5)(1869,"li")(1870,"code"),e(1871,"catchError"),t(),e(1872," fuera del flattening operator en streams de larga vida \u2014 el stream muere al primer fallo (ver punto 3)."),t(),n(1873,"li"),e(1874,"Olvidar que "),n(1875,"code"),e(1876,"catchError"),t(),e(1877," debe RETORNAR un Observable: retornar "),n(1878,"code"),e(1879,"undefined"),t(),e(1880," produce un segundo error."),t(),n(1881,"li")(1882,"code"),e(1883,"retry"),t(),e(1884," sin filtrar el tipo de error: reintentar un 401 tres veces solo bloquea la cuenta m\xE1s r\xE1pido."),t(),n(1885,"li"),e(1886,"Usar "),n(1887,"code"),e(1888,"retryWhen"),t(),e(1889," en c\xF3digo nuevo \u2014 est\xE1 deprecado; usa "),n(1890,"code"),e(1891,"retry({ count, delay })"),t(),e(1892,"."),t(),n(1893,"li"),e(1894,"Apagar spinners en el "),n(1895,"code"),e(1896,"next"),t(),e(1897," en vez de en "),n(1898,"code"),e(1899,"finalize"),t(),e(1900,": si hay error, el spinner se queda girando."),t()(),n(1901,"h4"),e(1902,"\u{1F3A4} Preguntas de entrevista"),t(),n(1903,"div",6)(1904,"p")(1905,"strong"),e(1906,"P:"),t(),e(1907," \xBFQu\xE9 le pasa a un Observable despu\xE9s de emitir un error?"),i(1908,"br"),n(1909,"strong"),e(1910,"R:"),t(),e(1911," Termina definitivamente: no habr\xE1 m\xE1s next ni complete y la suscripci\xF3n se cierra. Por eso los streams de UI deben aislar errores en el inner Observable."),t(),n(1912,"p")(1913,"strong"),e(1914,"P:"),t(),e(1915," \xBF"),n(1916,"code"),e(1917,"EMPTY"),t(),e(1918," vs "),n(1919,"code"),e(1920,"NEVER"),t(),e(1921," vs "),n(1922,"code"),e(1923,"throwError"),t(),e(1924,"?"),i(1925,"br"),n(1926,"strong"),e(1927,"R:"),t(),e(1928," EMPTY completa de inmediato sin emitir; NEVER no emite ni completa jam\xE1s; throwError emite un error inmediatamente."),t(),n(1929,"p")(1930,"strong"),e(1931,"P:"),t(),e(1932," \xBFPor qu\xE9 en un typeahead el "),n(1933,"code"),e(1934,"catchError"),t(),e(1935," va dentro del "),n(1936,"code"),e(1937,"switchMap"),t(),e(1938,"?"),i(1939,"br"),n(1940,"strong"),e(1941,"R:"),t(),e(1942," Para que el fallo de UNA petici\xF3n no complete el stream externo del input: solo se sustituye el inner fallido y el buscador sigue funcionando."),t()(),n(1943,"div",7),e(1944," \u{1F4C2} "),n(1945,"code"),e(1946,"features/rxjs-lab/search-typeahead.ts"),t(),e(1947," \u2014 catchError dentro de switchMap en una b\xFAsqueda real "),t()(),n(1948,"div",22)(1949,"h3"),e(1950,"\u{1F4E1} Multicasting y shareReplay"),t(),n(1951,"h4"),e(1952,"El problema: Cold vs Hot Observables"),t(),n(1953,"table",3)(1954,"thead")(1955,"tr")(1956,"th"),e(1957,"Tipo"),t(),n(1958,"th"),e(1959,"Comportamiento"),t(),n(1960,"th"),e(1961,"Ejemplo"),t()()(),n(1962,"tbody")(1963,"tr")(1964,"td")(1965,"strong"),e(1966,"Cold"),t()(),n(1967,"td"),e(1968,"Cada suscripci\xF3n ejecuta el productor desde cero"),t(),n(1969,"td")(1970,"code"),e(1971,"HttpClient.get()"),t(),e(1972," \u2014 N suscripciones = N HTTP calls"),t()(),n(1973,"tr")(1974,"td")(1975,"strong"),e(1976,"Hot"),t()(),n(1977,"td"),e(1978,"Todos los suscriptores comparten la misma fuente"),t(),n(1979,"td"),e(1980,"WebSocket, "),n(1981,"code"),e(1982,"fromEvent()"),t(),e(1983,", "),n(1984,"code"),e(1985,"Subject"),t()()()()(),n(1986,"h4"),e(1987,"share() \u2014 Convertir cold a hot"),t(),n(1988,"p"),e(1989,"Comparte la suscripci\xF3n entre todos los suscriptores activos. Cuando el \xFAltimo se desuscribe, la fuente se desconecta."),t(),n(1990,"h4"),e(1991,"shareReplay(1) \u2014 Compartir + cachear"),t(),n(1992,"p"),e(1993," Comparte la suscripci\xF3n "),n(1994,"strong"),e(1995,"y cachea"),t(),e(1996," el \xFAltimo valor para nuevos suscriptores tard\xEDos. Es el operador m\xE1s usado para cachear respuestas HTTP. "),t(),n(1997,"pre")(1998,"code",4),e(1999),t()(),n(2e3,"h4"),e(2001,"refCount: true vs false"),t(),n(2002,"ul")(2003,"li")(2004,"code"),e(2005,"refCount: true"),t(),e(2006," \u2014 cuando no hay suscriptores, desconecta la fuente. \u2705 "),n(2007,"strong"),e(2008,"Recomendado"),t(),e(2009," para evitar memory leaks."),t(),n(2010,"li")(2011,"code"),e(2012,"refCount: false"),t(),e(2013," (default) \u2014 cachea para siempre incluso sin suscriptores. \u26A0\uFE0F Posible memory leak."),t()(),n(2014,"h4"),e(2015,"Patr\xF3n de cach\xE9 con invalidaci\xF3n manual"),t(),n(2016,"pre")(2017,"code",4),e(2018),t()(),n(2019,"h4"),e(2020,"\u26A0\uFE0F Errores comunes"),t(),n(2021,"ul",5)(2022,"li")(2023,"code"),e(2024,"shareReplay(1)"),t(),e(2025," a secas equivale a "),n(2026,"code"),e(2027,"refCount: false"),t(),e(2028,": sobre fuentes infinitas mantiene la suscripci\xF3n viva para siempre \u2192 memory leak. Prefiere "),n(2029,"code"),e(2030,"shareReplay({ bufferSize: 1, refCount: true })"),t(),e(2031,"."),t(),n(2032,"li")(2033,"code"),e(2034,"shareReplay"),t(),e(2035," cachea tambi\xE9n el ERROR: los nuevos suscriptores reciben el error cacheado y nunca se reintenta. Maneja el error antes o re-crea el stream al invalidar."),t(),n(2036,"li"),e(2037,"Poner "),n(2038,"code"),e(2039,"shareReplay"),t(),e(2040," en medio del pipe, antes de operadores por-suscriptor ("),n(2041,"code"),e(2042,"takeUntil"),t(),e(2043,", "),n(2044,"code"),e(2045,"map"),t(),e(2046," con estado): comparte lo que no deb\xEDa compartirse. En servicios va al "),n(2047,"strong"),e(2048,"final"),t(),e(2049," del pipe."),t(),n(2050,"li"),e(2051,"Asumir que el "),n(2052,"code"),e(2053,"async"),t(),e(2054," pipe evita peticiones duplicadas: cada "),n(2055,"code"),e(2056,"| async"),t(),e(2057," es una suscripci\xF3n independiente; sin multicasting, cada una dispara su HTTP."),t()(),n(2058,"h4"),e(2059,"\u{1F3A4} Preguntas de entrevista"),t(),n(2060,"div",6)(2061,"p")(2062,"strong"),e(2063,"P:"),t(),e(2064," \xBF"),n(2065,"code"),e(2066,"share"),t(),e(2067," vs "),n(2068,"code"),e(2069,"shareReplay"),t(),e(2070,"?"),i(2071,"br"),n(2072,"strong"),e(2073,"R:"),t(),e(2074," Ambos multicastan una fuente; shareReplay adem\xE1s re-emite los \xFAltimos N valores a suscriptores tard\xEDos. Con share, quien llega tarde no recibe nada hasta la siguiente emisi\xF3n."),t(),n(2075,"p")(2076,"strong"),e(2077,"P:"),t(),e(2078," Tienes 3 "),n(2079,"code"),e(2080,"async"),t(),e(2081," pipes sobre el mismo "),n(2082,"code"),e(2083,"products$"),t(),e(2084," y ves 3 peticiones HTTP. \xBFSoluci\xF3n?"),i(2085,"br"),n(2086,"strong"),e(2087,"R:"),t(),n(2088,"code"),e(2089,"shareReplay({ bufferSize: 1, refCount: true })"),t(),e(2090," en el servicio, o un \xFAnico "),n(2091,"code"),e(2092,"@if (products$ | async; as products)"),t(),e(2093," en el template."),t(),n(2094,"p")(2095,"strong"),e(2096,"P:"),t(),e(2097," \xBFQu\xE9 hace exactamente "),n(2098,"code"),e(2099,"refCount: true"),t(),e(2100,"?"),i(2101,"br"),n(2102,"strong"),e(2103,"R:"),t(),e(2104," Cuenta suscriptores activos: al llegar el primero conecta con la fuente y al irse el \xFAltimo se desuscribe de ella, evitando que quede viva sin consumidores."),t()(),n(2105,"div",7),e(2106," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(2107,"ul")(2108,"li")(2109,"code"),e(2110,"features/rxjs-lab/observable-types.ts"),t(),e(2111," \u2014 Cold vs Hot Observables"),t(),n(2112,"li")(2113,"code"),e(2114,"features/rxjs-lab/combining-operators.ts"),t(),e(2115," \u2014 shareReplay en servicios"),t()()()(),n(2116,"div",23)(2117,"h3"),e(2118,"\u{1F3D7}\uFE0F Patrones RxJS en Angular"),t(),n(2119,"h4"),e(2120,"1. HTTP con retry y backoff exponencial"),t(),n(2121,"p"),e(2122,"Reintentar peticiones fallidas con espera exponencial (1s, 2s, 4s...):"),t(),n(2123,"pre")(2124,"code",4),e(2125),t()(),n(2126,"h4"),e(2127,"2. Polling \u2014 Consultas peri\xF3dicas"),t(),n(2128,"pre")(2129,"code",4),e(2130,`const polling$ = timer(0, 5000).pipe(  // inmediato + cada 5s
  switchMap(() => this.http.get('/api/status')),
  retry(3),
  share(),
  takeUntilDestroyed()
);

// Todos los suscriptores comparten el mismo polling`),t()(),n(2131,"h4"),e(2132,"3. Prevenci\xF3n de race conditions"),t(),n(2133,"pre")(2134,"code",4),e(2135,`// switchMap cancela la petici\xF3n anterior autom\xE1ticamente
// Si el usuario navega r\xE1pido: /user/1 \u2192 /user/2 \u2192 /user/3
// Solo la \xFAltima petici\xF3n (/user/3) llega al subscribe
this.route.params.pipe(
  switchMap(params => this.api.getUser(params['id']))
).subscribe(user => this.user = user);`),t()(),n(2136,"h4"),e(2137,"4. Loading state pattern"),t(),n(2138,"p"),e(2139,"Manejar estados de carga, datos y error en un solo stream:"),t(),n(2140,"pre")(2141,"code",4),e(2142),t()(),n(2143,"h4"),e(2144,"5. Estrategias de unsubscribe \u2014 Comparaci\xF3n"),t(),n(2145,"table",3)(2146,"thead")(2147,"tr")(2148,"th"),e(2149,"Estrategia"),t(),n(2150,"th"),e(2151,"C\xF3digo"),t(),n(2152,"th"),e(2153,"Cu\xE1ndo usar"),t()()(),n(2154,"tbody")(2155,"tr")(2156,"td")(2157,"code"),e(2158,"takeUntil(destroy$)"),t()(),n(2159,"td")(2160,"code"),e(2161,"Subject"),t(),e(2162," + "),n(2163,"code"),e(2164,"ngOnDestroy"),t()(),n(2165,"td"),e(2166,"Enfoque cl\xE1sico, pre-Angular 16"),t()(),n(2167,"tr")(2168,"td")(2169,"code"),e(2170,"takeUntilDestroyed()"),t()(),n(2171,"td")(2172,"code"),e(2173,"inject(DestroyRef)"),t()(),n(2174,"td"),e(2175,"\u2705 Angular 16+ \u2014 preferido"),t()(),n(2176,"tr")(2177,"td")(2178,"code"),e(2179,"async"),t(),e(2180," pipe"),t(),n(2181,"td"),e(2182,"template "),n(2183,"code"),e(2184,"| async"),t()(),n(2185,"td"),e(2186,"Suscripciones solo en template"),t()(),n(2187,"tr")(2188,"td")(2189,"code"),e(2190,"toSignal()"),t()(),n(2191,"td")(2192,"code"),e(2193,"toSignal(obs$)"),t()(),n(2194,"td"),e(2195,"Componentes basados en Signals"),t()(),n(2196,"tr")(2197,"td")(2198,"code"),e(2199,"take(1)"),t()(),n(2200,"td"),e(2201,"One-shot"),t(),n(2202,"td"),e(2203,"Cuando solo necesitas un valor"),t()()()(),n(2204,"h4"),e(2205,"\u26A0\uFE0F Errores comunes"),t(),n(2206,"ul",5)(2207,"li"),e(2208,"Polling con "),n(2209,"code"),e(2210,"interval"),t(),e(2211," + "),n(2212,"code"),e(2213,"mergeMap"),t(),e(2214,": si el servidor va lento, las peticiones se apilan. Usa "),n(2215,"code"),e(2216,"timer(0, n)"),t(),e(2217," + "),n(2218,"code"),e(2219,"switchMap"),t(),e(2220," (o "),n(2221,"code"),e(2222,"exhaustMap"),t(),e(2223," si prefieres no cancelar)."),t(),n(2224,"li"),e(2225,"Implementar el loading state con dos Subjects sueltos ("),n(2226,"code"),e(2227,"loading$"),t(),e(2228,", "),n(2229,"code"),e(2230,"error$"),t(),e(2231,") que se desincronizan \u2014 modela el estado como UN solo stream (patr\xF3n 4)."),t(),n(2232,"li"),e(2233,"Reintentar con "),n(2234,"code"),e(2235,"retry"),t(),e(2236," plano dentro de un polling: multiplica peticiones a un backend ca\xEDdo; combina backoff + l\xEDmite."),t()(),n(2237,"h4"),e(2238,"\u{1F3A4} Preguntas de entrevista"),t(),n(2239,"div",6)(2240,"p")(2241,"strong"),e(2242,"P:"),t(),e(2243," El usuario navega r\xE1pido entre /user/1 \u2192 /user/2 \u2192 /user/3 y a veces ve datos del usuario equivocado. \xBFCausa y soluci\xF3n?"),i(2244,"br"),n(2245,"strong"),e(2246,"R:"),t(),e(2247," Race condition: suscripciones anidadas o mergeMap dejan llegar respuestas viejas. Soluci\xF3n: "),n(2248,"code"),e(2249,"route.params"),t(),e(2250," + "),n(2251,"code"),e(2252,"switchMap"),t(),e(2253,", que cancela la petici\xF3n anterior."),t(),n(2254,"p")(2255,"strong"),e(2256,"P:"),t(),e(2257," \xBFC\xF3mo har\xEDas polling cada 5s que se pause al destruir el componente?"),i(2258,"br"),n(2259,"strong"),e(2260,"R:"),t(),n(2261,"code"),e(2262,"timer(0, 5000).pipe(switchMap(() => api.status()), takeUntilDestroyed())"),t(),e(2263,", con "),n(2264,"code"),e(2265,"share()"),t(),e(2266," si hay varios consumidores."),t()(),n(2267,"div",7),e(2268," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(2269,"ul")(2270,"li")(2271,"code"),e(2272,"features/rxjs-lab/memory-leaks.ts"),t(),e(2273," \u2014 takeUntil, DestroyRef, async pipe"),t(),n(2274,"li")(2275,"code"),e(2276,"features/rxjs-lab/search-typeahead.ts"),t(),e(2277," \u2014 switchMap + debounce para prevenir race conditions"),t(),n(2278,"li")(2279,"code"),e(2280,"features/ngrx-lab/store/product.effects.ts"),t(),e(2281," \u2014 retry, catchError en effects reales"),t()()()()()),o&2&&(a(63),r(`// Promise \u2014 eager, un solo valor
const promise = new Promise(resolve => `,"{",`
  console.log('Ejecutado inmediatamente');
  resolve(42);
`,"}",`);

// Observable \u2014 lazy, m\xFAltiples valores
const obs$ = new Observable(subscriber => `,"{",`
  console.log('Ejecutado al suscribirse');
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
`,"}",");"),a(355),r(`// BehaviorSubject \u2014 siempre tiene valor actual
const user$ = new BehaviorSubject<User | null>(null);
user$.next(`,"{"," name: 'Ana' ","}",`);

// Late subscriber recibe 'Ana' inmediatamente
user$.subscribe(u => console.log(u)); // `,"{"," name: 'Ana' ","}",`

// ReplaySubject \u2014 guarda \xFAltimos N valores
const messages$ = new ReplaySubject<string>(3);
messages$.next('msg1');
messages$.next('msg2');
messages$.next('msg3');
messages$.next('msg4');

// Late subscriber recibe: msg2, msg3, msg4
messages$.subscribe(m => console.log(m));`),a(325),r(`// combineLatest \u2014 actualiza cuando cualquiera cambia
combineLatest([user$, config$]).pipe(
  map(([user, config]) => (`,"{"," ...user, theme: config.theme ","}",`))
);

// forkJoin \u2014 espera todas las llamadas HTTP
forkJoin([
  this.http.get('/api/users'),
  this.http.get('/api/products'),
  this.http.get('/api/orders')
]).subscribe(([users, products, orders]) => `,"{",`
  // Los tres disponibles aqu\xED
`,"}",`);

// withLatestFrom \u2014 enriquece click con datos actuales
saveClick$.pipe(
  withLatestFrom(formData$),
  switchMap(([_, data]) => this.api.save(data))
);`),a(21),m(`// 1. takeUntilDestroyed() \u2014 \u2705 Recomendado en Angular 20
import `,"{"," takeUntilDestroyed ","}",` from '@angular/core/rxjs-interop';

// En el constructor o campo del componente
interval(1000).pipe(
  takeUntilDestroyed()   // Se cancela autom\xE1ticamente al destruir
).subscribe(n => console.log(n));

// 2. DestroyRef + callback manual
const destroyRef = inject(DestroyRef);
const sub = interval(1000).subscribe(n => console.log(n));
destroyRef.onDestroy(() => sub.unsubscribe());

// 3. async pipe en template \u2014 se cancela autom\xE1ticamente
// <div>`,"{{"," data$ | async ","}}",`</div>

// 4. toSignal() \u2014 Angular signals, se limpia solo
const count = toSignal(interval(1000), `,"{"," initialValue: 0 ","}",");"),a(127),l("import ","{"," map, filter ","}",` from 'rxjs/operators';

// Cada operador es una funci\xF3n: Observable \u2192 Observable
source$.pipe(
  filter(x => x > 0),   // Observable \u2192 Observable (filtra negativos)
  map(x => x * 10)      // Observable \u2192 Observable (multiplica)
);

// Equivale a:
const filtered$ = filter(x => x > 0)(source$);
const mapped$   = map(x => x * 10)(filtered$);`),a(224),l(`// Descargar m\xFAltiples archivos en paralelo (m\xE1x 3 simult\xE1neos)
fileIds$.pipe(
  mergeMap(id => this.http.get(\`/api/files/$`,"{","id","}","`), 3)\n).subscribe(file => this.downloaded.push(file));"),a(286),r(`private destroy$ = new Subject<void>();

ngOnInit() `,"{",`
  this.data$.pipe(
    takeUntil(this.destroy$)
  ).subscribe(data => this.data = data);

  this.events$.pipe(
    takeUntil(this.destroy$)
  ).subscribe(event => this.handle(event));
`,"}",`

ngOnDestroy() `,"{",`
  this.destroy$.next();
  this.destroy$.complete();
`,"}"),a(13),r("import ","{"," takeUntilDestroyed ","}",` from '@angular/core/rxjs-interop';

// \u2705 En campo de clase o constructor \u2014 inyecta DestroyRef autom\xE1ticamente
data$ = this.store.select(selectData).pipe(takeUntilDestroyed());

// \u2705 En ngOnInit \u2014 necesita DestroyRef expl\xEDcito
private destroyRef = inject(DestroyRef);

ngOnInit() `,"{",`
  this.data$.pipe(
    takeUntilDestroyed(this.destroyRef)
  ).subscribe(d => this.process(d));
`,"}"),a(148),l(`// Combinar filtros de una tabla
combineLatest([
  this.searchTerm$,
  this.categoryFilter$,
  this.sortOrder$
]).pipe(
  debounceTime(100),  // evitar re-renders excesivos
  switchMap(([term, cat, sort]) =>
    this.api.getProducts(`,"{"," search: term, category: cat, sort ","}",`)
  )
).subscribe(products => this.products = products);`),a(16),m(`// Cargar datos iniciales en paralelo (con nombre de propiedades)
forkJoin(`,"{",`
  users:    this.http.get<User[]>('/api/users'),
  products: this.http.get<Product[]>('/api/products'),
  config:   this.http.get<Config>('/api/config')
`,"}",").subscribe((","{"," users, products, config ","}",") => ","{",`
  this.users    = users;
  this.products = products;
  this.config   = config;
`,"}",`);
// \u2705 HttpClient completa despu\xE9s de emitir \u2192 forkJoin funciona perfecto
// \u274C No usar con BehaviorSubject (nunca completa autom\xE1ticamente)`),a(18),r(`// merge \u2014 combina en un solo stream (el primero que emita pasa)
merge(click$, keypress$, gesture$).subscribe(event => handle(event));

// concat \u2014 en secuencia: primero todos de a$, luego todos de b$
concat(cachedData$, freshData$).subscribe(data => render(data));

// zip \u2014 parejas 1:1 (espera que ambos tengan nuevo valor)
zip(nombres$, apellidos$).pipe(
  map(([nombre, apellido]) => \`$`,"{","nombre","}"," $","{","apellido","}",`\`)
);

// race \u2014 el primero en emitir gana, los otros se cancelan
race(httpResponse$, timeout$).subscribe(result => handle(result));`),a(403),c(`// \u274C Sin shareReplay: 3 suscripciones = 3 HTTP calls
products$ = this.http.get<Product[]>('/api/products');

// \u2705 Con shareReplay: 1 HTTP call, todos reciben el mismo resultado
products$ = this.http.get<Product[]>('/api/products').pipe(
  shareReplay(`,"{"," bufferSize: 1, refCount: true ","}",`)
);

// template A:  `,"{{"," products$ | async ","}}",`  \u2192 trigger HTTP
// template B:  `,"{{"," products$ | async ","}}",`  \u2192 usa cache
// template C:  `,"{{"," products$ | async ","}}","  \u2192 usa cache"),a(19),l(`private refresh$ = new Subject<void>();

products$ = this.refresh$.pipe(
  startWith(undefined),                               // carga inicial
  switchMap(() => this.http.get<Product[]>('/api/products')),
  shareReplay(1)
);

// Cuando se necesita invalidar el cach\xE9:
invalidateCache() `,"{",`
  this.refresh$.next();  // trigger nueva petici\xF3n HTTP
`,"}"),a(107),r(`this.http.get(url).pipe(
  retry(`,"{",`
    count: 3,
    delay: (error, retryCount) => timer(Math.pow(2, retryCount) * 1000)
  `,"}",`),
  catchError(err => `,"{",`
    console.error('Failed after 3 retries', err);
    return of(null);
  `,"}",`)
)`),a(17),u(["interface State<T> ","{",`
  loading: boolean;
  data: T | null;
  error: boolean;
`,"}",`

const data$ = this.trigger$.pipe(
  switchMap(query => concat(
    of(`,"{"," loading: true, data: null, error: false ","}",`),
    this.api.search(query).pipe(
      map(data => (`,"{"," loading: false, data, error: false ","}",`)),
      catchError(() => of(`,"{"," loading: false, data: null, error: true ","}",`))
    )
  )),
  shareReplay(1)
);

// En template:
// @if (data$ | async; as state) `,"{",`
//   @if (state.loading) `,"{"," <spinner /> ","}",`
//   @if (state.error) `,"{"," <error-msg /> ","}",`
//   @if (state.data) `,"{",' <results [data]="state.data" /> ',"}",`
// `,"}"]))},dependencies:[x],styles:[".learn-page[_ngcontent-%COMP%]{max-width:900px;margin:0 auto;padding:1rem 0}.page-title[_ngcontent-%COMP%]{font-size:1.3rem;margin-bottom:1.2rem;color:var(--text)}.card[_ngcontent-%COMP%]{background:var(--bg-card);border:1px solid var(--border);border-radius:10px;padding:1.4rem;margin-bottom:1rem}.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.1rem;margin-bottom:.8rem;color:var(--accent-blue)}.card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:.95rem;margin-bottom:.5rem;color:var(--accent-purple)}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--text);line-height:1.6;margin-bottom:.6rem}.card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:1.4rem;color:var(--text);line-height:1.7;margin-bottom:.8rem}.card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:.3rem}.card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--accent-purple)}.card[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:var(--bg-code, rgba(110,118,129,.15));padding:.15rem .4rem;border-radius:4px;font-size:.85rem}pre[_ngcontent-%COMP%]{background:var(--bg-code, #161b22);border:1px solid var(--border);border-radius:8px;padding:1rem;overflow-x:auto;margin:.8rem 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:none;padding:0;font-size:.82rem;line-height:1.5;color:var(--text)}.compare-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin:.8rem 0;font-size:.85rem}.compare-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .compare-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid var(--border);padding:.5rem .7rem;text-align:left;color:var(--text)}.compare-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:#58a6ff1a;font-weight:600}.compare-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]{background:#58a6ff0a}@media (max-width: 600px){.compare-table[_ngcontent-%COMP%]{font-size:.78rem}}"]})};export{p as RxjsLearnComponent};
