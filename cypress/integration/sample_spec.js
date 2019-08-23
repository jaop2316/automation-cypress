describe ('Login case', function(){
    it('Visits Agency site', function(){
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
        cy.wait(500)
        cy.get('.container').contains('Jobs')
    })

    it('Log out', function(){
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