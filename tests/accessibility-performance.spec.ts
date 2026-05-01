import { test, expect } from './fixtures';

/**
 * Accessibility Tests
 * Tests for basic accessibility features
 */

test.describe('Accessibility', () => {
  test('[@smoke] should display the main dashboard heading', async ({ app }) => {
    await app.dashboard().goto();
    await expect(app.dashboard().page.getByRole('heading', { name: /Plan de Estudios/i })).toBeVisible();
  });

  test('[@regression] should have accessible navigation links', async ({ app }) => {
    await app.dashboard().goto();
    const links = app.dashboard().page.getByRole('link');
    const linkCount = await links.count();
    expect(linkCount).toBeGreaterThan(0);

    for (let i = 0; i < Math.min(linkCount, 5); i++) {
      const link = links.nth(i);
      const text = await link.textContent();
      expect(text?.trim().length).toBeGreaterThan(0);
    }
  });

  test('[@regression] should support keyboard navigation to focusable elements', async ({ app }) => {
    await app.dashboard().goto();
    await app.dashboard().page.keyboard.press('Tab');
    await expect(app.dashboard().page.locator(':focus')).toBeVisible();
  });

  test('[@regression] should have alt text for images if any exist', async ({ app }) => {
    await app.dashboard().goto();
    const images = app.dashboard().page.locator('img');
    const imageCount = await images.count();
    for (let i = 0; i < imageCount; i++) {
      const alt = await images.nth(i).getAttribute('alt');
      expect(alt).not.toBeNull();
    }
  });

  test('[@regression] should have form labels when forms are present', async ({ app }) => {
    await app.dashboard().goto();
    const inputs = app.dashboard().page.locator('input, select, textarea');
    const count = await inputs.count();
    for (let i = 0; i < count; i++) {
      const input = inputs.nth(i);
      const id = await input.getAttribute('id');
      const ariaLabel = await input.getAttribute('aria-label');
      const wrappedLabel = await input.evaluate(el => el.closest('label') !== null);
      if (id) {
        const label = app.dashboard().page.locator(`label[for="${id}"]`);
        expect(await label.count() > 0 || ariaLabel || wrappedLabel).toBeTruthy();
      } else {
        expect(ariaLabel || wrappedLabel).toBeTruthy();
      }
    }
  });
});

/**
 * Performance Tests
 * Tests for loading and experience
 */

test.describe('Performance', () => {
  test('[@smoke] should load dashboard quickly', async ({ app }) => {
    const startTime = Date.now();
    await app.dashboard().goto();
    const loadTime = Date.now() - startTime;
    expect(loadTime).toBeLessThan(3000);
  });

  test('[@smoke] should load Playwright lab content', async ({ playwrightLabPage }) => {
    await playwrightLabPage.goto();
    await playwrightLabPage.page.waitForURL('**/lab/playwright');
    await expect(playwrightLabPage.page.locator('h2', { hasText: /Playwright/ })).toBeVisible();
  });

  test('[@regression] should not have broken images', async ({ app }) => {
    await app.dashboard().goto();
    const images = app.dashboard().page.locator('img');
    const imageCount = await images.count();
    for (let i = 0; i < imageCount; i++) {
      const isBroken = await images.nth(i).evaluate(el => {
        const img = el as HTMLImageElement;
        return img.complete && img.naturalHeight === 0;
      });
      expect(isBroken).toBe(false);
    }
  });
});
