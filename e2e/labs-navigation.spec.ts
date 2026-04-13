import { test, expect } from '@playwright/test';

/**
 * Labs Navigation Tests
 * Tests for navigation within and between different labs
 */

test.describe('Labs Navigation', () => {
  test('should navigate to NgRx lab and display tabs', async ({ page }) => {
    await page.goto('/lab/ngrx');

    // Check main navigation tabs
    await expect(page.getByRole('link', { name: /estudiar/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /ejemplos/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /lab/i })).toBeVisible();

    // Check lab title
    await expect(page.getByRole('heading', { name: /NgRx — State Management/i })).toBeVisible();
  });

  test('should navigate between NgRx lab tabs', async ({ page }) => {
    await page.goto('/lab/ngrx');

    // Navigate to examples tab
    await page.getByRole('link', { name: /ejemplos/i }).click();
    await expect(page).toHaveURL(/.*\/lab\/ngrx\/examples/);

    // Navigate to lab tab
    await page.getByRole('link', { name: /lab/i }).click();
    await expect(page).toHaveURL(/.*\/lab\/ngrx\/lab/);

    // Back to main tab
    await page.getByRole('link', { name: /estudiar/i }).click();
    await expect(page).toHaveURL(/.*\/lab\/ngrx/);
  });

  test('should navigate to RxJS lab', async ({ page }) => {
    await page.goto('/lab/rxjs');

    await expect(page.getByRole('heading', { name: /RxJS — Programación Reactiva/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /estudiar/i })).toBeVisible();
  });

  test('should navigate to Fundamentals lab', async ({ page }) => {
    await page.goto('/lab/fundamentals');

    await expect(page.locator('main h2', { hasText: /Angular Fundamentals/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /estudiar/i })).toBeVisible();
  });

  test('should navigate to TypeScript lab', async ({ page }) => {
    await page.goto('/lab/typescript');

    await expect(page.getByRole('heading', { name: /TypeScript Avanzado/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /estudiar/i })).toBeVisible();
  });

  test('should navigate to Architecture lab', async ({ page }) => {
    await page.goto('/lab/architecture');

    await expect(page.locator('main h2', { hasText: /Arquitectura/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /estudiar/i })).toBeVisible();
  });

  test('should navigate to Performance lab', async ({ page }) => {
    await page.goto('/lab/performance');

    await expect(page.locator('main h2', { hasText: /Performance/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /estudiar/i })).toBeVisible();
  });

  test('should navigate to Testing lab', async ({ page }) => {
    await page.goto('/lab/testing');

    await expect(page.locator('main h2', { hasText: /Testing/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /estudiar/i })).toBeVisible();
  });

  test('should navigate to Angular lab', async ({ page }) => {
    await page.goto('/lab/angular');

    await expect(page.locator('main h2', { hasText: /Angular Core Avanzado/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /estudiar/i })).toBeVisible();
  });

  test('should handle direct navigation to lab subpages', async ({ page }) => {
    // Direct navigation to a subpage should work
    await page.goto('/lab/ngrx/examples');
    await expect(page).toHaveURL(/.*\/lab\/ngrx\/examples/);
    await expect(page.getByRole('heading', { name: /NgRx — State Management/i })).toBeVisible();
  });

  test('should preserve lab navigation state', async ({ page }) => {
    await page.goto('/lab/ngrx/examples');
    await expect(page).toHaveURL(/.*\/lab\/ngrx\/examples/);

    // Refresh should maintain the same page
    await page.reload();
    await expect(page).toHaveURL(/.*\/lab\/ngrx\/examples/);
  });

  test('should navigate back to dashboard from labs', async ({ page }) => {
    await page.goto('/lab/ngrx');
    await expect(page).toHaveURL(/.*\/lab\/ngrx/);

    // Click dashboard link (assuming there's a back/home link)
    const dashboardLink = page.getByRole('link', { name: /dashboard/i }).or(
      page.getByRole('link', { name: /home/i })
    ).or(page.locator('a[href="/"]'));

    if (await dashboardLink.isVisible()) {
      await dashboardLink.click();
      await expect(page).toHaveURL('/');
    }
  });
});