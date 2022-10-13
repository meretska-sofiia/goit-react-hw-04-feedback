import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      {options.map(buttonName => (
        <Button
          key={buttonName}
          type="button"
          name={buttonName}
          onClick={onLeaveFeedback}
        >
          {buttonName}
        </Button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
};
export default FeedbackOptions;
