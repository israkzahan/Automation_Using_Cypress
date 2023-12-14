describe('handle dropdowns', ()=>{

    it.skip('Dropdown with select',()=>{
      cy.visit("https://www.zoho.com/commerce/free-demo.html") 
      cy.get('#zcf_reported_by').type('Israk')
      cy.get('#zcf_email').type('israkzahan21@gmail.com')
      cy.get('#zcf_phone').type('01753443558')
      cy.get('#zcf_address_country').select('Italy')
      .should('have.value','Italy')
      cy.get('#zcf_users').select('No, but I currently sell offline')
      .should('have.value','No, but I currently sell offline')
      cy.get('#zcf_description').type('Nothing')
    })
    it('DropdownPractise2',()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Italy').type('{enter}')
    })

    it.only('DropdownPractice3',()=>{
      cy.visit('https://www.google.com/')
      cy.get('#APjFqb').type('Cypress Automation').click()
      cy.wait(3000)
      cy.get('div.wM6W7d>span').should("have.length", 12)

      cy.get('div.wM6W7d>span').each(($el,index,$list)=>{
        if($el.text()=='cypress automation tutorial'){
          cy.wrap($el).click()
        }
      })
      cy.get('#APjFqb').should('have.value','cypress automation tutorial')

    })

})