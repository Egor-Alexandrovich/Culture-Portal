import React from 'react';
import members from '../../data/members';
import '../WorksList/WorksList.scss';
import './Worklog.scss';

function Worklog() {
  const tablesList = members.map(member => {
    const rowsList = member.contribution.map((item, index) => {
      return <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{item.startTime}</td>
        <td>{item.endTime}</td>
        <td>{item.timeSpent}</td>
        <td>{item.feature}</td>
      </tr>
    });

    return <div className="table-container" key={member.id}>
      <h2>{member.name}</h2>
      <table className="table colored-rows table-bordered ">
        <thead className="thead-color">
          <tr>
            <th scope="col">№</th>
            <th scope="col">Start time</th>
            <th scope="col">End time</th>
            <th scope="col">Time spent</th>
            <th scope="col">Feature</th>
          </tr>
        </thead>
        <tbody>
          {rowsList}
        </tbody>
      </table>
    </div>
  });

  return (
    <div className="worklog-wrapper">
      {tablesList}
    </div>
  );
}

export default Worklog;