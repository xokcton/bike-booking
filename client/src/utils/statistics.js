// (available/busy/unavailable)
const status = {
  Available: 'green',
  Busy: 'orange',
  Unavailable: 'red',
};
const status_types = ['Available', 'Busy', 'Unavailable'];

const bookedBikes = (bicycles) => {
  return bicycles.filter((elem) => elem.status === status_types[1]).length;
};

const availableBikes = (bicycles) => {
  return bicycles.filter((elem) => elem.status === status_types[0]).length;
};

const totalBikes = (bicycles) => {
  return bicycles.length;
};

const averageBikeCost = (bicycles) => {
  return bicycles.reduce((acc, curr) => acc + curr.price, 0) / bicycles.length;
};

const getColor = (bicycle_status) => {
  return status[bicycle_status];
};

export { availableBikes, averageBikeCost, bookedBikes, getColor, status_types, totalBikes };
