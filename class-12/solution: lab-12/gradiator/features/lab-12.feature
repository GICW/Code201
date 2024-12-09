Feature: Display New Images
  As a maketeer
  In order to prevent users from being biased
  I need to show new Images

  Background: User on the home page
    Given I am on the home page

  Scenario: New image on click
    When I click on an image
    Then I should see 3 new products

  Scenario: A chart is rendered
    When I have clicked 25 images
    And I click "View Results"
    Then I should see a visual chart
