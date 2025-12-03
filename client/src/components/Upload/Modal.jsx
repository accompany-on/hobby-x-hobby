import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Form from './Form';
import CircularIndeterminate from './CircularIndeterminate';
import { height } from '@mui/system';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const styleModal = {
  position: 'fixed',
  inset: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 3,
  bgcolor: 'rgba(66, 66, 66, 0.25)',
  color: '#fff',
};

export default function UploadModal() {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{ bgcolor: '#1bb9e0ff', m: 3, color: '#c9dce0ff' }}
      >
        Upload Images
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {isLoading ? (
          <Box sx={styleModal}>
            <CircularIndeterminate size={400} />
          </Box>
        ) : (
          <Box sx={style}>
            <Form handleClose={handleClose} setIsLoading={setIsLoading} />
          </Box>
        )}
      </Modal>
    </div>
  );
}
