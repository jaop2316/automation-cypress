/// <reference types ="cypress" />


describe ('Login case (main cases)', function(){

    beforeEach(() =>{

        cy.visit('https://rollkallportal-qa.azurewebsites.net/')
    })

    afterEach(function() {
        cy.logout()
      });

    // Main cases

    it('Visits Agency site and login (Agency user)', function(){
        cy.login('agency','zuriel+agency@rollkall.com','test123')  
    })

    it('Visits Agency site and login (Super admin user)', function(){
        cy.login('admin','zuriel+admin@rollkall.com','test123') 
    })

    it('Visits Agency site and login (LEA user)', function(){
        cy.login('lea','zuriel+lea@rollkall.com','test123')   
    })

    
    it('Visits Agency site and login (Coordinator user)', function(){
        cy.login('coordinator','zuriel+coordinator@rollkall.com','test123')
  
    })
})


describe ('Login case (Variations)', function(){

    beforeEach(() =>{
        cy.visit('https://rollkallportal-qa.azurewebsites.net/')
    })

    // Variations 
it('Incorrect user name ', function(){
    cy.get('input[name="login-email"]').first().focus().type('zuriel+agency123@rollkall.com')
    cy.get('input[name="login-password"]').first().focus().type('test123')
     // Submit form 
     cy.contains('Log In').click()
     cy.get('#toast-container').should('contain.text','Invalid email/password combination. Please try again.')

  })

  it('Incorrect password', function(){
    cy.get('input[name="login-email"]').first().focus().type('zuriel+agency@rollkall.com')
    cy.get('input[name="login-password"]').first().focus().type('test')
     // Submit form 
     cy.contains('Log In').click()
     cy.get('#toast-container').should('contain.text','Invalid email/password combination. Please try again.')

  })

  it ('Pending approval users', function(){

    cy.get('input[name="login-email"]').first().focus().type('agencyuser111240631@yopmail.com')
    cy.get('input[name="login-password"]').first().focus().type('test123')
    // Submit form 
    cy.contains('Log In').click()
    cy.get('#toast-container').should('contain.text','Sorry, your application is pending for authorization. If you have any questions please contact support@rollkall.com.')

  })

  it('Pending email verification', function(){

    cy.get('input[name="login-email"]').first().focus().type('agencyuser111240325@yopmail.com')
    cy.get('input[name="login-password"]').first().focus().type('test123')
    // Submit form 
    cy.contains('Log In').click()
    cy.get('#toast-container').should('contain.text','Your email has not been verified, you will not be able to log in until you do. We have resent your verification email, please check your email account.')

  })


})



