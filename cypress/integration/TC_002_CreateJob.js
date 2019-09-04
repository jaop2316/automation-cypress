describe ('Create a job', function(){

    it('Visits Agency site and Login', function(){
        cy.visit('https://rollkallportal-qa.azurewebsites.net/')
        cy.get('[type="email"]').first().focus().type('zuriel+agency@rollkall.com')
        cy.get('[type="password"]').first().focus().type('test123')
        cy.contains('Log In').click()
        cy.wait(500)
        cy.get('.toast-top-right').should('be.empty')
        cy.get('.container').contains('Jobs')
        cy.wait(500)
        cy.get('.toast-top-right').should('be.empty')
        cy.get('.container').contains('Jobs')
    })

 
    it('Open the create job form and fill general information', function(){

        // open the create job form 
        cy.get('.btn').contains('+ New Job').click()
        // Fill the job title 
        cy.get('label').contains('Job Name').next('input').focus().type('Security VIP')
        // Select a client from the list 
        cy
        .get('.form-group')
        .each(($el, index, $list) => {
          if ($el.find("label").text() === 'Client') {
        
            cy.wrap($el).find('.react-select').click()
            cy.get('.react-select__menu').contains('Dallas Cowboys').click()
          } 
        })
        // Select a project from the list
        cy
        .get('.form-group')
        .each(($el, index, $list) => {
          if ($el.find("label").text() === 'Project') {
            cy.wrap($el).find('.react-select').click()
            cy.get('.react-select__menu').contains('Dallas Cowboys Game Day').click()
          } 
        })
        // Select a location from the list
        cy
        .get('.form-group')
        .each(($el, index, $list) => {
          if ($el.find("label").text() === 'Location') {
            cy.wrap($el).find('.react-select').click()
            cy.get('.react-select__menu').first().click()
          } 
        })
        // Select the job type
        cy
        .get('.form-group')
        .each(($el, index, $list) => {
          if ($el.find("label").text() === 'What type of job is this?') {
            cy.wrap($el).find('.react-select').click()
            cy.get('.react-select__menu').contains('General Security').click()
          } 
        })
        // Type a job description
        cy
        .get('.form-group')
        .each(($el, index, $list) => {
          if ($el.find("label").text() === 'Job Description') {
            cy.wrap($el).find('textarea').focus().type('provide security')
          } 
        })

        // Set a start job date
        cy
        .get('.form-group')
        .each(($el, index, $list) => {
          if ($el.find("label").text() === 'Start') {
            cy.wrap($el).find('.rdt').click()
            for(let n = 0; n < 9; n ++){
              cy.wrap($el).find('.rdtTime .rdtBtn').first().click({ multiple: true })  
            }
            cy.get('.rdtCounter .rdtCount').contains('AM').next('span').click()
            cy.get('.rdt').first().click()
          } 
        })

        // Set end job date
        cy
        .get('.form-group')
        .each(($el, index, $list) => {
          if ($el.find("label").text() === 'End') {
            cy.wrap($el).find('.rdt').click()   
            for(let n = 0; n < 11; n ++){
              cy.wrap($el).find('.rdtTime .rdtBtn').first().click({ multiple: true })  
            }
            cy.get('.rdtCounter .rdtCount').contains('AM').next('span').click()
            cy.get('.rdt').first().click()
          } 
        })

        // Select an agency supervisor 

        cy
        .get('.form-group')
        .each(($el, index, $list) => {
          if ($el.find("label").text() === 'Agency Supervisor') {
            cy.wrap($el).find('.react-select').click()
            cy.get('.react-select__menu').contains('Agency, Zuriel').click()
          } 
        })

        // Save general information
        cy.get('.pb-button').contains('Continue').click()

    })


it('Add one position to the job', function(){

  // Fill the job position name
  cy
  .get('.form-group')
  .each(($el, index, $list) => {
    if ($el.find("label").text() === 'Position Name') {
      cy.wrap($el).find('input').type('Guard')
    } 
  })
  
  // Set the job rate
  cy.get('#positionRate').type(10)

  // Save the position 
  cy.wait(500)
  cy.get('.pb-button').contains('Save').click()
  cy.get('.collapse.in').find('button').contains('Continue').click()

})


it('Fill payment , fullfiment method and save the job', function(){
  // leave the default (RKPay)
  cy.get('.collapse.in').find('button').contains('Continue').click()
  // Leave the officer fullfiment method
  cy.get('.collapse.in').find('button').contains('Continue').click()
  // Save the job
  cy.wait(500)
  cy.get('.pb-button').contains('Save Job').click()
   
})

})