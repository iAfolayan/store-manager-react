import React from 'react';
import { shallow } from 'enzyme';
import Filter from '..';

describe('Filter Component', () => {
  test('should render filter component without crashed', () => {
    const wrapper = shallow(<Filter />);
    expect(wrapper).toMatchSnapshot();
  })

  test('should test onchange event', () => {
    const wrapper = shallow(<Filter />);
    wrapper.instance().handleChange();
    expect(wrapper).toBeDefined();
  })

 test('should simulate filter', () => {
    const wrapper = shallow(<Filter />);
    wrapper.instance().filterproduct();
    expect(wrapper).toBeDefined();
  });
});
