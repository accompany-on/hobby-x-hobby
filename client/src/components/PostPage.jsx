import React, { useState } from "react";

function PostPage() {
  const [postTag, setPostTag] = useState("");

  // const hundleAddTweet = async () => {
  //   await fetch("/api/tweets", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //   },
  //   body: JSON.stringify({
  //     title,
  //     comment,
  //     user_id,
  //     link,
  //     tag_id

  //   }),
  // );
  // };

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
      <div>
        <div className="postValue">
          タイトル :
          <input />
        </div>

        <div className="postValueText">
          <label>コメント : </label>
          <textarea />
        </div>
        {/* <div className="postValue">
          image :
          <input />
        </div> */}
        <div className="postValue">
          URL :
          <input />
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
