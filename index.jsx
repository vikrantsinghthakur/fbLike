require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import { render } from 'react-dom';
import Para from './components/para';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

import flipLike from './reducers/flipLike';
const FALSE=false;
let store=createStore(flipLike,{'stat':FALSE});

let rootElement= document.querySelector("#myApp");

	render(
		<Provider store={store}>
		<Para/>
		</Provider>,
		rootElement
		)