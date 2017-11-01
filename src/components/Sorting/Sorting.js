import React, { Component } from 'react';
import PropTypes from 'prop-types';

const books = [
  {
    'id': '430610',
    'title': 'HTML5, CSS3 и JavaScript. Исчерпывающее руководство (+DVD)',
    'author': 'Роббинс Дженнифер',
    'weight': '1202',
    'price': '2079',
    'imagePreview': 'covermid.jpg',
    'imageBig': 'big.jpg',
  },
  {
    'id': '498957',
    'title': 'JavaScript и jQuery. Исчерпывающее руководство',
    'author': 'Макфарланд Дэвид',
    'weight': '1228',
    'price': '1193',
    'imagePreview': 'covermid.jpg',
    'imageBig': 'big.jpg',
  },
  {
    'id': '583161',
    'title': 'Javascript и jQuery. Интерактивная веб-разработка',
    'author': 'Дакетт Джон',
    'weight': '1112',
    'price': '1615',
    'imagePreview': 'covermid.jpg',
    'imageBig': 'big.jpg',
  },
  {
    'id': '604319',
    'title': 'Визуализация данных с помощью библиотеки D3.js 4.x',
    'author': 'Рининсланд Эндрю',
    'weight': '322',
    'price': '1338',
    'imagePreview': 'covermid.jpg',
    'imageBig': 'big.jpg',
  },
  {
    'id': '612655',
    'title': 'Секреты JavaScript ниндзя',
    'author': 'Резиг Джон',
    'weight': '544',
    'price': '2868',
    'imagePreview': 'covermid.jpg',
    'imageBig': 'big.jpg',
  },
  {
    'id': '602321',
    'title': 'JavaScript в примерах и задачах',
    'author': '',
    'weight': '790',
    'price': '918',
    'imagePreview': 'covermid.jpg',
    'imageBig': 'big.jpg',
  },
  {
    'id': '540282',
    'title': 'Создаем динамические веб-сайты с помощью PHP, MySQL, JavaScript, CSS и HTML5',
    'author': 'Никсон Робин',
    'weight': '1074',
    'price': '1305',
    'imagePreview': 'covermid.jpg',
    'imageBig': 'big.jpg',
  },
];

class Sorting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedProducts: books,
    };
  }

  sortingAlphabet = (event) => {
    console.log(books[0].title.toUpperCase() < books[1].title.toUpperCase());

    const displayedProducts = books.sort((a, b) =>
      // По алфавиту
      a.title.toUpperCase() < b.title.toUpperCase(),
    );
  }

  render() {
    return (
      <div>
        <h3 style={{ margin: 0 }}>Сортировка:</h3>
        <span role="button" tabIndex="0" onClick={this.sortingAlphabet}>по алфавиту</span>
      </div>
    );
  }
}

export default Sorting;
