import { useQuery, useMutation, gql } from "@apollo/client";
import Poll from "../components/Poll.js";
import Article from "../components/Article.js";

const GET_POLLS = gql`
  query GetPolls {
    polls {
      id
      title
      query
      choices
      results
      totalVotes
    }
  }
`;

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

const UPDATE_POLL = gql`
  mutation UpdatePoll($id: Int!, $choice: String!) {
    # updatePoll(id: $id, review: $review){
    # }

    results
  }

  # mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {
  #   createReview(episode: $ep, review: $review) {
  #     stars
  #     commentary
  #   }
  # }
`;

// fetch all polls
export function GetPolls() {
  const { loading, error, data } = useQuery(GET_POLLS);

  if (loading) return "Loading...";
  if (error) return `Error! $(error.message)`;

  return (
    <Article>
      {data.polls.map((poll, index) => (
        <h1 key={index}>
          {poll.id}
          <br />
          {poll.title}
        </h1>
      ))}
    </Article>
  );
}

// fetch poll by id
export function GetPollById({ id }) {
  const { loading, error, data } = useQuery(GET_POLL, {
    variables: { id },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <Poll
      id={data.poll.id}
      title={data.poll.title}
      name={data.poll.radioName}
      query={data.poll.query}
      choices={data.poll.choices}
      results={data.poll.results}
    />
  );
}

// update poll with id
export function UpdatePoll() {
  const [mutateFunction, { data, loading, error }] = useMutation(UPDATE_POLL);
}
