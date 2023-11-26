import DeleteBtn from 'components/DeleteBtn';
import PropTypes from 'prop-types';

const ContactItem = ({ userName, userNumber, userId }) => {
  return (
    <li id={userId}>
      <h3>{`${userName}: ${userNumber}`}</h3>
      <DeleteBtn userId={userId}></DeleteBtn>
    </li>
  );
};
export default ContactItem;
ContactItem.propTypes = {
  userName: PropTypes.string,
  userNumber: PropTypes.string,
  userId: PropTypes.string,
};
