const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function runTest() {
  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().headless())
    .build();

  await driver.get('http://example.com'); // your target
  // add your test logic
  await driver.quit();
})();
