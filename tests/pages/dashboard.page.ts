import type { Page, Locator } from '@playwright/test';
import { routes } from '../shared/routes';

export class DashboardPage {
  readonly page: Page;
  readonly topicCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.topicCards = page.locator('article.topic-card');
  }

  async goto() {
    await this.page.goto(routes.dashboard);
  }

  topicCard(title: string | RegExp) {
    return this.page.locator('article.topic-card', { hasText: title });
  }

  async navigateToTopic(title: string | RegExp) {
    await this.topicCard(title).getByRole('link').click();
  }

  async hasTopicTitle(title: string) {
    return this.page.getByRole('heading', { name: title, exact: true });
  }

  async getProgressIndicator() {
    return this.page.locator('.overall-pct');
  }
}
