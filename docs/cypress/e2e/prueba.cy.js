describe('Página La Cienega', () => {
  it('Carga correctamente', () => {
    cy.visit('http://127.0.0.1:8080/index.html');
cy.contains('Pruebas Funcionales', { timeout: 10000 }).should('be.visible');
    cy.get('.card', { timeout: 10000 }).should('have.length.at.least', 3);
  });
});
