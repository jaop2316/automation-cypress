/// <reference types ="cypress" />

describe ('Create a job', function(){

  beforeEach(() =>{
    cy.visit('https://rollkallportal-qa.azurewebsites.net/')
    cy.verifySession()
  })

  afterEach(function() {
    cy.logout()
  });

   it('Create a single position job', function(){

    cy.login('agency','zuriel+agency@rollkall.com','test123')
    

    // Visits Agency site and Login
  
    // Open the create job form and fill general information

      // open the create job form 
      cy.get('.btn').contains('+ New Job').click()
      // Fill the job title 

      cy.fillSimpleInput('.form-group','Job Name','Security VIP')

      // Select a client from the list 
     
      cy.select('.form-group','Client','Dallas Cowboys')

      // Select a project from the list

      cy.select('.form-group','Project','Dallas Cowboys Game Day')

      // Select a location from the list
   
      cy.select('.form-group','Location','')

      // Select the job type
    
      cy.select('.form-group','What type of job is this?','General Security')

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

      cy.select('.form-group','Agency Supervisor','Agency, Zuriel')

      // Save general information
      cy.get('.pb-button').contains('Continue').click()

      // Add one position to the job

      // Fill the job position name
      cy.fillSimpleInput('.form-group','Position Name','Guard')
  
      // Set the job rate
      cy.get('#positionRate').type(10)

      // Save the position 
      cy.wait(500)
      cy.get('.pb-button').contains('Save').click()
      cy.get('.collapse.in').find('button').contains('Continue').click()

      // Fill payment , fullfiment method and save the job

      // leave the default (RKPay)
      cy.get('.collapse.in').find('button').contains('Continue').click()
      // Leave the officer fullfiment method
      cy.get('.collapse.in').find('button').contains('Continue').click()
      // Save the job
      cy.wait(500)
      cy.get('.pb-button').contains('Save Job').click()


   })

})