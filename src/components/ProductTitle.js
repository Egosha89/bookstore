import React from 'react';
import PropTypes from 'prop-types';

class ProductTitle extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    const { title } = this.props;

    return (
      <div className={this.props.className}>{title}</div>
    );
  }
}

export default ProductTitle;
