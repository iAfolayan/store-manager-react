import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '..';

describe('<NavBar />', () => {
  test('should rendered NavBar without crashed', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should simulate logout event', () => {
    const wrapper = shallow(<Navbar />);
    wrapper.instance().logout();
    expect(wrapper).toBeDefined();
  });
});
