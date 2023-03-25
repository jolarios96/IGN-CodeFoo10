import PropTypes from "prop-types";

function Item(props) {
  return (
    <article className="Item">
      {props.children ? props.children : <h2>{props.content}</h2>}
    </article>
  );
}

Item.defaultProps = {
  content: "Placeholder Item",
};

Item.propTypes = {
  content: PropTypes.string,
};

export default Item;
