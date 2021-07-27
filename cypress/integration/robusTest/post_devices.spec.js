/// <reference types="cypress" />

describe('POST API Demo ', function () {

    it("Create a product", () => {
        cy.request({
            method: 'POST',
            url: 'http://robustest.hopto.org:86/v3/project/new?accessKey=ezaZmhfH0DNATXU7O1uJ1byPk9c',

            body: {
                "name": "Cypress_POST",
                "desc": "Creating from Cypress",
                "os": "android",
                "url": ""
            }

        }).then((res) => {
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(200)
            expect(res.body).has.property("name", "Cypress_POST")
            expect(res.body).has.property("desc", "Creating from Cypress")
            expect(res.body).has.property("os", "android")
        })
    })
})