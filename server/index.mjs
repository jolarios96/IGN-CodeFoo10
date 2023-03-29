import { ApolloServer } from "@apollo/server";

import { startStandaloneServer } from "@apollo/server/standalone";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

const typeDefs = `#graphql

  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  # This "Poll" type defines the queryable fields for every poll in our data source.

  type Poll {
    # id: ID!
    id: Int!
    title: String
    query: String
    choices: [String]
    results: [Int]
    totalVotes: Int
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "polls" query returns an array of zero or more polls (defined above).

  type Query {
    polls: [Poll]
    poll(id: Int!): Poll
  }

`;

const polls = [
  {
    id: 1,
    title: "The unfair question",
    query: "What's in your pocket?",
    choices: ["A", "B", "C", "D"],
    results: [0, 0, 0, 0],
    totalVotes: 0,
  },
  {
    id: 2,
    title: "The unfair question",
    query: "What's in my pocket?",
    choices: ["A", "B", "C", "D"],
    results: [0, 0, 0, 0],
    totalVotes: 0,
  },
];

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves polls from the "polls" array above.

const resolvers = {
  Query: {
    polls: () => polls,
    poll(parent, args, contextValue, info) {
      return polls.find((poll) => poll.id === args.id);
    },
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
