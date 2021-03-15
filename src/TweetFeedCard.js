import React from "react";
import "./TweetFeedCard.css";

export const TweetFeedCard = (props) => {
  return (
    <article className="tweet-feed">
      <header>
        <div className="user-profile-name">
          <img src={props.avatars} alt="" />
          <span className="username">{props.name}</span>
        </div>
        <a className="user-ID" href="/">
          {props.id}
        </a>
      </header>
      <p>{props.content}</p>
      <footer>
        <time>{props.created_at}</time>
        <div className="save-retweet-like">
          <i className="fas fa-bookmark"></i>
          <i className="fas fa-retweet"></i>
          <i className="fas fa-heart"></i>
        </div>
      </footer>
    </article>
  );
};
