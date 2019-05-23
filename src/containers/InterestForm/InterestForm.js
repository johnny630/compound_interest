import React from 'react';
import { connect } from 'react-redux';

import './InterestForm.scss';
import * as actions from '../../store/actions/index';

const InterestForm = props => {
  const interest_arr = [] ,interest_max = 20;for( let i=1; interest_arr.push(i++) < interest_max;);
  let interest_options = interest_arr.map(i => {
    return <option key={i} value={0.01 * i} >{i}%</option>
  });

  const stop_money_arr = [] ,stop_money_max = 40;for( let i=0; stop_money_arr.push(i++) <= stop_money_max;);
  let stop_money_options = stop_money_arr.map(i => {
    return <option key={i} value={i} >{i === 0 ? '不停止投入' : i+'年後停止'}</option>
  });

  const inputChangedHandler = (event) => {
    console.log(event.target.id, event.target.value);
    props.onUpdateFormData(event.target.id, event.target.value);
    
  }

  return (
    <div id="InterestForm">
      <div >
        <label htmlFor="principal">本金:</label>
        <input type="number"  defaultValue={props.principal} id="principal" min="1" onChange={(event) => inputChangedHandler(event)}/>
      </div>
      <div >
        <label htmlFor="interest">年利率:</label>
        <select id="interest" defaultValue={props.interest} onChange={(event) => inputChangedHandler(event)}>
          {interest_options}
        </select>
      </div>
      <div >
        <label htmlFor="money_per_period">週期投入金額:</label>
        <select id="interest_period" defaultValue={props.interest_period} onChange={(event) => inputChangedHandler(event)}>
          <option value="month">每月</option>
          <option value="year">每年</option>
        </select>
        <input type="number"  defaultValue={props.money_per_period} id="money_per_period" min="1" onChange={(event) => inputChangedHandler(event)}/>
        <select id="stop_money_years" defaultValue={props.stop_money_years} onChange={(event) => inputChangedHandler(event)}>
          {stop_money_options}
        </select>
      </div>
      <div >
        <label htmlFor="deposit_years">計算年份:</label>
        <input type="number"  defaultValue={props.deposit_years} id="deposit_years" min="1" onChange={(event) => inputChangedHandler(event)}/>
      </div>
      
      <button type="button" className="sendBtn" onClick={props.calculate}>send</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    principal: state.interest.principal,
    interest: state.interest.interest,
    interest_period: state.interest.interest_period,
    money_per_period: state.interest.money_per_period,
    stop_money_years: state.interest.stop_money_years,
    deposit_years: state.interest.deposit_years,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUpdateFormData: (stateAttr, stateValue) => dispatch(actions.updateFormData(stateAttr, stateValue)),
    calculate: () => dispatch(actions.calculateCompoundInterest()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InterestForm);