import { useState } from "react";

import "./App.css";

function App() {
  const [tag, setTag] = useState("");

  const tagList = [
    "PC界隈",
    "服界隈",
    "釣り界隈",
    "キャンプ界隈",
    "筋トレ界隈",
  ];

  return (
    <>
      <h1 className="title">HOBBY✖️HOBBY</h1>
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
    </>
  );
}

export default App;
