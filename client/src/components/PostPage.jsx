import React from "react";

function PostPage() {
  return (
    <>
      <h1>投稿画面</h1>
      <div>
        <div className="postValue">
          タイトル :
          <input />
        </div>

        <div className="postValueText">
          <label>コメント : </label>
          <textarea />
        </div>
        <div className="postValue">
          image :
          <input />
        </div>
        <div className="postValue">
          URL :
          <input />
        </div>
      </div>
    </>
  );
}

export default PostPage;
