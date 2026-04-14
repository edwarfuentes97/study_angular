import type { Page } from '@playwright/test';
import { DashboardPage } from './dashboard.page';
import { PlaywrightLabPage } from './playwright-lab.page';

export class AppModule {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  dashboard() {
    return new DashboardPage(this.page);
  }

  playwrightLab() {
    return new PlaywrightLabPage(this.page);
  }
}
