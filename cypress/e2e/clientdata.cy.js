describe('ClientData component tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173');

        cy.get('input')
            .type('234567');
        cy.get('button').click();
    });

    it('Shows client data container', () => {
        cy.get('.data-client-container')
            .should('be.visible');
    })

    describe('Shows client data details', () => {
        it('Shows name', () => {
            cy.get('h1')
                .contains('Hola Glenda Gilbert');
        })

        it('Shows address', () => {
            cy.get('.address-icon')
                .should('exist');
            cy.get('span')
                .contains('Estás en Potato street, 9');
        })

        it('Shows CUPS number', () => {
            cy.get('h4')
                .contains('CUPS: 234567');
        })
    })
  })