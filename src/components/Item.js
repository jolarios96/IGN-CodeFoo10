import PropTypes from "prop-types";

function Item(props) {
  return <div className="Item">{props.content}</div>;
}

Item.defaultProps = {
  content: "Content Failed to Load",
};

Item.propTypes = {
  content: PropTypes.string,
};

export default Item;
