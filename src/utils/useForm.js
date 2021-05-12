import { useState, useEffect } from "react";

const useForm = () => {
  const [values, setValues] = useState({
    stepOne_option: " ",
    stepTwo_option: " ",
    gender: " ",
    age: " ",
    cover_amount: " ",
    name: "",
  });
  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep(step + 1);
    console.log(step);
  };
  const previousStep = () => {
    setStep(step - 1);
  };
  useEffect(() => {
    console.log(values);
    console.log(step);
  }, [values, step]);
  // const [errors, setErrors] = useState({});
  // const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return { handleChange, values, step, nextStep, previousStep };
};

export default useForm;
