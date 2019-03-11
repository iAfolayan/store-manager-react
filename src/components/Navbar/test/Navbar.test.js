import React from 'react';
import { shallow } from 'enzyme';
import {NavigationPage} from '../index';

describe('<NavigationPage />', () => {
  const auth={
    response:'response'
  }
  test('should rendered NavBar without crashing', () => {
    const wrapper = shallow(<NavigationPage auth={auth}/>);
    expect(wrapper).toMatchSnapshot();
    wrapper.instance().renderSalesAttendantMenu()
    wrapper.instance().renderAdminMenu()
  });

  
   Object.defineProperty(window.location, 'replace', {
     configurable: true
   });
   window.location.replace = jest.fn();
   const wrapper = shallow(<NavigationPage auth={auth} />);
   wrapper.instance().logout();
   window.location.replace("http://localhost:5000/");
   expect(window.location.replace).toHaveBeenCalled();
   window.location.replace.mockRestore();
   expect(wrapper).toMatchSnapshot();
});
