import { header } from "../components/Header"

class SearchResultPage {

    items=[]

    getHeader(){
        return header
    }

    getProductList(){
        cy.get('#center_column > ul > li')
        
    }

    validateProductName(productIndex, expectedText){
        cy.get(':nth-child(${productIndex + 1}) > .product-container')
            .should('have.text', expectedText)
        }       
    }
}

export const searchResultPage = new SearchResultPage()