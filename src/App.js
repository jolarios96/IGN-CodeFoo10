// import "./App.css";
import Poll from "./components/Poll";
import Article from "./components/Article";
import { useQuery, gql } from "@apollo/client";

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
      title
    }
  }
`;

function Polls() {
  const { loading, error, data } = useQuery(GET_POLLS);

  if (loading) return "Loading...";
  if (error) return `Error! $(error.message)`;

  return (
    <Article>
      {data.polls.map((poll) => (
        <h1>
          {poll.id}
          <br />
          {poll.title}
        </h1>
      ))}
    </Article>
  );
}

function PollObject({ id }) {
  const { loading, error, data } = useQuery(GET_POLL, {
    variables: { id },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <div>
      <h1>
        <br />
        ID: {data.poll.id}
        <br />
        TITLE: {data.poll.title}
      </h1>
    </div>
  );
}

function App() {
  return (
    <main className="Main">
      <Article>
        <h1>
          The Full List!
          <br />
          <Polls />
        </h1>
      </Article>
      <Article>
        <h1>Poll Query Test</h1>
        {<PollObject id={1} />}
      </Article>
      <Article />
      <Article>
        <h2>This is an Article containing a Poll.</h2>
        <p>This is the Article's description.</p>
        <Poll
          title="Poll Title"
          query="Pick a choice."
          choices={["Choice A", "Choice B", "Choice C", "Choice D"]}
        />
      </Article>
      <Article>
        <h1>This Article contains stuff.</h1>
        <p>This is the Article's description.</p>
      </Article>
    </main>
  );
}

export default App;
