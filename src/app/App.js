import React, { Component } from 'react';
import Movies from '../dashboard/Movies';
import Movie from '../singleMovie/Movie';
import Nav from '../dashboard/Nav';
import NoMatch from '../common/NoMatch';
import Search from '../search/Search';
import fetchCalls from '../common/apiCalls'
import './App.css';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies:[],
    }
  }

componentDidMount = () => {
  fetchCalls.fetchData('movies')
    .then(data => {
      this.setState({movies: data.movies})
    })
  }

  render() {
    return (
      <main className='App'>
        <Route path="/"
          render={() => <Nav showAllMovies={this.showAllMovies}/>}
        />
        <Switch>
          <Route exact path="/"
            render={() => <Movies movies={this.state.movies}/> }
          />
          <Route exact path="/movies/:id"
            render={({match}) => <Movie id={match.params.id} />}
          />
          <Route exact path="/search"
            render={() => <Search />}
          />
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        <section className="footer">
        <p>Site created by: Nicole Valentini</p>
        <p>Turing School of Software and Design 2022</p>
        </section>
      </main>
    )
  }
}

export default App;
