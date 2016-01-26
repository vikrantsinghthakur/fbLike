import React from 'react';
import ReactDOM from 'react-dom';
import className from 'classnames';

// var doWork=function(e){
// 	console.log("nigga");
// 	window.alert("asdasdas");
// }

class Para extends React.Component{
	doWork(){
			console.log("nigga");
	window.alert("asdasdas");

	}
	render(){
		return(
			<button onClick={this.doWork.bind(this)} className="btn btn-primary text-uppercase">Like</button>);
	}
}

module.exports= Para;