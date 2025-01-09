Feature: Persists Vote Tracking Data
  In would like to persistly track totals between refreshes
  As a user
  So I can keep track of aggregate number of the aggregate number of votes

  Background: User has totals to save
    Given I am on the home page
    And user has made a few clicks

  Scenario: Totals should be present after refreshes
    When the page is refreshed
    And the user has clicked 25 times
    And the user clicks "View Results"
    Then the user should see persisted chart data
