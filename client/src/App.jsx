import { useEffect, useState } from 'react';
import {
  Route,
  Routes
} from 'react-router-dom';
import NavBar from './components/utils/NavBar';
import Index from './components/Index';

function App() {
  const [tag, setTag] = useState('');
  const [nav, setNav] = useState('top');
  const [postList, setPostList] = useState([]);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [user_id, setUser_id] = useState('');
  const [link, setLink] = useState('');
  const [tag_id, setTag_id] = useState('');

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

  return (
  
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path='/' element={<NavBar />} />
        </Route>
      </Routes>
  );
}

export default App;
