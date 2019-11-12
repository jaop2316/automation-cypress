/// <reference types ="cypress" />


describe ('SignUp', function(){

    it('Visits Agency site', function(){

         // Go to the agency site
    cy.visit('https://rollkallportal-qa.azurewebsites.net/')

    // Click on the Sign Up button 
    cy.get('.btn').contains('Sign Up').click()

    // Fill the agency name field 
   
    cy.get('input[name="sign-up-agency-organization-name"]').focus().type('Agency Test proposes')

    // Fill first name field 

    cy.get('input[name="sign-up-agency-first-name"]').focus().type('Birdie')

     // Fill last name field

     cy.get('input[name="sign-up-agency-last-name"]').focus().type('Noyes')


   // Fill Email and name field 
    const todaysDate = Cypress.moment().format('MMDDhmmss')
    const emailfake = 'agencyuser' + todaysDate + '@yopmail.com'

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

   

})