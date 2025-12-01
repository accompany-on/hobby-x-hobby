import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/AuthProvider';
import SignUp from './components/Signup';
import Login from './components/Login';
import Top from './components/Top';
import './App.css';

function App() {
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
