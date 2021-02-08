/* eslint-disable no-undef */
describe('Cypress', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Winner: X is working', () => {
    cy.get('.square').eq(0).click();
    cy.get('.square').eq(0).should('contain', 'X');

    cy.get('.square').eq(1).click();
    cy.get('.square').eq(1).should('contain', 'O');

    cy.get('.square').eq(4).click();
    cy.get('.square').eq(4).should('contain', 'X');

    cy.get('.square').eq(5).click();
    cy.get('.square').eq(5).should('contain', 'O');

    cy.get('.square').eq(8).click();
    cy.get('.square').eq(8).should('contain', 'X');

    cy.get('.game-info').should('contain', 'Winner: X');
  });

  it('Draw is working', () => {
    cy.get('.square').eq(0).click();
    cy.get('.square').eq(0).should('contain', 'X');

    cy.get('.square').eq(1).click();
    cy.get('.square').eq(1).should('contain', 'O');

    cy.get('.square').eq(2).click();
    cy.get('.square').eq(2).should('contain', 'X');

    cy.get('.square').eq(4).click();
    cy.get('.square').eq(4).should('contain', 'O');

    cy.get('.square').eq(3).click();
    cy.get('.square').eq(3).should('contain', 'X');

    cy.get('.square').eq(5).click();
    cy.get('.square').eq(5).should('contain', 'O');

    cy.get('.square').eq(7).click();
    cy.get('.square').eq(7).should('contain', 'X');

    cy.get('.square').eq(6).click();
    cy.get('.square').eq(6).should('contain', 'O');

    cy.get('.square').eq(8).click();
    cy.get('.square').eq(8).should('contain', 'X');

    cy.get('.game-info').should('not.contain', 'Winner:');
    cy.get('.game-info').should('contain', 'Draw');
  });
});
