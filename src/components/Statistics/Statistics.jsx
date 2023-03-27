import {
  StatisticsList,
  StatisticsItem,
  StatisticsSpan,
} from './Statistics.styled';

import { Component } from 'react';

export class Statistics extends Component {
  

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <StatisticsList>
        <StatisticsItem>
          Good: <StatisticsSpan>{good}</StatisticsSpan>
        </StatisticsItem>
        <StatisticsItem>
          Neutral: <StatisticsSpan>{neutral}</StatisticsSpan>
        </StatisticsItem>
        <StatisticsItem>
          Bad: <StatisticsSpan>{bad}</StatisticsSpan>
        </StatisticsItem>

        <StatisticsItem>
          Total: <StatisticsSpan>{total}</StatisticsSpan>
        </StatisticsItem>
        <StatisticsItem>
          Positive feedback:{' '}
          <StatisticsSpan>{positivePercentage}%</StatisticsSpan>
        </StatisticsItem>
      </StatisticsList>
    );
  }
}
