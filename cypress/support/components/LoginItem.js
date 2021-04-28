class LoginItem {

    login(email, password) {
        cy.get("#email")
        .type(email)

        cy.get("#passwd")
        .type(password)

        cy.get("#SubmitLogin > span")
        .click()
    }
}

export const loginItem = new LoginItem()