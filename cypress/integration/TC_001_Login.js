describe ('Login case', function(){
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
        // Log out 
        cy.wait(3000)
        cy.get('.navbar .dropdown.user-options').click()
        cy
        .get('.dropdown-menu >li')
        .each(($el,index,$list) =>{
             
            if($el.text() == 'Logout'){
                cy.get($el).click()
            }
        })
    })
})