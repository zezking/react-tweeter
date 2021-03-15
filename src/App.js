import React, { useState } from "react";
import TweetFeed from "./TweetFeed";
import Tweets from "./tweets.json";
import "./App.css";

import { NewTweet } from "./NewTweet";
import { Navigation } from "./Navigation";
import { Header } from "./Header";
import { TweetFeedCard } from "./TweetFeedCard";
import { ConvertTime } from "./Helpers";
let initialTWeetData = Tweets;

console.log(initialTWeetData);

const profile = "https://picsum.photos/200?random=1";
export const App = () => {
  const [tweetsData, setTweetData] = useState(initialTWeetData);

  const addNewTweet = () => {
    const newTWeet = {
      name: "Sori Han",
      handle: "@hansoriCS",
      profile_image: "https://picsum.photos/200?random=20",
      text: "I LOVE REFRIDRATORS!",
      data: "10 days ago",
    };
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
          <NewTweet />
          <section className="new-tweet-feed">
            <div className="new-tweet-post">{tweets}</div>
          </section>
        </main>
      </div>
    </div>
  );
};
