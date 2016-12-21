import { FETCH_POSTS , FETCH_POST } from '../actions/index';



const INITIAL_STATE = { all : [], post: null}; // post: null is a single post

export default function(state = INITIAL_STATE, action ){


	switch(action.type){

	case FETCH_POSTS:
		return { ...state, all: action.payload.data }; // here state is the current state not the application state//adding action.payload.data to current state 


	case FETCH_POST:
		return { ...state, post: action.payload.data }; 	

		
	default:
		return state;	
	}

}