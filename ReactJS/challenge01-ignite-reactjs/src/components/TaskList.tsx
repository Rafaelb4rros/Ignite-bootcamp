import { useState, FormEvent } from "react";

import { FiTrash, FiCheckSquare, FiEdit } from "react-icons/fi";
import { generateTaskId } from "../utils/generateTaskId";

import "../styles/tasklist.scss";

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<null | Task>(null);
  const [title, setTitle] = useState("");

  function handleCreateNewTask(e: FormEvent) {
    e.preventDefault();
    if (!title) return;

    const newTask = {
      id: generateTaskId(),
      title,
      isComplete: false,
    };

    setTasks((oldState) => [...oldState, newTask]);
    setTitle("");
  }

  function handleToggleTaskCompletion(id: number) {
    const oldState = [...tasks];

    const newState = oldState.map((task) =>
      task.id === id
        ? {
            ...task,
            isComplete: !task.isComplete,
          }
        : task
    );

    setTasks(newState);
  }

  function handleRemoveTask(id: number) {
    const oldState = [...tasks];
    const newState = oldState.filter((task) => task.id !== id);
    setTasks(newState);

    if (editingTask && id === editingTask.id) setEditingTask(null);
  }

  function handleEditTask(id: number) {
    if (editingTask) return setEditingTask(null);
    const oldState = [...tasks];
    const [edditingTask] = oldState.filter((task) => task.id === id);
    setEditingTask(edditingTask ?? null);
  }

  function handleUpdateTask(e: FormEvent) {
    e.preventDefault();
    if (!editingTask) return;
    const oldState = [...tasks];

    const newState = oldState.map((task) =>
      task.id === editingTask.id
        ? {
            ...editingTask,
            task,
          }
        : task
    );

    setTasks(newState);
    setEditingTask(null);
  }

  return (
    <section className="task-list container">
      <header>
        <h2>Minhas tasks</h2>
        <div className="input-group">
          {editingTask ? (
            <form onSubmit={(e) => handleUpdateTask(e)}>
              <input
                type="text"
                value={editingTask.title}
                onChange={(e) =>
                  setEditingTask({ ...editingTask, title: e.target.value })
                }
              />
              <button type="submit">
                <FiEdit color="#fff" size={16} />
              </button>
            </form>
          ) : (
            <form onSubmit={(e) => handleCreateNewTask(e)}>
              <input
                type="text"
                placeholder="Adicionar novo todo"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
              <button
                type="submit"
                data-testid="add-task-button"
                onClick={handleCreateNewTask}
              >
                <FiCheckSquare size={16} color="#fff" />
              </button>
            </form>
          )}
        </div>
      </header>

      <main>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <div
                className={task.isComplete ? "completed" : ""}
                data-testid="task"
              >
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    readOnly
                    checked={task.isComplete}
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <p>{task.title}</p>
              </div>
              <div>
                <button
                  type="button"
                  data-testid="remove-task-button"
                  onClick={() => handleRemoveTask(task.id)}
                >
                  <FiTrash size={16} />
                </button>

                <button
                  type="button"
                  data-testid="edit-task-button"
                  onClick={() => handleEditTask(task.id)}
                >
                  <FiEdit color="green" size={16} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
}
