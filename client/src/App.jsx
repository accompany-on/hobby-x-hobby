import { useState } from "react";
import DropDown from "./components/DropDown";
import PostList from "./components/PostList";
import PostPage from "./components/PostPage";

import "./App.css";

function App() {
  const [tag, setTag] = useState("");

  return (
    <>
      <h1 className="title">HOBBY✖️HOBBY</h1>
      <DropDown tag={tag} setTag={setTag} />
      <PostList />

      <PostPage />
    </>
  );
}

export default App;
