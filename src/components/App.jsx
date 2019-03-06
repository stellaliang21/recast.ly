import VideoList from "./VideoList.js";
import VideoPlayer from "./VideoPlayer.js";
import Search from "./Search.js";
import exampleVideoData from "../data/exampleVideoData.js";
import searchYouTube from "../lib/searchYouTube.js";
import YOUTUBE_API_KEY from "../config/youtube.js";
//pass props into the Apps function
class App extends React.Component {
  
  constructor(props) {

    super(props);

    this.state = {
      nowPlaying: exampleVideoData[0],
      searchResults: exampleVideoData
    };

    searchYouTube({
      key: YOUTUBE_API_KEY,
      query: 'react tutorial',
      max: 10
    }, this.initialize.bind(this));

    this.searchbar = '';

    this.liveSearch = this.liveSearch.bind(this);

    this.sendQueryDebounced = _.debounce(this.sendQuery, 500);
  }

  changePlaying(props) {
    this.setState({
      nowPlaying: props.video
    });
  }

  initialize (results) {
    this.setState({
      nowPlaying: results[0],
      searchResults: results
    });
  }

  liveSearch(e) {
    this.searchbar = e.target.value;
    this.sendQueryDebounced(this.searchbar);
  }

  sendQuery(query) {
    searchYouTube({
      key: YOUTUBE_API_KEY,
      query: query,
      max: 10
    }, this.initialize.bind(this));
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em><Search handler={this.liveSearch}/></em></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em><VideoPlayer video={this.state.nowPlaying}/></em></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em><VideoList videos={this.state.searchResults} handler={this.changePlaying.bind(this)}/></em></h5></div>
          </div>
        </div>
      </div>
    );
  }

}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
