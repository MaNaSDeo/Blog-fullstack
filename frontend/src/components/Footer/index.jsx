import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      &copy; 2024 &nbsp;<Link to="/">Blog</Link>
    </div>
  );
};

export default Footer;
