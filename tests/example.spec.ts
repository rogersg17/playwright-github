import { test, expect } from '@playwright/test';

test.describe('playwright example', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
  });

  test('check page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('getting started link', async ({ page }) => {

    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

    // Expects page to have a link with the name Installing Playwright.
    await expect(page.getByRole('heading', { name: 'Installing Playwright' })).toBeVisible();
  });

  test('community link', async ({ page }) => {
      
      // Click the community link.
      await page.getByRole('link', { name: 'Community' }).click();
  
      // Expects page to have a heading with the name of Installation.
      await expect(page.getByRole('heading', { name: 'Welcome' })).toBeVisible();
  });

  test('api link', async ({ page }) => {
        
        // Click the api link.
        await page.getByRole('link', { name: 'API',exact:true }).click();
    
        // Expects page to have a heading with the name of Installation.
        await expect(page.getByRole('heading', { name: /Playwright Library/ })).toBeVisible();
    });


});

