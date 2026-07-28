import{Gb as o,Hb as t,Ib as a,Kb as n,Ta as i,Zb as e,fb as l}from"./chunk-G73V3KC4.js";import"./chunk-2NFLSA4Y.js";var s=class m{installCode="npm init playwright@latest";configCode=`import { defineConfig } from '@playwright/test';

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
page.getByRole('heading', { name: /NgRx/i });`;browsersInstallCode=`# Instala solo los navegadores que necesitas
npx playwright install chromium

# En CI instala tambi\xE9n las dependencias del sistema operativo
npx playwright install --with-deps`;realConfigCode=`// playwright.config.ts (configuraci\xF3n real de este repo)
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,               // archivos y tests en paralelo
  forbidOnly: !!process.env.CI,      // falla el build si queda un test.only
  retries: process.env.CI ? 2 : 0,   // reintentos solo en CI
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? 'github' : 'html',
  use: {
    baseURL: 'http://localhost:4200',   // permite page.goto('/lab/playwright')
    trace: 'on-first-retry',            // trace solo al reintentar
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit',   use: { ...devices['Desktop Safari'] } },
  ],
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:4200',
    reuseExistingServer: !process.env.CI,  // en local reutiliza tu ng serve
  },
});`;locatorHierarchyCode=`// 1) getByRole: refleja c\xF3mo percibe la p\xE1gina un usuario
//    (y un lector de pantalla). El m\xE1s resistente a refactors.
page.getByRole('button', { name: 'Guardar' });

// 2) getByLabel: ideal para formularios accesibles
page.getByLabel('Correo electr\xF3nico');

// 3) getByText: contenido visible y \xFAnico
page.getByText('Bienvenido de nuevo', { exact: true });

// 4) getByTestId: \xFAltimo recurso estable cuando no hay sem\xE1ntica
page.getByTestId('submit-button');

// Refinar cuando hay m\xFAltiples coincidencias (evita .nth() si puedes)
page.getByRole('listitem').filter({ hasText: 'Playwright' });
page.locator('article', { has: page.getByRole('heading', { name: 'NgRx' }) });`;webFirstAssertionsCode=`// Las web-first assertions reintentan (polling) hasta cumplirse
// o agotar el timeout de expect (5s por defecto).
await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
await expect(page.locator('.status')).toHaveText('Completado');
await expect(page.locator('.item')).toHaveCount(3);

// expect.poll: polling sobre valores que no son locators
await expect.poll(async () => {
  const response = await page.request.get('/api/health');
  return response.status();
}, { timeout: 10000 }).toBe(200);

// \u274C MAL: lee el estado UNA sola vez, sin reintentos \u2192 flaky
expect(await page.locator('.status').textContent()).toBe('Completado');`;realPomCode=`// tests/pages/playwright-lab.page.ts (page object real de este repo)
import type { Page, Locator } from '@playwright/test';
import { routes } from '../shared/routes';

export class PlaywrightLabPage {
  readonly page: Page;
  readonly tabLinks: Locator;

  constructor(page: Page) {
    this.page = page;
    this.tabLinks = page.locator('nav a');
  }

  async goto() {
    await this.page.goto(routes.labs.playwright);
  }

  async navigateToTab(label: string) {
    await this.page.getByRole('link', { name: new RegExp(label, 'i') }).click();
  }

  firstCodeBlock(): Locator {
    return this.page.locator('pre, code').first();
  }
}`;realFixturesCode=`// tests/fixtures/app-fixtures.ts (fixtures reales de este repo)
import { test as base, expect } from '@playwright/test';
import { AppModule } from '../pages/app.module';
import { DashboardPage } from '../pages/dashboard.page';
import { PlaywrightLabPage } from '../pages/playwright-lab.page';

export type AppFixtures = {
  app: AppModule;
  dashboardPage: DashboardPage;
  playwrightLabPage: PlaywrightLabPage;
};

export const test = base.extend<AppFixtures>({
  app: async ({ page }, use) => {
    await use(new AppModule(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  playwrightLabPage: async ({ page }, use) => {
    await use(new PlaywrightLabPage(page));
  },
});

export { expect };`;workerScopeCode=`import { test as base } from '@playwright/test';
import type { Page } from '@playwright/test';

type TestFixtures = { pageSinBanner: Page };
type WorkerFixtures = { apiToken: string };

export const test = base.extend<TestFixtures, WorkerFixtures>({
  // Scope "test" (default): se crea y destruye por CADA test
  pageSinBanner: async ({ page }, use) => {
    await page.addInitScript(() => localStorage.setItem('banner', 'off'));
    await use(page);
  },

  // Scope "worker": se crea UNA vez por worker y se comparte
  // entre todos los tests de ese worker (setup costoso)
  apiToken: [async ({}, use) => {
    const token = await obtenerTokenDeAPI(); // operaci\xF3n cara
    await use(token);
    // teardown: se ejecuta al terminar el worker
  }, { scope: 'worker' }],
});`;overrideFixtureCode=`// Override de una fixture integrada:
// todos los tests de esta suite parten autenticados
export const test = base.extend({
  storageState: 'playwright/.auth/user.json',
});

// Override puntual por archivo o describe
test.use({ viewport: { width: 390, height: 844 } });
test.use({ locale: 'es-CO', timezoneId: 'America/Bogota' });`;setupProjectCode=`// auth.setup.ts \u2014 corre UNA vez antes de la suite
import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  await page.goto('/login');
  await page.getByLabel('Usuario').fill(process.env.E2E_USER!);
  await page.getByLabel('Contrase\xF1a').fill(process.env.E2E_PASS!);
  await page.getByRole('button', { name: 'Entrar' }).click();
  // Espera una se\xF1al de que el login termin\xF3 ANTES de guardar el estado
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await page.context().storageState({ path: authFile });
});

// playwright.config.ts
projects: [
  { name: 'setup', testMatch: /.*\\.setup\\.ts/ },
  {
    name: 'chromium',
    use: { ...devices['Desktop Chrome'], storageState: authFile },
    dependencies: ['setup'],   // chromium espera a que setup termine
  },
],`;routeMockCode=`// Mock de una respuesta (fulfill): el backend nunca recibe la request
await page.route('**/api/products', route =>
  route.fulfill({
    status: 200,
    contentType: 'application/json',
    body: JSON.stringify([{ id: 1, name: 'Laptop', price: 999 }]),
  })
);

// Simular un error de servidor para probar la UI de error
await page.route('**/api/products', route =>
  route.fulfill({ status: 500, body: 'Internal Server Error' })
);

// Abortar recursos pesados para acelerar tests
await page.route('**/*.{png,jpg,svg,woff2}', route => route.abort());

// Passthrough + patch: deja pasar la request real y modifica la respuesta
await page.route('**/api/user', async route => {
  const response = await route.fetch();
  const json = await response.json();
  json.role = 'admin';
  await route.fulfill({ response, json });
});`;waitForResponseCode=`// Registrar la espera ANTES de disparar la acci\xF3n
const responsePromise = page.waitForResponse('**/api/products');
await page.getByRole('button', { name: 'Cargar productos' }).click();
const response = await responsePromise;
expect(response.status()).toBe(200);`;traceToolsCode=`# Grabar trace en cada ejecuci\xF3n local
npx playwright test --trace on

# Abrir un trace guardado (timeline, snapshots DOM, red, consola)
npx playwright show-trace test-results/mi-test/trace.zip

# UI Mode: modo watch + time travel + explorador de locators
npx playwright test --ui

# Inspector paso a paso (desactiva timeouts)
npx playwright test --debug

# Codegen: graba interacciones y genera c\xF3digo con locators modernos
npx playwright codegen http://localhost:4200`;shardingCode=`# Divide la suite entre 4 m\xE1quinas de CI
npx playwright test --shard=1/4
npx playwright test --shard=2/4   # ... etc.

# GitHub Actions con matrix
strategy:
  fail-fast: false
  matrix:
    shardIndex: [1, 2, 3, 4]
steps:
  - run: npx playwright test --shard=\${{ matrix.shardIndex }}/4

# Luego se mezclan los reportes con blob reporter
npx playwright merge-reports --reporter html ./all-blob-reports`;tagsCode=`// tests/integration.spec.ts (tests reales de este repo)
test('[@smoke] complete user journey through a lab', async ({ app }) => {
  // flujo cr\xEDtico: dashboard \u2192 lab \u2192 tabs
});

test('[@regression] cross-lab navigation works', async ({ app }) => {
  // cobertura amplia, corre en el pipeline nocturno o pre-release
});

// package.json (scripts reales de este repo)
"test:e2e:smoke": "playwright test --grep @smoke",
"test:e2e:regression": "playwright test --grep @regression"

// Excluir tests por tag
npx playwright test --grep-invert @slow

// Sintaxis moderna (Playwright 1.42+): tags como opci\xF3n
test('checkout', { tag: ['@smoke', '@critical'] }, async ({ page }) => {
  // ...
});`;visualTestingCode=`test('la card de introducci\xF3n no cambia visualmente', async ({ page }) => {
  await page.goto('/lab/playwright');
  // Compara contra el snapshot guardado; la primera ejecuci\xF3n lo genera
  await expect(page.locator('#introduccion')).toHaveScreenshot('intro-card.png', {
    maxDiffPixelRatio: 0.01,
    mask: [page.locator('.timestamp')],  // oculta zonas din\xE1micas
  });
});

// Snapshot de p\xE1gina completa
await expect(page).toHaveScreenshot({ fullPage: true });

// Actualizar snapshots cuando el cambio visual es intencional:
// npx playwright test --update-snapshots`;axeCode=`// npm i -D @axe-core/playwright
import AxeBuilder from '@axe-core/playwright';
import { test, expect } from '@playwright/test';

test('el dashboard no tiene violaciones de accesibilidad', async ({ page }) => {
  await page.goto('/');
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa'])     // reglas WCAG 2.0/2.1 A y AA
    .exclude('#widget-de-terceros')      // excluye lo que no controlas
    .analyze();

  expect(results.violations).toEqual([]);
});`;antiFlakyCode=`// \u274C MAL: espera arbitraria \u2014 lenta cuando sobra, flaky cuando falta
await page.waitForTimeout(3000);
await page.click('.submit');

// \u2705 BIEN: la assertion espera la condici\xF3n real con polling
await expect(page.getByRole('button', { name: 'Enviar' })).toBeEnabled();
await page.getByRole('button', { name: 'Enviar' }).click();

// \u2705 BIEN: datos \xFAnicos por test \u2192 sin colisiones en paralelo
const email = \`user-\${Date.now()}\` + '@example.com';

// \u2705 BIEN: cada test prepara su propio estado desde cero
test.beforeEach(async ({ page }) => {
  await page.goto('/lab/playwright');
});`;githubActionsCode=`# .github/workflows/playwright.yml (workflow real de este repo)
name: CI/CD Pipeline
on:
  push:
    branches: [ main, master ]
  pull_request:
    branches: [ main, master ]

jobs:
  build-and-test:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: lts/*
      - name: Install dependencies
        run: npm ci
      - name: Build Angular app
        run: npm run build
      - name: Install Playwright browsers
        run: npx playwright install --with-deps
      - name: Run Playwright E2E tests
        run: npm run test:e2e
      - uses: actions/upload-artifact@v4
        if: \${{ !cancelled() }}
        with:
          name: playwright-report
          path: playwright-report/
          retention-days: 30`;autoFixtureDocCode=`// tests/hooks/generate-documentation.ts (hook real de este repo)
export const test = base.extend<DocumentationFixtures>({
  // auto: true \u2192 se ejecuta en TODOS los tests sin pedirla expl\xEDcitamente
  _autoDocumentTest: [async ({ documentTest }, use, testInfo) => {
    await documentTest({
      testName: testInfo.title,
      description: \`Auto-generated E2E documentation for test "\${testInfo.title}".\`,
      testFile: testInfo.file,
    });
    await use();
  }, { auto: true }],

  documentTest: async ({}, use) => {
    await use(async ({ testName, description, testFile }) => {
      // genera un .md por test en test-documentation/
    });
  },
});`;static \u0275fac=function(r){return new(r||m)};static \u0275cmp=l({type:m,selectors:[["app-playwright-learn"]],decls:1639,vars:43,consts:[[1,"cards"],["id","introduccion",1,"card"],["id","por-que-playwright",1,"card"],["id","cypress-vs-playwright",1,"card"],["id","install",1,"card"],[3,"textContent"],["id","configuracion-inicial",1,"card"],["id","playwright-config-ts-en-profundidad",1,"card"],["id","estructura-de-pruebas",1,"card"],["id","primer-test",1,"card"],["id","jerarquia-de-locators-recomendada",1,"card"],["id","auto-waiting-y-web-first-assertions",1,"card"],["id","page-object-model",1,"card"],[1,"code-ref"],["id","fixtures-personalizados",1,"card"],["id","fixtures-scope-de-test-vs-worker",1,"card"],["id","hook-de-documentacion-automatica",1,"card"],["id","autenticacion-persistente",1,"card"],["id","mock-de-red-con-page-route",1,"card"],["id","ejecucion-y-debug",1,"card"],["id","inspector",1,"card"],["id","tracing-trace-viewer-y-ui-mode",1,"card"],["id","paralelizacion",1,"card"],["id","paralelismo-y-sharding-en-ci",1,"card"],["id","tags-y-grep-smoke-y-regression",1,"card"],["id","cicd",1,"card"],["id","vscode-extension",1,"card"],["id","metodos-localizacion",1,"card"],["id","acciones-elementos",1,"card"],["id","assertions",1,"card"],["id","atributos-datos",1,"card"],["id","mejores-practicas",1,"card"],["id","ejemplos-avanzados",1,"card"],["id","depuracion",1,"card"],["id","integracion-angular",1,"card"],["id","conclusion",1,"card"]],template:function(r,d){r&1&&(o(0,"div",0)(1,"div",1)(2,"h3"),e(3,"Introducci\xF3n"),t(),o(4,"p"),e(5," Playwright es un framework moderno de pruebas end-to-end creado por Microsoft. Permite testear aplicaciones web de forma confiable, r\xE1pida y cross-browser, ejecutando flujos reales del usuario en Chromium, Firefox y WebKit. "),t(),o(6,"p"),e(7," Para aplicaciones Angular esta herramienta es ideal porque automatiza la espera de acciones, maneja m\xFAltiples contextos aislados y soporta pruebas en paralelo, todo sin depender de un servidor real en cada ejecuci\xF3n. "),t()(),o(8,"div",2)(9,"h3"),e(10,"\xBFPor qu\xE9 elegir Playwright?"),t(),o(11,"ul")(12,"li"),e(13,"Compatibilidad con m\xFAltiples navegadores: Chromium, Firefox y WebKit."),t(),o(14,"li"),e(15,"Auto-waiting integrado: espera que los elementos sean interactuables antes de actuar."),t(),o(16,"li"),e(17,"Control de red y contexto: intercepte requests, use m\xFAltiples tabs y or\xEDgenes separados."),t(),o(18,"li"),e(19,"Ejecuta pruebas aisladas: cada test obtiene un contexto fresco en el mismo proceso."),t(),o(20,"li"),e(21,"Depuraci\xF3n avanzada: inspector, grabador y trace viewer ayudan a diagnosticar fallas."),t(),o(22,"li"),e(23,"Paralelismo eficiente: ejecuta tests en workers simult\xE1neos y reduce tiempos de ejecuci\xF3n."),t()()(),o(24,"div",3)(25,"h3"),e(26,"Diferencias con Cypress"),t(),o(27,"p"),e(28," Cypress corre dentro del navegador, lo que entrega una experiencia de depuraci\xF3n muy fluida. Sin embargo, su sandbox limita escenarios como m\xFAltiples pesta\xF1as, cross-origin y control externo del navegador. "),t(),o(29,"p"),e(30," Playwright corre fuera del navegador y controla su interno, lo que lo hace m\xE1s flexible para pruebas complejas, aunque a veces la configuraci\xF3n inicial puede ser un poco m\xE1s detallada. "),t()(),o(31,"div",4)(32,"h3"),e(33,"Instalaci\xF3n"),t(),o(34,"p"),e(35," En un proyecto Angular puedes inicializar Playwright con este comando: "),t(),o(36,"pre"),a(37,"code",5),t(),o(38,"p"),e(39," El asistente te pedir\xE1 opciones como TypeScript vs JavaScript, ubicaci\xF3n de tests, integraci\xF3n CI y si deseas instalar navegadores. "),t(),o(40,"p"),e(41," Los navegadores de Playwright son binarios propios (Chromium, Firefox y WebKit) que se descargan aparte del paquete npm. Despu\xE9s de actualizar la versi\xF3n de "),o(42,"code"),e(43,"@playwright/test"),t(),e(44," debes reinstalarlos: "),t(),o(45,"pre"),a(46,"code",5),t(),o(47,"h4"),e(48,"\u26A0\uFE0F Errores comunes"),t(),o(49,"ul")(50,"li"),e(51,"Actualizar el paquete npm sin volver a ejecutar "),o(52,"code"),e(53,"npx playwright install"),t(),e(54,`: los binarios quedan desincronizados y los tests fallan con errores de "Executable doesn't exist".`),t(),o(55,"li"),e(56,"Olvidar "),o(57,"code"),e(58,"--with-deps"),t(),e(59," en CI Linux: faltan librer\xEDas del sistema y el navegador no arranca."),t(),o(60,"li"),e(61,"Versionar la carpeta "),o(62,"code"),e(63,"test-results/"),t(),e(64," o "),o(65,"code"),e(66,"playwright-report/"),t(),e(67," en git en lugar de agregarlas a "),o(68,"code"),e(69,".gitignore"),t(),e(70,"."),t()(),o(71,"h4"),e(72,"\u{1F3A4} Preguntas de entrevista"),t(),o(73,"ul")(74,"li")(75,"strong"),e(76,"\xBFPor qu\xE9 Playwright descarga sus propios navegadores?"),t(),e(77," Para garantizar versiones probadas y reproducibles en cualquier m\xE1quina; WebKit y Firefox usan builds parcheados que exponen el protocolo de automatizaci\xF3n."),t(),o(78,"li")(79,"strong"),e(80,"\xBFQu\xE9 hace "),o(81,"code"),e(82,"npx playwright install --with-deps"),t(),e(83,"?"),t(),e(84," Instala los binarios de los navegadores y adem\xE1s las dependencias del sistema operativo (fuentes, librer\xEDas gr\xE1ficas) que necesitan en entornos CI Linux."),t()()(),o(85,"div",6)(86,"h3"),e(87,"Configuraci\xF3n inicial para Angular"),t(),o(88,"p"),e(89," La configuraci\xF3n principal vive en "),o(90,"code"),e(91,"playwright.config.ts"),t(),e(92,". Para Angular conviene definir un servidor local que arranque antes de las pruebas: "),t(),o(93,"pre"),a(94,"code",5),t(),o(95,"p"),e(96," Estas opciones permiten ejecutar pruebas autom\xE1ticamente contra la app Angular en desarrollo. "),t()(),o(97,"div",7)(98,"h3"),e(99,"playwright.config.ts en profundidad"),t(),o(100,"p"),e(101," El archivo de configuraci\xF3n es el contrato de toda la suite. Este repo tiene uno real en la ra\xEDz ("),o(102,"code"),e(103,"playwright.config.ts"),t(),e(104,") que ilustra las opciones m\xE1s importantes: "),t(),o(105,"pre"),a(106,"code",5),t(),o(107,"h4"),e(108,"Opciones clave"),t(),o(109,"ul")(110,"li")(111,"strong"),e(112,"baseURL:"),t(),e(113," permite escribir "),o(114,"code"),e(115,"page.goto('/lab/playwright')"),t(),e(116," con rutas relativas; cambiar de entorno (local, staging) es cambiar una sola l\xEDnea o una variable de entorno."),t(),o(117,"li")(118,"strong"),e(119,"projects:"),t(),e(120," cada project es una combinaci\xF3n de navegador + opciones. Sirven para cross-browser, viewports m\xF3viles, o para modelar dependencias (proyecto de setup de autenticaci\xF3n)."),t(),o(121,"li")(122,"strong"),e(123,"webServer:"),t(),e(124," levanta la app antes de la suite y espera a que responda la URL. "),o(125,"code"),e(126,"reuseExistingServer: !process.env.CI"),t(),e(127," reutiliza tu "),o(128,"code"),e(129,"ng serve"),t(),e(130," local pero garantiza un server limpio en CI."),t(),o(131,"li")(132,"strong"),e(133,"retries:"),t(),e(134," reintenta tests fallidos. \xDAtil en CI ("),o(135,"code"),e(136,"retries: 2"),t(),e(137,") para absorber fallas de infraestructura, pero un test que necesita retries para pasar es un test flaky que hay que arreglar."),t(),o(138,"li")(139,"strong"),e(140,"workers:"),t(),e(141," procesos paralelos. Local usa el default (mitad de los cores); este repo usa "),o(142,"code"),e(143,"workers: 1"),t(),e(144," en CI porque los runners compartidos tienen poca CPU."),t(),o(145,"li")(146,"strong"),e(147,"trace / screenshot / video:"),t(),e(148," artefactos de diagn\xF3stico. La combinaci\xF3n "),o(149,"code"),e(150,"trace: 'on-first-retry'"),t(),e(151," + "),o(152,"code"),e(153,"screenshot: 'only-on-failure'"),t(),e(154," da evidencia sin penalizar los runs exitosos."),t()(),o(155,"h4"),e(156,"\u26A0\uFE0F Errores comunes"),t(),o(157,"ul")(158,"li"),e(159,"Poner "),o(160,"code"),e(161,"reuseExistingServer: true"),t(),e(162," tambi\xE9n en CI: puedes terminar testeando contra un server zombie con c\xF3digo viejo."),t(),o(163,"li"),e(164,"Subir "),o(165,"code"),e(166,"workers"),t(),e(167," en CI sin medir: m\xE1s workers que cores reales provoca timeouts en cascada."),t(),o(168,"li"),e(169,"Usar "),o(170,"code"),e(171,"trace: 'on'"),t(),e(172," siempre: los traces pesan y ralentizan; gu\xE1rdalos solo en retry o failure."),t(),o(173,"li"),e(174,"Hardcodear URLs absolutas en los tests en vez de confiar en "),o(175,"code"),e(176,"baseURL"),t(),e(177,"."),t()(),o(178,"h4"),e(179,"\u{1F3A4} Preguntas de entrevista"),t(),o(180,"ul")(181,"li")(182,"strong"),e(183,"\xBFQu\xE9 diferencia hay entre "),o(184,"code"),e(185,"timeout"),t(),e(186," y "),o(187,"code"),e(188,"expect.timeout"),t(),e(189,"?"),t(),e(190," El primero limita la duraci\xF3n total de cada test (30s default); el segundo, cu\xE1nto reintenta cada assertion web-first (5s default)."),t(),o(191,"li")(192,"strong"),e(193,"\xBFPara qu\xE9 sirven los projects adem\xE1s de cross-browser?"),t(),e(194," Para variar cualquier opci\xF3n de "),o(195,"code"),e(196,"use"),t(),e(197," (viewport, locale, storageState) y para encadenar dependencias, como un project de setup que autentica antes que el resto."),t(),o(198,"li")(199,"strong"),e(200,"\xBFQu\xE9 hace "),o(201,"code"),e(202,"forbidOnly"),t(),e(203,"?"),t(),e(204," Falla el build en CI si alguien dej\xF3 un "),o(205,"code"),e(206,"test.only"),t(),e(207,", evitando que la suite corra incompleta sin que nadie lo note."),t()()(),o(208,"div",8)(209,"h3"),e(210,"C\xF3mo estructurar las pruebas"),t(),o(211,"p"),e(212," Organiza tus archivos en carpetas claras. Una convenci\xF3n \xFAtil es: "),t(),o(213,"ul")(214,"li")(215,"code"),e(216,"tests/shared/"),t(),e(217," para utilidades y elementos reutilizables."),t(),o(218,"li")(219,"code"),e(220,"tests/pages/"),t(),e(221," para page objects del Page Object Model."),t(),o(222,"li")(223,"code"),e(224,"tests/fixtures/"),t(),e(225," para extensiones de fixtures personalizadas."),t(),o(226,"li")(227,"code"),e(228,"tests/*.spec.ts"),t(),e(229," para los casos de prueba."),t()(),o(230,"p"),e(231," De esta forma cada prueba queda m\xE1s legible y el mantenimiento se concentra en los objetos de p\xE1gina. "),t()(),o(232,"div",9)(233,"h3"),e(234,"Escribir tu primer test E2E"),t(),o(235,"p"),e(236," Playwright sincroniza autom\xE1ticamente las acciones, por lo que no necesitas timeouts manuales en la mayor\xEDa de los casos. "),t(),o(237,"pre"),a(238,"code",5),t()(),o(239,"div",10)(240,"h3"),e(241,"Jerarqu\xEDa de locators recomendada"),t(),o(242,"p"),e(243," La documentaci\xF3n oficial recomienda un orden claro: "),o(244,"code"),e(245,"getByRole"),t(),e(246," > "),o(247,"code"),e(248,"getByLabel"),t(),e(249," > "),o(250,"code"),e(251,"getByText"),t(),e(252," > "),o(253,"code"),e(254,"getByTestId"),t(),e(255,". La raz\xF3n: cuanto m\xE1s se parezca el locator a c\xF3mo un usuario (o un lector de pantalla) encuentra el elemento, m\xE1s resistente ser\xE1 a refactors de CSS y de estructura del DOM. "),t(),o(256,"ul")(257,"li")(258,"strong"),e(259,"getByRole:"),t(),e(260," usa el \xE1rbol de accesibilidad (ARIA). Si un bot\xF3n cambia de clase, de tag o de posici\xF3n, el rol y su nombre accesible suelen mantenerse. Adem\xE1s valida gratis que tu UI es sem\xE1ntica."),t(),o(261,"li")(262,"strong"),e(263,"getByLabel:"),t(),e(264," el est\xE1ndar para formularios. Si falla, probablemente al input le falta un "),o(265,"code"),e(266,"label"),t(),e(267,", lo cual tambi\xE9n es un bug de accesibilidad."),t(),o(268,"li")(269,"strong"),e(270,"getByText:"),t(),e(271," v\xE1lido para contenido visible \xFAnico; fr\xE1gil si el copy cambia con frecuencia o est\xE1 internacionalizado."),t(),o(272,"li")(273,"strong"),e(274,"getByTestId:"),t(),e(275," estable pero opaco: no valida nada de la experiencia real del usuario. Res\xE9rvalo para elementos sin sem\xE1ntica (divs decorativos, \xEDtems generados)."),t()(),o(276,"pre"),a(277,"code",5),t(),o(278,"h4"),e(279,"\u26A0\uFE0F Errores comunes"),t(),o(280,"ul")(281,"li"),e(282,"Selectores CSS acoplados a la estructura: "),o(283,"code"),e(284,"div.container > div:nth-child(3) span"),t(),e(285," se rompe con cualquier refactor."),t(),o(286,"li"),e(287,"Abusar de "),o(288,"code"),e(289,".nth(i)"),t(),e(290,": el orden de los elementos es un detalle de implementaci\xF3n; prefiere "),o(291,"code"),e(292,".filter()"),t(),e(293," con texto o con otro locator."),t(),o(294,"li"),e(295,"Usar XPath por costumbre: casi siempre existe un locator sem\xE1ntico equivalente m\xE1s legible."),t(),o(296,"li"),e(297,"Poner "),o(298,"code"),e(299,"data-testid"),t(),e(300,' en todo "por si acaso": pierdes la validaci\xF3n sem\xE1ntica que dan los locators por rol.'),t()(),o(301,"h4"),e(302,"\u{1F3A4} Preguntas de entrevista"),t(),o(303,"ul")(304,"li")(305,"strong"),e(306,"\xBFPor qu\xE9 getByRole es preferible a un selector CSS?"),t(),e(307," Porque se basa en el \xE1rbol de accesibilidad, no en la implementaci\xF3n: sobrevive a cambios de estilos y verifica de paso la sem\xE1ntica ARIA."),t(),o(308,"li")(309,"strong"),e(310,"\xBFQu\xE9 es un locator en Playwright?"),t(),e(311," Una descripci\xF3n lazy de c\xF3mo encontrar un elemento; no busca en el DOM hasta que ejecutas una acci\xF3n o assertion, y en ese momento re-resuelve el elemento (evita stale references)."),t(),o(312,"li")(313,"strong"),e(314,"\xBFQu\xE9 es el strict mode de locators?"),t(),e(315," Si un locator usado en una acci\xF3n resuelve m\xE1s de un elemento, Playwright lanza error en vez de actuar sobre el primero; te obliga a desambiguar."),t()()(),o(316,"div",11)(317,"h3"),e(318,"Auto-waiting y web-first assertions"),t(),o(319,"p"),e(320," Antes de cada acci\xF3n, Playwright ejecuta "),o(321,"em"),e(322,"actionability checks"),t(),e(323,": espera a que el elemento est\xE9 adjunto al DOM, visible, estable (sin animarse), habilitado y que reciba los eventos (no tapado por otro elemento). Por eso casi nunca necesitas esperas manuales. "),t(),o(324,"p"),e(325," Las "),o(326,"strong"),e(327,"web-first assertions"),t(),e(328," ("),o(329,"code"),e(330,"await expect(locator)..."),t(),e(331,") complementan esto: no leen el estado una vez, sino que hacen "),o(332,"em"),e(333,"polling"),t(),e(334," reintentando hasta que la condici\xF3n se cumple o se agota el timeout. Son la herramienta central contra el flakiness en apps Angular, donde el render es as\xEDncrono. "),t(),o(335,"pre"),a(336,"code",5),t(),o(337,"h4"),e(338,"Mejores pr\xE1cticas"),t(),o(339,"ul")(340,"li"),e(341,"Prefiere "),o(342,"code"),e(343,"toBeVisible"),t(),e(344,", "),o(345,"code"),e(346,"toHaveText"),t(),e(347,", "),o(348,"code"),e(349,"toHaveURL"),t(),e(350,", "),o(351,"code"),e(352,"toHaveCount"),t(),e(353," sobre extraer valores con "),o(354,"code"),e(355,"textContent()"),t(),e(356," y comparar a mano."),t(),o(357,"li"),e(358,"Despu\xE9s de una navegaci\xF3n SPA, asserta sobre la URL o sobre contenido nuevo; no uses "),o(359,"code"),e(360,"waitForLoadState('networkidle')"),t(),e(361," como comod\xEDn (est\xE1 desaconsejado)."),t(),o(362,"li"),e(363,"Usa "),o(364,"code"),e(365,"expect.poll"),t(),e(366," o "),o(367,"code"),e(368,"expect.toPass"),t(),e(369," para condiciones que no son locators (respuestas de API, estado de un store)."),t()(),o(370,"h4"),e(371,"\u26A0\uFE0F Errores comunes"),t(),o(372,"ul")(373,"li"),e(374,"Olvidar el "),o(375,"code"),e(376,"await"),t(),e(377," en la assertion: "),o(378,"code"),e(379,"expect(locator).toBeVisible()"),t(),e(380," sin await no espera nada y el test sigue de largo."),t(),o(381,"li"),e(382,"Mezclar "),o(383,"code"),e(384,"expect(await locator.isVisible()).toBe(true)"),t(),e(385,": convierte una assertion con polling en una lectura \xFAnica y flaky."),t(),o(386,"li"),e(387,"A\xF1adir "),o(388,"code"),e(389,"waitForTimeout"),t(),e(390,' "para estar seguros": suma minutos a la suite y esconde la condici\xF3n real que hab\xEDa que esperar.'),t()(),o(391,"h4"),e(392,"\u{1F3A4} Preguntas de entrevista"),t(),o(393,"ul")(394,"li")(395,"strong"),e(396,"\xBFQu\xE9 checks hace Playwright antes de un click?"),t(),e(397," Visible, estable, adjunto al DOM, habilitado y que el punto de click no est\xE9 interceptado por otro elemento; reintenta hasta el timeout."),t(),o(398,"li")(399,"strong"),e(400,"\xBFDiferencia entre una assertion web-first y una de Jest?"),t(),e(401," La web-first recibe un locator y reintenta con polling; la cl\xE1sica eval\xFAa un valor ya resuelto una sola vez."),t(),o(402,"li")(403,"strong"),e(404,"\xBFCu\xE1ndo s\xED usar\xEDas una espera expl\xEDcita?"),t(),e(405," Para eventos no ligados a un elemento: "),o(406,"code"),e(407,"waitForURL"),t(),e(408," tras navegaci\xF3n, "),o(409,"code"),e(410,"waitForResponse"),t(),e(411," para una llamada de red concreta."),t()()(),o(412,"div",12)(413,"h3"),e(414,"Page Object Model"),t(),o(415,"p"),e(416," El patr\xF3n Page Object Model (POM) abstrae selectores y flujos de la aplicaci\xF3n en clases, dejando los tests enfocados en el comportamiento y no en la implementaci\xF3n de la UI. "),t(),o(417,"p"),e(418,"Un Page Object representa una p\xE1gina o una parte relevante de la interfaz, y expone m\xE9todos de alto nivel que describen acciones de usuario, en lugar de exponer selectores directamente."),t(),o(419,"h4"),e(420,"\xBFPor qu\xE9 usar POM?"),t(),o(421,"ul")(422,"li"),e(423,"Reduce la duplicaci\xF3n de selectores y flujos."),t(),o(424,"li"),e(425,"Hace los tests m\xE1s legibles y f\xE1ciles de entender."),t(),o(426,"li"),e(427,"Protege los tests de cambios frecuentes en la UI."),t(),o(428,"li"),e(429,"Permite centralizar el mantenimiento de locators en un solo lugar."),t()(),o(430,"h4"),e(431,"Cu\xE1ndo usarlo"),t(),o(432,"ul")(433,"li"),e(434,"Cuando una p\xE1gina tiene m\xFAltiples interacciones recurrentes."),t(),o(435,"li"),e(436,"Cuando quieres encapsular validaciones comunes."),t(),o(437,"li"),e(438,"Cuando tu suite crece y necesitas mantener tests escalables."),t()(),o(439,"h4"),e(440,"Estructura recomendada"),t(),o(441,"p"),e(442,"Una convenci\xF3n t\xEDpica es usar carpetas como:"),t(),o(443,"pre")(444,"code"),e(445,`tests/pages/dashboard.page.ts
tests/pages/login.page.ts
tests/pages/product.page.ts`),t()(),o(446,"p"),e(447,"Tambi\xE9n puedes usar un archivo "),o(448,"code"),e(449,"tests/pages/base.page.ts"),t(),e(450," para compartir utilidades comunes."),t(),o(451,"h4"),e(452,"Ejemplo de clase Page Object"),t(),o(453,"pre"),a(454,"code",5),t(),o(455,"h4"),e(456,"Ejemplo de test usando POM"),t(),o(457,"pre"),a(458,"code",5),t(),o(459,"h4"),e(460,"Buenas pr\xE1cticas"),t(),o(461,"ul")(462,"li"),e(463,"Guarda los locators como propiedades privadas o readonly."),t(),o(464,"li"),e(465,"Exp\xF3n solo m\xE9todos de alto nivel que representen comportamientos."),t(),o(466,"li"),e(467,"No pongas assertions complejas dentro del Page Object; deja las expectativas en el test."),t(),o(468,"li"),e(469,"Evita l\xF3gica de negocio en los Page Objects; solo encapsula interacci\xF3n y consultas de UI."),t(),o(470,"li"),e(471,"Si una pantalla crece, divide la clase en page components (subobjetos) para mantenerla manejable."),t()(),o(472,"h4"),e(473,"Cu\xE1ndo NO usarlo"),t(),o(474,"ul")(475,"li"),e(476,"Suites peque\xF1as (menos de ~10 tests sobre pocas pantallas): la capa extra solo agrega indirecci\xF3n."),t(),o(477,"li"),e(478,'Cuando el Page Object se convierte en una "god class" con decenas de m\xE9todos: divide o reemplaza por helpers puntuales.'),t(),o(479,"li"),e(480,"Como sustituto de fixtures: el POM organiza "),o(481,"em"),e(482,"p\xE1ginas"),t(),e(483,"; el "),o(484,"em"),e(485,"entorno"),t(),e(486," (instancias, datos, auth) se organiza mejor con fixtures. En este repo ambos conviven: los page objects viven en "),o(487,"code"),e(488,"tests/pages/"),t(),e(489," y se inyectan v\xEDa fixtures desde "),o(490,"code"),e(491,"tests/fixtures/app-fixtures.ts"),t(),e(492,"."),t()(),o(493,"h4"),e(494,"Page Object real de este repo"),t(),o(495,"pre"),a(496,"code",5),t(),o(497,"h4"),e(498,"\u26A0\uFE0F Errores comunes"),t(),o(499,"ul")(500,"li"),e(501,"Meter "),o(502,"code"),e(503,"expect"),t(),e(504," de negocio dentro del Page Object: oculta qu\xE9 verifica cada test y acopla la clase al framework de assertions."),t(),o(505,"li"),e(506,"Exponer locators p\xFAblicos crudos por todas partes: los tests vuelven a acoplarse a la UI y el patr\xF3n pierde sentido."),t(),o(507,"li"),e(508,"Devolver "),o(509,"code"),e(510,"ElementHandle"),t(),e(511," en lugar de "),o(512,"code"),e(513,"Locator"),t(),e(514,": los handles se vuelven stale; los locators se re-resuelven solos."),t(),o(515,"li"),e(516,"Crear jerarqu\xEDas de herencia profundas entre pages: prefiere composici\xF3n (page components)."),t()(),o(517,"h4"),e(518,"\u{1F3A4} Preguntas de entrevista"),t(),o(519,"ul")(520,"li")(521,"strong"),e(522,"\xBFQu\xE9 problema resuelve el POM?"),t(),e(523," Centraliza selectores y flujos de UI: un cambio de interfaz se arregla en un solo archivo en vez de en cada test."),t(),o(524,"li")(525,"strong"),e(526,"\xBFDeben ir las assertions en el Page Object?"),t(),e(527,' Regla pr\xE1ctica: assertions de negocio en el test; el page object puede exponer estados o assertions gen\xE9ricas de "p\xE1gina cargada".'),t(),o(528,"li")(529,"strong"),e(530,"\xBFQu\xE9 alternativa moderna existe al POM cl\xE1sico?"),t(),e(531," Fixtures de Playwright que inyectan pages o helpers ya inicializados; combinan bien: la fixture crea, el POM encapsula."),t()(),o(532,"p",13),e(533,"\u{1F4C1} C\xF3digo real: "),o(534,"code"),e(535,"tests/pages/playwright-lab.page.ts"),t(),e(536,", "),o(537,"code"),e(538,"tests/pages/dashboard.page.ts"),t(),e(539,", "),o(540,"code"),e(541,"tests/pages/app.module.ts"),t()()(),o(542,"div",14)(543,"h3"),e(544,"Fixtures personalizados"),t(),o(545,"p"),e(546," Playwright permite extender el fixture base para preparar el entorno antes de cada test y limpiar despu\xE9s. Si el POM sirve para organizar tus p\xE1ginas, las Fixtures sirven para organizar el entorno de tus tests. "),t(),o(547,"h4"),e(548,"\xBFQu\xE9 resuelven?"),t(),o(549,"p"),e(550,"Sin fixtures, cada test tendr\xEDa que crear y configurar manualmente los objetos necesarios:"),t(),o(551,"pre"),a(552,"code",5),t(),o(553,"p"),e(554,'Con fixtures, le dices a Playwright: "Oye, siempre que necesite loginPage, cr\xE9alo t\xFA autom\xE1ticamente y p\xE1samelo listo para usar".'),t(),o(555,"pre"),a(556,"code",5),t(),o(557,"h4"),e(558,"C\xF3mo se configuran (Ejemplo Real)"),t(),o(559,"p"),e(560,"1. Define la interfaz"),t(),o(561,"pre"),a(562,"code",5),t(),o(563,"p"),e(564,"2. Crea la fixture"),t(),o(565,"pre"),a(566,"code",5),t(),o(567,"p"),e(568,"3. \xDAsala en tu test"),t(),o(569,"pre"),a(570,"code",5),t(),o(571,"h4"),e(572,"Ventajas de nivel Senior"),t(),o(573,"ul")(574,"li")(575,"strong"),e(576,"Inyecci\xF3n de dependencias:"),t(),e(577," El test no sabe c\xF3mo se crea la p\xE1gina, solo la pide y la usa."),t(),o(578,"li")(579,"strong"),e(580,"Encapsulamiento:"),t(),e(581," Puedes meter l\xF3gica de setup compleja dentro de la fixture."),t(),o(582,"li")(583,"strong"),e(584,"Paralelizaci\xF3n segura:"),t(),e(585," Playwright garantiza que cada test tenga su propia instancia aislada."),t(),o(586,"li")(587,"strong"),e(588,"Legibilidad extrema:"),t(),e(589," Los tests se enfocan 100% en la l\xF3gica de negocio."),t()(),o(590,"p"),e(591,"Playwright ya trae fixtures integradas por defecto, como "),o(592,"code"),e(593,"page"),t(),e(594,", "),o(595,"code"),e(596,"browser"),t(),e(597," y "),o(598,"code"),e(599,"context"),t(),e(600,". Al crear las tuyas, personalizas las herramientas de tu taller."),t(),o(601,"h4"),e(602,"Auth Storage"),t(),o(603,"p"),e(604,"Usa una fixture para cargar un estado de autenticaci\xF3n ya guardado y evitar logins repetidos."),t(),o(605,"pre"),a(606,"code",5),t(),o(607,"h4"),e(608,"Fixtures reales de este repo"),t(),o(609,"p"),e(610,"Toda la suite E2E de esta app importa "),o(611,"code"),e(612,"test"),t(),e(613," desde "),o(614,"code"),e(615,"tests/fixtures"),t(),e(616,", que inyecta los page objects listos para usar:"),t(),o(617,"pre"),a(618,"code",5),t(),o(619,"h4"),e(620,"\u26A0\uFE0F Errores comunes"),t(),o(621,"ul")(622,"li"),e(623,"Olvidar llamar "),o(624,"code"),e(625,"await use(...)"),t(),e(626,': el test se cuelga hasta el timeout porque la fixture nunca "entrega" su valor.'),t(),o(627,"li"),e(628,"Poner el teardown antes de "),o(629,"code"),e(630,"use()"),t(),e(631,": todo lo que va despu\xE9s de "),o(632,"code"),e(633,"use"),t(),e(634," es cleanup; antes, setup."),t(),o(635,"li"),e(636,"Compartir estado mutable entre fixtures de distinto test: cada test debe recibir instancias propias."),t(),o(637,"li"),e(638,"Importar "),o(639,"code"),e(640,"test"),t(),e(641," desde "),o(642,"code"),e(643,"@playwright/test"),t(),e(644," en unos specs y desde tus fixtures en otros: los primeros no reciben tus fixtures."),t()(),o(645,"h4"),e(646,"\u{1F3A4} Preguntas de entrevista"),t(),o(647,"ul")(648,"li")(649,"strong"),e(650,"\xBFQu\xE9 ventaja tienen las fixtures sobre beforeEach?"),t(),e(651," Son declarativas y lazy (solo se inicializa lo que el test pide), componibles entre s\xED, tipadas, y encapsulan setup + teardown en un solo lugar reutilizable entre archivos."),t(),o(652,"li")(653,"strong"),e(654,"\xBFC\xF3mo comparte una fixture datos con el test?"),t(),e(655," Mediante el callback "),o(656,"code"),e(657,"use(valor)"),t(),e(658,": lo previo es setup, el argumento es lo inyectado y lo posterior es teardown."),t()(),o(659,"p",13),e(660,"\u{1F4C1} C\xF3digo real: "),o(661,"code"),e(662,"tests/fixtures/app-fixtures.ts"),t(),e(663,", "),o(664,"code"),e(665,"tests/fixtures/index.ts"),t()()(),o(666,"div",15)(667,"h3"),e(668,"Fixtures: scope de test vs worker"),t(),o(669,"p"),e(670," Cada fixture tiene un "),o(671,"strong"),e(672,"scope"),t(),e(673,". Con "),o(674,"code"),e(675,"scope: 'test'"),t(),e(676," (default) se crea y destruye por cada test: m\xE1ximo aislamiento. Con "),o(677,"code"),e(678,"scope: 'worker'"),t(),e(679," se crea una sola vez por proceso worker y se comparte entre todos los tests que ese worker ejecute: ideal para setups caros (tokens, contenedores, seeds de base de datos). "),t(),o(680,"pre"),a(681,"code",5),t(),o(682,"h4"),e(683,"Override de fixtures"),t(),o(684,"p"),e(685,"Tambi\xE9n puedes sobrescribir fixtures integradas o propias para cambiar el comportamiento de toda una suite:"),t(),o(686,"pre"),a(687,"code",5),t(),o(688,"h4"),e(689,"\u26A0\uFE0F Errores comunes"),t(),o(690,"ul")(691,"li"),e(692,"Guardar estado mutable en una fixture worker-scoped: un test lo modifica y contamina a los siguientes del mismo worker."),t(),o(693,"li"),e(694,"Hacer que una fixture worker-scoped dependa de una test-scoped: es imposible (viven distinto tiempo) y Playwright lo rechaza."),t(),o(695,"li"),e(696,'Usar worker scope "para ir m\xE1s r\xE1pido" en cosas baratas: sacrificas aislamiento sin ganancia real.'),t()(),o(697,"h4"),e(698,"\u{1F3A4} Preguntas de entrevista"),t(),o(699,"ul")(700,"li")(701,"strong"),e(702,"\xBFCu\xE1ndo eliges worker scope?"),t(),e(703," Cuando el setup es costoso e inmutable durante los tests: autenticarse contra una API, levantar un mock server, poblar datos base."),t(),o(704,"li")(705,"strong"),e(706,"\xBFQu\xE9 significa "),o(707,"code"),e(708,"auto: true"),t(),e(709," en una fixture?"),t(),e(710," Que se inicializa en todos los tests aunque ninguno la pida en sus argumentos; \xFAtil para hooks transversales (logging, documentaci\xF3n)."),t()()(),o(711,"div",16)(712,"h3"),e(713,"Hook de documentaci\xF3n autom\xE1tica"),t(),o(714,"p"),e(715," Este repo usa una fixture "),o(716,"code"),e(717,"auto"),t(),e(718," como hook transversal: cada test genera autom\xE1ticamente un archivo markdown de documentaci\xF3n en "),o(719,"code"),e(720,"test-documentation/"),t(),e(721," con su nombre, descripci\xF3n y archivo de origen. Es un ejemplo real de c\xF3mo las fixtures reemplazan a los hooks globales con algo componible y tipado. "),t(),o(722,"pre"),a(723,"code",5),t(),o(724,"p"),e(725," La cadena de composici\xF3n del repo es: "),o(726,"code"),e(727,"@playwright/test"),t(),e(728," \u2192 "),o(729,"code"),e(730,"tests/fixtures/app-fixtures.ts"),t(),e(731," (page objects) \u2192 "),o(732,"code"),e(733,"tests/hooks/generate-documentation.ts"),t(),e(734," (fixture auto) \u2192 "),o(735,"code"),e(736,"tests/fixtures/index.ts"),t(),e(737," (punto de entrada que importan los specs). Cada capa extiende la anterior con "),o(738,"code"),e(739,"test.extend()"),t(),e(740,". "),t(),o(741,"h4"),e(742,"\u26A0\uFE0F Errores comunes"),t(),o(743,"ul")(744,"li"),e(745,"Hacer trabajo pesado en una fixture "),o(746,"code"),e(747,"auto"),t(),e(748,": se paga en TODOS los tests de la suite."),t(),o(749,"li"),e(750,"Escribir al mismo archivo desde tests paralelos sin nombres \xFAnicos: aqu\xED se evita generando un slug por t\xEDtulo de test."),t()(),o(751,"h4"),e(752,"\u{1F3A4} Preguntas de entrevista"),t(),o(753,"ul")(754,"li")(755,"strong"),e(756,"\xBFC\xF3mo ejecutar\xEDas l\xF3gica en todos los tests sin tocar cada spec?"),t(),e(757," Con una fixture "),o(758,"code"),e(759,"{ auto: true }"),t(),e(760," en el "),o(761,"code"),e(762,"test"),t(),e(763," base compartido, como hace este repo."),t(),o(764,"li")(765,"strong"),e(766,"\xBFQu\xE9 informaci\xF3n expone "),o(767,"code"),e(768,"testInfo"),t(),e(769,"?"),t(),e(770," T\xEDtulo, archivo, proyecto, n\xFAmero de retry, estado, y utilidades como "),o(771,"code"),e(772,"attach()"),t(),e(773," para adjuntar artefactos al reporte."),t()(),o(774,"p",13),e(775,"\u{1F4C1} C\xF3digo real: "),o(776,"code"),e(777,"tests/hooks/generate-documentation.ts"),t(),e(778,", "),o(779,"code"),e(780,"tests/fixtures/index.ts"),t()()(),o(781,"div",17)(782,"h3"),e(783,"Autenticaci\xF3n persistente"),t(),o(784,"p"),e(785," Para evitar logins redundantes en cada prueba, guarda el estado de autenticaci\xF3n en un archivo. Un proyecto de setup puede iniciar sesi\xF3n y escribir "),o(786,"code"),e(787,"storageState"),t(),e(788,". "),t(),o(789,"p"),e(790," Luego el config de Playwright puede reutilizar ese archivo para pruebas autenticadas. "),t(),o(791,"h4"),e(792,"Patr\xF3n recomendado: setup project + storageState"),t(),o(793,"p")(794,"code"),e(795,"storageState"),t(),e(796," serializa cookies y localStorage del contexto. El patr\xF3n oficial es un "),o(797,"em"),e(798,"setup project"),t(),e(799," que hace login una vez y guarda el archivo; los dem\xE1s projects lo declaran como "),o(800,"code"),e(801,"dependencies"),t(),e(802," y arrancan cada test ya autenticados: "),t(),o(803,"pre"),a(804,"code",5),t(),o(805,"h4"),e(806,"Mejores pr\xE1cticas"),t(),o(807,"ul")(808,"li"),e(809,"Agrega "),o(810,"code"),e(811,"playwright/.auth/"),t(),e(812," a "),o(813,"code"),e(814,".gitignore"),t(),e(815,": contiene credenciales de sesi\xF3n."),t(),o(816,"li"),e(817,"Antes de guardar el estado, asserta algo que pruebe que el login termin\xF3 (evita guardar un estado a medias)."),t(),o(818,"li"),e(819,"Para tests que necesitan varios roles, genera un archivo por rol ("),o(820,"code"),e(821,"admin.json"),t(),e(822,", "),o(823,"code"),e(824,"user.json"),t(),e(825,") y selecci\xF3nalo con "),o(826,"code"),e(827,"test.use"),t(),e(828,"."),t(),o(829,"li"),e(830,"Si los tests mutan la sesi\xF3n (logout, cambio de contrase\xF1a), a\xEDslalos con un login propio."),t()(),o(831,"h4"),e(832,"\u26A0\uFE0F Errores comunes"),t(),o(833,"ul")(834,"li"),e(835,"Hacer login por UI en cada test: multiplica minutos de suite y a\xF1ade un punto de flakiness por test."),t(),o(836,"li"),e(837,"Reusar un storageState expirado: si el token caduca, media suite falla con s\xEDntomas confusos; regenera el archivo en el setup de cada run de CI."),t(),o(838,"li"),e(839,"Guardar el estado sin esperar la redirecci\xF3n post-login: el archivo queda sin las cookies finales."),t()(),o(840,"h4"),e(841,"\u{1F3A4} Preguntas de entrevista"),t(),o(842,"ul")(843,"li")(844,"strong"),e(845,"\xBFQu\xE9 guarda exactamente storageState?"),t(),e(846," Cookies del contexto y localStorage por origen (no sessionStorage, que requiere un truco aparte)."),t(),o(847,"li")(848,"strong"),e(849,"\xBFC\xF3mo autenticas con distintos roles en la misma suite?"),t(),e(850," Un setup project que genera un storageState por rol y "),o(851,"code"),e(852,"test.use({ storageState: '...' })"),t(),e(853," por describe o archivo."),t()()(),o(854,"div",18)(855,"h3"),e(856,"Mock de red con page.route"),t(),o(857,"p")(858,"code"),e(859,"page.route(pattern, handler)"),t(),e(860," intercepta las requests que hace la p\xE1gina. Con "),o(861,"code"),e(862,"route.fulfill()"),t(),e(863," respondes t\xFA mismo (mock), con "),o(864,"code"),e(865,"route.abort()"),t(),e(866," cancelas la request y con "),o(867,"code"),e(868,"route.continue()"),t(),e(869," / "),o(870,"code"),e(871,"route.fetch()"),t(),e(872," la dejas pasar (opcionalmente modificada). Es la herramienta clave para probar estados dif\xEDciles de reproducir: errores 500, listas vac\xEDas, respuestas lentas o payloads enormes. "),t(),o(873,"pre"),a(874,"code",5),t(),o(875,"h4"),e(876,"Esperar respuestas reales"),t(),o(877,"p"),e(878,"Cuando no quieres mockear sino sincronizarte con la red real, usa "),o(879,"code"),e(880,"waitForResponse"),t(),e(881," registrando la espera antes de disparar la acci\xF3n:"),t(),o(882,"pre"),a(883,"code",5),t(),o(884,"h4"),e(885,"Mejores pr\xE1cticas"),t(),o(886,"ul")(887,"li"),e(888,'Decide una estrategia por suite: E2E "full stack" contra backend real para flujos cr\xEDticos, y mocks para estados excepcionales y edge cases.'),t(),o(889,"li"),e(890,"Registra las rutas antes de "),o(891,"code"),e(892,"page.goto()"),t(),e(893,"; si la app dispara la request al cargar, un route tard\xEDo no la intercepta."),t(),o(894,"li"),e(895,"Mant\xE9n los payloads mock en archivos/factories compartidos para no duplicar JSON en cada spec."),t(),o(896,"li"),e(897,"Usa "),o(898,"code"),e(899,"page.unroute()"),t(),e(900," o el helper del contexto si necesitas restaurar el comportamiento."),t()(),o(901,"h4"),e(902,"\u26A0\uFE0F Errores comunes"),t(),o(903,"ul")(904,"li"),e(905,"Patrones glob que no coinciden (olvidar "),o(906,"code"),e(907,"**/"),t(),e(908," al inicio): el mock nunca aplica y el test pega al backend real."),t(),o(909,"li"),e(910,"Mockear TODO: terminas testeando tus mocks y no la integraci\xF3n; deja al menos un smoke test end-to-end real."),t(),o(911,"li"),e(912,"Poner "),o(913,"code"),e(914,"waitForResponse"),t(),e(915," despu\xE9s del click: si la respuesta llega antes de registrar la espera, el test se cuelga."),t(),o(916,"li"),e(917,"Olvidar "),o(918,"code"),e(919,"contentType: 'application/json'"),t(),e(920," en el fulfill: algunos clients HTTP no parsean el body."),t()(),o(921,"h4"),e(922,"\u{1F3A4} Preguntas de entrevista"),t(),o(923,"ul")(924,"li")(925,"strong"),e(926,"\xBFDiferencia entre route.fulfill, route.continue y route.abort?"),t(),e(927," fulfill responde sin tocar el servidor; continue deja pasar la request (con posibles modificaciones de headers/postData); abort la falla como error de red."),t(),o(928,"li")(929,"strong"),e(930,"\xBFC\xF3mo probar\xEDas el estado de error de una pantalla?"),t(),e(931," Interceptando su endpoint con "),o(932,"code"),e(933,"route.fulfill({ status: 500 })"),t(),e(934," y assertando el mensaje de error visible."),t(),o(935,"li")(936,"strong"),e(937,"\xBFQu\xE9 es HAR replay?"),t(),e(938," Grabar el tr\xE1fico real en un archivo HAR ("),o(939,"code"),e(940,"routeFromHAR"),t(),e(941,") y reproducirlo en los tests para tener red determinista sin escribir mocks a mano."),t()()(),o(942,"div",19)(943,"h3"),e(944,"Ejecutar y depurar"),t(),o(945,"ul")(946,"li")(947,"code"),e(948,"npx playwright test"),t(),e(949," \u2014 ejecuta la suite completa."),t(),o(950,"li")(951,"code"),e(952,"npx playwright test --ui"),t(),e(953," \u2014 abre la interfaz gr\xE1fica."),t(),o(954,"li")(955,"code"),e(956,"npx playwright test --debug"),t(),e(957," \u2014 inicia el inspector y desactiva timeouts."),t()(),o(958,"p"),e(959," En modo debug cada prueba abre el navegador en headed mode y te permite inspeccionar locators en tiempo real. "),t()(),o(960,"div",20)(961,"h3"),e(962,"Playwright Inspector"),t(),o(963,"p"),e(964," El inspector permite pausar la prueba, ver la acci\xF3n actual y seleccionar elementos en la p\xE1gina. Tambi\xE9n puedes usar "),o(965,"code"),e(966,"page.pause()"),t(),e(967," dentro de un test para detener la ejecuci\xF3n en un punto espec\xEDfico. "),t()(),o(968,"div",21)(969,"h3"),e(970,"Tracing, Trace Viewer y UI Mode"),t(),o(971,"p"),e(972," El "),o(973,"strong"),e(974,"trace"),t(),e(975," es la caja negra de un test: graba screenshots por acci\xF3n, snapshots del DOM (antes/durante/despu\xE9s), requests de red, logs de consola y el c\xF3digo fuente ejecutado. Con "),o(976,"code"),e(977,"trace: 'on-first-retry'"),t(),e(978," (la opci\xF3n de este repo) obtienes esa evidencia exactamente cuando un test falla en CI, sin costo en los runs verdes. "),t(),o(979,"pre"),a(980,"code",5),t(),o(981,"h4"),e(982,"\xBFQu\xE9 herramienta usar para cada problema?"),t(),o(983,"ul")(984,"li")(985,"strong"),e(986,"UI Mode ("),o(987,"code"),e(988,"--ui"),t(),e(989,"):"),t(),e(990,' desarrollo diario; corre tests en watch, permite "time travel" por cada acci\xF3n y probar locators en vivo.'),t(),o(991,"li")(992,"strong"),e(993,"Inspector ("),o(994,"code"),e(995,"--debug"),t(),e(996,"):"),t(),e(997," avanzar paso a paso una prueba concreta con el navegador visible."),t(),o(998,"li")(999,"strong"),e(1e3,"Trace Viewer:"),t(),e(1001," diagn\xF3stico post-mortem de fallas en CI; descarga el trace del artifact y \xE1brelo con "),o(1002,"code"),e(1003,"show-trace"),t(),e(1004," (o en trace.playwright.dev)."),t(),o(1005,"li")(1006,"strong"),e(1007,"Codegen:"),t(),e(1008," punto de partida para descubrir locators; el c\xF3digo generado se refactoriza despu\xE9s (POM, fixtures), no se pega tal cual."),t()(),o(1009,"h4"),e(1010,"\u26A0\uFE0F Errores comunes"),t(),o(1011,"ul")(1012,"li"),e(1013,"Depurar fallas de CI a base de "),o(1014,"code"),e(1015,"console.log"),t(),e(1016," y re-runs: un trace responde en segundos qu\xE9 pas\xF3."),t(),o(1017,"li"),e(1018,"Dejar "),o(1019,"code"),e(1020,"trace: 'on'"),t(),e(1021," permanente: artefactos gigantes y suite m\xE1s lenta."),t(),o(1022,"li"),e(1023,"Commitear directamente el output de codegen: suele usar el contexto equivocado y carece de assertions."),t()(),o(1024,"h4"),e(1025,"\u{1F3A4} Preguntas de entrevista"),t(),o(1026,"ul")(1027,"li")(1028,"strong"),e(1029,"\xBFC\xF3mo depuras un test que solo falla en CI?"),t(),e(1030," Con "),o(1031,"code"),e(1032,"trace: 'on-first-retry'"),t(),e(1033,", subiendo "),o(1034,"code"),e(1035,"test-results/"),t(),e(1036," como artifact y abriendo el trace en el Trace Viewer: incluye DOM, red y consola del momento exacto de la falla."),t(),o(1037,"li")(1038,"strong"),e(1039,"\xBFQu\xE9 contiene un trace adem\xE1s de screenshots?"),t(),e(1040," Snapshots interactivos del DOM por acci\xF3n, timeline, network, consola, c\xF3digo del test y metadatos del run."),t()()(),o(1041,"div",22)(1042,"h3"),e(1043,"Paralelizaci\xF3n"),t(),o(1044,"p"),e(1045," Playwright ejecuta archivos de prueba en paralelo por defecto, usando m\xFAltiples workers. Dentro de cada archivo los tests se ejecutan de forma secuencial a menos que actives: "),t(),o(1046,"pre"),a(1047,"code",5),t(),o(1048,"p"),e(1049," Para desactivar el paralelismo usa "),o(1050,"code"),e(1051,"--workers=1"),t(),e(1052," o "),o(1053,"code"),e(1054,"workers: 1"),t(),e(1055," en la configuraci\xF3n. Este repo usa "),o(1056,"code"),e(1057,"fullyParallel: true"),t(),e(1058," en local y "),o(1059,"code"),e(1060,"workers: 1"),t(),e(1061," en CI (runners con poca CPU). "),t()(),o(1062,"div",23)(1063,"h3"),e(1064,"Paralelismo y sharding en CI"),t(),o(1065,"p"),e(1066," El paralelismo con "),o(1067,"strong"),e(1068,"workers"),t(),e(1069," escala dentro de una m\xE1quina; el "),o(1070,"strong"),e(1071,"sharding"),t(),e(1072," escala entre m\xE1quinas: divide la suite en N porciones y cada job de CI ejecuta una con "),o(1073,"code"),e(1074,"--shard=i/N"),t(),e(1075,". Combinado con una matrix de GitHub Actions, una suite de 40 minutos puede bajar a 10. "),t(),o(1076,"pre"),a(1077,"code",5),t(),o(1078,"h4"),e(1079,"Mejores pr\xE1cticas"),t(),o(1080,"ul")(1081,"li"),e(1082,"El requisito n\xFAmero uno es que los tests sean independientes: sin orden impl\xEDcito ni datos compartidos."),t(),o(1083,"li"),e(1084,"Usa "),o(1085,"code"),e(1086,"fail-fast: false"),t(),e(1087," en la matrix para que un shard fallido no cancele los dem\xE1s y veas el panorama completo."),t(),o(1088,"li"),e(1089,"Con sharding usa el "),o(1090,"em"),e(1091,"blob reporter"),t(),e(1092," y "),o(1093,"code"),e(1094,"merge-reports"),t(),e(1095," para un \xFAnico reporte HTML final."),t(),o(1096,"li"),e(1097,"Ajusta "),o(1098,"code"),e(1099,"retries"),t(),e(1100," en CI (aqu\xED: 2) para absorber fallas de infraestructura, y monitorea qu\xE9 tests las consumen."),t()(),o(1101,"h4"),e(1102,"\u26A0\uFE0F Errores comunes"),t(),o(1103,"ul")(1104,"li"),e(1105,"Tests que comparten un mismo usuario/registro de datos: en paralelo se pisan entre s\xED de forma intermitente."),t(),o(1106,"li"),e(1107,"Usar "),o(1108,"code"),e(1109,"test.describe.configure({ mode: 'serial' })"),t(),e(1110," para encadenar tests dependientes: si uno falla, arrastra a los dem\xE1s y bloquea el sharding eficiente."),t(),o(1111,"li"),e(1112,"Asumir que los shards tardan lo mismo: distribuye archivos pesados o usa m\xE1s shards peque\xF1os."),t()(),o(1113,"h4"),e(1114,"\u{1F3A4} Preguntas de entrevista"),t(),o(1115,"ul")(1116,"li")(1117,"strong"),e(1118,"\xBFDiferencia entre workers y shards?"),t(),e(1119," Workers son procesos paralelos en una m\xE1quina; shards son particiones de la suite entre varias m\xE1quinas. Se combinan."),t(),o(1120,"li")(1121,"strong"),e(1122,"\xBFC\xF3mo garantiza Playwright el aislamiento entre tests paralelos?"),t(),e(1123," Cada test recibe un BrowserContext nuevo (cookies, storage y cache limpios) dentro de un mismo browser por worker, lo cual es barato de crear."),t()()(),o(1124,"div",24)(1125,"h3"),e(1126,"Tags y grep: @smoke y @regression"),t(),o(1127,"p"),e(1128," Los tags permiten ejecutar subconjuntos de la suite seg\xFAn el contexto: un set "),o(1129,"strong"),e(1130,"@smoke"),t(),e(1131," peque\xF1o y r\xE1pido que corre en cada push, y un set "),o(1132,"strong"),e(1133,"@regression"),t(),e(1134," amplio para pipelines nocturnos o pre-release. Se filtran con "),o(1135,"code"),e(1136,"--grep"),t(),e(1137," y "),o(1138,"code"),e(1139,"--grep-invert"),t(),e(1140,". "),t(),o(1141,"pre"),a(1142,"code",5),t(),o(1143,"h4"),e(1144,"Mejores pr\xE1cticas"),t(),o(1145,"ul")(1146,"li"),e(1147,"Mant\xE9n @smoke corto (minutos, no decenas de minutos): son los flujos que, si fallan, bloquean todo lo dem\xE1s."),t(),o(1148,"li"),e(1149,"Define un vocabulario de tags acordado por el equipo (@smoke, @regression, @slow, @a11y) y docum\xE9ntalo."),t(),o(1150,"li"),e(1151,"Exp\xF3n los filtros como scripts npm, como hace este repo ("),o(1152,"code"),e(1153,"test:e2e:smoke"),t(),e(1154,", "),o(1155,"code"),e(1156,"test:e2e:regression"),t(),e(1157,"), para que CI y humanos usen los mismos comandos."),t()(),o(1158,"h4"),e(1159,"\u26A0\uFE0F Errores comunes"),t(),o(1160,"ul")(1161,"li"),e(1162,"Escribir el tag con typo ("),o(1163,"code"),e(1164,"@somke"),t(),e(1165,"): el grep simplemente no lo encuentra y el test deja de correr sin aviso. Revisa el conteo de tests ejecutados."),t(),o(1166,"li"),e(1167,'Meter todo en @smoke "porque es importante": el set pierde su valor de feedback r\xE1pido.'),t(),o(1168,"li"),e(1169,"Usar grep sobre t\xEDtulos libres en vez de tags consistentes: los filtros se vuelven fr\xE1giles."),t()(),o(1170,"h4"),e(1171,"\u{1F3A4} Preguntas de entrevista"),t(),o(1172,"ul")(1173,"li")(1174,"strong"),e(1175,"\xBFC\xF3mo estructurar\xEDas la ejecuci\xF3n de E2E en un pipeline?"),t(),e(1176," Smoke en cada PR (r\xE1pido, bloqueante), regression completa nightly o pre-release, con sharding si crece."),t(),o(1177,"li")(1178,"strong"),e(1179,"\xBFC\xF3mo excluyes tests lentos de un run?"),t(),e(1180," Tag\xE9alos (@slow) y usa "),o(1181,"code"),e(1182,"--grep-invert @slow"),t(),e(1183,", o sep\xE1ralos en un project propio."),t()(),o(1184,"p",13),e(1185,"\u{1F4C1} C\xF3digo real: "),o(1186,"code"),e(1187,"tests/integration.spec.ts"),t(),e(1188,", "),o(1189,"code"),e(1190,"tests/accessibility-performance.spec.ts"),t(),e(1191,", scripts en "),o(1192,"code"),e(1193,"package.json"),t()()(),o(1194,"div",25)(1195,"h3"),e(1196,"CI/CD"),t(),o(1197,"p"),e(1198," Las pruebas Playwright pueden ejecutarse en cualquier proveedor de CI. Muchas integraciones usan el mismo comando de terminal y agregan la instalaci\xF3n de navegadores. "),t(),o(1199,"p"),e(1200," Un workflow t\xEDpico de GitHub Actions solo necesita ejecutar "),o(1201,"code"),e(1202,"npm install"),t(),e(1203," y "),o(1204,"code"),e(1205,"npx playwright test"),t(),e(1206,". "),t()(),o(1207,"div",26)(1208,"h3"),e(1209,"Extensi\xF3n de VS Code"),t(),o(1210,"p"),e(1211," La extensi\xF3n Playwright Test para VS Code ofrece un panel de tests, grabador de locators y depuraci\xF3n desde el editor. Tambi\xE9n puede generar workflows de GitHub Actions y ayuda a instalar navegadores. "),t()(),o(1212,"div",27)(1213,"h3"),e(1214,"M\xE9todos Principales de Localizaci\xF3n"),t(),o(1215,"h4"),e(1216,"page.goto(url)"),t(),o(1217,"p"),e(1218,"Navega a una URL espec\xEDfica y espera autom\xE1ticamente a que la p\xE1gina cargue."),t(),o(1219,"pre")(1220,"code"),e(1221,"await page.goto('/lab/ngrx');"),t()(),o(1222,"p")(1223,"strong"),e(1224,"Cu\xE1ndo usar:"),t(),e(1225," Para iniciar navegaci\xF3n a p\xE1ginas espec\xEDficas."),t(),o(1226,"h4"),e(1227,"page.locator(selector)"),t(),o(1228,"p"),e(1229,"Localiza elementos usando selectores CSS, XPath o texto."),t(),o(1230,"pre"),a(1231,"code",5),t(),o(1232,"p")(1233,"strong"),e(1234,"Cu\xE1ndo usar:"),t(),e(1235," Para elementos espec\xEDficos con selectores CSS o texto visible."),t(),o(1236,"h4"),e(1237,"page.getByRole(role, options)"),t(),o(1238,"p"),e(1239,"Localiza elementos por su rol sem\xE1ntico (ARIA)."),t(),o(1240,"pre"),a(1241,"code",5),t(),o(1242,"p")(1243,"strong"),e(1244,"Roles comunes:"),t(),e(1245," button, link, heading, textbox, checkbox, radio, etc."),t(),o(1246,"p")(1247,"strong"),e(1248,"Cu\xE1ndo usar:"),t(),e(1249," Para elementos interactivos o sem\xE1nticos. Mejor que selectores CSS porque es m\xE1s resistente a cambios de estilo."),t(),o(1250,"h4"),e(1251,"page.getByText(text, options)"),t(),o(1252,"p"),e(1253,"Localiza elementos por su texto visible."),t(),o(1254,"pre"),a(1255,"code",5),t(),o(1256,"p")(1257,"strong"),e(1258,"Cu\xE1ndo usar:"),t(),e(1259," Cuando el texto es \xFAnico y visible al usuario."),t(),o(1260,"h4"),e(1261,"page.getByLabel(text)"),t(),o(1262,"p"),e(1263,"Localiza elementos por su etiqueta asociada (label)."),t(),o(1264,"pre")(1265,"code"),e(1266,"page.getByLabel('Nombre del producto');"),t()(),o(1267,"p")(1268,"strong"),e(1269,"Cu\xE1ndo usar:"),t(),e(1270," Para inputs con labels expl\xEDcitos."),t(),o(1271,"h4"),e(1272,"page.getByPlaceholder(text)"),t(),o(1273,"p"),e(1274,"Localiza inputs por su placeholder."),t(),o(1275,"pre")(1276,"code"),e(1277,"page.getByPlaceholder('Buscar...');"),t()(),o(1278,"p")(1279,"strong"),e(1280,"Cu\xE1ndo usar:"),t(),e(1281," Para inputs con placeholders \xFAnicos."),t(),o(1282,"h4"),e(1283,"page.getByTestId(id)"),t(),o(1284,"p"),e(1285,"Localiza elementos por data-testid."),t(),o(1286,"pre")(1287,"code"),e(1288,"page.getByTestId('submit-button');"),t()(),o(1289,"p")(1290,"strong"),e(1291,"Cu\xE1ndo usar:"),t(),e(1292," Para elementos sin texto o rol claro, cuando se necesita estabilidad."),t(),o(1293,"h4"),e(1294,"page.waitForURL(url, options)"),t(),o(1295,"p"),e(1296,"Espera a que la URL cambie a un patr\xF3n espec\xEDfico."),t(),o(1297,"pre")(1298,"code"),e(1299,`await page.waitForURL(/.*\\/lab\\/ngrx/);
await page.waitForURL('https://example.com/dashboard');`),t()(),o(1300,"p")(1301,"strong"),e(1302,"Cu\xE1ndo usar:"),t(),e(1303," Despu\xE9s de clics que cambian la ruta, para asegurar navegaci\xF3n completa."),t(),o(1304,"h4"),e(1305,"page.waitForLoadState(state)"),t(),o(1306,"p"),e(1307,"Espera a que la p\xE1gina alcance un estado de carga."),t(),o(1308,"pre")(1309,"code"),e(1310,"await page.waitForLoadState('networkidle');"),t()(),o(1311,"p")(1312,"strong"),e(1313,"Estados:"),t(),e(1314," 'load' (default), 'domcontentloaded', 'networkidle'"),t(),o(1315,"p")(1316,"strong"),e(1317,"Cu\xE1ndo usar:"),t(),e(1318," Cuando se necesita esperar a que todos los recursos carguen."),t()(),o(1319,"div",28)(1320,"h3"),e(1321,"Acciones en Elementos"),t(),o(1322,"h4"),e(1323,"locator.click()"),t(),o(1324,"p"),e(1325,"Hace clic en el elemento y espera autom\xE1ticamente a que sea clickable."),t(),o(1326,"pre")(1327,"code"),e(1328,"await button.click();"),t()(),o(1329,"h4"),e(1330,"locator.fill(text)"),t(),o(1331,"p"),e(1332,"Llena un input con texto (borra contenido previo)."),t(),o(1333,"pre")(1334,"code"),e(1335,"await input.fill('nuevo valor');"),t()(),o(1336,"h4"),e(1337,"locator.type(text, options)"),t(),o(1338,"p"),e(1339,"Escribe texto car\xE1cter por car\xE1cter (simula usuario real)."),t(),o(1340,"pre"),a(1341,"code",5),t(),o(1342,"h4"),e(1343,"locator.check()"),t(),o(1344,"p"),e(1345,"Marca un checkbox."),t(),o(1346,"pre")(1347,"code"),e(1348,"await checkbox.check();"),t()(),o(1349,"h4"),e(1350,"locator.selectOption(value)"),t(),o(1351,"p"),e(1352,"Selecciona una opci\xF3n en un select."),t(),o(1353,"pre")(1354,"code"),e(1355,"await select.selectOption('option1');"),t()(),o(1356,"h4"),e(1357,"locator.hover()"),t(),o(1358,"p"),e(1359,"Mueve el mouse sobre el elemento."),t(),o(1360,"pre")(1361,"code"),e(1362,"await element.hover();"),t()(),o(1363,"h4"),e(1364,"locator.focus()"),t(),o(1365,"p"),e(1366,"Enfoca el elemento."),t(),o(1367,"pre")(1368,"code"),e(1369,"await input.focus();"),t()()(),o(1370,"div",29)(1371,"h3"),e(1372,"Assertions (Verificaciones)"),t(),o(1373,"h4"),e(1374,"expect(locator).toBeVisible()"),t(),o(1375,"p"),e(1376,"Verifica que el elemento sea visible."),t(),o(1377,"pre")(1378,"code"),e(1379,"await expect(page.locator('h2')).toBeVisible();"),t()(),o(1380,"h4"),e(1381,"expect(locator).toHaveText(text)"),t(),o(1382,"p"),e(1383,"Verifica el texto exacto del elemento."),t(),o(1384,"pre")(1385,"code"),e(1386,"await expect(button).toHaveText('Guardar');"),t()(),o(1387,"h4"),e(1388,"expect(locator).toContainText(text)"),t(),o(1389,"p"),e(1390,"Verifica que el elemento contenga el texto."),t(),o(1391,"pre")(1392,"code"),e(1393,"await expect(div).toContainText('Error');"),t()(),o(1394,"h4"),e(1395,"expect(page).toHaveURL(url)"),t(),o(1396,"p"),e(1397,"Verifica la URL actual."),t(),o(1398,"pre")(1399,"code"),e(1400,"await expect(page).toHaveURL(/.*\\/dashboard/);"),t()(),o(1401,"h4"),e(1402,"expect(locator).toHaveCount(count)"),t(),o(1403,"p"),e(1404,"Verifica el n\xFAmero de elementos encontrados."),t(),o(1405,"pre")(1406,"code"),e(1407,"await expect(cards).toHaveCount(10);"),t()(),o(1408,"h4"),e(1409,"expect(locator).toBeChecked()"),t(),o(1410,"p"),e(1411,"Verifica que un checkbox est\xE9 marcado."),t(),o(1412,"pre")(1413,"code"),e(1414,"await expect(checkbox).toBeChecked();"),t()(),o(1415,"h4"),e(1416,"expect(locator).toBeDisabled()"),t(),o(1417,"p"),e(1418,"Verifica que un elemento est\xE9 deshabilitado."),t(),o(1419,"pre")(1420,"code"),e(1421,"await expect(button).toBeDisabled();"),t()()(),o(1422,"div",30)(1423,"h3"),e(1424,"Atributos de Datos en HTML"),t(),o(1425,"p"),e(1426,"Para hacer tests m\xE1s robustos, agrega atributos data-* en el HTML:"),t(),o(1427,"h4"),e(1428,"data-testid"),t(),o(1429,"p"),e(1430,"Para elementos sin texto \xFAnico o rol claro."),t(),o(1431,"pre")(1432,"code"),e(1433,'<button data-testid="submit-btn">Enviar</button>'),t()(),o(1434,"p"),e(1435,"Uso en test: "),o(1436,"code"),e(1437,"page.getByTestId('submit-btn')"),t()(),o(1438,"h4"),e(1439,"data-cy (estilo Cypress)"),t(),o(1440,"p"),e(1441,"Similar a data-testid, popular en algunos equipos."),t(),o(1442,"pre")(1443,"code"),e(1444,'<input data-cy="username" />'),t()(),o(1445,"h4"),e(1446,"data-inputid"),t(),o(1447,"p"),e(1448,"Para inputs espec\xEDficos."),t(),o(1449,"pre")(1450,"code"),e(1451,'<input data-inputid="product-name" />'),t()(),o(1452,"h4"),e(1453,"data-role"),t(),o(1454,"p"),e(1455,"Para roles personalizados."),t(),o(1456,"pre")(1457,"code"),e(1458,'<div data-role="notification">...</div>'),t()(),o(1459,"h4"),e(1460,"data-state"),t(),o(1461,"p"),e(1462,"Para estados din\xE1micos."),t(),o(1463,"pre")(1464,"code"),e(1465,'<button data-state="loading">Cargando...</button>'),t()(),o(1466,"h4"),e(1467,"Ejemplos en Angular"),t(),o(1468,"pre"),a(1469,"code",5),t()(),o(1470,"div",31)(1471,"h3"),e(1472,"Mejores Pr\xE1cticas"),t(),o(1473,"h4"),e(1474,"Prioriza selectores sem\xE1nticos"),t(),o(1475,"p")(1476,"code"),e(1477,"getByRole() > getByText() > locator() con CSS > getByTestId()"),t()(),o(1478,"h4"),e(1479,"Usa esperas expl\xEDcitas solo cuando sea necesario"),t(),o(1480,"p"),e(1481,"Playwright auto-espera en la mayor\xEDa de acciones. Usa "),o(1482,"code"),e(1483,"waitForURL()"),t(),e(1484," despu\xE9s de navegaci\xF3n."),t(),o(1485,"h4"),e(1486,"Escribe tests independientes"),t(),o(1487,"p"),e(1488,"Cada test debe ser autocontenido. No dependas del estado de tests previos."),t(),o(1489,"h4"),e(1490,"Usa Page Objects para tests complejos"),t(),o(1491,"pre"),a(1492,"code",5),t(),o(1493,"h4"),e(1494,"Maneja asincron\xEDa correctamente"),t(),o(1495,"p"),e(1496,"Siempre usa "),o(1497,"code"),e(1498,"await"),t(),e(1499," en operaciones que devuelven promesas."),t(),o(1500,"h4"),e(1501,"Tests de accesibilidad"),t(),o(1502,"p"),e(1503,"Usa "),o(1504,"code"),e(1505,"getByRole()"),t(),e(1506," para verificar estructura sem\xE1ntica y labels en formularios."),t(),o(1507,"h4"),e(1508,"Evita sleeps fijos"),t(),o(1509,"p"),e(1510,"Usa "),o(1511,"code"),e(1512,"waitFor*()"),t(),e(1513," en lugar de "),o(1514,"code"),e(1515,"page.waitForTimeout()"),t(),e(1516,"."),t(),o(1517,"h4"),e(1518,"Configura timeouts apropiados"),t(),o(1519,"pre"),a(1520,"code",5),t()(),o(1521,"div",32)(1522,"h3"),e(1523,"Ejemplos Avanzados"),t(),o(1524,"h4"),e(1525,"Navegaci\xF3n con espera paralela"),t(),o(1526,"pre")(1527,"code"),e(1528,`await Promise.all([
  page.waitForURL(/.*\\/lab\\/.*/),
  link.click()
]);`),t()(),o(1529,"h4"),e(1530,"Completar formulario"),t(),o(1531,"pre"),a(1532,"code",5),t(),o(1533,"h4"),e(1534,"Verificar lista din\xE1mica"),t(),o(1535,"pre")(1536,"code"),e(1537,`const items = page.locator('.item');
await expect(items).toHaveCount(5);
await expect(items.first()).toContainText('Primer item');`),t()(),o(1538,"h4"),e(1539,"Manejar dropdowns"),t(),o(1540,"pre")(1541,"code"),e(1542,"await page.getByRole('combobox').selectOption('Opci\xF3n 1');"),t()(),o(1543,"h4"),e(1544,"Subir archivos"),t(),o(1545,"pre")(1546,"code"),e(1547,"await page.getByTestId('file-input').setInputFiles('path/to/file.pdf');"),t()(),o(1548,"h4"),e(1549,"Control de red"),t(),o(1550,"pre"),a(1551,"code",5),t(),o(1552,"h4"),e(1553,"Autenticaci\xF3n program\xE1tica"),t(),o(1554,"pre"),a(1555,"code",5),t()(),o(1556,"div",33)(1557,"h3"),e(1558,"Depuraci\xF3n y Troubleshooting"),t(),o(1559,"h4"),e(1560,"Modo debug interactivo"),t(),o(1561,"pre")(1562,"code"),e(1563,"npx playwright test --debug"),t()(),o(1564,"p"),e(1565,"Abre el navegador y permite inspeccionar en tiempo real."),t(),o(1566,"h4"),e(1567,"Pausar en c\xF3digo"),t(),o(1568,"pre")(1569,"code"),e(1570,"await page.pause(); // Detiene ejecuci\xF3n para inspeccionar"),t()(),o(1571,"h4"),e(1572,"Capturas de pantalla"),t(),o(1573,"pre"),a(1574,"code",5),t(),o(1575,"h4"),e(1576,"Videos de tests"),t(),o(1577,"p"),e(1578,"Configura en "),o(1579,"code"),e(1580,"playwright.config.ts"),t(),e(1581,":"),t(),o(1582,"pre"),a(1583,"code",5),t(),o(1584,"h4"),e(1585,"Inspeccionar elementos"),t(),o(1586,"pre")(1587,"code"),e(1588,"await page.locator('selector').highlight();"),t()(),o(1589,"h4"),e(1590,"Logs de consola"),t(),o(1591,"pre")(1592,"code"),e(1593,"page.on('console', msg => console.log(msg.text()));"),t()(),o(1594,"h4"),e(1595,"Problemas comunes"),t(),o(1596,"ul")(1597,"li")(1598,"strong"),e(1599,"Elemento no encontrado:"),t(),e(1600," Verifica selectores y espera a que cargue."),t(),o(1601,"li")(1602,"strong"),e(1603,"Timeout:"),t(),e(1604," Aumenta timeout o usa esperas m\xE1s espec\xEDficas."),t(),o(1605,"li")(1606,"strong"),e(1607,"Flaky tests:"),t(),e(1608," Evita dependencias entre tests, usa selectores robustos."),t(),o(1609,"li")(1610,"strong"),e(1611,"Cross-browser:"),t(),e(1612," Prueba en todos los navegadores soportados."),t()()(),o(1613,"div",34)(1614,"h3"),e(1615,"Integraci\xF3n con Angular"),t(),o(1616,"h4"),e(1617,"Esperar cambios de Angular"),t(),o(1618,"pre"),a(1619,"code",5),t(),o(1620,"h4"),e(1621,"Manejar routing de Angular"),t(),o(1622,"pre"),a(1623,"code",5),t(),o(1624,"h4"),e(1625,"Tests con NgRx"),t(),o(1626,"pre"),a(1627,"code",5),t(),o(1628,"h4"),e(1629,"Componentes din\xE1micos"),t(),o(1630,"pre"),a(1631,"code",5),t()(),o(1632,"div",35)(1633,"h3"),e(1634,"Resumen"),t(),o(1635,"p"),e(1636," Playwright convierte las pruebas end-to-end en una experiencia moderna y escalable para Angular. Su fortaleza est\xE1 en la mezcla de confiabilidad, compatibilidad y herramientas de depuraci\xF3n. "),t(),o(1637,"p"),e(1638," Con esta gu\xEDa completa tienes todas las herramientas necesarias para escribir tests robustos, mantenibles y eficientes en tus aplicaciones Angular. "),t()()()),r&2&&(i(37),n("textContent",d.installCode),i(9),n("textContent",d.browsersInstallCode),i(48),n("textContent",d.configCode),i(12),n("textContent",d.realConfigCode),i(132),n("textContent",d.firstTestCode),i(39),n("textContent",d.locatorHierarchyCode),i(59),n("textContent",d.webFirstAssertionsCode),i(118),n("textContent",d.pageObjectCode),i(4),n("textContent",d.pageObjectTestCode),i(38),n("textContent",d.realPomCode),i(56),n("textContent",d.fixtureProblemBeforeCode),i(4),n("textContent",d.fixtureProblemAfterCode),i(6),n("textContent",d.fixtureInterfaceCode),i(4),n("textContent",d.fixtureCode),i(4),n("textContent",d.fixtureUseCode),i(36),n("textContent",d.authStorageExampleCode),i(12),n("textContent",d.realFixturesCode),i(63),n("textContent",d.workerScopeCode),i(6),n("textContent",d.overrideFixtureCode),i(36),n("textContent",d.autoFixtureDocCode),i(81),n("textContent",d.setupProjectCode),i(70),n("textContent",d.routeMockCode),i(9),n("textContent",d.waitForResponseCode),i(97),n("textContent",d.traceToolsCode),i(67),n("textContent",d.parallelCode),i(30),n("textContent",d.shardingCode),i(65),n("textContent",d.tagsCode),i(89),n("textContent",d.locatorExamplesCode),i(10),n("textContent",d.getByRoleExamplesCode),i(14),n("textContent",d.getByTextExampleCode),i(86),n("textContent",d.typeExampleCode),i(128),n("textContent",d.angularExampleCode),i(23),n("textContent",d.pageObjectExampleCode),i(28),n("textContent",d.timeoutExampleCode),i(12),n("textContent",d.formExampleCode),i(19),n("textContent",d.networkExampleCode),i(4),n("textContent",d.authExampleCode),i(19),n("textContent",d.screenshotExampleCode),i(9),n("textContent",d.videoConfigExampleCode),i(36),n("textContent",d.angularWaitExampleCode),i(4),n("textContent",d.angularRoutingExampleCode),i(4),n("textContent",d.ngrxStoreExampleCode),i(4),n("textContent",d.dynamicComponentsExampleCode))},styles:[".cards[_ngcontent-%COMP%]{display:grid;gap:1.5rem}.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0}.card[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:#111827;color:#f8fafc;padding:1rem;overflow:auto;border-radius:.5rem}.card[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}"]})};export{s as PlaywrightLearnComponent};
