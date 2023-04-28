import { useState } from "react";
import { createTodos } from "./Utils.jsx";
import CTodoList from "./CTodoList.jsx";
const todos = createTodos();

const PTodoList = () => {
  const [tab, setTab] = useState("all");
  const [isDark, setIsDark] = useState(false);
  return (
    <div>
      <button onClick={() => setTab("all")}>All</button>
      <button onClick={() => setTab("aactive")}>Active</button>
      <button onClick={() => setTab("completed")}>Completed</button>
      <br />
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Dark Mode
      </label>
      <hr />
      <CTodoList todos={todos} tab={tab} theme={isDark ? "dark" : "light"} />
    </div>
  );
};

export default PTodoList;
