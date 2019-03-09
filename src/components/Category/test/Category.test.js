import React from 'react';
import { shallow } from 'enzyme';
import Category from '..';

describe('Category component', () => {
  test('should rendered category component', () => {
    const wrapper = shallow(<Category />);
    expect(wrapper).toMatchSnapshot();
  })
});