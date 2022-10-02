class InsuranceQuotePage {
	enterUrl() {
		cy.visit("http://sampleapp.tricentis.com/101/app.php");
	}
	
	enterVehicleData(vehicle) {
	//	let objectKeys = Object.keys(vehicle);
	//	let element;
	//	objectKeys.forEach((key) => {
	//		element = cy.get('#' + key);
	//		if ((element.invoke('prop', 'nodeName'( == "INPUT") && (element.invoke('attr', 'type') == "text")) {
	//			cy.get('#' + key).type(vehicle[key]);
	//		}
	//	});
		cy.get('#make').select(vehicle.make);
		cy.get('#model').select(vehicle.model);
		cy.get('#cylindercapacity').type(vehicle.cylindercapacity);
		cy.get('#engineperformance').type(vehicle.engineperformance);
		cy.get('#dateofmanufacture').type(vehicle.dateofmanufacture);
		cy.get('#numberofseats').select(vehicle.numberofseats);
		cy.get('#righthanddriveno').next().click();
		cy.get('#numberofseatsmotorcycle').select(vehicle.numberofseats);
		cy.get('#fuel').select(vehicle.fuel);
		cy.get('#payload').type(vehicle.payload);
		cy.get('#totalweight').type(vehicle.totalweight);
		cy.get('#listprice').type(vehicle.listprice);
		cy.get('#licenseplatenumber').type(vehicle.licenseplatenumber);
		cy.get('#annualmileage').type(vehicle.annualmileage);
		return this;
	}

	enterInsurantData(insurant) {
		cy.get('#firstname').type(insurant.firstname);
		cy.get('#lastname').type(insurant.lastname);
		cy.get('#birthdate').type(insurant.birthdate);
		cy.get('#streetaddress').type(insurant.streetaddress);
		cy.get('#country').select(insurant.country);
		cy.get('#zipcode').type(insurant.zipcode);
		cy.get('#city').type(insurant.city);
		cy.get('#occupation').select(insurant.occupation);
		cy.get('#speeding').next().click();
		cy.get('#website').type(insurant.website);
	}

	enterProductData(product) {
		cy.get('#startdate').type(product.startdate);
		cy.get('#insurancesum').select(product.insurancesum);
		cy.get('#meritrating').select(product.meritrating);
		cy.get('#damageinsurance').select(product.damageinsurance);
		cy.get('#EuroProtection').next().click();
		cy.get('#courtesycar').select(product.courtesycar);
	}
	
	selectPriceOption() {
		cy.get('#selectsilver').next().click();
	}
	
	enterEmailFormData(account) {
		cy.get('#email').type(account.email);
		cy.get('#phone').type(account.phone);
		cy.get('#username').type(account.username);
		cy.get('#password').type(account.password);
		cy.get('#confirmpassword').type(account.confirmpassword);
		cy.get('#Comments').type(account.Comments);
	}
	
	checkVehicleData(vehicle) {
	}
	
	clickNext(screen) {
		cy.log(screen);
		cy.get('.next').eq(screen).click();
	}
	
	sendEmail() {
		cy.get('#sendemail').click();
	}
	
	verifySuccessMessage() {
		return cy.get('h2').contains('Sending e-mail success!').should('be.visible', {timeout: 10000});
	}
}
const insuranceQuote = new InsuranceQuotePage();
export default insuranceQuote;
