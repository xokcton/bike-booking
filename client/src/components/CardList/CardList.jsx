import { useSelector } from 'react-redux';

import { Card } from '../';
import { getBicyclesState } from '../../redux/features/bicycleSlice';

import styles from './CardList.module.css';

// eslint-disable-next-line react/prop-types
const CardList = ({ handleDelete, handleUpdate }) => {
  const bicycles = useSelector(getBicyclesState);

  return (
    <div className={styles.card_list_wrapper}>
      {bicycles.map((bicycle) => (
        <Card
          key={bicycle.id}
          bicycle={bicycle}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </div>
  );
};

export default CardList;
