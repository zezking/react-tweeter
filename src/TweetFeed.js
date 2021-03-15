import React from "react";
import { TweetFeedCard } from "./TweetFeedCard";
//export helpfer function with destructuring
import { ConvertTime } from "./Helpers";
const TweetFeed = (props) => {
  const tweetList = props.tweets.map((tweet, key) => {
    return (
      <TweetFeedCard
        key={key}
        avatars={`https://picsum.photos/200?random=${key + 5}`}
        name={tweet.user.name}
        id={tweet.user.handle}
        content={tweet.content.text}
        created_at={ConvertTime(tweet.created_at)}
      />
    );
  });
  return tweetList;
};

export default TweetFeed;
