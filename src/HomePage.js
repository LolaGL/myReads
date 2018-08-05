import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

class HomePage extends Component {


  render () {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>

            {/* shelf 1: currently reading */}
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {
                  this.props.books
                  /* filter currently reading books */
                  .filter(book => book.shelf === 'currentlyReading')
                  /* display them as list items in book component */
                  .map(book => (
                    <li key={book.id} >
                      <Book
                        book={book}
                        moveShelf={this.props.moveShelf}
                        currentShelf="currentlyReading"
                      />
                    </li>
                  ))
                }
                </ol>
              </div>
            </div>

            {/* shelf 2: want to read */}
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {
                    this.props.books
                    .filter(book => book.shelf === 'wantToRead')
                    .map(book => (
                      <li key={book.id} >
                        <Book
                          book={book}
                          moveShelf={this.props.moveShelf}
                          currentShelf="wantToRead"
                        />
                      </li>
                    ))
                  }
                </ol>
              </div>
            </div>

            {/* shelf 3: read */}
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {
                  this.props.books
                  .filter(book => book.shelf === 'read')
                  .map(book => (
                    <li key={book.id} >
                      <Book
                        book={book}
                        moveShelf={this.props.moveShelf}
                        currentShelf="read"
                      />
                    </li>
                  ))
                }
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* search button and link */}
        <div className="open-search">
          <Link
            to="/search"
          >Add a book
          </Link>
        </div>


      </div>
    );
  }
}

export default HomePage;
