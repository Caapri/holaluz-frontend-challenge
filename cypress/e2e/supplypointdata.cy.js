describe('SupplyPointData component tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173');

        cy.get('input')
            .type('234567');
        cy.get('button').click();
    });

    it('Shows supply point data container', () => {
        cy.get('.data-supplypoint-container')
            .should('be.visible');
    })

    describe('Shows supply point data details', () => {
        it('Shows tariff', () => {
            cy.get('.tariff')
                .contains('Tarifa Two prices');
        })

        it('Shows power', () => {
            cy.get('.power')
                .should('exist');
            cy.get('.title')
                .contains('Potencia contratada:');
            cy.get('.p1')
                .contains('P1: 5 kW');
            cy.get('.p2')
                .contains('P2: 4.8 kW');
        })

        it('Shows invoiced amount', () => {
            cy.get('.amount')
                .should('exist');
            cy.get('.amount-title')
                .contains('Importe facturado');
            cy.get('.invoiced-amount')
                .contains('45.00 €');
        })
    })
  })