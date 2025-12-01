import { useEffect, useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase';
import DropDown from './DropDown';
import PostList from './PostList';
import PostPage from './PostPage';

function Top() {
  const [nav, setNav] = useState('top');
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [user_id, setUser_id] = useState('');
  const [link, setLink] = useState('');
  const [tag_id, setTag_id] = useState('');
  const { authUser } = useAuthContext();
  const [tag, setTag] = useState('');
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch('/api/tweets')
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

  const navigation = useNavigate();

  useEffect(() => {
    if (!authUser) {
      return navigation('/login');
    }
  }, [authUser, navigation]);

  const handleLogout = () => {
    auth.signOut();
    navigation('/login');
  };

  return (
    <>
      <button onClick={() => setNav('post')}>＋</button>
      <button onClick={() => setNav('top')}>🏠</button>
      <button onClick={handleLogout}>ログアウト</button>

      {nav === 'top' ? (
        <>
          <DropDown tag={tag} setTag={setTag} />
          <PostList postList={postList} />
        </>
      ) : nav === 'post' ? (
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
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default Top;
