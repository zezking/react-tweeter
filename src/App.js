import TweetFeed from "./tweetFeed";
import tweets from "./tweets.json";
import "./App.css";
const App = () => {
  return <TweetFeed tweets={tweets} />;
};
export default App;
