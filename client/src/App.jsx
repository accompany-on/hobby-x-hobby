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
  const [comment, setComment] = useState("");
  const [user_id, setUser_id] = useState("");
  const [link, setLink] = useState("");
  const [tag_id, setTag_id] = useState("");

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
        const tagIdUrl = `/api/tweets/?tagId=${data.id}`;
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
        <PostPage
          title={title}
          setTitle={setTitle}
          comment={comment}
          setComment={setComment}
          user_id={user_id}
          setUser_id={setUser_id}
          tag_id={tag_id}
          setTag_id={setTag_id}
          link={link}
          setLink={setLink}
          setPostList={setPostList}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
