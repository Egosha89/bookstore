import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookList extends React.PureComponent {
    static propTypes = {
        books: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string.isRequired,
            author: PropTypes.string,
            weight: PropTypes.string,
            price: PropTypes.string,
        })).isRequired,
    }

    render() {
        const bookElements = this.props.books.map(book => (
            <Book book={book} key={book.id} />
        ));

        return (
            <div>
                {bookElements}
            </div>
        );
    }
}

export default BookList;
