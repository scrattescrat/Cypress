import {header, Header} from "../components/Header"

class AccountPage{

    getHeader(){
        return header
    }

    getInfoMessage(){
       return cy.get('.info-account')
    }
}

export const accountPage = new AccountPage()