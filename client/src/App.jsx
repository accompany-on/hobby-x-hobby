import { useEffect, useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/utils/NavBar";
import Index from "./components/Index";
import Login from "./components/Login";
import PostList from "./components/PostList";

export const AppContext = createContext();

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
    if (tag_id === "") return;
    const tagIdUrl = `/api/tweets?tagId=${tag_id}`;
    fetch(tagIdUrl)
      .then((data) => data.json())
      .then((data) => setPostList(data));
  }, [tag_id]);

  const value = { tag_id, setTag_id };

  return (
    <AppContext.Provider value={value}>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path="/" element={<PostList postList={postList} />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
