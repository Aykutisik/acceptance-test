const { When, Then, Given, BeforeAll, AfterAll } = require("cucumber");
const { expect, assert } = require('chai')
const { By } = require("selenium-webdriver")
const webdriver = require('selenium-webdriver');
// const { findAsync } = require('./asyncUtil');

var { setDefaultTimeout } = require('@cucumber/cucumber');

setDefaultTimeout(60 * 1000);

// initDriver = () => {

// }

BeforeAll(function() {
    driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();
    driver.get('http://localhost:8080/')

})


AfterAll(async function() {
    await setDefaultTimeout(60 * 1000);
    driver.quit();
})
Given('Empty ToDo list', async function() {

    // await driver.findElement(By.className('btn')).click();


    // driver.findElements(By.tagName('button')).click();


    // let todoItems = await driver.findElement(By.className('list-background'));

    // await expect(todoItems).to.be.not.null


    await driver.findElements(By.id("deletebtn")).then(async function(elements) {
        await elements.forEach(async function(element) {
            await element.click()
        });
    });


    //let text = driver.findElement(By.id('list-background')).getText()


    // expect(driver.find_element_by_xpath("//form[input/@name ='search']")).length(8)
    // expect(driver.findElement(By.xpath("//*[@class='background-todoElement']"))).toBe(false);
});

When('I write {string} to text box and click to add button', async function(text) {
    let addbtn = await driver.findElement(By.id('buttonAdd'));
    await driver.findElement(By.id('inputPlace')).sendKeys(text);
    addbtn.click()


});

Then('I should see {string} item in ToDo list', async function(text) {
    let textarea = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div/a")).getText();
    assert.equal(text, textarea);
});

Given('ToDo list with {string} item', async function(text) {
    let textarea = await driver.findElement(By.id('line-through-false')).getText();
    assert.equal(text, textarea);
});



Then('I should see {string} insterted to ToDo list below {string}', async function(text1, text2) {
    let textarea = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[2]/div/a")).getText();
    let textarea2 = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div/a")).getText();
    assert.equal(textarea, text1)
    assert.equal(textarea2, text2);
});



When('I click on {string} text', async function(text) {


    let tt = "//*[contains(text(), '" + text + "')]"
    let textarea2 = await driver.findElement(By.xpath(tt)).click();
    //  let textarea2 = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div/a")).click();
});

Then('I should see {string} item marked as {string}', async function(string, string2) {
    // let textarea2 = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div/a")).getAttribute("id");

    let tt = "//*[contains(text(), '" + string + "')]"
    let textarea2 = await driver.findElement(By.xpath(tt)).getAttribute("id");
    assert.equal(textarea2, "line-through-true")
});

// Given('ToDo list with marked {string} item', function(string) {

// });

// When('I click on {string} text', function(string) {

// });

// Then('I should see mark of {string} item should be cleared as {string}', function(string, string2) {

// });

// Given('ToDo list with {string} item', function(string) {

// });

// When('I click on delete button next to {string} item', function(string) {

// });


// Then('List should be empty', function() {

// });


// Given('ToDo list with {string} and {string} item in order', function(string, string2) {

// });


// When('I click on delete button next to {string} item', function(string) {

// });

// Then('I should see {string} item in ToDo list', function(string) {

// });