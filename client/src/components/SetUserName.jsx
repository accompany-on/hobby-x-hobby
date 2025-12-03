import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";

export default function SetUserName({ handleClose }) {
  const [userName, setUserName] = useState("");
  const { authUser } = useContext(AuthContext);

  async function handleSubmit() {
    const idToken = await authUser.getIdToken();
    fetch("/api/users", {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${idToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: userName }),
    });

    handleClose();
  }

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 3,
      }}
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          sx={{ width: 800, m: 3 }}
          type="text"
          label={"ユーザー名"}
          variant="outlined"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          sx={{ m: 3 }}
          onClick={() => {
            handleSubmit();
          }}
        >
          Save
        </Button>
      </Box>
    </Container>
  );
}
