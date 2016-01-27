import React from 'react';
import ReactDOM from 'react-dom';
import className from 'classnames';

// var doWork=function(e){
// 	console.log("nigga");
// 	window.alert("asdasdas");
// }

class Para extends React.Component{
	doWork(){
			var a=window.localStorage.getItem("state");
			//console.log(a);
			if(a==='true')
			{
				window.localStorage.setItem("state","false");
			}
			else
			{
				window.localStorage.setItem("state","true");
			}
			var flippedState= a==='true'?'false':'true';
			this.props.onLikeChange({stat:flippedState});
			//this.render();
		}
		

	
	render(){
		debugger;
		var a=window.localStorage.getItem("state");
		var text = this.props.status==='true'?'Liked':'Like';
		return(
			<button onClick={this.doWork.bind(this)} className="btn btn-primary text-uppercase">{text}</button>);
	}
}

export default Para