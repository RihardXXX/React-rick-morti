import React from 'react';

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {label}: {item[field]}
    </li>
  );
};

export default Record;
