Feature: Vote on Products
  In order to pick a favorite
  As a customer
  I need to be able to see 3 products

  Background:
    Given I am on the home page

  Scenario: Image Display
    Then I should see 3 different products on the page
    When I click an img
    Then I should still see 3 products
