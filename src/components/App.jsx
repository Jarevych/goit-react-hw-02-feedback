import React from 'react';
import FeedbackOptions from './feedback/FeedbackOptions';
import Statistic from './feedback/Statistic';
import '../components/styles.css';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positiveFeedback = total === 0 ? 0 : (good / total) * 100;

    return (
      <div className="container">
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.handleFeedback}
        />
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positiveFeedback={positiveFeedback.toFixed(0)}
        />
      </div>
    );
  }
}
