import React from 'react';
import { Route } from 'react-router-dom'
import SearchPage from './SearchPage';
import HomePage from './HomePage';
import * as BooksAPI from './BooksAPI'
import './App.css';

/* empty array for list of books */
class BooksApp extends React.Component {
  state = {
    books: []
  }

  /* component is created and redered, books data is fetched */
  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  /* update array data when a book is moved to different shelf */
  changeShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    const books = await BooksAPI.getAll();
    this.setState({ books });
  }

  /* render component */
  render() {
    return (
      <div className="app">

        {/* route component for URL */}
        <Route path="/search" render={() => (
          <SearchPage
            books={this.state.books}
            changeShelf={this.changeShelf}
          />
          )}
        />

        <Route exact path="/" render={() => (
          <HomePage
            books={this.state.books}
            changeShelf={this.changeShelf}
          />
          )}
        />
      </div>
    )
  }

}

export default BooksApp
