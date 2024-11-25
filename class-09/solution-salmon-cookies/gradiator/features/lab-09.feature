Feature: sales data form
    In order to update the table on the sales page
    As a user
    I would like to be able to fill out and submit a form

    Background:
        Given I am on the sales page

    Scenario: table elements are present
        Then I should see a form with a fieldset

    Scenario: user can update the sales data
        When I fill out and submit the form
        Then I should see a new store in the table

    Scenario: STRETCH GOAL: updating table
        When I fill out the form with an existing store
        Then I see the table update
