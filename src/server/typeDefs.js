const typeDefs = `#graphql
  # type Polls: {
  #   [Poll]
  # }

  type Poll {
    id: Int!
    radioName: String!
    title: String!
    query: String!
    choices: [String!]
    results: Results
    totalVotes: TotalVotes
  }

  type Results {
    results: [Int!]
  }

  type TotalVotes {
    totalVotes: Int!
  }

  type Success {
    isSuccess: Boolean
    message: String!
  }

  type Query {
    polls: [Poll]
    poll(id: Int!): Poll
  }

  type Mutation {
    # Updates Poll based on User's choice
    updatePoll(id: Int!,
      choice: [Int!]
      ): updatePollResponse!
    createPoll(id: Int!): Success
    deletePoll(id: Int!): Success
    incrementVotes(id: Int!): Success      
  }

  type updatePollResponse {
    code: Int!
    success: Boolean!
    message: String!
    # Updates Results on success
    results: Results!
    # Increments Vote on success
    totalVotes: TotalVotes!
  }

  input NewPoll {
    id: Int!
    title: String!
    query: String
    choices: [String!]
    # results: Results
  }

  input PollUpdate {
    id: Int!
    # results: [Int]!
  }
`;

export default typeDefs;
