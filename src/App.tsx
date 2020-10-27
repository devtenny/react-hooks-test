import React, { ReactElement, ReactEventHandler, useState } from "react";
import "./App.css";

const content = [
  {
    tab: "Section 1",
    content: "첫번째 섹션",
  },
  {
    tab: "Section 2",
    content: "두번째 섹션",
  },
];

const useTabs = (init: any, allTabs: any) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(init);
  return {
    currentItem: allTabs[currentIndex],
  };
};
const useInput = (init: any, validator: any) => {
  const [value, setValue] = useState(init);
  const onChange = (event: any) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

function App() {
  const { currentItem } = useTabs(0, content);
  const maxLen = (value: any) => value.length <= 10;
  const name = useInput("Mr.", maxLen);
  const [count, setCount] = useState(10);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <h3>{count}</h3>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
      <input placeholder="name" {...name} />
      {content.map((section) => (
        <button>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}

export default App;
