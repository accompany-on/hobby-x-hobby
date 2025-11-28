import React, { useState } from "react";

function PostPage({
  title,
  setTitle,
  comment,
  setComment,
  // user_id,
  link,
  setLink,
  // tag_id,
}) {
  const [postTag, setPostTag] = useState("");

  function resetForm() {
    setTitle("");
    setComment("");
    setLink("");
  }

  const hundleAddTweet = async () => {
    await fetch("/api/tweets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        title: title,
        comment: comment,
        user_id: 1,
        link: link,
        tag_id: 1,
      }),
    });
    resetForm();
  };

  const tagList = [
    "PC界隈",
    "服界隈",
    "釣り界隈",
    "キャンプ界隈",
    "筋トレ界隈",
  ];

  return (
    <>
      <h1>投稿画面</h1>
      <button onClick={hundleAddTweet} className="PostButton">
        投稿
      </button>
      <div>
        <div className="postValue">
          タイトル :
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className="postValueText">
          <label>コメント : </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        {/* <div className="postValue">
          image :
          <input />
        </div> */}
        <div className="postValue">
          URL :
          <input value={link} onChange={(e) => setLink(e.target.value)} />
        </div>
        <div className="postValue">
          タグ :
          <select
            value={postTag}
            onChange={(e) => {
              setPostTag(e.target.value);
            }}
            id="pet-select"
          >
            {tagList.map((item, i) => (
              <option value={item} key={i}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default PostPage;
