import { useEffect } from "react";
import { useState } from "react";
function PostPage({
  title,
  setTitle,
  comment,
  setComment,
  // user_id,
  link,
  setLink,
  tag_id,
  setTag_id,
  setPostList,
}) {
  const [tagList, setTagList] = useState([]);

  function resetForm() {
    setTitle("");
    setComment("");
    setLink("");
    setTag_id("");
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
        tag_id: tag_id,
      }),
    });

    fetch("/api/tweets")
      .then((data) => data.json())
      .then((data) => setPostList(data));
    resetForm();
  };

  useEffect(() => {
    fetch("/api/tags")
      .then((data) => data.json())
      .then((data) => setTagList(data));
  }, []);
  //ここではもともと[tag_list]があったが、無限ループになるため、変更

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
            value={tag_id}
            onChange={(e) => {
              setTag_id(Number(e.target.value));
            }}
            id="pet-select"
          >
            {tagList.map((item) => (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default PostPage;
