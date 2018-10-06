import React from 'react';
import PropTypes from 'prop-types';

import '../styles/css/bill-item.css';

/**
* BillItem
*
* Renders an entry in the bill
*
* @param {string} title - the title of the item
* @param {string} value - the item value
*/

const BillItem = (props) => {
  const { title, value } = props;

  return (
    <div className="bill-item">
      <div className="bill--item-title">{title}</div>
      <div className="bill--item-value">{value}</div>
    </div>
    );
}

BillItem.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string
};

export default BillItem;
