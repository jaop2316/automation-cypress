describe ('Create a job', function(){

    it('Visits Agency site', function(){
        cy.visit('https://rollkallportal-qa.azurewebsites.net/')
    })

    it('Type user credentials', function(){
        cy.get('[type="email"]').first().focus().type('zuriel+agency@rollkall.com')
        cy.get('[type="password"]').first().focus().type('test123')
    })

    it('Submit form', function(){
        cy.contains('Log In').click()
        cy.get('.toast-error').should('be.hidden')  
    })

    it('Load jobs page', function(){
        cy.wait(500)
        cy.get('.toast-top-right').should('be.empty')
        cy.get('.container').contains('Jobs')
    })


    it('Click on +job button', function(){
        cy.get('.btn').contains('+ New Job').click()
    })

})