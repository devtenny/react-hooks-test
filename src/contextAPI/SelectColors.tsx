import React from "react";
import { ColorConsumer } from "./color";

const colors = ["red", "orange", "yellow", "green", "blue", "purple", "violet"];

const SelectColors = () => {
  return (
    <div>
      <h2>Choose the color</h2>
      <ColorConsumer>
        {({ actions }: any) => (
          <div style={{ display: "flex" }}>
            {colors.map((color) => (
              <div
                key={color}
                style={{
                  background: color,
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                }}
                onClick={() => actions.setColor(color)}
                onContextMenu={(e) => {
                  e.preventDefault();
                  actions.setSubcolor(color);
                }}
              ></div>
            ))}
          </div>
        )}
      </ColorConsumer>
      <hr />
    </div>
  );
};

export default SelectColors;
