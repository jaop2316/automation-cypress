/// <reference types ="cypress" />


describe ('Login case', function(){

    beforeEach(() =>{

        cy.visit('https://rollkallportal-qa.azurewebsites.net/')
    })

    afterEach(function() {

        cy.logout()
      });

    it('Visits Agency site and login (Agency user)', function(){

        cy.login('agency','zuriel+agency@rollkall.com','test123')

        cy.wait(3000)
    })

    it('Visits Agency site and login (Super admin user)', function(){
        cy.login('admin','zuriel+admin@rollkall.com','test123')

        cy.wait(3000)
    })

    it('Visits Agency site and login (LEA user)', function(){
        cy.login('lea','zuriel+lea@rollkall.com','test123')

        cy.wait(3000)
    })

    
    it('Visits Agency site and login (Coordinator user)', function(){

        cy.login('coordinator','zuriel+coordinator@rollkall.com','test123')

        cy.wait(3000)
    })



})