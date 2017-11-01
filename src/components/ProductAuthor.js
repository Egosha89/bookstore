import React from 'react';
import PropTypes from 'prop-types';

class ProductAuthor extends React.PureComponent {
  static propTypes = {
    author: PropTypes.string.isRequired,
  }

  render() {
    const { author } = this.props;

    return (
      <div className={this.props.className}>{author}</div>
    );
  }
}

export default ProductAuthor;
