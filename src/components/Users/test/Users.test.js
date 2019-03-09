import React from 'react';
import { shallow } from 'enzyme';
import Users from '..';

describe('Users component', () => {
  test('should rendered users component without crashed', () => {
    const wrapper = shallow(<Users />);
    expect(wrapper).toMatchSnapshot();
  });
});