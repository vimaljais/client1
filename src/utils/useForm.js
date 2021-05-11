

import { useState,  } from 'react';

const useForm = () => {
  const [values, setValues] = useState({
    option:" "
  });
  // const [errors, setErrors] = useState({});
  // const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    console.log(values.option)
  };

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   setErrors(validate(values));
  //   setIsSubmitting(true);
  // };

  // useEffect(
  //   () => {
  //     if (Object.keys(errors).length === 0 && isSubmitting) {
  //       callback();
  //     }
  //   },
  //   [errors]
  // );

  return { handleChange, values};
};

export default useForm;