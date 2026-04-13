import { test, expect } from '@playwright/test';

/**
 * Responsive Design Tests
 * Tests for mobile and tablet responsiveness
 */

test.describe('Responsive Design', () => {
  test('should render the dashboard at mobile size', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /Plan de Estudios/i })).toBeVisible();
  });

  test('should render the dashboard at tablet size', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /Plan de Estudios/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /NgRx — State Management/i })).toBeVisible();
  });

  test('should navigate lab tabs on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/lab/playwright');
    await expect(page.getByRole('link', { name: /Estudiar/i })).toBeVisible();
    await page.getByRole('link', { name: /Ejemplos/i }).click();
    await expect(page).toHaveURL(/.*\/lab\/playwright\/examples/);
  });

  test('should display progress indicators on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await expect(page.locator('.overall-pct')).toBeVisible();
  });

  test('should show main dashboard content on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /Plan de Estudios/i })).toBeVisible();
    await expect(page.locator('h2', { hasText: /Playwright E2E Testing/i })).toBeVisible();
  });

  test('should maintain functionality across viewports', async ({ page }) => {
    const viewports = [
      { width: 375, height: 667 },
      { width: 768, height: 1024 },
      { width: 1920, height: 1080 }
    ];

    for (const viewport of viewports) {
      await page.setViewportSize(viewport);
      await page.goto('/');
      await expect(page).toHaveTitle(/StudyAngular/);
      const card = page.locator('article.topic-card', { hasText: /Playwright E2E Testing/i });
      await Promise.all([
        page.waitForURL(/.*\/lab\/playwright/),
        card.getByRole('link').click()
      ]);
      await page.goto('/');
    }
  });
});
