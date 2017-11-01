import React from 'react';
import PropTypes from 'prop-types';
import Sorting from './components/Sorting/Sorting';
import BookList from './components/BookList/BookList';

export default function App(props) {
  // пиши лучше так, хороший стиль
  const { books } = props;

  return (
    <div>
      <h1>Список книг</h1>
      <Sorting />
      <BookList books={books} />
    </div>
  );
}
