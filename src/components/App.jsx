import VideoList from "./VideoList.js";
import VideoPlayer from "./VideoPlayer.js";
import Search from "./Search.js"
import exampleVideoData from "../data/exampleVideoData.js";
//pass props into the Apps function
class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      nowPlaying: exampleVideoData[0]
    }
  }

  changePlaying(props) {
    this.setState({
      nowPlaying: props.video
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em><Search/></em></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em><VideoPlayer video={this.state.nowPlaying}/></em></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em><VideoList videos={exampleVideoData} handler={this.changePlaying.bind(this)}/></em></h5></div>
          </div>
        </div>
      </div>
    );
  };

}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
