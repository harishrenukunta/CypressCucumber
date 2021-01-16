import { BANK_MANAGER, CUSTOMER } from './Constants';
class HomePage {
	loginAs(loginPerson) {
		if (loginPerson === BANK_MANAGER) {
			cy.get('button').contains(BANK_MANAGER).as('loginPerson');
		} else if (loginPerson === CUSTOMER) {
			cy.get('button').contains(CUSTOMER).as('loginPerson');
		}
		cy.get('@loginPerson').click();
	}

	addCustomer = (customerDetails) => {
		const { firstname, lastname, postcode } = customerDetails;
		cy.get('input[ng-model=fName').should('be.enabled').type(firstname);
		cy.get('input[ng-model=lName').should('be.enabled').type(lastname);
		cy.get('input[ng-model=postCd').should('be.enabled').type(postcode);
		cy.get('button[type=submit]').contains('Add Customer').click();
	};

	gotoAddCustomer = () => {
		cy.get('button[ng-class=btnClass1]').click();
	};

	gotoOpenAccount() {
		cy.get('button[ng-class=btnClass2]').click();
	}
}

export default HomePage;
