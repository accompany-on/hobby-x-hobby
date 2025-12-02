import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import UploadButton from './UploadButton';


export default function Form() {
  
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3
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
          sx={{ width: 800,  m:3}}
          type="text"
          label="comment"
          variant="outlined"
        />
        <TextField
          sx={{ width: 800,  m:3}}
          type="text"
          label="tag"
          variant="outlined"
        />
        <TextField
          sx={{ width: 800,  m:3}}
          type="text"
          label="URL"
          variant="outlined"
        />
        <UploadButton/>
        <Button variant="contained" endIcon={<SendIcon />} sx={ {m:3}}>
          Send
        </Button>
      </Box>
    </Container>
  );
}
