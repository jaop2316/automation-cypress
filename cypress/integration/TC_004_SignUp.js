describe ('SignUp', function(){
    it('Visits Agency site', function(){
        cy.visit('https://rollkallportal-qa.azurewebsites.net/')
    })

    it('Click on the sign up button', function(){
        cy.get('.btn').contains('Sign Up').click()
    })

    it('Fill Agency name field', function(){
        cy.get('label').contains('Agency Name').next('input').focus().type('Agency Test proposes')
    })

    it('Fill First name field', function(){
        cy.get('label').contains('First Name').next('input').focus().type('Birdie')
    })

    it('Fill Last name field', function(){
        cy.get('label').contains('Last Name').next('input').focus().type('Noyes')
    })

    it('Fill Email name field', function(){
        cy.get('label').contains('Email').next('input').focus().type('agencyuser0829@yopmail.com')
    })

    it('Fill Phone field', function(){
        cy.get('label').contains('Phone').next('input').focus().type('972-519-5939')
    })

    it('Fill Address field', function(){
        cy.get('label').contains('Address').next('input').focus().type('2666  Wilson Avenue')
    })

    it('Fill City field', function(){
        cy.get('label').contains('City').next('input').focus().type('Plano')
    })

    it('Select a state from the list', function(){

        cy
        .get('.form-group')
        .each(($el, index, $list) => {
          if ($el.find("label").text() === 'State') {
        
            cy.wrap($el).find('.react-select').click()
            cy.get('.react-select__menu').contains('Texas').click()
          } 
        })
    })

    it('Fill Zip field', function(){
        cy.get('label').contains('Zip').next('input').focus().type('75075')
    })

    it('Fill password field', function(){
        cy.get('label').contains('Password').next('input').focus().type('test123')
    })

    it('Fill confirm password field', function(){
        cy.get('label').contains('Confirm Password').next('input').focus().type('test123')
    })


    it('Agree to terms check', function(){
        cy.get('[type="checkbox"]').check() 
    })

    it('Submit form', function(){
        cy.contains('Submit').click()
    })

    //it('Successfull page is loaded', function(){
        //cy.location('host', {timeout: 60000})
        //.should('include', 'confirmation');
    //})



})