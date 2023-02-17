import PropTypes from 'prop-types';
import s from '../Notification/Notification.module.scss';

export const Notification = ({ message }) => {
  return (
    <div className={s.notification}>
      <p className={s.message}>{message}</p>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};
