import { test, expect } from '@playwright/test';

/**
 * Progress Tracking Tests
 * Tests for the progress tracking and completion system
 */

test.describe('Progress Tracking', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display overall progress percentage', async ({ page }) => {
    const progressText = await page.locator('.overall-pct').textContent();
    expect(progressText).toMatch(/\d+%/);
  });

  test('should display individual topic progress', async ({ page }) => {
    const topicPercents = await page.locator('.topic-pct').allTextContents();
    expect(topicPercents.length).toBeGreaterThan(0);
    for (const text of topicPercents) {
      expect(text).toMatch(/\d+%/);
    }
  });

  test('should show subtopic completion toggles', async ({ page }) => {
    const checkbox = page.locator('.subtopic-list input[type="checkbox"]').first();
    await expect(checkbox).toBeVisible();
  });

  test('should allow marking a subtopic as complete', async ({ page }) => {
    const checkbox = page.locator('.subtopic-list input[type="checkbox"]').first();
    const initialState = await checkbox.isChecked();
    await checkbox.click();
    expect(await checkbox.isChecked()).not.toBe(initialState);
  });

  test('should persist progress across refresh', async ({ page }) => {
    const checkbox = page.locator('.subtopic-list input[type="checkbox"]').first();
    const initialState = await checkbox.isChecked();
    await checkbox.click();
    await page.reload();
    expect(await checkbox.isChecked()).toBe(!initialState);
  });

  test('should update overall progress after completing a subtopic', async ({ page }) => {
    const initialProgressText = await page.locator('.overall-pct').textContent();
    const initialProgress = initialProgressText ? parseInt(initialProgressText.replace('%', '')) : 0;
    const checkbox = page.locator('.subtopic-list input[type="checkbox"]').first();
    if (!(await checkbox.isChecked())) {
      await checkbox.click();
    }
    await page.goto('/');
    const newProgressText = await page.locator('.overall-pct').textContent();
    const newProgress = newProgressText ? parseInt(newProgressText.replace('%', '')) : 0;
    expect(newProgress).toBeGreaterThanOrEqual(initialProgress);
  });

  test('should show progress bars on dashboard', async ({ page }) => {
    await expect(page.locator('.topic-progress-bar').first()).toBeVisible();
  });
});
