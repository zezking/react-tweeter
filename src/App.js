import React, { useState } from "react";
import Tweets from "./tweets.json";
import "./App.css";

import { NewTweet } from "./NewTweet";
import { Navigation } from "./Navigation";
import { Header } from "./Header";
import { TweetFeedCard } from "./TweetFeedCard";
import { ConvertTime } from "./Helpers";
let initialTWeetData = Tweets;
const profile = "https://picsum.photos/200?random=1";
export const App = () => {
  const [tweetsData, setTweetData] = useState(initialTWeetData);

  const addNewTweet = (text) => {
    const newTweet = {
      user: {
        name: "Sori Han",
        avatars: `https://picsum.photos/200?random=${Math.floor(
          Math.random() * 100
        )}`,
        handle: "@soriSJ",
      },
      content: {
        text,
      },
      created_at: 1615619926979,
    };
    setTweetData([newTweet, ...tweetsData]);
  };

  const tweets = tweetsData.map((tweetsData, key) => {
    return (
      <TweetFeedCard
        key={key}
        avatars={`https://picsum.photos/200?random=${key + 5}`}
        name={tweetsData.user.name}
        id={tweetsData.user.handle}
        content={tweetsData.content.text}
        created_at={ConvertTime(tweetsData.created_at)}
      />
    );
  });
  return (
    <div className="App">
      <div className="top-nav">
        <Navigation />
      </div>
      <div className="main-content">
        <Header avatar={profile} firstName="Sori" lastName="Han" />
        <main className="container">
          <NewTweet addNewTweet={addNewTweet} />
          <section className="new-tweet-feed">
            <div className="new-tweet-post">{tweets}</div>
          </section>
        </main>
      </div>
    </div>
  );
};
