class NewsletterSignUpPage {
    elements = {
        pageHeaderTitle: () => cy.get('h2[class="fserv-form-name"]'),
        businessEmailInput: () => cy.get('[name="contact[email]"]'),
        firstNameInput: () => cy.get('[name="contact[first_name]"]').first(),
        lastNameInput: () => cy.get('[name="contact[last_name]"]'),
        signUpButton: () => cy.get('button[class="fserv-button-submit"]'),
        successMessage: () => cy.get('div.success span'),
        closeModal: () => cy.get('a[class="close"][href="#"]')
    };

    enterEmail(businessEmail) {
        this.elements.businessEmailInput().trigger('mouseover');
        this.elements.businessEmailInput().type(businessEmail);
    }

    enterFirstName(firstName) {
        this.elements.firstNameInput().type(firstName);
    }

    enterLastName(lastName) {
        this.elements.lastNameInput().type(lastName);
    }

    clickSignUpButton() {
        this.elements.signUpButton().click();
    }

    clickCloseModal() {
        this.elements.closeModal().click();
    }





}

export const newsletterSignUpPage = new NewsletterSignUpPage();