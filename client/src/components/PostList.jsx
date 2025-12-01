function PostList({ postList }) {
  return (
    <>
      <div className="postList">
        {postList.map((post, index) => (
          <div className="post" key={index}>
            <p>タイトル：{post.title}</p>
            <p>テキスト：{post.comment}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default PostList;
