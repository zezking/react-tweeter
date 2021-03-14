import React from "react";
import TweetFeedCard from "./TweetFeedCard";

const TweetFeed = (props) => {
  const tweetList = props.tweets.map((tweet, key) => {
    return (
      <TweetFeedCard
        key={key}
        name={tweet.user.name}
        id={tweet.user.handle}
        content={tweet.content.text}
      />
    );
  });
  return tweetList;
};

export default TweetFeed;
