describe('Landing Page tests', () => {
    it('Visits Landing Page', () => {
        cy.visit('http://localhost:5173');
        cy.contains('¡Súmate a la revolución de los tejados con nuestras placas solares!');
        cy.contains('Cámbiate hoy mismo y empieza a ahorrar');

        cy.get('#search-container').as('search');
        cy.get('@search').contains('Introduce a continuación tu CUPS y comprueba al instante si puedes sumarte a la revolución de los tejados');
    })

    it('Input should be empty by default, and submit button disabled', () => {
        cy.visit('http://localhost:5173');

        cy.get('input')
            .should('have.value', '');
        cy.get('button')
            .should('be.disabled');
    })

    it('If put CUPS number, submit button will be enabled', () => {
        cy.visit('http://localhost:5173');

        cy.get('input')
            .type('123444');
        cy.get('button')
            .should('be.enabled');
    })

    describe('Type incorrect CUPS number', () => {
        it('Shows error message', () => {
            cy.visit('http://localhost:5173');
    
            cy.get('input')
                .type('123444');
            cy.get('button').click();
            cy.get('#search-container')
                .should('be.visible');
            cy.get('#text-error')
                .contains('Client data with CUPS 123444 doesn\'t exist');
        })
    });

    describe('Type correct CUPS number', () => {
        beforeEach(() => {
            cy.visit('http://localhost:5173');
    
            cy.get('input')
                .type('123456');
            cy.get('button').click();
            
        });

        it('Shows data', () => {
            cy.get('#data-box')
                .should('be.visible');
        })

        it('If you click on type another CUPS number button, you return to the form', () => {
            cy.get('#data-box')
                .should('be.visible');

            cy.get('button').click();
            cy.get('#search-container')
                .should('be.visible');
        })
    });
  })