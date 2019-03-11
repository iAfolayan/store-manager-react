import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import LoginForm, { Login } from '.';
import { loginProps } from '../../mockData';

const props = {
  auth: {
    isAuthenticated: true,
  },
  handleSubmit: jest.fn(),
  login: jest.fn(),
}

describe('<LoginForm />', () => {
  test('should render login form', () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper).toMatchSnapshot();
  });

  // test('should simulate on submit event', () => {
  //   const wrapper = shallow(<LoginForm />);
  //   wrapper.instance().handleSubmit();
  //   expect(wrapper).toBeDefined();
  // });
  it('calls handleSubmit()', () => {
    const wrapper = shallow(<Login {...loginProps}/>);
    const event = Object.assign(jest.fn(), { preventDefault: () => {} });
    sinon.spy(wrapper.instance(), 'handleSubmit');
    wrapper.instance().handleSubmit(event);
    expect(wrapper.instance().handleSubmit.calledOnce)
      .toEqual(true);
    expect(wrapper.instance().handleSubmit.calledWith(event));
});
  test('should simulate handleChange event', () => {
    const newValue = 'SM0002';
    const wrapper = mount(
      <MemoryRouter>
        <Login />
      </MemoryRouter>);
    wrapper.find('input[type="text"]').simulate('change', {
      target: { name: newValue }
    });
    wrapper.update();
    expect(wrapper.find('input[type="text"]').prop('name')).toContain('staffId');
    expect(wrapper.find('input[type="password"]').prop('name')).toContain('password');
  });

  test('should redirect if user is authenticated', () => {
    const wrapper = shallow(<Login {...props} />);
    
    expect(wrapper.find("Redirect").length).toEqual(1);
  });

  test('should login the user after providing logon information', () => {
    const event = {
      target: {
        name: "hgfhdghj",
        value: "ghsgfhj"
      },
      preventDefault: jest.fn()
    }
    const wrapper = mount(
    <MemoryRouter>
    <Login {...props}/>
    </MemoryRouter>);
    const spy = sinon.spy(wrapper.find('LoginForm').instance(),'handleSubmit');
    const spyWrapper = wrapper.find('LoginForm').instance().handleSubmit;
    wrapper.find('LoginForm').instance().handleSubmit(event)
    expect(spyWrapper.calledOnce)
      .toEqual(true);
    expect(spyWrapper.calledWith(event));
  });
});
