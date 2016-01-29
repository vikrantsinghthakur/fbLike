import React from 'react';
import ReactDOM from 'react-dom';
import className from 'classnames';
import styles from './styles.css';


class Para extends React.Component{
	doWork(){
			var a=window.localStorage.getItem("state");
			var flippedState= a==='true'?'false':'true';

			if(a==='true')
			{
				window.localStorage.setItem("state","false");
			}
			else
			{
				window.localStorage.setItem("state","true");
			}
			
			this.props.onLikeChange({stat:flippedState});
		}
		

	
	render(){
		
		var text = this.props.status==='true'?' Liked':' Like';
		var thisClass="btn btn-sm text-uppercase like_button";
		var iconClass="glyphicon"

		if(this.props.status==='true')
		{
			thisClass=thisClass.concat(" liked");
			iconClass=iconClass.concat(" glyphicon-ok");
		}
		else
		{
			iconClass=iconClass.concat(" glyphicon-thumbs-up");
		}
		return(
			<div className="row">
				<div className="col-xs-offset-5">
					<p>
						THIS IS A STATUS<br/>
					</p>
					<button onClick={this.doWork.bind(this)} className={thisClass}>
						<span className={iconClass}></span>
							{text}
					</button>
				</div>
			</div>);
		}
}

module.exports=Para