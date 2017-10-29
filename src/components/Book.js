import React from 'react';
import PropTypes from 'prop-types';
import ProductTitle from './ProductTitle';
import ProductAuthor from './ProductAuthor';
import ProductPrice from './ProductPrice';

class Book extends React.PureComponent {
    static propTypes = {
        book: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string.isRequired,
            author: PropTypes.string,
            price: PropTypes.string,
            imagePreview: PropTypes.string,
        })).isRequired,
    }

    render() {
        const { book } = this.props;

        return (
            <div className="product">
                <img
                    src={`src/data/images/${book.id}/${book.imagePreview}`}
                    alt={`${book.author} - ${book.title}`}
                    title={`${book.author} - ${book.title}`}
                />
                <ProductTitle title={book.title} />
                <ProductAuthor author={book.author} />
                <ProductPrice price={book.price} />
            </div>
        );
    }
}

export default Book;
