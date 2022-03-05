describe('Error Flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://type.fit/api/quotes', {statusCode: 500});
    cy.visit('http://localhost:3000/');
  });

  it('should show an error message if a 500 error occurs', () => {
    cy.contains('Oops, something is amiss! Please return home.');
  });

  it('should show an error if a 404 error occurs', () => {
    cy.intercept('GET', 'https://type.fit/api/quotes', {statusCode: 404});
    cy.visit('http://localhost:3000/999999999999999');
    cy.contains('Oops, something is amiss! Please return home.');
  });
});