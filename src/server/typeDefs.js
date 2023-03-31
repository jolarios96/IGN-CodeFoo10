// import { gql } from "graphql-tag";
import { Poll } from "./Poll/index.js";

const typeDefs = `#graphql
  type Poll {
    ${Poll.types}
  }
  type Query {
    ${Poll.queries}
  }
  # type Mutation {
  #   ${Poll.mutations}
  # }
`;

export default typeDefs;
