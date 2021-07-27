/// <reference types="cypress" />

describe('GET API Demo', function () {

    it("RobusTest Get API call", () => {

        cy.request('http://robustest.hopto.org:86/v3/device/5d1f803e1e4a331a93a99cdb?accessKey=ezaZmhfH0DNATXU7O1uJ1byPk9c').then((res) => {

            expect(res.status).equal(200)
            expect(res.body._id).equal("5d1f803e1e4a331a93a99cdb")
            expect(res.body.model).equal("Redmi 6A")
            expect(res.body.projects[1]).equal('60aa5ca7d18e92ac29a33648')
        })
    })
})

