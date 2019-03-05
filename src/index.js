// TODO: Render the `App` component to the DOM
import App from './components/App.js';  
// import VideoList from "./VideoList";
// import VideoListEntry from "./VideoListEntry";
// import VideoPlayer from "./VideoPlayer";
// import Search from "./Search";
import exampleVideoData from './data/exampleVideoData.js';

ReactDOM.render(<App props={exampleVideoData}/>, document.getElementById('app'));

//'helllo'