import PropTypes from 'prop-types';
import s from '../FeedbackOptions/FeedbackOptions.module.scss';

export const FeedbackOptions = ({ options, handleIncrement }) => {
  return (
    <>
      {options.map(option => (
        <button
          className={s.btn}
          key={option}
          type="button"
          name={option}
          onClick={handleIncrement}
        >
          {option}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleIncrement: PropTypes.func.isRequired,
};
