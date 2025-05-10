import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'

const newPet = {
    id: 10,
    name: "",
    status: "available",
    updatedStatus: "sold",
  };

When("User create a new pet with name {string}", (petNameFromStep) => {
    newPet.name = petNameFromStep
    const createNewPet = {
        "id": newPet.id,
        "category": {
            "id": 0,
            "name": "string"
        },
        "name": newPet.name,
        "photoUrls": [
            "string"
        ],
        "tags": [
            {
                "id": 0,
                "name": "string"
            }
        ],
        "status": "available"
    }
    cy.request("POST", `/pet`, createNewPet).then((response) => {
        cy.log(response.body)
        expect(response.status).to.equal(200);
        // Check that specific properties match
        expect(response.body.id).to.equal(createNewPet.id);
        expect(response.body.name).to.equal(createNewPet.name);
        expect(response.body.status).to.equal(createNewPet.status);
    });
});


When("User retrieve a new pet cerated", () => {
    cy.request("GET", `/pet/${newPet.id}`).then((response) => {
        cy.log(response.body)
        expect(response.status).to.equal(200);
        expect(response.body.id).to.equal(newPet.id);
    });
});

When("User updates the pet status to {string}", (status) => {
    newPet.updatedStatus = status
    cy.request("POST", `/pet`, {
        petId: newPet.id,
        status: newPet.updatedStatus,
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal(newPet.updatedStatus);
    });
});

When("User delete a pet by name", (petName) => {
    newPet.name = petName
    cy.request("DELETE", `/pet/${newPet.name}`).then((response) => {
        expect(response.status).to.equal(200);
    });
});

When("User verifies pet deleted successfully", () => {
    //check that the deleted record no longer exists
    cy.request({ url: `/pet/${newPet.id}`, failOnStatusCode: false }).then(
        (response) => {
            expect(response.status).to.equal(404);
        }
    );
});