describe('Locator wit path', ()=>{
    it("Find the total list of the menus",()=>{
        cy.visit("http://96.85.103.133:4001/");
        cy.xpath("//div[@class='pages_list']/li").should("have.length", 5);
        cy.log("The total menus length are five")
    })
})