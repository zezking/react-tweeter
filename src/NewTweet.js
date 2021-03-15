import React from "react";
import "./NewTweet.css";

export const NewTweet = () => {
  return (
    <section className="new-tweet">
      <div className="subtitle">
        <h2 id="compose-tweet-button">
          <i className="fas fa-angle-right"></i>Compose Tweet
        </h2>
      </div>
      <form method="POST" action="/tweets">
        <div className="input">
          <div className="label">
            <label htmlFor="tweet-text">What are you humming about?</label>
          </div>

          <textarea
            placeholder="say something nice!"
            name="text"
            id="tweet-text"
          ></textarea>

          <div className="button-counter">
            <button id="send-tweet">Tweet</button>
            <output
              name="counter"
              className="counter"
              htmlFor="tweet-text"
              id="counter"
            >
              140
            </output>
          </div>
        </div>
      </form>
    </section>
  );
};
