const robot = require('robotremote');

const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const fs = require('fs');

var lib = module.exports; 

fillForm = async () =>{
    let driver = await new Builder()
    .forBrowser("chrome")
    // .setChromeOptions(new chrome.Options().addArguments('--headless'))
    .build();

  try {
    await driver.get('https://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('iocl price', Key.RETURN);
    await driver.wait(until.titleIs('iocl price - Google Search'), 10000);
    var price = await driver.findElement(By.xpath('//*[@id="knowledge-finance-wholepage__entity-summary"]/div[3]/g-card-section/div/g-card-section/div[2]/div[1]/span[1]/span/span[1]')).getText();

    console.log(price);
    // Take a screenshot and save it
    const screenshot = await driver.takeScreenshot();
    fs.writeFileSync('screenshot.png', screenshot, 'base64');
  } finally {

    await driver.quit();
    price = parseFloat(price);
    console.log(price);
    return price;

  }
}

lib.getDetails = async()=>{
  fillForm().then(res=>res).catch(e=>console.log(e));
}

if (!module.parent) {
    const server = new robot.Server([lib], { host: 'localhost', port: 8270 });
}