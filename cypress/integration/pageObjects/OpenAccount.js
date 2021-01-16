export default class OpenAccount {
	verifyCustomer(customer) {
		cy.get('#userSelect option')
			.contains(customer)
			.should('have.text', customer);
	}
}
