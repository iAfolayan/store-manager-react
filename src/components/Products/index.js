import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchProducts} from '../../actions/productsActions';
import ProductList from '../ProductList';
import prodImage from '../../images/1.PNG';
import prodImage2 from '../../images/2.PNG';
import prodImage3 from '../../images/3.PNG';
import prodImage4 from '../../images/4.PNG';
import prodImage5 from '../../images/5.PNG';

import './Products.scss';

class Products extends Component {
	constructor() {
		super();
		// this.state = {
		// 	products: [
		// 		{
		// 			id: 1,
		// 			name: 'Bluetooth',
		// 			description: 'A new brand product',
		// 			price: 302.6,
		// 			image: prodImage,
		// 			minimumallowed: 40
		// 		},
		// 		{
		// 			id: 2,
		// 			name: 'Bluetooth',
		// 			description: 'A new brand product',
		// 			price: 302.0,
		// 			image: prodImage4,
		// 			minimumallowed: 50
		// 		},
		// 		{
		// 			id: 3,
		// 			name: 'Samsung Mobile',
		// 			description:
		// 				'Andela is a joint company founded in Nigeria and the U.S with a different location in Lagos, Kampala, Nairobi, Cairo, and Kigali',
		// 			price: 50000,
		// 			image: prodImage2,
		// 			minimumallowed: 20
		// 		},
		// 		{
		// 			id: 4,
		// 			name: 'Tecno Mobile',
		// 			description:
		// 				'Andela is a joint company founded in Nigeria and the U.S with a different location in Lagos, Kampala, Nairobi, Cairo, and Kigali',
		// 			price: 50000,
		// 			image: prodImage3,
		// 			minimumallowed: 20
		// 		},
		// 		{
		// 			id: 5,
		// 			name: 'Nokia Mobile',
		// 			description:
		// 				'Andela is aimed in recruiting only the top 1% of software talent in Africa with a 10 years mission of training 100, 000 developers in Africa. This is one of the company primary strengths, and this attracted investments from great people like Zuckerberg.',
		// 			price: 50000,
		// 			image: prodImage4,
		// 			minimumallowed: 20
		// 		},
		// 		{
		// 			id: 6,
		// 			name: 'Hawei Mobile',
		// 			description:
		// 				'Andela is a joint company founded in Nigeria and the U.S with a different location in Lagos, Kampala, Nairobi, Cairo, and Kigali',
		// 			price: 50000,
		// 			image: prodImage,
		// 			minimumallowed: 20
		// 		},
		// 		{
		// 			id: 7,
		// 			name: 'Hawei Mobile',
		// 			description:
		// 				'Andela is a joint company founded in Nigeria and the U.S with a different location in Lagos, Kampala, Nairobi, Cairo, and Kigali',
		// 			price: 50000,
		// 			image: prodImage,
		// 			minimumallowed: 20
		// 		},
		// 		{
		// 			id: 8,
		// 			name: 'Hawei Mobile',
		// 			description:
		// 				'Andela is a joint company founded in Nigeria and the U.S with a different location in Lagos, Kampala, Nairobi, Cairo, and Kigali',
		// 			price: 50000,
		// 			image: prodImage5,
		// 			minimumallowed: 20
		// 		},
		// 		{
		// 			id: 9,
		// 			name: 'Hawei Mobile',
		// 			description:
		// 				'Andela is a joint company founded in Nigeria and the U.S with a different location in Lagos, Kampala, Nairobi, Cairo, and Kigali',
		// 			price: 50000,
		// 			image: prodImage3,
		// 			minimumallowed: 20
		// 		},
		// 		{
		// 			id: 10,
		// 			name: 'Hawei Mobile',
		// 			description:
		// 				'Andela is a joint company founded in Nigeria and the U.S with a different location in Lagos, Kampala, Nairobi, Cairo, and Kigali',
		// 			price: 50000,
		// 			image: prodImage,
		// 			minimumallowed: 20
		// 		},
		// 		{
		// 			id: 11,
		// 			name: 'Hawei Mobile',
		// 			description:
		// 				'Andela is a joint company founded in Nigeria and the U.S with a different location in Lagos, Kampala, Nairobi, Cairo, and Kigali',
		// 			price: 50000,
		// 			image: prodImage3,
		// 			minimumallowed: 20
		// 		},
		// 		{
		// 			id: 12,
		// 			name: 'Hawei Mobile',
		// 			description:
		// 				'Andela is a joint company founded in Nigeria and the U.S with a different location in Lagos, Kampala, Nairobi, Cairo, and Kigali',
		// 			price: 50000,
		// 			image: prodImage3,
		// 			minimumallowed: 20
		// 		},
		// 		{
		// 			id: 13,
		// 			name: 'Hawei Mobile',
		// 			description:
		// 				'Andela is a joint company founded in Nigeria and the U.S with a different location in Lagos, Kampala, Nairobi, Cairo, and Kigali',
		// 			price: 50000,
		// 			image: prodImage,
		// 			minimumallowed: 20
		// 		}
		// 	],
		// 	filterproduct: '',
		// 	activePage: 1
		// };
	}
	handleChange = (event) => {
		this.setState({ filterproduct: event.target.value });
	};
	
	handlePageChange(pageNumber) {
		console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
	}
	
	componentDidMount(){
		this.props.fetchProducts()
	}
	
	render() {
		// console.log('render------>', this.props.products.products)
		const { products } = this.props.products;
		// const { filterproduct } = this.state;
		// const filterProducts = products.filter((product) => {
		// 	return product.name.toLowerCase().includes(filterproduct.toLowerCase());
		// });
		
		if (products.length === 0) {
			return <div className="text-danger text-center"><h3>No Product found...</h3></div>
		} else {
			return (
				<Fragment>
					<h5 className="justify-content-start text-primary ml-3">Available Products</h5>
					<ProductList products={products} />
				</Fragment>
			);
		}
	}
}


const mapDispatchToProps = dispatch => ({
	fetchProducts: () => dispatch(fetchProducts())
})


const mapStateToProps = state => ({
  products: state.productsReducer
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Products);
