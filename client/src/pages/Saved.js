import React, { Fragment } from "react";
import NavTabs from "./components/NavTabs/index";
import Jumbotron from "./components/Jumbotron/index";
import BookListItem from "./components/BookList/index";
import BookList from "./components/BookList/index"

function Saved() {
  return (
    <Fragment>
      <NavTabs />
      <Jumbotron />
      <div>
        <h1>Saved Page</h1>
      </div>
      <BookList>
        {this.state.books.map(book => {
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

export default Saved;
