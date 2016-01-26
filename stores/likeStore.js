const FALSE=false;
import { createStore } from 'redux'
import flipLike from './../reducers'
let store = createStore(flipLike,{'stat':FALSE});

import { setTrue, setFalse } from './../actions';

let unsubscribe = store.subscribe(()=>
console.log(store.getState())
	)

store.dispatch(setTrue())
store.dispatch(setFalse())

unsubscribe()