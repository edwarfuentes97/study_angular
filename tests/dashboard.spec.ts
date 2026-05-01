import { test, expect } from './fixtures';

/**
 * Dashboard Tests
 * Tests for the main dashboard functionality and topic navigation
 */

test.describe('Dashboard', () => {
  test.beforeEach(async ({ dashboardPage }) => {
    await dashboardPage.goto();
  });

  test('[@smoke] should display the dashboard heading', async ({ dashboardPage }) => {
    await expect(dashboardPage.page.getByRole('heading', { name: /Plan de Estudios/i })).toBeVisible();
  });

  test('[@smoke] should display topic cards for each study topic', async ({ dashboardPage }) => {
    await expect(dashboardPage.topicCards).toHaveCount(10);
    await expect(dashboardPage.topicCards.first()).toBeVisible();
  });

  test('[@regression] should display topic titles inside cards', async ({ dashboardPage }) => {
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
      await expect(dashboardPage.page.getByRole('heading', { name: title, exact: true })).toBeVisible();
    }
  });

  test('[@smoke] should show overall and topic progress indicators', async ({ dashboardPage }) => {
    await expect(dashboardPage.page.locator('.overall-pct')).toBeVisible();
    await expect(dashboardPage.page.locator('.topic-pct').first()).toBeVisible();
  });

  test('[@smoke] should navigate to the Playwright lab card', async ({ dashboardPage }) => {
    await dashboardPage.navigateToTopic(/Playwright E2E Testing/i);
    await expect(dashboardPage.page).toHaveURL(/.*\/lab\/playwright/);
  });

  test('[@regression] should navigate to the NgRx lab card', async ({ dashboardPage }) => {
    await dashboardPage.navigateToTopic(/NgRx — State Management/i);
    await expect(dashboardPage.page).toHaveURL(/.*\/lab\/ngrx/);
  });

  test('[@regression] should show topic icons on cards', async ({ dashboardPage }) => {
    await expect(dashboardPage.page.locator('.topic-icon', { hasText: '🧪' }).first()).toBeVisible();
    await expect(dashboardPage.page.locator('.topic-icon', { hasText: '🔴' }).first()).toBeVisible();
    await expect(dashboardPage.page.locator('.topic-icon', { hasText: '🟠' }).first()).toBeVisible();
    await expect(dashboardPage.page.locator('.topic-icon', { hasText: '🟢' }).first()).toBeVisible();
  });

  test('[@regression] should display subtopic list items', async ({ dashboardPage }) => {
    await expect(dashboardPage.page.locator('.subtopic-list li').first()).toBeVisible();
  });
});
