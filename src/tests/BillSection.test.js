import React from 'react';
import { shallow, mount, render } from 'enzyme';

import BillSection from '../components/BillSection';

describe('BillSection', () => {
  it('Should render', () => {
    expect(shallow(<BillSection />).exists()).toBe(true)
  });
});