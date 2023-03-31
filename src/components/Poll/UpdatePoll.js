import { useMutation, gql } from "@apollo/client";

const UPDATE_POLL = gql`
  mutation UpdatePoll($id: Int!, $choice: String!) {
    sendVote(id: $id, choice: $choice) {
      id
      choice
      results
    }
  }
  #   mutation UpdatePoll($id: Int!, $choice: String!) {
  #     # updatePoll(id: $id, review: $review){
  #     # }

  #     results
  #   }
`;

// update poll with id
function UpdatePoll({ id }, { choice }) {
  const [updatePoll] = useMutation(UPDATE_POLL);

  // if (loading) return "Submitting...";
  // if (error) return `Submission error! ${error.message}`;

  return (
    // <input type="submit" value="Submit" formAction="http://localhost:4000/" />
    <input type="submit" value="Submit" />
  );
}

export default { UPDATE_POLL, UpdatePoll };
