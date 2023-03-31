import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs, resolvers } from "./server/index.js";

// import { typeDefs } from "./graphql/index.js";
// import { resolvers } from "./graphql/index.js";

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

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
