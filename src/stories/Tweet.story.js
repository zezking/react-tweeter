import React from "react";

import { TweetFeedCard } from "../Componenets/TweetFeedCard";

export default { title: "Singular Tweet" };

export const emptyTweet = () => <TweetFeedCard />;

export const populatedTweet = () => {
  const singleTweet = {
    user: {
      name: "Sori Han",
      avatars: `https://picsum.photos/200?random=${Math.floor(
        Math.random() * 100
      )}`,
      handle: "@soriSJ",
    },
    content: {
      text: "I LOVE PHO",
    },
    created_at: "10 years ago",
  };

  return (
    <TweetFeedCard
      key={1}
      avatars={singleTweet.user.avatars}
      name={singleTweet.user.name}
      id={singleTweet.user.handle}
      content={singleTweet.content.text}
      created_at={singleTweet.created_at}
    />
  );
};
