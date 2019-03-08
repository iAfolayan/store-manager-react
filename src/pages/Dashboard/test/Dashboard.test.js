import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../index';

describe('Dashboard', () => {
  test('should rendered Dashboard without crashed', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toMatchSnapshot();
  })
});