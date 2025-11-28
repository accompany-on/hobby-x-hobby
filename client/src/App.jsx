import { useEffect, useState } from "react";
import DropDown from "./components/DropDown";
import PostList from "./components/PostList";
import PostPage from "./components/PostPage";

import "./App.css";

function App() {
  const [tag, setTag] = useState("");
  const [nav, setNav] = useState("top");
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch("/api/tweets")
      .then((data) => data.json())
      .then((data) => setPostList(data));
  }, []);

  useEffect(() => {
    const tagUrl = `/api/tags/?tag=${tag}`;
    fetch(tagUrl)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        const tagIdUrl = `/api/tweets/?tagId=${data.id}`;
        console.log(tagIdUrl);
        fetch(tagIdUrl)
          .then((data) => data.json())
          .then((data) => setPostList(data));
      });
  }, [tag]);

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
        <PostPage />
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
