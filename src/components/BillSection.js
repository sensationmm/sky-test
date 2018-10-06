import React from 'react';
import PropTypes from 'prop-types';

import '../styles/css/bill-section.css';

/**
* BillSection
*
* Wrapper component to render a group of BillItems
*
* @param {object} children - content for section
*/

const BillSection = (props) => {

  const { children } = props;

  return (
    <div className="bill-section">
      {children}
    </div>
  );
}

BillSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default BillSection;
