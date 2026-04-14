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
}
