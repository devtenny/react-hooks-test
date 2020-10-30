import React, { useState } from "react";
import { ADD } from "../actions";
import { useDispatch } from "../context";

export default function Add() {
  const [newTodo, setNewTodo] = useState<string>("");
  const dispatch = useDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: ADD, payload: newTodo });
    setNewTodo("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    setNewTodo(value);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        value={newTodo}
        type="text"
        placeholder="Write to do"
        onChange={onChange}
      />
    </form>
  );
}
