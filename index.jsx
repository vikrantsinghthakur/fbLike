require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';
import Para from './components/para.js';

class App extends React.Component {
	render() {
		return (
      <div>Simple React + Babel + Bootstrap + Webpack 
      <Para/></div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));

module.exports= App;