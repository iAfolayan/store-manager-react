import React, { Component } from 'react'
import { connect } from 'react-redux';
import { removeFromCart } from '../../actions/productsActions';

export class cart extends Component {
  remove(cartIndex) {
    this.props.remove(cartIndex);
  }
  render() {
    const { cart } = this.props.products;
    return (
      <div>
        {
          cart.map((each, index) => <p key={index}>{`${each.name} ${each.price} ${each.quantity}`} <button onClick={() => this.remove(index)}>remove</button></p>)
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.productsReducer
});

const mapDispatchToProps = dispatch => ({
  remove: cartIndex => dispatch(removeFromCart(cartIndex))
});

export default connect(mapStateToProps, mapDispatchToProps)(cart)
