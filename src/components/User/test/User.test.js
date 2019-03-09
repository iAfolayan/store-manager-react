import React from 'react';
import { shallow } from 'enzyme';
import User from '..';

describe('User component', () => {
  test('should rendered user component without crashed', () => {
    const wrapper = shallow(<User />);
    expect(wrapper).toMatchSnapshot();
  });  
});