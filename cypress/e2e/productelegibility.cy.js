describe('ProductElegibility component tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173');
    });

    it('Shows product elegibility data container', () => {
        cy.get('input')
            .type('111222');
        cy.get('button').click();

        cy.get('.product-info')
            .should('be.visible');
    })

    describe('Shows product info details', () => {
        describe('With elegibility', () => {
            it('Shows congrats text', () => {
                cy.get('input')
                    .type('111222');
                cy.get('button').click();
                
                cy.get('.elegibility')
                    .should('be.visible');
                cy.get('.icon-smile')
                    .should('exist');
                cy.get('span')
                    .contains('Enhorabuena, puedes optar a las placas solares!');
            })

            describe('With discount', () => {
                it('Shows discount', () => {
                    cy.get('input')
                        .type('111222');
                    cy.get('button').click();

                    cy.get('.discount-text')
                        .contains('Y además... Tienes un 12% de descuento!');
                })
            })

            describe('Without discount', () => {
                it('Discount container is not shown', () => {
                    cy.get('input')
                        .type('123456');
                    cy.get('button').click();

                    cy.get('.discount-text')
                        .should('not.exist');
                })
            })
            
        })

        describe('No elegibility', () => {
            beforeEach(() => {
                cy.get('input')
                    .type('345678');
                cy.get('button').click();
            });

            it('Shows cannot be part of rooftop revolution text', () => {
                cy.get('.no-elegibility')
                    .should('exist');
                cy.get('.icon-sad')
                    .should('exist');
                cy.get('span')
                    .contains('Lo sentimos, no puedes optar a este producto');
            })
        })
    })
  })