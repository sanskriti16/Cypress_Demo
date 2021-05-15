
/// <reference types="cypress" />

describe('My Second Test Suite', function () {

    it('My secondTest case', function () {


        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

        cy.get('.search-keyword').type('Ca')
        cy.wait(2000)
        //Parent child chaining
        cy.get('.products').as('productLocator')
        //cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click()

        //cy.get('.products').find('.product').eq(1).contains('+').click()
        //cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
        //cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        //dynamically access to product 



        cy.get('@productLocator').find('.product').each(($e1, index, $list) => {

            const firstVeg = $e1.find('h4.product-name').text()

            if (firstVeg.includes('Cashews')) {
                //cy.wrap($e1).contains("ADD TO CART").click()
                $e1.find('button').click()

            }
        })
        cy.get('.cart-icon').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()


















    })
})