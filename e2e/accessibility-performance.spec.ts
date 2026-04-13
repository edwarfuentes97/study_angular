import { test, expect } from '@playwright/test';

/**
 * Accessibility Tests
 * Tests for basic accessibility features
 */

test.describe('Accessibility', () => {
  test('should display the main dashboard heading', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /Plan de Estudios/i })).toBeVisible();
  });

  test('should have accessible navigation links', async ({ page }) => {
    await page.goto('/');
    const links = page.getByRole('link');
    const linkCount = await links.count();
    expect(linkCount).toBeGreaterThan(0);

    for (let i = 0; i < Math.min(linkCount, 5); i++) {
      const link = links.nth(i);
      const text = await link.textContent();
      expect(text?.trim().length).toBeGreaterThan(0);
    }
  });

  test('should support keyboard navigation to focusable elements', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');
    await expect(page.locator(':focus')).toBeVisible();
  });

  test('should have alt text for images if any exist', async ({ page }) => {
    await page.goto('/');
    const images = page.locator('img');
    const imageCount = await images.count();
    for (let i = 0; i < imageCount; i++) {
      const alt = await images.nth(i).getAttribute('alt');
      expect(alt).not.toBeNull();
    }
  });

  test('should have form labels when forms are present', async ({ page }) => {
    await page.goto('/');
    const inputs = page.locator('input, select, textarea');
    const count = await inputs.count();
    for (let i = 0; i < count; i++) {
      const input = inputs.nth(i);
      const id = await input.getAttribute('id');
      const ariaLabel = await input.getAttribute('aria-label');
      const wrappedLabel = await input.evaluate(el => el.closest('label') !== null);
      if (id) {
        const label = page.locator(`label[for="${id}"]`);
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
  test('should load dashboard quickly', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;
    expect(loadTime).toBeLessThan(3000);
  });

  test('should load Playwright lab content', async ({ page }) => {
    await page.goto('/lab/playwright');
    await page.waitForURL('**/lab/playwright');
    await expect(page.locator('h2', { hasText: /Playwright/ })).toBeVisible();
  });

  test('should not have broken images', async ({ page }) => {
    await page.goto('/');
    const images = page.locator('img');
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
