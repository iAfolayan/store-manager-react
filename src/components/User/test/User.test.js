import React from 'react';
import { shallow } from 'enzyme';
import User from '..';

describe('User component', () => {
  test('should rendered user component without crashing', () => {
    const wrapper = shallow(<User />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should simulate onChange event', () => {
    const wrapper = shallow(<User />);
    wrapper.instance().handleChange();
    expect(wrapper).toBeDefined();
  });

  test('should simulate onSubmit event', () => {
    const wrapper = shallow(<User />);
    wrapper.instance().handleSubmit();
    expect(wrapper).toBeDefined();
  });
});