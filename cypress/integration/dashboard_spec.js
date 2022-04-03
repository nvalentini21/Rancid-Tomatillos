describe('Dashboard/AllMovies', () => {

  it('Should be able to visit http://localhost:3000 and render a navgivation bar with the title and nav buttons', () => {
    cy.visit('http://localhost:3000')
      .contains('RANCID TOMATILLOS')
      .get('.all-movies-btn')
      .contains('All Movies')
      .get('.search-btn')
      .contains('Search Movies')
  });

  it('Should be able to visit http://localhost:3000 and see an all movies section', () => {
    cy.visit('http://localhost:3000')
    .contains('All Movies')
  });

  it('Should be directed to the main dashboard when user clicks the All Movies button', () => {
    cy.visit('http://localhost:3000')
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

  it('Should be able to get all movies', () => {
    cy.visit('http://localhost:3000')
    cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      {"movies": [
        {id: 1, title: "Test Movie 1", poster_path: "someURL", backdrop_path: "someURL", release_date: "2019-12-04", overview: "Some overview", average_rating: 6 },
        {id: 2, title: "Test Movie 2", poster_path: "someURL2", backdrop_path: "someURL2", release_date: "2019-12-04", overview: "Some overview", average_rating: 7 },
        {id: 3, title: "Test Movie 3", poster_path: "someURL3", backdrop_path: "someURL3", release_date: "2019-12-04", overview: "Some overview", average_rating: 8 },
        ]}
      )
      .url().should('include', '/')
  });

  it('Should be able to click a movie and see that movie\'s details', () => {
    cy.visit('http://localhost:3000')
      .get('.movie-card').eq(0).click()
      .url().should('include', '/movies/')
  });

  it('Should display an error page if the user visits a non-existant URL', () => {
    cy.visit('http://localhost:3000/incorrectURL')
      .get('h1')
      .contains('404 Error')
  });
});
