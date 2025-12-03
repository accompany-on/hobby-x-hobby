import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const tags = [
  { name: 'PC界隈', num: 1 },
  { name: '服界隈', num: 2 },
  { name: '釣り界隈', num: 3 },
  { name: 'キャンプ界隈', num: 4 },
  { name: '筋トレ界隈', num: 5 },
  { name: '風呂キャン界隈', num: 6 },
  { name: '旅行界隈', num: 7 },
  { name: '運動好き界隈', num: 8 },
  { name: 'アニヲタ界隈', num: 9 },
  { name: '酒界隈', num: 10 },
  { name: '車界隈', num: 11 },
  { name: 'スポーツ界隈', num: 12 },
];

function getStyles(name, tag, theme) {
  return {
    fontWeight: tag.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

export default function SelectTag({ tag, setTag }) {
  const theme = useTheme();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setTag(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
console.log('****',tag)

  return (
    <div>
      <FormControl sx={{ m: 1, width: 600 }}>
        <InputLabel id="demo-multiple-name-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={tag}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          MenuProps={MenuProps}
        >
          {tags.map((p) => (
            <MenuItem
              key={p.name}
              value={p.num}
              style={getStyles(p.name, tag, theme)}
            >
              {p.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
