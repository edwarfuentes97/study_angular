import{Gb as n,Hb as t,Zb as e,fb as l,sa as o,ta as i}from"./chunk-G73V3KC4.js";import"./chunk-2NFLSA4Y.js";var r=class d{static \u0275fac=function(a){return new(a||d)};static \u0275cmp=l({type:d,selectors:[["app-mfe-exercises"]],decls:492,vars:0,consts:[[1,"cards"],[1,"card"],[1,"criteria"],[1,"tip"],[1,"solution"],[1,"steps"],[1,"check"]],template:function(a,s){a&1&&(n(0,"div",0)(1,"div",1)(2,"h3"),e(3,"1 \xB7 Shell + remote con Native Federation (desde 0)"),t(),n(4,"p"),e(5," Crea dos apps Angular ("),n(6,"code"),e(7,"shell"),t(),e(8," en el puerto 4200 y "),n(9,"code"),e(10,"catalogo"),t(),e(11," en el 4201). El remote debe exponer sus rutas y el shell cargarlas de forma lazy en "),n(12,"code"),e(13,"/catalogo"),t(),e(14,". "),t(),n(15,"ul",2)(16,"li"),e(17,"El remote expone './routes' en federation.config.js"),t(),n(18,"li"),e(19,"El shell usa loadRemoteModule() en una ruta lazy"),t(),n(20,"li"),e(21,"Ambas apps arrancan por separado y el shell muestra el cat\xE1logo"),t()(),n(22,"div",3),e(23,"Arranca primero el remote: el shell falla al resolver el manifest si el remoteEntry.json no responde"),t(),n(24,"details",4)(25,"summary"),e(26,"Ver soluci\xF3n paso a paso"),t(),n(27,"ol",5)(28,"li")(29,"strong"),e(30,"Crea el workspace con las dos aplicaciones"),t(),n(31,"pre"),i(),n(32,"code"),e(33,`npm i -g @angular/cli
ng new mfe-workspace --create-application=false
cd mfe-workspace
ng generate application shell --routing --style=scss
ng generate application catalogo --routing --style=scss`),t(),o(),t()(),n(34,"li")(35,"strong"),e(36,"Instala Native Federation en cada app con su rol"),t(),n(37,"pre"),i(),n(38,"code"),e(39,`ng add @angular-architects/native-federation --project shell --type dynamic-host --port 4200
ng add @angular-architects/native-federation --project catalogo --type remote --port 4201`),t(),o(),t(),e(40," El schematic crea "),n(41,"code"),e(42,"federation.config.js"),t(),e(43," por proyecto, divide el arranque en "),n(44,"code"),e(45,"main.ts"),t(),e(46," + "),n(47,"code"),e(48,"bootstrap.ts"),t(),e(49," y cambia el builder en "),n(50,"code"),e(51,"angular.json"),t(),e(52,". "),t(),n(53,"li")(54,"strong"),e(55,"Crea el feature del remote con sus rutas"),t(),n(56,"pre"),i(),n(57,"code"),e(58,"ng generate component catalogo-home --project catalogo"),t(),o(),t(),n(59,"pre"),i(),n(60,"code"),e(61,`// projects/catalogo/src/app/catalogo.routes.ts
import { Routes } from '@angular/router';
import { CatalogoHome } from './catalogo-home/catalogo-home';

export const CATALOGO_ROUTES: Routes = [
  { path: '', component: CatalogoHome },
];`),t(),o(),t()(),n(62,"li")(63,"strong"),e(64,"Exp\xF3n las rutas en el federation.config.js del remote"),t(),n(65,"pre"),i(),n(66,"code"),e(67,`// projects/catalogo/federation.config.js
const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'catalogo',
  exposes: {
    './routes': './projects/catalogo/src/app/catalogo.routes.ts',
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});`),t(),o(),t()(),n(68,"li")(69,"strong"),e(70,"Registra el remote en el manifest del shell"),t(),n(71,"pre"),i(),n(72,"code"),e(73,`// projects/shell/src/assets/federation.manifest.json
{
  "catalogo": "http://localhost:4201/remoteEntry.json"
}`),t(),o(),t(),e(74," El "),n(75,"code"),e(76,"main.ts"),t(),e(77," del shell (generado por el schematic) ya carga este manifest con "),n(78,"code"),e(79,"initFederation('/assets/federation.manifest.json')"),t(),e(80," antes de importar "),n(81,"code"),e(82,"bootstrap.ts"),t(),e(83," \u2014 rev\xEDsalo para entender el orden de arranque. "),t(),n(84,"li")(85,"strong"),e(86,"Crea la ruta lazy en el shell"),t(),n(87,"pre"),i(),n(88,"code"),e(89,`// projects/shell/src/app/app.routes.ts
import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: 'catalogo',
    loadChildren: () =>
      loadRemoteModule('catalogo', './routes').then(m => m.CATALOGO_ROUTES),
  },
];`),t(),o(),t(),e(90," Y agrega un enlace en el template del shell: "),n(91,"pre"),i(),n(92,"code"),e(93,`<a routerLink="/catalogo">Cat\xE1logo</a>
<router-outlet />`),t(),o(),t()(),n(94,"li")(95,"strong"),e(96,"Arranca ambas apps (remote primero) en dos terminales"),t(),n(97,"pre"),i(),n(98,"code"),e(99,`ng serve catalogo   # terminal 1 \u2192 http://localhost:4201
ng serve shell      # terminal 2 \u2192 http://localhost:4200`),t(),o(),t(),n(100,"div",6),e(101,"abre http://localhost:4201/remoteEntry.json (debe responder el metadata del remote) y luego http://localhost:4200/catalogo \u2014 el shell debe renderizar el componente del cat\xE1logo. En la pesta\xF1a Network ver\xE1s que el c\xF3digo del cat\xE1logo se descarga desde el puerto 4201."),t()()()()(),n(102,"div",1)(103,"h3"),e(104,"2 \xB7 Dependencias compartidas y versiones"),t(),n(105,"p"),e(106," Con el setup del ejercicio 1, experimenta con "),n(107,"code"),e(108,"shared"),t(),e(109,": marca Angular y RxJS como singleton, provoca un conflicto de versiones y observa qu\xE9 pasa con "),n(110,"code"),e(111,"strictVersion: true"),t(),e(112," vs "),n(113,"code"),e(114,"false"),t(),e(115,". "),t(),n(116,"ul",2)(117,"li"),e(118,"@angular/* y rxjs configurados como singleton en ambos lados"),t(),n(119,"li"),e(120,"Reproduces el error de versi\xF3n incompatible con strictVersion: true"),t(),n(121,"li"),e(122,"Documentas qu\xE9 estrategia usar\xEDas en producci\xF3n y por qu\xE9"),t()(),n(123,"div",3),e(124,"Mira la pesta\xF1a Network: con shared bien configurado, Angular se descarga UNA vez aunque cargues varios remotes"),t(),n(125,"details",4)(126,"summary"),e(127,"Ver soluci\xF3n paso a paso"),t(),n(128,"ol",5)(129,"li")(130,"strong"),e(131,"Observa la l\xEDnea base"),t(),n(132,"p"),e(133,"Con ambas apps corriendo, abre DevTools \u2192 Network en el shell, filtra por JS y entra a "),n(134,"code"),e(135,"/catalogo"),t(),e(136,". Anota cu\xE1ntos bundles llegan desde el puerto 4201: solo debe llegar el c\xF3digo del feature, no otra copia de Angular (eso es el "),n(137,"code"),e(138,"shared"),t(),e(139," con "),n(140,"code"),e(141,"shareAll({ singleton: true })"),t(),e(142," funcionando)."),t()(),n(143,"li")(144,"strong"),e(145,"Provoca el conflicto de versiones"),t(),n(146,"p"),e(147,"El truco m\xE1s simple sin segundo workspace: edita a mano la versi\xF3n que el remote declara compartir y reconstruye. En "),n(148,"code"),e(149,"projects/catalogo/package.json"),t(),e(150," (o el package.json ra\xEDz si es workspace \xFAnico) baja una dependencia compartida, por ejemplo:"),t(),n(151,"pre"),i(),n(152,"code"),e(153,`// package.json del remote (solo para el experimento)
"rxjs": "~7.5.0"   // el shell sigue en ~7.8.0`),t(),o(),t(),n(154,"pre"),i(),n(155,"code"),e(156,`npm install
ng serve catalogo`),t(),o(),t()(),n(157,"li")(158,"strong"),e(159,"Observa el fallo con strictVersion: true"),t(),n(160,"p"),e(161,"Recarga el shell y entra a "),n(162,"code"),e(163,"/catalogo"),t(),e(164,". En consola ver\xE1s un error del tipo:"),t(),n(165,"pre"),i(),n(166,"code"),e(167,"Unsatisfied version 7.5.0 of shared singleton module rxjs (required ~7.8.0)"),t(),o(),t(),n(168,"div",6),e(169,"la carga del remote falla de forma expl\xEDcita y temprana \u2014 este es el comportamiento que quieres en producci\xF3n: un error claro en vez de dos runtimes conviviendo."),t()(),n(170,"li")(171,"strong"),e(172,"Relaja la validaci\xF3n y compara"),t(),n(173,"pre"),i(),n(174,"code"),e(175,`// federation.config.js (ambos lados, solo para comparar)
...shareAll({ singleton: true, strictVersion: false, requiredVersion: 'auto' })`),t(),o(),t(),n(176,"p"),e(177,"Reconstruye y recarga: ahora carga, pero con warning en consola y riesgo real \u2014 si la API de la librer\xEDa cambi\xF3 entre versiones, el bug aparece en runtime, lejos de la causa."),t()(),n(178,"li")(179,"strong"),e(180,"Restaura y documenta la pol\xEDtica"),t(),n(181,"p"),e(182,"Vuelve a "),n(183,"code"),e(184,"~7.8.0"),t(),e(185," y a "),n(186,"code"),e(187,"strictVersion: true"),t(),e(188,". Pol\xEDtica recomendada para producci\xF3n:"),t(),n(189,"ul")(190,"li")(191,"code"),e(192,"singleton + strictVersion: true"),t(),e(193," para @angular/*, rxjs y librer\xEDas con estado global (router, store)."),t(),n(194,"li"),e(195,"Versiones alineadas entre MFEs con tooling (renovate, Nx, un solo lockfile en monorepo)."),t(),n(196,"li"),e(197,"Librer\xEDas utilitarias sin estado (date-fns, lodash-es) pueden no compartirse: duplicar unos KB es m\xE1s barato que acoplar upgrades."),t()()()()()(),n(198,"div",1)(199,"h3"),e(200,"3 \xB7 Comunicaci\xF3n por eventos con contrato versionado"),t(),n(201,"p"),e(202,' Implementa el flujo "agregar al carrito": el MFE cat\xE1logo publica un '),n(203,"code"),e(204,"CustomEvent('cart:item-added:v1')"),t(),e(205," y el shell (o el MFE carrito) se suscribe, actualiza un contador y limpia el listener al destruirse. "),t(),n(206,"ul",2)(207,"li"),e(208,"Interfaz TypeScript compartida para el detail del evento"),t(),n(209,"li"),e(210,"El publicador no importa nada del suscriptor (cero acoplamiento)"),t(),n(211,"li"),e(212,"El listener se remueve con DestroyRef.onDestroy"),t()(),n(213,"div",3),e(214,"Si necesitas comunicar pesta\xF1as distintas del navegador, cambia window.dispatchEvent por BroadcastChannel"),t(),n(215,"details",4)(216,"summary"),e(217,"Ver soluci\xF3n paso a paso"),t(),n(218,"ol",5)(219,"li")(220,"strong"),e(221,"Define el contrato del evento"),t(),n(222,"p"),e(223,"En un paquete de contratos compartido \u2014 o, si a\xFAn no lo tienes, un archivo duplicado conscientemente en cada MFE (el contrato es el nombre + shape, no el archivo):"),t(),n(224,"pre"),i(),n(225,"code"),e(226,`// shared-contracts/cart-events.ts
export const CART_ITEM_ADDED_V1 = 'cart:item-added:v1';

export interface CartItemAddedV1 {
  productId: string;
  quantity: number;
}`),t(),o(),t()(),n(227,"li")(228,"strong"),e(229,"Publica el evento desde el cat\xE1logo"),t(),n(230,"pre"),i(),n(231,"code"),e(232,`// projects/catalogo/src/app/catalogo-home/catalogo-home.ts
import { Component } from '@angular/core';
import { CART_ITEM_ADDED_V1, CartItemAddedV1 } from '../cart-events';

@Component({
  selector: 'app-catalogo-home',
  template: \`
    <h2>Cat\xE1logo</h2>
    <button (click)="addToCart('p-42')">Agregar producto 42</button>
  \`,
})
export class CatalogoHome {
  addToCart(productId: string) {
    const detail: CartItemAddedV1 = { productId, quantity: 1 };
    window.dispatchEvent(new CustomEvent(CART_ITEM_ADDED_V1, { detail }));
  }
}`),t(),o(),t()(),n(233,"li")(234,"strong"),e(235,"Suscr\xEDbete en el shell con limpieza autom\xE1tica"),t(),n(236,"pre"),i(),n(237,"code"),e(238,`// projects/shell/src/app/cart-badge.ts
import { Component, DestroyRef, NgZone, inject, signal } from '@angular/core';
import { CART_ITEM_ADDED_V1, CartItemAddedV1 } from './cart-events';

@Component({
  selector: 'app-cart-badge',
  template: \`<span>\u{1F6D2} @if (count()) { ({{ count() }}) }</span>\`,
})
export class CartBadge {
  count = signal(0);
  private zone = inject(NgZone);

  constructor() {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<CartItemAddedV1>).detail;
      // el evento nace fuera de Angular: re-entra a la zona para que la UI se actualice
      this.zone.run(() => this.count.update(c => c + detail.quantity));
    };
    window.addEventListener(CART_ITEM_ADDED_V1, handler);
    inject(DestroyRef).onDestroy(() =>
      window.removeEventListener(CART_ITEM_ADDED_V1, handler));
  }
}`),t(),o(),t()(),n(239,"li")(240,"strong"),e(241,"Monta el badge en el layout del shell"),t(),n(242,"pre"),i(),n(243,"code"),e(244,`<header>
  <a routerLink="/catalogo">Cat\xE1logo</a>
  <app-cart-badge />
</header>
<router-outlet />`),t(),o(),t(),n(245,"div",6),e(246,'haz clic en "Agregar producto 42" dentro del MFE cat\xE1logo: el contador del shell sube sin que el cat\xE1logo importe nada del shell. Navega fuera y de vuelta: no se acumulan listeners duplicados (gracias a DestroyRef).'),t()(),n(247,"li")(248,"strong"),e(249,"Evoluciona el contrato sin romper consumidores"),t(),n(250,"p"),e(251,"Si ma\xF1ana necesitas enviar tambi\xE9n el precio, NO cambies el shape de "),n(252,"code"),e(253,":v1"),t(),e(254,": publica "),n(255,"code"),e(256,"cart:item-added:v2"),t(),e(257," con el campo nuevo y emite ambos eventos durante la transici\xF3n. Cuando todos los consumidores migren a v2, retira v1."),t()()()()(),n(258,"div",1)(259,"h3"),e(260,"4 \xB7 Widget como Angular Element"),t(),n(261,"p"),e(262," Convierte un componente (un mini-carrito con contador) en un Web Component con "),n(263,"code"),e(264,"createCustomElement"),t(),e(265," y cons\xFAmelo desde una p\xE1gina HTML plana sin Angular. "),t(),n(266,"ul",2)(267,"li"),e(268,"customElements.define registra la etiqueta mfe-mini-cart"),t(),n(269,"li"),e(270,"Un input se controla v\xEDa atributo HTML"),t(),n(271,"li"),e(272,"Un output se recibe como CustomEvent con addEventListener"),t()(),n(273,"div",3),e(274,"Usa createApplication() (standalone) en vez de un NgModule: es el enfoque moderno para Elements"),t(),n(275,"details",4)(276,"summary"),e(277,"Ver soluci\xF3n paso a paso"),t(),n(278,"ol",5)(279,"li")(280,"strong"),e(281,"Crea el proyecto e instala @angular/elements"),t(),n(282,"pre"),i(),n(283,"code"),e(284,`ng new mini-cart-element --routing=false --style=css
cd mini-cart-element
npm i @angular/elements`),t(),o(),t()(),n(285,"li")(286,"strong"),e(287,"Crea el componente con input y output cl\xE1sicos"),t(),n(288,"p"),e(289,"Para Elements usa "),n(290,"code"),e(291,"@Input()/@Output()"),t(),e(292,": se mapean a atributos del custom element y a CustomEvents del DOM."),t(),n(293,"pre"),i(),n(294,"code"),e(295,`// src/app/mini-cart.ts
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-mini-cart',
  template: \`
    <div class="cart">
      \u{1F6D2} {{ count() }} \u2014 usuario: {{ userId }}
      <button (click)="add()">+</button>
    </div>
  \`,
  styles: [\`.cart { font-family: sans-serif; border: 1px solid #ccc; padding: 8px; border-radius: 6px; }\`],
})
export class MiniCart {
  @Input() userId = '';
  @Output() itemAdded = new EventEmitter<number>();
  count = signal(0);

  add() {
    this.count.update(c => c + 1);
    this.itemAdded.emit(this.count());
  }
}`),t(),o(),t()(),n(296,"li")(297,"strong"),e(298,"Reemplaza el bootstrap por el registro del elemento"),t(),n(299,"pre"),i(),n(300,"code"),e(301,`// src/main.ts
import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { MiniCart } from './app/mini-cart';

(async () => {
  const app = await createApplication({ providers: [] });
  const element = createCustomElement(MiniCart, { injector: app.injector });
  customElements.define('mfe-mini-cart', element);
})();`),t(),o(),t()(),n(302,"li")(303,"strong"),e(304,"Compila a un solo bundle"),t(),n(305,"pre"),i(),n(306,"code"),e(307,"ng build --output-hashing=none"),t(),o(),t(),n(308,"p"),e(309,"En "),n(310,"code"),e(311,"dist/mini-cart-element/browser/"),t(),e(312," quedan "),n(313,"code"),e(314,"main.js"),t(),e(315," y "),n(316,"code"),e(317,"polyfills.js"),t(),e(318," con nombres estables (sin hash), listos para servirse desde un CDN."),t()(),n(319,"li")(320,"strong"),e(321,"Cons\xFAmelo desde HTML plano"),t(),n(322,"pre"),i(),n(323,"code"),e(324,`<!-- demo.html (fuera de Angular) -->
<!DOCTYPE html>
<html>
<body>
  <h1>P\xE1gina sin Angular</h1>

  <mfe-mini-cart user-id="42"></mfe-mini-cart>

  <script src="dist/mini-cart-element/browser/polyfills.js" type="module"><\/script>
  <script src="dist/mini-cart-element/browser/main.js" type="module"><\/script>
  <script>
    const cart = document.querySelector('mfe-mini-cart');
    cart.addEventListener('itemAdded', (e) => {
      console.log('items en el carrito:', e.detail);
    });
  <\/script>
</body>
</html>`),t(),o(),t(),n(325,"p"),e(326,"S\xEDrvelo con cualquier servidor est\xE1tico:"),t(),n(327,"pre"),i(),n(328,"code"),e(329,`npx http-server . -p 8080
# abre http://localhost:8080/demo.html`),t(),o(),t(),n(330,"div",6),e(331,"el widget renderiza, el atributo kebab-case "),n(332,"code"),e(333,"user-id"),t(),e(334," llena el @Input() camelCase "),n(335,"code"),e(336,"userId"),t(),e(337,', y cada clic en "+" dispara el CustomEvent '),n(338,"code"),e(339,"itemAdded"),t(),e(340," que ves en la consola del navegador."),t()()()()(),n(341,"div",1)(342,"h3"),e(343,"5 \xB7 Routing shell \u2194 remote y deep linking"),t(),n(344,"p"),e(345," Asegura que las rutas internas del remote funcionen con deep linking: recargar "),n(346,"code"),e(347,"/catalogo/producto/42"),t(),e(348," directamente en el navegador debe restaurar la vista exacta. "),t(),n(349,"ul",2)(350,"li"),e(351,"El remote define rutas hijas relativas (sin hardcodear el prefijo /catalogo)"),t(),n(352,"li"),e(353,"Recargar una URL profunda funciona (fallback del servidor a index.html)"),t(),n(354,"li"),e(355,"La navegaci\xF3n entre MFEs no recarga la p\xE1gina completa"),t()(),n(356,"div",3),e(357,"El remote nunca debe conocer su prefijo: el shell decide d\xF3nde montarlo \u2014 as\xED puedes moverlo de /catalogo a /tienda sin tocar el remote"),t(),n(358,"details",4)(359,"summary"),e(360,"Ver soluci\xF3n paso a paso"),t(),n(361,"ol",5)(362,"li")(363,"strong"),e(364,"Agrega una ruta con par\xE1metro al remote (siempre relativa)"),t(),n(365,"pre"),i(),n(366,"code"),e(367,"ng generate component producto-detalle --project catalogo"),t(),o(),t(),n(368,"pre"),i(),n(369,"code"),e(370,`// projects/catalogo/src/app/catalogo.routes.ts
export const CATALOGO_ROUTES: Routes = [
  { path: '', component: CatalogoHome },
  { path: 'producto/:id', component: ProductoDetalle },  // SIN prefijo /catalogo
];`),t(),o(),t()(),n(371,"li")(372,"strong"),e(373,"Lee el par\xE1metro con input binding del router"),t(),n(374,"pre"),i(),n(375,"code"),e(376,`// projects/catalogo/src/app/producto-detalle/producto-detalle.ts
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-producto-detalle',
  template: \`<h2>Producto {{ id() }}</h2>\`,
})
export class ProductoDetalle {
  id = input.required<string>();   // llega desde :id
}`),t(),o(),t(),n(377,"p"),e(378,"Activa el binding en la config del shell (quien crea el router):"),t(),n(379,"pre"),i(),n(380,"code"),e(381,`// projects/shell/src/app/app.config.ts
provideRouter(routes, withComponentInputBinding())`),t(),o(),t()(),n(382,"li")(383,"strong"),e(384,"Navega dentro del remote con rutas relativas"),t(),n(385,"pre"),i(),n(386,"code"),e(387,`<!-- catalogo-home.html -->
<a [routerLink]="['producto', '42']">Ver producto 42</a>`),t(),o(),t(),n(388,"p"),e(389,"Al ser relativa, la URL final es "),n(390,"code"),e(391,"/catalogo/producto/42"),t(),e(392," porque el shell mont\xF3 el remote bajo "),n(393,"code"),e(394,"catalogo"),t(),e(395," \u2014 si ma\xF1ana lo monta en "),n(396,"code"),e(397,"tienda"),t(),e(398,", nada del remote cambia."),t()(),n(399,"li")(400,"strong"),e(401,"Prueba el deep linking en dev"),t(),n(402,"div",6),e(403,"pega http://localhost:4200/catalogo/producto/42 directo en el navegador y recarga. ng serve ya hace fallback a index.html, as\xED que debe restaurar la vista exacta: initFederation carga el manifest \u2192 el router resuelve /catalogo \u2192 loadRemoteModule trae las rutas \u2192 se renderiza producto/42."),t()(),n(404,"li")(405,"strong"),e(406,"Configura el fallback en el servidor real"),t(),n(407,"p"),e(408,"En producci\xF3n el servidor debe devolver index.html para cualquier ruta desconocida:"),t(),n(409,"pre"),i(),n(410,"code"),e(411,`# nginx
location / {
  try_files $uri $uri/ /index.html;
}`),t(),o(),t(),n(412,"p"),e(413,"En GitHub Pages el equivalente es el truco del "),n(414,"code"),e(415,"404.html"),t(),e(416," que redirige al index (este mismo repo lo usa en "),n(417,"code"),e(418,"public/404.html"),t(),e(419,")."),t()(),n(420,"li")(421,"strong"),e(422,"Verifica que navegar entre MFEs es SPA pura"),t(),n(423,"div",6),e(424,'con DevTools \u2192 Network abierto y "Preserve log" activado, navega dashboard \u2192 cat\xE1logo \u2192 producto \u2192 atr\xE1s. No debe aparecer ning\xFAn document request nuevo: solo chunks JS lazy. Si ves recargas completas, alg\xFAn enlace usa href en vez de routerLink.'),t()()()()(),n(425,"div",1)(426,"h3"),e(427,"6 \xB7 Pipeline de deploy independiente"),t(),n(428,"p"),e(429," Dise\xF1a el CI/CD para shell + 2 remotes: cada repo despliega su propio bundle a un CDN y el shell resuelve las URLs v\xEDa manifest por entorno, sin recompilarse. "),t(),n(430,"ul",2)(431,"li"),e(432,"Cada MFE tiene pipeline propio (build, test, deploy a su carpeta del CDN)"),t(),n(433,"li"),e(434,"El manifest de staging/prod apunta a versiones inmutables (hash o semver)"),t(),n(435,"li"),e(436,"Hay estrategia de rollback: volver a la versi\xF3n anterior editando solo el manifest"),t()(),n(437,"div",3),e(438,"Publica cada versi\xF3n del remote en una ruta inmutable (p. ej. /catalogo/1.4.2/remoteEntry.json) y haz que el manifest sea lo \xFAnico mutable"),t(),n(439,"details",4)(440,"summary"),e(441,"Ver soluci\xF3n paso a paso"),t(),n(442,"ol",5)(443,"li")(444,"strong"),e(445,"Define el layout del CDN (rutas inmutables por versi\xF3n)"),t(),n(446,"pre"),i(),n(447,"code"),e(448,`cdn.miapp.com/
\u251C\u2500\u2500 shell/                        # se sirve como sitio ra\xEDz
\u251C\u2500\u2500 catalogo/1.4.1/remoteEntry.json
\u251C\u2500\u2500 catalogo/1.4.2/remoteEntry.json   \u2190 versi\xF3n nueva, conviven ambas
\u251C\u2500\u2500 carrito/2.0.0/remoteEntry.json
\u2514\u2500\u2500 config/
    \u251C\u2500\u2500 staging.manifest.json     # lo \xDANICO mutable
    \u2514\u2500\u2500 prod.manifest.json`),t(),o(),t()(),n(449,"li")(450,"strong"),e(451,"Pipeline de cada remote (uno por repo/equipo)"),t(),n(452,"pre"),i(),n(453,"code"),e(454,`# .github/workflows/deploy-catalogo.yml
name: Deploy catalogo
on:
  push:
    tags: ['v*']          # deploy por tag semver \u2192 versi\xF3n inmutable
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 'lts/*' }
      - run: npm ci
      - run: npm test
      - run: npx ng build catalogo
      - name: Upload versi\xF3n inmutable al CDN
        run: |
          VERSION=\${GITHUB_REF_NAME#v}
          aws s3 sync dist/catalogo/browser \\
            s3://cdn-miapp/catalogo/$VERSION/ --cache-control "public,max-age=31536000,immutable"`),t(),o(),t()(),n(455,"li")(456,"strong"),e(457,"Promoci\xF3n a un entorno = editar solo el manifest"),t(),n(458,"pre"),i(),n(459,"code"),e(460,`# config/staging.manifest.json (staging prueba la 1.4.2)
{
  "catalogo": "https://cdn.miapp.com/catalogo/1.4.2/remoteEntry.json",
  "carrito":  "https://cdn.miapp.com/carrito/2.0.0/remoteEntry.json"
}

# config/prod.manifest.json (prod sigue en 1.4.1 hasta validar)
{
  "catalogo": "https://cdn.miapp.com/catalogo/1.4.1/remoteEntry.json",
  "carrito":  "https://cdn.miapp.com/carrito/2.0.0/remoteEntry.json"
}`),t(),o(),t(),n(461,"p"),e(462,"La promoci\xF3n puede ser un job manual (workflow_dispatch) que sobreescribe el manifest del entorno con la versi\xF3n aprobada \u2014 con "),n(463,"code"),e(464,"max-age"),t(),e(465," corto o no-cache en ese archivo."),t()(),n(466,"li")(467,"strong"),e(468,"El shell se construye UNA vez y lee el manifest de su entorno"),t(),n(469,"pre"),i(),n(470,"code"),e(471,"// main.ts del shell\nconst env = (window as any).ENV ?? 'prod';   // inyectado por el server o meta tag\ninitFederation(`https://cdn.miapp.com/config/${env}.manifest.json`)\n  .then(() => import('./bootstrap'));"),t(),o(),t(),n(472,"p"),e(473,"As\xED el mismo artefacto del shell corre en staging y prod: cero rebuilds para promover remotes."),t()(),n(474,"li")(475,"strong"),e(476,"Rollback en segundos"),t(),n(477,"pre"),i(),n(478,"code"),e(479,`# catalogo 1.4.2 rompi\xF3 prod \u2192 revertir = apuntar el manifest a la anterior
"catalogo": "https://cdn.miapp.com/catalogo/1.4.1/remoteEntry.json"`),t(),o(),t(),n(480,"div",6),e(481,"el rollback no compila ni despliega nada: es un cambio de un JSON. Las versiones anteriores siguen en el CDN porque las rutas son inmutables. Mide el tiempo total: debe ser menor a 1 minuto incluyendo la invalidaci\xF3n de cach\xE9 del manifest."),t()(),n(482,"li")(483,"strong"),e(484,"Guardas de calidad antes de promover"),t(),n(485,"ul")(486,"li"),e(487,"Smoke E2E del shell en staging apuntando a la versi\xF3n candidata (contract testing cross-MFE)."),t(),n(488,"li"),e(489,"El manifest de prod solo lo modifica el pipeline de promoci\xF3n (nunca a mano) \u2014 queda auditado en git."),t(),n(490,"li"),e(491,"Alerta si un remote en prod tiene m\xE1s de N versiones de distancia con main."),t()()()()()()())},styles:['[_nghost-%COMP%]{display:block;padding:1rem 0}.cards[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.card[_ngcontent-%COMP%]{background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:1.2rem}.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 .4rem;font-size:1.05rem}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--text-muted);line-height:1.6;margin:0 0 .6rem}.criteria[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0 0 .6rem}.criteria[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2705  "}.criteria[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:var(--text-muted);padding:.15rem 0;font-size:.9rem}.tip[_ngcontent-%COMP%]{border-left:3px solid var(--accent-green);background:#3fb95014;padding:.6rem .8rem;border-radius:0 6px 6px 0;font-size:.88rem;color:var(--text-muted)}.tip[_ngcontent-%COMP%]:before{content:"\\1f4a1  "}details.solution[_ngcontent-%COMP%]{border:1px solid var(--border);border-radius:6px;padding:.5rem .8rem;margin:.6rem 0 0}details.solution[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]{cursor:pointer;font-weight:600;font-size:.9rem}details.solution[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], details.solution[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:.5rem 0 .2rem;color:var(--text-muted);font-size:.9rem;line-height:1.6}details.solution[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:1.3rem}.steps[_ngcontent-%COMP%]{counter-reset:step;list-style:none;padding:0;margin:.6rem 0 .2rem}.steps[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:step;position:relative;padding:.4rem 0 .6rem 2.2rem;color:var(--text-muted);font-size:.9rem;line-height:1.6}.steps[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:counter(step);position:absolute;left:0;top:.45rem;width:1.5rem;height:1.5rem;border-radius:50%;background:var(--accent-purple, #a371f7);color:#fff;font-size:.78rem;font-weight:700;display:flex;align-items:center;justify-content:center}.steps[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--text);display:block;margin-bottom:.2rem}.steps[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{margin:.4rem 0 .2rem}pre[_ngcontent-%COMP%]{background:var(--bg-code, #161b22);border:1px solid var(--border);border-radius:6px;padding:.8rem;overflow-x:auto;font-size:.83rem;line-height:1.5}code[_ngcontent-%COMP%]{color:var(--text)}.check[_ngcontent-%COMP%]{border-left:3px solid #58a6ff;background:#58a6ff14;padding:.5rem .8rem;border-radius:0 6px 6px 0;font-size:.86rem;color:var(--text-muted);margin:.4rem 0 .2rem}.check[_ngcontent-%COMP%]:before{content:"\\1f50e  Verifica: ";font-weight:600;color:var(--text)}']})};export{r as MfeExercisesComponent};
