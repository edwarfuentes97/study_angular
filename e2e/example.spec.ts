import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/StudyAngular/);
});

test('navigate to Playwright lab', async ({ page }) => {
  await page.goto('/');

  // Click on the Playwright lab link
  await page.getByRole('link', { name: /playwright/i }).click();

  // Expect the URL to contain /lab/playwright
  await expect(page).toHaveURL(/.*\/lab\/playwright/);

  // Expect to see the Playwright learning content
  await expect(page.getByText('Playwright E2E Testing')).toBeVisible();
});

test('Playwright lab has learning tabs', async ({ page }) => {
  await page.goto('/lab/playwright');

  // Check that the three main tabs are present
  await expect(page.getByRole('link', { name: /estudiar/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /ejemplos/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /lab/i })).toBeVisible();
});
