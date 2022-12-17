describe('Perform google search', () => {
    
    it('Will be passed', { tags: ['smoke'] }, () => {
      cy.visit('https://www.google.com/')
      cy.get('input[name="q"]').type('ABC{enter}')
      cy.get('h3').contains('ABC').should('exist')
    });
  });
  