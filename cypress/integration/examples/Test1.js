
/// <reference types="cypress" />

describe('My First Test Suite', function () {

    it('My firstTest case', function () {


        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

        cy.get('.search-keyword').type('Ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)
        //Parent child chaining
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()

        //cy.get('.products').find('.product').eq(1).contains('+').click()
        //cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
        //cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        //dynamically access to product 



        cy.get('.products').find('.product').each(($e1, index, $list) => {

            const firstVeg = $e1.find('h4.product-name').text()

            if (firstVeg.includes('Cashews')) {
                //cy.wrap($e1).contains("ADD TO CART").click()
                $e1.find('button').click()

            }
        })


    })
})