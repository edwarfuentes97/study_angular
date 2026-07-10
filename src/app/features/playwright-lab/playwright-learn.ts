import { Component } from '@angular/core';

@Component({
  selector: 'app-playwright-learn',
  templateUrl: './playwright-learn.html',
  styleUrl: './playwright-learn.css'
})
export class PlaywrightLearnComponent {
  installCode = `npm init playwright@latest`;

  configCode = `import { defineConfig } from '@playwright/test';

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
});`;

  firstTestCode = `import { expect, test } from '@playwright/test';

test('la página de inicio muestra el mensaje de bienvenida', async ({ page }) => {
  await page.goto('/start');
  await expect(page.getByText('Welcome to Angular E2E with Playwright'))
    .toBeVisible();
});`;

  pageObjectCode = `import type { Locator, Page } from '@playwright/test';

export class StartPage {
  readonly welcomeMessage: Locator;

  constructor(private readonly page: Page) {
    this.welcomeMessage = page.getByTestId('start-page-welcome-message');
  }

  async goto() {
    await this.page.goto('/start');
  }
}`;

  pageObjectTestCode = `import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/dashboard.page';

test('navega al lab desde el dashboard usando POM', async ({ page }) => {
  const dashboard = new DashboardPage(page);
  await dashboard.goto();
  await dashboard.navigateToLab('Playwright E2E Testing');
  await expect(page).toHaveURL(/.*\/lab\/playwright/);
});`;

  fixtureCode = `import { test as base } from '@playwright/test';
import { StartPage } from '../pages/start.page';

type MyFixtures = {
  startPage: StartPage;
};

export const test = base.extend<MyFixtures>({
  startPage: async ({ page }, use) => {
    const startPage = new StartPage(page);
    await startPage.goto();
    await use(startPage);
    // cleanup opcional aquí
  },
});

export { expect } from '@playwright/test';`;

  fixtureProblemBeforeCode = `test('mi prueba', async ({ page }) => {
  const loginPage = new LoginPage(page); // Repetitivo
  const dashboardPage = new DashboardPage(page); // Repetitivo
  await loginPage.goto();
  // ...
});`;

  fixtureProblemAfterCode = `import { test } from './my-fixtures';

test('mi test limpio', async ({ loginPage }) => {
  await loginPage.login('user', 'pass');
});`;

  fixtureInterfaceCode = `import { test as base } from '@playwright/test';
import { LoginPage } from './LoginPage';

type MyFixtures = {
  loginPage: LoginPage;
};`;

  fixtureUseCode = `import { test, expect } from './my-fixtures';

test('mi test limpio', async ({ loginPage }) => {
  await loginPage.login('user', 'pass');
  await expect(loginPage.page).toHaveURL(/.*\/dashboard/);
});`;

  authStorageExampleCode = `import { test as base } from '@playwright/test';
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
});`;

  parallelCode = `test.describe.configure({ mode: 'parallel' });
// o en config:
fullyParallel: true
workers: 4`;

  angularExampleCode = `<input
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
</button>`;

  pageObjectExampleCode = `class DashboardPage {
  constructor(private page: Page) {}

  async navigateToLab(labName: string) {
    await this.page.getByRole('link', { name: labName }).click();
  }

  async getTopicCards() {
    return this.page.locator('article.topic-card');
  }
}`;

  timeoutExampleCode = `test.setTimeout(30000); // Para tests largos
await expect(element).toBeVisible({ timeout: 10000 });`;

  formExampleCode = `await page.getByLabel('Nombre').fill('Juan');
await page.getByLabel('Email').fill('juan@example.com');
await page.getByRole('button', { name: 'Enviar' }).click();`;

  networkExampleCode = `await page.route('**/api/data', route => route.fulfill({
  status: 200,
  body: JSON.stringify(mockData)
}));`;

  authExampleCode = `await page.addCookies([{
  name: 'auth-token',
  value: 'token123',
  domain: 'localhost'
}]);`;

  screenshotExampleCode = `await page.screenshot({ path: 'debug.png' });`;

  videoConfigExampleCode = `use: {
  video: 'on'
}`;

  angularWaitExampleCode = `// Esperar que Angular termine de procesar
await page.waitForFunction(() => {
  return window.getAllAngularTestabilities().every(
    testability => testability.isStable()
  );
});`;

  angularRoutingExampleCode = `// Para navegación SPA
await page.waitForURL(/.*\/lab\/ngrx/);
await expect(page.locator('app-ngrx-layout')).toBeVisible();`;

  getByTextExampleCode = `page.getByText('Angular Fundamentals', { exact: true })`;

  typeExampleCode = `await input.type('texto', { delay: 50 })`;

  ngrxStoreExampleCode = `// Verificar estado de store (si es accesible)
await page.waitForFunction(() => {
  return window.store?.getState()?.products?.length > 0;
});`;

  dynamicComponentsExampleCode = `// Esperar que Angular renderice componentes
await page.locator('app-product-list').waitFor();
await expect(page.locator('app-product-item')).toHaveCount(expectedCount);`;

  locatorExamplesCode = `// Con selector CSS
page.locator('h2');
// Con texto
page.locator('h2', { hasText: /NgRx/i });
// Con otro locator
page.locator('article', { has: page.locator('.topic-card') });`;

  getByRoleExamplesCode = `// Botones
page.getByRole('button', { name: /Add Product/i });
// Enlaces
page.getByRole('link', { name: /Estudiar/i });
// Headings
page.getByRole('heading', { name: /NgRx/i });`;

  browsersInstallCode = `# Instala solo los navegadores que necesitas
npx playwright install chromium

# En CI instala también las dependencias del sistema operativo
npx playwright install --with-deps`;

  realConfigCode = `// playwright.config.ts (configuración real de este repo)
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
});`;

  locatorHierarchyCode = `// 1) getByRole: refleja cómo percibe la página un usuario
//    (y un lector de pantalla). El más resistente a refactors.
page.getByRole('button', { name: 'Guardar' });

// 2) getByLabel: ideal para formularios accesibles
page.getByLabel('Correo electrónico');

// 3) getByText: contenido visible y único
page.getByText('Bienvenido de nuevo', { exact: true });

// 4) getByTestId: último recurso estable cuando no hay semántica
page.getByTestId('submit-button');

// Refinar cuando hay múltiples coincidencias (evita .nth() si puedes)
page.getByRole('listitem').filter({ hasText: 'Playwright' });
page.locator('article', { has: page.getByRole('heading', { name: 'NgRx' }) });`;

  webFirstAssertionsCode = `// Las web-first assertions reintentan (polling) hasta cumplirse
// o agotar el timeout de expect (5s por defecto).
await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
await expect(page.locator('.status')).toHaveText('Completado');
await expect(page.locator('.item')).toHaveCount(3);

// expect.poll: polling sobre valores que no son locators
await expect.poll(async () => {
  const response = await page.request.get('/api/health');
  return response.status();
}, { timeout: 10000 }).toBe(200);

// ❌ MAL: lee el estado UNA sola vez, sin reintentos → flaky
expect(await page.locator('.status').textContent()).toBe('Completado');`;

  realPomCode = `// tests/pages/playwright-lab.page.ts (page object real de este repo)
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
}`;

  realFixturesCode = `// tests/fixtures/app-fixtures.ts (fixtures reales de este repo)
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

export { expect };`;

  workerScopeCode = `import { test as base } from '@playwright/test';
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
    const token = await obtenerTokenDeAPI(); // operación cara
    await use(token);
    // teardown: se ejecuta al terminar el worker
  }, { scope: 'worker' }],
});`;

  overrideFixtureCode = `// Override de una fixture integrada:
// todos los tests de esta suite parten autenticados
export const test = base.extend({
  storageState: 'playwright/.auth/user.json',
});

// Override puntual por archivo o describe
test.use({ viewport: { width: 390, height: 844 } });
test.use({ locale: 'es-CO', timezoneId: 'America/Bogota' });`;

  setupProjectCode = `// auth.setup.ts — corre UNA vez antes de la suite
import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  await page.goto('/login');
  await page.getByLabel('Usuario').fill(process.env.E2E_USER!);
  await page.getByLabel('Contraseña').fill(process.env.E2E_PASS!);
  await page.getByRole('button', { name: 'Entrar' }).click();
  // Espera una señal de que el login terminó ANTES de guardar el estado
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
],`;

  routeMockCode = `// Mock de una respuesta (fulfill): el backend nunca recibe la request
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
});`;

  waitForResponseCode = `// Registrar la espera ANTES de disparar la acción
const responsePromise = page.waitForResponse('**/api/products');
await page.getByRole('button', { name: 'Cargar productos' }).click();
const response = await responsePromise;
expect(response.status()).toBe(200);`;

  traceToolsCode = `# Grabar trace en cada ejecución local
npx playwright test --trace on

# Abrir un trace guardado (timeline, snapshots DOM, red, consola)
npx playwright show-trace test-results/mi-test/trace.zip

# UI Mode: modo watch + time travel + explorador de locators
npx playwright test --ui

# Inspector paso a paso (desactiva timeouts)
npx playwright test --debug

# Codegen: graba interacciones y genera código con locators modernos
npx playwright codegen http://localhost:4200`;

  shardingCode = `# Divide la suite entre 4 máquinas de CI
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
npx playwright merge-reports --reporter html ./all-blob-reports`;

  tagsCode = `// tests/integration.spec.ts (tests reales de este repo)
test('[@smoke] complete user journey through a lab', async ({ app }) => {
  // flujo crítico: dashboard → lab → tabs
});

test('[@regression] cross-lab navigation works', async ({ app }) => {
  // cobertura amplia, corre en el pipeline nocturno o pre-release
});

// package.json (scripts reales de este repo)
"test:e2e:smoke": "playwright test --grep @smoke",
"test:e2e:regression": "playwright test --grep @regression"

// Excluir tests por tag
npx playwright test --grep-invert @slow

// Sintaxis moderna (Playwright 1.42+): tags como opción
test('checkout', { tag: ['@smoke', '@critical'] }, async ({ page }) => {
  // ...
});`;

  visualTestingCode = `test('la card de introducción no cambia visualmente', async ({ page }) => {
  await page.goto('/lab/playwright');
  // Compara contra el snapshot guardado; la primera ejecución lo genera
  await expect(page.locator('#introduccion')).toHaveScreenshot('intro-card.png', {
    maxDiffPixelRatio: 0.01,
    mask: [page.locator('.timestamp')],  // oculta zonas dinámicas
  });
});

// Snapshot de página completa
await expect(page).toHaveScreenshot({ fullPage: true });

// Actualizar snapshots cuando el cambio visual es intencional:
// npx playwright test --update-snapshots`;

  axeCode = `// npm i -D @axe-core/playwright
import AxeBuilder from '@axe-core/playwright';
import { test, expect } from '@playwright/test';

test('el dashboard no tiene violaciones de accesibilidad', async ({ page }) => {
  await page.goto('/');
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa'])     // reglas WCAG 2.0/2.1 A y AA
    .exclude('#widget-de-terceros')      // excluye lo que no controlas
    .analyze();

  expect(results.violations).toEqual([]);
});`;

  antiFlakyCode = `// ❌ MAL: espera arbitraria — lenta cuando sobra, flaky cuando falta
await page.waitForTimeout(3000);
await page.click('.submit');

// ✅ BIEN: la assertion espera la condición real con polling
await expect(page.getByRole('button', { name: 'Enviar' })).toBeEnabled();
await page.getByRole('button', { name: 'Enviar' }).click();

// ✅ BIEN: datos únicos por test → sin colisiones en paralelo
const email = \`user-\${Date.now()}\` + '@example.com';

// ✅ BIEN: cada test prepara su propio estado desde cero
test.beforeEach(async ({ page }) => {
  await page.goto('/lab/playwright');
});`;

  githubActionsCode = `# .github/workflows/playwright.yml (workflow real de este repo)
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
          retention-days: 30`;

  autoFixtureDocCode = `// tests/hooks/generate-documentation.ts (hook real de este repo)
export const test = base.extend<DocumentationFixtures>({
  // auto: true → se ejecuta en TODOS los tests sin pedirla explícitamente
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
});`;
}
