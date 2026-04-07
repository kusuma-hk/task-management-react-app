import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import './App.css';

/**
 * App Component - Main component that manages task state and handles all task operations
 * Features: Add, Edit, Delete, Complete tasks with Local Storage persistence
 */
function App() {
  // State to hold all tasks
  const [tasks, setTasks] = useState([]);

  // State to hold the task being edited (null if not editing)
  const [editingId, setEditingId] = useState(null);

  // State to hold the edit value
  const [editValue, setEditValue] = useState('');

  // Load tasks from Local Storage when component mounts
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      try {
        setTasks(JSON.parse(storedTasks));
      } catch (error) {
        console.error('Error loading tasks from Local Storage:', error);
      }
    }
  }, []);

  // Save tasks to Local Storage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  /**
   * Add a new task
   * @param {string} taskTitle - The title of the new task
   */
  const addTask = (taskTitle) => {
    if (taskTitle.trim() === '') {
      alert('Please enter a task!');
      return;
    }

    const newTask = {
      id: Date.now(), // Simple ID generation using timestamp
      title: taskTitle,
      completed: false,
      createdAt: new Date().toLocaleString(),
    };

    setTasks([newTask, ...tasks]);
  };

  /**
   * Delete a task by ID
   * @param {number} id - The ID of the task to delete
   */
  const deleteTask = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  /**
   * Toggle task completion status
   * @param {number} id - The ID of the task to toggle
   */
  const toggleTaskComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  /**
   * Start editing a task
   * @param {number} id - The ID of the task to edit
   * @param {string} title - The current title of the task
   */
  const startEditingTask = (id, title) => {
    setEditingId(id);
    setEditValue(title);
  };

  /**
   * Save the edited task
   * @param {number} id - The ID of the task being edited
   */
  const saveEditedTask = (id) => {
    if (editValue.trim() === '') {
      alert('Task title cannot be empty!');
      return;
    }

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: editValue } : task
      )
    );
    setEditingId(null);
    setEditValue('');
  };

  /**
   * Cancel editing
   */
  const cancelEditing = () => {
    setEditingId(null);
    setEditValue('');
  };

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <div className="container">
          <TaskForm onAddTask={addTask} />
          <TaskList
            tasks={tasks}
            editingId={editingId}
            editValue={editValue}
            onToggleComplete={toggleTaskComplete}
            onDeleteTask={deleteTask}
            onStartEditing={startEditingTask}
            onSaveEditing={saveEditedTask}
            onCancelEditing={cancelEditing}
            onEditValueChange={setEditValue}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
