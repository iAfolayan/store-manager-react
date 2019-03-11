import React from 'react';
import { shallow, mount } from 'enzyme';
import UserConnected, { User } from '..';
import sinon from 'sinon';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
const props = {
  newUser: {
    creatingUser: true,
    createStatus: false,
  }
}
const mockStore = configureStore([thunk]);
const store = mockStore({ ...props });
describe('User component', () => {
  it.only('should rendered user component without crashing', () => {
    const wrapper = shallow
    (<Provider store={store}>
    <UserConnected {...props} />
    </Provider>
      );
    expect(wrapper).toMatchSnapshot();
  });

  it('should simulate onChange event', () => {
    const wrapper = mount(<User {...props} />);
    const event = {
      target: {
        name:"ghjk",
        value: "ghhdgc"
      }
    }

    sinon.spy(wrapper.instance(), 'handleChange');
    wrapper.instance().handleChange(event);
    expect(wrapper.instance().handleChange.calledOnce)
      .toEqual(true);
    expect(wrapper.instance().handleChange.calledWith(event));
  });

  it('should simulate onSubmit event', () => {
    const wrapper = shallow(<User {...props} />);
    const event = {
      target: {
        name: "hgfhdghj",
        value: "ghsgfhj"
      },
      preventDefault: jest.fn()
    }
    sinon.spy(wrapper.instance(), 'handleSubmit');
    wrapper.instance().handleSubmit(event);
    expect(wrapper.instance().handleSubmit.calledOnce)
      .toEqual(true);
    expect(wrapper.instance().handleSubmit.calledWith(event));
  });
});