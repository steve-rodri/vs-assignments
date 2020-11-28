import React from "react";
import "./Badge.css";

const Badge = (props) => {
  const phoneNumber = () => {
    const { phone } = props;
    const numbers = phone.split("");
    if (numbers.length === 7) {
      numbers.splice(3, 0, "-");
    } else if (numbers.length === 10) {
      numbers.splice(3, 0, "-");
      numbers.splice(7, 0, "-");
    }
    return numbers.join("");
  };
  return (
    <div className="Badge">
      <header>
        <h2>Badge:</h2>
      </header>
      <main>
        <p>Name: {`${props.firstName} ${props.lastName}`}</p>
        <p>
          Phone: <a href={`tel:${props.phone}`}>{phoneNumber()}</a>
        </p>
        <p>Place of birth: {props.placeOfBirth}</p>
        <p>Favorite food: {props.favoriteFood}</p>
        <p>Email: {props.email}</p>
        <div className="bio">
          <p>{props.bio}</p>
        </div>
      </main>
    </div>
  );
};

export default Badge;
