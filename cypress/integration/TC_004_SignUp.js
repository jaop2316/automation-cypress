describe ('SignUp', function(){

    it('Visits Agency site', function(){

         // Go to the agency site
    cy.visit('https://rollkallportal-qa.azurewebsites.net/')

    // Click on the Sign Up button 
    cy.get('.btn').contains('Sign Up').click()

    // Fill the agency name field 
    cy.get('label').contains('Agency Name').next('input').focus().type('Agency Test proposes')

    // Fill first name field 
    cy.get('label').contains('First Name').next('input').focus().type('Birdie')

   // Fill last name field
   cy.get('label').contains('Last Name').next('input').focus().type('Noyes')

    // Fill Email and name field 
    cy.get('label').contains('Email').next('input').focus().type('agencyuser0829@yopmail.com')

    // Fill Phone field 
    cy.get('label').contains('Phone').next('input').focus().type('972-519-5939')

    // Fill Address field 
    cy.get('label').contains('Address').next('input').focus().type('2666  Wilson Avenue')

    // Fill city field 
    cy.get('label').contains('City').next('input').focus().type('Plano')

    // Select a state from the list 
    cy
    .get('.form-group')
    .each(($el, index, $list) => {
      if ($el.find("label").text() === 'State') {
    
        cy.wrap($el).find('.react-select').click()
        cy.get('.react-select__menu').contains('Texas').click()
      } 
    })

    // Fill Zip field 
    cy.get('label').contains('Zip').next('input').focus().type('75075')


    // Fill password field 
    cy.get('label').contains('Password').next('input').focus().type('test123')

    // Fill confirm password field 
    cy.get('label').contains('Confirm Password').next('input').focus().type('test123')


    // Check the agree terms 

    cy.get('[type="checkbox"]').check() 

    // Click on the submit button 

    cy.contains('Submit').click()


    })

   

})