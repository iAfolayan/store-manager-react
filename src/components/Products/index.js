import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchProducts} from '../../actions/productsActions';
import ProductList from '../ProductList';
import './Products.scss';

class Products extends Component {
	constructor() {
		super();
	}
	// handleChange = (event) => {
	// 	this.setState({ filterproduct: event.target.value });
	// };
	
	componentDidMount(){
		this.props.fetchProducts()
	}
	
	render() {
		let { products } = this.props.products;
		const { filterQuery } = this.props;
		products = filterQuery ?
								products.filter((product) => {
									return product.productname.toLowerCase().includes(filterQuery.toLowerCase());
								})
								: products;
		
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
