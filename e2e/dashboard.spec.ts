import { test, expect } from '@playwright/test';

/**
 * Dashboard Tests
 * Tests for the main dashboard functionality and topic navigation
 */

test.describe('Dashboard', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the dashboard heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Plan de Estudios/i })).toBeVisible();
  });

  test('should display topic cards for each study topic', async ({ page }) => {
    const cards = page.locator('article.topic-card');
    await expect(cards).toHaveCount(10);
    await expect(cards.first()).toBeVisible();
  });

  test('should display topic titles inside cards', async ({ page }) => {
    const expectedTitles = [
      'NgRx — State Management',
      'RxJS — Programación Reactiva',
      'Angular Core Avanzado',
      'TypeScript Avanzado',
      'Arquitectura',
      'Performance',
      'Testing',
      'Playwright E2E Testing',
      'Angular Fundamentals',
      'Behavioral & System Design'
    ];

    for (const title of expectedTitles) {
      await expect(page.getByRole('heading', { name: title, exact: true })).toBeVisible();
    }
  });

  test('should show overall and topic progress indicators', async ({ page }) => {
    await expect(page.locator('.overall-pct')).toBeVisible();
    await expect(page.locator('.topic-pct').first()).toBeVisible();
  });

  test('should navigate to the Playwright lab card', async ({ page }) => {
    const playwrightCard = page.locator('article.topic-card', { hasText: /Playwright E2E Testing/i });
    await playwrightCard.getByRole('link').click();
    await expect(page).toHaveURL(/.*\/lab\/playwright/);
  });

  test('should navigate to the NgRx lab card', async ({ page }) => {
    const ngrxCard = page.locator('article.topic-card', { hasText: /NgRx — State Management/i });
    await ngrxCard.getByRole('link').click();
    await expect(page).toHaveURL(/.*\/lab\/ngrx/);
  });

  test('should show topic icons on cards', async ({ page }) => {
    await expect(page.locator('.topic-icon', { hasText: '🧪' }).first()).toBeVisible();
    await expect(page.locator('.topic-icon', { hasText: '🔴' }).first()).toBeVisible();
    await expect(page.locator('.topic-icon', { hasText: '🟠' }).first()).toBeVisible();
    await expect(page.locator('.topic-icon', { hasText: '🟢' }).first()).toBeVisible();
  });

  test('should display subtopic list items', async ({ page }) => {
    await expect(page.locator('.subtopic-list li').first()).toBeVisible();
  });
});
