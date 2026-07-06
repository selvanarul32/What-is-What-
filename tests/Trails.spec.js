import {chromium, expect, test, webkit} from "@playwright/test";

// //Basic
// // test('This is playwright',async({page})=>{
// //     await page.goto ("https://www.astonmartin.com/en");
// //     await page.waitForTimeout(5000);
// // })

// // To Print Page Title and Url.
// test("This is Aston martin Page", async({page})=> {
//     await page.goto ("https://www.astonmartin.com/en");
//     await page.waitForTimeout(4000);
//     const pageTitle = await page.title();
//     const pageUrl =await page.url();

//     console.log(`The title is ${pageTitle}
// The Url is : ${pageUrl}`)
// });

// // goback, goforward, refresh.
// test("This is test",async({page})=>{
//     await page.goto("https://www.bugatti.com/")
//     await page.waitForTimeout(4000);

//     const pageTitle = await page.title();
//     const pageUrl = await page.url();

//     await page.goto("https://www.koenigsegg.com/home");
//     await page.waitForTimeout(7000)
//     await page.goBack();
//     await page.goForward();
//     await page.reload();
//     const PageTitle1=await page.title();
//     const pageUrl1=await page.title();
// });
// //Screenshot

// test("This is screenshot",async({page})=>{
//     await page.goto("https://www.brabus.com/en-int")''
//     await page.screenshot({path:'File.png'});
//  } );

//Expected Title

test("This is Checking",async({page})=>{
    await page.goto("https://www.kunmotorrad.in/");
    await page.waitForTimeout(4000);
    const expectedtitle ="BMW Bike Showroom in Chennai and Tamil Nadu - BMW KUN Motorrad";
    await expect(page).toHaveTitle(expectedtitle);
});

//New page

test("Browser Testing",async({page})=>{
    const browser = await webkit.launch();
    // const context= await browser.newContext();
    // const page =await context.newPage();
    await page.goto("https://www.ford.com/cars/mustang/?srsltid=AfmBOoq5g-xvwoIXygTB5XjNLFkVUdYpv_QojrwbyKTyEpNRbK_S0QEk")

});