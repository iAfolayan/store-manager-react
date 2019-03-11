import React from 'react';
import { shallow, mount } from 'enzyme'
import { ProductList } from '../index';
import { MemoryRouter } from 'react-router-dom';
import sinon from 'sinon';
const props = {
  addToCart: jest.fn(),
  auth: {
    response: {
      role: 1
    }
  },
  products: [{
    productname: '',
    id: 1,
    image: '',
    description: '',
    price: '',
    minimumallowed: ''
  }]
}
describe('<ProductListPage />', () => {
  test('should test product info', () => {
    const wrapper = mount(<MemoryRouter>
      <ProductList {...props} />
    </MemoryRouter>);
    expect(wrapper).toMatchSnapshot();
  });
});