import PropTypes from 'prop-types';
import { StatisticContainer } from './Statistic.styled';

const Statistic = ({ total, positivePercentage, good, neutral, bad }) => {
  return (
    <StatisticContainer>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage} %</p>
    </StatisticContainer>
  );
};
Statistic.propTypes = {
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
export default Statistic;
