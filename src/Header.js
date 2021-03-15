import React from "react";
import "./Header.css";
export const Header = (props) => {
  return (
    <header className="user-header">
      <img src={props.avatar} alt="User Profile" />

      <br />
      <div className="username">
        <h2>
          <span>{props.firstName}</span>
          {props.LastName}
        </h2>
      </div>
    </header>
  );
};
