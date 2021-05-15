/// <reference types="cypress" />

describe('My First Test Suite', function () {

    before(() => {

        cy.fixture('example').then(function (data) {

            this.login = data

        })
    })

    it('My firstTest case', function () {


        cy.visit(this.login.url)

        // Login

        cy.Login(this.login.number, this.login.password)

        cy.wait(3000)




        // Sanitizer Purchase

        cy.Purchase(this.login.item, this.login.pincode)

        // Mobile Purchase

        cy.MobilePhone('iPhone', this.login.pincode, 'APPLE iPhone 12 Mini (Purple, 64 GB')


        //Logout

        cy.contains("My Account").trigger('mouseover')
        cy.wait(5000)
        cy.contains('Logout').click()

    })
})
