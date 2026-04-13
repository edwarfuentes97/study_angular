import { test, expect } from '@playwright/test';

/**
 * Playwright Lab Tests
 * Core validation for the Playwright module
 */

test.describe('Playwright Lab', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/lab/playwright');
  });

  test('should display the Playwright lab heading and tabs', async ({ page }) => {
    await expect(page.locator('h2', { hasText: /Playwright/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Estudiar/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Ejemplos/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Lab/i })).toBeVisible();
  });

  test('should navigate to examples tab and show code blocks', async ({ page }) => {
    await page.getByRole('link', { name: /Ejemplos/i }).click();
    await expect(page).toHaveURL(/.*\/lab\/playwright\/examples/);
    await expect(page.locator('pre, code').first()).toBeVisible();
  });

  test('should navigate to lab exercises tab', async ({ page }) => {
    await page.getByRole('link', { name: /Lab/i }).click();
    await expect(page).toHaveURL(/.*\/lab\/playwright\/lab/);
    await expect(page.locator('h3', { hasText: /Ejercicio/i }).first()).toBeVisible();
  });

  test('should display Playwright learning content sections', async ({ page }) => {
    const expectedSections = [
      /Instalación/i,
      /Configuración inicial/i,
      /Page Object Model/i,
      /Fixtures personalizados/i,
      /Autenticación persistente/i,
      /Ejecutar y depurar/i,
      /Playwright Inspector/i,
      /Paralelización/i,
      /CI\/CD/i
    ];

    for (const section of expectedSections) {
      await expect(page.getByText(section, { exact: false }).first()).toBeVisible();
    }
  });
});
