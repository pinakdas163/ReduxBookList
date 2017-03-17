import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectedBook} from '../actions/index';
import {bindActionCreators} from 'redux';
class BookList extends Component {

  reduxlist() {
      return  this.props.books.map((book)=> {
        return (
          <li key={book.title}
          onClick={()=> this.props.selectedBook(book)}
          className='list-group-item'>{book.title}</li>
        );
      });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.reduxlist()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    books:state.books
  };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectedBook:selectedBook},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
