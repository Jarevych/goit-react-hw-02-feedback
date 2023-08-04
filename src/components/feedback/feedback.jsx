import React from 'react';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };
  handleGoodFbk = () => {
    this.setState(
      prevState => ({
        good: prevState.good + 1,
      }),
      () => {
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
      }
    );
  };
  handleNeutralFbk = () => {
    this.setState(
      prevState => ({
        neutral: prevState.neutral + 1,
      }),
      () => {
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
      }
    );
  };
  handleBadFbk = () => {
    this.setState(
      prevState => ({
        bad: prevState.bad + 1,
      }),
      () => {
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
      }
    );
  };
  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: (prevState.total =
        prevState.bad + prevState.neutral + prevState.good),
    }));
  };
  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      positiveFeedback: (prevState.positiveFeedback =
        (prevState.good / prevState.total) * 100),
    }));
  };
  render() {
    return (
      <div className="container">
        <h1>Please leave feetback</h1>
        <button type="button" onClick={this.handleGoodFbk}>
          Good
        </button>
        <button type="button" onClick={this.handleNeutralFbk}>
          Neutral
        </button>
        <button type="button" onClick={this.handleBadFbk}>
          Bad
        </button>
        <h2>Statistic</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.state.total}</p>
        <p>PositiveFeedback: {this.state.positiveFeedback.toFixed(0)}%</p>
      </div>
    );
  }
}

export default Feedback;
