import { Poll } from "./Poll/index.js";

const resolvers = {
  Query: {
    ...Poll.resolvers.queries,
  },
  // Mutation: {
  //   ...Poll.resolvers.mutations,
  // },
};

export default resolvers;
