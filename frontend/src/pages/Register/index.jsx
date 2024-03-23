import Form from "../../components/Form";
import styles from "./Register.module.scss";
import axios from "axios";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";
import { base_URL } from "../../config";

const Register = () => {
  const { enqueueSnackbar } = useSnackbar();

  const inputs = [
    {
      name: "username",
      type: "text",
      placeholder: "Enter your name",
      label: "Username:",
      required: true,
    },
    {
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      label: "Email:",
      required: true,
    },
    {
      name: "password",
      type: "password",
      placeholder: "Enter your password",
      label: "Password:",
      required: true,
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm your password",
      label: "Confirm your password:",
      required: true,
    },
  ];

  const handleFormSubmit = async (formData) => {
    console.log(formData);
    const { username, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const data = {
      username,
      email,
      password,
    };

    // Api call to register
    try {
      const res = await axios.post(`${base_URL}/users/register`, data);

      if (res.status === 201) {
        // alert("Success");
        enqueueSnackbar("Registered Successfully", { variant: "success" });
      }

      // console.log(res);
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.response.data.message, { variant: "error" });
    }
  };
  return (
    <div className={styles.registerPage}>
      <Form inputs={inputs} onSubmit={handleFormSubmit}></Form>
      <p>
        Already Registered?<Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Register;
