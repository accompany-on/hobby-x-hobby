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

export default function Form({ handleClose, setIsLoading }) {
  const { uploadImage, setPostList } = useContext(AppContext);
  const [comment, setComment] = useState('');
  const [tag, setTag] = useState([]);

  // const expiration = 604800;

  async function handleSubmit() {
    setIsLoading(true);

    const res = await fetch('/api/tweets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },

      body: JSON.stringify({
        user_id: 1,
        comment: comment,
        tags: tag,
      }),
    });
    const { post_id } = await res.json();

    const formData = new FormData();
    formData.append('image', uploadImage);
    const imgRes = await fetch('/api/images', {
      method: 'POST',
      body: formData,
    });
    const { url } = await imgRes.json();

    await fetch(`/api/tweets/${post_id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        image: url,
      }),
    });

    await fetch('/api/tweets')
      .then((data) => data.json())
      .then((data) => setPostList(data));

    setIsLoading(false);
    handleClose();
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
        <SelectTag tag={tag} setTag={setTag} />
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
