import React, { useState } from "react";

function InputTest() {
  const [text, setText] = useState("hello hooooooooks");
  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const [todoValue, setTodoValue] = useState("");
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setTodoValue(value);
  };
  return (
    <div>
      <br />
      <br />
      <input
        type="text"
        placeholder="입력하세요."
        // value={value}
        onChange={handleChange}
      />
      <button onClick={handleClick}>입력</button>
      <div onClick={() => setText("bye hooks")}>{text}</div>
      <ul>
        <li>{todoValue}</li>
      </ul>
    </div>
  );
}
export default InputTest;
