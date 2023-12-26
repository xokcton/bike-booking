import styles from './Statistics.module.css';

// eslint-disable-next-line react/prop-types
const Statistics = ({ updateStatistics }) => {
  return (
    <div className={styles.statistics_wrapper}>
      <h4>Statistics</h4>
      <div>
        Total bikes: <b>{updateStatistics().totalBikes}</b>{' '}
      </div>
      <div>
        Available bikes: <b>{updateStatistics().availableBikes}</b>
      </div>
      <div>
        Booked bikes: <b>{updateStatistics().bookedBikes}</b>
      </div>
      <div>
        Average bike cost: <b>{updateStatistics().averageBikeCost.toFixed(2)}</b> UAH/hr.
      </div>
    </div>
  );
};

export default Statistics;
