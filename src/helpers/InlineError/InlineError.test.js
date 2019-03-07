import React from 'react';
import { shallow } from 'enzyme';
import InlineError from '.';

describe('Test inlineError Component', () => {
  test('should matches the snapshot', () => {
    const wrapper = shallow(<InlineError text="" />);
    expect(wrapper).toMatchSnapshot();
  });
});
