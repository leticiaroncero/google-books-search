import React, { Component, Fragment } from "react";
import Jumbotron from "../components/Jumbotron";
import BookListItem from "../components/BookListItem";
import BookList from "../components/BookList"
import axios from "axios";

class Saved extends Component {
  state = {
    savedBooks: [],
    PageType: "saved"
  }

  componentDidMount() {
    axios.get("/api/books")
    .then(res => {
      console.log(res.data)
      this.setState({savedBooks: res.data})
    }).catch(err => console.log(err));
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
                key={book._id}
                title={book.title}
                link={book.link}
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
