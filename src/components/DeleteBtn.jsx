import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts.operations';
import PropTypes from 'prop-types';

const DeleteBtn = ({ userId }) => {
  const dispatch = useDispatch();
  return <button onClick={dispatch(deleteContact(userId))}>`U+2421`</button>;
};

export default DeleteBtn;
DeleteBtn.propTypes = {
  userId: PropTypes.string.isRequired,
};
