/// <reference types="cypress" />

describe('Login Test suite', function () {

    beforeEach(() => {

        cy.fixture('example').then(function (data) {

            this.loginuser = data.loginuser
            this.invalidUserWrongPassword = data.invalidUserWrongPassword
            this.url = data.url
            cy.visit(this.loginuser.url)
        })
    })

    it('login using mobile number', function () {
        // Login
        cy.Login(this.loginuser.number, this.loginuser.password)

        //verify user is logged in or not
        cy.contains(this.loginuser.loginMessage).trigger('mouseover')
        cy.contains('My Profile').should('be.visible')

    })

    it('login using email', function () {
        // Login
        cy.Login(this.loginuser.email, this.loginuser.password)

        //verify user is logged in or not
        cy.contains(this.loginuser.loginMessage).should('be.visible')
    })

    it('invalid password', function () {
        cy.Login(this.invalidUserWrongPassword.number, this.invalidUserWrongPassword.password)

    })

    it('invalid username', function () {
        cy.Login(this.invalidUserWrongPassword.number1, this.invalidUserWrongPassword.password)
    })


})
