describe ('Login case', function(){
    it('Visits a rollkall site', function(){
        cy.visit('https://rollkallportal-qa.azurewebsites.net/')
    })

    it('Type user credentials', function(){
        cy.get('[type="email"]').first().focus().type('zuriel+agency@rollkall.com')
        cy.get('[type="password"]').first().focus().type('test123')
        cy.contains('Log In').click()
    })

    it('Submit form', function(){
        cy.contains('Log In').click()
    })

    
    it('Load jobs page', function(){
        cy.contains('Log In').click()
    })
})