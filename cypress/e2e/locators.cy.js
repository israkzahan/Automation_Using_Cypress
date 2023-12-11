
describe('After watching the workshop video',()=>{
    it("csslocators",() => {
        cy.visit("http://96.85.103.133:4001/")
        cy.get('.search_wrapper > input').type("Slim")
        cy.get('.search_wrapper > .fas').click()
        // cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(2) > div:nth-child(1) > h5:nth-child(2)").contains("Denim Slim Fit Jeans Pant for Men");
        // cy.log("Run Successfully")
        cy.get(':nth-child(1) > :nth-child(2) > .product_info > h5').click()
        cy.get('.product_name').contains("Denim Slim Fit Jeans Pant for Men")
        cy.log("Run Successfully")
    })

   it.only("Explicit assertions",()=>{
    cy.visit("http://96.85.103.133:4001/")
    cy.get('.header_info > :nth-child(2) > .far').click()
    cy.get('#normal_login_email').type("israkzahan212@gmail.com")
    cy.get('#normal_login_password').type("123456")
    cy.get(':nth-child(3) > .primary_btn').click()
    cy.get('.header_info > :nth-child(3) > .far').click()
    cy.get('.name_mobile > p').should('have.text', 'Israk')

    cy.get('.name_mobile > p') 
  .invoke('text') // Get the text content of the element
  .then((text) => {
    cy.log('Element text:', text);
  });
    


   })
})