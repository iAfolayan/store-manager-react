import React from 'react';
import { shallow } from 'enzyme';
import InputForm from '.';

describe('<InputForm />', () => {
  test('should rendered Login form without crashing', () => {
    const wrapper = shallow(
      <InputForm
        label="text"
        text="text"
        type="text"
        name="text"
        value="text"
        placeholder="text"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
