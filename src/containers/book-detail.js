import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	render() {
		if (!this.props.book) {
			return (
				<div>
					<h1>Select a book to get started.</h1>
				</div>
			);
		}

		return(
			<div>

				<h2>Details for:</h2>
				<div>Title: {this.props.book.title}</div>
				<div>Pages: {this.props.book.pages}</div>

			</div>
		);
	}
}

function mapStateToProps (state) {
	return {
		book: state.activeBook // This refers to activeBook in index.js in reducers
	};
}

export default connect(mapStateToProps)(BookDetail);