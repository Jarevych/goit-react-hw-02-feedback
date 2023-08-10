import React from 'react';
import FeedbackOptions from './feedback/FeedbackOptions';
import Statistic from './feedback/Statistic';
import Notification from './Notification';
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
  countTotal = () => {
    return Object.values(this.state).reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  };
  countPositiveFeedback = () => {
    const total = this.countTotal();
    return total === 0 ? 0 : (this.state.good / total) * 100;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotal();
    const positiveFeedback = this.countPositiveFeedback();
    const hasFeedback = total > 0;
    return (
      <div className="container">
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.handleFeedback}
        />
        <h2>Statistic</h2>
        {hasFeedback ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={positiveFeedback.toFixed(0)}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
