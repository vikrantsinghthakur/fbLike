import React from 'react';
import { render } from 'react-dom';
import Para from './components/para';
import App from './containers/App';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import styles from './components/styles.css'
import flipLike from './reducers/flipLike';

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