import{a as r}from"./chunk-WXOJIICE.js";import"./chunk-BKIDS2JO.js";import{Db as n,Eb as t,Zb as e,fb as o}from"./chunk-G73V3KC4.js";import"./chunk-2NFLSA4Y.js";var l=class a{static \u0275fac=function(i){return new(i||a)};static \u0275cmp=o({type:a,selectors:[["app-mfe-learn"]],decls:1173,vars:0,consts:[["appAutoGlossary","",1,"cards"],["id","1-que-son-los-microfrontends",1,"card"],[1,"warn"],[1,"interview"],["id","2-estrategias-de-integracion",1,"card"],["id","3-module-federation-webpack",1,"card"],["id","4-native-federation",1,"card"],["id","5-single-spa",1,"card"],["id","6-web-components-angular-elements",1,"card"],["id","7-comunicacion-entre-microfrontends",1,"card"],["id","8-routing-shell-remotes",1,"card"],["id","9-dependencias-compartidas-versionado",1,"card"],["id","10-deploy-independiente-cicd",1,"card"],["id","11-monorepo-vs-polyrepo",1,"card"],["id","12-testing-de-microfrontends",1,"card"]],template:function(i,s){i&1&&(n(0,"div",0)(1,"div",1)(2,"h3"),e(3,"1 \xB7 \xBFQu\xE9 son los microfrontends?"),t(),n(4,"p"),e(5," Los "),n(6,"strong"),e(7,"microfrontends"),t(),e(8," (MFE) extienden la idea de los microservicios al frontend: en lugar de una \xFAnica SPA monol\xEDtica, la aplicaci\xF3n se compone de "),n(9,"strong"),e(10,"piezas independientes"),t(),e(11,", cada una desarrollada, testeada y desplegada por un equipo aut\xF3nomo. Un "),n(12,"strong"),e(13,"shell"),t(),e(14," (tambi\xE9n llamado host o contenedor) orquesta la carga de cada pieza en runtime. "),t(),n(15,"p"),e(16," La motivaci\xF3n principal "),n(17,"strong"),e(18,"no es t\xE9cnica, es organizacional"),t(),e(19,": cuando 5+ equipos trabajan sobre el mismo repositorio frontend, los merges se vuelven dolorosos, los releases se bloquean entre s\xED y un bug de un equipo detiene el deploy de todos. Los MFE alinean la arquitectura con la estructura de equipos (Ley de Conway) y permiten "),n(20,"strong"),e(21,"deploys independientes"),t(),e(22,". "),t(),n(23,"pre")(24,"code"),e(25,`\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502                    Shell (host)                      \u2502
\u2502  header \xB7 navegaci\xF3n \xB7 auth \xB7 orquestaci\xF3n de MFEs   \u2502
\u2502                                                      \u2502
\u2502  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502
\u2502  \u2502  MFE Cat\xE1logo  \u2502 \u2502  MFE Carrito  \u2502 \u2502 MFE Pagos \u2502  \u2502
\u2502  \u2502  Equipo A      \u2502 \u2502  Equipo B     \u2502 \u2502 Equipo C  \u2502  \u2502
\u2502  \u2502  deploy propio \u2502 \u2502  deploy propio\u2502 \u2502 deploy    \u2502  \u2502
\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
Cada MFE: repo/carpeta propia \xB7 pipeline propio \xB7 release propio`),t()(),n(26,"h4"),e(27,"Monolito frontend vs microfrontends"),t(),n(28,"table")(29,"thead")(30,"tr")(31,"th"),e(32,"Aspecto"),t(),n(33,"th"),e(34,"SPA monol\xEDtica"),t(),n(35,"th"),e(36,"Microfrontends"),t()()(),n(37,"tbody")(38,"tr")(39,"td"),e(40,"Deploy"),t(),n(41,"td"),e(42,"Todo o nada, releases coordinados"),t(),n(43,"td"),e(44,"Independiente por equipo"),t()(),n(45,"tr")(46,"td"),e(47,"Ownership"),t(),n(48,"td"),e(49,"Difuso, c\xF3digo compartido por todos"),t(),n(50,"td"),e(51,"Claro: un equipo, un dominio"),t()(),n(52,"tr")(53,"td"),e(54,"Complejidad operativa"),t(),n(55,"td"),e(56,"Baja (un build, un pipeline)"),t(),n(57,"td"),e(58,"Alta (N pipelines, versionado, manifest)"),t()(),n(59,"tr")(60,"td"),e(61,"Consistencia UX"),t(),n(62,"td"),e(63,"Natural (mismo c\xF3digo)"),t(),n(64,"td"),e(65,"Requiere design system compartido"),t()(),n(66,"tr")(67,"td"),e(68,"Peso del bundle"),t(),n(69,"td"),e(70,"Optimizable globalmente"),t(),n(71,"td"),e(72,"Riesgo de duplicar dependencias"),t()(),n(73,"tr")(74,"td"),e(75,"Onboarding"),t(),n(76,"td"),e(77,"Un solo proyecto que entender"),t(),n(78,"td"),e(79,"Cada MFE es peque\xF1o y enfocado"),t()()()(),n(80,"h4"),e(81,"Cu\xE1ndo S\xCD usar microfrontends"),t(),n(82,"ul")(83,"li"),e(84,"Varios equipos (3+) con dominios de negocio bien separados (cat\xE1logo, checkout, cuenta\u2026)."),t(),n(85,"li"),e(86,"Necesitas "),n(87,"strong"),e(88,"ciclos de release independientes"),t(),e(89,": un equipo despliega a diario, otro cada mes."),t(),n(90,"li"),e(91,"Migraci\xF3n incremental: convivir con un legacy (AngularJS, jQuery) mientras migras por partes."),t(),n(92,"li"),e(93,"Distintas partes de la app tienen ciclos de vida o stacks distintos y eso est\xE1 justificado."),t()(),n(94,"h4"),e(95,"Cu\xE1ndo NO (trade-offs honestos)"),t(),n(96,"ul")(97,"li"),e(98,"Un solo equipo o una app peque\xF1a/mediana: los MFE a\xF1aden "),n(99,"strong"),e(100,"complejidad operacional"),t(),e(101," (infra, versionado, debugging distribuido) sin devolver nada a cambio."),t(),n(102,"li"),e(103,"Si la UX exige transiciones y estado \xEDntimamente compartidos entre secciones: la frontera de MFE se vuelve artificial y acabar\xE1s acopl\xE1ndolos."),t(),n(104,"li"),e(105,"Presupuesto de performance estricto: la "),n(106,"strong"),e(107,"duplicaci\xF3n de dependencias"),t(),e(108," y la carga remota tienen coste real en KB y latencia."),t(),n(109,"li"),e(110,"Sin design system maduro, la "),n(111,"strong"),e(112,"consistencia visual"),t(),e(113," se degrada r\xE1pido entre equipos."),t()(),n(114,"div",2)(115,"strong"),e(116,"\u26A0\uFE0F Errores comunes"),t(),n(117,"ul")(118,"li"),e(119,'Adoptar MFE "porque lo hace Netflix" sin tener el problema organizacional que resuelven.'),t(),n(120,"li"),e(121,"Cortar los MFE por capas t\xE9cnicas (header-MFE, footer-MFE) en vez de por "),n(122,"strong"),e(123,"dominios de negocio"),t(),e(124,"."),t(),n(125,"li"),e(126,"Convertir el shell en un mini-monolito con l\xF3gica de negocio de todos los equipos."),t(),n(127,"li"),e(128,"Ignorar el coste de mantener N pipelines, N repos y N versiones de Angular sincronizadas."),t()()(),n(129,"div",3)(130,"strong"),e(131,"\u{1F3A4} Preguntas de entrevista"),t(),n(132,"ul")(133,"li"),e(134,"\xBFQu\xE9 problema resuelven los microfrontends y cu\xE1l es su coste? (Respuesta esperada: autonom\xEDa de equipos y deploy independiente, a cambio de complejidad operativa y riesgo de inconsistencia UX.)"),t(),n(135,"li"),e(136,"\xBFC\xF3mo decidir\xEDas las fronteras entre microfrontends? (Por dominio de negocio / bounded context, nunca por conveniencia t\xE9cnica.)"),t(),n(137,"li"),e(138,"\xBFEn qu\xE9 escenario recomendar\xEDas NO usar MFE aunque el equipo lo pida?"),t()()()(),n(139,"div",4)(140,"h3"),e(141,"2 \xB7 Estrategias de integraci\xF3n"),t(),n(142,"p"),e(143," Hay varias formas de componer microfrontends en una sola experiencia. La decisi\xF3n clave es "),n(144,"strong"),e(145,"cu\xE1ndo"),t(),e(146," ocurre la composici\xF3n: en build, en el servidor o en el navegador. "),t(),n(147,"h4"),e(148,"1. Build-time \u2014 paquetes npm"),t(),n(149,"p"),e(150,' Cada "MFE" se publica como paquete npm y el shell los instala como dependencias. Es lo m\xE1s simple, pero '),n(151,"strong"),e(152,"no es un microfrontend real"),t(),e(153,": cualquier cambio exige rebuild y redeploy del shell, perdiendo el deploy independiente. "),t(),n(154,"pre")(155,"code"),e(156,`// package.json del shell \u2014 composici\xF3n en build-time
{
  "dependencies": {
    "@acme/mfe-catalog": "^2.1.0",   // \u2190 nueva versi\xF3n \u21D2 rebuild del shell
    "@acme/mfe-checkout": "^1.4.0"
  }
}`),t()(),n(157,"h4"),e(158,"2. Run-time en el cliente \u2014 Module Federation / import maps"),t(),n(159,"p"),e(160," El shell descarga los remotes "),n(161,"strong"),e(162,"en el navegador, en runtime"),t(),e(163,". Es el enfoque dominante hoy: Module Federation (webpack/rspack), Native Federation (esbuild) o "),n(164,"strong"),e(165,"import maps"),t(),e(166," nativos del navegador con m\xF3dulos ES. "),t(),n(167,"pre")(168,"code"),e(169,`<!-- index.html \u2014 import map nativo del navegador -->
<script type="importmap">
{
  "imports": {
    "catalog/": "https://cdn.acme.com/catalog/v3/",
    "checkout/": "https://cdn.acme.com/checkout/v7/"
  }
}
<\/script>

<script type="module">
  // El navegador resuelve la URL usando el import map
  const { mount } = await import('catalog/bootstrap.js');
  mount(document.querySelector('#catalog-slot'));
<\/script>`),t()(),n(170,"h4"),e(171,"3. iframes"),t(),n(172,"p"),e(173," Aislamiento total (CSS, JS, incluso versiones de framework) y seguridad fuerte. El precio: comunicaci\xF3n inc\xF3moda ("),n(174,"code"),e(175,"postMessage"),t(),e(176,"), routing y deep-linking dif\xEDciles, problemas de tama\xF1o/foco/accesibilidad. \xDAtil para integrar apps de terceros o legacy intocable. "),t(),n(177,"h4"),e(178,"4. Server-side composition"),t(),n(179,"p"),e(180," El HTML se ensambla en el servidor o en el edge (SSI, ESI, Podium, Tailor, module federation en SSR). Excelente para performance percibida y SEO; requiere infraestructura de composici\xF3n. "),t(),n(181,"h4"),e(182,"Tabla comparativa"),t(),n(183,"table")(184,"thead")(185,"tr")(186,"th"),e(187,"Estrategia"),t(),n(188,"th"),e(189,"Deploy independiente"),t(),n(190,"th"),e(191,"Aislamiento"),t(),n(192,"th"),e(193,"Complejidad"),t(),n(194,"th"),e(195,"Ideal para"),t()()(),n(196,"tbody")(197,"tr")(198,"td"),e(199,"npm packages (build-time)"),t(),n(200,"td"),e(201,"\u274C No"),t(),n(202,"td"),e(203,"Bajo"),t(),n(204,"td"),e(205,"Baja"),t(),n(206,"td"),e(207,"Design systems, librer\xEDas compartidas"),t()(),n(208,"tr")(209,"td"),e(210,"Module/Native Federation"),t(),n(211,"td"),e(212,"\u2705 S\xED"),t(),n(213,"td"),e(214,"Medio"),t(),n(215,"td"),e(216,"Media"),t(),n(217,"td"),e(218,"SPAs Angular/React con shell com\xFAn"),t()(),n(219,"tr")(220,"td"),e(221,"Import maps + ES modules"),t(),n(222,"td"),e(223,"\u2705 S\xED"),t(),n(224,"td"),e(225,"Medio"),t(),n(226,"td"),e(227,"Media"),t(),n(228,"td"),e(229,"Stacks modernos sin bundler-lock"),t()(),n(230,"tr")(231,"td"),e(232,"iframes"),t(),n(233,"td"),e(234,"\u2705 S\xED"),t(),n(235,"td"),e(236,"Total"),t(),n(237,"td"),e(238,"Media/Alta"),t(),n(239,"td"),e(240,"Terceros, legacy, requisitos de seguridad"),t()(),n(241,"tr")(242,"td"),e(243,"Server-side composition"),t(),n(244,"td"),e(245,"\u2705 S\xED"),t(),n(246,"td"),e(247,"Medio"),t(),n(248,"td"),e(249,"Alta"),t(),n(250,"td"),e(251,"Sites con SEO/TTFB cr\xEDtico"),t()()()(),n(252,"div",2)(253,"strong"),e(254,"\u26A0\uFE0F Errores comunes"),t(),n(255,"ul")(256,"li"),e(257,'Llamar "microfrontends" a librer\xEDas npm: sin deploy independiente no hay autonom\xEDa real.'),t(),n(258,"li"),e(259,"Descartar iframes por moda: para integrar un tercero no confiable siguen siendo la opci\xF3n correcta."),t(),n(260,"li"),e(261,"Mezclar estrategias sin criterio (unos MFE por npm, otros federados) y duplicar Angular dos veces."),t()()(),n(262,"div",3)(263,"strong"),e(264,"\u{1F3A4} Preguntas de entrevista"),t(),n(265,"ul")(266,"li"),e(267,"Diferencia entre integraci\xF3n build-time y run-time, y qu\xE9 implica para el deploy."),t(),n(268,"li"),e(269,"\xBFCu\xE1ndo elegir\xEDas iframes a pesar de sus limitaciones?"),t(),n(270,"li"),e(271,"\xBFQu\xE9 son los import maps y qu\xE9 problema resuelven frente a Module Federation?"),t()()()(),n(272,"div",5)(273,"h3"),e(274,"3 \xB7 Module Federation (webpack)"),t(),n(275,"p")(276,"strong"),e(277,"Module Federation"),t(),e(278," (webpack 5) permite que una app cargue c\xF3digo de otra app "),n(279,"strong"),e(280,"compilada y desplegada por separado"),t(),e(281,", compartiendo dependencias en runtime. Dos roles: el "),n(282,"strong"),e(283,"host"),t(),e(284," (shell) consume, y el "),n(285,"strong"),e(286,"remote"),t(),e(287," expone. Un mismo build puede ser host y remote a la vez (federaci\xF3n bidireccional). "),t(),n(288,"ul")(289,"li")(290,"code"),e(291,"remotes"),t(),e(292," \u2014 qu\xE9 apps remotas consume el host y d\xF3nde est\xE1 su "),n(293,"code"),e(294,"remoteEntry.js"),t(),e(295,"."),t(),n(296,"li")(297,"code"),e(298,"exposes"),t(),e(299," \u2014 qu\xE9 m\xF3dulos publica un remote hacia el exterior."),t(),n(300,"li")(301,"code"),e(302,"shared"),t(),e(303," \u2014 dependencias que host y remotes intentan compartir en runtime."),t()(),n(304,"h4"),e(305,"webpack.config.js del remote (mfe-catalog)"),t(),n(306,"pre")(307,"code"),e(308,`const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  output: {
    // URL p\xFAblica desde la que se servir\xE1 este remote
    publicPath: 'https://cdn.acme.com/catalog/',
    uniqueName: 'catalog',            // evita colisiones de webpack runtime
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'catalog',                // nombre global del contenedor remoto
      filename: 'remoteEntry.js',     // manifiesto que descargar\xE1 el host

      // \u2500\u2500 Qu\xE9 expone este MFE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
      exposes: {
        // alias p\xFAblico            \u2192 archivo interno
        './Routes':   './src/app/catalog/catalog.routes.ts',
        './Widget':   './src/app/widget/best-sellers.component.ts',
      },

      // \u2500\u2500 Dependencias compartidas \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
      shared: {
        '@angular/core': {
          singleton: true,            // UNA sola instancia en toda la p\xE1gina
          strictVersion: true,        // error si las versiones no son compatibles
          requiredVersion: '^20.0.0', // rango que este remote necesita
        },
        '@angular/common':  { singleton: true, strictVersion: true, requiredVersion: '^20.0.0' },
        '@angular/router':  { singleton: true, strictVersion: true, requiredVersion: '^20.0.0' },
        rxjs:               { singleton: true, requiredVersion: '^7.8.0' },
      },
    }),
  ],
};`),t()(),n(309,"h4"),e(310,"webpack.config.js del host (shell)"),t(),n(311,"pre")(312,"code"),e(313,`new ModuleFederationPlugin({
  name: 'shell',
  remotes: {
    // alias local \u2192 nombreGlobal@URL del remoteEntry
    catalog:  'catalog@https://cdn.acme.com/catalog/remoteEntry.js',
    checkout: 'checkout@https://cdn.acme.com/checkout/remoteEntry.js',
  },
  shared: { /* mismas dependencias y flags que los remotes */ },
});

// En el c\xF3digo del shell \u2014 import din\xE1mico federado:
const routes = await import('catalog/Routes');   // resuelto en runtime`),t()(),n(314,"h4"),e(315,"C\xF3mo funciona "),n(316,"code"),e(317,"shared"),t()(),n(318,"ul")(319,"li")(320,"code"),e(321,"singleton: true"),t(),e(322," \u2014 obligatorio para Angular y RxJS: dos instancias de "),n(323,"code"),e(324,"@angular/core"),t(),e(325," rompen la DI y la detecci\xF3n de cambios."),t(),n(326,"li")(327,"code"),e(328,"strictVersion: true"),t(),e(329," \u2014 lanza error en runtime si el rango no se satisface; sin \xE9l, solo un warning (y bugs sutiles despu\xE9s)."),t(),n(330,"li")(331,"code"),e(332,"requiredVersion"),t(),e(333," \u2014 rango semver que cada parte declara necesitar; el runtime negocia la versi\xF3n m\xE1s alta compatible."),t(),n(334,"li")(335,"code"),e(336,"eager: true"),t(),e(337," \u2014 incluye la dependencia en el bundle inicial (evita el bootstrap as\xEDncrono, pero pierde el compartido din\xE1mico). \xDAsalo con cuidado."),t()(),n(338,"div",2)(339,"strong"),e(340,"\u26A0\uFE0F Errores comunes"),t(),n(341,"ul")(342,"li"),e(343,"Olvidar "),n(344,"code"),e(345,"singleton: true"),t(),e(346," en Angular/RxJS \u21D2 errores tipo "),n(347,"code"),e(348,"NG0203 inject() must be called from an injection context"),t(),e(349," por dos runtimes de Angular."),t(),n(350,"li"),e(351,"No usar bootstrap as\xEDncrono ("),n(352,"code"),e(353,"import('./bootstrap')"),t(),e(354," en "),n(355,"code"),e(356,"main.ts"),t(),e(357,"): webpack necesita ese salto para negociar las dependencias compartidas."),t(),n(358,"li"),e(359,"Hardcodear las URLs de remotes en el build \u21D2 imposible promover el mismo artefacto entre entornos."),t(),n(360,"li"),e(361,"Exponer componentes internos sueltos en vez de una API estable (rutas o un m\xF3dulo de entrada)."),t()()(),n(362,"div",3)(363,"strong"),e(364,"\u{1F3A4} Preguntas de entrevista"),t(),n(365,"ul")(366,"li"),e(367,"Explica host, remote, "),n(368,"code"),e(369,"exposes"),t(),e(370," y "),n(371,"code"),e(372,"shared"),t(),e(373," en Module Federation."),t(),n(374,"li"),e(375,"\xBFQu\xE9 pasa si el host pide "),n(376,"code"),e(377,"^19"),t(),e(378," y un remote fue compilado con "),n(379,"code"),e(380,"^20"),t(),e(381," de Angular y "),n(382,"code"),e(383,"strictVersion"),t(),e(384," est\xE1 activo?"),t(),n(385,"li"),e(386,"\xBFPor qu\xE9 el "),n(387,"code"),e(388,"main.ts"),t(),e(389," de una app federada suele hacer un import din\xE1mico del bootstrap?"),t()()()(),n(390,"div",6)(391,"h3"),e(392,"4 \xB7 Native Federation (@angular-architects/native-federation)"),t(),n(393,"p"),e(394," Desde Angular 17 el builder por defecto usa "),n(395,"strong"),e(396,"esbuild"),t(),e(397,", no webpack, as\xED que el plugin cl\xE1sico de Module Federation no aplica. "),n(398,"strong"),e(399,"Native Federation"),t(),e(400," reimplementa la misma idea sobre est\xE1ndares del navegador: "),n(401,"strong"),e(402,"m\xF3dulos ES + import maps"),t(),e(403,". Es la opci\xF3n recomendada para MFE con Angular moderno y es agn\xF3stica del bundler. "),t(),n(404,"pre")(405,"code"),e(406,`# Instalar y activar en cada app (shell y remotes)
npm i @angular-architects/native-federation
ng g @angular-architects/native-federation:init \\
  --project mfe-catalog --port 4201 --type remote

ng g @angular-architects/native-federation:init \\
  --project shell --port 4200 --type dynamic-host`),t()(),n(407,"h4"),e(408,"federation.config.js del remote"),t(),n(409,"pre")(410,"code"),e(411,`const { withNativeFederation, shareAll } =
  require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'mfe-catalog',

  exposes: {
    // El remote expone sus rutas como punto de entrada estable
    './routes': './src/app/catalog/catalog.routes.ts',
  },

  shared: {
    // Comparte todo lo de package.json como singleton
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',   // toma la versi\xF3n del package.json
    }),
  },

  // Paquetes que NO deben federarse (solo tipos, server-only\u2026)
  skip: ['rxjs/ajax', 'rxjs/testing'],
});`),t()(),n(412,"h4"),e(413,"Bootstrap del shell: initFederation + manifest"),t(),n(414,"pre")(415,"code"),e(416,`// main.ts del shell \u2014 inicializa la federaci\xF3n ANTES de arrancar Angular
import { initFederation } from '@angular-architects/native-federation';

initFederation('/assets/federation.manifest.json')
  .catch(err => console.error(err))
  .then(() => import('./bootstrap'))   // \u2190 bootstrap diferido obligatorio
  .catch(err => console.error(err));

// bootstrap.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig);`),t()(),n(417,"pre")(418,"code"),e(419,`// assets/federation.manifest.json \u2014 un archivo POR ENTORNO
// El shell lo carga en runtime: mismo build, distintas URLs
{
  "mfe-catalog":  "https://cdn.acme.com/catalog/remoteEntry.json",
  "mfe-checkout": "https://cdn.acme.com/checkout/remoteEntry.json"
}`),t()(),n(420,"h4"),e(421,"Rutas lazy con loadRemoteModule"),t(),n(422,"pre")(423,"code"),e(424,`// app.routes.ts del shell
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: 'catalog',
    loadChildren: () =>
      loadRemoteModule('mfe-catalog', './routes')   // (remote, expose)
        .then(m => m.CATALOG_ROUTES),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      loadRemoteModule('mfe-checkout', './routes')
        .then(m => m.CHECKOUT_ROUTES),
  },
];`),t()(),n(425,"div",2)(426,"strong"),e(427,"\u26A0\uFE0F Errores comunes"),t(),n(428,"ul")(429,"li"),e(430,"Bootstrapear Angular directamente en "),n(431,"code"),e(432,"main.ts"),t(),e(433,": el import map debe instalarse antes de que se eval\xFAe cualquier m\xF3dulo de Angular."),t(),n(434,"li"),e(435,"Apuntar el manifest a "),n(436,"code"),e(437,"remoteEntry.js"),t(),e(438," (webpack) en vez de "),n(439,"code"),e(440,"remoteEntry.json"),t(),e(441," (native federation): no son intercambiables."),t(),n(442,"li"),e(443,"Olvidar CORS en el CDN de los remotes: el shell los carga cross-origin."),t(),n(444,"li"),e(445,"Exponer decenas de componentes en vez de un \xFAnico "),n(446,"code"),e(447,"./routes"),t(),e(448,": cada expose es superficie de contrato que hay que mantener."),t()()(),n(449,"div",3)(450,"strong"),e(451,"\u{1F3A4} Preguntas de entrevista"),t(),n(452,"ul")(453,"li"),e(454,'\xBFPor qu\xE9 Module Federation "cl\xE1sico" no funciona con el builder esbuild de Angular 17+?'),t(),n(455,"li"),e(456,"\xBFQu\xE9 papel juegan los import maps en Native Federation?"),t(),n(457,"li"),e(458,"\xBFC\xF3mo apuntar\xEDas el mismo build del shell a remotes distintos en dev/staging/prod? (Manifest por entorno cargado en runtime.)"),t()()()(),n(459,"div",7)(460,"h3"),e(461,"5 \xB7 single-spa"),t(),n(462,"p")(463,"strong"),e(464,"single-spa"),t(),e(465," es un meta-framework que orquesta m\xFAltiples SPAs (Angular, React, Vue\u2026) en una misma p\xE1gina. Un "),n(466,"strong"),e(467,"root config"),t(),e(468," registra cada aplicaci\xF3n con una "),n(469,"strong"),e(470,"activity function"),t(),e(471," que decide, seg\xFAn la URL, cu\xE1ndo montarla o desmontarla. Cada app implementa el ciclo de vida "),n(472,"code"),e(473,"bootstrap / mount / unmount"),t(),e(474,". "),t(),n(475,"h4"),e(476,"Root config"),t(),n(477,"pre")(478,"code"),e(479,`// root-config.ts \u2014 el orquestador (no tiene UI propia)
import { registerApplication, start } from 'single-spa';

registerApplication({
  name: '@acme/catalog',
  app: () => System.import('@acme/catalog'),      // carga v\xEDa import map
  activeWhen: ['/catalog'],                        // activity function (prefijo)
});

registerApplication({
  name: '@acme/checkout',
  app: () => System.import('@acme/checkout'),
  // activity function expl\xEDcita: control total sobre cu\xE1ndo montar
  activeWhen: (location) =>
    location.pathname.startsWith('/checkout') &&
    !location.pathname.startsWith('/checkout/admin'),
});

start({ urlRerouteOnly: true });`),t()(),n(480,"h4"),e(481,"App Angular con single-spa-angular"),t(),n(482,"pre")(483,"code"),e(484,`// main.single-spa.ts \u2014 expone los lifecycles en vez de bootstrapear
import { singleSpaAngular } from 'single-spa-angular';

const lifecycles = singleSpaAngular({
  bootstrapFunction: (singleSpaProps) =>
    bootstrapApplication(App, appConfig),
  template: '<app-catalog-root />',
});

export const { bootstrap, mount, unmount } = lifecycles;`),t()(),n(485,"h4"),e(486,"Parcels"),t(),n(487,"p"),e(488," Un "),n(489,"strong"),e(490,"parcel"),t(),e(491," es un fragmento de UI montable manualmente (no ligado a rutas): ideal para incrustar un widget de un framework dentro de otro, por ejemplo un mapa React dentro de una p\xE1gina Angular. "),t(),n(492,"pre")(493,"code"),e(494,`import { mountRootParcel } from 'single-spa';

const parcel = mountRootParcel(
  () => System.import('@acme/react-map-widget'),
  { domElement: document.getElementById('map-slot')!, zoom: 12 }
);
// despu\xE9s: parcel.unmount()`),t()(),n(495,"h4"),e(496,"\xBFsingle-spa o Module Federation?"),t(),n(497,"table")(498,"thead")(499,"tr")(500,"th"),e(501,"Criterio"),t(),n(502,"th"),e(503,"single-spa"),t(),n(504,"th"),e(505,"Module/Native Federation"),t()()(),n(506,"tbody")(507,"tr")(508,"td"),e(509,"Orquestaci\xF3n de ciclo de vida"),t(),n(510,"td"),e(511,"\u2705 N\xFAcleo del framework"),t(),n(512,"td"),e(513,"\u274C La haces t\xFA (o el Router)"),t()(),n(514,"tr")(515,"td"),e(516,"Multi-framework"),t(),n(517,"td"),e(518,"\u2705 Pensado para ello"),t(),n(519,"td"),e(520,"\u26A0\uFE0F Posible, pero inc\xF3modo"),t()(),n(521,"tr")(522,"td"),e(523,"Compartir dependencias"),t(),n(524,"td"),e(525,"\u26A0\uFE0F Manual (import maps)"),t(),n(526,"td"),e(527,"\u2705 Negociaci\xF3n autom\xE1tica"),t()(),n(528,"tr")(529,"td"),e(530,"Integraci\xF3n con Angular Router"),t(),n(531,"td"),e(532,"\u26A0\uFE0F Requiere cuidado"),t(),n(533,"td"),e(534,"\u2705 Rutas lazy naturales"),t()()()(),n(535,"p"),e(536," Regla pr\xE1ctica: "),n(537,"strong"),e(538,"todo Angular \u21D2 Native Federation"),t(),e(539,"; "),n(540,"strong"),e(541,"mezcla real de frameworks o migraci\xF3n larga \u21D2 single-spa"),t(),e(542," (a menudo combinado con federation para cargar los bundles). "),t(),n(543,"div",2)(544,"strong"),e(545,"\u26A0\uFE0F Errores comunes"),t(),n(546,"ul")(547,"li"),e(548,"Meter UI y l\xF3gica de negocio en el root config: debe ser m\xEDnimo y aburrido."),t(),n(549,"li"),e(550,"Activity functions solapadas que montan dos apps sobre el mismo nodo DOM."),t(),n(551,"li"),e(552,"No limpiar en "),n(553,"code"),e(554,"unmount"),t(),e(555," (listeners, intervals, estilos globales) \u21D2 fugas al navegar."),t(),n(556,"li"),e(557,"Usar single-spa cuando todos los MFE son Angular: pagas la complejidad multi-framework gratis."),t()()(),n(558,"div",3)(559,"strong"),e(560,"\u{1F3A4} Preguntas de entrevista"),t(),n(561,"ul")(562,"li"),e(563,"\xBFQu\xE9 es una activity function y qu\xE9 lifecycles debe exportar una app single-spa?"),t(),n(564,"li"),e(565,"\xBFQu\xE9 diferencia hay entre una application y un parcel?"),t(),n(566,"li"),e(567,"\xBFCu\xE1ndo elegir\xEDas single-spa sobre Module Federation y viceversa?"),t()()()(),n(568,"div",8)(569,"h3"),e(570,"6 \xB7 Web Components y Angular Elements"),t(),n(571,"p"),e(572," Los "),n(573,"strong"),e(574,"custom elements"),t(),e(575," son la frontera framework-agn\xF3stica por excelencia: un MFE se publica como "),n(576,"code"),e(577,"<acme-catalog>"),t(),e(578," y cualquier host (Angular, React, HTML plano) lo consume como una etiqueta m\xE1s. "),n(579,"strong"),e(580,"Angular Elements"),t(),e(581," ("),n(582,"code"),e(583,"@angular/elements"),t(),e(584,") empaqueta un componente Angular como custom element con "),n(585,"code"),e(586,"createCustomElement"),t(),e(587,". "),t(),n(588,"pre")(589,"code"),e(590,`// main.ts del MFE publicado como Web Component
import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { CatalogWidgetComponent } from './app/catalog-widget.component';

(async () => {
  // App Angular "sin componente ra\xEDz": solo provee el injector
  const app = await createApplication({
    providers: [provideHttpClient()],
  });

  const CatalogElement = createCustomElement(CatalogWidgetComponent, {
    injector: app.injector,
  });

  // A partir de aqu\xED el navegador gestiona el ciclo de vida
  customElements.define('acme-catalog', CatalogElement);
})();`),t()(),n(591,"pre")(592,"code"),e(593,`<!-- Cualquier host lo consume sin saber que es Angular -->
<acme-catalog category="books" limit="10"></acme-catalog>

<script>
  const el = document.querySelector('acme-catalog');
  // @Input \u2192 atributo/propiedad \xB7 @Output \u2192 CustomEvent
  el.addEventListener('addToCart', (e) => {
    console.log('producto:', e.detail);
  });
<\/script>`),t()(),n(594,"h4"),e(595,"Shadow DOM y estilos"),t(),n(596,"ul")(597,"li")(598,"code"),e(599,"encapsulation: ViewEncapsulation.ShadowDom"),t(),e(600," \u2014 aislamiento real de CSS: ni tus estilos salen ni los del host entran. Ideal para MFE embebidos en p\xE1ginas ajenas."),t(),n(601,"li"),e(602,"Con Shadow DOM, los estilos globales del design system "),n(603,"strong"),e(604,"no penetran"),t(),e(605,": comparte tokens v\xEDa "),n(606,"strong"),e(607,"CSS custom properties"),t(),e(608," (s\xED atraviesan la frontera)."),t(),n(609,"li"),e(610,"La encapsulaci\xF3n "),n(611,"code"),e(612,"Emulated"),t(),e(613," (default) NO a\xEDsla de estilos globales agresivos del host; solo evita colisiones de tus propios selectores."),t(),n(614,"li"),e(615,"Cuidado con overlays (dialogs, tooltips) que se montan en "),n(616,"code"),e(617,"body"),t(),e(618,": quedan fuera del shadow root y pierden los estilos."),t()(),n(619,"div",2)(620,"strong"),e(621,"\u26A0\uFE0F Errores comunes"),t(),n(622,"ul")(623,"li"),e(624,"Definir dos veces el mismo tag \u21D2 "),n(625,"code"),e(626,"NotSupportedError"),t(),e(627,": protege con "),n(628,"code"),e(629,"if (!customElements.get('acme-catalog'))"),t(),e(630,"."),t(),n(631,"li"),e(632,"Cargar Angular completo por cada custom element en la misma p\xE1gina en vez de compartir runtime."),t(),n(633,"li"),e(634,"Pasar objetos complejos como "),n(635,"strong"),e(636,"atributos"),t(),e(637," HTML (solo strings): usa propiedades."),t(),n(638,"li"),e(639,"Asumir que Shadow DOM te da aislamiento de JavaScript: solo a\xEDsla DOM y CSS."),t()()(),n(640,"div",3)(641,"strong"),e(642,"\u{1F3A4} Preguntas de entrevista"),t(),n(643,"ul")(644,"li"),e(645,"\xBFC\xF3mo se mapean "),n(646,"code"),e(647,"@Input"),t(),e(648," y "),n(649,"code"),e(650,"@Output"),t(),e(651," en un custom element creado con Angular Elements?"),t(),n(652,"li"),e(653,"Diferencias entre encapsulaci\xF3n Emulated y ShadowDom, y c\xF3mo compartir theming a trav\xE9s de un shadow root."),t(),n(654,"li"),e(655,"\xBFQu\xE9 ventajas ofrece publicar un MFE como Web Component frente a exponer rutas federadas?"),t()()()(),n(656,"div",9)(657,"h3"),e(658,"7 \xB7 Comunicaci\xF3n entre microfrontends"),t(),n(659,"p"),e(660," Regla de oro: "),n(661,"strong"),e(662,"cuanto menos, mejor"),t(),e(663,". Si dos MFE necesitan hablar constantemente, la frontera est\xE1 mal trazada. Para lo inevitable (usuario autenticado, carrito, tema), usa mecanismos de plataforma "),n(664,"strong"),e(665,"desacoplados y tipados por contrato"),t(),e(666,", nunca imports directos entre MFEs. "),t(),n(667,"h4"),e(668,"1. Custom events \u2014 pub/sub por el DOM"),t(),n(669,"pre")(670,"code"),e(671,`// Contrato compartido (paquete npm ligero SOLO de tipos)
export interface CartItemAddedV1 {
  version: 1;                       // versionado expl\xEDcito del evento
  productId: string;
  qty: number;
}
export const CART_ITEM_ADDED = 'acme:cart:item-added';

// MFE Cat\xE1logo \u2014 publica
window.dispatchEvent(new CustomEvent<CartItemAddedV1>(CART_ITEM_ADDED, {
  detail: { version: 1, productId: 'p-42', qty: 1 },
}));

// MFE Carrito \u2014 suscribe (y limpia al destruirse)
const onAdd = (e: Event) => {
  const detail = (e as CustomEvent<CartItemAddedV1>).detail;
  if (detail.version !== 1) return;   // tolerante a versiones futuras
  this.cart.add(detail.productId, detail.qty);
};
window.addEventListener(CART_ITEM_ADDED, onAdd);
// ngOnDestroy: window.removeEventListener(CART_ITEM_ADDED, onAdd);`),t()(),n(672,"h4"),e(673,"2. BroadcastChannel \u2014 entre pesta\xF1as y contextos"),t(),n(674,"pre")(675,"code"),e(676,`// Sincronizar logout entre pesta\xF1as y MFEs
const channel = new BroadcastChannel('acme:auth');

channel.postMessage({ type: 'LOGOUT', at: Date.now() });

channel.onmessage = (msg) => {
  if (msg.data.type === 'LOGOUT') this.router.navigate(['/login']);
};
// cerrar al destruir: channel.close();`),t()(),n(677,"h4"),e(678,"3. Estado compartido m\xEDnimo en el shell"),t(),n(679,"pre")(680,"code"),e(681,`// El shell expone una API peque\xF1a y estable (no su Store interno)
export interface PlatformContext {
  user$: Observable<User | null>;      // solo lectura
  locale$: Observable<string>;
  navigate(url: string): void;
}
// Se entrega al MFE al montarlo (props / DI / window.__platform__)`),t()(),n(682,"h4"),e(683,"Por qu\xE9 NO compartir el Store"),t(),n(684,"ul")(685,"li"),e(686,"Compartir un Store NgRx entre MFEs acopla sus "),n(687,"strong"),e(688,"releases"),t(),e(689,": cambiar el shape del estado exige coordinar todos los equipos \u2014 justo lo que los MFE quer\xEDan evitar."),t(),n(690,"li"),e(691,"Los eventos son contratos "),n(692,"strong"),e(693,"peque\xF1os y versionables"),t(),e(694,"; un store es una estructura interna gigante sin fronteras."),t(),n(695,"li"),e(696,"Contrato expl\xEDcito: nombres con namespace ("),n(697,"code"),e(698,"acme:cart:*"),t(),e(699,"), payload versionado ("),n(700,"code"),e(701,"version: 1"),t(),e(702,"), documentado y con tests de contrato."),t(),n(703,"li"),e(704,"Evoluci\xF3n: agrega campos de forma retrocompatible; para breaking changes, publica "),n(705,"code"),e(706,"V2"),t(),e(707," y mant\xE9n V1 un tiempo (deprecaci\xF3n gradual)."),t()(),n(708,"div",2)(709,"strong"),e(710,"\u26A0\uFE0F Errores comunes"),t(),n(711,"ul")(712,"li"),e(713,'Importar servicios de otro MFE "porque total, est\xE1 federado": acoplamiento invisible en runtime.'),t(),n(714,"li"),e(715,"Eventos sin namespace ni versi\xF3n: colisiones y breaking changes silenciosos."),t(),n(716,"li"),e(717,"No desuscribirse de "),n(718,"code"),e(719,"window"),t(),e(720,"/"),n(721,"code"),e(722,"BroadcastChannel"),t(),e(723," en "),n(724,"code"),e(725,"ngOnDestroy"),t(),e(726," \u21D2 fugas y handlers duplicados al remontar el MFE."),t(),n(727,"li"),e(728,"Usar localStorage como bus de eventos (solo dispara "),n(729,"code"),e(730,"storage"),t(),e(731," en OTRAS pesta\xF1as)."),t()()(),n(732,"div",3)(733,"strong"),e(734,"\u{1F3A4} Preguntas de entrevista"),t(),n(735,"ul")(736,"li"),e(737,'\xBFC\xF3mo comunicar\xEDas "item a\xF1adido al carrito" del MFE cat\xE1logo al MFE carrito sin acoplarlos?'),t(),n(738,"li"),e(739,"\xBFPor qu\xE9 es mala idea compartir un Store global entre microfrontends?"),t(),n(740,"li"),e(741,"\xBFC\xF3mo versionar\xEDas un evento cuyo payload necesita un breaking change?"),t()()()(),n(742,"div",10)(743,"h3"),e(744,"8 \xB7 Routing en shell y remotes"),t(),n(745,"p"),e(746," El patr\xF3n est\xE1ndar: el "),n(747,"strong"),e(748,"shell posee el router"),t(),e(749," y asigna un "),n(750,"strong"),e(751,"prefijo de URL por MFE"),t(),e(752," ("),n(753,"code"),e(754,"/catalog/**"),t(),e(755,", "),n(756,"code"),e(757,"/checkout/**"),t(),e(758,"). Cada remote define sus rutas "),n(759,"strong"),e(760,"relativas"),t(),e(761," a ese prefijo, sin saber d\xF3nde ser\xE1 montado. As\xED el "),n(762,"strong"),e(763,"deep linking"),t(),e(764," (F5 en "),n(765,"code"),e(766,"/catalog/products/42"),t(),e(767,") funciona: el shell resuelve el prefijo, carga el remote y este resuelve el resto. "),t(),n(768,"pre")(769,"code"),e(770,`// shell/app.routes.ts \u2014 un prefijo por MFE
export const routes: Routes = [
  {
    path: 'catalog',
    loadChildren: () =>
      loadRemoteModule('mfe-catalog', './routes').then(m => m.CATALOG_ROUTES),
  {,
  { path: '', pathMatch: 'full', redirectTo: 'catalog' },
  { path: '**', component: NotFoundComponent },   // 404 del shell, al final
];

// mfe-catalog/catalog.routes.ts \u2014 SIEMPRE rutas relativas
export const CATALOG_ROUTES: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  // NO usar rutas absolutas ni redirectTo: '/algo' aqu\xED
];`),t()(),n(771,"h4"),e(772,"Sincronizaci\xF3n cuando el remote tiene router propio"),t(),n(773,"p"),e(774," Con single-spa o Web Components, cada MFE puede llevar su propio router. Entonces hay que sincronizar: los routers de los MFE escuchan "),n(775,"code"),e(776,"popstate"),t(),e(777,", y las navegaciones program\xE1ticas deben notificar al resto (single-spa reenv\xEDa eventos de routing; con Angular puedes emitir un "),n(778,"code"),e(779,"CustomEvent"),t(),e(780," de navegaci\xF3n que el shell traduce). Con federation + un \xFAnico Angular Router del shell, este problema desaparece \u2014 otra raz\xF3n para preferirlo en stacks 100 % Angular. "),t(),n(781,"ul")(782,"li"),e(783,"El remote en standalone (desarrollo aislado) monta sus mismas rutas bajo "),n(784,"code"),e(785,"''"),t(),e(786," y as\xED se prueba sin el shell."),t(),n(787,"li"),e(788,"Nunca hagas "),n(789,"code"),e(790,"router.navigate(['/checkout'])"),t(),e(791," desde un MFE hacia rutas de otro: pide la navegaci\xF3n al shell (evento o "),n(792,"code"),e(793,"PlatformContext.navigate"),t(),e(794,")."),t(),n(795,"li"),e(796,"Configura el servidor/CDN para servir "),n(797,"code"),e(798,"index.html"),t(),e(799," del shell en cualquier ruta (fallback SPA), o el deep linking devolver\xE1 404."),t()(),n(800,"div",2)(801,"strong"),e(802,"\u26A0\uFE0F Errores comunes"),t(),n(803,"ul")(804,"li"),e(805,"Rutas absolutas dentro del remote \u21D2 funciona standalone, rompe montado bajo prefijo."),t(),n(806,"li"),e(807,"Wildcard "),n(808,"code"),e(809,"**"),t(),e(810," del shell declarado antes de los prefijos de MFE \u21D2 se traga todo."),t(),n(811,"li"),e(812,"Dos routers (shell y remote) peleando por la misma URL sin un due\xF1o claro."),t(),n(813,"li"),e(814,"Guards del shell que asumen conocimiento de rutas internas del remote."),t()()(),n(815,"div",3)(816,"strong"),e(817,"\u{1F3A4} Preguntas de entrevista"),t(),n(818,"ul")(819,"li"),e(820,"\xBFC\xF3mo consigues que un deep link a una ruta interna de un remote funcione tras F5?"),t(),n(821,"li"),e(822,"\xBFQui\xE9n debe poseer el router en una arquitectura shell + remotes Angular y por qu\xE9?"),t(),n(823,"li"),e(824,"\xBFC\xF3mo navega un MFE hacia una ruta que pertenece a otro MFE sin acoplarse?"),t()()()(),n(825,"div",11)(826,"h3"),e(827,"9 \xB7 Dependencias compartidas y versionado"),t(),n(828,"p"),e(829," El punto m\xE1s delicado de los MFE en runtime. "),n(830,"strong"),e(831,"Angular y RxJS deben ser singleton"),t(),e(832,": dos copias de "),n(833,"code"),e(834,"@angular/core"),t(),e(835," significan dos sistemas de DI, dos zonas de change detection y errores imposibles de depurar. Otras librer\xEDas (date-fns, lodash) pueden duplicarse sin romper nada \u2014 solo pesan m\xE1s. "),t(),n(836,"pre")(837,"code"),e(838,`// Qu\xE9 significa cada flag al negociar versiones en runtime
shared: {
  '@angular/core': {
    singleton: true,          // solo UNA instancia viva en la p\xE1gina
    strictVersion: true,      // incompatibilidad \u21D2 error inmediato y visible
    requiredVersion: '^20.1.0'
  }
}

// Escenario: shell trae @angular/core 20.1.0 (singleton)
//  \xB7 remote pide ^20.0.5  \u2192 OK, reutiliza 20.1.0 (rango compatible)
//  \xB7 remote pide ^21.0.0  \u2192 strictVersion: ERROR al cargar ese remote
//                           sin strictVersion: warning + usa 20.1.0 (\u{1F4A3} riesgo)`),t()(),n(839,"h4"),e(840,"Estrategias frente a versiones incompatibles"),t(),n(841,"ul")(842,"li")(843,"strong"),e(844,"Contrato de plataforma"),t(),e(845,": el shell publica qu\xE9 versiones singleton ofrece (Angular 20.x, RxJS 7.x); los MFE se comprometen a ese rango. Es la opci\xF3n sana."),t(),n(846,"li")(847,"strong"),e(848,"Upgrade en tren (version train)"),t(),e(849,": ventanas acordadas donde todos los MFE suben la major de Angular; los singletons impiden mezclarlas indefinidamente."),t(),n(850,"li")(851,"strong"),e(852,"Aislamiento total"),t(),e(853," para el MFE rezagado: empaquetarlo como Web Component / iframe con SU propio Angular (paga bundle doble, gana independencia temporal)."),t(),n(854,"li"),e(855,"Librer\xEDas no-singleton: deja que cada MFE traiga la suya y monitoriza el peso; a veces duplicar 30 KB es m\xE1s barato que coordinar equipos."),t()(),n(856,"ul")(857,"li"),e(858,"Alinea tambi\xE9n los "),n(859,"strong"),e(860,"polyfills y zone.js"),t(),e(861," (o zoneless en todos): cargarlos dos veces produce bugs globales."),t(),n(862,"li"),e(863,"Automatiza la verificaci\xF3n: un job de CI que compara "),n(864,"code"),e(865,"requiredVersion"),t(),e(866," de todos los MFE contra el shell antes de desplegar."),t()(),n(867,"div",2)(868,"strong"),e(869,"\u26A0\uFE0F Errores comunes"),t(),n(870,"ul")(871,"li"),e(872,"Desactivar "),n(873,"code"),e(874,"strictVersion"),t(),e(875,' "para que arranque": conviertes un error visible en corrupci\xF3n silenciosa en producci\xF3n.'),t(),n(876,"li"),e(877,"Compartir librer\xEDas con estado de m\xF3dulo (registries, plugin systems) sin singleton: cada MFE ve un registry distinto."),t(),n(878,"li"),e(879,"Subir Angular major en un remote sin plan de tren: su deploy queda bloqueado meses."),t(),n(880,"li"),e(881,"Olvidar que los "),n(882,"strong"),e(883,"secondary entry points"),t(),e(884," ("),n(885,"code"),e(886,"@angular/common/http"),t(),e(887,") tambi\xE9n deben compartirse."),t()()(),n(888,"div",3)(889,"strong"),e(890,"\u{1F3A4} Preguntas de entrevista"),t(),n(891,"ul")(892,"li"),e(893,"\xBFPor qu\xE9 "),n(894,"code"),e(895,"@angular/core"),t(),e(896," debe ser singleton y qu\xE9 s\xEDntomas produce duplicarlo?"),t(),n(897,"li"),e(898,"El shell est\xE1 en Angular 20 y un equipo necesita Angular 21 ya: \xBFqu\xE9 opciones tienes y qu\xE9 coste tiene cada una?"),t(),n(899,"li"),e(900,"\xBFQu\xE9 hace exactamente "),n(901,"code"),e(902,"requiredVersion: 'auto'"),t(),e(903," en Native Federation?"),t()()()(),n(904,"div",12)(905,"h3"),e(906,"10 \xB7 Deploy independiente y CI/CD"),t(),n(907,"p"),e(908," El deploy independiente es "),n(909,"strong"),e(910,"la raz\xF3n de ser"),t(),e(911," de los MFE: si para publicar el cat\xE1logo hay que redeployar el shell, solo tienes un monolito distribuido. Cada MFE tiene su pipeline (build \u2192 test \u2192 publish a CDN) y el shell descubre las versiones v\xEDa "),n(912,"strong"),e(913,"manifest din\xE1mico por entorno"),t(),e(914,". "),t(),n(915,"pre")(916,"code"),e(917,`# .github/workflows/mfe-catalog.yml \u2014 pipeline SOLO de este MFE
name: deploy-mfe-catalog
on:
  push:
    branches: [main]
    paths: ['apps/mfe-catalog/**']        # solo cambios de este MFE

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npx nx build mfe-catalog     # o ng build
      - run: npx nx test mfe-catalog
      # Publica INMUTABLE por versi\xF3n + actualiza alias del entorno
      - run: |
          aws s3 sync dist/mfe-catalog s3://cdn/catalog/\${GITHUB_SHA}/
          aws s3 cp s3://cdn/catalog/\${GITHUB_SHA}/ s3://cdn/catalog/staging/ --recursive`),t()(),n(918,"h4"),e(919,"Manifest din\xE1mico: promoci\xF3n y rollback sin rebuild"),t(),n(920,"pre")(921,"code"),e(922,`// federation.manifest.json (staging)
{
  "mfe-catalog":  "https://cdn.acme.com/catalog/staging/remoteEntry.json",
  "mfe-checkout": "https://cdn.acme.com/checkout/staging/remoteEntry.json"
}

// Producci\xF3n: mismo build del shell, otro manifest.
// ROLLBACK del cat\xE1logo = apuntar su entrada a la versi\xF3n anterior:
{
  "mfe-catalog": "https://cdn.acme.com/catalog/a1b2c3d/remoteEntry.json"
}
// Sin tocar shell ni al resto de equipos. Segundos, no horas.`),t()(),n(923,"h4"),e(924,"Pr\xE1cticas clave"),t(),n(925,"ul")(926,"li")(927,"strong"),e(928,"Artefactos inmutables"),t(),e(929,' versionados por hash/semver; los "alias" de entorno (staging, prod) son punteros \u2014 el rollback es mover un puntero.'),t(),n(930,"li")(931,"code"),e(932,"remoteEntry.json"),t(),e(933,"/manifest con "),n(934,"code"),e(935,"Cache-Control: no-cache"),t(),e(936," (o TTL muy corto); los chunks con hash pueden cachearse para siempre."),t(),n(937,"li")(938,"strong"),e(939,"Smoke test post-deploy"),t(),e(940,": el shell de staging carga el remote nuevo y corre un E2E m\xEDnimo antes de promover a prod."),t(),n(941,"li"),e(942,"Canary por MFE: el manifest puede servir la v2 del cat\xE1logo solo al 5 % de usuarios."),t(),n(943,"li"),e(944,"Observabilidad por MFE: etiqueta errores (Sentry/OTel) con nombre y versi\xF3n del remote para saber a qu\xE9 equipo despertar."),t()(),n(945,"div",2)(946,"strong"),e(947,"\u26A0\uFE0F Errores comunes"),t(),n(948,"ul")(949,"li"),e(950,"URLs de remotes compiladas dentro del bundle del shell \u21D2 cada cambio de versi\xF3n exige redeploy del shell (adi\xF3s independencia)."),t(),n(951,"li"),e(952,"Cachear el manifest o el remoteEntry agresivamente \u21D2 usuarios atrapados en versiones viejas."),t(),n(953,"li"),e(954,"Sobrescribir artefactos (deploy mutable) \u21D2 imposible hacer rollback fiable."),t(),n(955,"li"),e(956,"No probar la matriz de compatibilidad shell\u2194remote antes de promover: cada uno pasa su CI en verde y la combinaci\xF3n explota en prod."),t()()(),n(957,"div",3)(958,"strong"),e(959,"\u{1F3A4} Preguntas de entrevista"),t(),n(960,"ul")(961,"li"),e(962,"Dise\xF1a el flujo de rollback de un solo MFE sin tocar a los dem\xE1s equipos."),t(),n(963,"li"),e(964,"\xBFQu\xE9 pol\xEDticas de cach\xE9 aplicar\xEDas al manifest, al remoteEntry y a los chunks?"),t(),n(965,"li"),e(966,"\xBFC\xF3mo har\xEDas canary release de un microfrontend concreto?"),t()()()(),n(967,"div",13)(968,"h3"),e(969,"11 \xB7 Monorepo vs polyrepo"),t(),n(970,"p"),e(971," Los MFE son una decisi\xF3n de "),n(972,"strong"),e(973,"deploy"),t(),e(974,", no de repositorio: puedes tener MFE con deploy independiente dentro de un "),n(975,"strong"),e(976,"monorepo"),t(),e(977," (Nx) o repartidos en "),n(978,"strong"),e(979,"polyrepo"),t(),e(980,". El monorepo facilita compartir c\xF3digo, tooling y refactors at\xF3micos; el polyrepo maximiza la autonom\xEDa (y la fricci\xF3n para compartir). "),t(),n(981,"table")(982,"thead")(983,"tr")(984,"th"),e(985,"Criterio"),t(),n(986,"th"),e(987,"Monorepo (Nx)"),t(),n(988,"th"),e(989,"Polyrepo"),t()()(),n(990,"tbody")(991,"tr")(992,"td"),e(993,"Compartir design system"),t(),n(994,"td"),e(995,"\u2705 Import directo, refactor at\xF3mico"),t(),n(996,"td"),e(997,"\u26A0\uFE0F Publicar npm, versionar, esperar upgrades"),t()(),n(998,"tr")(999,"td"),e(1e3,"Autonom\xEDa de equipo"),t(),n(1001,"td"),e(1002,"\u26A0\uFE0F Reglas y CODEOWNERS necesarios"),t(),n(1003,"td"),e(1004,"\u2705 Total (repo, tooling, permisos)"),t()(),n(1005,"tr")(1006,"td"),e(1007,"Coherencia de versiones"),t(),n(1008,"td"),e(1009,"\u2705 Una sola versi\xF3n de Angular"),t(),n(1010,"td"),e(1011,"\u274C Drift casi garantizado"),t()(),n(1012,"tr")(1013,"td"),e(1014,"CI"),t(),n(1015,"td"),e(1016,"\u2705 "),n(1017,"code"),e(1018,"nx affected"),t(),e(1019," construye solo lo tocado"),t(),n(1020,"td"),e(1021,"\u26A0\uFE0F N pipelines aislados, integraci\xF3n tard\xEDa"),t()(),n(1022,"tr")(1023,"td"),e(1024,"Escala organizativa"),t(),n(1025,"td"),e(1026,"Ideal hasta decenas de equipos con buena disciplina"),t(),n(1027,"td"),e(1028,"Ideal con organizaciones muy distribuidas"),t()()()(),n(1029,"h4"),e(1030,"Nx: module boundaries como ley"),t(),n(1031,"pre")(1032,"code"),e(1033,`// Cada proyecto se etiqueta por scope (dominio) y type (capa)
// project.json \u2192 "tags": ["scope:catalog", "type:feature"]

// eslint.config \u2014 @nx/enforce-module-boundaries
{
  "rules": {
    "@nx/enforce-module-boundaries": ["error", {
      "depConstraints": [
        // cat\xE1logo solo puede depender de s\xED mismo y de shared
        { "sourceTag": "scope:catalog",
          "onlyDependOnLibsWithTags": ["scope:catalog", "scope:shared"] },
        { "sourceTag": "scope:checkout",
          "onlyDependOnLibsWithTags": ["scope:checkout", "scope:shared"] },
        // el shell puede orquestar a todos
        { "sourceTag": "scope:shell",
          "onlyDependOnLibsWithTags": ["scope:*"] }
      ]
    }]
  }
}
// Resultado: importar checkout desde catalog \u21D2 error de lint en CI`),t()(),n(1034,"ul")(1035,"li")(1036,"strong"),e(1037,"Ownership"),t(),e(1038,": CODEOWNERS por carpeta \u2014 cada equipo aprueba solo su dominio."),t(),n(1039,"li")(1040,"strong"),e(1041,"Design system compartido"),t(),e(1042,": en monorepo es una lib "),n(1043,"code"),e(1044,"scope:shared"),t(),e(1045," estable; en polyrepo, un paquete npm con semver disciplinado y changelog."),t(),n(1046,"li"),e(1047,"Regla anti-acoplamiento: los MFE "),n(1048,"strong"),e(1049,"nunca se importan entre s\xED"),t(),e(1050,"; solo pueden depender de "),n(1051,"code"),e(1052,"shared"),t(),e(1053," \u2014 federation es la \xFAnica puerta en runtime."),t()(),n(1054,"div",2)(1055,"strong"),e(1056,"\u26A0\uFE0F Errores comunes"),t(),n(1057,"ul")(1058,"li"),e(1059,'Monorepo sin boundaries: en 6 meses todos importan de todos y los "MFE" son un monolito con pasos extra.'),t(),n(1060,"li"),e(1061,"Polyrepo con design system sin releases frecuentes: cada MFE congela una versi\xF3n distinta y la UX diverge."),t(),n(1062,"li"),e(1063,"Confundir monorepo con deploy conjunto: "),n(1064,"code"),e(1065,"nx affected"),t(),e(1066," existe precisamente para desplegar solo lo que cambi\xF3."),t()()(),n(1067,"div",3)(1068,"strong"),e(1069,"\u{1F3A4} Preguntas de entrevista"),t(),n(1070,"ul")(1071,"li"),e(1072,"\xBFUn monorepo contradice la filosof\xEDa de microfrontends? Justifica."),t(),n(1073,"li"),e(1074,"\xBFC\xF3mo evita Nx el acoplamiento entre dominios? (tags + enforce-module-boundaries)."),t(),n(1075,"li"),e(1076,"\xBFC\xF3mo gestionar\xEDas el design system en polyrepo para no romper la consistencia UX?"),t()()()(),n(1077,"div",14)(1078,"h3"),e(1079,"12 \xB7 Testing de microfrontends"),t(),n(1080,"p"),e(1081," La pir\xE1mide cl\xE1sica sigue valiendo dentro de cada MFE (unit + component tests normales). Lo nuevo son las "),n(1082,"strong"),e(1083,"fronteras"),t(),e(1084,": \xBFel remote sigue exponiendo lo que el shell espera? \xBFlos eventos mantienen su contrato? \xBFla combinaci\xF3n desplegada funciona de extremo a extremo? "),t(),n(1085,"h4"),e(1086,"1. Contract testing \u2014 la frontera como contrato"),t(),n(1087,"pre")(1088,"code"),e(1089,`// contrato: el remote DEBE exponer './routes' con CATALOG_ROUTES
// contract.spec.ts (corre en el CI del remote)
import { CATALOG_ROUTES } from '../src/app/catalog/catalog.routes';

describe('contrato federado de mfe-catalog', () => {
  it('expone rutas montables bajo un prefijo', () => {
    expect(Array.isArray(CATALOG_ROUTES)).toBe(true);
    // ninguna ruta absoluta que rompa el montaje bajo /catalog
    for (const r of CATALOG_ROUTES) {
      expect(r.path?.startsWith('/')).toBeFalsy();
    }
  });

  it('mantiene el contrato del evento cart:item-added v1', () => {
    const evt: CartItemAddedV1 = { version: 1, productId: 'x', qty: 1 };
    expect(evt.version).toBe(1);   // el tipo compartido compila = contrato vivo
  });
});`),t()(),n(1090,"h4"),e(1091,"2. Shell con remotes mockeados"),t(),n(1092,"pre")(1093,"code"),e(1094,`// El shell se testea SIN depender de que los remotes est\xE9n desplegados
// test-setup: manifest que apunta a un remote falso local
{
  "mfe-catalog": "http://localhost:4299/fake-catalog/remoteEntry.json"
}

// o stub de loadRemoteModule en tests unitarios del shell:
const routes: Routes = [{
  path: 'catalog',
  loadChildren: () => Promise.resolve(FAKE_CATALOG_ROUTES),  // stub
}];
// Verifica: prefijos, guards, fallback 404, manejo de error de carga`),t()(),n(1095,"h4"),e(1096,"3. E2E cross-MFE \u2014 pocos y cr\xEDticos"),t(),n(1097,"pre")(1098,"code"),e(1099,`// e2e/checkout-journey.spec.ts (Playwright) \u2014 cruza 3 MFEs reales
test('@smoke compra end-to-end', async ({ page }) => {
  await page.goto('/catalog');                       // MFE cat\xE1logo
  await page.getByTestId('product-42').click();
  await page.getByRole('button', { name: 'A\xF1adir' }).click();

  await page.goto('/cart');                          // MFE carrito
  await expect(page.getByTestId('cart-count')).toHaveText('1');

  await page.getByRole('link', { name: 'Pagar' }).click();  // MFE pagos
  await expect(page).toHaveURL(/\\/checkout/);
});
// Corre contra STAGING con las versiones reales candidatas a prod`),t()(),n(1100,"h4"),e(1101,"Estrategia por capas"),t(),n(1102,"table")(1103,"thead")(1104,"tr")(1105,"th"),e(1106,"Nivel"),t(),n(1107,"th"),e(1108,"Qu\xE9 valida"),t(),n(1109,"th"),e(1110,"D\xF3nde corre"),t()()(),n(1111,"tbody")(1112,"tr")(1113,"td"),e(1114,"Unit / component"),t(),n(1115,"td"),e(1116,"L\xF3gica interna del MFE"),t(),n(1117,"td"),e(1118,"CI del MFE (r\xE1pido, masivo)"),t()(),n(1119,"tr")(1120,"td"),e(1121,"Contract tests"),t(),n(1122,"td"),e(1123,"Exposes, eventos, tipos compartidos"),t(),n(1124,"td"),e(1125,"CI del MFE + CI del shell"),t()(),n(1126,"tr")(1127,"td"),e(1128,"Shell + remotes mock"),t(),n(1129,"td"),e(1130,"Orquestaci\xF3n, routing, errores de carga"),t(),n(1131,"td"),e(1132,"CI del shell"),t()(),n(1133,"tr")(1134,"td"),e(1135,"E2E cross-MFE"),t(),n(1136,"td"),e(1137,"Flujos de negocio cr\xEDticos integrados"),t(),n(1138,"td"),e(1139,"Staging, pre-promoci\xF3n (pocos)"),t()()()(),n(1140,"ul")(1141,"li"),e(1142,"Testea tambi\xE9n el "),n(1143,"strong"),e(1144,"fallo"),t(),e(1145,": \xBFqu\xE9 muestra el shell si un remote devuelve 500 o tarda 10 s? (placeholder, retry, degradaci\xF3n elegante)."),t(),n(1146,"li"),e(1147,"Los contract tests corren en "),n(1148,"strong"),e(1149,"ambos lados"),t(),e(1150,": el remote garantiza lo que expone; el shell fija lo que consume (estilo consumer-driven)."),t()(),n(1151,"div",2)(1152,"strong"),e(1153,"\u26A0\uFE0F Errores comunes"),t(),n(1154,"ul")(1155,"li"),e(1156,"Confiar solo en E2E completos: lentos, fr\xE1giles y llegan tarde \u2014 el contrato roto se detecta antes con un contract test de segundos."),t(),n(1157,"li"),e(1158,"E2E del shell que dependen de remotes de OTROS equipos en dev: el pipeline de A se pone rojo por un bug de B."),t(),n(1159,"li"),e(1160,"No testear el estado de error de carga de un remote (pantalla en blanco en prod)."),t(),n(1161,"li"),e(1162,"Mockear tanto que nunca se prueba la combinaci\xF3n real: staging con versiones candidatas es obligatorio antes de promover."),t()()(),n(1163,"div",3)(1164,"strong"),e(1165,"\u{1F3A4} Preguntas de entrevista"),t(),n(1166,"ul")(1167,"li"),e(1168,"\xBFQu\xE9 es contract testing aplicado a microfrontends y qu\xE9 contratos cubrir\xEDas?"),t(),n(1169,"li"),e(1170,"\xBFC\xF3mo testeas el shell sin depender de que los remotes est\xE9n desplegados?"),t(),n(1171,"li"),e(1172,"\xBFD\xF3nde y cu\xE1ndo correr\xEDas los E2E cross-MFE para no acoplar los pipelines de los equipos?"),t()()()()())},dependencies:[r],styles:["[_nghost-%COMP%]{display:block;padding:1rem 0}.cards[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.card[_ngcontent-%COMP%]{background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:1.2rem}.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 .6rem;font-size:1.1rem}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--text-muted);line-height:1.6;margin:0 0 .8rem}pre[_ngcontent-%COMP%]{background:var(--bg-code, #161b22);border:1px solid var(--border);border-radius:6px;padding:.8rem;overflow-x:auto;font-size:.85rem;line-height:1.5}code[_ngcontent-%COMP%]{color:var(--text)}.card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:1.2rem 0 .5rem;font-size:.98rem}.card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{color:var(--text-muted);line-height:1.6;margin:0 0 .8rem;padding-left:1.3rem}.card[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin:.4rem 0 1rem;font-size:.88rem}.card[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid var(--border);padding:.45rem .6rem;text-align:left;color:var(--text-muted)}.card[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:var(--text);background:var(--bg-code, #161b22)}.warn[_ngcontent-%COMP%]{border-left:3px solid #d29922;background:#d2992214;padding:.6rem .8rem;border-radius:0 6px 6px 0;margin:0 0 .8rem}.warn[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:.3rem 0 0}.interview[_ngcontent-%COMP%]{border-left:3px solid var(--accent-purple, #a371f7);background:#a371f714;padding:.6rem .8rem;border-radius:0 6px 6px 0;margin:0 0 .4rem}.interview[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:.3rem 0 0}.warn[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .interview[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--text)}details.qa[_ngcontent-%COMP%]{border:1px solid var(--border);border-radius:6px;padding:.5rem .8rem;margin:0 0 .5rem}details.qa[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]{cursor:pointer;font-weight:600}details.qa[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.5rem 0 .2rem}"]})};export{l as MfeLearnComponent};
