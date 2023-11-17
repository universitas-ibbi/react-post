export default function Post({ post }) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">{post.title}</h5>
          <div>
            {Array(post.reactions)
              .fill()
              .map((_, index) => (
                <span key={index}>❤️</span>
              ))}
          </div>
        </div>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag, index) => (
          <span key={index} className="badge bg-primary me-2">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
