import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Poll from "./components/Poll.js";
import Article from "./components/Article.js";
import { default as Queries } from "./queries/index.js";

function App() {
  return (
    <>
      <Header />
      <main id="Main">
        {/* <Article>
        <h1>
          The Full List!
          <br />
          <GetPolls />
        </h1>
      </Article> */}

        <Article>
          <Queries.PollQueries.GetPollById id={1} />
        </Article>

        <Article>
          <Queries.PollQueries.GetPollById id={2} />
        </Article>

        {/* <Article>
        <button onClick={createArticle}>Click Me</button>
      </Article> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
