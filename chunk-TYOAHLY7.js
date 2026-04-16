import{Gb as i,Hb as e,Ib as o,Kb as n,Ta as a,Zb as t,fb as l}from"./chunk-G73V3KC4.js";import"./chunk-2NFLSA4Y.js";var E=class r{installCode="npm init playwright@latest";configCode=`import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  expect: { timeout: 5000 },
  webServer: {
    command: 'npm start',
    url: 'http://localhost:4200',
    reuseExistingServer: true,
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'firefox', use: { browserName: 'firefox' } },
    { name: 'webkit', use: { browserName: 'webkit' } },
  ],
});`;firstTestCode=`import { expect, test } from '@playwright/test';

test('la p\xE1gina de inicio muestra el mensaje de bienvenida', async ({ page }) => {
  await page.goto('/start');
  await expect(page.getByText('Welcome to Angular E2E with Playwright'))
    .toBeVisible();
});`;pageObjectCode=`import type { Locator, Page } from '@playwright/test';

export class StartPage {
  readonly welcomeMessage: Locator;

  constructor(private readonly page: Page) {
    this.welcomeMessage = page.getByTestId('start-page-welcome-message');
  }

  async goto() {
    await this.page.goto('/start');
  }
}`;pageObjectTestCode=`import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/dashboard.page';

test('navega al lab desde el dashboard usando POM', async ({ page }) => {
  const dashboard = new DashboardPage(page);
  await dashboard.goto();
  await dashboard.navigateToLab('Playwright E2E Testing');
  await expect(page).toHaveURL(/.*/lab/playwright/);
});`;fixtureCode=`import { test as base } from '@playwright/test';
import { StartPage } from '../pages/start.page';

type MyFixtures = {
  startPage: StartPage;
};

export const test = base.extend<MyFixtures>({
  startPage: async ({ page }, use) => {
    const startPage = new StartPage(page);
    await startPage.goto();
    await use(startPage);
    // cleanup opcional aqu\xED
  },
});

export { expect } from '@playwright/test';`;fixtureProblemBeforeCode=`test('mi prueba', async ({ page }) => {
  const loginPage = new LoginPage(page); // Repetitivo
  const dashboardPage = new DashboardPage(page); // Repetitivo
  await loginPage.goto();
  // ...
});`;fixtureProblemAfterCode=`import { test } from './my-fixtures';

test('mi test limpio', async ({ loginPage }) => {
  await loginPage.login('user', 'pass');
});`;fixtureInterfaceCode=`import { test as base } from '@playwright/test';
import { LoginPage } from './LoginPage';

type MyFixtures = {
  loginPage: LoginPage;
};`;fixtureUseCode=`import { test, expect } from './my-fixtures';

test('mi test limpio', async ({ loginPage }) => {
  await loginPage.login('user', 'pass');
  await expect(loginPage.page).toHaveURL(/.*/dashboard/);
});`;authStorageExampleCode=`import { test as base } from '@playwright/test';
import { LoginPage } from './LoginPage';

export const test = base.extend({
  authPage: async ({ page }, use) => {
    await page.context().addCookies([
      { name: 'auth-token', value: 'token123', domain: 'localhost' }
    ]);
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
  },
});`;parallelCode=`test.describe.configure({ mode: 'parallel' });
// o en config:
fullyParallel: true
workers: 4`;angularExampleCode=`<input
  type="text"
  [(ngModel)]="query"
  data-testid="search-input"
  placeholder="Buscar..."
/>

<button
  (click)="submit()"
  data-testid="submit-button"
  [disabled]="loading"
  data-state="loading"
>
  {{ loading ? 'Enviando...' : 'Enviar' }}
</button>`;pageObjectExampleCode=`class DashboardPage {
  constructor(private page: Page) {}

  async navigateToLab(labName: string) {
    await this.page.getByRole('link', { name: labName }).click();
  }

  async getTopicCards() {
    return this.page.locator('article.topic-card');
  }
}`;timeoutExampleCode=`test.setTimeout(30000); // Para tests largos
await expect(element).toBeVisible({ timeout: 10000 });`;formExampleCode=`await page.getByLabel('Nombre').fill('Juan');
await page.getByLabel('Email').fill('juan@example.com');
await page.getByRole('button', { name: 'Enviar' }).click();`;networkExampleCode=`await page.route('**/api/data', route => route.fulfill({
  status: 200,
  body: JSON.stringify(mockData)
}));`;authExampleCode=`await page.addCookies([{
  name: 'auth-token',
  value: 'token123',
  domain: 'localhost'
}]);`;screenshotExampleCode="await page.screenshot({ path: 'debug.png' });";videoConfigExampleCode=`use: {
  video: 'on'
}`;angularWaitExampleCode=`// Esperar que Angular termine de procesar
await page.waitForFunction(() => {
  return window.getAllAngularTestabilities().every(
    testability => testability.isStable()
  );
});`;angularRoutingExampleCode=`// Para navegaci\xF3n SPA
await page.waitForURL(/.*/lab/ngrx/);
await expect(page.locator('app-ngrx-layout')).toBeVisible();`;getByTextExampleCode="page.getByText('Angular Fundamentals', { exact: true })";typeExampleCode="await input.type('texto', { delay: 50 })";ngrxStoreExampleCode=`// Verificar estado de store (si es accesible)
await page.waitForFunction(() => {
  return window.store?.getState()?.products?.length > 0;
});`;dynamicComponentsExampleCode=`// Esperar que Angular renderice componentes
await page.locator('app-product-list').waitFor();
await expect(page.locator('app-product-item')).toHaveCount(expectedCount);`;locatorExamplesCode=`// Con selector CSS
page.locator('h2');
// Con texto
page.locator('h2', { hasText: /NgRx/i });
// Con otro locator
page.locator('article', { has: page.locator('.topic-card') });`;getByRoleExamplesCode=`// Botones
page.getByRole('button', { name: /Add Product/i });
// Enlaces
page.getByRole('link', { name: /Estudiar/i });
// Headings
page.getByRole('heading', { name: /NgRx/i });`;static \u0275fac=function(m){return new(m||r)};static \u0275cmp=l({type:r,selectors:[["app-playwright-learn"]],decls:704,vars:28,consts:[[1,"cards"],["id","introduccion",1,"card"],["id","por-que-playwright",1,"card"],["id","cypress-vs-playwright",1,"card"],["id","install",1,"card"],[3,"textContent"],["id","configuracion-inicial",1,"card"],["id","estructura-de-pruebas",1,"card"],["id","primer-test",1,"card"],["id","page-object-model",1,"card"],["id","fixtures-personalizados",1,"card"],["id","autenticacion-persistente",1,"card"],["id","ejecucion-y-debug",1,"card"],["id","inspector",1,"card"],["id","paralelizacion",1,"card"],["id","cicd",1,"card"],["id","vscode-extension",1,"card"],["id","metodos-localizacion",1,"card"],["id","acciones-elementos",1,"card"],["id","assertions",1,"card"],["id","atributos-datos",1,"card"],["id","mejores-practicas",1,"card"],["id","ejemplos-avanzados",1,"card"],["id","depuracion",1,"card"],["id","integracion-angular",1,"card"],["id","conclusion",1,"card"]],template:function(m,d){m&1&&(i(0,"div",0)(1,"div",1)(2,"h3"),t(3,"Introducci\xF3n"),e(),i(4,"p"),t(5," Playwright es un framework moderno de pruebas end-to-end creado por Microsoft. Permite testear aplicaciones web de forma confiable, r\xE1pida y cross-browser, ejecutando flujos reales del usuario en Chromium, Firefox y WebKit. "),e(),i(6,"p"),t(7," Para aplicaciones Angular esta herramienta es ideal porque automatiza la espera de acciones, maneja m\xFAltiples contextos aislados y soporta pruebas en paralelo, todo sin depender de un servidor real en cada ejecuci\xF3n. "),e()(),i(8,"div",2)(9,"h3"),t(10,"\xBFPor qu\xE9 elegir Playwright?"),e(),i(11,"ul")(12,"li"),t(13,"Compatibilidad con m\xFAltiples navegadores: Chromium, Firefox y WebKit."),e(),i(14,"li"),t(15,"Auto-waiting integrado: espera que los elementos sean interactuables antes de actuar."),e(),i(16,"li"),t(17,"Control de red y contexto: intercepte requests, use m\xFAltiples tabs y or\xEDgenes separados."),e(),i(18,"li"),t(19,"Ejecuta pruebas aisladas: cada test obtiene un contexto fresco en el mismo proceso."),e(),i(20,"li"),t(21,"Depuraci\xF3n avanzada: inspector, grabador y trace viewer ayudan a diagnosticar fallas."),e(),i(22,"li"),t(23,"Paralelismo eficiente: ejecuta tests en workers simult\xE1neos y reduce tiempos de ejecuci\xF3n."),e()()(),i(24,"div",3)(25,"h3"),t(26,"Diferencias con Cypress"),e(),i(27,"p"),t(28," Cypress corre dentro del navegador, lo que entrega una experiencia de depuraci\xF3n muy fluida. Sin embargo, su sandbox limita escenarios como m\xFAltiples pesta\xF1as, cross-origin y control externo del navegador. "),e(),i(29,"p"),t(30," Playwright corre fuera del navegador y controla su interno, lo que lo hace m\xE1s flexible para pruebas complejas, aunque a veces la configuraci\xF3n inicial puede ser un poco m\xE1s detallada. "),e()(),i(31,"div",4)(32,"h3"),t(33,"Instalaci\xF3n"),e(),i(34,"p"),t(35," En un proyecto Angular puedes inicializar Playwright con este comando: "),e(),i(36,"pre"),o(37,"code",5),e(),i(38,"p"),t(39," El asistente te pedir\xE1 opciones como TypeScript vs JavaScript, ubicaci\xF3n de tests, integraci\xF3n CI y si deseas instalar navegadores. "),e()(),i(40,"div",6)(41,"h3"),t(42,"Configuraci\xF3n inicial para Angular"),e(),i(43,"p"),t(44," La configuraci\xF3n principal vive en "),i(45,"code"),t(46,"playwright.config.ts"),e(),t(47,". Para Angular conviene definir un servidor local que arranque antes de las pruebas: "),e(),i(48,"pre"),o(49,"code",5),e(),i(50,"p"),t(51," Estas opciones permiten ejecutar pruebas autom\xE1ticamente contra la app Angular en desarrollo. "),e()(),i(52,"div",7)(53,"h3"),t(54,"C\xF3mo estructurar las pruebas"),e(),i(55,"p"),t(56," Organiza tus archivos en carpetas claras. Una convenci\xF3n \xFAtil es: "),e(),i(57,"ul")(58,"li")(59,"code"),t(60,"tests/shared/"),e(),t(61," para utilidades y elementos reutilizables."),e(),i(62,"li")(63,"code"),t(64,"tests/pages/"),e(),t(65," para page objects del Page Object Model."),e(),i(66,"li")(67,"code"),t(68,"tests/fixtures/"),e(),t(69," para extensiones de fixtures personalizadas."),e(),i(70,"li")(71,"code"),t(72,"tests/*.spec.ts"),e(),t(73," para los casos de prueba."),e()(),i(74,"p"),t(75," De esta forma cada prueba queda m\xE1s legible y el mantenimiento se concentra en los objetos de p\xE1gina. "),e()(),i(76,"div",8)(77,"h3"),t(78,"Escribir tu primer test E2E"),e(),i(79,"p"),t(80," Playwright sincroniza autom\xE1ticamente las acciones, por lo que no necesitas timeouts manuales en la mayor\xEDa de los casos. "),e(),i(81,"pre"),o(82,"code",5),e()(),i(83,"div",9)(84,"h3"),t(85,"Page Object Model"),e(),i(86,"p"),t(87," El patr\xF3n Page Object Model (POM) abstrae selectores y flujos de la aplicaci\xF3n en clases, dejando los tests enfocados en el comportamiento y no en la implementaci\xF3n de la UI. "),e(),i(88,"p"),t(89,"Un Page Object representa una p\xE1gina o una parte relevante de la interfaz, y expone m\xE9todos de alto nivel que describen acciones de usuario, en lugar de exponer selectores directamente."),e(),i(90,"h4"),t(91,"\xBFPor qu\xE9 usar POM?"),e(),i(92,"ul")(93,"li"),t(94,"Reduce la duplicaci\xF3n de selectores y flujos."),e(),i(95,"li"),t(96,"Hace los tests m\xE1s legibles y f\xE1ciles de entender."),e(),i(97,"li"),t(98,"Protege los tests de cambios frecuentes en la UI."),e(),i(99,"li"),t(100,"Permite centralizar el mantenimiento de locators en un solo lugar."),e()(),i(101,"h4"),t(102,"Cu\xE1ndo usarlo"),e(),i(103,"ul")(104,"li"),t(105,"Cuando una p\xE1gina tiene m\xFAltiples interacciones recurrentes."),e(),i(106,"li"),t(107,"Cuando quieres encapsular validaciones comunes."),e(),i(108,"li"),t(109,"Cuando tu suite crece y necesitas mantener tests escalables."),e()(),i(110,"h4"),t(111,"Estructura recomendada"),e(),i(112,"p"),t(113,"Una convenci\xF3n t\xEDpica es usar carpetas como:"),e(),i(114,"pre")(115,"code"),t(116,`tests/pages/dashboard.page.ts
tests/pages/login.page.ts
tests/pages/product.page.ts`),e()(),i(117,"p"),t(118,"Tambi\xE9n puedes usar un archivo "),i(119,"code"),t(120,"tests/pages/base.page.ts"),e(),t(121," para compartir utilidades comunes."),e(),i(122,"h4"),t(123,"Ejemplo de clase Page Object"),e(),i(124,"pre"),o(125,"code",5),e(),i(126,"h4"),t(127,"Ejemplo de test usando POM"),e(),i(128,"pre"),o(129,"code",5),e(),i(130,"h4"),t(131,"Buenas pr\xE1cticas"),e(),i(132,"ul")(133,"li"),t(134,"Guarda los locators como propiedades privadas o readonly."),e(),i(135,"li"),t(136,"Exp\xF3n solo m\xE9todos de alto nivel que representen comportamientos."),e(),i(137,"li"),t(138,"No pongas assertions complejas dentro del Page Object; deja las expectativas en el test."),e(),i(139,"li"),t(140,"Evita l\xF3gica de negocio en los Page Objects; solo encapsula interacci\xF3n y consultas de UI."),e(),i(141,"li"),t(142,"Si una pantalla crece, divide la clase en page components (subobjetos) para mantenerla manejable."),e()()(),i(143,"div",10)(144,"h3"),t(145,"Fixtures personalizados"),e(),i(146,"p"),t(147," Playwright permite extender el fixture base para preparar el entorno antes de cada test y limpiar despu\xE9s. Si el POM sirve para organizar tus p\xE1ginas, las Fixtures sirven para organizar el entorno de tus tests. "),e(),i(148,"h4"),t(149,"\xBFQu\xE9 resuelven?"),e(),i(150,"p"),t(151,"Sin fixtures, cada test tendr\xEDa que crear y configurar manualmente los objetos necesarios:"),e(),i(152,"pre"),o(153,"code",5),e(),i(154,"p"),t(155,'Con fixtures, le dices a Playwright: "Oye, siempre que necesite loginPage, cr\xE9alo t\xFA autom\xE1ticamente y p\xE1samelo listo para usar".'),e(),i(156,"pre"),o(157,"code",5),e(),i(158,"h4"),t(159,"C\xF3mo se configuran (Ejemplo Real)"),e(),i(160,"p"),t(161,"1. Define la interfaz"),e(),i(162,"pre"),o(163,"code",5),e(),i(164,"p"),t(165,"2. Crea la fixture"),e(),i(166,"pre"),o(167,"code",5),e(),i(168,"p"),t(169,"3. \xDAsala en tu test"),e(),i(170,"pre"),o(171,"code",5),e(),i(172,"h4"),t(173,"Ventajas de nivel Senior"),e(),i(174,"ul")(175,"li")(176,"strong"),t(177,"Inyecci\xF3n de dependencias:"),e(),t(178," El test no sabe c\xF3mo se crea la p\xE1gina, solo la pide y la usa."),e(),i(179,"li")(180,"strong"),t(181,"Encapsulamiento:"),e(),t(182," Puedes meter l\xF3gica de setup compleja dentro de la fixture."),e(),i(183,"li")(184,"strong"),t(185,"Paralelizaci\xF3n segura:"),e(),t(186," Playwright garantiza que cada test tenga su propia instancia aislada."),e(),i(187,"li")(188,"strong"),t(189,"Legibilidad extrema:"),e(),t(190," Los tests se enfocan 100% en la l\xF3gica de negocio."),e()(),i(191,"p"),t(192,"Playwright ya trae fixtures integradas por defecto, como "),i(193,"code"),t(194,"page"),e(),t(195,", "),i(196,"code"),t(197,"browser"),e(),t(198," y "),i(199,"code"),t(200,"context"),e(),t(201,". Al crear las tuyas, personalizas las herramientas de tu taller."),e(),i(202,"h4"),t(203,"Auth Storage"),e(),i(204,"p"),t(205,"Usa una fixture para cargar un estado de autenticaci\xF3n ya guardado y evitar logins repetidos."),e(),i(206,"pre"),o(207,"code",5),e()(),i(208,"div",11)(209,"h3"),t(210,"Autenticaci\xF3n persistente"),e(),i(211,"p"),t(212," Para evitar logins redundantes en cada prueba, guarda el estado de autenticaci\xF3n en un archivo. Un proyecto de setup puede iniciar sesi\xF3n y escribir "),i(213,"code"),t(214,"storageState"),e(),t(215,". "),e(),i(216,"p"),t(217," Luego el config de Playwright puede reutilizar ese archivo para pruebas autenticadas. "),e()(),i(218,"div",12)(219,"h3"),t(220,"Ejecutar y depurar"),e(),i(221,"ul")(222,"li")(223,"code"),t(224,"npx playwright test"),e(),t(225," \u2014 ejecuta la suite completa."),e(),i(226,"li")(227,"code"),t(228,"npx playwright test --ui"),e(),t(229," \u2014 abre la interfaz gr\xE1fica."),e(),i(230,"li")(231,"code"),t(232,"npx playwright test --debug"),e(),t(233," \u2014 inicia el inspector y desactiva timeouts."),e()(),i(234,"p"),t(235," En modo debug cada prueba abre el navegador en headed mode y te permite inspeccionar locators en tiempo real. "),e()(),i(236,"div",13)(237,"h3"),t(238,"Playwright Inspector"),e(),i(239,"p"),t(240," El inspector permite pausar la prueba, ver la acci\xF3n actual y seleccionar elementos en la p\xE1gina. Tambi\xE9n puedes usar "),i(241,"code"),t(242,"page.pause()"),e(),t(243," dentro de un test para detener la ejecuci\xF3n en un punto espec\xEDfico. "),e()(),i(244,"div",14)(245,"h3"),t(246,"Paralelizaci\xF3n"),e(),i(247,"p"),t(248," Playwright ejecuta archivos de prueba en paralelo por defecto, usando m\xFAltiples workers. Dentro de cada archivo los tests se ejecutan de forma secuencial a menos que actives: "),e(),i(249,"pre"),o(250,"code",5),e(),i(251,"p"),t(252," Para desactivar el paralelismo usa "),i(253,"code"),t(254,"--workers=1"),e(),t(255," o "),i(256,"code"),t(257,"workers: 1"),e(),t(258," en la configuraci\xF3n. "),e()(),i(259,"div",15)(260,"h3"),t(261,"CI/CD"),e(),i(262,"p"),t(263," Las pruebas Playwright pueden ejecutarse en cualquier proveedor de CI. Muchas integraciones usan el mismo comando de terminal y agregan la instalaci\xF3n de navegadores. "),e(),i(264,"p"),t(265," Un workflow t\xEDpico de GitHub Actions solo necesita ejecutar "),i(266,"code"),t(267,"npm install"),e(),t(268," y "),i(269,"code"),t(270,"npx playwright test"),e(),t(271,". "),e()(),i(272,"div",16)(273,"h3"),t(274,"Extensi\xF3n de VS Code"),e(),i(275,"p"),t(276," La extensi\xF3n Playwright Test para VS Code ofrece un panel de tests, grabador de locators y depuraci\xF3n desde el editor. Tambi\xE9n puede generar workflows de GitHub Actions y ayuda a instalar navegadores. "),e()(),i(277,"div",17)(278,"h3"),t(279,"M\xE9todos Principales de Localizaci\xF3n"),e(),i(280,"h4"),t(281,"page.goto(url)"),e(),i(282,"p"),t(283,"Navega a una URL espec\xEDfica y espera autom\xE1ticamente a que la p\xE1gina cargue."),e(),i(284,"pre")(285,"code"),t(286,"await page.goto('/lab/ngrx');"),e()(),i(287,"p")(288,"strong"),t(289,"Cu\xE1ndo usar:"),e(),t(290," Para iniciar navegaci\xF3n a p\xE1ginas espec\xEDficas."),e(),i(291,"h4"),t(292,"page.locator(selector)"),e(),i(293,"p"),t(294,"Localiza elementos usando selectores CSS, XPath o texto."),e(),i(295,"pre"),o(296,"code",5),e(),i(297,"p")(298,"strong"),t(299,"Cu\xE1ndo usar:"),e(),t(300," Para elementos espec\xEDficos con selectores CSS o texto visible."),e(),i(301,"h4"),t(302,"page.getByRole(role, options)"),e(),i(303,"p"),t(304,"Localiza elementos por su rol sem\xE1ntico (ARIA)."),e(),i(305,"pre"),o(306,"code",5),e(),i(307,"p")(308,"strong"),t(309,"Roles comunes:"),e(),t(310," button, link, heading, textbox, checkbox, radio, etc."),e(),i(311,"p")(312,"strong"),t(313,"Cu\xE1ndo usar:"),e(),t(314," Para elementos interactivos o sem\xE1nticos. Mejor que selectores CSS porque es m\xE1s resistente a cambios de estilo."),e(),i(315,"h4"),t(316,"page.getByText(text, options)"),e(),i(317,"p"),t(318,"Localiza elementos por su texto visible."),e(),i(319,"pre"),o(320,"code",5),e(),i(321,"p")(322,"strong"),t(323,"Cu\xE1ndo usar:"),e(),t(324," Cuando el texto es \xFAnico y visible al usuario."),e(),i(325,"h4"),t(326,"page.getByLabel(text)"),e(),i(327,"p"),t(328,"Localiza elementos por su etiqueta asociada (label)."),e(),i(329,"pre")(330,"code"),t(331,"page.getByLabel('Nombre del producto');"),e()(),i(332,"p")(333,"strong"),t(334,"Cu\xE1ndo usar:"),e(),t(335," Para inputs con labels expl\xEDcitos."),e(),i(336,"h4"),t(337,"page.getByPlaceholder(text)"),e(),i(338,"p"),t(339,"Localiza inputs por su placeholder."),e(),i(340,"pre")(341,"code"),t(342,"page.getByPlaceholder('Buscar...');"),e()(),i(343,"p")(344,"strong"),t(345,"Cu\xE1ndo usar:"),e(),t(346," Para inputs con placeholders \xFAnicos."),e(),i(347,"h4"),t(348,"page.getByTestId(id)"),e(),i(349,"p"),t(350,"Localiza elementos por data-testid."),e(),i(351,"pre")(352,"code"),t(353,"page.getByTestId('submit-button');"),e()(),i(354,"p")(355,"strong"),t(356,"Cu\xE1ndo usar:"),e(),t(357," Para elementos sin texto o rol claro, cuando se necesita estabilidad."),e(),i(358,"h4"),t(359,"page.waitForURL(url, options)"),e(),i(360,"p"),t(361,"Espera a que la URL cambie a un patr\xF3n espec\xEDfico."),e(),i(362,"pre")(363,"code"),t(364,`await page.waitForURL(/.*\\/lab\\/ngrx/);
await page.waitForURL('https://example.com/dashboard');`),e()(),i(365,"p")(366,"strong"),t(367,"Cu\xE1ndo usar:"),e(),t(368," Despu\xE9s de clics que cambian la ruta, para asegurar navegaci\xF3n completa."),e(),i(369,"h4"),t(370,"page.waitForLoadState(state)"),e(),i(371,"p"),t(372,"Espera a que la p\xE1gina alcance un estado de carga."),e(),i(373,"pre")(374,"code"),t(375,"await page.waitForLoadState('networkidle');"),e()(),i(376,"p")(377,"strong"),t(378,"Estados:"),e(),t(379," 'load' (default), 'domcontentloaded', 'networkidle'"),e(),i(380,"p")(381,"strong"),t(382,"Cu\xE1ndo usar:"),e(),t(383," Cuando se necesita esperar a que todos los recursos carguen."),e()(),i(384,"div",18)(385,"h3"),t(386,"Acciones en Elementos"),e(),i(387,"h4"),t(388,"locator.click()"),e(),i(389,"p"),t(390,"Hace clic en el elemento y espera autom\xE1ticamente a que sea clickable."),e(),i(391,"pre")(392,"code"),t(393,"await button.click();"),e()(),i(394,"h4"),t(395,"locator.fill(text)"),e(),i(396,"p"),t(397,"Llena un input con texto (borra contenido previo)."),e(),i(398,"pre")(399,"code"),t(400,"await input.fill('nuevo valor');"),e()(),i(401,"h4"),t(402,"locator.type(text, options)"),e(),i(403,"p"),t(404,"Escribe texto car\xE1cter por car\xE1cter (simula usuario real)."),e(),i(405,"pre"),o(406,"code",5),e(),i(407,"h4"),t(408,"locator.check()"),e(),i(409,"p"),t(410,"Marca un checkbox."),e(),i(411,"pre")(412,"code"),t(413,"await checkbox.check();"),e()(),i(414,"h4"),t(415,"locator.selectOption(value)"),e(),i(416,"p"),t(417,"Selecciona una opci\xF3n en un select."),e(),i(418,"pre")(419,"code"),t(420,"await select.selectOption('option1');"),e()(),i(421,"h4"),t(422,"locator.hover()"),e(),i(423,"p"),t(424,"Mueve el mouse sobre el elemento."),e(),i(425,"pre")(426,"code"),t(427,"await element.hover();"),e()(),i(428,"h4"),t(429,"locator.focus()"),e(),i(430,"p"),t(431,"Enfoca el elemento."),e(),i(432,"pre")(433,"code"),t(434,"await input.focus();"),e()()(),i(435,"div",19)(436,"h3"),t(437,"Assertions (Verificaciones)"),e(),i(438,"h4"),t(439,"expect(locator).toBeVisible()"),e(),i(440,"p"),t(441,"Verifica que el elemento sea visible."),e(),i(442,"pre")(443,"code"),t(444,"await expect(page.locator('h2')).toBeVisible();"),e()(),i(445,"h4"),t(446,"expect(locator).toHaveText(text)"),e(),i(447,"p"),t(448,"Verifica el texto exacto del elemento."),e(),i(449,"pre")(450,"code"),t(451,"await expect(button).toHaveText('Guardar');"),e()(),i(452,"h4"),t(453,"expect(locator).toContainText(text)"),e(),i(454,"p"),t(455,"Verifica que el elemento contenga el texto."),e(),i(456,"pre")(457,"code"),t(458,"await expect(div).toContainText('Error');"),e()(),i(459,"h4"),t(460,"expect(page).toHaveURL(url)"),e(),i(461,"p"),t(462,"Verifica la URL actual."),e(),i(463,"pre")(464,"code"),t(465,"await expect(page).toHaveURL(/.*\\/dashboard/);"),e()(),i(466,"h4"),t(467,"expect(locator).toHaveCount(count)"),e(),i(468,"p"),t(469,"Verifica el n\xFAmero de elementos encontrados."),e(),i(470,"pre")(471,"code"),t(472,"await expect(cards).toHaveCount(10);"),e()(),i(473,"h4"),t(474,"expect(locator).toBeChecked()"),e(),i(475,"p"),t(476,"Verifica que un checkbox est\xE9 marcado."),e(),i(477,"pre")(478,"code"),t(479,"await expect(checkbox).toBeChecked();"),e()(),i(480,"h4"),t(481,"expect(locator).toBeDisabled()"),e(),i(482,"p"),t(483,"Verifica que un elemento est\xE9 deshabilitado."),e(),i(484,"pre")(485,"code"),t(486,"await expect(button).toBeDisabled();"),e()()(),i(487,"div",20)(488,"h3"),t(489,"Atributos de Datos en HTML"),e(),i(490,"p"),t(491,"Para hacer tests m\xE1s robustos, agrega atributos data-* en el HTML:"),e(),i(492,"h4"),t(493,"data-testid"),e(),i(494,"p"),t(495,"Para elementos sin texto \xFAnico o rol claro."),e(),i(496,"pre")(497,"code"),t(498,'<button data-testid="submit-btn">Enviar</button>'),e()(),i(499,"p"),t(500,"Uso en test: "),i(501,"code"),t(502,"page.getByTestId('submit-btn')"),e()(),i(503,"h4"),t(504,"data-cy (estilo Cypress)"),e(),i(505,"p"),t(506,"Similar a data-testid, popular en algunos equipos."),e(),i(507,"pre")(508,"code"),t(509,'<input data-cy="username" />'),e()(),i(510,"h4"),t(511,"data-inputid"),e(),i(512,"p"),t(513,"Para inputs espec\xEDficos."),e(),i(514,"pre")(515,"code"),t(516,'<input data-inputid="product-name" />'),e()(),i(517,"h4"),t(518,"data-role"),e(),i(519,"p"),t(520,"Para roles personalizados."),e(),i(521,"pre")(522,"code"),t(523,'<div data-role="notification">...</div>'),e()(),i(524,"h4"),t(525,"data-state"),e(),i(526,"p"),t(527,"Para estados din\xE1micos."),e(),i(528,"pre")(529,"code"),t(530,'<button data-state="loading">Cargando...</button>'),e()(),i(531,"h4"),t(532,"Ejemplos en Angular"),e(),i(533,"pre"),o(534,"code",5),e()(),i(535,"div",21)(536,"h3"),t(537,"Mejores Pr\xE1cticas"),e(),i(538,"h4"),t(539,"Prioriza selectores sem\xE1nticos"),e(),i(540,"p")(541,"code"),t(542,"getByRole() > getByText() > locator() con CSS > getByTestId()"),e()(),i(543,"h4"),t(544,"Usa esperas expl\xEDcitas solo cuando sea necesario"),e(),i(545,"p"),t(546,"Playwright auto-espera en la mayor\xEDa de acciones. Usa "),i(547,"code"),t(548,"waitForURL()"),e(),t(549," despu\xE9s de navegaci\xF3n."),e(),i(550,"h4"),t(551,"Escribe tests independientes"),e(),i(552,"p"),t(553,"Cada test debe ser autocontenido. No dependas del estado de tests previos."),e(),i(554,"h4"),t(555,"Usa Page Objects para tests complejos"),e(),i(556,"pre"),o(557,"code",5),e(),i(558,"h4"),t(559,"Maneja asincron\xEDa correctamente"),e(),i(560,"p"),t(561,"Siempre usa "),i(562,"code"),t(563,"await"),e(),t(564," en operaciones que devuelven promesas."),e(),i(565,"h4"),t(566,"Tests de accesibilidad"),e(),i(567,"p"),t(568,"Usa "),i(569,"code"),t(570,"getByRole()"),e(),t(571," para verificar estructura sem\xE1ntica y labels en formularios."),e(),i(572,"h4"),t(573,"Evita sleeps fijos"),e(),i(574,"p"),t(575,"Usa "),i(576,"code"),t(577,"waitFor*()"),e(),t(578," en lugar de "),i(579,"code"),t(580,"page.waitForTimeout()"),e(),t(581,"."),e(),i(582,"h4"),t(583,"Configura timeouts apropiados"),e(),i(584,"pre"),o(585,"code",5),e()(),i(586,"div",22)(587,"h3"),t(588,"Ejemplos Avanzados"),e(),i(589,"h4"),t(590,"Navegaci\xF3n con espera paralela"),e(),i(591,"pre")(592,"code"),t(593,`await Promise.all([
  page.waitForURL(/.*\\/lab\\/.*/),
  link.click()
]);`),e()(),i(594,"h4"),t(595,"Completar formulario"),e(),i(596,"pre"),o(597,"code",5),e(),i(598,"h4"),t(599,"Verificar lista din\xE1mica"),e(),i(600,"pre")(601,"code"),t(602,`const items = page.locator('.item');
await expect(items).toHaveCount(5);
await expect(items.first()).toContainText('Primer item');`),e()(),i(603,"h4"),t(604,"Manejar dropdowns"),e(),i(605,"pre")(606,"code"),t(607,"await page.getByRole('combobox').selectOption('Opci\xF3n 1');"),e()(),i(608,"h4"),t(609,"Subir archivos"),e(),i(610,"pre")(611,"code"),t(612,"await page.getByTestId('file-input').setInputFiles('path/to/file.pdf');"),e()(),i(613,"h4"),t(614,"Control de red"),e(),i(615,"pre"),o(616,"code",5),e(),i(617,"h4"),t(618,"Autenticaci\xF3n program\xE1tica"),e(),i(619,"pre"),o(620,"code",5),e()(),i(621,"div",23)(622,"h3"),t(623,"Depuraci\xF3n y Troubleshooting"),e(),i(624,"h4"),t(625,"Modo debug interactivo"),e(),i(626,"pre")(627,"code"),t(628,"npx playwright test --debug"),e()(),i(629,"p"),t(630,"Abre el navegador y permite inspeccionar en tiempo real."),e(),i(631,"h4"),t(632,"Pausar en c\xF3digo"),e(),i(633,"pre")(634,"code"),t(635,"await page.pause(); // Detiene ejecuci\xF3n para inspeccionar"),e()(),i(636,"h4"),t(637,"Capturas de pantalla"),e(),i(638,"pre"),o(639,"code",5),e(),i(640,"h4"),t(641,"Videos de tests"),e(),i(642,"p"),t(643,"Configura en "),i(644,"code"),t(645,"playwright.config.ts"),e(),t(646,":"),e(),i(647,"pre"),o(648,"code",5),e(),i(649,"h4"),t(650,"Inspeccionar elementos"),e(),i(651,"pre")(652,"code"),t(653,"await page.locator('selector').highlight();"),e()(),i(654,"h4"),t(655,"Logs de consola"),e(),i(656,"pre")(657,"code"),t(658,"page.on('console', msg => console.log(msg.text()));"),e()(),i(659,"h4"),t(660,"Problemas comunes"),e(),i(661,"ul")(662,"li")(663,"strong"),t(664,"Elemento no encontrado:"),e(),t(665," Verifica selectores y espera a que cargue."),e(),i(666,"li")(667,"strong"),t(668,"Timeout:"),e(),t(669," Aumenta timeout o usa esperas m\xE1s espec\xEDficas."),e(),i(670,"li")(671,"strong"),t(672,"Flaky tests:"),e(),t(673," Evita dependencias entre tests, usa selectores robustos."),e(),i(674,"li")(675,"strong"),t(676,"Cross-browser:"),e(),t(677," Prueba en todos los navegadores soportados."),e()()(),i(678,"div",24)(679,"h3"),t(680,"Integraci\xF3n con Angular"),e(),i(681,"h4"),t(682,"Esperar cambios de Angular"),e(),i(683,"pre"),o(684,"code",5),e(),i(685,"h4"),t(686,"Manejar routing de Angular"),e(),i(687,"pre"),o(688,"code",5),e(),i(689,"h4"),t(690,"Tests con NgRx"),e(),i(691,"pre"),o(692,"code",5),e(),i(693,"h4"),t(694,"Componentes din\xE1micos"),e(),i(695,"pre"),o(696,"code",5),e()(),i(697,"div",25)(698,"h3"),t(699,"Resumen"),e(),i(700,"p"),t(701," Playwright convierte las pruebas end-to-end en una experiencia moderna y escalable para Angular. Su fortaleza est\xE1 en la mezcla de confiabilidad, compatibilidad y herramientas de depuraci\xF3n. "),e(),i(702,"p"),t(703," Con esta gu\xEDa completa tienes todas las herramientas necesarias para escribir tests robustos, mantenibles y eficientes en tus aplicaciones Angular. "),e()()()),m&2&&(a(37),n("textContent",d.installCode),a(12),n("textContent",d.configCode),a(33),n("textContent",d.firstTestCode),a(43),n("textContent",d.pageObjectCode),a(4),n("textContent",d.pageObjectTestCode),a(24),n("textContent",d.fixtureProblemBeforeCode),a(4),n("textContent",d.fixtureProblemAfterCode),a(6),n("textContent",d.fixtureInterfaceCode),a(4),n("textContent",d.fixtureCode),a(4),n("textContent",d.fixtureUseCode),a(36),n("textContent",d.authStorageExampleCode),a(43),n("textContent",d.parallelCode),a(46),n("textContent",d.locatorExamplesCode),a(10),n("textContent",d.getByRoleExamplesCode),a(14),n("textContent",d.getByTextExampleCode),a(86),n("textContent",d.typeExampleCode),a(128),n("textContent",d.angularExampleCode),a(23),n("textContent",d.pageObjectExampleCode),a(28),n("textContent",d.timeoutExampleCode),a(12),n("textContent",d.formExampleCode),a(19),n("textContent",d.networkExampleCode),a(4),n("textContent",d.authExampleCode),a(19),n("textContent",d.screenshotExampleCode),a(9),n("textContent",d.videoConfigExampleCode),a(36),n("textContent",d.angularWaitExampleCode),a(4),n("textContent",d.angularRoutingExampleCode),a(4),n("textContent",d.ngrxStoreExampleCode),a(4),n("textContent",d.dynamicComponentsExampleCode))},styles:[".cards[_ngcontent-%COMP%]{display:grid;gap:1.5rem}.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0}.card[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:#111827;color:#f8fafc;padding:1rem;overflow:auto;border-radius:.5rem}.card[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}"]})};export{E as PlaywrightLearnComponent};
