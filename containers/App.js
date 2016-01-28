import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleLike } from './../actions/toggleLike'
import Para from './../components/para'
import * as LikeActions from './../actions/toggleLike'


class App extends Component{

	render(){
		const { dispatch, stat }= this.props
		return(
				<Para status={stat} onLikeChange={newState => dispatch(toggleLike(newState))}/>
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