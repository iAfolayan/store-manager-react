import React from 'react';
import { shallow } from 'enzyme';
import User from '..';

describe('User page', () => {
  test('should rendered User page without crashed', () => {
    const wrapper = shallow(<User />);
    expect(wrapper).toMatchSnapshot();
  });
});