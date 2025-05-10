Feature: CRUD operation on Petstore

    Scenario: Verify new pet is created
        When User create a new pet with name "Panda"
        When User retrieve a new pet cerated

    Scenario: Verify pet status is updated tp sold
        When User create a new pet with name "Zebra"
        When User retrieve a new pet cerated
        When User updates the pet status to "Sold"

    Scenario: Verify pet with name is deleted
        When User create a new pet with name "Racoon"
        When User retrieve a new pet cerated
        When User updates the pet status to "Sold"
