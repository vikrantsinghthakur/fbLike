import { TOGGLE_LIKE } from './../actions/toggleLike';
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
		return {'stat':state.stat}
	}
}

export default flipLike;