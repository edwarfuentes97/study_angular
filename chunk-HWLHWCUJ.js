import{Gb as e,Hb as t,Ib as i,Kb as n,Ta as o,Zb as a,fb as s}from"./chunk-G73V3KC4.js";import"./chunk-2NFLSA4Y.js";var l=class m{configExampleCode=`import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  timeout: 30000,
  expect: { timeout: 5000 },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'firefox', use: { browserName: 'firefox' } },
    { name: 'webkit', use: { browserName: 'webkit' } },
  ],
  webServer: {
    command: 'npm start',
    url: 'http://localhost:4200',
    reuseExistingServer: true,
  },
});`;pageObjectCode=`import type { Locator, Page } from '@playwright/test';

export class StartPage {
  readonly welcomeMessage = this.page.getByTestId('start-page-welcome-message');

  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto('/start');
  }
}`;fixtureCode=`import { test as base } from '@playwright/test';
import { StartPage } from '../pages/start.page';

export const test = base.extend<{ startPage: StartPage }>({
  startPage: async ({ page }, use) => {
    const startPage = new StartPage(page);
    await startPage.goto();
    await use(startPage);
  },
});

export { expect } from '@playwright/test';`;exampleTestCode=`import { expect, test } from './fixtures';

test('muestra mensaje de bienvenida', async ({ startPage }) => {
  await expect(startPage.welcomeMessage)
    .toContainText('Welcome to Angular E2E with Playwright');
});`;filterElementCode=`export class FilterInputElement {
  readonly input = this.parent.getByTestId('filter-input');
  readonly resetButton = this.parent.getByTestId('filter-input-reset');

  constructor(private readonly parent: Locator | Page) {}

  async fillInput(text: string) {
    await this.input.fill(text);
  }

  async clearInput() {
    await this.resetButton.click();
  }
}`;static \u0275fac=function(d){return new(d||m)};static \u0275cmp=s({type:m,selectors:[["app-playwright-demo"]],decls:41,vars:5,consts:[[1,"cards"],["id","config-ejemplo",1,"card"],[3,"textContent"],["id","page-object-model-demo",1,"card"],["id","fixture-demo",1,"card"],["id","test-demo",1,"card"],["id","componentes-reutilizables",1,"card"],["id","autenticacion-demo",1,"card"]],template:function(d,r){d&1&&(e(0,"div",0)(1,"div",1)(2,"h3"),a(3,"Configuraci\xF3n de ejemplo"),t(),e(4,"p"),a(5," Usa un archivo de configuraci\xF3n para definir directorio, browsers y servidor. Esto garantiza que Angular est\xE9 disponible antes de ejecutar pruebas. "),t(),e(6,"pre"),i(7,"code",2),t()(),e(8,"div",3)(9,"h3"),a(10,"Page Object Model"),t(),e(11,"p"),a(12," Centraliza selectores y acciones en clases para que los tests se mantengan legibles. "),t(),e(13,"pre"),i(14,"code",2),t()(),e(15,"div",4)(16,"h3"),a(17,"Fixture personalizado"),t(),e(18,"p"),a(19," Crea un fixture que navegue a la p\xE1gina de inicio y devuelva el objeto de p\xE1gina para pruebas. "),t(),e(20,"pre"),i(21,"code",2),t()(),e(22,"div",5)(23,"h3"),a(24,"Ejemplo de prueba"),t(),e(25,"p"),a(26," Con un fixture y un page object la prueba queda muy sencilla y f\xE1cil de leer. "),t(),e(27,"pre"),i(28,"code",2),t()(),e(29,"div",6)(30,"h3"),a(31,"Elementos reutilizables"),t(),e(32,"p"),a(33," Encapsula inputs, botones y componentes compartidos en clases de elemento para facilitar la reutilizaci\xF3n. "),t(),e(34,"pre"),i(35,"code",2),t()(),e(36,"div",7)(37,"h3"),a(38,"Estado de autenticaci\xF3n"),t(),e(39,"p"),a(40," Almacenar el estado de la sesi\xF3n en un archivo permite iniciar tests autenticados sin repetir logins. Esto mejora la velocidad y mantiene los tests independientes. "),t()()()),d&2&&(o(7),n("textContent",r.configExampleCode),o(7),n("textContent",r.pageObjectCode),o(7),n("textContent",r.fixtureCode),o(7),n("textContent",r.exampleTestCode),o(7),n("textContent",r.filterElementCode))},styles:[".cards[_ngcontent-%COMP%]{display:grid;gap:1.5rem}.card[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:#0f172a;color:#f8fafc;padding:1rem;border-radius:.5rem;overflow:auto}"]})};export{l as PlaywrightDemoComponent};
