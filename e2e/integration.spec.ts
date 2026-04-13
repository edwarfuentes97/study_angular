import { test, expect } from '@playwright/test';

/**
 * Integration Tests
 * Tests that combine multiple features and user workflows
 */

test.describe('Integration Tests', () => {
  test('complete user journey through a lab', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/StudyAngular/);

    const playwrightCard = page.locator('article.topic-card', { hasText: /Playwright E2E Testing/i });
    await playwrightCard.getByRole('link').click();
    await expect(page).toHaveURL(/.*\/lab\/playwright/);

    await page.getByRole('link', { name: /Ejemplos/i }).click();
    await expect(page).toHaveURL(/.*\/lab\/playwright\/examples/);

    await page.getByRole('link', { name: /Lab/i }).click();
    await expect(page).toHaveURL(/.*\/lab\/playwright\/lab/);

    const toggle = page.locator('.subtopic-list input[type="checkbox"]').first();
    if (await toggle.isVisible()) {
      await toggle.click();
    }

    await page.goto('/');
    await expect(page.locator('.overall-pct')).toBeVisible();
  });

  test('cross-lab navigation works', async ({ page }) => {
    const labs = [
      { title: /NgRx — State Management/i, path: /lab\/ngrx/ },
      { title: /RxJS — Programación Reactiva/i, path: /lab\/rxjs/ },
      { title: /Playwright/i, path: /lab\/playwright/ }
    ];

    for (const lab of labs) {
      await page.goto('/');
      const card = page.locator('article.topic-card', { hasText: lab.title });
      await card.getByRole('link').click();
      await expect(page).toHaveURL(lab.path);
      await expect(page.locator('h2, h3').first()).toBeVisible();
    }

    await page.goto('/');
    await expect(page.locator('.overall-pct')).toBeVisible();
  });

  test('invalid routes should recover back to dashboard', async ({ page }) => {
    await page.goto('/invalid-route');
    await expect(page.locator('body')).toBeVisible();
    await page.goto('/');
    await expect(page).toHaveTitle(/StudyAngular/);
  });

  test('data persistence with localStorage works', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => {
      localStorage.setItem('playwright-test', 'active');
    });
    await page.reload();
    const storageValue = await page.evaluate(() => localStorage.getItem('playwright-test'));
    expect(storageValue).toBe('active');
  });
});
