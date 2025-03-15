import './Tags.scss';

function Tags({ tags }) {
  return (
    <div className="tag-container">
      {tags.map((tag) => (
        <span key={tag} className="tag-item">
          {tag}
        </span>
      ))}
    </div>
  );
}

export default Tags;