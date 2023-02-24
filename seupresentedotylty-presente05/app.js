const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });

  await page.goto("https://www.seupresentedotylty.com/presente05/");

  await page.click("#startButton");
  await new Promise((r) => setTimeout(r, 8000));

  await page.click("#startButtonAgain");
  await new Promise((r) => setTimeout(r, 8000));


  // type fullname
  const fullname = "#fullname";
  await page.type(fullname, "Jobson teste");

  // type email
  const email = "#email";
  await page.type(email, "jobsonbritsao10@gmail.com");

  // type phone
  const phone = "#phone";
  await page.type(phone, "jobsonbritsao10@gmail.com");

  // submit form
  const submitBtn = "#_form_16_submit";
  await page.click(submitBtn);

  await new Promise((r) => setTimeout(r, 4000));
  await console.log(page.url());
  await new Promise((r) => setTimeout(r, 7000));
  await console.log(page.url());

  await browser.close();
})();
