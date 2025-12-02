import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AppContext } from '../../App';

export default function SelectTag({ tag, setTag }) {



  const handleChange = (event) => {
    setTag(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, m: 3 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tag</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tag}
          label="Tag"
          onChange={handleChange}
        >
          <MenuItem value={1}>PC界隈</MenuItem>
          <MenuItem value={2}>服界隈</MenuItem>
          <MenuItem value={3}>釣り界隈</MenuItem>
          <MenuItem value={4}>キャンプ界隈</MenuItem>
          <MenuItem value={5}>筋トレ界隈</MenuItem>
          <MenuItem value={6}>風呂キャン界隈</MenuItem>
          <MenuItem value={7}>旅行界隈</MenuItem>
          <MenuItem value={8}>運動好き界隈</MenuItem>
          <MenuItem value={9}>アニヲタ界隈</MenuItem>
          <MenuItem value={10}>酒界隈</MenuItem>
          <MenuItem value={11}>車界隈</MenuItem>
          <MenuItem value={12}>スポーツ界隈</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
