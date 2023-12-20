import Login from "../../pages_POM/Login";
import Organization from "../../pages_POM/Organization"

describe("Organization page",() =>{
    const org = new Organization();
    const login= new Login();

    beforeEach(()=>{
        cy.visit('')
    })
    it("Checking left sodebar menues", ()=>{
        login.clickOnSignInButton();
       login.setEmail('seots4u@gmail.com');
       login.setPassword('!KJ$ywz_J_9u42QK@');
       login.clickLogin();

        org.checkSidebarMenus();
        org.checkSidebarText();
        
    })
})

//2:18 min