Feature: home page
    In order to feel confident about ordering cookies
    As a customer
    I need to be presented with a home page with lots of nice images and links

    Scenario: check for salmon image
        Given I am on home page
        Then I should see salmon.png image

    Scenario: check for fish image
        Given I am on home page
        Then I should see fish.jpg image

    Scenario: check for shirt image
        Given I am on home page
        Then I should see shirt.jpg image

    Scenario: check for cutter image
        Given I am on home page
        Then I should see cutter.jpeg image

    Scenario: check for family image
        Given I am on home page
        Then I should see family.jpg image

    Scenario: check for frosted-cookie image
        Given I am on home page
        Then I should see frosted-cookie.jpg image

    Scenario: check for chinook image
        Given I am on home page
        Then I should see chinook.jpg image

    Scenario: I have link to sales page
        Given I am on home page
        Then I should see link to sales page

    Scenario: Check for locations
        Given I am on home page
        Then I should see Seattle location
