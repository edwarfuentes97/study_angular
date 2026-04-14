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

  async gotoExamples() {
    await this.page.goto(routes.playwright.examples);
  }

  async gotoLabExercises() {
    await this.page.goto(routes.playwright.lab);
  }

  async navigateToTab(label: string) {
    await this.page.getByRole('link', { name: new RegExp(label, 'i') }).click();
  }

  async hasSection(title: RegExp) {
    return this.page.getByText(title, { exact: false }).first();
  }

  firstCodeBlock(): Locator {
    return this.page.locator('pre, code').first();
  }
}
