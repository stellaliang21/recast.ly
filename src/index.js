// TODO: Render the `App` component to the DOM
import App from './components/App.js';  
// importing the exampleVideoData from the exampleVideoData file
import exampleVideoData from './data/exampleVideoData.js';

//Rendering the 'App' componet to the DOM
ReactDOM.render(<App videos={exampleVideoData}/>, document.getElementById('app'));

