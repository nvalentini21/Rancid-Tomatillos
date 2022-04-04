describe('Single Movie Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/movies/694919');
  });

  it('Should be able to visit http://localhost:3000/movies/694919 and render the movie details page', () => {
    cy.visit('http://localhost:3000/movies/694919')
      .contains('RANCID TOMATILLOS')
      .get('.all-movies-btn')
      .contains('All Movies')
      .get('.search-btn')
      .contains('Search Movies')
  });

  it('Should be able to visit http://localhost:3000/movies/694919 and see the movie title, Runtime, and Release date', () => {
    cy.visit('http://localhost:3000/movies/694919')
    .get('.poster-div')
    .contains('Money Plane')
    .get('img').should('be.visible')
  });

  it('Should be able to visit http://localhost:3000/movies/69491 and see the movies Genres, Overview, Rating, Revenue, and Budget', () => {
    cy.visit('http://localhost:3000/movies/694919')
    .get('.description-div')
    .contains('Genres: Action')
  });

  it('Should be directed to the main dashboard when user clicks the All Movies button', () => {
      cy.visit('http://localhost:3000/movies/694919')
      .get('.all-btn').click()
      .url().should('include', '/')
  });


  it('Should be directed to the search form page when user clicks the Search button', () => {
    cy.visit('http://localhost:3000')
      .get('.search-btn').click()
      .url().should('include', '/search')
      .get('h1')
      .contains('404 Error')
  });


  it('Should display an error page if the user visits a non-existant URL', () => {
    cy.visit('http://localhost:3000/incorrectURL')
      .get('h1')
      .contains('404 Error')
  });
});
