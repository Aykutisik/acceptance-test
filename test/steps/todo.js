const { When, Then, Given, Before, After } = require("cucumber");
const { expect } = require('chai')
const { By } = require("selenium-webdriver")
const webdriver = require('selenium-webdriver');
// const { findAsync } = require('./asyncUtil');

var { setDefaultTimeout } = require('@cucumber/cucumber');

setDefaultTimeout(60 * 1000);

// initDriver = () => {

// }

Before(function() {
    driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();
    driver.get('http://localhost:8080/')

})


After(async function() {
    await setDefaultTimeout(60 * 1000);
    driver.quit();
})
Given('Empty ToDo list', async function() {

    // await driver.findElement(By.className('btn')).click();


    // driver.findElements(By.tagName('button')).click();
    let todoItems = await driver.findElement(By.className('background-todoElement'));

    return expect(todoItems).to.be.null


    //let text = driver.findElement(By.id('list-background')).getText()


    // expect(driver.find_element_by_xpath("//form[input/@name ='search']")).length(8)
    // expect(driver.findElement(By.xpath("//*[@class='background-todoElement']"))).toBe(false);
});

When('I write {string} to text box and click to add button', function(string) {

});

Then('I should see {string} item in ToDo list', function(string) {

});

// Given('ToDo list with {string} item', function(string) {

// });

// When('I write {string} to text box and click to add button', function(string) {

// });

// Then('I should see {string} insterted to ToDo list below {string}', function(string, string2) {

// });

// Given('ToDo list with {string} item', function(string) {

// });

// When('I click on {string} text', function(string) {

// });

// Then('I should see {string} item marked as {string}', function(string, string2) {

// });

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