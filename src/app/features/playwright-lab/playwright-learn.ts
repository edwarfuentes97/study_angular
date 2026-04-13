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

  fixtureCode = `import { test as base } from '@playwright/test';
import { StartPage } from '../pages/start.page';

export const test = base.extend<{ startPage: StartPage }>({
  startPage: async ({ page }, use) => {
    const startPage = new StartPage(page);
    await startPage.goto();
    await use(startPage);
  },
});

export { expect } from '@playwright/test';`;

  parallelCode = `test.describe.configure({ mode: 'parallel' });
// o en config:
fullyParallel: true
workers: 4`;
}
