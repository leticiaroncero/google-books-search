import React from "react";
import "./index.css";


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
                <p>{props.description}</p>

                <a target="_blank" href={props.link}><button>View</button></a>
            </div>
            
            {saveButton(props)}
        </div>

    );
}

export default BookListItem;
