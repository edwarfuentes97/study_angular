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

export { expect };
