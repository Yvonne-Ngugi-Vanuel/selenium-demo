const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function runTest() {
  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().headless())
    .build();

  await driver.get('https://example.com'); // or localhost, etc.
  // add your test logic/assertions here
  await driver.quit();
})();
