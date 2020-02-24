import React, { Component, Fragment } from "react";
import Jumbotron from "../components/Jumbotron";
import BookListItem from "../components/BookListItem";
import BookList from "../components/BookList"

class Saved extends Component {
  state = {
    savedBooks: []
  }

  render() {
    return (
      <Fragment>
        <Jumbotron />
        <div>
          <h1>Saved Page</h1>
        </div>
        <BookList>
          {this.state.savedBooks.map(book => {
            return (
              <BookListItem
                key={book.label}
                title={book.title}
                link={book.url}
                descripton={book.description}
                image={book.image}
                author={book.author}
                page_type={this.state.PageType}
              />
            );
          })}
        </BookList>
      </Fragment>
    );
  }
}

export default Saved;
