import React from 'react';
import { shallow } from 'enzyme';
import Category from '..';

describe('Category component', () => {
  test('should rendered category component', () => {
    const wrapper = shallow(<Category />);
    expect(wrapper).toMatchSnapshot();
  })

  test('should simulate handleSubmit', () => {
    const wrapper = shallow(<Category />);
    wrapper.simulate().handleSubmit();
    expect(wrapper).toBeDefined();
  });
});