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

    it('Fill Job Name field', function(){
        cy.get('label').contains('Job Name').next('input').focus().type('Security VIP')
    })

    it('Select a client from the list', function(){

        cy
        .get('.form-group')
        .each(($el, index, $list) => {
          if ($el.find("label").text() === 'Client') {
        
            cy.wrap($el).find('.react-select').click()
            cy.get('.react-select__menu').contains('Dallas Cowboys').click()
          } 
        })
    })

    it('Select a project from the list', function(){

        cy
        .get('.form-group')
        .each(($el, index, $list) => {
          if ($el.find("label").text() === 'Project') {
            cy.wrap($el).find('.react-select').click()
            cy.get('.react-select__menu').contains('Dallas Cowboys Game Day').click()
          } 
        })
    })


    it('Select a location from the list', function(){

        cy
        .get('.form-group')
        .each(($el, index, $list) => {
          if ($el.find("label").text() === 'Location') {
            cy.wrap($el).find('.react-select').click()
            cy.get('.react-select__menu').first().click()
          } 
        })
    })

    it('Select the job type', function(){

        cy
        .get('.form-group')
        .each(($el, index, $list) => {
          if ($el.find("label").text() === 'What type of job is this?') {
            cy.wrap($el).find('.react-select').click()
            cy.get('.react-select__menu').contains('General Security').click()
          } 
        })
    })

    it('Type a job description', function(){
        cy
        .get('.form-group')
        .each(($el, index, $list) => {
          if ($el.find("label").text() === 'Job Description') {
            cy.wrap($el).find('textarea').focus().type('provide security')
          } 
        })
    })



})