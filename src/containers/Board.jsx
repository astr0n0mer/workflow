import { useState } from "react";
import State from "./State";
import { DragDropContext } from "react-beautiful-dnd";

import { boards } from "../utils/data";

export default function Board() {
  const [todoTasks, setTodoTasks] = useState(() => boards[0].states[0].tasks);
  const [onProgressTasks, setOnProgressTasks] = useState(
    () => boards[0].states[1].tasks
  );
  const [doneTasks, setDoneTasks] = useState(() => boards[0].states[2].tasks);

  function handleDragEnd({ source, destination, draggableId }) {
    if (source === destination) return;

    let draggedTask;
    if (source.droppableId === "todo") {
      setTodoTasks((prevTodoTasks) => removeTask(prevTodoTasks, draggableId));
      draggedTask = getTask(todoTasks, draggableId);
    } else if (source.droppableId === "onprogress") {
      setOnProgressTasks((prevOnProgressTasks) =>
        removeTask(prevOnProgressTasks, draggableId)
      );
      draggedTask = getTask(onProgressTasks, draggableId);
    } else if (source.droppableId === "done") {
      setDoneTasks((prevDoneTasks) => removeTask(prevDoneTasks, draggableId));
      draggedTask = getTask(doneTasks, draggableId);
    }

    if (destination.droppableId === "todo") {
      setTodoTasks((prevTodoTasks) =>
        addTaskToIndex(prevTodoTasks, draggedTask, destination.index)
      );
    } else if (destination.droppableId === "onprogress") {
      setOnProgressTasks((prevOnProgressTasks) =>
        addTaskToIndex(prevOnProgressTasks, draggedTask, destination.index)
      );
    } else if (destination.droppableId === "done") {
      setDoneTasks((prevDoneTasks) =>
        addTaskToIndex(prevDoneTasks, draggedTask, destination.index)
      );
    }
  }

  function removeTask(tasks, removeTaskId) {
    return tasks.filter(
      (task) =>
        task.title.replace(/[^a-z0-9]/gi, "").toLowerCase() !== removeTaskId
    );
  }

  function getTask(tasks, taskId) {
    return tasks.find(
      (task) => task.title.replace(/[^a-z0-9]/gi, "").toLowerCase() === taskId
    );
  }

  function addTaskToIndex(tasks, newTask, index) {
    return [...tasks.slice(0, index), newTask, ...tasks.slice(index)];
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="grid items-start gap-4 p-10 pt-0 lg:grid-cols-3">
        <State
          name={boards[0].states[0].name}
          accentColor={boards[0].states[0].accentColor}
          tasks={todoTasks}
          id={"todo"}
        />
        <State
          name={boards[0].states[1].name}
          accentColor={boards[0].states[1].accentColor}
          tasks={onProgressTasks}
          id={"onprogress"}
        />
        <State
          name={boards[0].states[2].name}
          accentColor={boards[0].states[2].accentColor}
          tasks={doneTasks}
          id={"done"}
        />
      </div>
    </DragDropContext>
  );
}
