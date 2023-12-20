import Login from "../../pages_POM/Login"



describe("Login page",()=>{

    const login= new Login();
    it("Doing user login",()=>{
       
       cy.visit("")
       login.clickOnSignInButton();
       login.setEmail();
       login.setPassword('!KJ$ywz_J_9u42QK@');
       login.clickLogin();
    })

    //login with fixture file

    it("Doing login with fixtures file",()=>{
        cy.visit("")
        cy.fixture("userLoginData").then(data =>{
            //console.log(data.email,data.password,'data')
            login.clickOnSignInButton();
            login.setEmail(data.email);
            login.setPassword(data.password);
            login.clickLogin();
        })
    })

    it.only("Doing with doLogin() method",() =>{
        cy.visit("");

        cy.fixture("userLoginData").then(data=>{
            
           login.doLogin(data.email,data.password)
            cy.log("Logged on with doLogin method")
        })
    })
    // it.only("Login easy way",()=>{
        
    //     it("Login successfully",()=>{
    //     cy.visit();
    //     Login.loginEasy('seots4u@gmail.com','!KJ$ywz_J_9u42QK@');
    //     //login.loginEasy('seots4u@gmail.com','!KJ$ywz_J_9u42QK@')
    //     })
    // })
})

//1:26 second