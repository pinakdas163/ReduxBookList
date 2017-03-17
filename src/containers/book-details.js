import React, {Component} from 'react';
import {connect} from 'react-redux';
class BookDetails extends Component {
  render () {
    if(!this.props.activeBook) {
      return (<div>Please select a book to view details.</div>);
    }
    return (
      <div>
        <h3>Details: </h3>
        <div>Title: {this.props.activeBook.title}</div>
        <div>Page: {this.props.activeBook.page}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeBook:state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetails);
