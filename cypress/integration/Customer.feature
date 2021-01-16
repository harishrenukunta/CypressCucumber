Feature: Crud operations on Customer

Scenario: Add customer
    Given the user navigates to website
    And logs in as "Bank Manager"
    When add a customer with details 
    |firstname|lastname|postcode|
    |Radhika|Renukunta|RG2 6AG|
    Then verify customer is successfully created
    When navigate to Open Account page
    Then verify newly created customer 'Radhika Renukunta' is available
