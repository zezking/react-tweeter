import TweetFeedCard from "./tweetFeedCard";
import tweets from "./tweets.json";
import "./App.css";
const App = () => {
  return <TweetFeedCard tweets={tweets} />;
};
export default App;
