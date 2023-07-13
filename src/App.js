import { useState } from "react";

import Task from "./components/Task/Task";
import Task2 from "./components/Task/Task2";

function App() {
  let boolean = true;
  const [task, setTask] = useState(false);
  setTimeout(() => {
    setTask(boolean);
  });

  return <div>{task ? <Task /> : <Task2 />}</div>;
}

export default App;

/* Task - в зависимости от переменной отобразите верстку

Условный рендеринг
Создайте boolean переменную, и в зависимости от нее, 
тернарным оператором отобразите разную верстку */
