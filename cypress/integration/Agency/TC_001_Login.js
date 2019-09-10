describe ('Login case', function(){
    it('Visits Agency site and login (Agency user)', function(){
        // Go to agency site
        cy.visit('https://rollkallportal-qa.azurewebsites.net/')
        // Type user credentials
        cy.get('[type="email"]').first().focus().type('zuriel+agency@rollkall.com')
        cy.get('[type="password"]').first().focus().type('test123')
        // Submit form 
        cy.contains('Log In').click()
        // Load jobs page
        cy.url().should('include','/jobs')
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

    it('Visits Agency site and login (Super admin user)', function(){
        // Go to agency site
        cy.visit('https://rollkallportal-qa.azurewebsites.net/')
        // Type user credentials
        cy.get('[type="email"]').first().focus().type('zuriel+admin@rollkall.com')
        cy.get('[type="password"]').first().focus().type('test123')
        // Submit form 
        cy.contains('Log In').click()
        // Load jobs page
        cy.url().should('include','/jobs')
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

    it('Visits Agency site and login (LEA user)', function(){
        // Type user credentials
        cy.get('[type="email"]').first().focus().type('zuriel+lea@rollkall.com')
        cy.get('[type="password"]').first().focus().type('test123')
        // Submit form 
        cy.contains('Log In').click()
        // Load jobs page
        cy.url().should('include','/dashboard')
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

    
    it('Visits Agency site and login (Coordinator user)', function(){
        // Type user credentials
        cy.get('[type="email"]').first().focus().type('zuriel+coordinator@rollkall.com')
        cy.get('[type="password"]').first().focus().type('test123')
        // Submit form 
        cy.contains('Log In').click()
        // Load jobs page
        cy.url().should('include','/dashboard')
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