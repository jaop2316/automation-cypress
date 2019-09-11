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

        cy.fillSimpleInput('.form-group','Client Name',fakeClient)

    
        // Click 'Save' button
        cy.saveInfo('.modal-footer','.pb-button')


        // Select a client from the list

        cy.select('.form-group','Client',fakeClient)
  
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

          cy.fillSimpleInput('.form-horizontal .form-group','Project Name:','Project 1')

          // Select the agency's supervisor 

          cy.select('.form-horizontal .form-group','Agency Supervisor:','')

          // Select payment term

          cy.select('.form-horizontal .form-group','Payment Terms:','')

          // Add the project description

          cy
          .get('.form-horizontal .form-group')
          .each(($el, index, $list) => {
            if($el.find("label").text() === 'Description:'){
                cy.wrap($el).find('textarea').type('This is a test project')
            }
          })


          // Click on the Save button

          cy.saveInfo('.form-horizontal .form-group .pb-container','button')

          // Select the created project

        cy.select('.form-group ','Project','')


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
      
        cy.fillSimpleInput('.form-container .form-group','Location Name',randomLocation)

        // Add Address 

        cy.fillSimpleInput('.form-container .form-group','Address','3901 W 15th St')

        // Fill city information

        cy.fillSimpleInput('.form-container .form-group','City','Plano')


        // Select the state
    
         cy.select('.form-group ','State','Texas')


         // Fill the zipcode

         cy.fillSimpleInput('.form-container .form-group','Zipcode','75075')

          // Select the location type
  
          cy.select('.form-group ','Location Type','Hospital')

          
          // Click on the Save button

          cy.saveInfo('.modal-footer','.pb-button')

          // select created location
         
          cy.select('.form-group ','Location',randomLocation)

    })
})