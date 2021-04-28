import { header } from "../components/Header"

class RegistrationPage {

    getHeader(){
        return header
    }


    typeFirstname(firstname) {
        cy.get('#customer_firstname')
            .type(firstname, {force: true})
    }

    typeLastname(lastname) {
        cy.get('#customer_lastname')
            .type(lastname)
    }

    typePassword(password) {
        cy.get('#passwd')
        .type(password)
    }

        typeAddress(address) {
            cy.get('#address1')
                .type(address)
        }

        typeCity(city) {
            cy.get('#city')
                .type(city)
        }

        selectCountry(country) {
            cy.get('#id_country')
            .select(country)
        }

        selectState(state) {
            cy.get('#id_state')
            .select(state)
        }

         typePostcode(postcode) {
             cy.get('#postcode')
                .type(postcode)
         }

         typePhoneNumber(phoneNumber){
             cy.get('#phone_mobile')
                .type(phoneNumber)
         }

         typeAlias(address) {
             cy.get('#alias')
                .clear()
                .type(address)
         }

         clickRegisterButton() {
             cy.contains('Register').click()
         }
}

export const registrationPage = new RegistrationPage()