import React from 'react';
import { shallow, mount, render } from 'enzyme';

import BillItem from '../components/BillItem';

describe('BillItem', () => {
  it('Should render', () => {
    expect(shallow(<BillItem />).exists()).toBe(true)
  });
});