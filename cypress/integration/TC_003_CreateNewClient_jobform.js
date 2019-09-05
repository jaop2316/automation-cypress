describe ('Reset password', function(){
    it('Visits Agency site and login', function(){
        
        // Go to agency site
        cy.visit('https://rollkallportal-qa.azurewebsites.net/')
        // Type user credentials
        cy.get('[type="email"]').first().focus().type('zuriel+agency@rollkall.com')
        cy.get('[type="password"]').first().focus().type('test123')
        // Submit form 
        cy.contains('Log In').click()
        // Load jobs page
        cy.wait(500)
        cy.get('.toast-top-right').should('be.empty')
        cy.get('.container').contains('Jobs')
    })

    it('Open the create job form and new client modal', function(){
        // Init the server
        cy.server()

        // open the create job form 
        cy.get('.btn').contains('+ New Job').click()
        // open the create new client modal
        cy
        .get('.form-group')
        .each(($el, index, $list) => {
          if ($el.find("label").text() === 'Client') {
            cy.get('.btn').contains('+ New').click()
          } 
        })


        // Type client's name 

        cy
        .get('.form-group')
        .each(($el, index, $list) => {
          if ($el.find("label").text() === 'Client Name') {
            const todaysDate = Cypress.moment().format('MMDDhmmss')
            const clientfake = 'ClientQA' + todaysDate
            cy.get('#clientName').type(clientfake)
            cy.wait(500)
          } 
        })

        // Click 'Save' button
        cy.get('.modal-footer').find('.pb-button').click()
        
    
    })
})