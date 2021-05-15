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
// Cypress.Commands.add('login', (email, password) => { ... })



Cypress.Commands.add('Login', (email, password) => {
    cy.contains('Login').click()
    cy.get('form div.IiD88i:nth-child(1)').type(email)
    cy.get('form div.IiD88i:nth-child(2)').type(password)
    cy.get('._1D1L_j').click()

})

/*
Cypress.Commands.add('Login', (number, password) => {
    cy.get('._1_3w1N').click()
    cy.get('._14Me7y').click()
    cy.get('._2IX_2-').type(number)
    cy.contains('CONTINUE').click()
    cy.get('[type="password"]').type(password)
    cy.wait(3000)
    cy.get("._2KpZ6l > span").click()

})

*/





Cypress.Commands.add('Purchase', (item, pincode) => {
    cy.get('input[name="q"]').type(item)
    cy.get('.L0Z3Pu').click()
    cy.get('a._2rpwqI').eq(0).invoke('removeAttr', 'target').click()
    cy.get('#pincodeInputId').type(pincode)
    cy.get('._2P_LDn').click()
    cy.wait(4000)



})

Cypress.Commands.add('MobilePhone', (mobile, pincode, model) => {
    cy.get('input[name="q"]').type(mobile)
    cy.get('.L0Z3Pu').click()
    cy.contains("Newest First").click()
    cy.contains(model).invoke('removeAttr', 'target').click()
    cy.wait(4000)
    cy.get('#pincodeInputId').type(pincode)
    cy.get('._2P_LDn').click()


})


//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
