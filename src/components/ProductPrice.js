import React from 'react';
import PropTypes from 'prop-types';

class ProductPrice extends React.PureComponent {
  static propTypes = {
    price: PropTypes.string.isRequired,
  }

  render() {
    const { price } = this.props;

    return (
      <div className={this.props.className}>{price} р.</div>
    );
  }
}

export default ProductPrice;
