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
  };

  handleIncrementGood = () => {
    this.setState(prevState => ({ goodValue: prevState.goodValue + 1 }));
  };
  handleIncrementNeutral = () => {
    this.setState(prevState => ({ neutralValue: prevState.neutralValue + 1 }));
  };
  handleIncrementBad = () => {
    this.setState(prevState => ({ badValue: prevState.badValue + 1 }));
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
          </StatisticsList>
        </StatisticsWrapp>
      </>
    );
  }
}

// const CounterFeedback = () => {
//   return (
//     <>
//       <FeedbackWrapp>
//         <FeedbackTitle>Please leave feedback</FeedbackTitle>
//         <Button>Good</Button>
//         <Button>Neutral</Button>
//         <Button>Bad</Button>
//       </FeedbackWrapp>

//       <StatisticsWrapp>
//         <StatisticsTitle>Statistics</StatisticsTitle>
//         <StatisticsList>
//           <StatisticsItem>
//             Good: <StatisticsSpan>0</StatisticsSpan>
//           </StatisticsItem>
//           <StatisticsItem>
//             Neutral: <StatisticsSpan>0</StatisticsSpan>
//           </StatisticsItem>
//           <StatisticsItem>
//             Bad: <StatisticsSpan>0</StatisticsSpan>
//           </StatisticsItem>
//         </StatisticsList>
//       </StatisticsWrapp>
//     </>
//   );
// };
export default CounterFeedback;
