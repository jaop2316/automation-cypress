/// <reference types ="cypress" />


describe ('Generate a report', function(){
    
    it('Visits Agency site and Login', function(){
      
        cy.visit('https://rollkallportal-qa.azurewebsites.net/')
         
        cy.login('agency','zuriel+agency@rollkall.com','test123')
      })


      it('Generate a report', function(){

        cy.wait(1000)

        cy.get('.navbar-default .navbar-nav>li').contains('Reports').click()


      })

})