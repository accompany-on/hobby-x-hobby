import * as React from "react";
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import { useTheme } from "@mui/material/styles";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const providers = [{ id: "credentials", name: "Email and Password" }];

export default function SignUp() {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <AppProvider theme={theme}>
      <SignInPage
        signIn={async (provider, formData) => {
          await createUserWithEmailAndPassword(
            auth,
            formData.get("email"),
            formData.get("password")
          );
          await fetch("/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: "ユーザー",
              email: formData.get("email"),
            }),
          });
          navigate("/", { replace: true });
        }}
        slots={{
          title: Title,
          emailField: CustomEmailField,
          subtitle: SubTitle,
          passwordField: CustomPasswordField,
          form: CustomNameField,
          submitButton: CustomButton,
          signUpLink: SignUpLink,
        }}
        slotProps={{ form: CustomNameField }}
        providers={providers}
      />
    </AppProvider>
  );
}

function CustomEmailField() {
  return (
    <TextField
      id="input-with-icon-textfield"
      label="Email"
      name="email"
      type="email"
      size="small"
      required
      fullWidth
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle fontSize="inherit" />
            </InputAdornment>
          ),
        },
      }}
      variant="outlined"
    />
  );
}

function CustomPasswordField() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl sx={{ my: 2 }} fullWidth variant="outlined">
      <InputLabel size="small" htmlFor="outlined-adornment-password">
        Password
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        name="password"
        size="small"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              size="small"
            >
              {showPassword ? (
                <VisibilityOff fontSize="inherit" />
              ) : (
                <Visibility fontSize="inherit" />
              )}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  );
}

function CustomButton() {
  return (
    <Button
      type="submit"
      variant="outlined"
      color="info"
      size="small"
      disableElevation
      fullWidth
      sx={{ my: 2 }}
    >
      SIGN UP
    </Button>
  );
}

function SignUpLink() {
  return (
    <Link to={"/login"} variant="body2">
      ログイン画面に戻る
    </Link>
  );
}

function Title() {
  return <h2 style={{ marginBottom: 8 }}>SignUp</h2>;
}

function SubTitle() {
  return <p style={{ fontSize: 15 }}>新規ユーザー登録</p>;
}

function CustomNameField() {
  return (
    <TextField
      id="input-with-icon-textfield"
      label="Email"
      name="email"
      type="email"
      size="small"
      required
      fullWidth
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle fontSize="inherit" />
            </InputAdornment>
          ),
        },
      }}
      variant="outlined"
    />
  );
}
