/* eslint-disable no-useless-constructor */
import React from 'react';
import EachProduct from './EachProduct';
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  productsRemove = (childData) => {
    console.log(childData)
  };
  render() {
    console.log('this dat coming from app', this.props);
    let arrayData = this.props.cart;
    console.log('props', arrayData);

    return (
      <>
        {arrayData.map((eachProduct) => (
          <EachProduct
            eachProduct={eachProduct}
            cartTwo={this.props.cart}
            parentCallback={this.productsRemove}
          />
        ))}
      </>
    );
  }
}
export default Cart;
