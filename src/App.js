import TweetFeed from "./TweetFeed";
import Tweets from "./tweets.json";
import "./App.css";
const App = () => {
  return <TweetFeed tweets={Tweets} />;
};
export default App;
