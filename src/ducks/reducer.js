
const initialState = {
	items: [],
};

export const ACTIONS ={
	GET_ITEMS: 'GET_ITEMS',
};

export default function reducer(state = initialState, action) {
	switch (action.type){
		case ACTIONS.GET_ITEMS:
			return {
				...state,
				items: action.payload
			};
		default: return state;
	};
};