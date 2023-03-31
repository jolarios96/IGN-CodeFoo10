const typeDefs = `#graphql
  type Success {
    isSuccess: Boolean
    message: String!
  }

  type Poll {
    id: Int!
    radioName: String!
    title: String!
    query: String!
    choices: [String!]
    results: [Int]
    totalVotes: Int
  }
  type Mutation {
    updatePoll(id: Int!,
    results: [Int]
  ): Poll!
  createPoll(id: Int!): Success
  deletePoll(id: Int!): Success
  }
  type Query {
    polls: [Poll]
    poll(id: Int!): Poll
  }
  input NewPoll {
    id: Int!
    title: String!
    query: String
    choices: [String!]
    results: [Int!]
  }

  input PollUpdate{
    id: Int!
    results: [Int!]
  }
`;

export default typeDefs;
