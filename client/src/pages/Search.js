import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Input from "../components/Input";
import Button from "../components/Button";
import BookList from "../components/BookList";
import BookListItem from "../components/BookListItem";
import axios from "axios";

class Search extends Component {
    state = {
      books: [],
      bookSearch: "",
      PageType: "search"
      
    };

    handleInputChange = event => {
      console.log(event)
      const { name, value } = event.target;
      this.setState({
        [name] : value
      });
    };

    handleFormSubmit = event => {
      event.preventDefault();
      console.log("submit clicked")
      axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.bookSearch)
      .then(res =>
        //console.log(res.data.items)
        this.setState({books: res.data.items})
      ).catch(err => console.log(err));
      
    }; 
  handlesave = book => {
    console.log("handlesave:", book)
    console.log(this.state.books)
      const savedBook= this.state.books.filter(elem=>elem.id === book)
      console.log("savebbook:",savedBook)
      const booktobeSaved = {
          
          title: savedBook[0].volumeInfo.title,
          author: savedBook[0].volumeInfo.authors[0],
          description: savedBook[0].volumeInfo.description,
          image: savedBook[0].volumeInfo.imageLinks.thumbnail,
          link: savedBook[0].volumeInfo.previewLink,
          googleId: savedBook[0].id
   }
      axios.post("/api/books", booktobeSaved)
      .then(result=>{
        console.log(result)
        const nosaved= this.state.books.filter(elem=>elem.id !== result.data.googleId)
        this.setState({books: nosaved})
      })
  };
    render() {
        return (
          <div>
            <Jumbotron />
            <div className= "wrapper">
              <div className="row">
              <div className="col-md-12">
                  <form>
                  <div className= "container">
                      <div className="row">
                        <div className="xs-9 sm-10">
                          <Input
                            name="bookSearch"
                            value={this.state.bookSearch}
                            onChange={this.handleInputChange}
                            placeholder="Search For a Book"
                          />
                        </div>
                        <div className="xs-3 sm-2">
                          <Button
                            onClick={this.handleFormSubmit}
                            type="success"
                            className="input-lg"
                          >
                            Search
                          </Button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                </div>
              <div className="row">
                <div className="xs-12">
                  {!this.state.books.length ? (
                    <h1 className="text-center">No Books to Display</h1>
                  ) : (
                      <BookList>
                        {this.state.books.map(book => {
                          return (
                            <BookListItem
                              key={book.id}
                              id={book.id}
                              title={book.volumeInfo.title}
                              link={book.volumeInfo.previewLink}
                              description={book.volumeInfo.description}
                              image ={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null}
                              author={book.volumeInfo.authors}
                              page_type={this.state.PageType}
                              handlesave={this.handlesave}

                            />
                          );
                        })}
                      </BookList>
                    )}
                </div>
              </div>
              </div>
          </div>
        );
      }
    }

    
    export default Search;