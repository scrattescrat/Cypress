/// <reference types="cypress"/>

import { homePage } from "../support/pages/HomePage"
import { searchResultPage } from "../support/pages/SearchResultPage"


describe ('Search suite', () => {

    let item = 'dress'

    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php') 
})

    it('should find an item with proper name', () => {

        homePage.getHeader()
            .typeToSearchField(item)

        searchResultPage.validateProductName()



    })

})

