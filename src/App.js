// import "./App.css";
import Poll from "./components/Poll";
import Item from "./components/Item";

function Main() {
  return (
    <main className="Main">
      <Item />
      <Item>
        <h2>This is an Article containing a Poll.</h2>
        <p>This is the Article's description.</p>
        <Poll
          title="Poll Title"
          query="Pick a choice."
          choices={["Choice A", "Choice B", "Choice C", "Choice D"]}
        />
      </Item>
      <Item />
      <Item>
        <h1>This Article contains stuff.</h1>
        <p>This is the Article's description.</p>
      </Item>
    </main>
  );
}

export default Main;
