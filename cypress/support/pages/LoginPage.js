import { header } from "../components/Header"
import {loginItem} from "../components/LoginItem"
import { registrationItem } from "../components/RegistrationItem"

class LoginPage{

    getHeader() {
        return header
    }

    getLoginItem() {
        return loginItem
    }

    getRegistrationItem() {
        return registrationItem
    }
    
    getErrorMessage() {
        return cy.get('ol > li')
    }
}

export const loginPage = new LoginPage()