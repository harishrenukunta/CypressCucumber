Feature:Bank manager login feature

Scenario: Bank manager login
Given the user navigates to website
And logs in as "Bank Manager"
Then validate page title

Scenario: Customer login
Given the user navigates to website
And logs in as "Customer"
Then validate page title