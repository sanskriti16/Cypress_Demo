/// <reference types="cypress" />

describe('Specific Product Test suite', function () {

    beforeEach(() => {

        cy.fixture('example').then(function (data) {
            this.productDetails = data.productDetails
            cy.visit(this.productDetails.url)
        })
    })

    it('verify product name', function () {
        cy.get('.B_NuCI').should('have.text', this.productDetails.name)
    })

    it('verify product price', function () {
        cy.get('._30jeq3').should('have.text', this.productDetails.price)
    })
})