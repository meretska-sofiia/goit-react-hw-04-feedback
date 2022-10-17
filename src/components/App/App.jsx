import React, { useState, useEffect } from 'react';
import Statistic from '../Statistic/Statistic';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import { Container } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positiveFeedback, setPositiveFeedback] = useState(0);

  const stateMap = {
    good: setGood,
    neutral: setNeutral,
    bad: setBad,
  };

  const getFeedback = e => {
    const { name } = e.target;
    stateMap[name](prev => prev + 1);
  };

  useEffect(() => {
    const feedback = [good, neutral, bad];
    setTotal(feedback.reduce((acc, next) => acc + next, 0));
  }, [bad, good, neutral]);

  useEffect(() => {
    setPositiveFeedback(Math.round(good > 0 ? (good / total) * 100 : 0));
  }, [good, total]);

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={getFeedback}
          options={Object.keys(stateMap)}
        />
      </Section>
      <Section title="Statistic">
        {total > 0 ? (
          <Statistic
            total={total}
            positivePercentage={positiveFeedback}
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
