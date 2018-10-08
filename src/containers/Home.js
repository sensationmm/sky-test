import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Bill from '../components/Bill';

const Home = (props) => {
  const { bill, isLoading } = props;

  return (
    <div className="table">

      <Bill bill={bill} isLoading={isLoading} />
    </div>
  );
}

Home.propTypes = {
  bill: PropTypes.object
};

const mapStateToProps = state => ({
  bill: state.bill,
  isLoading: state.loader.isLoading
});

export default connect(mapStateToProps)(Home);
