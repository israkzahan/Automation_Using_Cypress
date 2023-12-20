import Login from "../../pages_POM/Login"

describe("Login API",()=>{
    beforeEach(()=>{
        cy.visit("/")
    })
    const login = new Login();

    it("Get token by login",() =>{
        //login.getTokenByLogin();
        const token = login.getTokenByLogin();
        token.then
        ((body) => {
            const newToken= body.token;
            console.log('newToken',newToken);
        })
    })
})