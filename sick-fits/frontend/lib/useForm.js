import { useState } from 'react';

const useForm = (initial = {}) => {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);

  // {
  //   name: 'Vasili',
  //   description: 'nice shoes',
  //   price: 1000
  // }

  function handleChange(e) {
    let { value, name, type } = e.target;
    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      [value] = e.target.files;
    }
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankState);
  }

  // return the things we want to surface from this custom hook
  return {
    inputs,
    handleChange,
    clearForm,
    resetForm,
  };
};

export default useForm;
