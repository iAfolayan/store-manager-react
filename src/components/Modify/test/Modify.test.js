import React from 'react';
import { shallow } from 'enzyme';
import Modify from '..';

describe('<Modify product />', () => {
  test('should rendered Modify Component without crashed', () => {
    const wrapper = shallow(<Modify />);
    expect(wrapper).toMatchSnapshot();
  });
});