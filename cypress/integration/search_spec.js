describe('Search Page', () => {

  beforeEach(() => {
  cy.visit('http://localhost:3000/search')
    .intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies',
    {"movies": [
      {id: 694919, title: "Money Plane", poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg", backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg", release_date: "2019-12-04", overview: "Some overview", average_rating: 6 },
      {id: 337401, title: "Mulan", poster_path: "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg", backdrop_path: "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg", release_date: "2019-12-04", overview: "Some overview", average_rating: 7 },
      {id: 718444, title: "Rogue", poster_path: "https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg", backdrop_path: "https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg", release_date: "2019-12-04", overview: "Some overview", average_rating: 8 },
      ]}
    )
  })

  it('Should be able to visit http://localhost:3000/search and render a navgivation bar with the title and nav buttons', () => {
    cy.contains('RANCID TOMATILLOS')
      .get('.all-movies-btn')
      .contains('All Movies')
      .get('.search-btn')
      .contains('Search Movies')
  });

  it('Should be directed to the main dashboard when user clicks the All Movies button', () => {
    cy.get('.all-btn').click()
      .url().should('include', '/')
  });

  it('Should allow the user to type input, and display matching movie posters below', () => {
    cy.get('input[type="text"]').type('money plane')
      .url().should('include', '/search')
      .get('.movie-card').eq(0).should('be.visible')
  });

  it('Should be able to click a movie after searching and see that movie\'s details', () => {
    cy.get('input[type="text"]').type('money plane')
      .get('.movie-card').eq(0).click()
      .url().should('include', '/movies/694919')
  });

  it('Should display an error page if the user visits a non-existant URL', () => {
    cy.visit('http://localhost:3000/incorrectURL')
      .get('h1')
      .contains('404 Error')
  });

  it('Should allow the user to use the back and forward buttons to go to a page in the viewer history', () => {
    cy.get('input[type="text"]').type('money plane')
      .get('.movie-card').eq(0).click()
      .get('.all-btn').click()
      .go('back')
      .location('pathname').should('include', '/movies/694919')
      .go('forward')
      .location('pathname').should('not.include', '/movies/694919')
  })
});
