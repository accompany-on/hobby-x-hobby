import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AppContext } from "../../App";
import { useContext } from "react";

export default function DropDown() {
  const { setTag_id } = useContext(AppContext);
  const handleChange = (e) => {
    setTag_id(e.target.value);
  };

  return (
    <div>
      <FormControl sx={{ minWidth: 80, mt: 3 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Tag</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          onChange={handleChange}
          autoWidth
          label="Tag"
        >
          <MenuItem value={1}>PC界隈</MenuItem>
          <MenuItem value={2}>服界隈</MenuItem>
          <MenuItem value={3}>釣り界隈</MenuItem>
          <MenuItem value={4}>キャンプ界隈</MenuItem>
          <MenuItem value={5}>筋トレ界隈</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
