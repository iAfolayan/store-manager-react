import React from 'react';
import { shallow } from 'enzyme';
import Users from '..';

describe('User page', () => {
  test('should rendered user page without crashed', () => {
    const wrapper = shallow(<Users />);
    expect(wrapper).toMatchSnapshot();
  });
});