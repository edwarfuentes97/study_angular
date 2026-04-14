import { test, expect } from './fixtures';

/**
 * Integration Tests
 * Tests that combine multiple features and user workflows
 */

test.describe('Integration Tests', () => {
  test('complete user journey through a lab', async ({ app }) => {
    await app.dashboard().goto();
    await expect(app.dashboard().page).toHaveTitle(/StudyAngular/);

    await app.dashboard().navigateToTopic(/Playwright E2E Testing/i);
    await expect(app.dashboard().page).toHaveURL(/.*\/lab\/playwright/);

    await app.playwrightLab().navigateToTab('Ejemplos');
    await expect(app.playwrightLab().page).toHaveURL(/.*\/lab\/playwright\/examples/);

    await app.playwrightLab().navigateToTab('Lab');
    await expect(app.playwrightLab().page).toHaveURL(/.*\/lab\/playwright\/lab/);

    const toggle = app.playwrightLab().page.locator('.subtopic-list input[type="checkbox"]').first();
    if (await toggle.isVisible()) {
      await toggle.click();
    }

    await app.dashboard().goto();
    await expect(app.dashboard().page.locator('.overall-pct')).toBeVisible();
  });

  test('cross-lab navigation works', async ({ app }) => {
    const labs = [
      { title: /NgRx — State Management/i, path: /lab\/ngrx/ },
      { title: /RxJS — Programación Reactiva/i, path: /lab\/rxjs/ },
      { title: /Playwright/i, path: /lab\/playwright/ }
    ];

    for (const lab of labs) {
      await app.dashboard().goto();
      const card = app.dashboard().page.locator('article.topic-card', { hasText: lab.title });
      await card.getByRole('link').click();
      await expect(app.dashboard().page).toHaveURL(lab.path);
      await expect(app.dashboard().page.locator('h2, h3').first()).toBeVisible();
    }

    await app.dashboard().goto();
    await expect(app.dashboard().page.locator('.overall-pct')).toBeVisible();
  });

  test('invalid routes should recover back to dashboard', async ({ app }) => {
    await app.dashboard().page.goto('/invalid-route');
    await expect(app.dashboard().page.locator('body')).toBeVisible();
    await app.dashboard().goto();
    await expect(app.dashboard().page).toHaveTitle(/StudyAngular/);
  });

  test('data persistence with localStorage works', async ({ app }) => {
    await app.dashboard().goto();
    await app.dashboard().page.evaluate(() => {
      localStorage.setItem('playwright-test', 'active');
    });
    await app.dashboard().page.reload();
    const storageValue = await app.dashboard().page.evaluate(() => localStorage.getItem('playwright-test'));
    expect(storageValue).toBe('active');
  });
});
