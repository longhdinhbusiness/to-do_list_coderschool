import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

function App() {
  const [tasks, setTasks] = useState([
    { id: 'task_1', title: 'Learn JS fundamental', status: 0 },
    { id: 'task_2', title: 'Code a Todo List 2', status: 0 },
  ]);

  const [showIncomplete, setShowIncomplete] = useState(false);

  const [newTask, setNewTask] = useState('123');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      const task = {
        id: Date.now(),
        title: newTask,
        status: 0,
      };
      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const setTaskStatus = (taskId, status) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: status ? 1 : 0 };
        }
        return task;
      })
    );
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container">
      <Header title="Todo List" subTitle="Get things done, one at a time." />
      <TaskList
        tasks={tasks}
        showIncomplete={showIncomplete}
        setTaskStatus={setTaskStatus}
        removeTask={removeTask}
        setShowIncomplete={setShowIncomplete}
      />

      <AddTaskForm
        handleSubmit={handleSubmit}
        newTask={newTask}
        handleInputChange={handleInputChange}
      />
    </div>
  );
}

export default App;
