

describe('My first Test',()=>{
    it('Test1_Verify_Title_Positive',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM')
        
    })
    it('Test2_Verify_Title_Nagetive',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM1122')
    })


})


// describe('My first Test', function(){
//     it('Does not do much',function(){
//         expect(true).to.equal(true)
//     })
// })