import React from 'react';
import { Link } from 'react-router-dom';
import prodImage from '../../images/1.PNG';
import './ProductList.scss';

const ProductList = ({ products }) => {
	const productList = products.length ? (
		products.map((product) => {
			return (
				<div className="col-md-3 float-left" key={product.id}>
					<div className="card">
						<h5 className="card-header text-center">
							<strong>{product.name}</strong>
						</h5>
						<Link to="">
							<div className="img-holder">
								<img className="cart-image" src={prodImage} alt="" />
								<div className="img-overlay">
									<article>{product.description.substring(0, 40)}</article>
								</div>
								<h3>&#8358;{product.price} / piece</h3>
							</div>
						</Link>
						<div className="dets">
							{' '}
							<small>Minimum Qty {product.minimumallowed}</small>
						</div>
					</div>
				</div>
			);
		})
	) : (
		<p className="mx-auto">You don't have any product to display.</p>
	);
	return <div>{productList}</div>;
};

export default ProductList;
