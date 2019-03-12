import React from 'react';
import { shallow, mount } from 'enzyme';
import cart from './cart';
import sinon from 'sinon';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const props = {
   cart: [{
    productname: 'Mobile',
    id: 1,
    image: 'mobile.png',
    description: 'This is lovely and interesting',
    price: 340,
    minimumallowed: 40
  }]
}

const mockStore = configureStore([thunk]);
const store = mockStore({ ...props });

describe('<Cart />', () => {
  test('should test cart info', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <cart {...props} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});