import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	render() {
		return(
			<div>Book Detail!</div>
		);
	}
}

function mapStateToProps (state) {
	return {
		book: state.activeBook // This refers to activeBook in index.js in reducers
	};
}

export default connect(mapStateToProps)(BookDetail);