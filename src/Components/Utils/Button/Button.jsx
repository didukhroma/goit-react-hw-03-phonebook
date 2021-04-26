import PropTypes from 'prop-types';
import styles from './Button.module.css';
const Button = ({ type = 'button', text = 'Button', onClick, id }) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <button
      type={type}
      onClick={onClick ? handleClick : null}
      className={styles.button}
    >
      {text}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
};
export default Button;
