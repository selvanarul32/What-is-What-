// import { test,expect } from '@playwright/test'; //test is a variable created

// //test.only
// //test.skip
// test('Launching the url', async ({ page }) => {
//     await page.goto('https://www.amazon.in');

//     // await page.waitForTimeout(4000); //4000 mili seconds
//     // console.log(await page.title()); //to validate and switch
//     // console.log(await page.url()); // to check and verify

//     // const pageTitle = await page.title()
//     // const pageUrl = await page.url()

//     // console.log(`the title is ${pageTitle}
//     //     the url is : ${pageUrl}`);
//     await page.goto("https://www.flipkart.com");
//     await page.goback();
//     await page.goForward();
//     await page.reload();
//     // to save in local or in a particular path folder/file.png
//     await page.screenshot({path:'file.png'}); //have to give path to save the screenshot file name should end with .png
// await expect.soft(page).toHaveTitle(/flipkart/);//Soft
// await expect(url).toHaveUrl(); //Hard
// });

// test('Playwright common locators & inbuilt locators', async ({page})=>{
//  await page.goto("https//www.amazon.com");
//  await page.locator("input#twotabsearchtextbox").fill("Mobiles");
//  //Xpath
//  //contains() - 
//  //            span[contains(text(),"results for"]
//  // Relation between tags
//  //Parent 
//  //child


//  await page.locator('(//[})[]').click()
//  await page.waitForTimeout(4000)
// }

// //css selector
// //basic - tagname[att='value'] or [att="value"]
// // contains - tagname [att*='value'] or [att*="value"]

// test('dropdown handling',async({page}) =>{
//     await page.goto()
//     await page.selectOption('#dropdown',{value:"1"});
//     await page.waitForTimeout(3000);

    
// })
