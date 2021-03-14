import React from "react";
import "./tweetFeedCard.css";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const randomProfile = [
  "https://picsum.photos/200?random=1",
  "https://picsum.photos/200?random=2",
  "https://picsum.photos/200?random=3",
  "https://picsum.photos/200?random=4",
  "https://picsum.photos/200?random=5",
  "https://picsum.photos/200?random=6",
];
const TweetFeedCard = (props) => {
  const tweetList = props.tweets.map((tweet) => {
    return (
      <article className="tweet-feed">
        <header>
          <div className="user-profile-name">
            <img
              src={
                randomProfile[Math.floor(Math.random() * randomProfile.length)]
              }
              alt=""
            />
            <span className="username">{tweet.user.name}</span>
          </div>
          <a className="user-ID" href="#">
            {tweet.user.handle}
          </a>
        </header>
        <p>{tweet.content.text}</p>
        <footer>
          <time>tweet.created_at</time>
          <div className="save-retweet-like">
            <FontAwesomeIcon icon={faBookmark} />
            <FontAwesomeIcon icon={faRetweet} />
            <FontAwesomeIcon icon={faHeart} />

            <i className="fas fa-heart"></i>
          </div>
        </footer>
      </article>
    );
  });
  return tweetList;
};

export default TweetFeedCard;
