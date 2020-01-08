/// <reference types ="cypress" />

describe ('Create officers groups', function(){

    const todaysDate = Cypress.moment().format('MMDDhmmss')
    const groupName = 'QAGroup' + todaysDate

    beforeEach(() =>{

        cy.visit('https://rollkallportal-qa.azurewebsites.net/')
        cy.verifySession()
        cy.login('agency','zuriel+agency@rollkall.com','test123')
    })

    it('Create a group', function(){

        cy.get('.navbar-default .navbar-nav>li').contains('Groups').click()

        cy.url().should('include','/groups/list')

        cy.get('input[name="search-field"]').click().type('A {enter}')

        cy.wait(5000)

        cy.get('.table-v2>.table-responsive .table tbody tr')
        .its('length').then(numRows => {
            let num = Math.floor(Math.random() * numRows)
            cy.get('.table-v2>.table-responsive .table tbody tr')
            .eq(num)
            .find('button')
            .click()
        })

      if  (cy.get('.btn-primary').contains('+ New Group').should('be.visible') ){

        cy.get('.btn-primary').contains('+ New Group').click()
        cy.get('input[name="add_group_modal_form_name"]').click().type(groupName)
        cy.get('.btn-primary').contains('Save').click()
        cy.get('.form-group').should('be.contain',groupName)
      }
        
    })


})