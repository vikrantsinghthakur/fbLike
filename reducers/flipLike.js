import { SET_TRUE, SET_FALSE } from './../actions/toggleLike';
const TRUE='true';
const FALSE='false';

function flipLike(state,action)
{
	debugger;
	switch(action.type){
		case TRUE:
		return {'stat':TRUE}

		case FALSE:
		return {'stat':FALSE}

		default:
		return {'stat':FALSE}
	}
}

export default flipLike;