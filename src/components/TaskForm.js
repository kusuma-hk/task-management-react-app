import React, { useState } from 'react';

/**
 * TaskForm Component - Handles task input and submission
 * Features: Text input field and add button
 * @param {function} onAddTask - Callback function to add a new task
 */
function TaskForm({ onAddTask }) {
  // State for the input field
  const [inputValue, setInputValue] = useState('');

  /**
   * Handle form submission
   * Calls onAddTask and clears input field
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(inputValue);
    setInputValue('');
  };

  /**
   * Handle input change
   * @param {object} e - The input change event
   */
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  /**
   * Handle key press (optional: submit on Enter)
   * @param {object} e - The key press event
   */
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="task-input"
          placeholder="Enter a new task..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          autoFocus
        />
        <button type="submit" className="btn btn-add">
          + Add Task
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
