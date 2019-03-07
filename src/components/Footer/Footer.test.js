import React from 'react';
import { shallow } from 'enzyme';
import Footer from '.';

describe('Test Footer Component', () => {
  test('should matches the snapshot', () => {
    const wrapper = shallow(<Footer footerClassName="" />);
    expect(wrapper).toMatchSnapshot();
  });
});
