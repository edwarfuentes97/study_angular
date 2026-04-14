import { test, expect } from './fixtures';

/**
 * Playwright Lab Tests
 * Core validation for the Playwright module
 */

test.describe('Playwright Lab', () => {
  test.beforeEach(async ({ playwrightLabPage }) => {
    await playwrightLabPage.goto();
  });

  test('should display the Playwright lab heading and tabs', async ({ playwrightLabPage }) => {
    await expect(playwrightLabPage.page.locator('h2', { hasText: /Playwright/i })).toBeVisible();
    await expect(playwrightLabPage.page.getByRole('link', { name: /Estudiar/i })).toBeVisible();
    await expect(playwrightLabPage.page.getByRole('link', { name: /Ejemplos/i })).toBeVisible();
    await expect(playwrightLabPage.page.getByRole('link', { name: /Lab/i })).toBeVisible();
  });

  test('should navigate to examples tab and show code blocks', async ({ playwrightLabPage }) => {
    await playwrightLabPage.navigateToTab('Ejemplos');
    await expect(playwrightLabPage.page).toHaveURL(/.*\/lab\/playwright\/examples/);
    await expect(playwrightLabPage.page.locator('pre, code').first()).toBeVisible();
  });

  test('should navigate to lab exercises tab', async ({ playwrightLabPage }) => {
    await playwrightLabPage.navigateToTab('Lab');
    await expect(playwrightLabPage.page).toHaveURL(/.*\/lab\/playwright\/lab/);
    await expect(playwrightLabPage.page.locator('h3', { hasText: /Ejercicio/i }).first()).toBeVisible();
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
