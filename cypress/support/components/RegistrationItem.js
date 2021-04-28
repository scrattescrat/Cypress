class RegistrationItem {

    registerEmail(email) {
        cy.get('#email_create')
            .type(email)
        cy.get('#SubmitCreate > span')
            .click()
    }
}

export const registrationItem = new RegistrationItem()