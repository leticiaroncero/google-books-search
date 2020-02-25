import React from "react";




function saveButton(props) {
    console.log(props)
    if (props.page_type === "search") {
        return <button className="list-button" onClick={() => props.handlesave(props.id)}>Save</button>
    } else {
        return <button className="list-button" onClick={() => props.handledelete(props.id)}>Delete</button>
    }
}

function BookListItem(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.author}</p>
            <div>
                <img src={props.image}  alt={props.title} />
                <p>{props.descripton}</p>
                <a target="-blank" href={props.link}>Go to the book</a>
            </div>
            <button>View</button>
            {saveButton(props)}
        </div>

    );
}

export default BookListItem;
