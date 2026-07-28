import{a as s}from"./chunk-WXOJIICE.js";import"./chunk-BKIDS2JO.js";import{Db as n,Eb as t,Zb as e,fb as l,sa as i,ta as a}from"./chunk-G73V3KC4.js";import"./chunk-2NFLSA4Y.js";var u=class o{static \u0275fac=function(r){return new(r||o)};static \u0275cmp=l({type:o,selectors:[["app-arch-learn"]],decls:1398,vars:0,consts:[["appAutoGlossary","",1,"cards"],["id","1-smart-dumb-component-pattern",1,"card"],[1,"qa"],[1,"code-ref"],["id","2-comunicacion-entre-componentes",1,"card"],["id","3-estructura-de-carpetas-enterprise",1,"card"],["id","4-scam-standalone",1,"card"],["id","5-barrel-exports",1,"card"],["id","arquitectura-enterprise",1,"card"],["id","comunicacion-componentes",1,"card"],["id","state-management-decision",1,"card"],["id","9-arquitectura-por-capas-y-feature-slicing",1,"card"],["id","10-lazy-loading-como-frontera-arquitectonica",1,"card"],["id","11-librerias-y-monorepos-nx",1,"card"],["id","12-patron-facade",1,"card"],["id","13-patron-repository",1,"card"],["id","14-patron-adapter",1,"card"],["id","15-api-layer-dtos-vs-modelos-de-dominio",1,"card"],["id","16-manejo-global-de-errores",1,"card"]],template:function(r,c){r&1&&(n(0,"div",0)(1,"div",1)(2,"h3"),e(3,"1 \xB7 Smart / Dumb Component Pattern"),t(),n(4,"p"),e(5," Los "),n(6,"strong"),e(7,"Smart components"),t(),e(8," (containers) gestionan el estado y la l\xF3gica de negocio: inyectan servicios, Store o signals y coordinan la comunicaci\xF3n con el backend. Los "),n(9,"strong"),e(10,"Dumb components"),t(),e(11," (presentacionales) solo reciben datos v\xEDa "),n(12,"code"),e(13,"@Input()"),t(),e(14," y emiten eventos con "),n(15,"code"),e(16,"@Output()"),t(),e(17,", usando "),n(18,"code"),e(19,"ChangeDetectionStrategy.OnPush"),t(),e(20," para m\xE1ximo rendimiento. Esta separaci\xF3n facilita testing, reutilizaci\xF3n y mantenimiento. "),t(),n(21,"pre")(22,"code"),e(23,`// \u2500\u2500\u2500 Smart container \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
@Component({
  template: \\\`
    <app-user-list
      [users]="users()"
      (select)="onSelect($event)" />
  \\\`
})
export class UserContainerComponent {
  private store = inject(Store);
  users = toSignal(this.store.select(selectAllUsers));

  onSelect(user: User) {
    this.store.dispatch(selectUser({ user }));
  }
}

// \u2500\u2500\u2500 Dumb presentational \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
  @Input() users: User[] = [];
  @Output() select = new EventEmitter<User>();
}

// \u2500\u2500\u2500 Versi\xF3n moderna con signal inputs (Angular 17.1+) \u2500\u2500
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
  users = input.required<User[]>();   // input() signal
  select = output<User>();            // output() function
}`),t()(),n(24,"h4"),e(25,"Beneficios del patr\xF3n"),t(),n(26,"ul")(27,"li")(28,"strong"),e(29,"Testing barato:"),t(),e(30," un dumb component se prueba solo con inputs y outputs \u2014 sin mocks de servicios, Store ni HTTP. Los smart se prueban mockeando una sola dependencia (Store o facade)."),t(),n(31,"li")(32,"strong"),e(33,"Reutilizaci\xF3n:"),t(),e(34," el mismo presentacional sirve en varias pantallas porque no sabe de d\xF3nde vienen los datos."),t(),n(35,"li")(36,"strong"),e(37,"Rendimiento:"),t(),e(38," con "),n(39,"code"),e(40,"OnPush"),t(),e(41,", el dumb solo se re-renderiza cuando cambia la referencia de sus inputs."),t(),n(42,"li")(43,"strong"),e(44,"Flujo unidireccional:"),t(),e(45," datos hacia abajo, eventos hacia arriba. Depurar significa mirar un solo punto: el container."),t()(),n(46,"pre")(47,"code"),e(48,`// Test de un dumb component \u2014 sin mocks
it('emite select al hacer click en un usuario', () => {
  const fixture = TestBed.createComponent(UserListComponent);
  fixture.componentRef.setInput('users', [{ id: 1, name: 'Ana' }]);
  fixture.detectChanges();

  let selected: User | undefined;
  fixture.componentInstance.select.subscribe(u => (selected = u));

  fixture.nativeElement.querySelector('li').click();
  expect(selected?.id).toBe(1);
});`),t()(),n(49,"h4"),e(50,"\u26A0\uFE0F Errores comunes"),t(),n(51,"ul")(52,"li"),e(53,"Inyectar servicios (HTTP, Store) dentro del presentacional \u2014 deja de ser dumb y pierde reutilizaci\xF3n y testabilidad."),t(),n(54,"li"),e(55,"Mutar el objeto recibido por "),n(56,"code"),e(57,"@Input"),t(),e(58," dentro del hijo: rompe OnPush y crea efectos laterales invisibles para el padre."),t(),n(59,"li"),e(60,"Convertir TODO en dumb components: un container por cada 5-10 presentacionales es la proporci\xF3n t\xEDpica; el dogmatismo genera prop-drilling de 4 niveles."),t(),n(61,"li"),e(62,"Pasar callbacks como "),n(63,"code"),e(64,"@Input"),t(),e(65," en lugar de usar "),n(66,"code"),e(67,"@Output"),t(),e(68,": oculta el flujo de eventos y complica el testing."),t()(),n(69,"h4"),e(70,"\u{1F3A4} Preguntas de entrevista"),t(),n(71,"details",2)(72,"summary"),e(73,"\xBFC\xF3mo decides si un componente debe ser smart o dumb?"),t(),n(74,"p"),e(75,"Si necesita saber "),n(76,"em"),e(77,"de d\xF3nde"),t(),e(78," vienen los datos (servicio, Store, ruta) es smart; si solo necesita saber "),n(79,"em"),e(80,"qu\xE9"),t(),e(81," pintar y qu\xE9 eventos emitir, es dumb. Regla pr\xE1ctica: los componentes de p\xE1gina/ruta son smart; casi todo lo dem\xE1s puede ser presentacional."),t()(),n(82,"details",2)(83,"summary"),e(84,"\xBFPor qu\xE9 los dumb components se benefician de OnPush?"),t(),n(85,"p"),e(86,"Porque todas sus fuentes de cambio son inputs (referencias) y eventos propios, exactamente lo que OnPush escucha. Angular puede saltarse el componente en cada ciclo de change detection si sus inputs no cambiaron."),t()(),n(87,"details",2)(88,"summary"),e(89,"\xBFEl patr\xF3n sigue vigente con signals?"),t(),n(90,"p"),e(91,"S\xED. Cambia la sintaxis ("),n(92,"code"),e(93,"input()"),t(),e(94,"/"),n(95,"code"),e(96,"output()"),t(),e(97," en lugar de decoradores) pero la separaci\xF3n estado/presentaci\xF3n sigue siendo el criterio arquitect\xF3nico. Con signals incluso mejora: los inputs signal integran naturalmente con "),n(98,"code"),e(99,"computed()"),t(),e(100," en el hijo."),t()(),n(101,"div",3),e(102," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(103,"ul")(104,"li")(105,"code"),e(106,"features/ngrx-lab/components/product-list.ts"),t(),e(107," \u2014 Smart: dispatch + selectors"),t(),n(108,"li")(109,"code"),e(110,"features/ngrx-lab/components/product-card.ts"),t(),e(111," \u2014 Dumb: solo @Input/@Output + OnPush"),t(),n(112,"li")(113,"code"),e(114,"features/architecture-lab/architecture-lab.ts"),t(),e(115," \u2014 Patr\xF3n completo con 4 componentes"),t()()()(),n(116,"div",4)(117,"h3"),e(118,"2 \xB7 Comunicaci\xF3n entre Componentes"),t(),n(119,"p"),e(120," Angular ofrece varios mecanismos: "),n(121,"strong"),e(122,"@Input/@Output"),t(),e(123," para flujos padre\u2192hijo directos, "),n(124,"strong"),e(125,"servicios compartidos"),t(),e(126," con "),n(127,"code"),e(128,"BehaviorSubject"),t(),e(129," para componentes hermanos o desacoplados, "),n(130,"strong"),e(131,"Signals"),t(),e(132," como alternativa reactiva moderna, y "),n(133,"strong"),e(134,"NgRx Store"),t(),e(135," para estado global predecible. Usa el m\xE1s sencillo que resuelva el problema. "),t(),n(136,"pre")(137,"code"),e(138,`// \u2500\u2500\u2500 Servicio con BehaviorSubject \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private theme$ = new BehaviorSubject<'light' | 'dark'>('dark');
  current$ = this.theme$.asObservable();

  toggle() {
    this.theme$.next(
      this.theme$.value === 'dark' ? 'light' : 'dark'
    );
  }
}

// \u2500\u2500\u2500 Mismo servicio con Signals \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
@Injectable({ providedIn: 'root' })
export class ThemeSignalService {
  theme = signal<'light' | 'dark'>('dark');

  toggle() {
    this.theme.update(t => t === 'dark' ? 'light' : 'dark');
  }
}`),t()(),n(139,"h4"),e(140,"\xBFQu\xE9 canal usar?"),t(),n(141,"ul")(142,"li")(143,"strong"),e(144,"input()/output():"),t(),e(145," relaci\xF3n padre-hijo directa. Siempre la primera opci\xF3n: expl\xEDcita, tipada y visible en el template."),t(),n(146,"li")(147,"strong"),e(148,"Servicio compartido (signal o BehaviorSubject):"),t(),e(149," hermanos o componentes lejanos que comparten un estado peque\xF1o (tema, sidebar, toasts)."),t(),n(150,"li")(151,"strong"),e(152,"Store (NgRx):"),t(),e(153," estado consumido por varias features, con necesidad de trazabilidad (DevTools) o efectos coordinados."),t(),n(154,"li")(155,"strong"),e(156,"Router state (params/queryParams):"),t(),e(157," cuando el estado debe sobrevivir a un refresh o ser compartible por URL (filtros, paginaci\xF3n, id seleccionado)."),t()(),n(158,"h4"),e(159,"\u26A0\uFE0F Errores comunes"),t(),n(160,"ul")(161,"li"),e(162,"Exponer el "),n(163,"code"),e(164,"BehaviorSubject"),t(),e(165," directamente en lugar de "),n(166,"code"),e(167,"asObservable()"),t(),e(168,": cualquiera puede hacer "),n(169,"code"),e(170,"next()"),t(),e(171," y el estado se vuelve impredecible."),t(),n(172,"li"),e(173,"Exponer un "),n(174,"code"),e(175,"signal"),t(),e(176," escribible p\xFAblico cuando solo un m\xF3dulo deber\xEDa mutarlo \u2014 exp\xF3n "),n(177,"code"),e(178,"readonly()"),t(),e(179," o "),n(180,"code"),e(181,"computed()"),t(),e(182," y m\xE9todos de mutaci\xF3n."),t(),n(183,"li"),e(184,"Saltar directo a NgRx para comunicar dos componentes hermanos: un servicio con signal resuelve el 80 % de los casos."),t(),n(185,"li"),e(186,"Duplicar en un Store estado que ya vive en la URL (query params) \u2014 dos fuentes de verdad que se desincronizan."),t()(),n(187,"h4"),e(188,"\u{1F3A4} Preguntas de entrevista"),t(),n(189,"details",2)(190,"summary"),e(191,"\xBFSignal o BehaviorSubject para un servicio compartido?"),t(),n(192,"p"),e(193,"Signal si el consumo es principalmente en templates y el valor es s\xEDncrono: menos boilerplate, sin "),n(194,"code"),e(195,"async"),t(),e(196," pipe, integraci\xF3n con "),n(197,"code"),e(198,"computed()"),t(),e(199,". BehaviorSubject/Observable si necesitas operadores de tiempo (debounce, switchMap) o interoperar con streams; siempre puedes puentear con "),n(200,"code"),e(201,"toSignal()"),t(),e(202,"/"),n(203,"code"),e(204,"toObservable()"),t(),e(205,"."),t()(),n(206,"details",2)(207,"summary"),e(208,"\xBFCu\xE1ndo el estado debe vivir en la URL?"),t(),n(209,"p"),e(210,"Cuando el usuario espera poder recargar, compartir el enlace o usar atr\xE1s/adelante y ver lo mismo: filtros de b\xFAsqueda, p\xE1gina actual, pesta\xF1a activa, id del detalle abierto. La URL es estado global gratuito y persistente."),t()(),n(211,"div",3),e(212," \u{1F4C2} "),n(213,"code"),e(214,"features/architecture-lab/architecture-lab.ts"),t(),e(215," \u2014 @Input/@Output, servicios compartidos, signals "),t()(),n(216,"div",5)(217,"h3"),e(218,"3 \xB7 Estructura de Carpetas Enterprise"),t(),n(219,"p"),e(220," Organiza el proyecto en tres capas: "),n(221,"strong"),e(222,"core/"),t(),e(223," para servicios singleton, guards e interceptors; "),n(224,"strong"),e(225,"shared/"),t(),e(226," para componentes, pipes y directivas reutilizables; y "),n(227,"strong"),e(228,"features/"),t(),e(229," con un m\xF3dulo por dominio. Cada capa expone un "),n(230,"code"),e(231,"index.ts"),t(),e(232," barrel export para imports limpios. "),t(),n(233,"pre")(234,"code"),e(235,`src/app/
\u251C\u2500\u2500 core/
\u2502   \u251C\u2500\u2500 services/
\u2502   \u2502   \u251C\u2500\u2500 auth.service.ts
\u2502   \u2502   \u2514\u2500\u2500 api.service.ts
\u2502   \u251C\u2500\u2500 guards/
\u2502   \u2502   \u2514\u2500\u2500 auth.guard.ts
\u2502   \u251C\u2500\u2500 interceptors/
\u2502   \u2502   \u2514\u2500\u2500 token.interceptor.ts
\u2502   \u2514\u2500\u2500 index.ts
\u251C\u2500\u2500 shared/
\u2502   \u251C\u2500\u2500 components/
\u2502   \u2502   \u2514\u2500\u2500 button/button.ts
\u2502   \u251C\u2500\u2500 pipes/
\u2502   \u2502   \u2514\u2500\u2500 currency-format.ts
\u2502   \u251C\u2500\u2500 directives/
\u2502   \u2502   \u2514\u2500\u2500 tooltip.ts
\u2502   \u2514\u2500\u2500 index.ts
\u251C\u2500\u2500 features/
\u2502   \u251C\u2500\u2500 users/
\u2502   \u2502   \u251C\u2500\u2500 user-list.ts
\u2502   \u2502   \u251C\u2500\u2500 user-detail.ts
\u2502   \u2502   \u2514\u2500\u2500 users.routes.ts
\u2502   \u2514\u2500\u2500 products/
\u2502       \u251C\u2500\u2500 product-list.ts
\u2502       \u2514\u2500\u2500 products.routes.ts
\u2514\u2500\u2500 app.routes.ts`),t()(),n(236,"h4"),e(237,"\u26A0\uFE0F Errores comunes"),t(),n(238,"ul")(239,"li"),e(240,"Carpetas por tipo t\xE9cnico a nivel ra\xEDz ("),n(241,"code"),e(242,"components/"),t(),e(243,", "),n(244,"code"),e(245,"services/"),t(),e(246,", "),n(247,"code"),e(248,"pipes/"),t(),e(249," globales): al crecer, cada cambio de una feature toca 4 carpetas distintas. Agrupa por dominio."),t(),n(250,"li"),e(251,"Meter en "),n(252,"code"),e(253,"shared/"),t(),e(254,' componentes con l\xF3gica de negocio "porque dos features lo usan": si tiene reglas de dominio no es shared, extrae la l\xF3gica a un servicio de core o duplica el componente.'),t(),n(255,"li")(256,"code"),e(257,"core/"),t(),e(258," convertido en caj\xF3n de sastre: si un servicio solo lo usa una feature, vive en esa feature."),t()(),n(259,"h4"),e(260,"\u{1F3A4} Preguntas de entrevista"),t(),n(261,"details",2)(262,"summary"),e(263,"\xBFQu\xE9 va en core/ y qu\xE9 en shared/?"),t(),n(264,"p")(265,"code"),e(266,"core/"),t(),e(267,": cosas que existen una sola vez en la app (auth, interceptors, configuraci\xF3n, ErrorHandler). "),n(268,"code"),e(269,"shared/"),t(),e(270,': piezas de UI sin estado y sin dependencias hacia arriba, reutilizables por cualquier feature (botones, pipes, directivas). Core es "infraestructura singleton", shared es "kit de UI".'),t()(),n(271,"details",2)(272,"summary"),e(273,"Con standalone components \xBFsigue teniendo sentido core/shared/features?"),t(),n(274,"p"),e(275,"S\xED. Los NgModules desaparecen pero las "),n(276,"em"),e(277,"fronteras l\xF3gicas"),t(),e(278," siguen: la estructura de carpetas + reglas de import (lint) reemplazan lo que antes forzaban los m\xF3dulos."),t()(),n(279,"div",3),e(280," \u{1F4C2} Estructura actual del proyecto: "),n(281,"ul")(282,"li")(283,"code"),e(284,"core/"),t(),e(285," \u2014 Servicios singleton, interceptors, guards"),t(),n(286,"li")(287,"code"),e(288,"shared/"),t(),e(289," \u2014 Componentes, directivas, modelos reutilizables"),t(),n(290,"li")(291,"code"),e(292,"features/"),t(),e(293," \u2014 M\xF3dulos por dominio (ngrx-lab, rxjs-lab, etc.)"),t()()()(),n(294,"div",6)(295,"h3"),e(296,"4 \xB7 SCAM \u2192 Standalone"),t(),n(297,"p"),e(298," El patr\xF3n "),n(299,"strong"),e(300,"SCAM"),t(),e(301," (Single Component Angular Module) envolv\xEDa cada componente en su propio NgModule. Con "),n(302,"strong"),e(303,"standalone components"),t(),e(304," de Angular 14+ ya no se necesita esa capa extra: el componente declara sus propios imports directamente. "),t(),n(305,"pre")(306,"code"),e(307,`// \u2500\u2500\u2500 Antes: SCAM \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
@NgModule({
  declarations: [UserCardComponent],
  imports: [AutoGlossaryDirective, CommonModule],
  exports: [UserCardComponent]
})
export class UserCardModule {}

// \u2500\u2500\u2500 Despu\xE9s: Standalone \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
@Component({
  standalone: true,
  imports: [AutoGlossaryDirective, NgIf, NgFor],
  selector: 'app-user-card',
  template: \\\`...\\\`
})
export class UserCardComponent {}`),t()(),n(308,"h4"),e(309,"\u26A0\uFE0F Errores comunes"),t(),n(310,"ul")(311,"li"),e(312,"Escribir "),n(313,"code"),e(314,"standalone: true"),t(),e(315," en Angular 19+: ya es el default; el flag expl\xEDcito solo a\xF1ade ruido (y "),n(316,"code"),e(317,"standalone: false"),t(),e(318," es lo que hay que marcar en c\xF3digo legacy)."),t(),n(319,"li"),e(320,"Importar "),n(321,"code"),e(322,"CommonModule"),t(),e(323," completo cuando solo usas un pipe: importa "),n(324,"code"),e(325,"AsyncPipe"),t(),e(326,", "),n(327,"code"),e(328,"DatePipe"),t(),e(329,", etc. individualmente (o usa control flow "),n(330,"code"),e(331,"@if/@for"),t(),e(332," que no requiere imports)."),t(),n(333,"li"),e(334,'Migrar a standalone y conservar NgModules "de agrupaci\xF3n" vac\xEDos: elimina la capa, las rutas con '),n(335,"code"),e(336,"loadComponent"),t(),e(337," la reemplazan."),t()(),n(338,"h4"),e(339,"\u{1F3A4} Preguntas de entrevista"),t(),n(340,"details",2)(341,"summary"),e(342,"\xBFQu\xE9 problema resolv\xEDa SCAM y por qu\xE9 standalone lo elimina?"),t(),n(343,"p"),e(344,"SCAM daba a cada componente un m\xF3dulo propio para lograr imports granulares y tree-shaking fino. Standalone hace eso nativo: el componente declara sus propias dependencias en "),n(345,"code"),e(346,"imports"),t(),e(347,", sin m\xF3dulo intermedio."),t()(),n(348,"div",3),e(349," \u{1F4C2} Todos los componentes del proyecto son Standalone (Angular 20.3 default) "),t()(),n(350,"div",7)(351,"h3"),e(352,"5 \xB7 Barrel Exports"),t(),n(353,"p"),e(354," Los archivos "),n(355,"code"),e(356,"index.ts"),t(),e(357," re-exportan los s\xEDmbolos p\xFAblicos de una carpeta, simplificando las rutas de importaci\xF3n y creando una API p\xFAblica clara para cada capa del proyecto. "),t(),n(358,"pre")(359,"code"),e(360,`// shared/index.ts
export * from './components/button/button';
export * from './pipes/currency-format';
export * from './directives/tooltip';

// Consumo limpio desde cualquier feature:
import {
  ButtonComponent,
  CurrencyFormatPipe,
  TooltipDirective
} from '../../shared';`),t()(),n(361,"h4"),e(362,"\u26A0\uFE0F Errores comunes"),t(),n(363,"ul")(364,"li")(365,"strong"),e(366,"Imports circulares:"),t(),e(367," si "),n(368,"code"),e(369,"a.ts"),t(),e(370," importa desde el barrel y el barrel re-exporta "),n(371,"code"),e(372,"a.ts"),t(),e(373,", obtienes "),n(374,"code"),e(375,"undefined"),t(),e(376," en runtime. Dentro de la misma carpeta importa siempre por ruta directa, nunca desde el propio "),n(377,"code"),e(378,"index.ts"),t(),e(379,"."),t(),n(380,"li")(381,"strong"),e(382,"Barrels gigantes:"),t(),e(383," un \xFAnico "),n(384,"code"),e(385,"index.ts"),t(),e(386," para toda la app arrastra medio proyecto a cada chunk y degrada el tree-shaking y el build incremental. Un barrel por capa/feature, no uno global."),t(),n(387,"li"),e(388,"Re-exportar TODO ("),n(389,"code"),e(390,"export *"),t(),e(391,") incluyendo internos: el barrel es la API p\xFAblica \u2014 exporta expl\xEDcitamente solo lo que otras capas deben ver."),t()(),n(392,"h4"),e(393,"\u{1F3A4} Preguntas de entrevista"),t(),n(394,"details",2)(395,"summary"),e(396,"\xBFQu\xE9 desventajas tienen los barrel exports?"),t(),n(397,"p"),e(398,"Dependencias circulares dif\xEDciles de depurar, peor tree-shaking si el bundler no puede probar ausencia de side effects, y builds incrementales m\xE1s lentos porque tocar un archivo invalida a todos los consumidores del barrel. Por eso se usan como "),n(399,"em"),e(400,"API p\xFAblica entre capas"),t(),e(401,", no para cada carpeta interna."),t()()(),n(402,"div",8)(403,"h3"),e(404,"6 \xB7 Arquitectura de una app Angular Enterprise"),t(),n(405,"p"),e(406," En aplicaciones grandes, la arquitectura define la mantenibilidad a largo plazo. La clave es separar responsabilidades en capas con reglas de dependencia estrictas. "),t(),n(407,"h4"),e(408,"Estructura de carpetas recomendada"),t(),n(409,"pre"),a(),n(410,"code"),e(411,`src/app/
\u251C\u2500\u2500 core/                    # Singleton services, guards, interceptors
\u2502   \u251C\u2500\u2500 services/            # API services, auth, config
\u2502   \u2502   \u251C\u2500\u2500 auth.service.ts
\u2502   \u2502   \u251C\u2500\u2500 api.service.ts
\u2502   \u2502   \u2514\u2500\u2500 config.service.ts
\u2502   \u251C\u2500\u2500 interceptors/        # HTTP interceptors
\u2502   \u2502   \u251C\u2500\u2500 auth.interceptor.ts
\u2502   \u2502   \u2514\u2500\u2500 error.interceptor.ts
\u2502   \u251C\u2500\u2500 guards/              # Route guards
\u2502   \u2502   \u2514\u2500\u2500 auth.guard.ts
\u2502   \u251C\u2500\u2500 models/              # Core domain models
\u2502   \u2502   \u2514\u2500\u2500 user.model.ts
\u2502   \u2514\u2500\u2500 index.ts             # Barrel export
\u251C\u2500\u2500 shared/                  # Reusable, stateless
\u2502   \u251C\u2500\u2500 components/          # Dumb/presentational components
\u2502   \u2502   \u251C\u2500\u2500 button/
\u2502   \u2502   \u251C\u2500\u2500 card/
\u2502   \u2502   \u2514\u2500\u2500 modal/
\u2502   \u251C\u2500\u2500 directives/          # Custom directives
\u2502   \u2502   \u2514\u2500\u2500 tooltip.directive.ts
\u2502   \u251C\u2500\u2500 pipes/               # Custom pipes
\u2502   \u2502   \u2514\u2500\u2500 currency-format.pipe.ts
\u2502   \u251C\u2500\u2500 utils/               # Pure utility functions
\u2502   \u2502   \u2514\u2500\u2500 date-helpers.ts
\u2502   \u2514\u2500\u2500 index.ts             # Barrel export
\u251C\u2500\u2500 features/                # Feature modules (lazy-loaded)
\u2502   \u251C\u2500\u2500 products/
\u2502   \u2502   \u251C\u2500\u2500 components/      # Feature-specific components
\u2502   \u2502   \u2502   \u251C\u2500\u2500 product-list.ts
\u2502   \u2502   \u2502   \u2514\u2500\u2500 product-detail.ts
\u2502   \u2502   \u251C\u2500\u2500 services/        # Feature-specific services
\u2502   \u2502   \u2502   \u2514\u2500\u2500 product.service.ts
\u2502   \u2502   \u251C\u2500\u2500 store/           # NgRx state (if needed)
\u2502   \u2502   \u2502   \u251C\u2500\u2500 product.actions.ts
\u2502   \u2502   \u2502   \u251C\u2500\u2500 product.reducer.ts
\u2502   \u2502   \u2502   \u2514\u2500\u2500 product.selectors.ts
\u2502   \u2502   \u2514\u2500\u2500 products.routes.ts
\u2502   \u2514\u2500\u2500 users/
\u2502       \u251C\u2500\u2500 components/
\u2502       \u251C\u2500\u2500 services/
\u2502       \u2514\u2500\u2500 users.routes.ts
\u2514\u2500\u2500 app.routes.ts`),t(),i(),t(),n(412,"h4"),e(413,"Reglas de dependencia"),t(),n(414,"ul")(415,"li")(416,"code"),e(417,"core/"),t(),e(418," \u2192 importa de "),n(419,"code"),e(420,"shared/"),t(),e(421,", "),n(422,"strong"),e(423,"nunca"),t(),e(424," de "),n(425,"code"),e(426,"features/"),t(),e(427,"."),t(),n(428,"li")(429,"code"),e(430,"shared/"),t(),e(431," \u2192 "),n(432,"strong"),e(433,"NO"),t(),e(434," importa de "),n(435,"code"),e(436,"core/"),t(),e(437," ni de "),n(438,"code"),e(439,"features/"),t(),e(440,". Es 100 % aut\xF3noma."),t(),n(441,"li")(442,"code"),e(443,"features/"),t(),e(444," \u2192 importa de "),n(445,"code"),e(446,"core/"),t(),e(447," y "),n(448,"code"),e(449,"shared/"),t(),e(450,", "),n(451,"strong"),e(452,"nunca"),t(),e(453," de otros features."),t(),n(454,"li")(455,"strong"),e(456,"Si dos features necesitan comunicarse"),t(),e(457," \u2192 usan un servicio de "),n(458,"code"),e(459,"core/"),t(),e(460," o un Store global (NgRx)."),t()(),n(461,"pre"),a(),n(462,"code"),e(463,`// \u274C MAL \u2014 feature importa directamente de otro feature
import { ProductService } from '../products/services/product.service';

// \u2705 BIEN \u2014 servicio compartido vive en core/
import { CatalogService } from '../../core/services/catalog.service';

// \u2705 BIEN \u2014 comunicaci\xF3n via Store global
import { selectCartItems } from '../../core/store/cart.selectors';`),t(),i(),t(),n(464,"h4"),e(465,"Barrel exports (index.ts)"),t(),n(466,"p"),e(467," Cada capa expone un "),n(468,"code"),e(469,"index.ts"),t(),e(470," que re-exporta solo la API p\xFAblica. Esto simplifica imports y crea un contrato claro entre capas. "),t(),n(471,"pre"),a(),n(472,"code"),e(473,`// shared/components/index.ts
export { ButtonComponent } from './button/button.component';
export { CardComponent } from './card/card.component';
export { ModalComponent } from './modal/modal.component';

// core/index.ts
export { AuthService } from './services/auth.service';
export { ApiService } from './services/api.service';
export { AuthGuard } from './guards/auth.guard';

// En un feature:
import { ButtonComponent, CardComponent } from '@shared/components';
import { AuthService } from '@core';`),t(),i(),t(),n(474,"p"),e(475," Tip: configura "),n(476,"code"),e(477,"paths"),t(),e(478," en "),n(479,"code"),e(480,"tsconfig.json"),t(),e(481," para alias como "),n(482,"code"),e(483,"@core"),t(),e(484,", "),n(485,"code"),e(486,"@shared"),t(),e(487,", "),n(488,"code"),e(489,"@features"),t(),e(490,". "),t(),n(491,"pre"),a(),n(492,"code"),e(493,`// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@core/*": ["src/app/core/*"],
      "@shared/*": ["src/app/shared/*"],
      "@features/*": ["src/app/features/*"]
    }
  }
}`),t(),i(),t(),n(494,"h4"),e(495,"C\xF3mo hacer cumplir las reglas (lint)"),t(),n(496,"p"),e(497," Las reglas de dependencia que no se verifican autom\xE1ticamente se violan en el primer sprint con prisa. Con "),n(498,"code"),e(499,"eslint-plugin-boundaries"),t(),e(500," (o los module boundaries de Nx) el import prohibido rompe el CI: "),t(),n(501,"pre")(502,"code"),e(503,`// eslint.config.js (extracto con eslint-plugin-boundaries)
settings: {
  'boundaries/elements': [
    { type: 'core', pattern: 'src/app/core/*' },
    { type: 'shared', pattern: 'src/app/shared/*' },
    { type: 'feature', pattern: 'src/app/features/*', capture: ['name'] }
  ]
},
rules: {
  'boundaries/element-types': ['error', {
    default: 'disallow',
    rules: [
      { from: 'shared', allow: ['shared'] },
      { from: 'core', allow: ['core', 'shared'] },
      // un feature NO puede importar de otro feature
      { from: 'feature', allow: ['core', 'shared', ['feature', { name: '\${from.name}' }]] }
    ]
  }]
}`),t()(),n(504,"h4"),e(505,"\u26A0\uFE0F Errores comunes"),t(),n(506,"ul")(507,"li"),e(508,"Definir las reglas de capas solo en un README: sin lint, la arquitectura se erosiona silenciosamente."),t(),n(509,"li"),e(510,'Imports entre features "solo por esta vez": crea un grafo de dependencias que impide extraer, lazy-loadear o borrar features de forma segura.'),t(),n(511,"li"),e(512,"Path aliases sin regla de lint equivalente: "),n(513,"code"),e(514,"@features/a"),t(),e(515," importando "),n(516,"code"),e(517,"@features/b"),t(),e(518," sigue compilando feliz."),t()(),n(519,"h4"),e(520,"\u{1F3A4} Preguntas de entrevista"),t(),n(521,"details",2)(522,"summary"),e(523,"Dos features necesitan el mismo dato, \xBFqu\xE9 haces?"),t(),n(524,"p"),e(525,"Nunca importar una desde la otra. Opciones: (1) subir el estado a un servicio o Store en "),n(526,"code"),e(527,"core/"),t(),e(528,', (2) extraer el modelo/l\xF3gica compartida a una lib o carpeta de dominio compartido, (3) comunicarlas por la URL si es estado navegacional. El criterio: la dependencia siempre apunta "hacia abajo".'),t()(),n(529,"details",2)(530,"summary"),e(531,"\xBFC\xF3mo evitas que la arquitectura se degrade con el tiempo?"),t(),n(532,"p"),e(533,"Automatizaci\xF3n: lint de boundaries en CI, revisi\xF3n de imports en PRs, budgets de bundle por lazy chunk, y ADRs (Architecture Decision Records) para que las excepciones queden documentadas y no se conviertan en precedente."),t()(),n(534,"div",3),e(535," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(536,"ul")(537,"li")(538,"code"),e(539,"core/"),t(),e(540," \u2014 Servicios singleton, interceptors, guards"),t(),n(541,"li")(542,"code"),e(543,"shared/"),t(),e(544," \u2014 Componentes, directivas, modelos reutilizables"),t(),n(545,"li")(546,"code"),e(547,"features/"),t(),e(548," \u2014 M\xF3dulos por dominio lazy-loaded (ngrx-lab, rxjs-lab, etc.)"),t()()()(),n(549,"div",9)(550,"h3"),e(551,"7 \xB7 Patrones de comunicaci\xF3n entre componentes"),t(),n(552,"p"),e(553," Angular ofrece 6 mecanismos de comunicaci\xF3n. Elegir el correcto depende de la relaci\xF3n entre componentes y la complejidad del estado compartido. "),t(),n(554,"h4"),e(555,"1. @Input / @Output \u2014 Padre \u2194 Hijo directo"),t(),n(556,"p"),e(557," El mecanismo m\xE1s simple y expl\xEDcito. Limitado a la jerarqu\xEDa directa padre-hijo. Ideal para componentes presentacionales. "),t(),n(558,"pre"),a(),n(559,"code"),e(560,`// Padre env\xEDa datos al hijo con @Input
// Hijo notifica al padre con @Output
@Component({
  selector: 'app-parent',
  template: \\\`
    <app-child
      [item]="selectedItem"
      (save)="onSave($event)" />
  \\\`
})
export class ParentComponent {
  selectedItem = signal({ id: 1, name: 'Angular' });

  onSave(updated: Item) {
    this.selectedItem.set(updated);
  }
}

@Component({
  selector: 'app-child',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @Input() item!: Item;
  @Output() save = new EventEmitter<Item>();

  onSubmit() {
    this.save.emit({ ...this.item, name: 'Updated' });
  }
}`),t(),i(),t(),n(561,"h4"),e(562,"2. Shared Service + BehaviorSubject \u2014 Sin relaci\xF3n directa"),t(),n(563,"p"),e(564," Un servicio inyectable act\xFAa como mediador entre componentes que no tienen relaci\xF3n padre-hijo. Usa "),n(565,"code"),e(566,"BehaviorSubject"),t(),e(567," para mantener y emitir el \xFAltimo valor. "),t(),n(568,"pre"),a(),n(569,"code"),a(),e(570,`@Injectable({ providedIn: 'root' })
export class NotificationService {
  private notificationsSubject = new BehaviorSubject<string[]>([]);
  notifications$ = this.notificationsSubject.asObservable();

  add(message: string) {
    const current = this.notificationsSubject.value;
    this.notificationsSubject.next([...current, message]);
  }

  clear() {
    this.notificationsSubject.next([]);
  }
}

// Componente A \u2014 agrega notificaciones
@Component({ ... })
export class OrderComponent {
  private notif = inject(NotificationService);

  placeOrder() {
    this.notif.add('Pedido creado exitosamente');
  }
}

// Componente B \u2014 muestra notificaciones
@Component({
  template: \\\`
    @for (msg of notifications$ | async; track msg) {
      <div class="toast">{{ msg }}</div>
    }
  \\\`
})
export class ToastComponent {
  notifications$ = inject(NotificationService).notifications$;
}`),i(),t(),i(),t(),n(571,"h4"),e(572,"3. Signals (Angular 17+) \u2014 Reactivo y s\xEDncrono"),t(),n(573,"p"),e(574," Un signal en un servicio es la alternativa moderna a "),n(575,"code"),e(576,"BehaviorSubject"),t(),e(577,". M\xE1s simple, s\xEDncrono y con mejor integraci\xF3n con el template. "),t(),n(578,"pre"),a(),n(579,"code"),a(),e(580,`@Injectable({ providedIn: 'root' })
export class CartService {
  items = signal<CartItem[]>([]);
  total = computed(() =>
    this.items().reduce((sum, i) => sum + i.price * i.qty, 0)
  );

  addItem(item: CartItem) {
    this.items.update(list => [...list, item]);
  }

  removeItem(id: number) {
    this.items.update(list => list.filter(i => i.id !== id));
  }
}

// Cualquier componente lo consume directamente
@Component({
  template: \\\`
    <span class="badge">{{ cart.items().length }}</span>
    <span>Total: {{ cart.total() | currency }}</span>
  \\\`
})
export class NavbarComponent {
  cart = inject(CartService);
}`),i(),t(),i(),t(),n(581,"h4"),e(582,"4. NgRx Store \u2014 Estado global predecible"),t(),n(583,"p"),e(584," Para apps complejas con muchos consumidores del mismo estado. Patr\xF3n Redux: Actions \u2192 Reducers \u2192 Selectors \u2192 Effects. "),t(),n(585,"pre"),a(),n(586,"code"),e(587,`// Actions
export const loadProducts = createAction('[Products] Load');
export const loadProductsSuccess = createAction(
  '[Products] Load Success',
  props<{ products: Product[] }>()
);

// Reducer
export const productsReducer = createReducer(
  initialState,
  on(loadProductsSuccess, (state, { products }) => ({
    ...state, products, loading: false
  }))
);

// Selector
export const selectAllProducts = createSelector(
  selectProductsState,
  state => state.products
);

// Componente consume con Store
@Component({ ... })
export class ProductListComponent {
  private store = inject(Store);
  products = toSignal(this.store.select(selectAllProducts));

  ngOnInit() {
    this.store.dispatch(loadProducts());
  }
}`),t(),i(),t(),n(588,"h4"),e(589,"5. @ViewChild / @ContentChild \u2014 Acceso directo al hijo"),t(),n(590,"p"),e(591," El padre accede a propiedades y m\xE9todos p\xFAblicos del hijo. Acoplamiento alto, usar con precauci\xF3n y solo cuando sea necesario (ej: controlar un reproductor de video). "),t(),n(592,"pre"),a(),n(593,"code"),e(594,`@Component({
  template: \\\`
    <app-video-player #player />
    <button (click)="player.play()">Play</button>
    <button (click)="player.pause()">Pause</button>
  \\\`
})
export class VideoPageComponent {
  @ViewChild('player') player!: VideoPlayerComponent;

  seekTo(seconds: number) {
    this.player.seek(seconds);
  }
}`),t(),i(),t(),n(595,"h4"),e(596,"6. Event Bus (no recomendado)"),t(),n(597,"p"),e(598," Un "),n(599,"code"),e(600,"Subject"),t(),e(601," como bus global de eventos. Es un "),n(602,"strong"),e(603,"anti-pattern"),t(),e(604," en Angular porque es dif\xEDcil de rastrear, depurar y tipar. Usa NgRx Store en su lugar. "),t(),n(605,"pre"),a(),n(606,"code"),e(607,`// \u274C Anti-pattern \u2014 dif\xEDcil de rastrear y depurar
@Injectable({ providedIn: 'root' })
export class EventBus {
  private bus = new Subject<{ type: string; payload: any }>();

  emit(type: string, payload: any) {
    this.bus.next({ type, payload });
  }

  on(type: string) {
    return this.bus.pipe(filter(e => e.type === type));
  }
}

// \u2705 Mejor alternativa: NgRx Store o un servicio tipado con signals`),t(),i(),t(),n(608,"h4"),e(609,"7. Router state \u2014 La URL como fuente de verdad"),t(),n(610,"p"),e(611," Params, query params y data de resolvers son un canal de comunicaci\xF3n de primera clase: sobreviven al refresh, son compartibles y activan el bot\xF3n atr\xE1s/adelante. Con "),n(612,"code"),e(613,"withComponentInputBinding()"),t(),e(614," los params llegan directo como inputs. "),t(),n(615,"pre")(616,"code"),e(617,`// app.config.ts
provideRouter(routes, withComponentInputBinding());

// Ruta: /products?category=books&page=2
@Component({ ... })
export class ProductListComponent {
  // query params \u2192 signal inputs autom\xE1ticamente
  category = input<string>();
  page = input(1, { transform: numberAttribute });

  private router = inject(Router);

  setCategory(cat: string) {
    // escribir estado = navegar
    this.router.navigate([], {
      queryParams: { category: cat, page: 1 },
      queryParamsHandling: 'merge'
    });
  }
}`),t()(),n(618,"h4"),e(619,"Tabla de decisi\xF3n"),t(),n(620,"table")(621,"thead")(622,"tr")(623,"th"),e(624,"Escenario"),t(),n(625,"th"),e(626,"Patr\xF3n recomendado"),t()()(),n(627,"tbody")(628,"tr")(629,"td"),e(630,"Padre \u2192 Hijo"),t(),n(631,"td"),e(632,"@Input"),t()(),n(633,"tr")(634,"td"),e(635,"Hijo \u2192 Padre"),t(),n(636,"td"),e(637,"@Output"),t()(),n(638,"tr")(639,"td"),e(640,"Hermanos cercanos"),t(),n(641,"td"),e(642,"Shared Service o Signal"),t()(),n(643,"tr")(644,"td"),e(645,"Cross-feature"),t(),n(646,"td"),e(647,"NgRx Store"),t()(),n(648,"tr")(649,"td"),e(650,"Estado de UI local"),t(),n(651,"td"),e(652,"Signal en componente"),t()(),n(653,"tr")(654,"td"),e(655,"Estado global (auth, config)"),t(),n(656,"td"),e(657,"Service con signal o NgRx"),t()(),n(658,"tr")(659,"td"),e(660,"Filtros / paginaci\xF3n / id seleccionado"),t(),n(661,"td"),e(662,"Router state (query params)"),t()()()(),n(663,"h4"),e(664,"\u26A0\uFE0F Errores comunes"),t(),n(665,"ul")(666,"li"),e(667,"Encadenar "),n(668,"code"),e(669,"@Output"),t(),e(670," a trav\xE9s de 3+ niveles (event bubbling manual): se\xF1al de que falta un servicio compartido o un container intermedio."),t(),n(671,"li"),e(672,"Usar "),n(673,"code"),e(674,"@ViewChild"),t(),e(675," para leer estado del hijo en cada ciclo: invierte el flujo de datos; el hijo deber\xEDa emitirlo."),t(),n(676,"li"),e(677,"Olvidar desuscribirse de observables de servicios en componentes (usa "),n(678,"code"),e(679,"takeUntilDestroyed()"),t(),e(680,", "),n(681,"code"),e(682,"async"),t(),e(683," pipe o "),n(684,"code"),e(685,"toSignal()"),t(),e(686,")."),t()(),n(687,"h4"),e(688,"\u{1F3A4} Preguntas de entrevista"),t(),n(689,"details",2)(690,"summary"),e(691,"\xBFPor qu\xE9 un Event Bus global se considera anti-pattern?"),t(),n(692,"p"),e(693,'Porque desacopla en exceso: cualquier parte de la app puede emitir o escuchar cualquier evento, sin tipado fuerte ni trazabilidad. Depurar "qui\xE9n emiti\xF3 esto" es arqueolog\xEDa. Un Store con actions tipadas da el mismo desacoplamiento pero con contrato expl\xEDcito y DevTools.'),t()(),n(694,"details",2)(695,"summary"),e(696,"Dos componentes hermanos deben sincronizar un contador, \xBFqu\xE9 usas?"),t(),n(697,"p"),e(698,"Un servicio con "),n(699,"code"),e(700,"signal"),t(),e(701," provisto en el ancestro com\xFAn (o root si es app-wide). Input/Output v\xEDa el padre tambi\xE9n funciona si el padre ya existe y son pocos niveles; NgRx ser\xEDa sobredimensionado."),t()(),n(702,"div",3),e(703," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(704,"ul")(705,"li")(706,"code"),e(707,"features/architecture-lab/architecture-lab.ts"),t(),e(708," \u2014 @Input/@Output, servicios compartidos, signals"),t(),n(709,"li")(710,"code"),e(711,"features/ngrx-lab/"),t(),e(712," \u2014 NgRx Store completo (actions, reducer, selectors, effects)"),t()()()(),n(713,"div",10)(714,"h3"),e(715,"8 \xB7 State Management \u2014 Cu\xE1ndo usar qu\xE9"),t(),n(716,"p"),e(717," Elegir la herramienta de estado correcta evita sobre-ingenier\xEDa en apps simples y caos en apps complejas. Sigue este \xE1rbol de decisi\xF3n: "),t(),n(718,"h4"),e(719,"1. Estado local del componente \u2192 "),n(720,"code"),e(721,"signal()"),t(),e(722," o propiedad"),t(),n(723,"p"),e(724," Contadores, toggles, estado de formulario, visibilidad de UI. No necesita salir del componente. "),t(),n(725,"pre"),a(),n(726,"code"),a(),e(727,`@Component({
  template: \\\`
    <button (click)="showPanel.set(!showPanel())">
      {{ showPanel() ? 'Ocultar' : 'Mostrar' }}
    </button>
    @if (showPanel()) {
      <div class="panel">Contenido</div>
    }
  \\\`
})
export class TogglePanelComponent {
  showPanel = signal(false);
}`),i(),t(),i(),t(),n(728,"h4"),e(729,"2. Compartido entre pocos componentes \u2192 Service + "),n(730,"code"),e(731,"signal()"),t(),e(732," o "),n(733,"code"),e(734,"BehaviorSubject"),t()(),n(735,"p"),e(736," Tema oscuro/claro, estado del sidebar, preferencias de usuario. Un servicio singleton con signal es la soluci\xF3n m\xE1s simple. "),t(),n(737,"pre"),a(),n(738,"code"),e(739,`@Injectable({ providedIn: 'root' })
export class SidebarService {
  isOpen = signal(true);

  toggle() {
    this.isOpen.update(v => !v);
  }
}

// Header component
@Component({
  template: \\\`<button (click)="sidebar.toggle()">\u2630</button>\\\`
})
export class HeaderComponent {
  sidebar = inject(SidebarService);
}

// Layout component
@Component({
  template: \\\`
    <aside [class.open]="sidebar.isOpen()">...</aside>
  \\\`
})
export class LayoutComponent {
  sidebar = inject(SidebarService);
}`),t(),i(),t(),n(740,"h4"),e(741,"3. Estado complejo de feature \u2192 NgRx ComponentStore o SignalStore"),t(),n(742,"p"),e(743," CRUD de una feature, estado de formulario complejo, filtros + paginaci\xF3n. El estado es m\xE1s complejo que un solo signal pero no necesita ser global. "),t(),n(744,"pre"),a(),n(745,"code"),a(),e(746,`// NgRx SignalStore \u2014 alternativa moderna a ComponentStore
import { signalStore, withState, withComputed, withMethods, patchState }
  from '@ngrx/signals';

interface ProductState {
  products: Product[];
  loading: boolean;
  filter: string;
}

export const ProductStore = signalStore(
  withState<ProductState>({
    products: [],
    loading: false,
    filter: ''
  }),
  withComputed(({ products, filter }) => ({
    filteredProducts: computed(() => {
      const f = filter().toLowerCase();
      return f
        ? products().filter(p => p.name.toLowerCase().includes(f))
        : products();
    }),
    count: computed(() => products().length)
  })),
  withMethods((store, api = inject(ProductApiService)) => ({
    async loadProducts() {
      patchState(store, { loading: true });
      const products = await firstValueFrom(api.getAll());
      patchState(store, { products, loading: false });
    },
    setFilter(filter: string) {
      patchState(store, { filter });
    },
    removeProduct(id: number) {
      patchState(store, {
        products: store.products().filter(p => p.id !== id)
      });
    }
  }))
);

// Uso en componente \u2014 proveer a nivel de feature
@Component({
  providers: [ProductStore],
  template: \\\`
    <input (input)="store.setFilter($event.target.value)" />
    <p>{{ store.count() }} productos</p>
    @if (store.loading()) {
      <app-spinner />
    }
    @for (p of store.filteredProducts(); track p.id) {
      <app-product-card [product]="p" />
    }
  \\\`
})
export class ProductListComponent {
  store = inject(ProductStore);

  constructor() {
    this.store.loadProducts();
  }
}`),i(),t(),i(),t(),n(747,"h4"),e(748,"4. Estado global de la app \u2192 NgRx Store"),t(),n(749,"p"),e(750," Auth, carrito de compras, datos compartidos entre features. Necesario cuando requieres: time-travel debugging, logging, hydration SSR, o m\xFAltiples features consumen el mismo estado. "),t(),n(751,"pre"),a(),n(752,"code"),e(753,`// Estructura NgRx completa para auth global
// auth.actions.ts
export const login = createAction('[Auth] Login', props<{ credentials: Credentials }>());
export const loginSuccess = createAction('[Auth] Login Success', props<{ user: User }>());
export const logout = createAction('[Auth] Logout');

// auth.reducer.ts
export const authReducer = createReducer(
  { user: null, isAuthenticated: false },
  on(loginSuccess, (state, { user }) => ({
    ...state, user, isAuthenticated: true
  })),
  on(logout, () => ({ user: null, isAuthenticated: false }))
);

// auth.selectors.ts
export const selectIsAuthenticated = createSelector(
  selectAuthState,
  state => state.isAuthenticated
);

// auth.effects.ts
loginEffect = createEffect(() =>
  this.actions$.pipe(
    ofType(login),
    exhaustMap(action =>
      this.authApi.login(action.credentials).pipe(
        map(user => loginSuccess({ user })),
        catchError(() => of(loginFailure()))
      )
    )
  )
);`),t(),i(),t(),n(754,"h4"),e(755,"\xC1rbol de decisi\xF3n r\xE1pido"),t(),n(756,"table")(757,"thead")(758,"tr")(759,"th"),e(760,"Pregunta"),t(),n(761,"th"),e(762,"Si s\xED"),t(),n(763,"th"),e(764,"Si no"),t()()(),n(765,"tbody")(766,"tr")(767,"td"),e(768,"\xBFEl estado sale del componente?"),t(),n(769,"td"),e(770,"\u2192 Siguiente pregunta"),t(),n(771,"td")(772,"code"),e(773,"signal()"),t()()(),n(774,"tr")(775,"td"),e(776,"\xBFLo usan m\xE1s de 2-3 componentes?"),t(),n(777,"td"),e(778,"\u2192 Siguiente pregunta"),t(),n(779,"td"),e(780,"Service + signal"),t()(),n(781,"tr")(782,"td"),e(783,"\xBFEs cross-feature o necesita DevTools?"),t(),n(784,"td"),e(785,"NgRx Store"),t(),n(786,"td"),e(787,"SignalStore"),t()()()(),n(788,"h4"),e(789,"\u26A0\uFE0F Errores comunes"),t(),n(790,"ul")(791,"li")(792,"strong"),e(793,"Todo al Store global:"),t(),e(794," meter estado de UI ef\xEDmero (modal abierto, texto de un input) en NgRx genera boilerplate sin beneficio y acopla componentes a estado que no les pertenece."),t(),n(795,"li")(796,"strong"),e(797,"Estado servidor tratado como estado cliente:"),t(),e(798,' cachear datos HTTP a mano en el Store sin invalidaci\xF3n ni refetch. El "server state" tiene su propio ciclo de vida (stale, revalidaci\xF3n) \u2014 mod\xE9lalo expl\xEDcitamente o usa '),n(799,"code"),e(800,"httpResource"),t(),e(801," / una capa de cach\xE9 dedicada."),t(),n(802,"li"),e(803,"Duplicar el mismo dato en varios niveles (componente + servicio + Store): una sola fuente de verdad, lo dem\xE1s son "),n(804,"code"),e(805,"computed()"),t(),e(806," derivados."),t(),n(807,"li"),e(808,'Elegir herramienta por moda y no por requisitos: migrar a NgRx "porque es enterprise" o quitarlo "porque signals" sin analizar qui\xE9n consume el estado.'),t()(),n(809,"h4"),e(810,"\u{1F3A4} Preguntas de entrevista"),t(),n(811,"details",2)(812,"summary"),e(813,"\xBFCu\xE1ndo justificar\xEDas introducir NgRx en un proyecto?"),t(),n(814,"p"),e(815,"Cuando varias features consumen y mutan el mismo estado, necesitas auditor\xEDa o time-travel debugging, hay efectos coordinados complejos, o el equipo es grande y el patr\xF3n \xFAnico (action \u2192 reducer \u2192 selector) reduce fricci\xF3n. Para estado local o de feature, signals/SignalStore es suficiente."),t()(),n(816,"details",2)(817,"summary"),e(818,"\xBFQu\xE9 diferencia hay entre estado de cliente y estado de servidor?"),t(),n(819,"p"),e(820,"El estado de cliente (tema, sidebar, selecci\xF3n) nace y muere en el navegador: t\xFA eres la fuente de verdad. El estado de servidor es una "),n(821,"em"),e(822,"copia cach\xE9"),t(),e(823," de datos remotos: puede quedar obsoleto, requiere sincronizaci\xF3n, loading y errores. Confundirlos lleva a Stores llenos de flags "),n(824,"code"),e(825,"loading"),t(),e(826," duplicados."),t()(),n(827,"details",2)(828,"summary"),e(829,"\xBFD\xF3nde deber\xEDa vivir el estado de un formulario multi-paso?"),t(),n(830,"p"),e(831,"En un servicio con signals provisto en la ruta padre del wizard (scope de feature, no root): sobrevive a la navegaci\xF3n entre pasos y se destruye al salir del flujo. Global solo si otro m\xF3dulo lo necesita."),t()(),n(832,"div",3),e(833," \u{1F4C2} Implementaci\xF3n en el proyecto: "),n(834,"ul")(835,"li")(836,"code"),e(837,"features/ngrx-lab/store/"),t(),e(838," \u2014 NgRx Store completo (actions, reducer, selectors, effects)"),t(),n(839,"li")(840,"code"),e(841,"features/architecture-lab/architecture-lab.ts"),t(),e(842," \u2014 Service con signal, @Input/@Output"),t(),n(843,"li")(844,"code"),e(845,"features/signals-lab/"),t(),e(846," \u2014 Signals como estado local y compartido"),t()()()(),n(847,"div",11)(848,"h3"),e(849,"9 \xB7 Arquitectura por Capas y Feature Slicing"),t(),n(850,"p"),e(851," Hay dos formas de partir una app: en "),n(852,"strong"),e(853,"capas horizontales"),t(),e(854," (presentaci\xF3n, aplicaci\xF3n, dominio, infraestructura \u2014 cada capa atraviesa toda la app) o en "),n(855,"strong"),e(856,"slices verticales por feature"),t(),e(857," (cada dominio de negocio contiene todo lo que necesita). La pr\xE1ctica moderna combina ambas: "),n(858,"em"),e(859,"primero se corta vertical por feature, y dentro de cada slice se aplican capas ligeras"),t(),e(860,". As\xED los cambios de negocio quedan localizados en una carpeta y el acoplamiento entre dominios es expl\xEDcito. "),t(),n(861,"pre")(862,"code"),e(863,`// Slice vertical con capas internas ligeras
features/orders/
\u251C\u2500\u2500 ui/                        # capa presentaci\xF3n
\u2502   \u251C\u2500\u2500 order-list.component.ts     (smart)
\u2502   \u2514\u2500\u2500 order-row.component.ts      (dumb)
\u251C\u2500\u2500 data/                      # capa acceso a datos
\u2502   \u251C\u2500\u2500 order-api.service.ts        (HTTP + DTOs)
\u2502   \u2514\u2500\u2500 order.store.ts              (SignalStore del slice)
\u251C\u2500\u2500 domain/                    # capa dominio (TS puro)
\u2502   \u251C\u2500\u2500 order.model.ts
\u2502   \u2514\u2500\u2500 order.rules.ts              (c\xE1lculos, validaciones)
\u2514\u2500\u2500 orders.routes.ts           # entrada lazy del slice`),t()(),n(864,"h4"),e(865,"Reglas dentro del slice"),t(),n(866,"ul")(867,"li")(868,"code"),e(869,"ui/"),t(),e(870," depende de "),n(871,"code"),e(872,"data/"),t(),e(873," y "),n(874,"code"),e(875,"domain/"),t(),e(876,"; "),n(877,"code"),e(878,"data/"),t(),e(879," depende de "),n(880,"code"),e(881,"domain/"),t(),e(882,"; "),n(883,"code"),e(884,"domain/"),t(),e(885," no depende de nadie (ni de Angular)."),t(),n(886,"li"),e(887,"El slice expone una API m\xEDnima (rutas + quiz\xE1 un facade); el resto es privado."),t(),n(888,"li"),e(889,'Lo compartido entre slices "baja" a '),n(890,"code"),e(891,"shared/"),t(),e(892," (UI) o a una carpeta de dominio compartido \u2014 nunca se importa slice a slice."),t()(),n(893,"h4"),e(894,"\u26A0\uFE0F Errores comunes"),t(),n(895,"ul")(896,"li"),e(897,'Capas horizontales puras en apps grandes: para tocar "pedidos" hay que editar '),n(898,"code"),e(899,"components/"),t(),e(900,", "),n(901,"code"),e(902,"services/"),t(),e(903,", "),n(904,"code"),e(905,"models/"),t(),e(906," y "),n(907,"code"),e(908,"store/"),t(),e(909," globales \u2014 alto acoplamiento por cercan\xEDa t\xE9cnica en vez de por dominio."),t(),n(910,"li"),e(911,"Slices que crecen sin capas internas: 40 archivos planos donde el HTTP, el estado y la UI se mezclan en los mismos ficheros."),t(),n(912,"li"),e(913,"Crear las 4 capas completas en un slice de 3 pantallas: la estructura debe ganarse su existencia; empieza plano y extrae capas cuando duela."),t()(),n(914,"h4"),e(915,"\u{1F3A4} Preguntas de entrevista"),t(),n(916,"details",2)(917,"summary"),e(918,"\xBFQu\xE9 ventaja tiene el feature slicing sobre las capas horizontales?"),t(),n(919,"p"),e(920,"Cohesi\xF3n: un cambio de negocio toca una sola carpeta. Adem\xE1s habilita lazy loading natural (un slice = un chunk), ownership por equipo y borrado seguro de features. Las capas horizontales optimizan para la simetr\xEDa t\xE9cnica, no para el cambio."),t()(),n(921,"details",2)(922,"summary"),e(923,'\xBFCu\xE1ndo "baja" c\xF3digo de un feature a shared?'),t(),n(924,"p"),e(925,"Cuando un segundo consumidor real lo necesita (regla de tres: con el tercero seguro). Bajarlo especulativamente crea una capa shared enorme que nadie puede modificar sin miedo."),t()(),n(926,"div",3),e(927," \u{1F4C2} "),n(928,"code"),e(929,"src/app/features/"),t(),e(930," \u2014 cada lab del proyecto es un slice vertical con sus rutas lazy "),t()(),n(931,"div",12)(932,"h3"),e(933,"10 \xB7 Lazy Loading como Frontera Arquitect\xF3nica"),t(),n(934,"p"),e(935," El lazy loading no es solo una optimizaci\xF3n de rendimiento: es la "),n(936,"strong"),e(937,"frontera f\xEDsica"),t(),e(938," que hace real la separaci\xF3n entre features. Cada "),n(939,"code"),e(940,"loadChildren"),t(),e(941,"/"),n(942,"code"),e(943,"loadComponent"),t(),e(944," produce un chunk independiente; si dos features se importan entre s\xED, el bundler las fusiona y la frontera desaparece. El tama\xF1o de los chunks es, de hecho, un test de arquitectura. "),t(),n(945,"pre")(946,"code"),e(947,`// app.routes.ts \u2014 cada feature es una frontera
export const routes: Routes = [
  {
    path: 'orders',
    loadChildren: () =>
      import('./features/orders/orders.routes')
        .then(m => m.ORDERS_ROUTES)
  },
  {
    path: 'admin',
    canMatch: [adminGuard],          // ni siquiera descarga el chunk sin permiso
    loadChildren: () =>
      import('./features/admin/admin.routes')
        .then(m => m.ADMIN_ROUTES)
  }
];

// orders.routes.ts \u2014 providers con scope de feature
export const ORDERS_ROUTES: Routes = [{
  path: '',
  providers: [
    OrderStore,                      // vive y muere con el feature
    { provide: ORDER_CONFIG, useValue: defaultOrderConfig }
  ],
  children: [
    { path: '', loadComponent: () => import('./ui/order-list.component').then(m => m.OrderListComponent) },
    { path: ':id', loadComponent: () => import('./ui/order-detail.component').then(m => m.OrderDetailComponent) }
  ]
}];`),t()(),n(948,"h4"),e(949,"Mejores pr\xE1cticas"),t(),n(950,"ul")(951,"li")(952,"strong"),e(953,"Providers a nivel de ruta:"),t(),e(954," servicios y stores del feature se declaran en sus rutas, no en root \u2014 se cargan con el chunk y no contaminan el bundle inicial."),t(),n(955,"li")(956,"strong"),e(957,"canMatch para features protegidas:"),t(),e(958," evita hasta la descarga del c\xF3digo si el usuario no tiene acceso."),t(),n(959,"li")(960,"strong"),e(961,"Preloading selectivo:"),t(),n(962,"code"),e(963,"PreloadAllModules"),t(),e(964," o una estrategia custom (por ejemplo, precargar seg\xFAn rol o con "),n(965,"code"),e(966,"requestIdleCallback"),t(),e(967,") equilibra arranque r\xE1pido y navegaci\xF3n instant\xE1nea."),t(),n(968,"li")(969,"strong"),e(970,"Budgets en angular.json:"),t(),e(971," fija l\xEDmites de tama\xF1o por bundle para detectar cuando una frontera se rompi\xF3."),t()(),n(972,"h4"),e(973,"\u26A0\uFE0F Errores comunes"),t(),n(974,"ul")(975,"li"),e(976,'Importar un s\xEDmbolo de otro feature "solo un enum": el bundler arrastra el chunk entero o lo duplica en un common chunk gigante.'),t(),n(977,"li"),e(978,"Servicios de feature con "),n(979,"code"),e(980,"providedIn: 'root'"),t(),e(981," que referencian c\xF3digo pesado: acaban en el bundle inicial aunque el feature sea lazy."),t(),n(982,"li"),e(983,"Lazy loading de TODO, incluida la pantalla principal: a\xF1ade un roundtrip a la ruta m\xE1s visitada. La ruta cr\xEDtica puede ir eager."),t()(),n(984,"h4"),e(985,"\u{1F3A4} Preguntas de entrevista"),t(),n(986,"details",2)(987,"summary"),e(988,"\xBFPor qu\xE9 lazy loading es una decisi\xF3n arquitect\xF3nica y no solo de performance?"),t(),n(989,"p"),e(990,"Porque obliga a que las features sean autocontenidas: define fronteras de compilaci\xF3n y despliegue, delimita el scope de los providers y hace medible el acoplamiento (si el chunk crece o se fusiona, alguien cruz\xF3 la frontera)."),t()(),n(991,"details",2)(992,"summary"),e(993,"\xBFDiferencia entre canActivate y canMatch en rutas lazy?"),t(),n(994,"p")(995,"code"),e(996,"canActivate"),t(),e(997," bloquea la activaci\xF3n pero el chunk ya puede haberse descargado; "),n(998,"code"),e(999,"canMatch"),t(),e(1e3," descarta la ruta antes de resolver el import, as\xED que el c\xF3digo ni se descarga. Para features por rol, canMatch."),t()(),n(1001,"div",3),e(1002," \u{1F4C2} "),n(1003,"code"),e(1004,"app.routes.ts"),t(),e(1005," y "),n(1006,"code"),e(1007,"features/*/"),t(),e(1008,"*"),n(1009,"code"),e(1010,".routes.ts"),t(),e(1011," \u2014 todos los labs cargan lazy con loadChildren/loadComponent "),t()(),n(1012,"div",13)(1013,"h3"),e(1014,"11 \xB7 Librer\xEDas y Monorepos (Nx)"),t(),n(1015,"p"),e(1016," Cuando el proyecto (o la organizaci\xF3n) crece, las carpetas dejan de ser suficientes como frontera y se pasa a "),n(1017,"strong"),e(1018,"librer\xEDas dentro de un monorepo"),t(),e(1019,". Nx es el est\xE1ndar de facto: cada lib tiene su API p\xFAblica (un barrel), "),n(1020,"em"),e(1021,"tags"),t(),e(1022," que declaran su tipo y dominio, y reglas de lint que proh\xEDben dependencias ilegales. Adem\xE1s Nx cachea builds y solo re-testea lo afectado por un cambio ("),n(1023,"code"),e(1024,"nx affected"),t(),e(1025,"). "),t(),n(1026,"pre")(1027,"code"),e(1028,`// Taxonom\xEDa t\xEDpica de libs en Nx
libs/
\u251C\u2500\u2500 orders/
\u2502   \u251C\u2500\u2500 feature-list/        # smart components + rutas    [type:feature]
\u2502   \u251C\u2500\u2500 ui-order-card/       # dumb components             [type:ui]
\u2502   \u251C\u2500\u2500 data-access/         # servicios HTTP + estado     [type:data-access]
\u2502   \u2514\u2500\u2500 domain/              # modelos + l\xF3gica pura       [type:util]
\u251C\u2500\u2500 shared/
\u2502   \u251C\u2500\u2500 ui-design-system/
\u2502   \u2514\u2500\u2500 util-formatters/
\u2514\u2500\u2500 ...

// Reglas de dependencia por tipo:
// feature      \u2192 puede usar: feature, ui, data-access, util
// ui           \u2192 puede usar: ui, util
// data-access  \u2192 puede usar: data-access, util
// util         \u2192 puede usar: util`),t()(),n(1029,"pre")(1030,"code"),e(1031,`// eslint \u2014 module boundaries con tags
"@nx/enforce-module-boundaries": ["error", {
  "depConstraints": [
    { "sourceTag": "type:ui",
      "onlyDependOnLibsWithTags": ["type:ui", "type:util"] },
    { "sourceTag": "type:data-access",
      "onlyDependOnLibsWithTags": ["type:data-access", "type:util"] },
    { "sourceTag": "scope:orders",
      "onlyDependOnLibsWithTags": ["scope:orders", "scope:shared"] }
  ]
}]`),t()(),n(1032,"h4"),e(1033,"Mejores pr\xE1cticas"),t(),n(1034,"ul")(1035,"li"),e(1036,"Dos dimensiones de tags: "),n(1037,"code"),e(1038,"type:*"),t(),e(1039," (qu\xE9 es) y "),n(1040,"code"),e(1041,"scope:*"),t(),e(1042," (a qu\xE9 dominio pertenece). Las reglas cruzan ambas."),t(),n(1043,"li"),e(1044,"Libs peque\xF1as y muchas: el grafo ("),n(1045,"code"),e(1046,"nx graph"),t(),e(1047,") se vuelve la documentaci\xF3n viva de la arquitectura."),t(),n(1048,"li"),e(1049,"Apps delgadas: la app solo compone libs y define configuraci\xF3n; toda la l\xF3gica vive en libs reutilizables."),t()(),n(1050,"h4"),e(1051,"\u26A0\uFE0F Errores comunes"),t(),n(1052,"ul")(1053,"li"),e(1054,'Monorepo sin reglas de boundaries: acabas con un "monolito distribuido en carpetas" donde todo importa de todo.'),t(),n(1055,"li"),e(1056,"Una lib gigante "),n(1057,"code"),e(1058,"shared/utils"),t(),e(1059," que depende de media app: rompe el cacheo y el "),n(1060,"code"),e(1061,"affected"),t(),e(1062,' (todo cambio la "afecta").'),t(),n(1063,"li"),e(1064,"Adoptar Nx en un equipo de 2 personas con una sola app peque\xF1a: el overhead de estructura supera el beneficio; la estructura core/shared/features basta."),t()(),n(1065,"h4"),e(1066,"\u{1F3A4} Preguntas de entrevista"),t(),n(1067,"details",2)(1068,"summary"),e(1069,"\xBFQu\xE9 aporta un monorepo Nx frente a multi-repo?"),t(),n(1070,"p"),e(1071,"Cambios at\xF3micos cross-proyecto (un PR toca lib y consumidores), una sola versi\xF3n de dependencias, refactors seguros con tipado end-to-end, y CI inteligente que solo construye/testea lo afectado. El costo: exige disciplina de boundaries y tooling compartido."),t()(),n(1072,"details",2)(1073,"summary"),e(1074,"\xBFPara qu\xE9 sirven los tags de Nx?"),t(),n(1075,"p"),e(1076,"Codifican la arquitectura en metadatos verificables: cada lib declara su tipo y scope, y el linter convierte el diagrama de capas en errores de compilaci\xF3n. Sin tags, las fronteras son solo convenci\xF3n."),t()()(),n(1077,"div",14)(1078,"h3"),e(1079,"12 \xB7 Patr\xF3n Facade"),t(),n(1080,"p"),e(1081," Un "),n(1082,"strong"),e(1083,"facade"),t(),e(1084," es un servicio que expone una API simple y orientada al dominio, ocultando la maquinaria de estado que hay detr\xE1s (NgRx, signals, varios servicios coordinados). Los componentes dependen del facade, no del Store: si ma\xF1ana migras de NgRx a SignalStore, los componentes no se enteran. "),t(),n(1085,"pre")(1086,"code"),e(1087,`@Injectable({ providedIn: 'root' })
export class ProductsFacade {
  private store = inject(Store);

  // \u2500\u2500 Lectura: el componente no conoce selectors \u2500\u2500
  products = toSignal(this.store.select(selectAllProducts),
    { initialValue: [] as Product[] });
  loading = toSignal(this.store.select(selectLoading),
    { initialValue: false });

  // \u2500\u2500 Escritura: el componente no conoce actions \u2500\u2500
  load() {
    this.store.dispatch(ProductActions.load());
  }
  addToCart(product: Product) {
    this.store.dispatch(CartActions.add({ product }));
  }
}

// El componente queda trivial (y trivial de testear)
@Component({ ... })
export class ProductPageComponent {
  facade = inject(ProductsFacade);

  constructor() {
    this.facade.load();
  }
}

// Test: se mockea UNA dependencia con una API plana
const facadeMock = {
  products: signal([{ id: 1, name: 'Test' }]),
  loading: signal(false),
  load: jasmine.createSpy()
};
TestBed.configureTestingModule({
  providers: [{ provide: ProductsFacade, useValue: facadeMock }]
});`),t()(),n(1088,"h4"),e(1089,"Mejores pr\xE1cticas"),t(),n(1090,"ul")(1091,"li"),e(1092,"API en lenguaje de dominio ("),n(1093,"code"),e(1094,"addToCart"),t(),e(1095,"), no de implementaci\xF3n ("),n(1096,"code"),e(1097,"dispatch"),t(),e(1098,")."),t(),n(1099,"li"),e(1100,"Un facade por feature/caso de uso, no un facade global."),t(),n(1101,"li"),e(1102,"El facade puede coordinar varios servicios (API + Store + router) y ofrecer una sola operaci\xF3n de alto nivel al componente."),t()(),n(1103,"h4"),e(1104,"\u26A0\uFE0F Errores comunes"),t(),n(1105,"ul")(1106,"li"),e(1107,'Facade "dios" que agrega todo el estado de la app: mismo problema que un componente inflado, pero en un servicio.'),t(),n(1108,"li"),e(1109,"Pass-through an\xE9mico obligatorio: si el facade solo renombra m\xE9todos de un \xFAnico servicio sin a\xF1adir nada, es indirection gratuita \u2014 el patr\xF3n se aplica cuando hay complejidad que ocultar."),t(),n(1110,"li"),e(1111,"Filtrar tipos de la implementaci\xF3n (exponer "),n(1112,"code"),e(1113,"Action"),t(),e(1114," o "),n(1115,"code"),e(1116,"MemoizedSelector"),t(),e(1117," en la firma p\xFAblica): rompe el aislamiento que justificaba el facade."),t()(),n(1118,"h4"),e(1119,"\u{1F3A4} Preguntas de entrevista"),t(),n(1120,"details",2)(1121,"summary"),e(1122,"\xBFQu\xE9 problema resuelve un facade sobre NgRx?"),t(),n(1123,"p"),e(1124,"Desacopla componentes del mecanismo de estado: reduce el API surface que los componentes conocen (ni actions ni selectors), simplifica los tests (un mock plano) y permite cambiar la implementaci\xF3n de estado sin tocar la UI."),t()(),n(1125,"details",2)(1126,"summary"),e(1127,"\xBFCu\xE1ndo NO usar\xEDas un facade?"),t(),n(1128,"p"),e(1129,"Cuando no hay nada que ocultar: un componente que consume un \xFAnico servicio simple no gana nada con una capa m\xE1s. El facade se justifica con m\xFAltiples fuentes coordinadas o una librer\xEDa de estado que quieres poder cambiar."),t()()(),n(1130,"div",15)(1131,"h3"),e(1132,"13 \xB7 Patr\xF3n Repository"),t(),n(1133,"p"),e(1134," El "),n(1135,"strong"),e(1136,"repository"),t(),e(1137,' abstrae el acceso a datos detr\xE1s de un contrato: quien lo consume pide "productos" sin saber si vienen de HTTP, IndexedDB, un mock o GraphQL. En Angular, como las interfaces de TypeScript desaparecen en runtime, el contrato se materializa con una '),n(1138,"strong"),e(1139,"clase abstracta"),t(),e(1140," (que s\xED puede ser token de DI). "),t(),n(1141,"pre")(1142,"code"),e(1143,`// \u2500\u2500 Contrato (dominio) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
export abstract class ProductRepository {
  abstract getAll(): Observable<Product[]>;
  abstract getById(id: string): Observable<Product>;
  abstract save(product: Product): Observable<Product>;
}

// \u2500\u2500 Implementaci\xF3n HTTP (infraestructura) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
@Injectable()
export class HttpProductRepository extends ProductRepository {
  private http = inject(HttpClient);

  getAll() {
    return this.http.get<ProductDto[]>('/api/products')
      .pipe(map(dtos => dtos.map(toProduct)));
  }
  getById(id: string) {
    return this.http.get<ProductDto>(\\\`/api/products/\${id}\\\`)
      .pipe(map(toProduct));
  }
  save(product: Product) {
    return this.http.post<ProductDto>('/api/products', toDto(product))
      .pipe(map(toProduct));
  }
}

// \u2500\u2500 Wiring por DI: la app elige la implementaci\xF3n \u2500\u2500
providers: [
  { provide: ProductRepository, useClass: HttpProductRepository }
]

// En tests o demos: sin tocar a los consumidores
providers: [
  { provide: ProductRepository, useClass: InMemoryProductRepository }
]`),t()(),n(1144,"h4"),e(1145,"Mejores pr\xE1cticas"),t(),n(1146,"ul")(1147,"li"),e(1148,"El repository devuelve "),n(1149,"strong"),e(1150,"modelos de dominio"),t(),e(1151,", nunca DTOs crudos: el mapeo es su responsabilidad."),t(),n(1152,"li"),e(1153,"M\xE9todos con sem\xE1ntica de dominio ("),n(1154,"code"),e(1155,"findActive()"),t(),e(1156,") mejor que un gen\xE9rico "),n(1157,"code"),e(1158,"query(params)"),t(),e(1159," que filtra la UI."),t(),n(1160,"li"),e(1161,"Comb\xEDnalo con facade/Store: el effect o el store llaman al repository, los componentes nunca lo tocan directamente."),t()(),n(1162,"h4"),e(1163,"\u26A0\uFE0F Errores comunes"),t(),n(1164,"ul")(1165,"li"),e(1166,"Usar una "),n(1167,"code"),e(1168,"interface"),t(),e(1169," TS como token de provider: no existe en runtime; usa clase abstracta o "),n(1170,"code"),e(1171,"InjectionToken"),t(),e(1172,"."),t(),n(1173,"li"),e(1174,"Repository que expone detalles HTTP ("),n(1175,"code"),e(1176,"HttpResponse"),t(),e(1177,", headers, c\xF3digos de estado): el contrato debe ser agn\xF3stico del transporte."),t(),n(1178,"li"),e(1179,"Crear repositories para una app que solo har\xE1 "),n(1180,"code"),e(1181,"GET"),t(),e(1182," a 3 endpoints estables: un servicio API simple es suficiente; el patr\xF3n paga cuando hay m\xFAltiples fuentes o testing intensivo."),t()(),n(1183,"h4"),e(1184,"\u{1F3A4} Preguntas de entrevista"),t(),n(1185,"details",2)(1186,"summary"),e(1187,"\xBFPor qu\xE9 una clase abstracta y no una interface para el contrato?"),t(),n(1188,"p"),e(1189,"Las interfaces de TypeScript se borran al compilar, as\xED que no pueden ser tokens de inyecci\xF3n. Una clase abstracta existe en runtime, sirve como token y adem\xE1s obliga a implementar el contrato. La alternativa es "),n(1190,"code"),e(1191,"InjectionToken<MiInterface>"),t(),e(1192,"."),t()(),n(1193,"details",2)(1194,"summary"),e(1195,"\xBFQu\xE9 gana el testing con repositories?"),t(),n(1196,"p"),e(1197,"Los tests de l\xF3gica de negocio usan una implementaci\xF3n in-memory determinista en lugar de "),n(1198,"code"),e(1199,"HttpTestingController"),t(),e(1200,": menos setup, m\xE1s r\xE1pidos, y los tests no se rompen cuando cambia la forma de la API."),t()()(),n(1201,"div",16)(1202,"h3"),e(1203,"14 \xB7 Patr\xF3n Adapter"),t(),n(1204,"p"),e(1205," El "),n(1206,"strong"),e(1207,"adapter"),t(),e(1208," traduce entre dos contratos incompatibles. En frontend tiene dos usos estrella: (1) "),n(1209,"em"),e(1210,"anti-corruption layer"),t(),e(1211," \u2014 traducir respuestas del backend a tus modelos para que sus cambios no se propaguen por la app; y (2) envolver librer\xEDas de terceros (charts, analytics, SDKs) detr\xE1s de una interfaz propia para poder reemplazarlas. "),t(),n(1212,"pre")(1213,"code"),e(1214,`// \u2500\u2500 1. Adapter de API (anti-corruption) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// Lo que manda el backend (snake_case, strings)
interface UserApiResponse {
  user_id: number;
  full_name: string;
  created_at: string;          // "2026-07-10T12:00:00Z"
  subscription_tier: 'FREE' | 'PRO' | 'ENT';
}

// Tu modelo de dominio
interface User {
  id: number;
  name: string;
  createdAt: Date;
  isPremium: boolean;
}

// El adapter: \xFAnica pieza que conoce ambos mundos
export function toUser(raw: UserApiResponse): User {
  return {
    id: raw.user_id,
    name: raw.full_name,
    createdAt: new Date(raw.created_at),
    isPremium: raw.subscription_tier !== 'FREE'
  };
}

// \u2500\u2500 2. Adapter de librer\xEDa de terceros \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
export abstract class AnalyticsService {
  abstract track(event: string, data?: Record<string, unknown>): void;
}

@Injectable()
export class MixpanelAnalytics extends AnalyticsService {
  track(event: string, data?: Record<string, unknown>) {
    mixpanel.track(event, data);   // API espec\xEDfica encapsulada
  }
}
// Cambiar de proveedor = escribir otro adapter, cero cambios en la app`),t()(),n(1215,"h4"),e(1216,"\u26A0\uFE0F Errores comunes"),t(),n(1217,"ul")(1218,"li"),e(1219,"Usar el tipo de la respuesta API directamente en componentes y templates: cuando el backend renombra un campo, el grep recorre toda la app."),t(),n(1220,"li"),e(1221,"Adapters con l\xF3gica de negocio dentro: el adapter "),n(1222,"em"),e(1223,"traduce"),t(),e(1224,"; las reglas viven en el dominio."),t(),n(1225,"li"),e(1226,'Envolver librer\xEDas estables y triviales "por si acaso": abstraer '),n(1227,"code"),e(1228,"Date"),t(),e(1229," o lodash rara vez paga; abstrae lo que es plausible reemplazar (analytics, pagos, charts)."),t()(),n(1230,"h4"),e(1231,"\u{1F3A4} Preguntas de entrevista"),t(),n(1232,"details",2)(1233,"summary"),e(1234,"\xBFQu\xE9 es un anti-corruption layer en frontend?"),t(),n(1235,"p"),e(1236,'Una franja de adapters/mappers en el borde de la app que traduce los contratos externos (API, SDKs) a modelos propios. "Corrupci\xF3n" es que las convenciones ajenas (snake_case, fechas string, enums cr\xEDpticos) se infiltren en tu dominio y UI.'),t()(),n(1237,"details",2)(1238,"summary"),e(1239,"\xBFDiferencia entre Adapter y Facade?"),t(),n(1240,"p"),e(1241,"El adapter "),n(1242,"em"),e(1243,"traduce"),t(),e(1244," entre dos contratos existentes e incompatibles (misma funcionalidad, distinta forma). El facade "),n(1245,"em"),e(1246,"simplifica"),t(),e(1247,": expone una API reducida sobre un subsistema complejo propio. Suelen convivir: el facade usa repositories que internamente usan adapters."),t()()(),n(1248,"div",17)(1249,"h3"),e(1250,"15 \xB7 API Layer: DTOs vs Modelos de Dominio"),t(),n(1251,"p"),e(1252," Un "),n(1253,"strong"),e(1254,"DTO"),t(),e(1255," (Data Transfer Object) describe "),n(1256,"em"),e(1257,"exactamente"),t(),e(1258," lo que viaja por la red; un "),n(1259,"strong"),e(1260,"modelo de dominio"),t(),e(1261," describe lo que tu app necesita para trabajar. Mantenerlos separados \u2014con un mapper entre ambos\u2014 a\xEDsla a toda la aplicaci\xF3n de los cambios del backend y concentra en un solo punto las conversiones (fechas, nombres, campos derivados, defaults). "),t(),n(1262,"pre")(1263,"code"),e(1264,`// \u2500\u2500 DTO: espejo del contrato HTTP (solo en la capa API) \u2500\u2500
export interface InvoiceDto {
  id: string;
  customer_name: string;
  issued_at: string;             // ISO string
  line_items: { desc: string; cents: number }[];
  status: 'DRAFT' | 'SENT' | 'PAID' | 'VOID';
}

// \u2500\u2500 Modelo de dominio: lo que la app quiere usar \u2500\u2500
export interface Invoice {
  id: string;
  customerName: string;
  issuedAt: Date;
  lines: InvoiceLine[];
  total: number;                 // derivado, calculado una vez
  isPayable: boolean;            // regla de negocio expl\xEDcita
}

// \u2500\u2500 Mapper: \xFAnico punto de traducci\xF3n \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
export function toInvoice(dto: InvoiceDto): Invoice {
  const lines = dto.line_items.map(li => ({
    description: li.desc,
    amount: li.cents / 100
  }));
  return {
    id: dto.id,
    customerName: dto.customer_name,
    issuedAt: new Date(dto.issued_at),
    lines,
    total: lines.reduce((s, l) => s + l.amount, 0),
    isPayable: dto.status === 'SENT'
  };
}

// \u2500\u2500 Servicio API: los DTOs no salen de aqu\xED \u2500\u2500\u2500\u2500\u2500\u2500\u2500
@Injectable({ providedIn: 'root' })
export class InvoiceApiService {
  private http = inject(HttpClient);

  getInvoices(): Observable<Invoice[]> {
    return this.http.get<InvoiceDto[]>('/api/invoices')
      .pipe(map(dtos => dtos.map(toInvoice)));
  }
}`),t()(),n(1265,"h4"),e(1266,"Mejores pr\xE1cticas"),t(),n(1267,"ul")(1268,"li"),e(1269,"Los DTOs viven junto al servicio API y "),n(1270,"strong"),e(1271,"no se exportan"),t(),e(1272," fuera de la capa de datos."),t(),n(1273,"li"),e(1274,"Mappers como funciones puras: triviales de testear y componibles."),t(),n(1275,"li"),e(1276,"En fronteras cr\xEDticas, valida adem\xE1s en runtime (zod/valibot): el "),n(1277,"code"),e(1278,"get<T>"),t(),e(1279," de HttpClient es solo una promesa de tipos, no una comprobaci\xF3n."),t(),n(1280,"li"),e(1281,"Fechas siempre a "),n(1282,"code"),e(1283,"Date"),t(),e(1284," (o a tu tipo de fecha) en el mapper \u2014 nunca strings ISO pase\xE1ndose por templates."),t()(),n(1285,"h4"),e(1286,"\u26A0\uFE0F Errores comunes"),t(),n(1287,"ul")(1288,"li"),e(1289,'Usar el DTO como modelo "para no duplicar interfaces": ahorras 10 l\xEDneas hoy y acoplas cada template al naming del backend para siempre.'),t(),n(1290,"li"),e(1291,"Confiar en el gen\xE9rico de "),n(1292,"code"),e(1293,"http.get<T>()"),t(),e(1294," como validaci\xF3n: si el backend manda otra cosa, el error explota lejos, en un template."),t(),n(1295,"li"),e(1296,"Mapear en el componente: cada consumidor repite (y desincroniza) la conversi\xF3n."),t()(),n(1297,"h4"),e(1298,"\u{1F3A4} Preguntas de entrevista"),t(),n(1299,"details",2)(1300,"summary"),e(1301,"El backend renombra un campo, \xBFcu\xE1ntos archivos cambias?"),t(),n(1302,"p"),e(1303,"Con capa de DTOs + mapper: dos (el DTO y el mapper). Sin ella: cada componente, selector y test que tocaba ese campo. Esa es la m\xE9trica que justifica la capa."),t()(),n(1304,"details",2)(1305,"summary"),e(1306,"\xBFTypeScript no valida ya la respuesta HTTP?"),t(),n(1307,"p"),e(1308,"No. Los tipos se borran en compilaci\xF3n; "),n(1309,"code"),e(1310,"get<InvoiceDto>"),t(),e(1311," es un cast impl\xEDcito. Para garant\xEDas reales en runtime se valida el JSON en la frontera (schemas con zod/valibot) o al menos se defiende el mapper con defaults."),t()()(),n(1312,"div",18)(1313,"h3"),e(1314,"16 \xB7 Manejo Global de Errores"),t(),n(1315,"p"),e(1316," Una app profesional tiene una estrategia de errores en dos niveles: un "),n(1317,"strong"),e(1318,"interceptor HTTP"),t(),e(1319," para errores de red/API (mapear c\xF3digos, reintentos, redirigir en 401, notificar) y un "),n(1320,"strong"),e(1321,"ErrorHandler"),t(),e(1322," global como red de seguridad para todo lo no capturado (bugs, errores en efectos). As\xED los componentes solo manejan los errores que pueden resolver. "),t(),n(1323,"pre")(1324,"code"),e(1325,`// \u2500\u2500 Interceptor funcional: errores HTTP \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const toast = inject(ToastService);

  return next(req).pipe(
    retry({ count: 1, delay: 300 }),          // reintento leve en GET fallidos
    catchError((error: HttpErrorResponse) => {
      switch (error.status) {
        case 401:
          router.navigate(['/login']);
          break;
        case 403:
          toast.error('No tienes permisos para esta acci\xF3n');
          break;
        case 0:
          toast.error('Sin conexi\xF3n con el servidor');
          break;
        default:
          toast.error('Ocurri\xF3 un error inesperado');
      }
      // Re-lanza un error de dominio, no el HttpErrorResponse crudo
      return throwError(() => new AppError(error.status, req.url));
    })
  );
};

// \u2500\u2500 ErrorHandler global: red de seguridad \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  private logger = inject(LoggingService);

  handleError(error: unknown): void {
    this.logger.report(error);               // Sentry, DataDog...
    console.error(error);                    // nunca tragarse el error
  }
}

// \u2500\u2500 Registro en app.config.ts \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),    // captura errores fuera de Angular
    provideHttpClient(withInterceptors([errorInterceptor])),
    { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ]
};`),t()(),n(1326,"h4"),e(1327,"Mejores pr\xE1cticas"),t(),n(1328,"ul")(1329,"li")(1330,"strong"),e(1331,"Clasifica:"),t(),e(1332," errores esperables (validaci\xF3n, 404 de un recurso) se manejan localmente con UI espec\xEDfica; los inesperados suben al handler global."),t(),n(1333,"li"),e(1334,"El interceptor traduce "),n(1335,"code"),e(1336,"HttpErrorResponse"),t(),e(1337," a errores de dominio tipados \u2014 los componentes nunca inspeccionan "),n(1338,"code"),e(1339,"status"),t(),e(1340,"."),t(),n(1341,"li"),e(1342,"Reporta a un servicio de observabilidad (Sentry/DataDog) desde el ErrorHandler, con contexto (usuario, ruta, versi\xF3n)."),t(),n(1343,"li"),e(1344,"En streams, coloca "),n(1345,"code"),e(1346,"catchError"),t(),e(1347," en el flujo interno para no matar el observable fuente (t\xEDpico en effects y polling)."),t()(),n(1348,"h4"),e(1349,"\u26A0\uFE0F Errores comunes"),t(),n(1350,"ul")(1351,"li")(1352,"code"),e(1353,"catchError(() => of([]))"),t(),e(1354," silencioso por defecto: el usuario ve una lista vac\xEDa y nadie sabe que la API est\xE1 ca\xEDda. Silenciar debe ser una decisi\xF3n expl\xEDcita, no el patr\xF3n por defecto."),t(),n(1355,"li"),e(1356,"ErrorHandler que hace navegaci\xF3n o llamadas que pueden fallar sin try/catch: un error dentro del handler produce loops."),t(),n(1357,"li"),e(1358,"Mostrar toasts desde interceptor Y componente para el mismo error: define qui\xE9n es due\xF1o de la notificaci\xF3n (regla com\xFAn: interceptor notifica lo global, el componente lo contextual, nunca ambos)."),t(),n(1359,"li"),e(1360,"Olvidar que ErrorHandler corre fuera de la zona en algunos casos: si el handler muta estado de UI, puede necesitar "),n(1361,"code"),e(1362,"NgZone.run"),t(),e(1363," (o mejor, signals)."),t()(),n(1364,"h4"),e(1365,"\u{1F3A4} Preguntas de entrevista"),t(),n(1366,"details",2)(1367,"summary"),e(1368,"\xBFInterceptor o ErrorHandler \u2014 cu\xE1l captura qu\xE9?"),t(),n(1369,"p"),e(1370,"El interceptor solo ve fallos de peticiones HTTP y act\xFAa "),n(1371,"em"),e(1372,"dentro"),t(),e(1373," del stream (retry, mapear, redirigir). El ErrorHandler recibe cualquier excepci\xF3n no capturada en la app (templates, listeners, promesas de Angular). Son complementarios: red de negocio vs red de seguridad."),t()(),n(1374,"details",2)(1375,"summary"),e(1376,"\xBFD\xF3nde reintentar\xEDas una petici\xF3n fallida?"),t(),n(1377,"p"),e(1378,"En el interceptor para pol\xEDticas globales (reintento \xFAnico en errores de red idempotentes), o en el servicio/effect para pol\xEDticas espec\xEDficas ("),n(1379,"code"),e(1380,"retry"),t(),e(1381," con backoff exponencial). Nunca reintentar POST no idempotentes a ciegas."),t()(),n(1382,"details",2)(1383,"summary"),e(1384,"\xBFC\xF3mo evitas que un error HTTP mate un effect de NgRx?"),t(),n(1385,"p"),e(1386,"Poniendo el "),n(1387,"code"),e(1388,"catchError"),t(),e(1389," dentro del observable interno del "),n(1390,"code"),e(1391,"switchMap/exhaustMap"),t(),e(1392," y devolviendo una action de fallo. Si el catchError va en el stream exterior, el effect se completa y deja de escuchar actions."),t()(),n(1393,"div",3),e(1394," \u{1F4C2} "),n(1395,"code"),e(1396,"core/interceptors/"),t(),e(1397," \u2014 interceptors HTTP del proyecto "),t()()())},dependencies:[s],styles:["[_nghost-%COMP%]{display:block;padding:1rem 0}.cards[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.card[_ngcontent-%COMP%]{background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:1.2rem}.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 .6rem;font-size:1.1rem}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--text-muted);line-height:1.6;margin:0 0 .8rem}pre[_ngcontent-%COMP%]{background:var(--bg-code, #161b22);border:1px solid var(--border);border-radius:6px;padding:.8rem;overflow-x:auto;font-size:.85rem;line-height:1.5}code[_ngcontent-%COMP%]{color:var(--text)}.card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:1.2rem 0 .5rem;font-size:.98rem}.card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{color:var(--text-muted);line-height:1.6;margin:0 0 .8rem;padding-left:1.3rem}.card[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin:.4rem 0 1rem;font-size:.88rem}.card[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid var(--border);padding:.45rem .6rem;text-align:left;color:var(--text-muted)}.card[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:var(--text);background:var(--bg-code, #161b22)}details.qa[_ngcontent-%COMP%]{border:1px solid var(--border);border-radius:6px;padding:.5rem .8rem;margin:0 0 .5rem}details.qa[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]{cursor:pointer;font-weight:600}details.qa[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.5rem 0 .2rem}"]})};export{u as ArchLearnComponent};
