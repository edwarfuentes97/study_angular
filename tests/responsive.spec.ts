import { test, expect } from './fixtures';

/**
 * Responsive Design Tests
 * Tests for mobile and tablet responsiveness
 */

test.describe('Responsive Design', () => {
  test('should render the dashboard at mobile size', async ({ dashboardPage }) => {
    await dashboardPage.page.setViewportSize({ width: 375, height: 667 });
    await dashboardPage.goto();
    await expect(dashboardPage.page.getByRole('heading', { name: /Plan de Estudios/i })).toBeVisible();
  });

  test('should render the dashboard at tablet size', async ({ dashboardPage }) => {
    await dashboardPage.page.setViewportSize({ width: 768, height: 1024 });
    await dashboardPage.goto();
    await expect(dashboardPage.page.getByRole('heading', { name: /Plan de Estudios/i })).toBeVisible();
    await expect(dashboardPage.page.getByRole('heading', { name: /NgRx — State Management/i })).toBeVisible();
  });

  test('should navigate lab tabs on mobile', async ({ playwrightLabPage }) => {
    await playwrightLabPage.page.setViewportSize({ width: 375, height: 667 });
    await playwrightLabPage.goto();
    await expect(playwrightLabPage.page.getByRole('link', { name: /Estudiar/i })).toBeVisible();
    await playwrightLabPage.page.getByRole('link', { name: /Ejemplos/i }).click();
    await expect(playwrightLabPage.page).toHaveURL(/.*\/lab\/playwright\/examples/);
  });

  test('should display progress indicators on mobile', async ({ dashboardPage }) => {
    await dashboardPage.page.setViewportSize({ width: 375, height: 667 });
    await dashboardPage.goto();
    await expect(dashboardPage.page.locator('.overall-pct')).toBeVisible();
  });

  test('should show main dashboard content on desktop', async ({ dashboardPage }) => {
    await dashboardPage.page.setViewportSize({ width: 1920, height: 1080 });
    await dashboardPage.goto();
    await expect(dashboardPage.page.getByRole('heading', { name: /Plan de Estudios/i })).toBeVisible();
    await expect(dashboardPage.page.locator('h2', { hasText: /Playwright E2E Testing/i })).toBeVisible();
  });

  test('should maintain functionality across viewports', async ({ app }) => {
    const viewports = [
      { width: 375, height: 667 },
      { width: 768, height: 1024 },
      { width: 1920, height: 1080 }
    ];

    for (const viewport of viewports) {
      await app.dashboard().page.setViewportSize(viewport);
      await app.dashboard().goto();
      await expect(app.dashboard().page).toHaveTitle(/StudyAngular/);
      const card = app.dashboard().page.locator('article.topic-card', { hasText: /Playwright E2E Testing/i });
      await Promise.all([
        app.dashboard().page.waitForURL(/.*\/lab\/playwright/),
        card.getByRole('link').click()
      ]);
      await app.dashboard().goto();
    }
  });
});
