describe('All Quotes User Flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://type.fit/api/quotes', {fixture: "quotes.json"})
      .visit('http://localhost:3000/')
      .get('.left-side-btn')
      .click()
      .visit('http://localhost:3000/quotes')
  });

  it('should be able to visit the url', () => {
    cy.url()
      .should('eq', 'http://localhost:3000/');
  });

   it('should see a title', () => {
    cy.get('.nav')
      .get('.title')
      .contains('Welcome to Quotelandia')
      .should('be.visible');
  });

  it('should be able to see a button to view a quote on the nav', () => {
    cy.get('.nav-btns-container')
      .get('.left-side-btn')
      .contains('Quotes')
       .should('be.visible')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/quotes');
  });

  it('should be able to see a button to go to an author search on the nav', () => {
    cy.get('.nav-btns-container')
      .get('.right-side-btn')
      .contains('Search')
      .should('be.visible')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/search');
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

  it('should see all quotes from fixture collection visible when quotes page loads', () => {
    cy.get('.quotes-container > :nth-child(6)')
      .should('have.length', 1)
      .should('be.visible');
  });

  it('should see on a quote\'s text on the quote card', () => {
    cy.get('.quotes-container > :nth-child(1)')
      .get(':nth-child(1) > h3')
      .contains('Genius is one percent inspiration and ninety-nine percent perspiration.')
      .should('be.visible');
  });

  it('should see a quote\'s author on the quote card', () => {
    cy.get('.quotes-container > :nth-child(1)')
      .get(':nth-child(1) > p')
      .contains('Thomas Edison')
      .should('be.visible');
  });
});


