// components/Button.js
import styles from '../styles/button.module.css';

const Button = ({ children, onClick, type = 'button' }) => {
  return (
    <button className={styles.button} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
