import React from 'react';
import './App.css';
import MoviesList from './MoviesList';
import { v4 as uuidv4 } from 'uuid';

const moviesData = [
  { 'hasOscars': false, 'title': 'The Shawshank Redemption', 'director': 'Frank Darabont', 'rate': '9.3', 'id': 0 },
  { 'hasOscars': true, 'title': 'The Godfather', 'director': 'Francis Ford Coppola', 'rate': '9.2', 'id': 1 },
  { 'hasOscars': true, 'title': 'The Godfather: Part II', 'director': 'Francis Ford Coppola', 'rate': '9.0', 'id': 2 },
  { 'hasOscars': true, 'title': 'The Dark Knight', 'director': 'Christopher Nolan', 'rate': '9.0', 'id': 3 },
  { 'hasOscars': false, 'title': '12 Angry Men', 'director': 'Sidney Lumet', 'rate': '8.9', 'id': 4 }
];

class App extends React.Component {

  state = {
    movies: moviesData,
    title: 'Star Wars',
    director: '',
    hasOscars: false
    // movies: []
  }

  handleTitleChange = event => {
    console.log(event.target.value);
    this.setState({
      title: event.target.value
    })
  }

  handleDirectorChange = event => {
    console.log(event.target.value);
    this.setState({
      director: event.target.value
    })
  }

  handleChange = event => {
    // console.log(event.target.value);
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    // console.log(name);
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  // handleOscarsChange = event => {
  //   console.log(event.target.checked);
  //   this.setState({
  //     hasOscars: event.target.checked
  //   })
  // }

  handleSubmit = event => {
    event.preventDefault();
    const { title, director, hasOscars } = this.state;
    const newMovie = {
      title,
      director,
      hasOscars,
      id: uuidv4()
    }
    // console.log(newMovie);
    this.setState((state) => ({
      movies: [newMovie, ...state.movies],
      title: '',
      director: '',
      hasOscars: false
    }))
  }

  render() {
    return (
      <div className='App'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            id="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <label htmlFor="director">Director: </label>
          <input
            type="text"
            name="director"
            id="director"
            value={this.state.director}
            onChange={this.handleChange}
          />
          <label htmlFor="hasOscars">Oscar ? </label>
          <input
            type="checkbox"
            name="hasOscars"
            id="hasOscars"
            checked={this.state.hasOscars}
            onChange={this.handleChange}
          />
          <button type="submit">Add a movie</button>
        </form>
        <h1>Movies</h1>

        {/* // if length of movies is 0 then show an h2 no movies ... */}
        {this.state.movies.length === 0 && <h2>No movies to display 🙃</h2>}

        <MoviesList movies={this.state.movies} />
      </div>
    )
  }
}

export default App;
