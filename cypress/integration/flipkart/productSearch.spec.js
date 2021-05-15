/// <reference types="cypress" />

describe('productSearch Test Suite', function () {

    before(() => {
        cy.fixture('example').then(function (data) {
            this.productSearch = data.productSearch
        })
    })

    it('product Search Test case', function () {
        cy.visit(this.productSearch.url)
        cy.productSearch(this.productSearch.item, this.productSearch.pincode)

    })
})
