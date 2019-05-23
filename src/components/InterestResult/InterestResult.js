import React from 'react';

import './InterestResult.scss';

const InterestResult = props => {
  console.log('InterestResult', props.result);
  const result = props.result ? props.result.map(item => {
    return (
      <tr key={item.period}>
        <td>{item.period}</td>
        <td>{item.total_principal_money}</td>
        <td>{item.temp_interest_money}</td>
        <td>{item.total_interest_money}</td>
        <td>{item.total_money}</td>
      </tr>
    )
  }) : null ;

  return(
    <table className="dataTable">
      <thead>
        <tr>
          <th>年月</th>
          <th>總本金</th>
          <th>利息</th>
          <th>總利息</th>
          <th>總金額</th>
        </tr>
      </thead>
      <tbody>
        {result}
      </tbody>
    </table>
  )
}

export default InterestResult;