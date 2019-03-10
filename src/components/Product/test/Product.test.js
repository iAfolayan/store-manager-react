import React from 'react';
import { shallow, mount } from 'enzyme';
import Product from '..';

describe('<Product Component />', () => {
  test.only('should rendered Product component without crashing', () => {
    const wrapper = shallow(<Product />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should change the state after change the input value', () => {
    const newValue = 'iolan@anla.com';
    const wrapper = mount(<Product />);
    wrapper.find('#productName').simulate('change', {
      target: { name: newValue }
    });
    wrapper.update();
    expect(wrapper.find('#productName').prop('name')).toContain('productName');
    expect(wrapper.find('#description').prop('description')).toContain('description');
  });

  it('should simulate on submit event ', () => {
    const wrapper = mount(<Product />);
    wrapper.find('form').simulate('submit', {
      preventDefault: jest.fn()
    });
    expect(wrapper.find('form')).toBeDefined();
  });

});
