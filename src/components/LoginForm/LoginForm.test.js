import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginForm, { LoginForm as LoginFormUnit} from '.';


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

  test('should redirect if user is authenticated', () => {
    props.auth.isAuthenticated = true;
    const wrapper = shallow(<LoginFormUnit {...props} />);
    expect(wrapper.is(Redirect)).toEqual(true);
  });

  test('should login the user after providing logon information', () => {
    const wrapper = mount(<LoginFormUnit {...props} />);

    const staffId = wrapper.find('input[name="staffId"]');
    const password = wrapper.find('input[name="password"]');
    const loginForm = wrapper.find('button[type="submit"]');

    staffId.simulate('change', { taget: { value: 'SM001' } });
    password.simulate('change', { taget: { value: 'blahbalh' } });
    loginForm.simulate('submit');

    expect(props.handleSubmit).toHaveBeenCalled();
  });
});
