import React from "react";

export const createTodos = () => {
  const todos = [];
  for (let i = 0; i < 50; i++) {
    todos.push({
      id: i,
      text: "Todo" + (i + 1),
      completed: Math.random() > 0.5,
    });
  }
  return todos;
};

export const filterTodos=(todos,tab)=>{
    console.log('[ARTIFICIALLY SLOW] Filtering ' + todos.length + ' todos for "' + tab + '" tab.');
    let StartTime=performance.now();
    while (performance.now() -StartTime < 500){}


return todos.filter(todo=>{
if(tab==="all"){
    return true
}else if(tab==="active"){
    return  !todo.completed

}else if(tab==="completed"){
    return  todo.completed

}
})
}