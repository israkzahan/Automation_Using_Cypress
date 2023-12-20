

describe("Alert",()=>{

    it("Alert ",()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click();
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert');
        })
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })
    it("Alert confirm alert-OK", ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(2) > button').click();
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');
        })
        cy.get('#result').should('have.text','You clicked: Ok')
    })

//cypress closes alert window using cancel button

    it("Alert confirm alert-Cancel", ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(2) > button').click();

        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');
        })

        cy.on('window:confirm',()=>false); //cypress closes alert window using cancel button

        cy.get('#result').should('have.text','You clicked: Cancel')
    })

    it("Alert prompt", ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win)=>{
           cy.stub(win,'prompt').returns('No');
        })

        cy.get("button[onclick='jsPrompt()']").click();

        cy.get('#result').should('have.text','You entered: No')
    })
})