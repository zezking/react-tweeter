import React from "react";
import "./tweetFeedCard.css";
const TweetFeedCard = (props) => {
  return (
    <article className="tweet-feed">
      <header>
        <div className="user-profile-name">
          <img src="./images/tweeter-profile3.png" alt="" />
          <span className="username">{props.name}</span>
        </div>
        <a className="user-ID" href="#">
          @yomflo
        </a>
      </header>
      <p>Gorgmish is open again. Who wanna go?</p>
      <footer>
        <time>1 days ago</time>
        <div className="save-retweet-like">
          <i className="fas fa-bookmark"></i>
          <i className="fas fa-retweet"></i>
          <i className="fas fa-heart"></i>
        </div>
      </footer>
    </article>
  );
};

export default TweetFeedCard;
