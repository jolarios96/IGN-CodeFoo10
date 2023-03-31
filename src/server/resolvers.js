import { polls } from "./data.js";

const resolvers = {
  Query: {
    polls: () => polls,
    poll(parent, args, contextValue, info) {
      return polls.find((poll) => poll.id === args.id);
    },
  },
  Mutation: {
    updatePoll: async (_, { id }) => {
      const exists = await polls.find((poll) => poll.id === id);
      if (!exists) {
        // throw error
      } else {
        return 1;
      }
    },
  },
};

export default resolvers;
