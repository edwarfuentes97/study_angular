import { test, expect } from "./fixtures";

test('la pagina de inicio myuestra el mensaje de bienvenida', async ({ playwrightLabPage }) => {
    await playwrightLabPage.goto();
    await expect(playwrightLabPage.page.getByText('Playwright es un framework moderno de pruebas end-to-end ')).toBeVisible();
})