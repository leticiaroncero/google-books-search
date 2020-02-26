import React from "react";
import "./index.css"



function saveButton(props) {
    console.log(props)
    if (props.page_type === "search") {
        return <button type="button" className="list-button btn btn-primary" onClick={() => props.handlesave(props.id)}>Save</button>
    } else {
        return <button type="button" className="list-button btn btn-primary" onClick={() => props.handledelete(props.id)}>Delete</button>
    }
}

function BookListItem(props) {
    return (
        <div className="pt-4 pb-4 pr-3 booklist-item">
            <div className="pl-3 title">
                <h3 >{props.title}</h3>
                <p>{props.author}</p>
            </div>
            <div className="main-container">
                <div className="media">
                    <img align-self-start mr-3 src={props.image || "http://lgimages.s3.amazonaws.com/nc-sm.gif"} alt={props.title} />
                    <div className="media-body">
                        <p>{props.description}</p>
                    </div>
                </div>
                <div className="buttons">
                    <a target="_blank" rel="noopener noreferrer" href={props.link}><button type="button" className="btn btn-primary">View</button></a>
                    {saveButton(props)}
                </div>
            </div>
        </div>

    );
}

export default BookListItem;
