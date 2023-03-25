// import "./App.css";
import Poll from "./components/Poll";
import Article from "./components/Article";

function Main() {
  return (
    <main className="Main">
      <Article />
      <Article>
        <h2>This is an Article containing a Poll.</h2>
        <p>This is the Article's description.</p>
        <Poll
          title="Poll Title"
          query="Pick a choice."
          choices={["Choice A", "Choice B", "Choice C", "Choice D"]}
        />
      </Article>
      <Article>
        <h1>This Article contains stuff.</h1>
        <p>This is the Article's description.</p>
      </Article>
    </main>
  );
}

export default Main;
