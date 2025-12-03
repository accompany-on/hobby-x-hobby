import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import UploadButton from './UploadButton';
import App, { AppContext } from '../../App';
import { useContext, useState } from 'react';
import DropDown from '../utils/DropDown';
import SelectTag from './SelectTag';

export default function Form({handleClose}) {
  const { uploadImage , setPostList} = useContext(AppContext);
  const [comment, setComment] = useState('');
  const [tag, setTag] = useState([]);

  const expiration = 604800;

  async function handleSubmit() {
    const formData = new FormData();
    formData.append('image', uploadImage);
    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_YOUR_IMGBB_API_KEY}&expiration=${expiration}`;
    const params = {
      method: 'POST',
      body: formData,
    };

    const response = await fetch(url, params);
    const data = await response.json();

    await fetch('/api/tweets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },

      body: JSON.stringify({
        user_id: 1,
        comment: comment,
        image: data.data.url,
        tag_id: tag,
      }),
    });

   await fetch("/api/tweets")
      .then((data) => data.json())
      .then((data) => setPostList(data));

      handleClose()
  }

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3,
      }}
    >
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <TextField
          sx={{ width: 800, m: 3 }}
          type="text"
          label="comment"
          variant="outlined"
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
       <SelectTag tag={tag} setTag={setTag}/>
        <UploadButton />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          sx={{ m: 3 }}
          onClick={() => {
            handleSubmit();
          }}
        >
          Send
        </Button>
      </Box>
    </Container>
  );
}
