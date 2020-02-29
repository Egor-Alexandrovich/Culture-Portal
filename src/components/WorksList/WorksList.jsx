import React from 'react';
import { withTranslation } from 'react-i18next';
import './WorksList.scss';

function WorksList({ works, t }) {
  const rowsList = works.map((item, index) => {
    return <tr key={index}>
      <th scope="row">{index + 1}</th>
      <td>{t(item.name)}</td>
      <td>{item.date}</td>
    </tr>
  });
  return (
    <div className="wrapper-border">
      <table className="table colored-rows table-bordered ">
        <thead className="thead-color">
          <tr>
            <th scope="col">№</th>
            <th scope="col">{t('Creation')}</th>
            <th scope="col">{t('Date of creation')}</th>
          </tr>
        </thead>
        <tbody>
          {rowsList}
        </tbody>
      </table>
    </div>
  );
}

export default withTranslation()(WorksList);