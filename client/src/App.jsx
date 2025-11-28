import { useEffect, useState } from 'react';
import DropDown from './components/DropDown';
import PostList from './components/PostList';
import PostPage from './components/PostPage';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/Signup';
import Login from './components/Login';

function App() {
  const [tag, setTag] = useState('');
  const [nav, setNav] = useState('top');
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then((data) => data.json())
      .then((data) => setPostList(data));
  }, [postList]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      <h1 className="title">HOBBY✖️HOBBY</h1>
      <button onClick={() => setNav('post')}>＋</button>
      <button onClick={() => setNav('top')}>🏠</button>

      {nav === 'top' ? (
        <>
          <DropDown tag={tag} setTag={setTag} />
          <PostList postList={postList} />
        </>
      ) : nav === 'post' ? (
        <PostPage />
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
