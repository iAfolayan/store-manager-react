import React from 'react';
import { shallow } from 'enzyme';
import Filter from '..';

describe('Filter Component', () => {
  test('should render filter component without crashed', () => {
    const wrapper = shallow(<Filter />);
    expect(wrapper).toMatchSnapshot();
  })
});

