import React from "react";
import "../styles/Section.css";

// By importing the Section.css file, it is added to the DOM whenever this component loads
  const FriendCard = props => (
    <div className="card" onClick={props.friendClick}>
      <div className="img-container">
        <img alt={props.id} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
        </ul>
      </div>
    </div>
  );

export default FriendCard;
