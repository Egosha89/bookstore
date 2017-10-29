import React from 'react';
import PropTypes from 'prop-types';

class ProductPrice extends React.PureComponent {
    static propTypes = {
        price: PropTypes.string.isRequired,
    }

    render() {
        const { price } = this.props;

        return (
            <div className="product__price">{price}</div>
        );
    }
}

export default ProductPrice;
