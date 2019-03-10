import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, CardImg } from 'reactstrap';
import { addProductToCart } from '../../actions/productsActions';
import './ProductList.scss';

class  ProductList extends Component {
	addToCart = (id) => {
		this.props.addToCart(id);
	}

	addToCartButton = (prd) => {
		return <button type="button" onClick={() => this.addToCart(prd)} className="addToCart">Add to Cart</button>
	}
	renderProducts() {
		const { response } = this.props.auth;
		const { products } = this.props;
		const productList = products.length ? (
			products.map((product) => {
				const userMenu = (response.role === 1) ? '' : this.addToCartButton(product.id);
				return (
					<div className="col-md-3 float-left" key={product.id}>
					<input type="hidden" name="productId" value={product.id} />
						<Card className="card">
							<h5 className="card-header text-center">
								<strong>{product.productname}</strong>
							</h5>
							<Link to={`/view/${product.id}`}>
								<div className="img-holder">
									<CardImg className="cart-image" src={product.image} alt="" />
									<div className="img-overlay">
										<article>{product.description.substring(0, 40)}</article>
									</div>
									<h3 data-price={product.price}>&#8358;{product.price} / piece</h3>
								</div>
							</Link>
							<div className="dets">
								{userMenu}
								<small>Minimum Qty {product.minimumallowed}</small>
							</div>
						</Card>
					</div>
				);
			})
		) : (
			<p className="mx-auto">You don't have any product to display.</p>
		);
		return <div>{productList}</div>;
	}

	render() {
		return (
			(this.renderProducts())
		)
		}
	}

	const mapStateToProps = state => ({
		auth: state.authReducer
	});

	const mapDispatchToProps = dispatch => ({
		addToCart: productId => dispatch(addProductToCart(productId))
	});
	
	
	export default connect(
		mapStateToProps,
		mapDispatchToProps
	)(ProductList);
