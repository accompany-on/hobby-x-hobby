function PostList({ postList }) {
  return (
    <>
      <div className="postList">
        {postList.map((post, index) => (
          <div className="post" key={index}>
            <img src={post.user_icon}></img>
            <p>{post.user_name}</p>
            <p>{post.comment}</p>
            <p>{post.tag_name}</p>
            <img id="postImage" src={post.image}></img>
            <p>{new Date(post.created_at).toUTCString()}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default PostList;
