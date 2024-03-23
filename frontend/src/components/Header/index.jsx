import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const logout = () => {
    localStorage.clear();
    alert("logout");
  };

  return (
    <div className={styles.header}>
      <div className={styles.header_blog_name}>Blog</div>
      <nav className={styles.header_navigation}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li onClick={logout}>Logout</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
