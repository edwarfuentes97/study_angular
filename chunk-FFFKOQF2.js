import{a as u}from"./chunk-EVHMM366.js";import"./chunk-WS4L6SOG.js";import{Db as n,Eb as t,Ta as i,Zb as e,ac as r,cc as a,dc as o,ec as d,fb as s,fc as c}from"./chunk-G73V3KC4.js";import"./chunk-2NFLSA4Y.js";var p=class m{static \u0275fac=function(l){return new(l||m)};static \u0275cmp=s({type:m,selectors:[["app-rxjs-learn"]],decls:1058,vars:72,consts:[["appAutoGlossary","",1,"learn-page"],[1,"page-title"],["id","observable-vs-promise",1,"card"],[1,"compare-table"],[1,"language-typescript"],[1,"code-ref"],["id","subject-types",1,"card"],["id","operadores-de-flattening",1,"card"],["id","combining-operators",1,"card"],["id","memory-leaks",1,"card"],[2,"margin-top","0.8rem","color","var(--accent-green, #3fb950)"],["id","operadores-pipeables",1,"card"],["id","transformacion-deep-dive",1,"card"],[1,"language-text"],[2,"color","var(--accent-red, #f85149)"],["id","filtrado-deep-dive",1,"card"],["id","combinacion-deep-dive",1,"card"],["id","multicasting-sharereplay",1,"card"],["id","patrones-rxjs-angular",1,"card"]],template:function(l,E){l&1&&(n(0,"div",0)(1,"h2",1),e(2,"\u{1F4D6} RxJS \u2014 Teor\xEDa y Conceptos"),t(),n(3,"div",2)(4,"h3"),e(5,"\u{1F535} Observable vs Promise"),t(),n(6,"table",3)(7,"thead")(8,"tr")(9,"th"),e(10,"Caracter\xEDstica"),t(),n(11,"th"),e(12,"Promise"),t(),n(13,"th"),e(14,"Observable"),t()()(),n(15,"tbody")(16,"tr")(17,"td"),e(18,"Ejecuci\xF3n"),t(),n(19,"td")(20,"strong"),e(21,"Eager"),t(),e(22," \u2014 se ejecuta al crearse"),t(),n(23,"td")(24,"strong"),e(25,"Lazy"),t(),e(26," \u2014 solo al suscribirse"),t()(),n(27,"tr")(28,"td"),e(29,"Valores"),t(),n(30,"td"),e(31,"Un solo valor"),t(),n(32,"td"),e(33,"M\xFAltiples valores en el tiempo"),t()(),n(34,"tr")(35,"td"),e(36,"Cancelaci\xF3n"),t(),n(37,"td"),e(38,"No se puede cancelar"),t(),n(39,"td")(40,"code"),e(41,"unsubscribe()"),t(),e(42," cancela"),t()(),n(43,"tr")(44,"td"),e(45,"Operadores"),t(),n(46,"td")(47,"code"),e(48,".then()"),t(),e(49,", "),n(50,"code"),e(51,".catch()"),t()(),n(52,"td"),e(53,"100+ operadores composables"),t()(),n(54,"tr")(55,"td"),e(56,"Multicast"),t(),n(57,"td"),e(58,"Siempre compartida"),t(),n(59,"td"),e(60,"Unicast por defecto, multicast con Subject"),t()()()(),n(61,"pre")(62,"code",4),e(63),t()(),n(64,"div",5),e(65," \u{1F4C2} "),n(66,"code"),e(67,"features/rxjs-lab/observable-types.ts"),t(),e(68," \u2014 Demostraci\xF3n interactiva de Observable, Subject, BehaviorSubject "),t()(),n(69,"div",6)(70,"h3"),e(71,"\u{1F4E1} Subject Types"),t(),n(72,"p"),e(73,"Los Subjects son Observables "),n(74,"strong"),e(75,"multicast"),t(),e(76," que tambi\xE9n son Observers (puedes emitir valores con "),n(77,"code"),e(78,".next()"),t(),e(79,")."),t(),n(80,"table",3)(81,"thead")(82,"tr")(83,"th"),e(84,"Tipo"),t(),n(85,"th"),e(86,"Late Subscriber recibe"),t(),n(87,"th"),e(88,"Uso t\xEDpico"),t()()(),n(89,"tbody")(90,"tr")(91,"td")(92,"code"),e(93,"Subject"),t()(),n(94,"td"),e(95,"Nada \u2014 solo valores futuros"),t(),n(96,"td"),e(97,"Event bus, notificaciones"),t()(),n(98,"tr")(99,"td")(100,"code"),e(101,"BehaviorSubject"),t()(),n(102,"td"),e(103,"\xDAltimo valor emitido (requiere valor inicial)"),t(),n(104,"td"),e(105,"Estado actual, config, auth status"),t()(),n(106,"tr")(107,"td")(108,"code"),e(109,"ReplaySubject(n)"),t()(),n(110,"td"),e(111,"\xDAltimos N valores"),t(),n(112,"td"),e(113,"Cache de mensajes, historial"),t()(),n(114,"tr")(115,"td")(116,"code"),e(117,"AsyncSubject"),t()(),n(118,"td"),e(119,"Solo el \xFAltimo valor, al completar"),t(),n(120,"td"),e(121,"HTTP responses, c\xE1lculos finales"),t()()()(),n(122,"pre")(123,"code",4),e(124),t()(),n(125,"div",5),e(126," \u{1F4C2} "),n(127,"code"),e(128,"features/rxjs-lab/observable-types.ts"),t(),e(129," \u2014 Subject, BehaviorSubject, ReplaySubject, AsyncSubject en acci\xF3n "),t()(),n(130,"div",7)(131,"h3"),e(132,"\u{1F500} Operadores de Flattening"),t(),n(133,"p"),e(134,"Transforman un Observable que emite Observables internos en un stream plano. La diferencia est\xE1 en c\xF3mo manejan la "),n(135,"strong"),e(136,"concurrencia"),t(),e(137,":"),t(),n(138,"table",3)(139,"thead")(140,"tr")(141,"th"),e(142,"Operador"),t(),n(143,"th"),e(144,"Comportamiento"),t(),n(145,"th"),e(146,"Caso de uso"),t()()(),n(147,"tbody")(148,"tr")(149,"td")(150,"code"),e(151,"switchMap"),t()(),n(152,"td")(153,"strong"),e(154,"Cancela"),t(),e(155," el inner anterior al recibir nuevo valor"),t(),n(156,"td"),e(157,"B\xFAsqueda typeahead, autocomplete"),t()(),n(158,"tr")(159,"td")(160,"code"),e(161,"mergeMap"),t()(),n(162,"td"),e(163,"Ejecuta todos en "),n(164,"strong"),e(165,"paralelo"),t()(),n(166,"td"),e(167,"Descargas paralelas, logs"),t()(),n(168,"tr")(169,"td")(170,"code"),e(171,"concatMap"),t()(),n(172,"td"),e(173,"Ejecuta en "),n(174,"strong"),e(175,"secuencia"),t(),e(176,", espera que termine cada uno"),t(),n(177,"td"),e(178,"Guardar formularios, orden importa"),t()(),n(179,"tr")(180,"td")(181,"code"),e(182,"exhaustMap"),t()(),n(183,"td")(184,"strong"),e(185,"Ignora"),t(),e(186," nuevos valores mientras hay uno en progreso"),t(),n(187,"td"),e(188,"Login button, submit de formulario"),t()()()(),n(189,"pre")(190,"code",4),e(191,`// switchMap \u2014 autocomplete: cancela b\xFAsqueda anterior
searchInput$.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap(term => this.api.search(term))
).subscribe(results => this.results = results);

// exhaustMap \u2014 login: ignora clicks mientras se procesa
loginClick$.pipe(
  exhaustMap(() => this.auth.login(credentials))
).subscribe(user => this.router.navigate(['/home']));`),t()(),n(192,"div",5),e(193," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(194,"ul")(195,"li")(196,"code"),e(197,"features/rxjs-lab/flattening-operators.ts"),t(),e(198," \u2014 Comparaci\xF3n interactiva de los 4 operadores"),t(),n(199,"li")(200,"code"),e(201,"features/ngrx-lab/store/product.effects.ts"),t(),e(202," \u2014 switchMap (load), exhaustMap (create), mergeMap (update/delete)"),t(),n(203,"li")(204,"code"),e(205,"features/rxjs-lab/search-typeahead.ts"),t(),e(206," \u2014 switchMap en b\xFAsqueda real con debounceTime"),t()()()(),n(207,"div",8)(208,"h3"),e(209,"\u{1F517} Combining Operators"),t(),n(210,"p"),e(211,"Combinan m\xFAltiples streams en uno solo:"),t(),n(212,"ul")(213,"li")(214,"strong")(215,"code"),e(216,"combineLatest"),t(),e(217,":"),t(),e(218," Emite cuando "),n(219,"em"),e(220,"cualquiera"),t(),e(221," de los streams emite (despu\xE9s de que todos hayan emitido al menos una vez). Ideal para derivar estado combinado."),t(),n(222,"li")(223,"strong")(224,"code"),e(225,"forkJoin"),t(),e(226,":"),t(),e(227," Espera a que "),n(228,"em"),e(229,"todos"),t(),e(230," completen y emite los \xFAltimos valores como array. Perfecto para llamadas HTTP paralelas."),t(),n(231,"li")(232,"strong")(233,"code"),e(234,"withLatestFrom"),t(),e(235,":"),t(),e(236," Cuando el source emite, toma el valor m\xE1s reciente de otro stream. \xDAtil para enriquecer eventos con datos actuales."),t()(),n(237,"pre")(238,"code",4),e(239),t()(),n(240,"div",5),e(241," \u{1F4C2} "),n(242,"code"),e(243,"features/rxjs-lab/combining-operators.ts"),t(),e(244," \u2014 combineLatest, forkJoin, withLatestFrom en acci\xF3n "),t()(),n(245,"div",9)(246,"h3"),e(247,"\u{1F6A8} Memory Leaks"),t(),n(248,"p"),e(249," Las suscripciones que no se cancelan siguen ejecut\xE1ndose despu\xE9s de destruir el componente. Especialmente peligroso con "),n(250,"code"),e(251,"interval()"),t(),e(252,", "),n(253,"code"),e(254,"fromEvent()"),t(),e(255,", y WebSockets. "),t(),n(256,"h4",10),e(257,"4 Patrones para evitarlos:"),t(),n(258,"pre")(259,"code",4),e(260),t()(),n(261,"p")(262,"strong"),e(263,"Regla:"),t(),e(264," Si no usas "),n(265,"code"),e(266,"async"),t(),e(267," pipe, "),n(268,"code"),e(269,"toSignal()"),t(),e(270,", o "),n(271,"code"),e(272,"takeUntilDestroyed()"),t(),e(273,", necesitas cancelar manualmente."),t(),n(274,"div",5),e(275," \u{1F4C2} "),n(276,"code"),e(277,"features/rxjs-lab/memory-leaks.ts"),t(),e(278," \u2014 Demostraci\xF3n de leak + 3 patrones de soluci\xF3n (takeUntil, DestroyRef, async pipe) "),t()(),n(279,"div",11)(280,"h3"),e(281,"\u{1F527} Operadores Pipeables en Profundidad"),t(),n(282,"h4"),e(283,"\xBFQu\xE9 es un operador pipeable?"),t(),n(284,"p"),e(285," Es una "),n(286,"strong"),e(287,"funci\xF3n pura"),t(),e(288," que recibe un Observable y retorna un "),n(289,"em"),e(290,"nuevo"),t(),e(291," Observable sin mutar el original. Se encadenan dentro de "),n(292,"code"),e(293,".pipe()"),t(),e(294,", lo que permite composici\xF3n funcional legible y tree-shakeable. "),t(),n(295,"pre")(296,"code",4),e(297),t()(),n(298,"h4"),e(299,"Categor\xEDas de operadores"),t(),n(300,"table",3)(301,"thead")(302,"tr")(303,"th"),e(304,"Categor\xEDa"),t(),n(305,"th"),e(306,"Operadores"),t(),n(307,"th"),e(308,"Uso"),t()()(),n(309,"tbody")(310,"tr")(311,"td")(312,"strong"),e(313,"Transformaci\xF3n"),t()(),n(314,"td")(315,"code"),e(316,"map"),t(),e(317,", "),n(318,"code"),e(319,"switchMap"),t(),e(320,", "),n(321,"code"),e(322,"mergeMap"),t(),e(323,", "),n(324,"code"),e(325,"concatMap"),t(),e(326,", "),n(327,"code"),e(328,"exhaustMap"),t(),e(329,", "),n(330,"code"),e(331,"scan"),t(),e(332,", "),n(333,"code"),e(334,"reduce"),t()(),n(335,"td"),e(336,"Transformar valores emitidos"),t()(),n(337,"tr")(338,"td")(339,"strong"),e(340,"Filtrado"),t()(),n(341,"td")(342,"code"),e(343,"filter"),t(),e(344,", "),n(345,"code"),e(346,"take"),t(),e(347,", "),n(348,"code"),e(349,"takeUntil"),t(),e(350,", "),n(351,"code"),e(352,"takeWhile"),t(),e(353,", "),n(354,"code"),e(355,"first"),t(),e(356,", "),n(357,"code"),e(358,"last"),t(),e(359,", "),n(360,"code"),e(361,"skip"),t(),e(362,", "),n(363,"code"),e(364,"distinctUntilChanged"),t(),e(365,", "),n(366,"code"),e(367,"debounceTime"),t(),e(368,", "),n(369,"code"),e(370,"throttleTime"),t()(),n(371,"td"),e(372,"Controlar qu\xE9 valores pasan"),t()(),n(373,"tr")(374,"td")(375,"strong"),e(376,"Combinaci\xF3n"),t()(),n(377,"td")(378,"code"),e(379,"combineLatest"),t(),e(380,", "),n(381,"code"),e(382,"forkJoin"),t(),e(383,", "),n(384,"code"),e(385,"withLatestFrom"),t(),e(386,", "),n(387,"code"),e(388,"merge"),t(),e(389,", "),n(390,"code"),e(391,"concat"),t(),e(392,", "),n(393,"code"),e(394,"zip"),t(),e(395,", "),n(396,"code"),e(397,"race"),t()(),n(398,"td"),e(399,"Combinar m\xFAltiples streams"),t()(),n(400,"tr")(401,"td")(402,"strong"),e(403,"Creaci\xF3n"),t()(),n(404,"td")(405,"code"),e(406,"of"),t(),e(407,", "),n(408,"code"),e(409,"from"),t(),e(410,", "),n(411,"code"),e(412,"interval"),t(),e(413,", "),n(414,"code"),e(415,"timer"),t(),e(416,", "),n(417,"code"),e(418,"fromEvent"),t(),e(419,", "),n(420,"code"),e(421,"EMPTY"),t(),e(422,", "),n(423,"code"),e(424,"NEVER"),t(),e(425,", "),n(426,"code"),e(427,"throwError"),t()(),n(428,"td"),e(429,"Crear Observables"),t()(),n(430,"tr")(431,"td")(432,"strong"),e(433,"Utilidad"),t()(),n(434,"td")(435,"code"),e(436,"tap"),t(),e(437,", "),n(438,"code"),e(439,"delay"),t(),e(440,", "),n(441,"code"),e(442,"finalize"),t(),e(443,", "),n(444,"code"),e(445,"timeout"),t(),e(446,", "),n(447,"code"),e(448,"retry"),t(),e(449,", "),n(450,"code"),e(451,"retryWhen"),t(),e(452,", "),n(453,"code"),e(454,"catchError"),t()(),n(455,"td"),e(456,"Control y debugging"),t()(),n(457,"tr")(458,"td")(459,"strong"),e(460,"Multicasting"),t()(),n(461,"td")(462,"code"),e(463,"share"),t(),e(464,", "),n(465,"code"),e(466,"shareReplay"),t(),e(467,", "),n(468,"code"),e(469,"publish"),t(),e(470,", "),n(471,"code"),e(472,"refCount"),t()(),n(473,"td"),e(474,"Compartir suscripciones"),t()()()(),n(475,"div",5),e(476," \u{1F4C2} "),n(477,"code"),e(478,"features/rxjs-lab/flattening-operators.ts"),t(),e(479," \u2014 Operadores pipeables aplicados en componentes reales "),t()(),n(480,"div",12)(481,"h3"),e(482,"\u{1F504} Operadores de Transformaci\xF3n \u2014 Deep Dive"),t(),n(483,"h4"),e(484,"1. map \u2014 Transformaci\xF3n 1:1"),t(),n(485,"p"),e(486,"Transforma cada valor emitido aplicando una funci\xF3n. Nunca cambia la cantidad de emisiones."),t(),n(487,"pre")(488,"code",4),e(489,`of(1, 2, 3).pipe(
  map(x => x * 2)
).subscribe(v => console.log(v));
// Output: 2, 4, 6`),t()(),n(490,"h4"),e(491,"2. switchMap \u2014 \u2B50 EL M\xC1S IMPORTANTE"),t(),n(492,"p"),e(493," Al recibir un nuevo valor, "),n(494,"strong"),e(495,"cancela"),t(),e(496," la suscripci\xF3n interna anterior y crea una nueva. Es el operador por defecto para b\xFAsquedas, autocomplete y navegaci\xF3n. "),t(),n(497,"pre")(498,"code",13),e(499,`Diagrama \u2014 switchMap cancela inner al recibir nuevo outer:

Source:  --A--------B--------C-->
Inner:   --1-2-3    --4-5    --6-7-8-->
Output:  --1-2------4-5------6-7-8-->
          \u2191          \u2191
          A's stream  B's stream cancelled
          cancelled   when C arrives
          when B arrives`),t()(),n(500,"p")(501,"strong"),e(502,"C\xF3digo completo de b\xFAsqueda con manejo de errores:"),t()(),n(503,"pre")(504,"code",4),e(505,`this.searchInput.valueChanges.pipe(
  debounceTime(300),            // espera 300ms de silencio
  distinctUntilChanged(),       // ignora si el valor no cambi\xF3
  filter(term => term.length >= 2), // m\xEDnimo 2 caracteres
  switchMap(term => this.api.search(term).pipe(
    catchError(() => of([]))    // error NO mata el stream externo
  ))
).subscribe(results => this.results = results);`),t()(),n(506,"h4"),e(507,"3. mergeMap (flatMap) \u2014 Paralelo sin cancelar"),t(),n(508,"p"),e(509," Ejecuta "),n(510,"strong"),e(511,"TODAS"),t(),e(512," las suscripciones internas en paralelo. Ninguna se cancela. Acepta un par\xE1metro de concurrencia: "),n(513,"code"),e(514,"mergeMap(fn, 3)"),t(),e(515," \u2014 m\xE1ximo 3 simult\xE1neas. "),t(),n(516,"pre")(517,"code",13),e(518,`Diagrama \u2014 mergeMap mantiene todas las suscripciones:

Source:  --A--------B--------C-->
Inner:   --1-2-3    --4-5-6  --7-8-->
Output:  --1-2-3----4-5-6----7-8-->
          \u2191          \u2191        \u2191
          All inner streams run to completion`),t()(),n(519,"pre")(520,"code",4),e(521),t()(),n(522,"h4"),e(523,"4. concatMap \u2014 Secuencial estricto"),t(),n(524,"p"),e(525," Espera a que la suscripci\xF3n interna "),n(526,"strong"),e(527,"complete"),t(),e(528," antes de procesar el siguiente valor. "),n(529,"span",14),e(530,"\u26A0\uFE0F PELIGRO:"),t(),e(531," si el inner Observable nunca completa, la cola se bloquea para siempre. "),t(),n(532,"pre")(533,"code",13),e(534,`Diagrama \u2014 concatMap espera completar antes de siguiente:

Source:  --A----B----C-->
Inner:   --1-2| --3-4| --5-6|
Output:  --1-2----3-4----5-6-->
          \u2191      \u2191
          B waits for A to complete
                 C waits for B to complete`),t()(),n(535,"pre")(536,"code",4),e(537,`// Guardar cambios en orden estricto
changes$.pipe(
  concatMap(change => this.api.save(change))
).subscribe(() => console.log('Guardado en orden'));`),t()(),n(538,"h4"),e(539,"5. exhaustMap \u2014 Ignora mientras est\xE1 ocupado"),t(),n(540,"p"),e(541," Mientras hay una suscripci\xF3n interna activa, "),n(542,"strong"),e(543,"ignora completamente"),t(),e(544," los nuevos valores del source. Perfecto para evitar doble-click en formularios y botones de login. "),t(),n(545,"pre")(546,"code",13),e(547,`Diagrama \u2014 exhaustMap descarta B y C:

Source:  --A--B--C--------D-->
Inner:   --1-2-3|         --4-5|
Output:  --1-2-3----------4-5-->
          \u2191  \u2191  \u2191         \u2191
          A  B  C ignored  D processed
          processing       (inner finished)
          active`),t()(),n(548,"pre")(549,"code",4),e(550,`// Login: ignora clicks adicionales mientras se procesa
this.loginBtn.click$.pipe(
  exhaustMap(() => this.auth.login(this.credentials))
).subscribe(user => this.router.navigate(['/home']));`),t()(),n(551,"h4"),e(552,"6. scan \u2014 Acumulador progresivo"),t(),n(553,"p"),e(554," Como "),n(555,"code"),e(556,"Array.reduce()"),t(),e(557,", pero emite "),n(558,"strong"),e(559,"cada valor acumulado"),t(),e(560," en vez de solo el final. Ideal para contadores, estado acumulado y running totals. "),t(),n(561,"pre")(562,"code",4),e(563,`// Contador de clicks
clicks$.pipe(
  scan((count) => count + 1, 0)
).subscribe(n => console.log(n));
// Output: 1, 2, 3, 4...

// Acumular lista de items
newItem$.pipe(
  scan((items, item) => [...items, item], [] as Item[])
).subscribe(allItems => this.items = allItems);`),t()(),n(564,"h4"),e(565,"7. Tabla de decisi\xF3n: \xBFCu\xE1l usar?"),t(),n(566,"table",3)(567,"thead")(568,"tr")(569,"th"),e(570,"Situaci\xF3n"),t(),n(571,"th"),e(572,"Operador"),t(),n(573,"th"),e(574,"Por qu\xE9"),t()()(),n(575,"tbody")(576,"tr")(577,"td"),e(578,"B\xFAsqueda / autocomplete"),t(),n(579,"td")(580,"code"),e(581,"switchMap"),t()(),n(582,"td"),e(583,"Cancela peticiones obsoletas"),t()(),n(584,"tr")(585,"td"),e(586,"Login / Submit formulario"),t(),n(587,"td")(588,"code"),e(589,"exhaustMap"),t()(),n(590,"td"),e(591,"Evita doble env\xEDo"),t()(),n(592,"tr")(593,"td"),e(594,"Guardar cambios en orden"),t(),n(595,"td")(596,"code"),e(597,"concatMap"),t()(),n(598,"td"),e(599,"Mantiene secuencia estricta"),t()(),n(600,"tr")(601,"td"),e(602,"Descargas paralelas"),t(),n(603,"td")(604,"code"),e(605,"mergeMap"),t()(),n(606,"td"),e(607,"M\xE1xima velocidad, sin esperas"),t()(),n(608,"tr")(609,"td"),e(610,"Acumular estado"),t(),n(611,"td")(612,"code"),e(613,"scan"),t()(),n(614,"td"),e(615,"Emite progresivamente"),t()()()(),n(616,"div",5),e(617," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(618,"ul")(619,"li")(620,"code"),e(621,"features/rxjs-lab/flattening-operators.ts"),t(),e(622," \u2014 Comparaci\xF3n interactiva de los 4 operadores"),t(),n(623,"li")(624,"code"),e(625,"features/rxjs-lab/search-typeahead.ts"),t(),e(626," \u2014 switchMap con debounceTime en b\xFAsqueda real"),t(),n(627,"li")(628,"code"),e(629,"features/ngrx-lab/store/product.effects.ts"),t(),e(630," \u2014 switchMap, exhaustMap, mergeMap en effects"),t()()()(),n(631,"div",15)(632,"h3"),e(633,"\u{1F50D} Operadores de Filtrado \u2014 Deep Dive"),t(),n(634,"h4"),e(635,"1. filter \u2014 Predicado b\xE1sico"),t(),n(636,"p"),e(637,"Solo deja pasar valores que cumplan la condici\xF3n. Equivale a "),n(638,"code"),e(639,"Array.filter()"),t(),e(640," pero para streams."),t(),n(641,"pre")(642,"code",4),e(643,`numbers$.pipe(
  filter(n => n % 2 === 0)  // solo pares
)`),t()(),n(644,"h4"),e(645,"2. debounceTime(ms) \u2014 Espera silencio"),t(),n(646,"p"),e(647," Espera "),n(648,"strong"),e(649,"X milisegundos de silencio"),t(),e(650," antes de emitir el \xFAltimo valor. Si llega un nuevo valor antes de que pase el tiempo, reinicia el temporizador. Ideal para "),n(651,"strong"),e(652,"inputs de b\xFAsqueda"),t(),e(653,". "),t(),n(654,"h4"),e(655,"3. throttleTime(ms) \u2014 Limita frecuencia"),t(),n(656,"p"),e(657," Emite el "),n(658,"strong"),e(659,"primer valor"),t(),e(660,", luego ignora todo durante X milisegundos. Ideal para eventos de "),n(661,"strong"),e(662,"scroll"),t(),e(663," y "),n(664,"strong"),e(665,"resize"),t(),e(666,". "),t(),n(667,"pre")(668,"code",13),e(669,`Comparaci\xF3n debounceTime vs throttleTime:

Input:    --A-B-C------D-E----->
                 300ms gap

debounce: ----------C--------E->  (espera silencio, emite \xFAltimo)
throttle: --A--------D-------->   (emite primero, ignora el resto)`),t()(),n(670,"h4"),e(671,"4. distinctUntilChanged \u2014 Solo si cambi\xF3"),t(),n(672,"p"),e(673," Solo emite si el valor es diferente al anterior. "),n(674,"span",14),e(675,"\u26A0\uFE0F Cuidado con objetos:"),t(),e(676," compara por referencia. Usa un comparador custom para objetos: "),t(),n(677,"pre")(678,"code",4),e(679,`// Primitivos \u2014 funciona directo
search$.pipe(distinctUntilChanged())

// Objetos \u2014 necesita comparador custom
user$.pipe(
  distinctUntilChanged((prev, curr) => prev.id === curr.id)
)`),t()(),n(680,"h4"),e(681,"5. take(n) \u2014 Solo N valores"),t(),n(682,"p"),e(683," Emite los primeros "),n(684,"code"),e(685,"n"),t(),e(686," valores y luego "),n(687,"strong"),e(688,"completa"),t(),e(689," el Observable. "),n(690,"code"),e(691,"take(1)"),t(),e(692,' es muy com\xFAn: "dame el primer valor y desuscr\xEDbete autom\xE1ticamente". '),t(),n(693,"pre")(694,"code",4),e(695,`// take(1) \u2014 equivale a un "one-shot"
this.store.select(selectUser).pipe(
  take(1)  // obtiene valor actual y se desuscribe
).subscribe(user => console.log(user));`),t()(),n(696,"h4"),e(697,"6. takeUntil(notifier$) \u2014 Patr\xF3n de cleanup cl\xE1sico"),t(),n(698,"p"),e(699,"Emite valores hasta que el "),n(700,"code"),e(701,"notifier$"),t(),e(702," emite. Es el patr\xF3n tradicional para limpiar suscripciones:"),t(),n(703,"pre")(704,"code",4),e(705),t()(),n(706,"h4"),e(707,"7. takeUntilDestroyed() \u2014 Angular 16+ \u2705 Recomendado"),t(),n(708,"p"),e(709,"Reemplaza el patr\xF3n manual de "),n(710,"code"),e(711,"takeUntil"),t(),e(712," + "),n(713,"code"),e(714,"Subject"),t(),e(715,". M\xE1s limpio y menos propenso a errores:"),t(),n(716,"pre")(717,"code",4),e(718),t()(),n(719,"h4"),e(720,"8. first() y skip(n)"),t(),n(721,"p")(722,"code"),e(723,"first()"),t(),e(724," \u2014 Emite el primer valor que cumpla la condici\xF3n (o error si no hay ninguno). "),n(725,"code"),e(726,"skip(n)"),t(),e(727," \u2014 Ignora los primeros "),n(728,"code"),e(729,"n"),t(),e(730," valores y emite a partir del siguiente. "),t(),n(731,"pre")(732,"code",4),e(733,`// first con condici\xF3n \u2014 primer usuario admin
users$.pipe(
  first(user => user.role === 'admin')
).subscribe(admin => console.log(admin));
// \u26A0\uFE0F Si no hay admin, lanza EmptyError

// skip \u2014 ignorar estado inicial
formValue$.pipe(
  skip(1)  // ignora el valor inicial del formulario
).subscribe(val => this.markDirty());`),t()(),n(734,"div",5),e(735," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(736,"ul")(737,"li")(738,"code"),e(739,"features/rxjs-lab/search-typeahead.ts"),t(),e(740," \u2014 debounceTime + distinctUntilChanged + filter en b\xFAsqueda"),t(),n(741,"li")(742,"code"),e(743,"features/rxjs-lab/memory-leaks.ts"),t(),e(744," \u2014 takeUntil y takeUntilDestroyed para cleanup"),t()()()(),n(745,"div",16)(746,"h3"),e(747,"\u{1F517} Operadores de Combinaci\xF3n \u2014 Deep Dive"),t(),n(748,"h4"),e(749,"1. combineLatest \u2014 \xDAltimo de cada fuente, reactivo"),t(),n(750,"p"),e(751," Emite un array con el "),n(752,"strong"),e(753,"\xFAltimo valor de CADA fuente"),t(),e(754," cada vez que cualquiera emite. Solo empieza a emitir cuando "),n(755,"strong"),e(756,"TODOS"),t(),e(757," han emitido al menos una vez. "),t(),n(758,"pre")(759,"code",13),e(760,`Diagrama \u2014 combineLatest:

a$:  --1----2-----------3-->
b$:  ----X------Y----------->
Out: ---[1,X]-[2,X]-[2,Y]-[3,Y]-->
     \u2191         \u2191     \u2191     \u2191
     Ambos     a$    b$    a$ emiti\xF3
     emitieron emiti\xF3 emiti\xF3`),t()(),n(761,"pre")(762,"code",4),e(763),t()(),n(764,"h4"),e(765,"2. forkJoin \u2014 Esperar que TODOS completen (como Promise.all)"),t(),n(766,"p"),e(767," Espera a que "),n(768,"strong"),e(769,"todos los Observables completen"),t(),e(770,", luego emite un array (o objeto) con el \xFAltimo valor de cada uno. "),n(771,"span",14),e(772,"\u26A0\uFE0F PELIGRO:"),t(),e(773," Si un Observable nunca completa, forkJoin "),n(774,"strong"),e(775,"nunca emite"),t(),e(776,". "),t(),n(777,"pre")(778,"code",4),e(779),t()(),n(780,"h4"),e(781,"3. withLatestFrom \u2014 Enriquecer evento con datos"),t(),n(782,"p"),e(783," Cuando el "),n(784,"strong"),e(785,"source emite"),t(),e(786,", toma el \xFAltimo valor de otro Observable. El segundo Observable "),n(787,"strong"),e(788,"NO trigger"),t(),e(789," emisiones por s\xED solo. "),t(),n(790,"pre")(791,"code",4),e(792,`// Click de guardar + datos actuales del formulario
this.saveClick$.pipe(
  withLatestFrom(this.store.select(selectFormData)),
  map(([_, formData]) => formData),
  switchMap(data => this.api.save(data))
).subscribe(() => this.showSuccess());`),t()(),n(793,"h4"),e(794,"4. merge, concat, zip, race"),t(),n(795,"pre")(796,"code",4),e(797),t()(),n(798,"h4"),e(799,"Tabla de decisi\xF3n: \xBFCu\xE1l combinador usar?"),t(),n(800,"table",3)(801,"thead")(802,"tr")(803,"th"),e(804,"Necesito..."),t(),n(805,"th"),e(806,"Operador"),t(),n(807,"th"),e(808,"Comportamiento"),t()()(),n(809,"tbody")(810,"tr")(811,"td"),e(812,"\xDAltimo valor de cada fuente, reactivo"),t(),n(813,"td")(814,"code"),e(815,"combineLatest"),t()(),n(816,"td"),e(817,"Emite cuando cualquiera emite"),t()(),n(818,"tr")(819,"td"),e(820,"Esperar que TODOS completen"),t(),n(821,"td")(822,"code"),e(823,"forkJoin"),t()(),n(824,"td"),e(825,"Como "),n(826,"code"),e(827,"Promise.all()"),t()()(),n(828,"tr")(829,"td"),e(830,"Enriquecer evento con dato actual"),t(),n(831,"td")(832,"code"),e(833,"withLatestFrom"),t()(),n(834,"td"),e(835,"Solo source trigger emisi\xF3n"),t()(),n(836,"tr")(837,"td"),e(838,"Mezclar streams independientes"),t(),n(839,"td")(840,"code"),e(841,"merge"),t()(),n(842,"td"),e(843,"El primero que emita pasa"),t()(),n(844,"tr")(845,"td"),e(846,"Secuencia ordenada de streams"),t(),n(847,"td")(848,"code"),e(849,"concat"),t()(),n(850,"td"),e(851,"Primero a$, luego b$"),t()(),n(852,"tr")(853,"td"),e(854,"Parear valores 1:1"),t(),n(855,"td")(856,"code"),e(857,"zip"),t()(),n(858,"td"),e(859,"Espera par de ambos"),t()(),n(860,"tr")(861,"td"),e(862,"El m\xE1s r\xE1pido gana"),t(),n(863,"td")(864,"code"),e(865,"race"),t()(),n(866,"td"),e(867,"Cancela los dem\xE1s"),t()()()(),n(868,"div",5),e(869," \u{1F4C2} "),n(870,"code"),e(871,"features/rxjs-lab/combining-operators.ts"),t(),e(872," \u2014 combineLatest, forkJoin, withLatestFrom, merge en acci\xF3n "),t()(),n(873,"div",17)(874,"h3"),e(875,"\u{1F4E1} Multicasting y shareReplay"),t(),n(876,"h4"),e(877,"El problema: Cold vs Hot Observables"),t(),n(878,"table",3)(879,"thead")(880,"tr")(881,"th"),e(882,"Tipo"),t(),n(883,"th"),e(884,"Comportamiento"),t(),n(885,"th"),e(886,"Ejemplo"),t()()(),n(887,"tbody")(888,"tr")(889,"td")(890,"strong"),e(891,"Cold"),t()(),n(892,"td"),e(893,"Cada suscripci\xF3n ejecuta el productor desde cero"),t(),n(894,"td")(895,"code"),e(896,"HttpClient.get()"),t(),e(897," \u2014 N suscripciones = N HTTP calls"),t()(),n(898,"tr")(899,"td")(900,"strong"),e(901,"Hot"),t()(),n(902,"td"),e(903,"Todos los suscriptores comparten la misma fuente"),t(),n(904,"td"),e(905,"WebSocket, "),n(906,"code"),e(907,"fromEvent()"),t(),e(908,", "),n(909,"code"),e(910,"Subject"),t()()()()(),n(911,"h4"),e(912,"share() \u2014 Convertir cold a hot"),t(),n(913,"p"),e(914,"Comparte la suscripci\xF3n entre todos los suscriptores activos. Cuando el \xFAltimo se desuscribe, la fuente se desconecta."),t(),n(915,"h4"),e(916,"shareReplay(1) \u2014 Compartir + cachear"),t(),n(917,"p"),e(918," Comparte la suscripci\xF3n "),n(919,"strong"),e(920,"y cachea"),t(),e(921," el \xFAltimo valor para nuevos suscriptores tard\xEDos. Es el operador m\xE1s usado para cachear respuestas HTTP. "),t(),n(922,"pre")(923,"code",4),e(924),t()(),n(925,"h4"),e(926,"refCount: true vs false"),t(),n(927,"ul")(928,"li")(929,"code"),e(930,"refCount: true"),t(),e(931," \u2014 cuando no hay suscriptores, desconecta la fuente. \u2705 "),n(932,"strong"),e(933,"Recomendado"),t(),e(934," para evitar memory leaks."),t(),n(935,"li")(936,"code"),e(937,"refCount: false"),t(),e(938," (default) \u2014 cachea para siempre incluso sin suscriptores. \u26A0\uFE0F Posible memory leak."),t()(),n(939,"h4"),e(940,"Patr\xF3n de cach\xE9 con invalidaci\xF3n manual"),t(),n(941,"pre")(942,"code",4),e(943),t()(),n(944,"div",5),e(945," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(946,"ul")(947,"li")(948,"code"),e(949,"features/rxjs-lab/observable-types.ts"),t(),e(950," \u2014 Cold vs Hot Observables"),t(),n(951,"li")(952,"code"),e(953,"features/rxjs-lab/combining-operators.ts"),t(),e(954," \u2014 shareReplay en servicios"),t()()()(),n(955,"div",18)(956,"h3"),e(957,"\u{1F3D7}\uFE0F Patrones RxJS en Angular"),t(),n(958,"h4"),e(959,"1. HTTP con retry y backoff exponencial"),t(),n(960,"p"),e(961,"Reintentar peticiones fallidas con espera exponencial (1s, 2s, 4s...):"),t(),n(962,"pre")(963,"code",4),e(964),t()(),n(965,"h4"),e(966,"2. Polling \u2014 Consultas peri\xF3dicas"),t(),n(967,"pre")(968,"code",4),e(969,`const polling$ = timer(0, 5000).pipe(  // inmediato + cada 5s
  switchMap(() => this.http.get('/api/status')),
  retry(3),
  share(),
  takeUntilDestroyed()
);

// Todos los suscriptores comparten el mismo polling`),t()(),n(970,"h4"),e(971,"3. Prevenci\xF3n de race conditions"),t(),n(972,"pre")(973,"code",4),e(974,`// switchMap cancela la petici\xF3n anterior autom\xE1ticamente
// Si el usuario navega r\xE1pido: /user/1 \u2192 /user/2 \u2192 /user/3
// Solo la \xFAltima petici\xF3n (/user/3) llega al subscribe
this.route.params.pipe(
  switchMap(params => this.api.getUser(params['id']))
).subscribe(user => this.user = user);`),t()(),n(975,"h4"),e(976,"4. Loading state pattern"),t(),n(977,"p"),e(978,"Manejar estados de carga, datos y error en un solo stream:"),t(),n(979,"pre")(980,"code",4),e(981),t()(),n(982,"h4"),e(983,"5. Estrategias de unsubscribe \u2014 Comparaci\xF3n"),t(),n(984,"table",3)(985,"thead")(986,"tr")(987,"th"),e(988,"Estrategia"),t(),n(989,"th"),e(990,"C\xF3digo"),t(),n(991,"th"),e(992,"Cu\xE1ndo usar"),t()()(),n(993,"tbody")(994,"tr")(995,"td")(996,"code"),e(997,"takeUntil(destroy$)"),t()(),n(998,"td")(999,"code"),e(1e3,"Subject"),t(),e(1001," + "),n(1002,"code"),e(1003,"ngOnDestroy"),t()(),n(1004,"td"),e(1005,"Enfoque cl\xE1sico, pre-Angular 16"),t()(),n(1006,"tr")(1007,"td")(1008,"code"),e(1009,"takeUntilDestroyed()"),t()(),n(1010,"td")(1011,"code"),e(1012,"inject(DestroyRef)"),t()(),n(1013,"td"),e(1014,"\u2705 Angular 16+ \u2014 preferido"),t()(),n(1015,"tr")(1016,"td")(1017,"code"),e(1018,"async"),t(),e(1019," pipe"),t(),n(1020,"td"),e(1021,"template "),n(1022,"code"),e(1023,"| async"),t()(),n(1024,"td"),e(1025,"Suscripciones solo en template"),t()(),n(1026,"tr")(1027,"td")(1028,"code"),e(1029,"toSignal()"),t()(),n(1030,"td")(1031,"code"),e(1032,"toSignal(obs$)"),t()(),n(1033,"td"),e(1034,"Componentes basados en Signals"),t()(),n(1035,"tr")(1036,"td")(1037,"code"),e(1038,"take(1)"),t()(),n(1039,"td"),e(1040,"One-shot"),t(),n(1041,"td"),e(1042,"Cuando solo necesitas un valor"),t()()()(),n(1043,"div",5),e(1044," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(1045,"ul")(1046,"li")(1047,"code"),e(1048,"features/rxjs-lab/memory-leaks.ts"),t(),e(1049," \u2014 takeUntil, DestroyRef, async pipe"),t(),n(1050,"li")(1051,"code"),e(1052,"features/rxjs-lab/search-typeahead.ts"),t(),e(1053," \u2014 switchMap + debounce para prevenir race conditions"),t(),n(1054,"li")(1055,"code"),e(1056,"features/ngrx-lab/store/product.effects.ts"),t(),e(1057," \u2014 retry, catchError en effects reales"),t()()()()()),l&2&&(i(63),a(`// Promise \u2014 eager, un solo valor
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
`,"}",");"),i(61),a(`// BehaviorSubject \u2014 siempre tiene valor actual
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
messages$.subscribe(m => console.log(m));`),i(115),a(`// combineLatest \u2014 actualiza cuando cualquiera cambia
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
);`),i(21),o(`// 1. takeUntilDestroyed() \u2014 \u2705 Recomendado en Angular 20
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
const count = toSignal(interval(1000), `,"{"," initialValue: 0 ","}",");"),i(37),r("import ","{"," map, filter ","}",` from 'rxjs/operators';

// Cada operador es una funci\xF3n: Observable \u2192 Observable
source$.pipe(
  filter(x => x > 0),   // Observable \u2192 Observable (filtra negativos)
  map(x => x * 10)      // Observable \u2192 Observable (multiplica)
);

// Equivale a:
const filtered$ = filter(x => x > 0)(source$);
const mapped$   = map(x => x * 10)(filtered$);`),i(224),r(`// Descargar m\xFAltiples archivos en paralelo (m\xE1x 3 simult\xE1neos)
fileIds$.pipe(
  mergeMap(id => this.http.get(\`/api/files/$`,"{","id","}","`), 3)\n).subscribe(file => this.downloaded.push(file));"),i(184),a(`private destroy$ = new Subject<void>();

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
`,"}"),i(13),a("import ","{"," takeUntilDestroyed ","}",` from '@angular/core/rxjs-interop';

// \u2705 En campo de clase o constructor \u2014 inyecta DestroyRef autom\xE1ticamente
data$ = this.store.select(selectData).pipe(takeUntilDestroyed());

// \u2705 En ngOnInit \u2014 necesita DestroyRef expl\xEDcito
private destroyRef = inject(DestroyRef);

ngOnInit() `,"{",`
  this.data$.pipe(
    takeUntilDestroyed(this.destroyRef)
  ).subscribe(d => this.process(d));
`,"}"),i(45),r(`// Combinar filtros de una tabla
combineLatest([
  this.searchTerm$,
  this.categoryFilter$,
  this.sortOrder$
]).pipe(
  debounceTime(100),  // evitar re-renders excesivos
  switchMap(([term, cat, sort]) =>
    this.api.getProducts(`,"{"," search: term, category: cat, sort ","}",`)
  )
).subscribe(products => this.products = products);`),i(16),o(`// Cargar datos iniciales en paralelo (con nombre de propiedades)
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
// \u274C No usar con BehaviorSubject (nunca completa autom\xE1ticamente)`),i(18),a(`// merge \u2014 combina en un solo stream (el primero que emita pasa)
merge(click$, keypress$, gesture$).subscribe(event => handle(event));

// concat \u2014 en secuencia: primero todos de a$, luego todos de b$
concat(cachedData$, freshData$).subscribe(data => render(data));

// zip \u2014 parejas 1:1 (espera que ambos tengan nuevo valor)
zip(nombres$, apellidos$).pipe(
  map(([nombre, apellido]) => \`$`,"{","nombre","}"," $","{","apellido","}",`\`)
);

// race \u2014 el primero en emitir gana, los otros se cancelan
race(httpResponse$, timeout$).subscribe(result => handle(result));`),i(127),d(`// \u274C Sin shareReplay: 3 suscripciones = 3 HTTP calls
products$ = this.http.get<Product[]>('/api/products');

// \u2705 Con shareReplay: 1 HTTP call, todos reciben el mismo resultado
products$ = this.http.get<Product[]>('/api/products').pipe(
  shareReplay(`,"{"," bufferSize: 1, refCount: true ","}",`)
);

// template A:  `,"{{"," products$ | async ","}}",`  \u2192 trigger HTTP
// template B:  `,"{{"," products$ | async ","}}",`  \u2192 usa cache
// template C:  `,"{{"," products$ | async ","}}","  \u2192 usa cache"),i(19),r(`private refresh$ = new Subject<void>();

products$ = this.refresh$.pipe(
  startWith(undefined),                               // carga inicial
  switchMap(() => this.http.get<Product[]>('/api/products')),
  shareReplay(1)
);

// Cuando se necesita invalidar el cach\xE9:
invalidateCache() `,"{",`
  this.refresh$.next();  // trigger nueva petici\xF3n HTTP
`,"}"),i(21),a(`this.http.get(url).pipe(
  retry(`,"{",`
    count: 3,
    delay: (error, retryCount) => timer(Math.pow(2, retryCount) * 1000)
  `,"}",`),
  catchError(err => `,"{",`
    console.error('Failed after 3 retries', err);
    return of(null);
  `,"}",`)
)`),i(17),c(["interface State<T> ","{",`
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
// `,"}"]))},dependencies:[u],styles:[".learn-page[_ngcontent-%COMP%]{max-width:900px;margin:0 auto;padding:1rem 0}.page-title[_ngcontent-%COMP%]{font-size:1.3rem;margin-bottom:1.2rem;color:var(--text)}.card[_ngcontent-%COMP%]{background:var(--bg-card);border:1px solid var(--border);border-radius:10px;padding:1.4rem;margin-bottom:1rem}.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.1rem;margin-bottom:.8rem;color:var(--accent-blue)}.card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:.95rem;margin-bottom:.5rem;color:var(--accent-purple)}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--text);line-height:1.6;margin-bottom:.6rem}.card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:1.4rem;color:var(--text);line-height:1.7;margin-bottom:.8rem}.card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:.3rem}.card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--accent-purple)}.card[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:var(--bg-code, rgba(110,118,129,.15));padding:.15rem .4rem;border-radius:4px;font-size:.85rem}pre[_ngcontent-%COMP%]{background:var(--bg-code, #161b22);border:1px solid var(--border);border-radius:8px;padding:1rem;overflow-x:auto;margin:.8rem 0}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:none;padding:0;font-size:.82rem;line-height:1.5;color:var(--text)}.compare-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin:.8rem 0;font-size:.85rem}.compare-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .compare-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid var(--border);padding:.5rem .7rem;text-align:left;color:var(--text)}.compare-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:#58a6ff1a;font-weight:600}.compare-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]{background:#58a6ff0a}@media (max-width: 600px){.compare-table[_ngcontent-%COMP%]{font-size:.78rem}}"]})};export{p as RxjsLearnComponent};
