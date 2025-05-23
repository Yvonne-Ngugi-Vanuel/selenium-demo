const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function runTest() {
  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().addArguments('--headless=new'))
    .build();

  try {
    await driver.get('https://example.com');
    const title = await driver.getTitle();
    console.log('Page title is:', title);

    if (!title.includes('Example Domain')) {
      throw new Error('Title does not match!');
    }
  } finally {
    await driver.quit();
  }
})();
