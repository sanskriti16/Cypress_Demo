/// <reference types="cypress" />

describe('GET API Demo with Alias', function () {

    beforeEach(() => {
        cy.request('/v3/devices?accessKey=ezaZmhfH0DNATXU7O1uJ1byPk9c').as('allDevices')

    })

    it("Validate the header info", () => {
        cy.get('@allDevices')
            .its('headers')
            .its('Content-Type')
            .should('not.exist')
    })

    it("Validate the status code", () => {
        cy.get('@allDevices')
            .its('status')
            .should('equals', 200)
    })

    it("Validate the id", () => {
        cy.get('@allDevices')
            .its('body').then((res) => {
                expect(res.available[0]).has.property('_id', '5d1710d4f38611562ed2b0d3')
            })
    })

    it("Validate the model ", () => {
        cy.get('@allDevices')
            .its('body').then((res) => {
                expect(res.available[0]).has.property('model', 'iPhone 5s')
            })

    })

    it("Validate the Testing ", () => {
        cy.get('@allDevices')
            .its('body').then((res) => {
                expect(res.available[0]).has.property('name', 'iPhone 5s')

            })


    })

})