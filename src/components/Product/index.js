import React, { Component, Fragment } from 'react';
import './Product.scss'
import InputForm from '../../components/InputForms';

class Product extends Component {
state = {
  name: '',
  category: '',
  description:'',
  price:'',
  image: '',
  minimumAllowed:'',
  error:{}
}
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value});
  }

  handleSelect = event => {
    console.log(event)
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('Submitted');
  }
  render() {
    const { name, description, price, minimumAllowed, image } = this.state;
    return (
      <Fragment>
        <h5 className="ml-3 text-primary">Create Product</h5>
        <hr className="mr-5" />
        <div className="col-md-6 formWrapper">
          <form onSubmit={this.handleSubmit}>
            <InputForm
              text="Name"
              label="productName"
              type="text"
              name="productName"
              id="productName"
              value={name}
              placeholder="Name"
              onChange={this.handleChange}
            />
            <small id="nameHelp" className="form-text text-muted">Product name is required.</small>
      
            <div className='form-group'>
              <label htmlFor="category" className="text-sm-left">Category</label>
              <select className="form-control" name="category" onChange={this.handleSelect}>
                <option value="" disabled>Select a category</option>
                <option value="Mobile">Mobile</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="description" className="text-sm-left">Description</label>
              <textarea className="form-control" value={description} name="description" id="description" placeholder="Description" onChange={this.handleChange}></textarea>
              <small id="descHelp" className="form-text text-muted">Give a descriptive information about product</small>
            </div>

            <InputForm
              text="Price"
              label="price"
              type="number"
              name="price"
              id="price"
              value={price}
              placeholder="Enter price"
              onChange={this.handleChange}
            />
            <InputForm
              text="Minimun Sales Allowed"
              label="minimumAllowed"
              type="number"
              name="minimumAllowed"
              id="minimumAllowed"
              value={minimumAllowed}
              placeholder="Enter minimum sales allowed"
              onChange={this.handleChange}
            />
            <div className="form-group">
              <label htmlFor="image text-sm-left">Image</label>
              <input type="file" className="form-control-file" id="image" />
              <small id="productHelp" className="form-text text-muted">Upload product image</small>
            </div>
            <button className="btn btn-outline-primary float-right">Add product</button>
          </form>
        </div>
        </Fragment>
    );
  }
}

export default Product;