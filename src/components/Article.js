import PropTypes from "prop-types";

function Article(props) {
  return (
    <article className="Article">
      {props.children ? props.children : <h2>{props.content}</h2>}
    </article>
  );
}

Article.defaultProps = {
  content: "Placeholder Article",
};

Article.propTypes = {
  content: PropTypes.string,
};

export default Article;
