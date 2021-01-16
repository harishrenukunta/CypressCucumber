import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../pageObjects/HomePage';
import OpenAccount from '../pageObjects/OpenAccount';

const homePage = new HomePage();
const openAccount = new OpenAccount();

When(/^add a customer with details$/, (datatable) => {
	homePage.gotoAddCustomer();
	datatable.hashes().forEach((element) => {
		console.log(`${element.firstname} ${element.lastname} ${element.postcode}`);
		homePage.addCustomer(element);
	});
});

Then('verify customer is successfully created', () => {
	cy.on('window:alert', (txt) => {
		expect(txt).to.match(/Customer added successfully with customer id :(\d+)/);
	});
});

When('navigate to Open Account page', () => {
	homePage.gotoOpenAccount();
});

Then(/^verify newly created customer '(.*)' is available$/, (customer) => {
	openAccount.verifyCustomer(customer);
});
