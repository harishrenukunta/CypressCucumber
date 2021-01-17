import HomePage from '../pageObjects/HomePage';
import { BANK_MANAGER, CUSTOMER } from '../pageObjects/Constants';
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const homePage = new HomePage();

And(/^logs in as "(.*)"$/, function (loginAs) {
	//cy.get('button').contains('Bank Manager Login').click();
	const loginPerson = loginAs === 'Bank Manager' ? BANK_MANAGER : CUSTOMER;
	homePage.loginAs(loginPerson);
});

Then('validate page title', () => {
	cy.title().should('eq', 'Protractor practice website - Banking App');
	cy.screenshot();
});
