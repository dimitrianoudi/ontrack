import React, { Component } from 'react';
import Books from './components/books';
import './App.css';


class App extends Component {

  constructor() {
    super();

    this.state = {
        books: [ ],
        total: null,
        per_page: null,
        current_page: null
    }
  }

componentDidMount() { 

    fetch('http://nyx.vima.ekt.gr:3000/api/books', {
      method: 'POST',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(res => res.json())
      .then(result => this.setState({ books: result.books }))

}

render() {
    return (
          <Books books={this.state.books} />
        )
      }
}

export default App;