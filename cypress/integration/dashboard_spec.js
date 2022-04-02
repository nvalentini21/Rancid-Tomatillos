describe('Dashboard/AllMovies', () => {
  it('Should be able to cisit http://localhost:3000 and render a navgivation bar with the title and nav buttons', () => {
    cy.visit('http://localhost:3000')
    .contains('RANCID TOMATILLOS')
    .get('.all-movies-btn')
    .contains('All Movies')
    .get('.search-btn')
    .contains('Search Movies')
  });
});
