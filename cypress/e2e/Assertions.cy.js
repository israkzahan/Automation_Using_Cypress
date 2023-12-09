// const{describe}=require("mocha");

describe("Assertions demo",()=>{

    it("Implecit assertions",()=>{
        cy.visit("https://automationexercise.com/")
        //implesit assertion should  and
        cy.url().should('include','automationexercis')
        cy.url().should('eq','https://automationexercise.com/')
        cy.url().should('contain','automationexercis')

    })
})