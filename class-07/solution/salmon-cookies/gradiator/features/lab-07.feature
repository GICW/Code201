Feature: sales page
    In order to analyze sales per location
    As a prospective investor
    I need to see location data in tabular format

    Background:
        Given I am on the sales page

    Scenario: check Seattle
        Then I see correct data for Seattle

    Scenario: check Tokyo
        Then I see correct data for Tokyo

    Scenario: check Dubai
        Then I see correct data for Dubai

    Scenario: check Paris
        Then I see correct data for Paris

    Scenario: check Lima
        Then I see correct data for Lima

    Scenario: check totals
        Then I see correct totals for all locations
