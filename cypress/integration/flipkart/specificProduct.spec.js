/// <reference types="cypress" />

describe('Specific Product Test suite', function () {

    before(() => {

        cy.fixture('example').then(function (data) {

            this.specificProduct = data.specificProduct
        })
    })

    it('specific Product search test case', function () {
        cy.visit(this.specificProduct.url)
        cy.specificProduct(this.specificProduct.searchKeyword, this.specificProduct.pincode, this.specificProduct.productName)
    })
})
