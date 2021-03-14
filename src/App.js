import TweetFeed from "./TweetFeed";
import Tweets from "./tweets.json";
import "./App.css";

import NewTweet from "./NewTweet";
console.log(NewTweet);
const App = () => {
  return <TweetFeed tweets={Tweets} />;
};
export default App;
