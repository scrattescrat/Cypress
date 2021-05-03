class Header {

    navigateToLoginPage() {
        cy.contains('Sign in')
            .click()
    }

    typeToSearchField(item) {
        cy.get('#search_query_top')
            .type(item + '{enter}')           
    }
}

export const header = new Header()