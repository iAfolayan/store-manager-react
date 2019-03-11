import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../actions/productsActions';

export class cart extends Component {
	// calculateTotal() {
	// 	const total = cartItems.reduce(
	// 		(curr, next) => {
	// 			curr.quantity += next.quantity;
	// 			curr.amount += next.price * next.quantity;
	// 			return curr;
	// 		},
	// 		{ amount: 0, quantity: 0 }
	// 	);
	// }

	remove(cartIndex) {
		this.props.remove(cartIndex);
	}

	showInfo(cart) {
		if (cart.length) return '';
		else return 'hide';
	}

	render() {
		const { cart } = this.props.products;
		return (
			<div id='cart' className={`cart ${this.showInfo(cart)}`}>
				<span className='cartHeading'>Cart Info</span>
				<hr />
				{cart.map((each, index) => (
					<ul className='cartItemsList' key={index}>
						<img src={each.image} className='img-thumbnail' id='item-img' alt='' />
						<div className='item-text'>
							<p id='cart-item-title' className='cart-item-title'>
								{each.name}
							</p>
							<span>&#8358;</span>
							<span id='item-price' className='item-price'>
								{each.price}.00 -- {each.quantity}
							</span>
							<button onClick={() => this.remove(index)}>Remove</button>
						</div>
					</ul>
				))}
				{
					<div className='cartTotal'>
						Total: &#8358;<span id='amount'>0</span>
					</div>
				}
				<a href='#'>
					<button type='button' className='cartBtn'>
						Proceed to checkout
					</button>
				</a>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	products: state.productsReducer
});

const mapDispatchToProps = (dispatch) => ({
	remove: (cartIndex) => dispatch(removeFromCart(cartIndex))
});

export default connect(mapStateToProps, mapDispatchToProps)(cart);
