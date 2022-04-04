describe('Single Movie Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/movies/694919');
    cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/694919',
      {
          "movie": {
          "id": 694919,
          "title": "Money Plane",
          "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
          "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
          "release_date": "2020-09-29",
          "overview": "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
          "genres": [
          "Action"
          ],
          "budget": 0,
          "revenue": 0,
          "runtime": 83,
          "tagline": "",
          "average_rating": 7.428571428571429
          }
        }
      )
  });

  it('Should be able to visit http://localhost:3000/movies/694919 and render the movie details page', () => {
    cy.contains('RANCID TOMATILLOS')
      .get('.all-movies-btn')
      .contains('All Movies')
      .get('.search-btn')
      .contains('Search Movies')
  });

  it('Should be able to visit http://localhost:3000/movies/694919 and see the movie title, Runtime, and Release date', () => {
    cy.get('.poster-div').contains('Money Plane')
      .get('img').should('be.visible')
      .get('.runtime').contains('Runtime: 82 minutes')
      .get('.release').contains('Date Released: Sep 28 2020')
  });

  it('Should be able to visit http://localhost:3000/movies/694919 and see the movies Genres, Overview, Rating, Revenue, and Budget', () => {
    cy.get('.description-div').contains('Genres: Action')
      .get('.overview-title').contains('Overview')
      .get('.overview-summary').contains(`A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.`)
      .get('.average-rating').contains('Average Rating: 6.9 / 10')
      .get('.revenue').contains('Not available.')
      .get('.budget').contains('Not available.')
  });

  it('Should be directed to the main dashboard when user clicks the All Movies button', () => {
    cy.get('.all-btn').click()
      .url().should('include', '/')
      .get('h1').contains('RANCID TOMATILLOS')
  });

  it('Should be directed to the search form page when user clicks the Search button', () => {
    cy.get('.search-btn').click()
      .url().should('include', '/search')
      .get('label')
      .contains('Begin typing to search')
  });
});
