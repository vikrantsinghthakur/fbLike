import React from 'react';
import ReactDOM from 'react-dom';
import className from 'classnames';

class Para extends React.Component{
	doWork(){
			var lStorageState=window.localStorage.getItem("state");
			var flippedState= lStorageState==='true'?'false':'true';

			if(lStorageState==='true')
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
		var thisClass="btn btn-sm";
		var iconClass="glyphicon"

		if(this.props.status==='true')
		{
			iconClass=iconClass.concat(" glyphicon-ok");
		}
		else
		{
			iconClass=iconClass.concat(" glyphicon-thumbs-up");
		}
		return(
			<div className="status">
					<p>
						THIS IS A STATUS<br/>
					</p>
					<button onClick={this.doWork.bind(this)} className={thisClass}>
						<span className={iconClass}></span>
							{text}
					</button>
			</div>);
		}
}

module.exports=Para