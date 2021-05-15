/// <reference types="cypress" />

describe('Login Test suite', function () {

    beforeEach(() => {

        cy.fixture('example').then(function (data) {

            this.user = data.user
            this.url = data.url

            cy.visit(this.url)

        })
    })

    it('login using mobile number', function () {


        // Login

        cy.Login(this.user.number, this.user.password)

        //cy.wait(3000)
        //verify user is logged in or not

    })

    it('login using email', function () {


        // Login

        cy.Login(this.user.email, this.user.password)

        //cy.wait(3000)
        //verify user is logged in or not

    })
})
