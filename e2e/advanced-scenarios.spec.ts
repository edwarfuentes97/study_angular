import { test, expect } from '@playwright/test';

/**
 * Advanced Test Scenarios
 * Complex test scenarios and edge cases
 */

test.describe('Advanced Scenarios', () => {
  test('should handle rapid navigation between labs', async ({ page }) => {
    await page.goto('/');
    const labs = [
      /NgRx — State Management/i,
      /RxJS — Programación Reactiva/i,
      /Playwright/i,
      /Angular Fundamentals/i
    ];

    for (const lab of labs) {
      const card = page.locator('article.topic-card', { hasText: lab });
      const link = card.getByRole('link');
      await Promise.all([
        page.waitForURL(/.*\/lab\/./),
        link.click()
      ]);
      await expect(page.locator('h2').first()).toBeVisible();
      await page.goto('/');
    }
  });

  test('should handle browser back and forward navigation', async ({ page }) => {
    await page.goto('/');
    const playwrightCard = page.locator('article.topic-card', { hasText: /Playwright E2E Testing/i });
    await playwrightCard.getByRole('link').click();
    await expect(page).toHaveURL(/.*\/lab\/playwright/);

    await page.getByRole('link', { name: /Ejemplos/i }).click();
    await expect(page).toHaveURL(/.*\/lab\/playwright\/examples/);

    await page.goBack();
    await expect(page).toHaveURL(/.*\/lab\/playwright/);

    await page.goForward();
    await expect(page).toHaveURL(/.*\/lab\/playwright\/examples/);
  });

  test('should handle special unicode characters in dashboard', async ({ page }) => {
    await page.goto('/');
    const specialChars = ['—', '🔴', '🟠', '🟢', '🧪'];
    for (const char of specialChars) {
      await expect(page.locator(`text=${char}`).first()).toBeVisible();
    }
  });

  test('should handle local storage and cookies', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => localStorage.setItem('test', 'value'));
    expect(await page.evaluate(() => localStorage.getItem('test'))).toBe('value');
    await page.context().addCookies([{ name: 'test', value: 'cookie', url: 'http://localhost:4200' }]);
    const cookies = await page.context().cookies();
    expect(cookies.some(c => c.name === 'test' && c.value === 'cookie')).toBe(true);
  });

  test('should handle concurrent interactions', async ({ page }) => {
    await page.goto('/');
    await Promise.all([
      page.locator('body').click(),
      page.waitForLoadState('networkidle')
    ]);
    await expect(page.locator('body')).toBeVisible();
  });
});
