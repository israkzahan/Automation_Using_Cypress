class Login{
    clickOnSignInButton(){
        cy.get("#__next > div > div.home > div.header > div > nav > ul > div > li:nth-child(1)").click();
    }
    setEmail(){
        cy.get('#email').type("seots4u@gmail.com")
    }
    setPassword(password){
        cy.get('#phone').type(password)
    }
    clickLogin(){
        cy.get('.submit').click();
    }
}
export default Login;