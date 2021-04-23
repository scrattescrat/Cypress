class LoginItem {

    typeEmail(){
        cy.get("#email")
        .type('newqa111@gmail.com')
    }

    typePassword(){
        cy.get("#passwd")
        .type('qwerty123')
    }

    clickSignInButton(){
        cy.get("#SubmitLogin > span")
        .click()
    }


}

export const loginItem = new LoginItem()