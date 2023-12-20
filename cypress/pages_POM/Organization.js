const organizations=[
    "TS4U Projects",
    "IT Training Aug 22",
    "SandBox For Team",
    
    

]


class Organization{
    checkSidebarMenus(){
        cy.xpath('//*[@id="__next"]/div/section/aside/div/ul/li').should("have.length", 10) 
    }
    checkSidebarText(){
        cy.get('#IT_Training_Aug_22 > .ant-menu-title-content > div').should('be.visible') 
        .should('contain','IT Training Aug 22')
       // organizations.forEach((item)=>cy.get("#IT_Training_Aug_22 > .ant-menu-title-content > div"))

       //looping the elements of the array
        organizations.forEach((item)=>cy.get(`#${item.split(" ").join("_")}> span > div`).should('be.visible').and('contain',item))
    }
    

}
export default Organization;