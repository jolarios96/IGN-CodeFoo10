import { polls } from "./data.js";

const queries = {
  polls: () => polls,
  poll(parent, args, contextValue, info) {
    return polls.find((poll) => poll.id === args.id);
  },
};

const mutations = {};

export const resolvers = { queries, mutations };
