describe ('Create a new client workflow', function(){
  
  const todaysDate = Cypress.moment().format('MMDDhmmss')
  const fakeClient = 'ClientQA' + todaysDate
  const randomLocation = 'Place' + todaysDate

    it('Visits Agency site and login', function(){
        
        // Go to agency site
        cy.visit('https://rollkallportal-qa.azurewebsites.net/')
        // Type user credentials
        cy.get('[type="email"]').first().focus().type('zuriel+agency@rollkall.com')
        cy.get('[type="password"]').first().focus().type('test123')
        // Submit form 
        cy.contains('Log In').click()
        // Load jobs page
        cy.wait(500)
        cy.get('.toast-top-right').should('be.empty')
        cy.get('.container').contains('Jobs')
    })

    it('Open the create job form and new client modal', function(){
      
        
        

        // open the create job form 
        cy.get('.btn').contains('+ New Job').click()
        // open the create new client modal
        cy
        .get('.form-group')
        .each(($el, index, $list) => {
          if ($el.find("label").text() === 'Client') {
            cy.get('.btn').contains('+ New').click()
            cy.get('.modal-title').should('contain','New Client')
          } 
        })


        // Type client's name 

        cy
        .get('.form-group')
        .each(($el, index, $list) => {
          if ($el.find("label").text() === 'Client Name') {
            
            cy.get('#clientName').type(fakeClient)
            cy.wait(500)
          } 
        })

        // Click 'Save' button
        cy.get('.modal-footer').find('.pb-button').click()

        cy
        .get('.form-group')
        .each(($el, index, $list) => {
          if ($el.find("label").text() === 'Client') {
        
            cy.wrap($el).find('.react-select').click()
            cy.get('.react-select__menu').contains(fakeClient).click()
          } 
        })
        
    
    })

    it('Create a new project', function(){

          // open the create new project modal
          cy
          .get('.form-group')
          .each(($el, index, $list) => {
            if ($el.find("label").text() === 'Project') {
              cy.wrap($el).find('.btn').contains('+ New').click()
              cy.get('.modal-title').should('contain','Add Project')
            }
          })

          // Type project's name 
          cy
          .get('.form-horizontal .form-group')
          .each(($el, index, $list) => {
            if($el.find("label").text() === 'Project Name:'){
                cy.wrap($el).find('input').type('Project 1')
            }
          })

          // Select the agency's supervisor 
         
          cy
          .get('.form-horizontal .form-group')
          .each(($el, index, $list) => {
            if($el.find("label").text() === 'Agency Supervisor:'){
                cy.wrap($el).find('.react-select').click()
                cy.get('.react-select__menu').first().click()
            }
          })

          // Select payment term

          cy
          .get('.form-horizontal .form-group')
          .each(($el, index, $list) => {
            if($el.find("label").text() === 'Payment Terms:'){
                cy.wrap($el).find('.react-select').click()
                cy.get('.react-select__menu').first().click()
            }
          })


          // Add the project description

          cy
          .get('.form-horizontal .form-group')
          .each(($el, index, $list) => {
            if($el.find("label").text() === 'Description:'){
                cy.wrap($el).find('textarea').type('This is a test project')
            }
          })


          // Click on the Save button

          cy.get('.form-horizontal .form-group').contains('Save').click()

          // Select the created project

          cy
        .get('.form-group')
        .each(($el, index, $list) => {
          if ($el.find("label").text() === 'Project') {
        
            cy.wrap($el).find('.react-select').click()
            cy.get('.react-select__menu').contains('Project 1').click()
          } 
        })


        // Create a location 

        cy
        .get('.form-group')
        .each(($el, index, $list) => {
          if ($el.find("label").text() === 'Location') {
            cy.wrap($el).find('.btn').contains('+ New').click()
            cy.get('.modal-title').should('contain','Add Location')
          }
        })


        // Add location Name
        

        cy
        .get('.form-container .form-group')
        .each(($el, index, $list) => {
          if($el.find("label").text() === 'Location Name'){
              cy.wrap($el).find('input').type(randomLocation)
          }
        })

        // Add Address 

        cy
        .get('.form-container .form-group')
        .each(($el, index, $list) => {
          if($el.find("label").text() === 'Address'){
              cy.wrap($el).find('input').type('3901 W 15th St')
          }
        })

        // Fill city information

        cy
        .get('.form-container .form-group')
        .each(($el, index, $list) => {
          if($el.find("label").text() === 'City'){
              cy.wrap($el).find('input').type('Plano')
          }
        })


        // Select the state
         cy
         .get('.form-group')
         .each(($el, index, $list) => {
           if ($el.find("label").text() === 'State') {
         
             cy.wrap($el).find('.react-select').click()
             cy.get('.react-select__menu').contains('Texas').click()
           } 
         })


         // Fill the zipcode

         cy
         .get('.form-container .form-group')
         .each(($el, index, $list) => {
           if($el.find("label").text() === 'Zipcode'){
               cy.wrap($el).find('input').type('75075')
           }
         })

          // Select the location type
          cy
          .get('.form-group')
          .each(($el, index, $list) => {
            if ($el.find("label").text() === 'Location Type') {
          
              cy.wrap($el).find('.react-select').click()
              cy.get('.react-select__menu').contains('Hospital').click()
            } 
          })

          
          // Click on the Save button

          cy.get('.modal-footer').find('.pb-button').click()

          // select created location
          cy
          .get('.form-group')
          .each(($el, index, $list) => {
            if ($el.find("label").text() === 'Location') {
          
              cy.wrap($el).find('.react-select').click()
              cy.get('.react-select__menu').contains(randomLocation).click()
            } 
          })
 


      

    })
})