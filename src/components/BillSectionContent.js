import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/css/bill-section-content.css';

/**
* BillSectionContent
*
* Wrapper component to render a scrollable and collapsible set of BillItems
*
* @param {object} children - content for section
*/

class BillSectionContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  toggle = () => {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { children } = this.props;
    const { open } = this.state;

    return (
      <div className="bill-section-content">
        <div className="bill-section-content-toggle" onClick={this.toggle}>
        {open ? <span>&#9650; Hide details &#9650;</span> : <span>&#9660; View details &#9660;</span>}
        </div>
        {open && <div className="bill-section-content-open">{children}</div>}
      </div>
    );
  }
}

BillSectionContent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default BillSectionContent;
