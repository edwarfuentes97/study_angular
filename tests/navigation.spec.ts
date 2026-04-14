import { test, expect } from './fixtures';

/**
 * Navigation Tests
 * Tests for general navigation functionality across the application
 */

test.describe('Navigation', () => {
  test.beforeEach(async ({ app }) => {
    await app.dashboard().goto();
  });

  test('should load the main page', async ({ app }) => {
    await expect(app.dashboard().page).toHaveTitle(/StudyAngular/);
    await expect(app.dashboard().page.getByRole('heading', { name: /Plan de Estudios — Angular & NgRx/i })).toBeVisible();
  });

  test('should have working navigation links', async ({ app }) => {
    // Check main navigation links are present
    await expect(app.dashboard().page.getByRole('link', { name: /dashboard/i })).toBeVisible();
    await expect(app.dashboard().page.getByRole('link', { name: /guía de estudio/i })).toBeVisible();
  });

  test('should navigate to study guide', async ({ app }) => {
    await app.dashboard().page.getByRole('link', { name: /guía de estudio/i }).click();
    await expect(app.dashboard().page).toHaveURL(/.*\/guide/);
    await expect(app.dashboard().page.getByRole('heading', { name: /guía de estudio/i })).toBeVisible();
  });

  test('should handle 404 gracefully', async ({ app }) => {
    await app.dashboard().page.goto('/nonexistent-page');
    // Should redirect to dashboard or show 404 content
    await expect(app.dashboard().page).toHaveTitle(/StudyAngular/);
  });

  test('should maintain navigation state on refresh', async ({ app }) => {
    await app.dashboard().page.getByRole('link', { name: /guía de estudio/i }).click();
    await expect(app.dashboard().page).toHaveURL(/.*\/guide/);

    await app.dashboard().page.reload();
    await expect(app.dashboard().page).toHaveURL(/.*\/guide/);
  });
});