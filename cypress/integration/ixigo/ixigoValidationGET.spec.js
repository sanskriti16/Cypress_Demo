

/// <reference types="cypress" />

describe('ixigo GET call validation', function () {

    beforeEach(() => {
        cy.request('/action/content/currency?searchFor=currency').as('url')
    })

    it('validate the header info', () => {
        cy.get('@url')
            .its('headers')
            .its('server')
            .should('include', 'cloudflare')
    })
    it('validate status code', () => {
        cy.get('@url')
            .its('status').should('equal', 200)
    })
    it('validate the body info in json array', () => {
        cy.get('@url')
            .its('body').then((res) => {
                expect(res[0]).has.property('code', 'INR')
                expect(res[1]).has.property('symbol', '&#128;')
                expect(res[5]).has.property('rate', 78.634443)
            })

    })
})


