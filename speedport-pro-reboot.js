const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']})
  const page = await browser.newPage()

  const navigationPromise = page.waitForNavigation()

  await page.goto('http://192.168.2.1/4.0/gui/login/')

  await page.setViewport({ width: 1280, height: 800 })

  await navigationPromise

  await page.waitForSelector('.row #device-pass')
  await page.type('#device-pass', '###router-password###');

  await page.waitForSelector('.container-fixed #login-button')
  await page.click('#login-button')

  await navigationPromise

  await page.waitForSelector('ul > #navSitemap > a > .navbarImage > img')
  await page.click('ul > #navSitemap > a > .navbarImage > img')

  await page.waitForSelector('.col-l-6:nth-child(5) > .col-l-12 > .site-map > li:nth-child(4) > .ng-scope')
  await page.click('.col-l-6:nth-child(5) > .col-l-12 > .site-map > li:nth-child(4) > .ng-scope')

  await page.waitForSelector('.ng-isolate-scope > .page-section > .row:nth-child(2) > .col-l-12 > .restart')
  await page.click('.ng-isolate-scope > .page-section > .row:nth-child(2) > .col-l-12 > .restart')

  await page.waitForSelector('.row > .col-l-12 > .row > .buttongroup > .radius')
  await page.click('.row > .col-l-12 > .row > .buttongroup > .radius')

//  Create screenshot for debugging purposes
//  await page.screenshot({ path: '/app/speedport-reboot.png' });

  await browser.close()
})()
