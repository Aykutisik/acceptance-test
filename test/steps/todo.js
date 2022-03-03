const { When, Then, Given, Before } = require("cucumber");
var chai = require('chai')
const webdriver = require('selenium-webdriver');

initDriver = () => {
    driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();
    return driver;
}

   Before(function() {
        driver = initDriver()
    })

Given('Empty ToDo list', async function() {

    await driver.get('http://192.168.1.101:8080/')
  
    await expect(driver.element.all(by.xpath("//*[@class='background-todoElement']")).isPresent()).toBe(false);
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