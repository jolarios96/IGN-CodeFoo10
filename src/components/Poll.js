import PropTypes from "prop-types";

const Poll = (props) => {
  const choices = props.choices;
  const listItems = choices.map((choice) => <li key={choice}>{choice}</li>);

  return (
    <div className="Poll, Item">
      <h2>{props.title}</h2>
      <h3>{props.query}</h3>
      <h4>{listItems}</h4>
    </div>
  );
};

Poll.defaultProps = {
  title: "Poll Title",
  query: "Insert Survey Question Here",
  choices: [0, 1],
  results: [],
  totalVotes: 0,
};

Poll.propTypes = {
  title: PropTypes.string,
  query: PropTypes.string,
  choices: PropTypes.array,
  results: PropTypes.array,
  totalVotes: PropTypes.number,
};

export default Poll;
