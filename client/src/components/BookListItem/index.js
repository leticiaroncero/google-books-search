import React from "react";

function saveButton(props) {
    if (props.page_type === "search") {
        return <button>Save</button>
    } else {
        return <button>Delete</button>
    }
}

function BookListItem(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.author}</p>
            <div>
                <img src={props.image} alt={props.title} />
                <p>{props.descripton}</p>
            </div>
            <button>View</button>
            {saveButton(props)}
        </div>

    );
}

export default BookListItem;
