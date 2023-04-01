import { polls } from "./data.js";

const resolvers = {
  Query: {
    polls(_, __, { dataSources }, info) {
      // return dataSources.MongoDB.getPolls();
      // console.log(dataSources.MongoDB.getPolls());
      return dataSources.MongoDB.getPolls();
    },
    poll(_, args, { dataSources }, info) {
      // dataSources.MongoDB.getPolls();
      return polls.find((poll) => poll.id === args.id);
    },
  },
  Mutation: {
    // updatePoll: async (_, { id }) => {
    //   const exists = await polls.find((poll) => poll.id === id);
    //   if (!exists) {
    //     // throw error
    //   } else {
    //     return 1;
    //   }
    // },

    updatePoll: (_, { id }, choice, { dataSources }) => {
      dataSource;
    },
  },
};

export default resolvers;
