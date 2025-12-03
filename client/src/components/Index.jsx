import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Outlet } from "react-router-dom";
import DropDown from "./utils/DropDown";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import NavBar from "./utils/NavBar";

export default function Index() {
  return (
    <>
      <NavBar />
      <Box sx={{ width: "100%" }}>
        <Stack spacing={1}>
          <DropDown />
          <Outlet />
        </Stack>
      </Box>
    </>
  );
}
