describe('Perform google search', () => {
    
    it('Will be failed', { tags: ['smoke'] }, () => {
      cy.visit('https://www.google.com/')
      cy.get('input[name="q"]').type('ABC{enter}')
      cy.get('h2').contains('ABC Songs for Children - 13 Alphabet Songs & 26 Videos').should('exist')
    });
  });
  