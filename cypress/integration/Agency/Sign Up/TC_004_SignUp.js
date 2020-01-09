/// <reference types ="cypress" />


describe ('SignUp', function(){

  const todaysDate = Cypress.moment().format('MMDDhmmss')
  const emailfake = 'user' + todaysDate + '@yopmail.com'

  beforeEach(() =>{
    cy.visit('https://rollkallportal-qa.azurewebsites.net/')
    cy.verifySession()
    // Click on the Sign Up button 
    cy.get('.btn').contains('Sign Up').click()

})

    it('Sign Up (Agency user)', function(){

    // Fill the agency name field 
   
    cy.get('input[name="sign-up-agency-organization-name"]').focus().type('Agency Test proposes')

    // Fill first name field 

    cy.get('input[name="sign-up-agency-first-name"]').focus().type('Birdie')

     // Fill last name field

     cy.get('input[name="sign-up-agency-last-name"]').focus().type('Noyes')


   // Fill Email and name field 
    
    

    cy.get('input[name="sign-up-agency-email"]').focus().type(emailfake)
  
    // Fill Phone field 
    
    cy.get('input[name="sign-up-agency-mobile-phone"]').focus().type('972-519-5939')

    // Fill Address field 
    cy.get('input[name="sign-up-agency-address"]').focus().type('2666  Wilson Avenue')

    // Fill city field 
    cy.get('input[name="sign-up-agency-city"]').focus().type('Plano')

    // Select a state from the list 
  
    cy.select('.form-group','State','Texas')

    // Fill Zip field 
    cy.get('input[name="sign-up-agency-zip"]').focus().type('75075')


    // Fill password field 
    cy.get('input[name="sign-up-agency-password"]').focus().type('test123')

    // Fill confirm password field 
    cy.get('input[name="sign-up-agency-confirm-password"]').focus().type('test123')


    // Check the agree terms 

    cy.get('input[name="sign-up-agency-terms-accepted"]').check() 

    // Click on the submit button 

    cy.contains('Submit').click()


    })

    it.only('Sign Up (LEA user)', function(){

      // Go to the sign up page 

      cy.get('a[id="lea-signup-button"]').click()

      // Fill personal information 

      // Add First name 

      cy.get('input[name="firstName"]').focus().type('Robyn')

      // Add last name 

      cy.get('input[name="LastName"]').focus().type('Lamb')

      // Add email

      cy.get('input[name="Email"]').focus().type(emailfake)

      // Add phone number

      cy.get('input[name="MobilePhone"]').focus().type('972-519-5939')

      // Password and Verify password 

      cy.get('input[name="Password"]').focus().type('j3ss1c42316')

      cy.get('input[name="Password_confirmation"]').focus().type('j3ss1c42316')

      // Fill title field

      cy.get('input[name="Title"]').focus().type('Mr')

      cy.wait(1000)

      // Save personal information

      cy.get('.pb-button').contains('Continue').click()

      // Fill Dpto info 

      cy.wait(5000)

      cy.select('.form-group','State','Texas')

      // County

      cy.wait(5000)

      cy.select('.form-group','County','Collin')

      // Department

      cy.wait(5000)

      cy.select('.form-group','Department','Plano Police Dept')


    })

})


describe ('Sign Up case (Variations)', function(){

  beforeEach(() =>{
    cy.visit('https://rollkallportal-qa.azurewebsites.net/')
    cy.verifySession()
    
    // Click on the Sign Up button 
    cy.get('.btn').contains('Sign Up').click()

})

  it('Email already exists', function(){

    // Fill the agency name field 
 
  cy.get('input[name="sign-up-agency-organization-name"]').focus().type('Agency Test proposes')

  // Fill first name field 

  cy.get('input[name="sign-up-agency-first-name"]').focus().type('Birdie')

   // Fill last name field

   cy.get('input[name="sign-up-agency-last-name"]').focus().type('Noyes')


 // Fill Email and name field 
  

  cy.get('input[name="sign-up-agency-email"]').focus().type('jessica.olivo@jobsity.io')

  // Fill Phone field 
  
  cy.get('input[name="sign-up-agency-mobile-phone"]').focus().type('972-519-5939')

  // Fill Address field 
  cy.get('input[name="sign-up-agency-address"]').focus().type('2666  Wilson Avenue')

  // Fill city field 
  cy.get('input[name="sign-up-agency-city"]').focus().type('Plano')

  // Select a state from the list 

  cy.select('.form-group','State','Texas')

  // Fill Zip field 
  cy.get('input[name="sign-up-agency-zip"]').focus().type('75075')


  // Fill password field 
  cy.get('input[name="sign-up-agency-password"]').focus().type('test123')

  // Fill confirm password field 
  cy.get('input[name="sign-up-agency-confirm-password"]').focus().type('test123')


  // Check the agree terms  

  cy.get('input[name="sign-up-agency-terms-accepted"]').check() 

  // Click on the submit button 

  cy.contains('Submit').click()

  cy.get('#toast-container').should('contain.text','OopsEmail already exists..')  

  })

})