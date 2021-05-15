
/// <reference types="cypress" />

describe('My Fourth Test Suite', function () {

    it('My fourthTest case', function () {


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        /*

        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        //window alert 
        cy.on('window:alert', (str) => {

            expect(str).to.equal("Hello , share this practice page and share your knowledge")

        })

        cy.on('window:confirm', (str) => {

            expect(str).to.equal("Hello , Are you sure you want to confirm?")

        })

        //need jquery sometimes to handle cypress, remove attribute from DOM

        cy.get('#opentab').invoke('removeAttr', 'target').click()

        cy.url().should('include', 'rahulshettyacademy')


        //self assertion

        //cy.url().should('eq', 'https://www.rahulshettyacademy.com/#/index')


        cy.go("back")

        */

        // siblings access or colume fetching values

        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

            const text = $e1.text()
            if (text.includes('SoapUI')) {

                cy.get('tr td:nth-child(2)').eq(index).next().then(function (price) {
                    const priceText = price.text()
                    expect(priceText).to.equal('35')



                })


            }













        })
    })
})