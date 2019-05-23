import * as actionTypes from '../actions/actionTypes';

const initialState = {
  principal: 1000000,
  interest: 0.03,
  interest_period: 'month',
  money_per_period: 50000,
  stop_money_years: 0,
  deposit_years: 20,
  calculate_result: [],
}

const calculateCompoundInterest = (state, action) => {

  console.log(state.principal, state.interest, state.interest_period, state.money_per_period, state.deposit_years, state.stop_money_years);
  let calculate_interest = state.interest_period === 'month' ? (state.interest/12).toFixed(6) : state.interest;
  let period_times = state.interest_period === 'month' ? state.deposit_years * 12 : state.deposit_years;
  let stop_money_period = state.interest_period === 'month' ? state.stop_money_years * 12 : state.stop_money_years;

  let total_money = state.principal;
  let total_principal_money = state.principal;
  let total_interest_money = 0;
  let result = [];
  for (let i = 1 ; i <= period_times ; i++) {
    let temp_interest_money = Math.round(total_money * (calculate_interest));
    total_interest_money += temp_interest_money;
    total_money = total_money + temp_interest_money;
    // console.log(convert_period_str(i, state.interest_period) + ' / 總本金:' + total_principal_money + ' / 此次利息:' + temp_interest_money + ' / 總利息:' + total_interest_money + ' / 總金額:' + total_money);
    result.push({
      period: convert_period_str(i, state.interest_period),
      total_principal_money: total_principal_money,
      temp_interest_money: temp_interest_money,
      total_interest_money: total_interest_money,
      total_money: total_money,
    })

    if (stop_money_period === 0 || i < stop_money_period){
      total_money += state.money_per_period;
      total_principal_money += state.money_per_period;
    }    
  }
  console.log(result);
  return {
    ...state,
    ...{ calculate_result: result }
  };
}

const convert_period_str = (num, period) => {
  if (period === 'month'){
    return parseInt(num/12) + ' 年 ' + String(num%12).padStart(2, '0') + ' 月';
  }else{
    return num + ' 年';
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.UPDATE_FORM_DATA:
      return {
        ...state,
        ...{ [action.stateAttr]: isNaN(action.stateValue) ? action.stateValue : +action.stateValue }
      };
    case actionTypes.CALCULATE_COMPOUND_INTEREST: 
      return calculateCompoundInterest(state, action);
    default:
      return state;
  }
}

export default reducer;