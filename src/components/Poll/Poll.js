import PropTypes from "prop-types";
import { useQuery, useMutation, gql } from "@apollo/client";
import { default as Query } from "./UpdatePoll.js";

const GET_POLL = gql`
  query GetPoll($id: Int!) {
    poll(id: $id) {
      id
      radioName
      title
      query
      choices
      results
    }
  }
`;

function Poll({ id }) {
  const { loading, error, data } = useQuery(GET_POLL, {
    variables: { id },
  });
  const [updatePoll, { loading: mutationLoading, error: mutationError }] =
    useMutation(Query.UPDATE_POLL);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const uid = "Poll-" + data.poll.id + "-" + data.poll.name;
  return (
    <div id={"Poll-" + data.poll.id} className="Poll">
      <h2>{data.poll.title}</h2>
      <form
        className="form"
        onSubmit={(submit) => {
          submit.preventDefault();
          let choice = document.querySelector(
            "input[name=" + uid + "][type=hidden]"
          ).value;
          console.log("|| Poll:", data.poll.id, "| Choice:", choice, "||");
          // updatePoll({ variables: { id: { id }, choice: "0" } });
        }}
      >
        <fieldset role="radiogroup">
          <legend>{data.poll.query}</legend>

          {/* print choices */}
          {data.poll.choices.map((choice, index) => (
            <div key={index}>
              <input
                type="radio"
                id={choice}
                name={uid}
                value={choice.charAt(0).toUpperCase()}
                onChange={(prop) => {
                  // onChange, set "value" attribute of "hidden" to the selected choice value
                  let choice = prop.target.value;
                  let hidden = document.querySelector(
                    "input[name=" + uid + "][type=hidden]"
                  );
                  hidden.setAttribute("value", choice);
                }}
              />
              <label htmlFor={choice}>{choice}</label>
              <br />
            </div>
          ))}

          {/* print "hidden" */}
          <input
            name={"Poll-" + data.poll.id + "-" + data.poll.name}
            type="hidden"
            value="0"
            checked="checked"
            readOnly="readOnly"
          />

          {/* submit btn */}
          <Query.UpdatePoll id={id} choice={0} />
        </fieldset>
      </form>
      {mutationLoading && <p>Loading...</p>}
      {mutationError && <p>Error :( Please try again</p>}
    </div>
  );
}

export default Poll;
