import React from 'react';
import { shallow } from 'enzyme';
import Product from '..';

describe('<Product page />', () => {
  test('should rendered product page without crashed', () => {
    const wrapper = shallow(<Product />);
    expect(wrapper).toMatchSnapshot();
  })
});