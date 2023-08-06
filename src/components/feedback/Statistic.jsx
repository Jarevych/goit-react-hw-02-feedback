const Statistic = ({ good, neutral, bad, total, positiveFeedback }) => {
  const hasFeedback = good > 0 || neutral > 0 || bad > 0;
  return (
    <div>
      <h2>Statistic</h2>
      {hasFeedback ? (
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>PositiveFeedback: {positiveFeedback}%</p>
        </div>
      ) : (
        <p>"There is no feedback"</p>
      )}
    </div>
  );
};
export default Statistic;
