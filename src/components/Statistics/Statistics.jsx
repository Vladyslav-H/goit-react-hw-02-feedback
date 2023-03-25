import {
  StatisticsList,
  StatisticsItem,
  StatisticsSpan,
} from './Statistics.styled';

import { Component } from 'react';
import PropTypes from 'prop-types';

export class Statistics extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number,
    percentage: PropTypes.number,
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <StatisticsList>
        <StatisticsItem>
          Good: <StatisticsSpan>{good}</StatisticsSpan>
        </StatisticsItem>
        <StatisticsItem>
          Neutral: <StatisticsSpan>
            {neutral}</StatisticsSpan>
        </StatisticsItem>
        <StatisticsItem>
          Bad: <StatisticsSpan>{bad}</StatisticsSpan>
        </StatisticsItem>

        <StatisticsItem>
          Total: <StatisticsSpan>{total}</StatisticsSpan>
        </StatisticsItem>
        <StatisticsItem>
          Positive feedback: <StatisticsSpan>
            {positivePercentage}%</StatisticsSpan>
        </StatisticsItem>
      </StatisticsList>
    );
  }
}

 