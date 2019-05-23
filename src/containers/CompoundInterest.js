import React, { Component } from 'react';
import { connect } from 'react-redux';

import './CompoundInterest.css';
import InterestForm from './InterestForm/InterestForm';
import InterestResult from '../components/InterestResult/InterestResult';

class CompoundInterest extends Component {
  render() {
    return(
      <div id='CompoundInterest'>
        <div>
          <InterestForm/>
        </div>
        <div>
          <InterestResult result={this.props.calculate_result}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    calculate_result: state.interest.calculate_result,
  }
}

export default connect(mapStateToProps, null)(CompoundInterest);