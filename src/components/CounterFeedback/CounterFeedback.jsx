import React from 'react';

import {
  FeedbackWrapp,
  FeedbackTitle,
  Button,
  StatisticsWrapp,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  StatisticsSpan,
} from './CounterFeedback.stuled';

class CounterFeedback extends React.Component {
  state = {
    goodValue: 0,
    neutralValue: 0,
    badValue: 0,
    totalValue: 0,
    positivePercentageValue: 0,
  };

  handleIncrementGood = () => {
    this.setState(prevState => ({ goodValue: prevState.goodValue + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  handleIncrementNeutral = () => {
    this.setState(prevState => ({ neutralValue: prevState.neutralValue + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  handleIncrementBad = () => {
    this.setState(prevState => ({ badValue: prevState.badValue + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  countTotalFeedback = () => {
    this.setState(prevState => ({
      totalValue:
        prevState.goodValue + prevState.neutralValue + prevState.badValue,
    }));
  };
  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      positivePercentageValue: Math.round(
        (prevState.goodValue / prevState.totalValue) * 100
      ),
    }));
  };

  render() {
    return (
      <>
        <FeedbackWrapp>
          <FeedbackTitle>Please leave feedback</FeedbackTitle>
          <Button type="button" onClick={this.handleIncrementGood}>
            Good
          </Button>
          <Button type="button" onClick={this.handleIncrementNeutral}>
            Neutral
          </Button>
          <Button type="button" onClick={this.handleIncrementBad}>
            Bad
          </Button>
        </FeedbackWrapp>

        <StatisticsWrapp>
          <StatisticsTitle>Statistics</StatisticsTitle>
          <StatisticsList>
            <StatisticsItem>
              Good: <StatisticsSpan>{this.state.goodValue}</StatisticsSpan>
            </StatisticsItem>
            <StatisticsItem>
              Neutral:{' '}
              <StatisticsSpan>{this.state.neutralValue}</StatisticsSpan>
            </StatisticsItem>
            <StatisticsItem>
              Bad: <StatisticsSpan>{this.state.badValue}</StatisticsSpan>
            </StatisticsItem>
            <StatisticsItem>
              Total: <StatisticsSpan>{this.state.totalValue}</StatisticsSpan>
            </StatisticsItem>
            <StatisticsItem>
              Positive feedback:{' '}
              <StatisticsSpan>
                {this.state.positivePercentageValue}%
              </StatisticsSpan>
            </StatisticsItem>
          </StatisticsList>
        </StatisticsWrapp>
      </>
    );
  }
}

export default CounterFeedback;
