import Input from '../Utils/Input';
import PropTypes from 'prop-types';

const Filter = ({ onChange }) => {
  return <Input type="text" name="find contacts by name" onChange={onChange} />;
};
Filter.propTypes = {
  onChange: PropTypes.func,
};
export default Filter;
