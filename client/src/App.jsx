import { useState } from "react";
import DropDown from "./components/DropDown";
import PostList from "./components/PostList";
import PostPage from "./components/PostPage";

import "./App.css";

function App() {
  const [tag, setTag] = useState("");
  const [nav, setNav] = useState("top");

  return (
    <>
      <h1 className="title">HOBBY✖️HOBBY</h1>
      <button onClick={() => setNav("post")}>＋</button>
      <button onClick={() => setNav("top")}>🏠</button>

      {nav === "top" ? (
        <>
          <DropDown tag={tag} setTag={setTag} />
          <PostList />
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
