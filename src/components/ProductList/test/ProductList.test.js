import React from 'react';
import { shallow } from 'enzyme'
import ProductList from '..';

describe('<ProductList />', () => {
  const products = [];
  test('should test product info', () => {
    const wrapper = shallow(<ProductList products />);
    expect(wrapper).toMatchSnapshot();
  });
});