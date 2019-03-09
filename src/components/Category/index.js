import React, { Component, Fragment } from 'react';
import InputForm from '../InputForms';
import { ValidateCategory } from '../../helpers/validate';
import './Category.scss';

class Category extends Component {
state = {
  name: '',
  errors:{}
}
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    const { name } = this.state;
    const errors = ValidateCategory(name);
    console.log(errors)
    if (errors) {
      this.setState({ errors });
    }
  }
  render() {
    const { name, errors } = this.state;
    return (
      <Fragment>
        <h5 className="ml-3 text-primary">Create Category</h5>
        <hr className="mr-5" />
        <div className="col-md-6 formWrapper">
          <form onSubmit={this.handleSubmit}>
              <InputForm
                error={errors.name}
                text="Name"
                label="categoryName"
                name="categoryName"
                id="categoryName"
                value={name}
                placeholder="Enter category name"
                onChange={this.handleChange}
              />
              <button className="btn btn-outline-primary float-right">Add Category</button>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default Category;