import React from 'react';
import { shallow } from 'enyzme';
import Filter from '..';

describe('Filter Component', () => {
  test('should render filter component without crashed', () => {
    const wrapper = shallow(<Filter />);
    expect(wrapper).toMatchSnapshot();
  })

  test('should test onchange event', () => {
    const wrapper = shallow(<Filter onChange={handleChange} />);
    wrapper.instance().handleChange();
    expect(wrapper).toBeDefined();
  })

 test('should simulate filter', () => {
    const wrapper = shallow(<Filter filterproduct={filterproduct} />);
    wrapper.instance().filterproduct();
    expect(wrapper).toBeDefined();
  });
});
