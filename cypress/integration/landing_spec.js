describe('Landing Page User Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('should be able to visit the url', () => {
    cy.url()
      .should('eq', 'http://localhost:3000/');
  });

  it('should see a title', () => {
    cy.get('.nav')
      .get('.title')
      .contains('Welcome to Quotelandia')
      .should('be.visible')
  });

  it('should be able to see a button to view a quote on the nav', () => {
    cy.get('.nav-btns-container')
      .get('.left-side-btn')
      .contains('See Quotes')
      .click()
      .should('be.visible')
  });

  it('should be able to see a button to go to an author search on the nav', () => {
    cy.get('.nav-btns-container')
      .get('.right-side-btn')
      .contains('Search By Author')
      .click()
      .should('be.visible')
  });

  it('should see a greeting message beneath the buttons', () => {
    cy.get('.about-msg')
      .get('.greeting-msg')
      .contains('the special land for words...')
      .should('be.visible')
  })

  it('should see a background image', () => {
      cy.get('.background-img')
        .should('be.visible')
  })
})