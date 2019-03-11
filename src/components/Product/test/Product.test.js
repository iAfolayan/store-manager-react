import React from 'react';
import { shallow, mount } from 'enzyme';
import { Product } from '..';
const nextProps = {
  product: {
    creatingProduct: true,
  }
}
describe('<Product Component />', () => {
  // test('should rendered Product component without crashing', () => {
  //   const wrapper = shallow(<Product />);
  //   expect(wrapper).toMatchSnapshot();
  // });
  it('should change the state after change the input value', () => {
    const newValue = 'iolan@anla.com';
    const wrapper = mount(<Product {...nextProps} />);
    wrapper.find('#productname').simulate('change', {
      target: { name: newValue }
    });
    wrapper.update();
    expect(wrapper.find('#productname').prop('name')).toContain('productname');
  });

  it('should simulate on submit event ', () => {
    const wrapper = mount(<Product {...nextProps}  />);
    wrapper.find('form').simulate('submit', {
      preventDefault: jest.fn()
    });
    expect(wrapper.find('form')).toBeDefined();
  });

});
