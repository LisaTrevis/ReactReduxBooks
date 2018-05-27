export function selectBook(book) { // book is an object with book: title
	// selectBook is an action creator and needs to return an action, which is an object with a type property and a payload of some kind.
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}