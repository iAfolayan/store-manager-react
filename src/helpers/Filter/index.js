import React, { Component } from 'react';
import './Filter.scss';

class Filter extends Component {
	render() {
		const { handleChange, value} = this.props;
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
				</form>
			</div>
		);
	}
}

export default Filter;
