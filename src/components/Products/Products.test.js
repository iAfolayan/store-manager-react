import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Products from '.';
import { importSpecifier } from '@babel/types';

describe('<Products />', () => {
  test('should render product display without crashed', () => {
    const wrapper = shallow(<Products />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should simulate onChange event', () => {
    const wrapper = mount(<Router><Products /></Router>);
    wrapper.instance().handleChange();
    expect(wrapper).toBeDefined();
  });
});