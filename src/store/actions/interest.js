import * as actionTypes from './actionTypes';

export const updateFormData = (stateAttr, stateValue) => {
  return {
    type: actionTypes.UPDATE_FORM_DATA,
    stateAttr: stateAttr,
    stateValue: stateValue,
  }
}

export const calculateCompoundInterest = () => {
  return {
    type: actionTypes.CALCULATE_COMPOUND_INTEREST,
  }
}