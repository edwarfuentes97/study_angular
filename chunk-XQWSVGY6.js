import{Gb as t,Hb as n,Zb as e,fb as d,sa as o,ta as i}from"./chunk-G73V3KC4.js";import"./chunk-2NFLSA4Y.js";var m=class r{static \u0275fac=function(a){return new(a||r)};static \u0275cmp=d({type:r,selectors:[["app-mfe-examples"]],decls:113,vars:0,consts:[[1,"cards"],["id","ejemplo-native-federation-remote",1,"card"],[1,"note"],["id","ejemplo-native-federation-shell",1,"card"],["id","ejemplo-module-federation-webpack",1,"card"],["id","ejemplo-angular-elements",1,"card"],["id","ejemplo-comunicacion-event-bus",1,"card"]],template:function(a,s){a&1&&(t(0,"div",0)(1,"div",1)(2,"h3"),e(3,"\u{1F4A1} 1 \xB7 Native Federation \u2014 configurar un remote (Angular 17+)"),n(),t(4,"p"),e(5," El remote expone rutas o componentes para que el shell los cargue en runtime. Instalaci\xF3n: "),t(6,"code"),e(7,"ng add @angular-architects/native-federation --type remote --port 4201"),n()(),t(8,"h4"),e(9,'federation.config.js (remote "catalogo")'),n(),t(10,"pre"),i(),t(11,"code"),e(12,`const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'catalogo',

  exposes: {
    // clave p\xFAblica \u2192 archivo interno que se expone
    './routes': './src/app/catalogo/catalogo.routes.ts',
  },

  shared: {
    // comparte todas las deps con singleton para evitar
    // dos instancias de Angular/RxJS en memoria
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  skip: [
    'rxjs/ajax', 'rxjs/fetch', 'rxjs/testing', 'rxjs/webSocket', // no usados
  ],
});`),n(),o(),n(),t(13,"div",2)(14,"code"),e(15,"strictVersion: true"),n(),e(16," falla r\xE1pido y expl\xEDcito si el shell y el remote piden versiones incompatibles de una dependencia singleton \u2014 mejor un error claro al cargar que un bug silencioso en runtime. "),n()(),t(17,"div",3)(18,"h3"),e(19,"\u{1F4A1} 2 \xB7 Native Federation \u2014 el shell carga el remote"),n(),t(20,"h4"),e(21,"main.ts del shell \u2014 inicializar la federaci\xF3n ANTES de arrancar Angular"),n(),t(22,"pre"),i(),t(23,"code"),e(24,`import { initFederation } from '@angular-architects/native-federation';

// el manifest se resuelve por entorno (dev/staging/prod)
initFederation('/assets/federation.manifest.json')
  .catch(err => console.error(err))
  .then(() => import('./bootstrap'))   // bootstrap.ts hace el bootstrapApplication real
  .catch(err => console.error(err));`),n(),o(),n(),t(25,"h4"),e(26,"federation.manifest.json \u2014 un JSON por entorno, sin recompilar"),n(),t(27,"pre"),i(),t(28,"code"),e(29,`{
  "catalogo": "http://localhost:4201/remoteEntry.json",
  "carrito":  "http://localhost:4202/remoteEntry.json"
}`),n(),o(),n(),t(30,"h4"),e(31,"app.routes.ts del shell \u2014 ruta lazy hacia el remote"),n(),t(32,"pre"),i(),t(33,"code"),e(34,`import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: 'catalogo',
    loadChildren: () =>
      loadRemoteModule('catalogo', './routes').then(m => m.CATALOGO_ROUTES),
  },
];`),n(),o(),n(),t(35,"div",2),e(36," En producci\xF3n solo cambias el manifest (por ejemplo con un "),t(37,"code"),e(38,"envsubst"),n(),e(39," en el pipeline): el mismo build del shell apunta a los remotes de cada entorno. "),n()(),t(40,"div",4)(41,"h3"),e(42,"\u{1F4A1} 3 \xB7 Module Federation cl\xE1sico (webpack 5)"),n(),t(43,"p"),e(44," El equivalente con webpack (proyectos Angular \u226416 o mixtos React/Vue). Mismos conceptos: "),t(45,"code"),e(46,"remotes"),n(),e(47," en el host, "),t(48,"code"),e(49,"exposes"),n(),e(50," en el remote, "),t(51,"code"),e(52,"shared"),n(),e(53," en ambos. "),n(),t(54,"h4"),e(55,"webpack.config.js \u2014 HOST"),n(),t(56,"pre"),i(),t(57,"code"),e(58,`const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        // alias \u2192 nombreRemote@URL del remoteEntry
        catalogo: 'catalogo@http://localhost:4201/remoteEntry.js',
      },
      shared: {
        '@angular/core':   { singleton: true, strictVersion: true },
        '@angular/router': { singleton: true, strictVersion: true },
        rxjs:              { singleton: true },
      },
    }),
  ],
};`),n(),o(),n(),t(59,"h4"),e(60,"webpack.config.js \u2014 REMOTE"),n(),t(61,"pre"),i(),t(62,"code"),e(63,`new ModuleFederationPlugin({
  name: 'catalogo',
  filename: 'remoteEntry.js',
  exposes: {
    './Routes': './src/app/catalogo/catalogo.routes.ts',
  },
  shared: { /* misma config de singletons que el host */ },
})`),n(),o(),n()(),t(64,"div",5)(65,"h3"),e(66,"\u{1F4A1} 4 \xB7 Angular Elements \u2014 MFE como Web Component"),n(),t(67,"p"),e(68," Empaquetar un componente como custom element crea una frontera framework-agn\xF3stica: el shell (aunque sea React, Vue o HTML plano) solo conoce la etiqueta. "),n(),t(69,"pre"),i(),t(70,"code"),e(71,`// main.ts del microfrontend
import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { MiniCartComponent } from './app/mini-cart.component';

(async () => {
  const app = await createApplication({ providers: [] });
  const MiniCartElement = createCustomElement(MiniCartComponent, {
    injector: app.injector,
  });
  customElements.define('mfe-mini-cart', MiniCartElement);
})();`),n(),o(),n(),t(72,"h4"),e(73,"Consumo desde cualquier shell"),n(),t(74,"pre"),i(),t(75,"code"),e(76,`<script src="https://cdn.miapp.com/mini-cart/main.js"><\/script>

<mfe-mini-cart user-id="42"></mfe-mini-cart>`),n(),o(),n(),t(77,"div",2),e(78," Los "),t(79,"code"),e(80,"@Input()"),n(),e(81," se vuelven atributos/propiedades del elemento y los "),t(82,"code"),e(83,"@Output()"),n(),e(84," se emiten como "),t(85,"code"),e(86,"CustomEvent"),n(),e(87," \u2014 ese es el contrato p\xFAblico del MFE. "),n()(),t(88,"div",6)(89,"h3"),e(90,"\u{1F4A1} 5 \xB7 Comunicaci\xF3n desacoplada \u2014 CustomEvent como event bus"),n(),t(91,"p"),e(92," Los MFEs no deben importarse entre s\xED ni compartir un Store: se comunican con eventos tipados sobre "),t(93,"code"),e(94,"window"),n(),e(95," (o "),t(96,"code"),e(97,"BroadcastChannel"),n(),e(98," entre pesta\xF1as). "),n(),t(99,"pre"),i(),t(100,"code"),e(101,`// contrato compartido y versionado (npm package ligero o d.ts duplicado)
export interface CartItemAddedV1 {
  productId: string;
  quantity: number;
}

// MFE Cat\xE1logo \u2014 publica
window.dispatchEvent(new CustomEvent<CartItemAddedV1>('cart:item-added:v1', {
  detail: { productId: 'p-42', quantity: 1 },
}));

// MFE Carrito \u2014 se suscribe (y limpia al destruirse)
const handler = (e: Event) => {
  const detail = (e as CustomEvent<CartItemAddedV1>).detail;
  this.cart.add(detail.productId, detail.quantity);
};
window.addEventListener('cart:item-added:v1', handler);
inject(DestroyRef).onDestroy(() =>
  window.removeEventListener('cart:item-added:v1', handler));`),n(),o(),n(),t(102,"div",2),e(103," El sufijo "),t(104,"code"),e(105,":v1"),n(),e(106," en el nombre del evento permite evolucionar el contrato sin romper a los consumidores: publicas "),t(107,"code"),e(108,":v2"),n(),e(109," y mantienes "),t(110,"code"),e(111,":v1"),n(),e(112," un tiempo. "),n()()())},styles:['[_nghost-%COMP%]{display:block;padding:1rem 0}.cards[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.card[_ngcontent-%COMP%]{background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:1.2rem}.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 .6rem;font-size:1.1rem}.card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:1.2rem 0 .5rem;font-size:.98rem}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--text-muted);line-height:1.6;margin:0 0 .8rem}.card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{color:var(--text-muted);line-height:1.6;margin:0 0 .8rem;padding-left:1.3rem}pre[_ngcontent-%COMP%]{background:var(--bg-code, #161b22);border:1px solid var(--border);border-radius:6px;padding:.8rem;overflow-x:auto;font-size:.85rem;line-height:1.5}code[_ngcontent-%COMP%]{color:var(--text)}.note[_ngcontent-%COMP%]{border-left:3px solid var(--accent-green);background:#3fb95014;padding:.6rem .8rem;border-radius:0 6px 6px 0;font-size:.88rem;color:var(--text-muted);margin:0 0 .8rem}.note[_ngcontent-%COMP%]:before{content:"\\1f4a1  "}']})};export{m as MfeExamplesComponent};
