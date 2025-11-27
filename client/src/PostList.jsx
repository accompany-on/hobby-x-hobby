import React from "react";

function PostList() {
  const postList = [{ title: "がらしい", text: "社長に就任しました！" }];
  return (
    <>
      <div>
        {postList.map((post, index) => (
          <div className="post" key={index}>
            <p>タイトル：{post.title}</p>
            <p>テキスト：{post.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default PostList;
