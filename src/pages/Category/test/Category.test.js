import React from 'react';
import { shallow } from 'enzyme';
import Category from '..';

describe('Category page', () => {
  test('should rendered category page without crashed', () => {
    const wrapper = shallow(<Category />);
    expect(wrapper).toMatchSnapshot();
  })
  
});