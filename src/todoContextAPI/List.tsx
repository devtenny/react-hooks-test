import React from "react";

interface Props {
  name: string;
  children: React.ReactNode;
}

export default function List({ name, children }: Props) {
  return (
    <div>
      <h1>{name}</h1>
      <ul>{children}</ul>
    </div>
  );
}
