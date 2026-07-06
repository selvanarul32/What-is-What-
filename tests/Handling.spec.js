import{test} from '@playwright/test';
test('Handling windows/tab', async ({ browser }) => {
const context = await browser.newContext();
const page=await context.newPage();
await page.goto("https://www.amazon.in/");
await page.locator('//input[@id="twotabsearchtextbox"]').fill('Laptops');
await page.locator('//input[@id="nav-search-submit-button"]').click();

const [productPage] = await Promise.all([
    context.waitForEvent('page'),
    page.locator('[aria-label="Alienware 16 Aurora Gaming Laptop, Intel Core 7 240H Processor, 16GB DDR5, 1TB SSD, RTX 5050 8GB GDDR7, 16.0&quot; 2.5k, 300 nits Display, Keyboard with 101 Key Backlight, Interstellar Indigo, 2.57kg]').first().click(),
]);

await productPage.waitForLoadState('domcontentloaded');
await productPage.locator('//div[@class="a-section ax-replace a-spacing-none"]//descendant::div[@data-csa-c-content-id="s-search-add-to-cart-action"]//descendant::div[@class="a-button-stack"]//descendant::span[@class="a-button-inner"]//descendant::button[@aria-label="Add to cart"]').nth(0).click();
await productPage.waitForTimeout(10000);
//await productPage.close()
await page.bringToFront();
await page.waitForTimeout(8000);
})