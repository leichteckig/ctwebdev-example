describe('Finding this session in c\'t webdev\'s schedule', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should find this session', () => {
        // Navigate to schedule
        cy.get('#navlinks').should('be.visible');
        cy.contains('#navlinks a', 'Programm').click();

        // Find this session
        cy.get('#slot-145').scrollIntoView();
        cy.contains('#slot-145', 'End-to-end Testing wie es sein sollte')
            .should('be.visible');

        // Inspect this session
        cy.get('#link-slot-145').click();
        cy.get('#overlayContent > article').should('be.visible');
        cy.get('#overlayContent h1').contains('End-to-end Testing wie es sein sollte');
    });
});
