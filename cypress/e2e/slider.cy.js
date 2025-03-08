describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper back and forth', function () {
  it('Checks if navigation allows moving back and forth', function () {
    cy.visit('http://localhost:3000');
    
    // Move from Rome to London
    cy.get('.swiper-button-next').click();
    cy.wait(1000);
    cy.get('.swiper-slide-active').should('contain', 'London');
    
    // Move from London to Paris
    cy.get('.swiper-button-next').click();
    cy.wait(1000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
    
    // Move back to London
    cy.get('.swiper-button-prev').click();
    cy.wait(1000);
    cy.get('.swiper-slide-active').should('contain', 'London');
    
    // Move back to Rome
    cy.get('.swiper-button-prev').click();
    cy.wait(1000);
    cy.get('.swiper-slide-active').should('contain', 'Rome');
  });
});