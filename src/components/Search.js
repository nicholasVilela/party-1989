import React, { Component } from 'react'
import Fuse from 'fuse.js'
import Axios from 'axios';
import Movie from './Movie'

class Search extends Component {
  state = {
    movies: [],
    filteredMovies: []
  }

  componentDidMount = () => {
    Axios.get('https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=69c1a45744d9a7753c8d244cd65b2c65')
        .then(res => {
            this.setState({
                movies: res.data.results,
                filteredMovies: res.data.results
            })
        })
  }

  search = (event) => {
    const options = {
      keys: ['title']
    }

    const fuse = new Fuse(this.state.movies, options)

    const result = fuse.search(event.target.value)

    if (!event.target.value) {
      this.setState({
        filteredMovies: this.state.movies
      })
    }
    else {
      this.setState({
        filteredMovies: result
      })
    }
  }

  render = () => {
    return (
      <div>
        <input id="search-bar" type="text" placeholder="Search..." onChange={this.search} />
        
        <ul>
          {this.state.filteredMovies.map(movie => {
            return <Movie  name={movie.title} 
              img={movie.poster_path} 
              summary={movie.overview} />
          })}
        </ul>
      </div>
    )
  }
}

export default Search
