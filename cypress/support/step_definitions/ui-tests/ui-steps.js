import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'
import { homePage } from '../../../pages/amHomePage'
import { newsletterSignUpPage } from '../../../pages/newsLetterSignUpPage'
Cypress.on('uncaught:exception', () => { return false })

Given('User opens amphora application', () => {
    cy.viewport(1800, 1000)
    cy.visit('http://www.amphora.net/')
})

When('User clicks on {string} option from navigation menu', (navMenu) => {
    homePage.selectMenuOption(navMenu, "Symphony CTRM");
    cy.wait(2000);

})

When('User verifies menu options displayed', (table) => {
    const menuOption = [];
    table.hashes().forEach((row) => {
        cy.log(row.MenuOption);
        menuOption.push(row.MenuOption)
    });

    const list = homePage.verifySubMenuOptionsFor("Products");
    list.should('have.length', 7)
    list.should('deep.equal', menuOption);
})

Then('User selects {string} sub menu from Navigation menu {string}', (subMenu, mainMenu) => {
    homePage.selectSubMenuOption(mainMenu, subMenu)
})

When('Verify user navigated to sign-up page', () => {
    newsletterSignUpPage.elements.pageHeaderTitle().should('have.text', "Newsletter Sign Up")
})

When('User enters business email as {string}', (email) => {
    newsletterSignUpPage.enterEmail(email);
})

When('User enters first name as {string}', (firstName) => {
    newsletterSignUpPage.enterFirstName(firstName);
})

When('User enters last name as {string}', (lastName) => {
    newsletterSignUpPage.enterLastName(lastName);
})

When('User click on sign-up button', () => {
    newsletterSignUpPage.clickSignUpButton()
})

Then('Verify success message appears', () => {
    const successMessageText = 'Thank you for signing up for our newsletter. We are thrilled to have you join our community. Every quarter, you will receive exclusive content designed to keep you informed about generic topics within the CTRM industry.'
    newsletterSignUpPage.elements.successMessage().should('have.text', successMessageText)
})

