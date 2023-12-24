import OrangeLogin from "../../OrangeHRM_Login_POM/LoginPage"


describe('PrangeHRM Login using POM',() =>{
    const loginHRM= new OrangeLogin();
    it('LoginTest', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
        loginHRM.setUserName("Admin")
        loginHRM.setPassword("admin123")
        loginHRM.clickLoginButton()
        loginHRM.verifyLogin()
        loginHRM.clickAdmin()

    })
})