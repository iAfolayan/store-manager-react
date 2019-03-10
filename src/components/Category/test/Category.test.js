import React from 'react';
import { shallow, mount } from 'enzyme';
import Category from '..';

describe('Category component', () => {
  test('should rendered category component', () => {
    const wrapper = shallow(<Category />);
    expect(wrapper).toMatchSnapshot();
  })

  test('should simulate handleSubmit', () => {
    const wrapper = mount(<Category />);
    wrapper.simulate().handleSubmit();
    expect(wrapper).toBeDefined();
  });

  test.only('should simulate onChange event', () => {
    const wrapper = mount(<Category />);
    wrapper.instance().handleChange();
    expect(wrapper).toBeDefined();
  });
});