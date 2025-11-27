import React from "react";

export default function DropDown({ tag, setTag }) {
  const tagList = [
    "PC界隈",
    "服界隈",
    "釣り界隈",
    "キャンプ界隈",
    "筋トレ界隈",
  ];

  return (
    <div>
      タグ選択：
      <select
        value={tag}
        onChange={(e) => {
          setTag(e.target.value);
        }}
        id="pet-select"
      >
        {tagList.map((item, i) => (
          <option value={item} key={i}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
