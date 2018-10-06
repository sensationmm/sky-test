import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Bill from '../components/Bill';

const Home = (props) => {
  const { bill } = props;

  return (
    <div className="table">

      <Bill bill={bill} />
    </div>
  );
}

Home.propTypes = {
  bill: PropTypes.object
};

const mapStateToProps = state => ({
  bill: state.bill
});

export default connect(mapStateToProps)(Home);
