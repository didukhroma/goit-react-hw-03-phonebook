import ListItem from '../ListItem/ListItem';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onClick }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ListItem key={contact.id} contact={contact} onClick={onClick} />
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.array,
  onClick: PropTypes.func,
};
export default ContactList;
