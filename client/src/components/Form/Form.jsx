import styles from './Form.module.css';

// eslint-disable-next-line react/prop-types
const Form = ({ register, handleSubmit, onSubmit, handleCancel }) => {
  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputs}>
        <input
          className={styles.inputs_items}
          type="text"
          placeholder="Name"
          required
          {...register('name')}
        />
        <input
          className={styles.inputs_items}
          type="text"
          placeholder="Type"
          required
          {...register('type')}
        />
        <input
          className={styles.inputs_items}
          type="text"
          placeholder="Color"
          required
          {...register('color')}
        />
        <input
          className={styles.inputs_items}
          type="number"
          placeholder="Wheel size"
          required
          min={0}
          {...register('wheel_size')}
        />
        <input
          className={styles.inputs_items}
          type="text"
          placeholder="Price"
          required
          {...register('price')}
        />
        <input
          className={styles.inputs_items}
          type="text"
          disabled
          placeholder="ID (slug): ХХХХХХХХХХХХХ"
        />
      </div>
      <textarea
        name=""
        className={styles.description}
        required
        {...register('description')}
        placeholder="Description"></textarea>
      <div className={styles.buttons}>
        <input
          type="submit"
          value="SAVE"
        />
        <input
          type="button"
          value="CLEAR"
          onClick={handleCancel}
        />
      </div>
    </form>
  );
};

export default Form;
