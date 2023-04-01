import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Poll from "./components/Poll/Poll.js";
import Article from "./components/Article.js";
// import GetPolls from "./components/Poll/GetPolls.js";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <main id="Main">
        <Article>
          <Poll id={1} />
        </Article>

        <Article>
          <Poll id={2} />
        </Article>

        <Article>
          <Poll id={3} />
        </Article>
      </main>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
