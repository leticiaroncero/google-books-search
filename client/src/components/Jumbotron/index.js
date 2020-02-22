import React, { Fragment } from "react";
import "./index.css"

function jumbotron() {
    return(
        <Fragment>
    <div className="jumbotron jumbotron-fluid">
    <div className="container">
    <h1 className="display-4">Google Books Search</h1>
   <p className="lead"> Search for any book to see details on that book
    </p>
</div>
</div>
</Fragment>
);
}

export default jumbotron;