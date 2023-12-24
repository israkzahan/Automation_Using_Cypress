class OrangeLogin{
    setUserName(userName){
        cy.get("input[placeholder='Username']").type(userName)
    }
    setPassword(password){
        cy.get("input[placeholder='Password']").type(password)
    }
    clickLoginButton(){
        cy.get("button[type='submit']").click()
    }
    verifyLogin(){
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text','Dashboard');
    }
    clickAdmin(){
        cy.get("#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(4)").click()
    }

}
export default OrangeLogin;