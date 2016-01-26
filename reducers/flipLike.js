import { SET_TRUE, SET_FALSE } from './../actions/toggleLike';
const TRUE=true;
const FALSE=false;

function flipLike(state={'stat': 'false'},action)
{
	switch(action.type){
		case TRUE:
		return {'stat':FALSE}

		case FALSE:
		return {'stat':TRUE}

		default:
		return {'stat':FALSE}
	}
}

export default flipLike;