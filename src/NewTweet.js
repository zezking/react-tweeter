import React, { useState } from "react";
import "./NewTweet.css";

export const NewTweet = (props) => {
  const { addNewTweet } = props;
  const [tweetText, setTweetText] = useState("");
  const tweetRemainingLength = 140 - tweetText.length;
  const spanStyle = { color: tweetRemainingLength > 0 ? "black" : "red" };
  const submitTweet = (event) => {
    event.preventDefault();

    if (tweetRemainingLength >= 0 && tweetRemainingLength < 140) {
      addNewTweet(tweetText);
      setTweetText("");
    }
  };
  return (
    <section className="new-tweet">
      <div className="subtitle">
        <h2 id="compose-tweet-button">
          <i className="fas fa-angle-right"></i>Compose Tweet
        </h2>
      </div>
      <form onSubmit={submitTweet} method="POST" action="/tweets">
        <div className="input">
          <div className="label">
            <label htmlFor="tweet-text">What are you humming about?</label>
          </div>

          <textarea
            value={tweetText}
            onChange={(event) => setTweetText(event.target.value)}
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
              <span style={spanStyle}>{140 - tweetText.length}</span>
            </output>
          </div>
        </div>
      </form>
    </section>
  );
};
