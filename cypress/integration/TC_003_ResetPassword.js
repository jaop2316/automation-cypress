describe ('Reset password', function(){
    it('Visits Agency site', function(){
        cy.visit('https://rollkallportal-qa.azurewebsites.net/')
        cy.wait(3000)
    })

    /*it('Click on the reset password link', function(){
        cy.get('.btn').contains('Forgot Password?').click()
    })*/

})