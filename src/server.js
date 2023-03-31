import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// import { typeDefs, resolvers } from "./graphql/index.js";
// console.log(testVar);

import { typeDefs } from "./graphql/index.js";
import { resolvers } from "./graphql/index.js";

// const typeDefs = `#graphql
//   type Article {
//     id: Int!
//     author: String
//     title: String
//     content: String
//     # videos: [Videos]
//     # images: [Images]
//     polls: [Poll]
//   }

//   type Poll {
//     id: Int!
//     title: String
//     query: String
//     choices: [String]
//     results: [Int]
//     totalVotes: Int
//   }

//   type Query {
//     polls: [Poll]
//     poll(id: Int!): Poll
//   }

// `;

// const resolvers = {
//   Query: {
//     polls: () => polls,
//     poll(parent, args, contextValue, info) {
//       return polls.find((poll) => poll.id === args.id);
//     },
//   },
// };

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
  // introspection: true,
  // playground: true,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
