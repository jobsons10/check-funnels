const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  console.log("1");
  const page = await browser.newPage();
  console.log("2");
  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1,
  });
  
  await page.goto("http://presentedocacique.com/aviator");
  await page.click("#button");
  await new Promise(r => setTimeout(r, 16000));

  // type fullname
  const fullname = '#fullname';
  await page.waitForSelector(fullname);
  await page.type(fullname, 'Jobson teste');

  // type email
  const email = '#email';
  await page.waitForSelector(email);
  await page.type(email, 'jobsonbritsao10@gmail.com');

  // type phone
  const phone = '#phone';
  await page.waitForSelector(phone);
  await page.type(phone, 'jobsonbritsao10@gmail.com');

  // submit form
  const submitBtn = '#_form_14_submit';
  await page.waitForSelector(submitBtn);
  await page.click(submitBtn)

  await new Promise(r => setTimeout(r, 4000));
  await console.log(page.url());
  await new Promise(r => setTimeout(r, 7000));
  await console.log(page.url());

  // other actions...
  await browser.close();
})();
