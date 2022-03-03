describe('Landing Page User Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('should be able to visit the url', () => {
    cy.url()
      .should('eq', 'http://localhost:3000/');
  });


})