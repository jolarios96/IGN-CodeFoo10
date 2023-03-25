import PropTypes from "prop-types";

const Poll = (props) => {
  const choices = props.choices;
  const listChoices = choices.map((choice, index) => (
    <div key={index}>
      <input
        type="radio"
        id={choice}
        name="choice"
        value={choice.charAt(0).toUpperCase()}
      />
      <label htmlFor={choice} className="toggle-label">
        {choice}
      </label>
      <br />
    </div>
  ));

  return (
    <div className="Poll">
      <h2>{props.title}</h2>
      {/* <h3>{props.query}</h3> */}
      {/* <h4>{listChoices}</h4> */}

      <form className="form" action="#">
        <fieldset
          className="choices"
          role="radiogroup"
          aria-labelledby="choice"
        >
          <legend>{props.query}</legend>
          {listChoices}
          <input type="submit" value="Submit" />
          {/* <input name="choice" type="hidden" value=""></input> */}
        </fieldset>
      </form>
    </div>
  );
};

Poll.defaultProps = {
  title: "Poll Title",
  query: "Insert Survey Question Here",
  choices: ["choice 1", "choice 2"],
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
