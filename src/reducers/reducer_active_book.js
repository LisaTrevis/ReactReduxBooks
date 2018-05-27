// State argument is not application state, only the state that this reducer is responsible for:
export default function(state = null, action) { // ES6: state = null says that if the argument comes in as undefined, it gets set to null initially
	switch(action.type) {
		case 'BOOK_SELECTED':
			return action.payload;
			// DO NOT do something like state.title = book.title then return state, we want a completely fresh object returned, not a mutated state
	}

	return state;
}