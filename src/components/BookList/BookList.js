import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import Book from './../Book/Book';

class BookList extends Component {
  static propTypes = {
    books: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      weight: PropTypes.string,
      price: PropTypes.string,
    })).isRequired,
  }

  render() {
    const { books } = this.props;

    const bookElements = books.map(book => (
      <Book book={book} key={book.id} />
    ));

    return (
      <div className={styles.productsRow}>
        {bookElements}
      </div>
    );
  }
}

export default BookList;
