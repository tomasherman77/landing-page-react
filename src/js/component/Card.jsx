import React from "react";

function CardComponent() {
  return (
    <div className="card" style={{ width: '18rem' }}>
        <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png" alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  );
}

export default CardComponent;