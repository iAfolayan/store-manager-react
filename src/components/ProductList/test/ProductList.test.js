import React from 'react';
import { shallow } from 'enzyme'
import ProductList from '../index';

describe('<ProductList />', () => {
  test('should test product info', () => {
    const wrapper = shallow(<ProductList />);
    expect(wrapper).toMatchSnapshot();
  });
});