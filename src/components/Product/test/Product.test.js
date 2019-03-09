import React from 'react';
import { shallow } from 'enzyme';
import Product from '..';

describe('<Product Component />', () => {
  test.only('should rendered Product component without crashed', () => {
    const wrapper = shallow(<Product />);
    expect(wrapper).toMatchSnapshot();
  });
});