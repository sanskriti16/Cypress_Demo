/// <reference types="cypress" />

describe('Specific Product Test suite', function () {

    before(() => {

        cy.fixture('example').then(function (data) {
            this.specificProduct = data.specificProduct
            cy.visit(this.specificProduct.url)
        })
    })

    it('specific Product search test case', function () {
        cy.specificProduct(this.specificProduct.searchKeyword, this.specificProduct.pincode, this.specificProduct.productName)
    })

})
