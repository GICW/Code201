Feature: chocolate pizza layout
    In order to see a recipe
    As a user
    I need to see a nice recipe layout

    Background: recipe view
        Given I can load index.html

    Scenario: expected styles are loaded
        Then the page loads reset css and google fonts

    Scenario: view includes assets
        Then I can see the logo
        And I can see the icons
        And I can see the hero image
        And I can see the author

    Scenario: view includes instructions and bio
        Then I can see the recipe text
        And I can see the author bio
