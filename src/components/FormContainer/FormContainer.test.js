import React from 'react';
import { shallow } from 'enzyme';
import FormContainer from '.';

describe('<FormContainer />', () => {
  test('should rendered Form container without crashing', () => {
    const wrapper = shallow(<FormContainer title="Edit" />);
    expect(wrapper).toMatchSnapshot();
  });
});
