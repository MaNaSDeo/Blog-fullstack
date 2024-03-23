import Form from "../../components/Form/Form";
import styles from "./Login.module.scss";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { Link, useNavigate } from "react-router-dom";
import { base_URL } from "../../config";

const Login = () => {
  const navigate = useNavigate();
  const inputs = [
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
  ];

  const handleFormSubmit = async (formData) => {
    const { email, password } = formData;
    try {
      // Api call to register
      const res = await axios.post(`${base_URL}/users/login`, formData);

      const token = res.data.token;
      const user = res.data.user;
      // console.log(token);

      localStorage.setItem("token", token);
      localStorage.setItem("user", user);

      console.log(res);

      if (res.status === 200) {
        navigate("/dashboard");
        enqueueSnackbar("Login Success", { variant: "success" });
      }
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.response.data.message, { variant: "error" });
    }
  };
  return (
    <div className={styles.loginPage}>
      <Form inputs={inputs} onSubmit={handleFormSubmit}></Form>
      <p>
        Don`t have account yet?<Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;
