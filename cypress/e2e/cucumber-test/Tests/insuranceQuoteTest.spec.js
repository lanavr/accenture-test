import insuranceQuote from '../Pages/insuranceQuotePage';
const { Given, When, Then, Before } = require ('@badeball/cypress-cucumber-preprocessor');

Given('Customer filled in all required vehicle details', function (dataTable) {
	insuranceQuote.enterUrl();
	dataTable.transpose().hashes().map((vehicle) => {
		insuranceQuote.enterVehicleData(vehicle);
	});
	this.screen = '0';
});

When('Customer clicks next', function() {
	insuranceQuote.clickNext(this.screen);
	this.screen++;
});


Given("Customer filled in all insurant data", function (dataTable) {
	dataTable.transpose().hashes().map((insurant) => {
		insuranceQuote.enterInsurantData(insurant);
	});
});

Given("Customer filled in all product data", function (dataTable) {
	dataTable.transpose().hashes().map((product) => {
		insuranceQuote.enterProductData(product);
	});
});

Given("Customer chose a price option", function () {
	insuranceQuote.selectPriceOption();
});

Given("Customer filled in email form", function (dataTable) {
	dataTable.transpose().hashes().map((account) => {
		insuranceQuote.enterEmailFormData(account);
	});
});

When('Customer clicks send', function() {
	insuranceQuote.sendEmail();
	this.screen++;
});

Then('Success message is displayed', function() {
	insuranceQuote.verifySuccessMessage();
});
