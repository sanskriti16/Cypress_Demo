/// <reference types="cypress" />

describe('REST API', function () {

    it('REST API testing using cypress', function () {

        cy.request('https://www.ixigo.com/action/content/currency?searchFor=currency').then((res) => {

            expect(res.status).equal(200)
            expect(res.body[0]).has.property("code", "INR")
            expect(res.body[5]).has.property("rate", 78.634443)
        })


    })


})
