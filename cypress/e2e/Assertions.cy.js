// const{describe}=require("mocha");

describe("Assertions demo",()=>{

    it("Implecit assertions",()=>{
        cy.visit("https://automationexercise.com/")
        //implesit assertion should  and
        cy.url().should('include','automationexercis')
        cy.url().should('eq','https://automationexercise.com/')
        .should('contain','automationexercis')
        .should('not.contain','automationWebsite')
        
        // cy.url().and('include','automationexercis')
        // .and('eq','https://automationexercise.com/')
        // .and('contain','automationexercis')
        //Validation
        cy.get("div[class='item active'] h1:nth-child(1)").contains("AutomationExercise")
        cy.title().should('include','Automation Exercise')
        cy.get('a > img').should('be.visible')
        .and('exist')


    })
})