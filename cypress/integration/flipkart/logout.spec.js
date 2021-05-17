/// <reference types="cypress" />

describe('logout', function () {
    before(() => {
        cy.fixture('example.json').then(function (data) {
            this.logout = data.logout
        })
    })

    it('logout', function () {
        cy.visit(this.logout.url)
        cy.Login(this.logout.number, this.logout.password)
        cy.wait(3000)
        cy.logOut(this.logout.loginMessage)

    })
})
