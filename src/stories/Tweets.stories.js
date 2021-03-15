import React from "react";

import { TweetFeed } from "../Componenets/TweetFeed";
import { TweetFeedCard } from "../Componenets/TweetFeedCard";

export default { title: "Tweet Feed Container" };

export const emptyTweet = () => <TweetFeed />;

export const populatedTweet = () => {
  const tweets = [
    {
      user: {
        name: "Newton",
        avatars: "https://randomuser.me/api/portraits/med/men/75.jpg",
        handle: "@SirIsaac",
      },
      content: {
        text:
          "If I have seen further it is by standing on the shoulders of giants",
      },
      created_at: 1615187926979,
    },
    {
      user: {
        name: "Descartes",
        avatars: "https://randomuser.me/api/portraits/med/women/93.jpg",
        handle: "@rd",
      },
      content: {
        text: "Je pense , donc je suis",
      },
      created_at: 1615274326979,
    },
    {
      user: {
        name: "Jason Sudekis",
        avatars: "./images/tweeter-profile1.png",
        handle: "@JasonS",
      },
      content: {
        text: "This project is driving me crazy",
      },
      created_at: 1615360726979,
    },
    {
      user: {
        name: "Hanabi",
        avatars: "./images/tweeter-profile4.png",
        handle: "@habi",
      },
      content: {
        text: "Hello Depression my old friend",
      },
      created_at: 1615447126979,
    },
    {
      user: {
        name: "Walter White",
        avatars: "./images/tweeter-profile2.png",
        handle: "@WW",
      },
      content: {
        text: "Black Mirror is sooooo goooooood",
      },
      created_at: 1615533526979,
    },
    {
      user: {
        name: "Yolo",
        avatars: "./images/tweeter-profile3.png",
        handle: "@yomflo",
      },
      content: {
        text: "Gorgmish is open again. Who wanna go?",
      },
      created_at: 1615619926979,
    },
  ];

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
