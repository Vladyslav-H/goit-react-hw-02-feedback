import { Component } from 'react';
import PropTypes from 'prop-types';

import {
  FeedbackWrapp,
  Button,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  static defaultProps = {
    options: [],
  };

  static propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
   
    return (
      <FeedbackWrapp>
        {this.props.options.map(btn => (
          <Button
            key={btn}
            value={btn}
            variant={btn}
            type="button"
            onClick={btn => this.props.onLeaveFeedback(btn)}
          >
            {btn}
          </Button>
        ))}
      </FeedbackWrapp>
    );
  }
}
