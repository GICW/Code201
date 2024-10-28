Feature: Guessing Game
  In order to play a guessing game
  As a customer
  I need to provide responses to Popups

  Background:
    Given I have loaded the page

  Scenario: User Input
    When I respond to a prompt
    Then I see my response in a popup
