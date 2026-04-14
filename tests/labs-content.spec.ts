import { test, expect } from './fixtures';

/**
 * Lab Content Tests
 * Verify core lab content is visible and navigable
 */

test.describe('NgRx Lab', () => {
    test('should display NgRx heading and nav', async ({ page }) => {
        await page.goto('/lab/ngrx');
        await expect(page.locator('h2', { hasText: /NgRx — State Management/i })).toBeVisible();
        await expect(page.getByRole('link', { name: /Estudiar/i })).toBeVisible();
    });

    test('should show NgRx examples section', async ({ page }) => {
        await page.goto('/lab/ngrx/examples');
        await expect(page.locator('h2', { hasText: /NgRx Lab — Products CRUD/i })).toBeVisible();
        await expect(page.getByRole('button', { name: /Add Product/i })).toBeVisible();
    });

    test('should show NgRx exercises page', async ({ page }) => {
        await page.goto('/lab/ngrx/lab');
        await expect(page.locator('h3', { hasText: /Ejercicio/i }).first()).toBeVisible();
    });
});

test.describe('RxJS Lab', () => {
    test('should display RxJS heading', async ({ page }) => {
        await page.goto('/lab/rxjs');
        await expect(page.getByRole('heading', { name: /RxJS — Programación Reactiva/i })).toBeVisible();
    });

    test('should display RxJS examples', async ({ page }) => {
        await page.goto('/lab/rxjs/examples');
        await expect(page.locator('h2', { hasText: /Observable Types/i })).toBeVisible();
        await expect(page.getByRole('button', { name: /Create Subject/i })).toBeVisible();
    });
});

test.describe('Fundamentals Lab', () => {
    test('should display fundamentals heading', async ({ page }) => {
        await page.goto('/lab/fundamentals');
        await expect(page.getByRole('heading', { name: '🟢 Angular Fundamentals', exact: true })).toBeVisible();
    });
});

test.describe('TypeScript Lab', () => {
    test('should display TypeScript heading', async ({ page }) => {
        await page.goto('/lab/typescript');
        await expect(page.getByRole('heading', { name: /TypeScript/i })).toBeVisible();
    });
});