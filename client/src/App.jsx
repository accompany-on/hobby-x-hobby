import { useEffect, useState } from "react";
import DropDown from "./components/DropDown";
import PostList from "./components/PostList";
import PostPage from "./components/PostPage";

import "./App.css";

function App() {
  const [tag, setTag] = useState("");
  const [nav, setNav] = useState("top");
  const [postList, setPostList] = useState([]);
  const [title, setTitle] = useState("");
  const [comment, setComment] = setState("");
  const [user_id, setUser_id] = setState("");
  const [link, setLink] = setState("");
  const [tag_id, setTag_id] = setState("");

  useEffect(() => {
    fetch("/api/tweets")
      .then((data) => data.json())
      .then((data) => setPostList(data));
  }, [postList]);

  return (
    <>
      <h1 className="title">HOBBY✖️HOBBY</h1>
      <button onClick={() => setNav("post")}>＋</button>
      <button onClick={() => setNav("top")}>🏠</button>

      {nav === "top" ? (
        <>
          <DropDown tag={tag} setTag={setTag} />
          <PostList postList={postList} />
        </>
      ) : nav === "post" ? (
        <PostPage title={title} setTitle={setTitle} />
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
