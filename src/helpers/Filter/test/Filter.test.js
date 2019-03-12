import React from 'react';
import { shallow, mount } from 'enzyme';
import FilterPage, { Filter } from '..';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const props = {
  auth: {
    response: 1
  },
  handleChange: jest.fn(),
  value: '',
  state: ''
}

const mockStore = configureStore([thunk]);
const store = mockStore({ ...props });

describe('Filter Component', () => {
  test('should render filter component without crashing', () => {
    const wrapper = mount(
    <Provider store={store}>
      <Filter {...props} />
    </Provider>);
    expect(wrapper).toMatchSnapshot();
  })

  test('should rendered menu', () => {
    const wrapper = shallow(<Filter {...props} />);
    wrapper.instance().renderMenu()
    expect(wrapper.instance().renderMenu()).toBeDefined();
  });
});

