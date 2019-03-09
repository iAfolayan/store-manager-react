import React, { Component, Fragment } from 'react';
import InputForm from '../../components/InputForms';
import { CreateProductValidator } from '../../helpers/validate';
import './Product.scss';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        name: '',
        category: '',
        description:'',
        price:'',
        image: '',
        minimumAllowed:''
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

  handleSelect = event => {
    const { product } = this.state;
    const { value } = event.target.options[event.target.selectedIndex];
    article.category = value;
    this.setState({ product });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { product } = this.state;
    const errors = CreateProductValidator(product);
    if (errors) {
      this.setState({ errors });
    }
    // const { login } = this.props;
    // login(product);
  }

  render() {
    const { product, errors, isLoading } = this.state;
    return (
      <Fragment>
        <h5 className="ml-3 text-primary">Create Product</h5>
        <hr className="mr-5" />
        <div className="col-md-6 formWrapper">
          <form onSubmit={this.handleSubmit}>
            <InputForm text="Name" error={errors.name} label="productName" type="text" name="productName" id="productName" value={product.name} placeholder="Name" onChange={this.handleChange} />
            <small className="form-text text-muted">Product name is required.</small>
            <div className='form-group'>
              <label htmlFor="category" className="text-sm-left">Category</label>
              <select className="form-control" name="category" onChange={this.handleSelect}>
                <option value="" disabled>Select a category</option>
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
            <InputForm text="Minimun Sales Allowed" error={errors.minimumAllowed} label="minimumAllowed" type="text" name="minimumAllowed" id="minimumAllowed" value={product.minimumAllowed} placeholder="Enter minimum sales allowed" onChange={this.handleChange} />
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

export default Product;