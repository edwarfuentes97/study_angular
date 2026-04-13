import { Component } from '@angular/core';

@Component({
  selector: 'app-playwright-demo',
  templateUrl: './playwright-demo.html',
  styleUrl: './playwright-demo.css'
})
export class PlaywrightDemoComponent {
  configExampleCode = `import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  timeout: 30000,
  expect: { timeout: 5000 },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'firefox', use: { browserName: 'firefox' } },
    { name: 'webkit', use: { browserName: 'webkit' } },
  ],
  webServer: {
    command: 'npm start',
    url: 'http://localhost:4200',
    reuseExistingServer: true,
  },
});`;

  pageObjectCode = `import type { Locator, Page } from '@playwright/test';

export class StartPage {
  readonly welcomeMessage = this.page.getByTestId('start-page-welcome-message');

  constructor(private readonly page: Page) {}

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

  exampleTestCode = `import { expect, test } from './fixtures';

test('muestra mensaje de bienvenida', async ({ startPage }) => {
  await expect(startPage.welcomeMessage)
    .toContainText('Welcome to Angular E2E with Playwright');
});`;

  filterElementCode = `export class FilterInputElement {
  readonly input = this.parent.getByTestId('filter-input');
  readonly resetButton = this.parent.getByTestId('filter-input-reset');

  constructor(private readonly parent: Locator | Page) {}

  async fillInput(text: string) {
    await this.input.fill(text);
  }

  async clearInput() {
    await this.resetButton.click();
  }
}`;
}
