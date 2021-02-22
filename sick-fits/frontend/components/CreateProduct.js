import useForm from '../lib/useForm';

const CreateProduct = () => {
  const { inputs, handleChange, clearForm, resetForm } = useForm();
  return (
    <form>
      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={inputs.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="price">
        Price
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={inputs.price}
          onChange={handleChange}
        />
      </label>
      <button type="button" onClick={clearForm}>
        Clear Form
      </button>
      <button type="button" onClick={resetForm}>
        Reset Form
      </button>
    </form>
  );
};

export default CreateProduct;
