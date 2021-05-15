/// <reference types="cypress" />

describe('My First Test Suite', function () {

    it('My firstTest case', function () {


        cy.visit("https://www.flipkart.com/")

        // Login

        cy.contains('Login').click()
        cy.get('form div.IiD88i:nth-child(1)').type('ssanskriti90@gmail.com')
        cy.get('form div.IiD88i:nth-child(2)').type('AFlipkart')
        cy.get('._1D1L_j').click()



        /*
                cy.get('._1_3w1N').click()
                cy.get('._14Me7y').click()
                cy.get('._2IX_2-').type("9860534474")
                cy.contains('CONTINUE').click()
                cy.get('[type="password"]').type('AFlipkart')
                cy.wait(3000)
                cy.get("._2KpZ6l > span").click()
        
                cy.wait(3000)
        
                
                        // Mobile Purchase
                        cy.get('input[name="q"]').type("mobile")
                        cy.get('.L0Z3Pu').click()
                        cy.contains("Newest First").click()
                
                        cy.wait(5000)
                        cy.contains("APPLE iPhone 12 Mini (Purple, 64 GB)").invoke('removeAttr', 'target').click()
                        cy.get('#pincodeInputId').type("800001")
                        cy.get('._2P_LDn').click()
                        cy.contains("ADD TO CART").click()
                
                
                
                        //cy.contains("APPLE iPhone 12 Mini (Purple, 64 GB)").click()
                        //cy.get('_2KpZ6l').click()
                
                        
                                cy.get('input[name="q"]').type("basmati rice 5kg")
                                cy.get('.L0Z3Pu').click()
                                cy.contains("Newest First").click()
                                cy.wait(3000)
                                cy.contains("Eravat Basmati Tibar Rice").click()
                                cy.get('#pincodeInputId').type("411028")
                
                           
        
                cy.get('input[name="q"]').type("Sanitizer ")
                cy.get('.L0Z3Pu').click()
        
                //const first = cy.get('div._4ddWXP').first()
                // first.click()
                //first.invoke('removeAttr', 'target').click()
        
        
                cy.get('a._2rpwqI').eq(0).invoke('removeAttr', 'target').click()
                cy.get('#pincodeInputId').type("800001")
                cy.get('._2P_LDn').click()
                //cy.wait(3000)
                //cy.get('[css="1"]').click()
        
                
                        //Mobile Purchase
                        cy.get('input[name="q"]').type("APPLE iPhone 12 Mini")
                        cy.get('.L0Z3Pu').click()
                        cy.contains("APPLE iPhone 12 Mini (Purple, 64 GB)").invoke('removeAttr', 'target').click()
                        cy.get('#pincodeInputId').type("800001")
                        cy.get('._2P_LDn').click()
                
                        cy.wait(10000)
                
                        //cy.contains("ADD TO CART").click()
                        //cy.get('div._1p3MFP').contains("ADD TO CART").trigger('click')
                        //cy.wait(3000)
                        //cy.get('button._2KpZ6l._2U9uOA.ihZ75k._3AWRsL').click()
                
                        //cy.get('.row > :nth-child(1) > ._2KpZ6l').click()
                        //cy.get('.col.col-6-12').find('._2KpZ6l._2U9uOA._3v1-ww').contains('ADD TO CART').click()
                        */




    })
})