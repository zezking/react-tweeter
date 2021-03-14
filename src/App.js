import TweetFeedCard from "./tweetFeedCard";
import tweets from "./tweets.json";
console.log(tweets);

const App = () => {
  return <TweetFeedCard tweets={tweets} />;
};
export default App;
