import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./server/typeDefs.js";
import resolvers from "./server/resolvers.js";
import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017/";

const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db();
    console.log(database.collection("Polls"));
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
