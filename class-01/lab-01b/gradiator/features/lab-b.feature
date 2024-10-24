Feature: receive user input through prompts
  In order to answer questions
  As a user
  I need to input answers into 4 prompts

  Background:
    Given I am on the home page

  Scenario: Question Prompts
    When I confirm the prompts
    Then I see popups that confirm my responses