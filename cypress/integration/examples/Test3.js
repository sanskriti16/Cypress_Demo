
/// <reference types="cypress" />

describe('My Third Test Suite', function () {

    it('My thirdTest case', function () {


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //check boxes
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')

        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        cy.get('input[type="checkbox"]').check(['option2', 'option3']).should('be.checked')

        //static dropdown, tag will be always select
        //--My code
        //cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2')

        cy.get('select').select('option2').should('have.value', 'option2')

        cy.get('#autocomplete').type('Uni')
        cy.get('.ui-menu-item div').each(($e1, index, $list) => {

            if ($e1.text() === 'United Kingdom (UK)') {

                $e1.click()
            }

        })
        cy.get('#autocomplete').should('have.value', 'United Kingdom (UK)')


        //Radio buttons
        cy.get('[value="radio2"]').check().should('be.checked')

        // visible and invisible

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')














    })
})