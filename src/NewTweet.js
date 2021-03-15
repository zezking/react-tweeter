import React, { useState } from "react";
import "./NewTweet.css";

export const NewTweet = () => {
  const [tweetText, setTweetText] = useState("Hello Please type something");
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
              {140 - tweetText.length}
            </output>
          </div>
        </div>
      </form>
    </section>
  );
};
