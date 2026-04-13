import { test, expect } from '@playwright/test';

/**
 * Navigation Tests
 * Tests for general navigation functionality across the application
 */

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load the main page', async ({ page }) => {
    await expect(page).toHaveTitle(/StudyAngular/);
    await expect(page.getByRole('heading', { name: /Plan de Estudios — Angular & NgRx/i })).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    // Check main navigation links are present
    await expect(page.getByRole('link', { name: /dashboard/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /guía de estudio/i })).toBeVisible();
  });

  test('should navigate to study guide', async ({ page }) => {
    await page.getByRole('link', { name: /guía de estudio/i }).click();
    await expect(page).toHaveURL(/.*\/guide/);
    await expect(page.getByRole('heading', { name: /guía de estudio/i })).toBeVisible();
  });

  test('should handle 404 gracefully', async ({ page }) => {
    await page.goto('/nonexistent-page');
    // Should redirect to dashboard or show 404 content
    await expect(page).toHaveTitle(/StudyAngular/);
  });

  test('should maintain navigation state on refresh', async ({ page }) => {
    await page.getByRole('link', { name: /guía de estudio/i }).click();
    await expect(page).toHaveURL(/.*\/guide/);

    await page.reload();
    await expect(page).toHaveURL(/.*\/guide/);
  });
});