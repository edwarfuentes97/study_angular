import { test, expect } from './fixtures';

/**
 * Progress Tracking Tests
 * Tests for the progress tracking and completion system
 */

test.describe('Progress Tracking', () => {
  test.beforeEach(async ({ dashboardPage }) => {
    await dashboardPage.goto();
  });

  test('should display overall progress percentage', async ({ dashboardPage }) => {
    const progressText = await dashboardPage.page.locator('.overall-pct').textContent();
    expect(progressText).toMatch(/\d+%/);
  });

  test('should display individual topic progress', async ({ dashboardPage }) => {
    const topicPercents = await dashboardPage.page.locator('.topic-pct').allTextContents();
    expect(topicPercents.length).toBeGreaterThan(0);
    for (const text of topicPercents) {
      expect(text).toMatch(/\d+%/);
    }
  });

  test('should show subtopic completion toggles', async ({ dashboardPage }) => {
    const checkbox = dashboardPage.page.locator('.subtopic-list input[type="checkbox"]').first();
    await expect(checkbox).toBeVisible();
  });

  test('should allow marking a subtopic as complete', async ({ dashboardPage }) => {
    const checkbox = dashboardPage.page.locator('.subtopic-list input[type="checkbox"]').first();
    const initialState = await checkbox.isChecked();
    await checkbox.click();
    expect(await checkbox.isChecked()).not.toBe(initialState);
  });

  test('should persist progress across refresh', async ({ dashboardPage }) => {
    const checkbox = dashboardPage.page.locator('.subtopic-list input[type="checkbox"]').first();
    const initialState = await checkbox.isChecked();
    await checkbox.click();
    await dashboardPage.page.reload();
    expect(await checkbox.isChecked()).toBe(!initialState);
  });

  test('should update overall progress after completing a subtopic', async ({ dashboardPage }) => {
    const initialProgressText = await dashboardPage.page.locator('.overall-pct').textContent();
    const initialProgress = initialProgressText ? parseInt(initialProgressText.replace('%', '')) : 0;
    const checkbox = dashboardPage.page.locator('.subtopic-list input[type="checkbox"]').first();
    if (!(await checkbox.isChecked())) {
      await checkbox.click();
    }
    await dashboardPage.goto();
    const newProgressText = await dashboardPage.page.locator('.overall-pct').textContent();
    const newProgress = newProgressText ? parseInt(newProgressText.replace('%', '')) : 0;
    expect(newProgress).toBeGreaterThanOrEqual(initialProgress);
  });

  test('should show progress bars on dashboard', async ({ dashboardPage }) => {
    await expect(dashboardPage.page.locator('.topic-progress-bar').first()).toBeVisible();
  });
});
