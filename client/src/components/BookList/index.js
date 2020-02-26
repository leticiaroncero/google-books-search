import React from "react";

function BookList({ children }) {
    return (
        <div>
            <ul>{children}</ul>
        </div>
    );
}

export default BookList;