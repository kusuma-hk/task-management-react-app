import React from 'react';
import TaskItem from './TaskItem';

/**
 * TaskList Component - Displays all tasks in a list
 * Features: Empty state message, task filtering, responsive layout
 * @param {array} tasks - Array of all tasks
 * @param {number} editingId - ID of the task being edited
 * @param {string} editValue - Current edit value
 * @param {function} onToggleComplete - Callback to toggle completion
 * @param {function} onDeleteTask - Callback to delete task
 * @param {function} onStartEditing - Callback to start editing
 * @param {function} onSaveEditing - Callback to save editing
 * @param {function} onCancelEditing - Callback to cancel editing
 * @param {function} onEditValueChange - Callback to update edit value
 */
function TaskList({
  tasks,
  editingId,
  editValue,
  onToggleComplete,
  onDeleteTask,
  onStartEditing,
  onSaveEditing,
  onCancelEditing,
  onEditValueChange,
}) {
  // Calculate task statistics
  const completedCount = tasks.filter((task) => task.completed).length;
  const totalCount = tasks.length;

  return (
    <section className="task-list-section">
      {/* Task Statistics */}
      {totalCount > 0 && (
        <div className="task-stats">
          <p>
            Total Tasks: <strong>{totalCount}</strong> | Completed: <strong>{completedCount}</strong> | Remaining: <strong>{totalCount - completedCount}</strong>
          </p>
        </div>
      )}

      {/* Task List or Empty State */}
      {tasks.length === 0 ? (
        <div className="empty-state">
          <p className="empty-icon">📋</p>
          <p className="empty-message">No tasks yet! Add one to get started.</p>
        </div>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              isEditing={editingId === task.id}
              editValue={editingId === task.id ? editValue : ''}
              onToggleComplete={onToggleComplete}
              onDeleteTask={onDeleteTask}
              onStartEditing={onStartEditing}
              onSaveEditing={onSaveEditing}
              onCancelEditing={onCancelEditing}
              onEditValueChange={onEditValueChange}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default TaskList;
