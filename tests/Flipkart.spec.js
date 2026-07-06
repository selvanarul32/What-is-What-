// import {test} from '@playwright/test';
// test ('Flipkart login test',async({page}) =>{
// await page.goto('https://www.flipkart.com/');
// await page.locator('//a[@title="Login"]').hover();
// await page.locator('//div[@class="StwjOv"]//descendant::form[@auto       complete="on"]//descendant::input[@type="text"]').fill('9884830557');
// await page.waitForTimeout(10000)
// }
// )
import { test } from '@playwright/test';

test('Flipkart login test', async ({ page }) => {

    await page.goto('https://www.flipkart.com/');
    await page.locator('//a[@title="Login"]').hover();
    await page.locator('//input[@type="text"]').fill(9940389422);
    await page.waitForTimeout(10000);

});