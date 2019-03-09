import React from 'react';
import { shallow } from 'enzyme';
import Modify from '..';

describe('Modify page', () => {
  test('should rendered Modify page without crashed', () => {
    const wrapper = shallow(<Modify />);
    expect(wrapper).toMatchSnapshot();
  })
  
});