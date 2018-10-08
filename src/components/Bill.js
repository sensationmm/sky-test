import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import BillItem from './BillItem';
import BillSection from './BillSection';
import BillSectionContent from './BillSectionContent';
import SkyLogo from '../images/sky-logo.png';

import '../styles/css/bill.css';

class Bill extends Component {
  formatDate = (date) => {
    return moment(date).format('Do MMM YYYY');
  }

  formatCurrency = (value) => {
    return `£${parseFloat(value).toFixed(2)}`;
  }

  render() {
    const { formatDate, formatCurrency, props } = this;
    const { bill } = props;

    if(!bill) {
      return null;
    }

    return (
      <div className="bill">
        <div className="bill-header">
          <div className="bill-header-logo"><img src={SkyLogo} alt="Sky logo" /></div>
          <h1>Your Bill</h1>
        </div>

        <BillSection>
          <BillItem title="Bill Total" value={formatCurrency(bill.total)} />
        </BillSection>

        <BillSection>
          <BillItem title="Bill date" value={formatDate(bill.statement.generated)} />
          <BillItem title="Bill period" value={
            `${formatDate(bill.statement.period.from)} - ${formatDate(bill.statement.period.to)}`
          } />
          <BillItem title="Due date" value={formatDate(bill.statement.due)} />
        </BillSection>

        <BillSection>
          <BillItem title="Subscriptions" value={formatCurrency(bill.package.total)} />
          <BillSectionContent>
          {
            bill.package.subscriptions.map((item, count) => {
              const title = `${item.name} (${item.type})`;
              return <BillItem key={`subs-${count}`} title={title} value={formatCurrency(item.cost)} />
            })
          }
          </BillSectionContent>
        </BillSection>

        <BillSection>
          <BillItem title="Call Charges" value={formatCurrency(bill.callCharges.total)} />
          <BillSectionContent>
          {
            bill.callCharges.calls.map((item, count) => {
              const title = `${item.called} (${item.duration})`;
              return <BillItem key={`call-${count}`} title={title} value={formatCurrency(item.cost)} />
            })
          }
          </BillSectionContent>
        </BillSection>

        <BillSection>
          <BillItem title="Sky Store" value={formatCurrency(bill.skyStore.total)} />
          <BillSectionContent>
          {
            bill.skyStore.rentals.map((item, count) => {
              const title = `Rental: ${item.title}`;
              return <BillItem key={`subs-${count}`} title={title} value={formatCurrency(item.cost)} />
            })
          }
          {
            bill.skyStore.buyAndKeep.map((item, count) => {
              const title = `Purchase: ${item.title}`;
              return <BillItem key={`subs-${count}`} title={title} value={formatCurrency(item.cost)} />
            })
          }
          </BillSectionContent>
        </BillSection>
      </div>
    );
  }
}

Bill.propTypes = {
  bill: PropTypes.object
};

export default Bill;
