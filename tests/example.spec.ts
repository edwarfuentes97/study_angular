import { test, expect } from './fixtures';

test('has title', async ({ app }) => {
  await app.dashboard().goto();

  // Expect a title "to contain" a substring.
  await expect(app.dashboard().page).toHaveTitle(/StudyAngular/);
});

test('navigate to Playwright lab', async ({ app }) => {
  await app.dashboard().goto();

  // Click on the Playwright lab link
  await app.dashboard().navigateToTopic(/Playwright E2E Testing/i);

  // Expect the URL to contain /lab/playwright
  await expect(app.dashboard().page).toHaveURL(/.*\/lab\/playwright/);

  // Expect to see the Playwright learning content
  await expect(app.playwrightLab().page.getByRole('heading', { name: '🧪 Playwright' })).toBeVisible();
});

test('Playwright lab has learning tabs', async ({ playwrightLabPage }) => {
  await playwrightLabPage.goto();

  // Check that the three main tabs are present
  await expect(playwrightLabPage.page.getByRole('link', { name: /estudiar/i })).toBeVisible();
  await expect(playwrightLabPage.page.getByRole('link', { name: /ejemplos/i })).toBeVisible();
  await expect(playwrightLabPage.page.getByRole('link', { name: /lab/i })).toBeVisible();
});
