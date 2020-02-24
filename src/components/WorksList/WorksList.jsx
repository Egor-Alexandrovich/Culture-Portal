import React from 'react';
import './WorksList.scss';

function WorksList({ works }) {
  const rowsList = works.map((item, index) => {
    return <tr key={index}>
      <th scope="row">{index + 1}</th>
      <td>{item.name}</td>
      <td>{item.date}</td>
    </tr>
  });
  return (
    <div className="wrapper-border">
      <table className="table colored-rows table-bordered ">
        <thead className="thead-color">
          <tr>
            <th scope="col">№</th>
            <th scope="col">Творение</th>
            <th scope="col">Дата создания</th>
          </tr>
        </thead>
        <tbody>
          {rowsList}
        </tbody>
      </table>
    </div>
  );
}

export default WorksList;