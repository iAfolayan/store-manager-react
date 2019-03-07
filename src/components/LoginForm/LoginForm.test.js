import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginForm from '.';

describe('<LoginForm />', () => {
  test('should render login form', () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should simulate on submit event', () => {
    const wrapper = shallow(<LoginForm />);
    wrapper.instance().handleSubmit({
      preventDefault: jest.fn()
    });
    expect(wrapper).toBeDefined();
  });

  test('should simulate handleChange event', () => {
    const newValue = 'SM0002';
    const wrapper = mount(
      <Router>
        <LoginForm />
      </Router>);
    wrapper.find('input[type="text"]').simulate('change', {
      target: { name: newValue }
    });
    wrapper.update();
    expect(wrapper.find('input[type="text"]').prop('name')).toContain('staffId');
    expect(wrapper.find('input[type="password"]').prop('name')).toContain('password');
  });

  // test('pass a selected value to the onChange handler', () => {
  //   const wrapper = mount(<LoginForm />);
  //   wrapper.instance().handleChange();
  //   expect(wrapper).toBeDefined();
  // });

  // it('Simulate submit button ', () => {
  //   const wrapper = shallow(<LoginForm />);
  //   wrapper.find('form').simulate('submit', {
  //     preventDefault: jest.fn()
  //   });
  //   expect(wrapper.find('form')).toBeDefined();
  // });
});
