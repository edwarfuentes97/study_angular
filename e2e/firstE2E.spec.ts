import { expect, test } from "@playwright/test";

test('la pagina de inicio myuestra el mensaje de bienvenida', async ({ page }) => {
    await page.goto('/lab/playwright');
    await expect(page.getByText('Playwright es un framework moderno de pruebas end-to-end ')).toBeVisible();
})