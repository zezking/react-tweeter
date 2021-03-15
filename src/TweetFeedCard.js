import React from "react";
import "./TweetFeedCard.css";

export const TweetFeedCard = (props) => {
  const { avatars, name, id, content, created_at } = props;
  return (
    <article className="tweet-feed">
      <header>
        <div className="user-profile-name">
          <img src={avatars} alt="" />
          <span className="username">{name}</span>
        </div>
        <a className="user-ID" href="/">
          {id}
        </a>
      </header>
      <p>{content}</p>
      <footer>
        <time>{created_at}</time>
        <div className="save-retweet-like">
          <i className="fas fa-bookmark"></i>
          <i className="fas fa-retweet"></i>
          <i className="fas fa-heart"></i>
        </div>
      </footer>
    </article>
  );
};
