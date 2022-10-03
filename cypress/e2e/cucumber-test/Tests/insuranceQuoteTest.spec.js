import insuranceQuote from '../Pages/insuranceQuotePage';
const { Given, When, Then, Before } = require ('@badeball/cypress-cucumber-preprocessor');
Given('Customer accessed the website', function () {
  insuranceQuote.enterUrl();
  this.screen = '0';
});

Given('Customer filled in all required {word} data', function (formName, dataTable) {
  dataTable.transpose().hashes().map((data) => {
    insuranceQuote.enterData(formName, data);
  });
});

When('Customer clicks next', function() {
  insuranceQuote.clickNext(this.screen);
  this.screen++;
});

Given('Customer chose a price option', function () {
  insuranceQuote.selectPriceOption();
});

When('Customer clicks send', function() {
  insuranceQuote.sendEmail();
});

Then('Success message is displayed', function() {
  insuranceQuote.verifySuccessMessage();
});
