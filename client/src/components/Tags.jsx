import "./styles/tags.css";

const Tags = (props) => {
  return props.tags?.map((tag) => {
    if (tag.ID != null) {
      return (
        <a
          href={`/kompetens/${tag.ID}`}
          style={{ textDecoration: "none" }}
          key={tag.ID}
        >
          <div className="tagBox">{tag.name}</div>
        </a>
      );
    }
  });
};

export default Tags;
