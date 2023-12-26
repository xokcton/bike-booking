import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import bicycleApi from '../../api/bicycleApi';
import { CardList, Footer, Form, Header, Statistics } from '../../components';
import {
  addBicycle,
  deleteBicycle,
  getBicyclesState,
  setBicycles,
  updateBicycle,
} from '../../redux/features/bicycleSlice';
import { formatErrors } from '../../utils/formatErrors';
import { availableBikes, averageBikeCost, bookedBikes, totalBikes } from '../../utils/statistics';
import { toastOptions } from '../../utils/toastOptions';
import { validateForm } from '../../utils/validateForm';

import 'react-toastify/dist/ReactToastify.css';
import styles from './Bicycle.module.css';

const initialState = {
  name: '',
  type: '',
  description: '',
  color: '',
  wheel_size: '',
  price: '',
};

const Bicycle = () => {
  const { register, handleSubmit, reset } = useForm({ defaultValues: initialState });
  const dispatch = useDispatch();
  const bicycles = useSelector(getBicyclesState);
  // eslint-disable-next-line no-unused-vars
  const [toggler, setToggler] = useState(false);

  const onSubmit = async (data) => {
    if (!validateForm(data)) return;

    try {
      const response = await bicycleApi.create(data);
      dispatch(addBicycle(response.data));
      updateStatistics();
      toast.success('Created successfully', toastOptions);
      reset();
    } catch (error) {
      toast.error(formatErrors(error), toastOptions);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await bicycleApi.delete(id);
      dispatch(deleteBicycle(response.data));
      updateStatistics();
      toast.success(`${id} deleted successfully`, toastOptions);
    } catch (error) {
      toast.error(formatErrors(error), toastOptions);
    }
  };

  const handleUpdate = async (id, status) => {
    try {
      const response = await bicycleApi.update(id, status);
      dispatch(updateBicycle({ id, status: response.data.status }));
      updateStatistics();
      toast.success(`${id} updated successfully`, toastOptions);
    } catch (error) {
      toast.error(formatErrors(error), toastOptions);
    }
  };

  const updateStatistics = () => {
    setToggler((prevValue) => !prevValue);
    return {
      availableBikes: availableBikes(bicycles),
      bookedBikes: bookedBikes(bicycles),
      totalBikes: totalBikes(bicycles),
      averageBikeCost: averageBikeCost(bicycles),
    };
  };

  useEffect(() => {
    const getAllBicycles = async () => {
      try {
        const response = await bicycleApi.getAll();
        dispatch(setBicycles(response.data));
        updateStatistics();
      } catch (error) {
        toast.error(formatErrors(error), toastOptions);
      }
    };
    getAllBicycles();
  }, []);

  useEffect(() => {
    const getAllBicycles = async () => {
      try {
        const response = await bicycleApi.getAll();
        dispatch(setBicycles(response.data));
        updateStatistics();
      } catch (error) {
        toast.error(formatErrors(error), toastOptions);
      }
    };
    getAllBicycles();
  }, [toggler]);

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.main}>
        <div className={styles.left}>
          {bicycles.length > 0 ? (
            <CardList
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          ) : (
            <div className={styles.empty}>First of all, add a bike.</div>
          )}
        </div>
        <div className={styles.right}>
          <div className={styles.top_right}>
            <Form
              register={register}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              handleCancel={() => reset()}
            />
          </div>
          <Statistics updateStatistics={updateStatistics} />
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Bicycle;
