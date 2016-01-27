import React from 'react';
import ReactDOM from 'react-dom';
import className from 'classnames';
import styles from './styles.css';


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
		}
		

	
	render(){
		
		//var a=window.localStorage.getItem("state");
		var text = this.props.status==='true'?'Liked':'Like';
		var thisClass="btn btn-primary text-uppercase like_button";
		if(this.props.status==='true')
		{
			thisClass="btn btn-primary text-uppercase like_button active"
		}
		debugger;
		return(
			<button onClick={this.doWork.bind(this)} className={thisClass}>
			<span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>
			{text}
			</button>);
	}
}

export default Para