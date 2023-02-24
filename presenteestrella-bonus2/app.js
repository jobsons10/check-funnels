const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1, 
  });
  
  await page.goto("https://www.presentedocacique.com/bonus2/");

  // click first button
  await page.click("#spin-bonus2");
  await new Promise(r => setTimeout(r, 8000));

  // click second button
  const takeBonus2 = '#take-bonus2';
  await page.waitForSelector(takeBonus2);
  await page.click(takeBonus2)

  await new Promise(r => setTimeout(r, 7000));

  // retornar url
  await console.log(page.url());

  // other actions...
  await browser.close();
})();
