import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropDown() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 3, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Tag</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Tag"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={20}>PC界隈</MenuItem>
          <MenuItem value={21}>服界隈</MenuItem>
          <MenuItem value={22}>釣り界隈</MenuItem>
          <MenuItem value={22}>キャンプ界隈</MenuItem>
          <MenuItem value={22}>筋トレ界隈</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
