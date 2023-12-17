import Login from "../../pages/Login"


describe("Log page",()=>{
    it("Doing user login",()=>{
       const login= new Login();
       cy.visit("")
       login.clickOnSignInButton();
       login.setEmail();
       login.setPassword('!KJ$ywz_J_9u42QK@');
       login.clickLogin();
    })

    it("Doing login with fixtures file",()=>{
        cy.visit("")
        cy.fixture("userLoginData").then(data =>{
            console.log(data,'data')
        })
    })
})

//1:26 second