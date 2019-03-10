import React, { Component, Fragment } from 'react';
import InputForm from '../../components/InputForms';
import { createProduct } from '../../actions/productsActions';
import { CreateProductValidator } from '../../helpers/validate';
import { ToastContainer } from 'react-toastify';

import { connect } from 'react-redux';
import './Product.scss';


class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        productname: '',
        category: '',
        description:'',
        price:'',
        image: '',
        quantity:'',
        minimumallowed:''
      },
      isLoading: false,
      errors: {}
    };
  }

  handleChange = event => {
    const { product } = this.state;
    const { name, value } = event.target;
    product[name] = value;
    this.setState({
      product
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { product } = this.state;
    const errors = CreateProductValidator(product);
    if (Object.keys(errors).length) {
      this.setState({ errors });
    } else {
      this.setState({ isLoading: true });
      this.props.create(product)
    }

  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { product } = nextProps;
    const { isLoading } = prevState;
    if (!product.creatingProduct && product.createStatus && isLoading) {
      return { ...prevState, isLoading: false, product: {
        productname: '',
        category: '',
        description:'',
        price:'',
        image: '',
        quantity:'',
        minimumallowed:''
      }};
    } else {
      return prevState;
    }
  }
  

  render() {
    const { product, errors, isLoading } = this.state;
    return (
      <Fragment>
      <ToastContainer autoClose={5000} />
        <h5 className="ml-3 text-primary">Create Product</h5>
        <hr className="mr-5" />
        <div className="col-md-6 formWrapper">
          <form onSubmit={this.handleSubmit}>
            <InputForm text="Name" error={errors.name} label="productname" type="text" name="productname" id="productname" value={product.productname} placeholder="Name" onChange={this.handleChange} />
            <small className="form-text text-muted">Product name is required.</small>
            <div className='form-group'>
              <label htmlFor="category" className="text-sm-left">Category</label>
              <select className="form-control" name="category" onChange={this.handleChange} value={product.category}>
                <option value="">Select a category</option>
                <option value="Mobile">Mobile</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="description" className="text-sm-left">Description</label>
              <textarea className="form-control" value={product.description} name="description" id="description" placeholder="Description" onChange={this.handleChange}></textarea>
              <small id="descHelp" className="form-text text-muted">Give a descriptive information about product</small>
              <span className="text-danger">{errors.description}</span>
            </div>
            <InputForm text="Price" error={errors.price} label="price" type="text" name="price" id="price" value={product.price} placeholder="Enter price" onChange={this.handleChange} />
            <InputForm text="Quantity" error={errors.quantity} label="quantity" type="text" name="quantity" id="quantity" value={product.quantity} placeholder="Enter quantity" onChange={this.handleChange} />
            <InputForm text="Minimun Sales Allowed" error={errors.minimumallowed} label="minimumallowed" type="text" name="minimumallowed" id="minimumallowed" value={product.minimumallowed} placeholder="Enter minimum sales allowed" onChange={this.handleChange} />
            <div className="form-group">
              <label htmlFor="image text-sm-left">Image</label>
              <input type="file" className="form-control-file" id="image" />
              <small id="productHelp" className="form-text text-muted">Upload product image</small>
              <span className="text-danger">{errors.image}</span>
            </div>
            <button className="btn btn-outline-primary float-right">Add product</button>
          </form>
        </div>
        </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  product: state.productsReducer
});

const mapDispatchToProps = dispatch => ({
  create: productDetails => dispatch(createProduct(productDetails))
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);