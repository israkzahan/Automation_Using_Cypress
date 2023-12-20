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
    doLogin(email, password){
        this.clickOnSignInButton();
        this.setEmail(email);
        this.setPassword(password);
        this.clickLogin();
    }
    //another way to login
    loginEasy(email,password){
        cy.get('#email').type(email)
        cy.get('#phone').type(password)
        cy.get('.submit').click();
    }
    //API
    getTokenByLogin(){

        return cy.request({
            method:"POST",
            url: "https://api.agilealm.cloud/api/user/login",
            body:{
                "email":"israkzahan21@gmail.com",
                "password" : "Mo90807060."
            }
            }).then(res =>{
                // console.log(res)
                return res.body
        })
    }
    
}
export default Login;