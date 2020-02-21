import React, { Component } from "react";
//import Jumbotron from "../Jumbotron";
import Input from "../Input";
import Button from "../Button";

class Search extends Component {
    state = {
      books: [],
      bookSearch: ""
    };



    render() {
        return (
          <div>
            {/* <Jumbotron /> */}
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
                  {/* {!this.state.books.length ? (
                    <h1 className="text-center">No Books to Display</h1>
                  ) : (
                      <BookList>
                        {this.state.books.map(data => {
                          return (
                            <BookListItem
                              key={data.book.label}
                              title={data.book.title}
                              link={data.book.url}
                              descripton={data.book.description}
                              image={data.book.image}
                            />
                          );
                        })}
                      </BookList>
                    )} */}
                </div>
              </div>
              </div>
          </div>
        );
      }
    }

    
    export default Search;