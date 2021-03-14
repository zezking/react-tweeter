import TweetFeed from "./TweetFeed";
import Tweets from "./tweets.json";
import "./App.css";

import NewTweet from "./NewTweet";
import Navigation from "./Navigation";

const App = () => {
  return (
    <div className="App">
      <div className="top-nav">
        <Navigation />
      </div>
      <div className="main-content">
        <header className="user-header"></header>
        <main className="container">
          <NewTweet />
          <section class="new-tweet-feed">
            <div className="new-tweet-post">
              <TweetFeed tweets={Tweets} />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
export default App;
