import React, { Component, Fragment } from 'react';
import ProductList from '../ProductList';
import './Products.scss';

class Products extends Component {
	constructor() {
		super();
		this.state = {
			products: [
				{
					id: 1,
					name: 'Bluetooth',
					description: 'A new brand product',
					price: 302.6,
					image: 'image.png',
					minimumallowed: 40
				},
				{
					id: 2,
					name: 'Bluetooth',
					description: 'A new brand product',
					price: 302.0,
					image: 'image.png',
					minimumallowed: 50
				},
				{
					id: 3,
					name: 'Samsung Mobile',
					description:
						'Andela is a joint company founded in Nigeria and the U.S with a different location in Lagos, Kampala, Nairobi, Cairo, and Kigali',
					price: 50000,
					image: 'default.png',
					minimumallowed: 20
				},
				{
					id: 4,
					name: 'Tecno Mobile',
					description:
						'Andela is a joint company founded in Nigeria and the U.S with a different location in Lagos, Kampala, Nairobi, Cairo, and Kigali',
					price: 50000,
					image: 'default.png',
					minimumallowed: 20
				},
				{
					id: 5,
					name: 'Nokia Mobile',
					description:
						'Andela is aimed in recruiting only the top 1% of software talent in Africa with a 10 years mission of training 100, 000 developers in Africa. This is one of the company primary strengths, and this attracted investments from great people like Zuckerberg.',
					price: 50000,
					image: 'default.png',
					minimumallowed: 20
				},
				{
					id: 6,
					name: 'Hawei Mobile',
					description:
						'Andela is a joint company founded in Nigeria and the U.S with a different location in Lagos, Kampala, Nairobi, Cairo, and Kigali',
					price: 50000,
					image: 'default.png',
					minimumallowed: 20
				}
			],
			filterproduct: ''
		};
	}

	handleChange = (event) => {
		this.setState({ filterproduct: event.target.value });
	};

	render() {
		const { products, filterproduct } = this.state;
		console.log('\-----------\n', products)
		const filterProducts = products.filter((product) => {
			return product.name.toLowerCase().includes(filterproduct.toLowerCase());
		});
		
		if (products.length === 0) {
			return '<div className="text-danger text-center"><h3>No Product found...</h3></div>';
		} else {
			return (
				<Fragment>
					<h5 className="justify-content-start text-primary ml-3">Available Products</h5>
					<ProductList products={products} filter={filterProducts} />
				</Fragment>
			);
		}
	}
}

export default Products;
