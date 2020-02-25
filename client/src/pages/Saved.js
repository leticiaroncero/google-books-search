import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import BookList from "../components/BookList";
import BookListItem from "../components/BookListItem";
import axios from "axios";

class Saved extends Component {
    state = {
        books: [],
        PageType: "saved"

    };
    componentDidMount() {
        this.getsavedbooks()
    }

    getsavedbooks = () => {

        console.log("submit getsavedbooks")
        axios.get("/api/books")
            .then(res => {
                //console.log(res.data.items)
                console.log(res.data)
                this.setState({ books: res.data })

            }
            ).catch(err => console.log(err));

    };
    handledelete = book => {
        console.log("handledelete:", book)
        console.log(this.state.books)

        axios.delete("/api/books/" + book)
            .then(result => {
                console.log(result)
                this.getsavedbooks()
            })

    };
    render() {
        return (
            <div>

                <Jumbotron />
                <div>
                    <h1>Saved Page</h1>
                </div>
                <BookList>
                    {this.state.books.map(book => {
                        return (
                            <BookListItem
                                key={book._id}
                                id={book._id}
                                title={book.title}
                                link={book.link}
                                description={book.description}
                                image={book.image}
                                author={book.author}
                                page_type={this.state.PageType}
                                handledelete={this.handledelete}

                            />
                        );
                    })}
                </BookList>


            </div>
        );
    }
}


export default Saved;