import React from "react";
import "../containers/Card.css";

const Card = (props) => {
  const { name, email, id } = props;
  return (
    <div className="container">
      <div className="cardItem">
        <img
          alt="robots"
          src={`https://robohash.org/${id}?size=200x200`}
          className="material-icons"
        />
        <div className="cardLabel">{name}</div>
        <div className="cardEmail">{email}</div>
      </div>
    </div>
  );
};

export default Card;
