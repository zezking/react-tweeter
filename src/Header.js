import React from "react";
import "./Header.css";
export const Header = (props) => {
  const { avatar, firstName, LastName } = props;
  return (
    <header className="user-header">
      <img src={avatar} alt="User Profile" />

      <br />
      <div className="username">
        <h2>
          <span>{firstName}</span>
          {LastName}
        </h2>
      </div>
    </header>
  );
};
