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


    it('Set a start job date', function(){
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
  })

  it('Set a end job date', function(){
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
})


it('Select an agency supervisor', function(){

  cy
  .get('.form-group')
  .each(($el, index, $list) => {
    if ($el.find("label").text() === 'Agency Supervisor') {
      cy.wrap($el).find('.react-select').click()
      cy.get('.react-select__menu').contains('Agency, Zuriel').click()
    } 
  })
})


it('Save job general information', function(){

  cy.get('.pb-button').contains('Continue').click()
  
})


it('Add positions to the job', function(){

  cy
  .get('.form-group')
  .each(($el, index, $list) => {
    if ($el.find("label").text() === 'Position Name') {
      cy.wrap($el).find('input').type('Guard')
    } 
  })
  
})

it('Set the job rate', function(){

  cy.get('#positionRate').type(10)
  
})


it('Save the position', function(){
  cy.wait(500)
  cy.get('.pb-button').contains('Save').click()
  
})

// This is a job with a single position 

it('Continue to the Payment details', function(){
  cy.get('.collapse.in').find('button').contains('Continue').click()
  
})

// Select RKPay in the Payment Details

it('Continue to officer fullfillment', function(){
  cy.get('.collapse.in').find('button').contains('Continue').click()
  
})

// SAve officer fullfiment 

it('Save officer fullfiment', function(){
  cy.get('.collapse.in').find('button').contains('Continue').click()
  
})


it('Save job', function(){
  cy.wait(500)
  cy.get('.pb-button').contains('Save Job').click()
  
})

})