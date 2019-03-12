import React, { Component } from 'react';
import './Filter.scss';
import { connect } from 'react-redux';
// import Cart from './image/cart.png';

export class Filter extends Component {
	renderMenu() {
		return (
			<div id="cartHolder">
				<img src='./image/cart.png' alt="" />
			</div>
		);
	}

	render() {
		const { handleChange, value} = this.props;
		const { response } = this.props.auth;
		return (
			<div className="col-sm-12 filter">
				<form className="form-group">
					<input
						type="search"
						className="form-control col-md-3"
						placeholder="Filter product by name"
						onChange={handleChange}
						value={value}
					/>
					{ response.role === 1 ? '' : this.renderMenu() }
				</form>
				
			</div>
		);
	}
}

const mapStateToProps = state => ({
  auth: state.authReducer
});

export default connect(
  mapStateToProps,
)(Filter);