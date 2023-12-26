/* eslint-disable react/prop-types */
import { useState } from 'react';

import { shortenText } from '../../utils/shortenText';
import { getColor, status_types } from '../../utils/statistics';

import styles from './Card.module.css';

const Card = ({ bicycle, handleDelete, handleUpdate }) => {
  const [currentStatus, setCurrentStatus] = useState(bicycle.status);

  const handleSelect = (e, id) => {
    setCurrentStatus(e.target.value);
    handleUpdate(id, e.target.value);
  };

  return (
    <div
      className={styles.card_wrapper}
      style={{ border: `2px solid ${getColor(currentStatus)}` }}>
      <div className={styles.card_top}>
        <div>
          <b>{shortenText(bicycle.name)}</b> - {shortenText(bicycle.type)}
        </div>
        <div
          className={styles.cross}
          onClick={() => handleDelete(bicycle.id)}>
          &#10006;
        </div>
      </div>
      <div className={styles.card_center}>ID: {bicycle.id}</div>
      <div className={styles.card_bottom}>
        <div className={styles.card_bottom_status}>
          STATUS:{' '}
          <select
            name="status"
            onChange={(e) => handleSelect(e, bicycle.id)}
            defaultValue={currentStatus}>
            {status_types.map((status, idx) => (
              <option
                key={idx}
                value={status}>
                {status}
              </option>
            ))}
          </select>{' '}
        </div>
        <div className={styles.card_bottom_price}>{bicycle.price} UAH/hr.</div>
      </div>
    </div>
  );
};

export default Card;
