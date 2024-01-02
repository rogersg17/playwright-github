import { test, expect } from '@playwright/test';

test.describe('Playwright example', () => {

test.beforeEach(async ({ page }) => {
  await page.goto('https://playwright.dev/');
});

test('title', async ({ page }) => {
  await expect(page).toHaveTitle(/Playright/);
});

test('get started link', async ({ page }) => {

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

  // Expects page to have a link with the name Installing Playwright.
  await expect(page.getByRole('heading', { name: 'Installing Playwright' })).toBeVisible();
});
});

