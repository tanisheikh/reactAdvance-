import React, { useMemo } from "react";
import { filterTodos } from "./Utils.jsx";

const CTodoList = ({ todos, tab, theme }) => {
  // const visibleTodos = filterTodos(todos, tab);
  const visibleTodos=useMemo(()=>filterTodos(todos, tab),[todos, tab])
  return (
    <div className={theme}>
      {" "}
      <ul>
        <p>
          <b>
            Note: <code>filterTodos</code> is artificially slowed down!
          </b>
        </p>
        {visibleTodos.map((todo) => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CTodoList;
