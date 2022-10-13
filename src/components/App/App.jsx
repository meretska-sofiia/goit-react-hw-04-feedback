import React, { useState } from 'react';
import Statistic from '../Statistic/Statistic';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import { Container } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const stateMap = {
    good: setGood,
    neutral: setNeutral,
    bad: setBad,
  };

  const getFeedback = e => {
    const { name } = e.target;
    stateMap[name](prev => prev + 1);
  };

  const countTotalFeedback = () => {
    const feedback = [good, neutral, bad];
    return feedback.reduce((acc, next) => acc + next, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round(good > 0 ? (good / countTotalFeedback()) * 100 : 0);
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={getFeedback}
          options={Object.keys(stateMap)}
        />
      </Section>
      <Section title="Statistic">
        {countTotalFeedback() > 0 ? (
          <Statistic
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
            good={good}
            neutral={neutral}
            bad={bad}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};
