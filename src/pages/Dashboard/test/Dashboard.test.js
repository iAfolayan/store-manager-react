import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../index';
import sinon from 'sinon';

const event = {
  target: {
      name:"ghjk",
  },
  getState: () => {}
}

describe('Dashboard', () => {
  test('should rendered Dashboard without crashing', () => {
    const wrapper = shallow(
      <Dashboard />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it.only('should simulate on change event', () => {
      const wrapper = shallow(<Dashboard />)
      sinon.spy(wrapper.instance(), 'handleChange');
      wrapper.instance().handleChange(event);
      expect(wrapper.instance().handleChange.calledOnce)
        .toEqual(true);
      expect(wrapper.instance().handleChange.calledWith(event));
    });
});