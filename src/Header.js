import React from "react";

const Header = (props) => {
  return (
    <header className="user-header">
      <img src={props.avatar} />

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

export default Header;
