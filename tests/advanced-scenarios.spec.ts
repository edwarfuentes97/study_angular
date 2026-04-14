import { test, expect } from './fixtures';

/**
 * Advanced Test Scenarios
 * Complex test scenarios and edge cases
 */

test.describe('Advanced Scenarios', () => {
  test('should handle rapid navigation between labs', async ({ app }) => {
    await app.dashboard().goto();
    const labs = [
      /NgRx — State Management/i,
      /RxJS — Programación Reactiva/i,
      /Playwright/i,
      /Angular Fundamentals/i
    ];

    for (const lab of labs) {
      const card = app.dashboard().page.locator('article.topic-card', { hasText: lab });
      const link = card.getByRole('link');
      await Promise.all([
        app.dashboard().page.waitForURL(/.*\/lab\/./),
        link.click()
      ]);
      await expect(app.dashboard().page.locator('h2').first()).toBeVisible();
      await app.dashboard().goto();
    }
  });

  test('should handle browser back and forward navigation', async ({ app }) => {
    await app.dashboard().goto();
    const playwrightCard = app.dashboard().page.locator('article.topic-card', { hasText: /Playwright E2E Testing/i });
    await playwrightCard.getByRole('link').click();
    await expect(app.dashboard().page).toHaveURL(/.*\/lab\/playwright/);

    await app.dashboard().page.getByRole('link', { name: /Ejemplos/i }).click();
    await expect(app.dashboard().page).toHaveURL(/.*\/lab\/playwright\/examples/);

    await app.dashboard().page.goBack();
    await expect(app.dashboard().page).toHaveURL(/.*\/lab\/playwright/);

    await app.dashboard().page.goForward();
    await expect(app.dashboard().page).toHaveURL(/.*\/lab\/playwright\/examples/);
  });

  test('should handle special unicode characters in dashboard', async ({ app }) => {
    await app.dashboard().goto();
    const specialChars = ['—', '🔴', '🟠', '🟢', '🧪'];
    for (const char of specialChars) {
      await expect(app.dashboard().page.locator(`text=${char}`).first()).toBeVisible();
    }
  });

  test('should handle local storage and cookies', async ({ app }) => {
    await app.dashboard().goto();
    await app.dashboard().page.evaluate(() => localStorage.setItem('test', 'value'));
    expect(await app.dashboard().page.evaluate(() => localStorage.getItem('test'))).toBe('value');
    await app.dashboard().page.context().addCookies([{ name: 'test', value: 'cookie', url: 'http://localhost:4200' }]);
    const cookies = await app.dashboard().page.context().cookies();
    expect(cookies.some(c => c.name === 'test' && c.value === 'cookie')).toBe(true);
  });

  test('should handle concurrent interactions', async ({ app }) => {
    await app.dashboard().goto();
    await Promise.all([
      app.dashboard().page.locator('body').click(),
      app.dashboard().page.waitForLoadState('networkidle')
    ]);
    await expect(app.dashboard().page.locator('body')).toBeVisible();
  });
});
