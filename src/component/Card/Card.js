import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ data }) => {
  // console.log(data);
  const { id, logo, total, name } = data;
  return (
    <div className="col-lg-5 col-md-5 col-sm-10 col-12 m-2">
      <div id="card-items" className="card text-white p-3">
        <img className="card-img-top w-50 m-auto" src={logo} alt="Card" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text text-white-50">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <h5>Total: {total}</h5>
          <Link to={`/question/${id}`}>
            <button className="btn btn-warning fw-bold hover-text-white w-25">
              Start Quiz
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
