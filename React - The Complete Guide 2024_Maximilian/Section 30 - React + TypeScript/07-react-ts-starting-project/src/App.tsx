import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { Todo } from "./models/Todo";

function App() {
  const [items, setItems] = useState<Todo[]>([]);

  const addTodoHandler = (todo: string) => {
    const newTodo = new Todo(todo);

    setItems((prev) => {
      return prev.concat(newTodo);
    });
  };

  const removeTodoHandler = (id: string) => {
    const removedItem = items.find((item: Todo) => item.id === id);
    const removedItemIndex = items.indexOf(removedItem!);
    setItems((prev) => {
      const copiedArray = [...prev];
      copiedArray.splice(removedItemIndex, 1);
      return copiedArray;
    })
  };

  return (
    <div>
      <NewTodo addNewTodo={addTodoHandler} />
      <Todos handleRemoveTodo={removeTodoHandler} items={items} />
    </div>
  );
}

export default App;
