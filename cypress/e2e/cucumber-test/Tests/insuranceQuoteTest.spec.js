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


//Given('Customer filled in all insurant data', function (dataTable) {
//	dataTable.transpose().hashes().map((insurant) => {
//		insuranceQuote.enterInsurantData(insurant);
//	});
//});
//
//Given('Customer filled in all product data', function (dataTable) {
//	dataTable.transpose().hashes().map((product) => {
//		insuranceQuote.enterProductData(product);
//	});
//});
//
//Given('Customer filled in email form', function (dataTable) {
//	dataTable.transpose().hashes().map((account) => {
//		insuranceQuote.enterEmailFormData(account);
//	});
//});

Given('Customer chose a price option', function () {
	insuranceQuote.selectPriceOption();
});

When('Customer clicks send', function() {
	insuranceQuote.sendEmail();
});

Then('Success message is displayed', function() {
	insuranceQuote.verifySuccessMessage();
});
