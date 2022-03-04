const { When, Then, Given, BeforeAll, AfterAll } = require("cucumber");
const { expect, assert } = require('chai')
const { By } = require("selenium-webdriver")
const webdriver = require('selenium-webdriver');

var { setDefaultTimeout } = require('@cucumber/cucumber');

setDefaultTimeout(60 * 1000);

BeforeAll(function () {
    driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();
    driver.get('http://localhost:8080/')
})

AfterAll(async function () {
    await setDefaultTimeout(60 * 1000);
    driver.quit();
})

Given('Empty ToDo list', async function () {
    arr = await driver.findElements(By.id("deletebtn"))
    for (let i = 0; i < arr.length; i++) {
        await driver.findElement(By.id("deletebtn")).click();
    }
    let todoItems = await driver.findElements(By.id('listelement'));
    expect(todoItems).that.is.empty;
});

When('I write {string} to text box and click to add button', async function (text) {
    let addbtn = await driver.findElement(By.id('buttonAdd'));
    await driver.findElement(By.id('inputPlace')).sendKeys(text);
    addbtn.click()
});

Then('I should see {string} item in ToDo list', async function (text) {
    let textarea = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div/a")).getText();
    assert.equal(text, textarea);
});

Given('ToDo list with {string} item', async function (text) {
    let textarea = await driver.findElement(By.id('line-through-false')).getText();
    assert.equal(text, textarea);
});

Then('I should see {string} insterted to ToDo list below {string}', async function (text1, text2) {
    let textarea = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[2]/div/a")).getText();
    let textarea2 = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div/a")).getText();
    assert.equal(textarea, text1)
    assert.equal(textarea2, text2);
});

When('I click on {string} text', async function (text) {
    let key = "//*[contains(text(), '" + text + "')]"
    let textarea2 = await driver.findElement(By.xpath(key)).click();

});

Then('I should see {string} item marked as {string}', async function (string, string2) {
    let key = "//*[contains(text(), '" + string + "')]"
    let textarea2 = await driver.findElement(By.xpath(key)).getAttribute("id");
    assert.equal(textarea2, "line-through-true")
});

Given('ToDo list with marked {string} item', async function (string) {
    let key = "//*[contains(text(), '" + string + "')]"
    let textarea2 = await driver.findElement(By.xpath(key)).getAttribute("id");
    assert.equal(textarea2, "line-through-true")
});

Then('I should see mark of {string} item should be cleared as {string}', async function (string, string2) {
    let key = "//*[contains(text(), '" + string + "')]"
    let textarea2 = await driver.findElement(By.xpath(key)).getAttribute("id");
    assert.equal(textarea2, "line-through-false")
});

Given('ToDo list with rest for a while item', async function () {
    let deletebtn = await driver.findElement(By.id('deletebtn'))
    deletebtn.click()
    deletebtn.click()
    let addbtn = await driver.findElement(By.id('buttonAdd'));
    text = "rest for a while"
    await driver.findElement(By.id('inputPlace')).sendKeys(text);
    addbtn.click()
});

When('I click on delete button next to {string} item', async function (string) {
    let deletebtn = await driver.findElement(By.id('deletebtn'))
    deletebtn.click()
});

Then('List should be empty', async function () {
    let todoItems = await driver.findElements(By.id('listelement'));
    expect(todoItems).that.is.empty;
});

Given('ToDo list with {string} and {string} item in order', async function (string, string2) {
    let addbtn = await driver.findElement(By.id('buttonAdd'));
    await driver.findElement(By.id('inputPlace')).sendKeys(string);
    addbtn.click()
});