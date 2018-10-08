import React from 'react';
import { shallow, mount, render } from 'enzyme';

import BillSectionContent from '../components/BillSectionContent';
import BillItem from '../components/BillItem';

describe('BillSectionContent', () => {
  it('Should render', () => {
    expect(shallow(<BillSectionContent />).exists()).toBe(true);
  });

  it('Should be closed by default', () => {
    expect(shallow(<BillSectionContent><BillItem title="Test" value={10} /></BillSectionContent>).find('.bill-item').exists()).toBe(false);
  });

  // it('Should be open after click', () => {
  //   const wrapper = shallow(<BillSectionContent><BillItem title="Test" value={10} /></BillSectionContent>); 

  //   wrapper.instance().toggle;

  //   expect(wrapper.find('.bill-item').exists()).toBe(true);
  // });
});