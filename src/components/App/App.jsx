import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import Statistics from '../Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { StatisticsWrapp, StatisticsTitle } from './App.styled';

import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const valuesArray = Object.values(this.state);

    return valuesArray.reduce((total, value) => {
      return (total += value);
    });
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  onLeaveFeedback = e => {
    const currentBtnValue = e.target.value;

    this.setState(prevState => ({
      ...prevState,
      [currentBtnValue]: prevState[currentBtnValue] + 1,
    }));
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const btnNames = Object.keys(this.state);

    return (
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={btnNames}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <StatisticsWrapp>
          <StatisticsTitle>Statistics</StatisticsTitle>
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </StatisticsWrapp>
      </Section>
    );
  }
}
