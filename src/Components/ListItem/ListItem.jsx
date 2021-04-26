import Button from '../Utils/Button';
import styles from './ListItem.module.css';
import PropTypes from 'prop-types';

const ListItem = ({ contact: { name, number, id }, onClick }) => {
  return (
    <li className={styles.item}>
      <span className={styles.text}>
        {name} : {number}
      </span>
      <Button text="Delete" onClick={onClick} id={id} />
    </li>
  );
};
ListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }),
  onClick: PropTypes.func,
};
export default ListItem;
