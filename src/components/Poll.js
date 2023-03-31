import PropTypes from "prop-types";

const Poll = (props) => {
  const uid = "Poll-" + props.id;
  const choiceName = uid + "-" + props.name;
  const choices = props.choices;

  // creates a radio btn for each "choice" in array
  const listChoices = choices.map((choice, index) => (
    <div key={index}>
      <input
        type="radio"
        id={choice}
        name={choiceName}
        value={choice.charAt(0).toUpperCase()}
        onChange={(prop) => {
          // onChange, set "value" attribute of "hidden" to the selected choice value
          let choice = prop.target.value;
          let hidden = document.querySelector(
            "input[name=" + choiceName + "][type=hidden]"
          );
          hidden.setAttribute("value", choice);
        }}
      />
      <label htmlFor={choice}>{choice}</label>
      <br />
    </div>
  ));

  return (
    <div id={uid} className="Poll">
      <h2>{props.title}</h2>

      <form
        className="form"
        onSubmit={(submit) => {
          submit.preventDefault();
          let choice = document.querySelector(
            "input[name=" + choiceName + "][type=hidden]"
          ).value;
          console.log("|| Poll:", props.id, "| Choice:", choice, "||");
          // POST mutations here
        }}
      >
        <fieldset role="radiogroup">
          <legend>{props.query}</legend>

          {/* print choices */}
          {listChoices}

          {/* print "hidden" */}
          <input
            name={choiceName}
            type="hidden"
            value="0"
            checked="checked"
            readOnly="readOnly"
          />

          {/* submit btn */}
          <input
            type="submit"
            value="Submit"
            formAction="http://localhost:4000/"
          />
        </fieldset>
      </form>
    </div>
  );
};

Poll.defaultProps = {
  id: 0,
  title: "Poll Title",
  query: "Insert Survey Question Here",
  choices: ["choice 1", "choice 2"],
  results: [],
  totalVotes: 0,
};

Poll.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  query: PropTypes.string,
  choices: PropTypes.array,
  results: PropTypes.array,
  totalVotes: PropTypes.number,
};

export default Poll;
