import styles from "./Input.css";

const Input = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  label,
  required,
}) => {
  if (type === "textarea") {
    return (
      <>
        {label && <label>{label}</label>}
        <textarea
          className={styles.input}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          required={required}
        />
      </>
    );
  } else {
    return (
      <>
        {label && <label>{label}</label>}
        <input
          className={styles.input}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          required={required}
        />
      </>
    );
  }
};

export default Input;
