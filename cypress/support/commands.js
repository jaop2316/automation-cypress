// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })



// Custom command to fill form's inputs
// params 
// formClass : class of the wrapper element 
// label: field's label e.g 'Job Title' 
// inputText: typed text on the input 

    Cypress.Commands.add('fillSimpleInput',(formClass,label,inputText,options ={}) => {
        cy
        .get(formClass)
        .each(($el, index, $list) => {
          if ($el.find("label").text() === label) {
            cy.wrap($el).find('input').type(inputText)
            cy.wait(500)
          } 
        })
    })

// Command to click on the 'Save' button

Cypress.Commands.add('saveInfo',(formClass,buttonClass,options ={}) => {
    cy.get(formClass).find(buttonClass).click()
})


// Select a value from a select control 

Cypress.Commands.add('select',(formClass,label,selectText,options ={})=>{
    
    cy
    .get(formClass)
    .each(($el, index, $list) => {
      if ($el.find("label").text() === label) {
    
        cy.wrap($el).find('.react-select').click()

        if(selectText == ''){
            cy.get('.react-select__menu').first().click()
        }else{
            cy.get('.react-select__menu').contains(selectText).click()
        }
      } 
    })
})