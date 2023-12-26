import axios from './axios';

const path = '/bicycle';

const bicycleApi = {
  create: (data) => axios.post(path, data),
  update: (id, status) => axios.patch(`${path}/${id}`, { status }),
  getAll: () => axios.get(path),
  delete: (id) => axios.delete(`${path}/${id}`),
};

export default bicycleApi;
