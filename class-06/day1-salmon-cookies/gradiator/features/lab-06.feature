Feature: sales data
  In order to analyze sales per location
  As a prospective investor
  I need to see location data listed clearly

  Scenario: site contains seperate sales page
    When I am on the home page
    Then I can navigate to the sales page

  Scenario: check Seattle
    When I am on the sales page
    Then I see level 2 heading and correct data for Seattle

  Scenario: check Tokyo
    When I am on the sales page
    Then I see level 2 heading and correct data for Tokyo

  Scenario: check Dubai
    When I am on the sales page
    Then I see level 2 heading and correct data for Dubai

  Scenario: check Paris
    When I am on the sales page
    Then I see level 2 heading and correct data for Paris

  Scenario: check Lima
    When I am on the sales page
    Then I see level 2 heading and correct data for Lima
