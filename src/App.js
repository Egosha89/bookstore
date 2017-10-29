import React from 'react';
import PropTypes from 'prop-types';
import BookList from './components/BookList';

export default function App() {
    return (
        <div>
            <h1>Список книг</h1>
            <BookList books={this.props.books} />
        </div>
    );
}
