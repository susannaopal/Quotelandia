describe('All Quotes User Flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://type.fit/api/quotes', {fixture: "single_quote.json"})
      .visit('http://localhost:3000/search');
  });
   it('should see a title', () => {
    cy.get('.nav')
      .get('.title')
      .contains('Welcome to Quotelandia')
      .should('be.visible');
  });

  it('should be able to see a button to visit a page to view all quotes on the nav', () => {
    cy.get('.nav-btns-container')
      .get('.left-side-btn')
      .contains('Quotes')
       .should('be.visible')
      .click();
  });

  it('should see an about message on the nav', () => {
    cy.get('.nav')
      .get('.about-msg-div')
      .get('.greeting-msg')
      .contains('a land for words...')
      .should('be.visible');
  });

  it('should see a return home button below the nav at the top of the page', () => {
    cy.get('.home-btn')
      .contains('Return Home')
      .should('be.visible');
  });

  it('should see a search section on the page', () => {
    cy.get('.search-section')
      .should('be.visible');
  });

  it('should see an about sentence for the search', () => {
    cy.get('.search-title')
    .contains('Search below to see if your favorite author lives in Quotelandia...')
    .should('be.visible');
  });

  it('should see a search bar and be able to search for a specific author by name in lower or uppercase lettering', () => {
    cy.get('.search-bar-input')
      .type('Anne Lamott')
      .get('.submit-btn')
      .click()
      .get('.quote-card')
      .should('be.visible');
  });
});