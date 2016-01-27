import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {setTrue, setFalse} from './../actions/toggleLike'
import Para from './../components/para'
import * as LikeActions from './../actions/toggleLike'


class App extends Component{

	render(){
		const { dispatch, stat }= this.props
		debugger;
		return(

			<div>
				<Para status={stat} onLikeChange={newState => dispatch(setTrue(newState))}/>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {
    stat: state.stat
  }
}


export default connect(
  mapStateToProps)(App)