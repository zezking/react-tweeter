import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="top-nav">
      <a className="logo" href="/">
        Tweeter
      </a>
      <a className="new-tweet-button" id="new-tweet-button" href="/">
        <span>
          Write <i className="fas fa-angle-double-down"></i>
        </span>{" "}
        a new tweet
      </a>
    </nav>
  );
};

export default Navigation;
