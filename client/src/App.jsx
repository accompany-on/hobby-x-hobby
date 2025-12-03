import { useEffect, useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/utils/NavBar";
import Index from "./components/Index";
import Login from "./components/Login";
import PostList from "./components/PostList";
import SignUp from "./components/SignUp";

export const AppContext = createContext();

function App() {
  const [postList, setPostList] = useState([]);
  const [tag_id, setTag_id] = useState("");
  const [uploadImage, setUploadImage] = useState("");

  useEffect(() => {
    fetch("/api/tweets")
      .then((data) => data.json())
      .then((data) => setPostList(data));
  }, []);

  useEffect(() => {
    if (tag_id === "") {
      fetch("/api/tweets")
        .then((data) => data.json())
        .then((data) => setPostList(data));
      return;
    }

    const tagIdUrl = `/api/tweets?tagId=${tag_id}`;
    fetch(tagIdUrl)
      .then((data) => data.json())
      .then((data) => setPostList(data));
  }, [tag_id]);

  const value = { tag_id, setTag_id, uploadImage, setUploadImage, setPostList };

  return (
    <AppContext.Provider value={value}>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path="/" element={<PostList postList={postList} />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
