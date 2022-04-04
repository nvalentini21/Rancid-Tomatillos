describe('Dashboard/AllMovies Page', () => {

  beforeEach(() => {
  cy.visit('http://localhost:3000')
    .intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies',
    {"movies": [
      {id: 694919, title: "Money Plane", poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg", backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg", release_date: "2019-12-04", overview: "Some overview", average_rating: 6 },
      {id: 337401, title: "Mulan", poster_path: "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg", backdrop_path: "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg", release_date: "2019-12-04", overview: "Some overview", average_rating: 7 },
      {id: 718444, title: "Rogue", poster_path: "https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg", backdrop_path: "https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg", release_date: "2019-12-04", overview: "Some overview", average_rating: 8 },
      ]}
    )
  })

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
      .get('label')
      .contains('Begin typing to search:')
  });

  it('Should be able to click a movie and see that movie\'s details', () => {
    cy.visit('http://localhost:3000')
      .get('.movie-card').eq(0).click()
      .url().should('include', '/movies/694919')
      .get('.all-btn').click()
      .get('.movie-card').eq(1).click()
      .url().should('include', '/movies/337401')
      .get('.all-btn').click()
      .get('.movie-card').eq(2).click()
      .url().should('include', '/movies/718444')
  });

  it('Should display an error page if the user visits a non-existant URL', () => {
    cy.visit('http://localhost:3000/incorrectURL')
      .get('h1')
      .contains('404 Error')
  });

  it('Should allow the user to use the back and forward buttons to go to a page in the viewer history', () => {
      cy.visit('http://localhost:3000')
      .get('.movie-card').eq(0).click()
      .get('.all-btn').click()
      .go('back')
      .location('pathname').should('include', '/movies/694919')
      .go('forward')
      .location('pathname').should('not.include', '/movies/694919')
  })
});
