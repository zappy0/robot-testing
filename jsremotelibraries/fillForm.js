const robot = require('robotremote');

const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const fs = require('fs');

var lib = module.exports;


// (async function example() {
//   let driver = await new Builder()
//     .forBrowser("chrome")
//     .setChromeOptions(new chrome.Options().addArguments('--headless'))
//     .build();

//   try {
//     await driver.get('https://www.google.com/ncr');
//     await driver.findElement(By.name('q')).sendKeys('You did it!!', Key.RETURN);
//     await driver.wait(until.titleIs('You did it!! - Google Search'), 1000);

//     // Take a screenshot and save it
//     const screenshot = await driver.takeScreenshot();
//     fs.writeFileSync('screenshot.png', screenshot, 'base64');
//   } finally {
//     await driver.quit();
//   }
// })();

lib.fillForm = async () =>{
    let driver = await new Builder()
    .forBrowser("chrome")
    // .setChromeOptions(new chrome.Options().addArguments('--headless'))
    .build();

  try {
    await driver.get('https://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('You did it!!', Key.RETURN);
    await driver.wait(until.titleIs('You did it!! - Google Search'), 1000);

    // Take a screenshot and save it
    const screenshot = await driver.takeScreenshot();
    fs.writeFileSync('screenshot.png', screenshot, 'base64');
  } finally {
    await driver.quit();
  }
}

if (!module.parent) {
    const server = new robot.Server([lib], { host: 'localhost', port: 8270 });
}