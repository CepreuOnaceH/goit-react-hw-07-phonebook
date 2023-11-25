import DeleteBtn from 'components/DeleteBtn';
import PropTypes from 'prop-types';

const ContactItem = ({ userName, userNumber, userId }) => {
  return (
    <li id={userId}>
      <h3>
        `${userName}: ${userNumber}`
        <DeleteBtn userId={userId}>Delete contact</DeleteBtn>
      </h3>
    </li>
  );
};
export default ContactItem;
ContactItem.propTypes = {
  userName: PropTypes.string,
  userNumber: PropTypes.string,
  userId: PropTypes.string,
};
