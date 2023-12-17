describe('CSSLocators',() => {

    it("csslocators",() => {
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get("#search_query_top").type("T-Shirts")
        cy.get("[name='submit_search']").click()
        cy.get(".lighter").contains("T-Shirts") //Assertion
        cy.log("Run Successfully")

    })

    it.only("csslocators",() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
        

    })

    
})