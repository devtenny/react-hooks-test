import React from "react";
import ColorBox from "./contextAPI/ColorBox";
import { ColorProvider } from "./contextAPI/color";
import SelectColors from "./contextAPI/SelectColors";

export default function App() {
  return (
    <ColorProvider>
      <div className="App">
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}
