describe('After watching the workshop video',()=>{
    it("csslocators",() => {
        cy.visit("http://96.85.103.133:4001/")
        cy.get('.header_info > :nth-child(2) > .far').click()
        cy.get('#normal_login_email').type("israkzahan212@gmail.com")
        cy.get('#normal_login_password').type("123456")
        cy.get(':nth-child(3) > .primary_btn').click()
        cy.get('.search_wrapper > input').click()
        cy.get('.search_wrapper > input').type("Headphone")
        cy.get('.search_wrapper > .fas').click()
        cy.get(':nth-child(1) > .product_image > a > [style="display: inline-block; max-width: 100%; overflow: hidden; position: relative; box-sizing: border-box; margin: 0px;"] > [alt="Product"]').click();
        cy.get('.product_name').contains("HeadPhone")
        cy.get('.product_name').contains("HeadPhone").click();
        cy.get('.product_name').should('have.text', 'HeadPhone')
        cy.get('.add_to_wish').click()
        cy.get('.d-flex > .primary_btn').click()
        cy.get('.address-megabox > input').click()
        //checking visibility of the radio button
        cy.get('.address-megabox > input').should('be.visible')

        cy.get('.justify-content-between > .primary_btn').click()
        //for selecting the radio button we can use another way
        //cy.get('.address-megabox > input').check().should('be.checked')
        //cy.get('.address-megabox > input').check().should('not.be.checked')
        cy.get(':nth-child(1) > .ant-radio > .ant-radio-input').click()
        cy.get('.d-flex > .primary_btn').click();
        
    })
})