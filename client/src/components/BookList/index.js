import React from "react";

function BookList({ children }) {
    return (
        <div>
            <h3>Book Search</h3>
            <ul>{children}</ul>
        </div>
    );
}

export default BookList;