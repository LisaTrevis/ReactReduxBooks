import React, { Component } from 'react';
// To promote book-list from a component to a container (which is a normal React component that gets bonded to the application state), we first import connect from the react-redux libarry: 
import { connect } from 'react-redux';
// This grabs the Action Creator selectBook from our actions file, index.js:
import { selectBook } from '../actions/index';
// This makes sure that the action we create flows through all of the reducers
import { bindActionCreators } from 'redux';

class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li 
					key={book.title}
					onClick={() => this.props.selectBook(book)}
					className="list-group-item">
					{book.title}
				</li>
			);
		});
	}

	render() {
		return (
			<div>
				<ul className="list-group col align-self-center">
					{this.renderList()}
				</ul>
			</div>
		)
	}
}

// Here is our glue between React & Redux. When the state changes, the book-list container will instantly re-render with the new list of books. Whenever the application state changes, the object in the state function will be assigned as props to the component (this.props.books):
function mapStateToProps(state) {
	// Whatever is returned will show up as props inside of BookList
	return {
		books: state.books
	};
}


// Anything returned by this function end up as props on the BookList container:
function mapDispatchToProps(dispatch) {
	// Whenever selectBook is called, the result should be passed to all of the reducers
	return bindActionCreators({selectBook: selectBook}, dispatch);
}

// connect takes some functions (mapStateToProps and mapDispatchToProps) and a component (BookList) and promotes it to a container. A container is a component that is aware of the state that is contained by Redux. It needs to know about the dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);


