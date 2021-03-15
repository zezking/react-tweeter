import TweetFeed from "./TweetFeed";
import Tweets from "./tweets.json";
import "./App.css";

import { NewTweet } from "./NewTweet";
import { Navigation } from "./Navigation";
import { Header } from "./Header";

const profile = "https://picsum.photos/200?random=1";
const App = () => {
  return (
    <div className="App">
      <div className="top-nav">
        <Navigation />
      </div>
      <div className="main-content">
        <Header avatar={profile} />
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
