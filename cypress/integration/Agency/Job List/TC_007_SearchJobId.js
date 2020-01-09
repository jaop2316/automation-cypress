/// <reference types ="cypress" />

describe ('Search Job Id', function(){

    beforeEach(() =>{
        cy.visit('https://rollkallportal-qa.azurewebsites.net/')
        cy.verifySession()
        cy.login('agency','zuriel+agency@rollkall.com','test123')
    })

    afterEach(function() {
        cy.logout()
      });

    it('Search an existent job', function(){
        cy.get('.page-header-action-grid a').contains('Upcoming').click()
        cy.wait(3000)
        cy.get('.table-v2>.table-responsive .table tbody tr td a').first()
        .invoke('text')
       .then(firstJobId => 
        cy.get('input[name="search-field"]').type(firstJobId).type('{enter}').url().should('include','/jobs/'+ firstJobId)
        );
       
    })

    it('Search a non existent job', function(){
        cy.get('input[name="search-field"]').type('12345').type('{enter}')
        cy.wait(5000)
        cy.get('.toast-error').should('have.length',1).and('contain.text','Job Event with id 12345 was not found.')
        
    })


})