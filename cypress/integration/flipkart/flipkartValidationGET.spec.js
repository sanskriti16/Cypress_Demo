/// <reference types="cypress" />

describe('Flipkart GET method validation', function () {

    beforeEach(() => {
        cy.request('https://www.flipkart.com/search?q=iphone').as('url')
    })

    it('validate server in header info', () => {
        cy.get('@url')
            .its('headers')
            .its('server')
            .should('include', 'nginx')
    })

    it('validate status code', () => {
        cy.get('@url')
            .its('status').should('equal', 200)
    })

})
