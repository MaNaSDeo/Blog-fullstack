import { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import styles from "./Form.css";

const Form = ({ inputs, onSubmit }) => {
  const [formData, setFormData] = useState({});

  // Update formData state when input values change
  const handleInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    console.log(formData);
  };
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        {inputs.map((input, i) => {
          return (
            <Input
              key={input.name}
              type={input.type || "text"}
              placeholder={input.placeholder || ""}
              value={formData[input.name]}
              onChange={handleInputChange}
              name={input.name || ""}
              label={input.label}
              required={input.required}
            />
          );
        })}
        <Button>Submit</Button>
      </form>
    </>
  );
};

export default Form;
