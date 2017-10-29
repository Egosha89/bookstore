import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { books } from './data/data';

ReactDOM.render(<App books={books} />, document.getElementById('container'));
