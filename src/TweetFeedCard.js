import React from "react";
import "./TweetFeedCard.css";

import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <time>{props["created_at"]}</time>
        <div className="save-retweet-like">
          <div className="icon bookmark">
            <FontAwesomeIcon icon={faBookmark} />
          </div>
          <div className="icon retweet">
            <FontAwesomeIcon icon={faRetweet} />
          </div>
          <div className="icon like">
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
      </footer>
    </article>
  );
};
