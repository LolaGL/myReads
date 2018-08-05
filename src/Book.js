import React, { Component } from 'react';

class Book extends Component {

  render () {

    /* set book-cover thumbnail image for background */
    let currentImage = this.props.book.imageLinks ?
    this.props.book.imageLinks.thumbnail : '';

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
            style={{ width: 128, height: 193,
            backgroundImage: `url("${currentImage}")` }}>
          </div>
          <div className="book-shelf-changer">

            {/* shelf options and displaying current shelf as selected */}
            <select
              onChange={(event) => this.props.changeShelf(
                this.props.book, event.target.value
              )}
              value={this.props.currentShelf}
            >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>

        {/* update title and author dynamically */}
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    );
  }
}

export default Book;
