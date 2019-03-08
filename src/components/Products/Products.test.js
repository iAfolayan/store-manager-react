import React from 'react';
import {shallow} from 'enzyme';
import Products from '.';

describe('<Products />', () => {
  test('should render product display without crashed', () => {
    const wrapper = shallow(<Products />);
    expect(wrapper).toMatchSnapshot();
  });
});