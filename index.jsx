import bootstyles from './node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { render } from 'react-dom';
import Para from './components/para';
import App from './containers/App';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import styles from './components/styles.css'
import className from 'classnames'
import flipLike from './reducers/flipLike';

const TRUE='true';
const FALSE='false';

var current=window.localStorage.getItem("state");

if(current === null)
	current=FALSE;

let store=createStore(flipLike,{'stat':current});
let rootElement= document.querySelector("#myApp");

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	rootElement
)