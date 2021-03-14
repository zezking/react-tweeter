import React from "react";
import "./NewTweet.css";

const NewTweet = () => {
  return (
    <section class="new-tweet">
      <div class="subtitle">
        <h2 id="compose-tweet-button">
          <i class="fas fa-angle-right"></i>Compose Tweet
        </h2>
      </div>
      <form method="POST" action="/tweets">
        <div class="input">
          <div class="label">
            <label for="tweet-text">What are you humming about?</label>
          </div>

          <textarea
            placeholder="say something nice!"
            name="text"
            id="tweet-text"
          ></textarea>

          <div class="button-counter">
            <button id="send-tweet">Tweet</button>
            <output
              name="counter"
              class="counter"
              for="tweet-text"
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

export default NewTweet;
