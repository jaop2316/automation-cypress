/// <reference types ="cypress" />


describe ('Generate a report', function(){
    
  beforeEach(() =>{
    cy.visit('https://rollkallportal-qa.azurewebsites.net/')
    cy.verifySession()
    cy.login('agency','zuriel+agency@rollkall.com','test123')
})

//afterEach(function() {
  //  cy.logout()
  //});


      it('Generate the officer overview report', function(){

        cy.get('.navbar-default .navbar-nav>li').contains('Reports').click()

        cy.select('.form-group','Report Type','Officer Overview')

        cy.get('input[id="officerId_search"]').click()

        cy.get('.modal-header').should('be.contain','Search Officer')

        cy.get('.search-contact-modal .search-area .search-field input').type('Zuriel {enter}')

        cy.get('.search-contact-modal .result-area .contact .button-container').first().click()

        cy.get('.btn-primary').contains('Generate Report').click()

        })


      })