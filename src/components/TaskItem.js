import React from 'react';

/**
 * TaskItem Component - Displays a single task with action buttons
 * Features: Complete checkbox, Edit/Save/Cancel buttons, Delete button
 * @param {object} task - The task object
 * @param {boolean} isEditing - Whether this task is in edit mode
 * @param {string} editValue - The current edit value
 * @param {function} onToggleComplete - Callback to toggle task completion
 * @param {function} onDeleteTask - Callback to delete the task
 * @param {function} onStartEditing - Callback to start editing
 * @param {function} onSaveEditing - Callback to save edited task
 * @param {function} onCancelEditing - Callback to cancel editing
 * @param {function} onEditValueChange - Callback to update edit value
 */
function TaskItem({
  task,
  isEditing,
  editValue,
  onToggleComplete,
  onDeleteTask,
  onStartEditing,
  onSaveEditing,
  onCancelEditing,
  onEditValueChange,
}) {
  return (
    <li className="task-item">
      <div className="task-content">
        {/* Checkbox for marking task complete */}
        <input
          type="checkbox"
          className="task-checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          aria-label={`Mark ${task.title} as ${task.completed ? 'incomplete' : 'complete'}`}
        />

        {/* Task title or edit input */}
        {isEditing ? (
          <div className="task-edit-wrapper">
            <input
              type="text"
              className="task-edit-input"
              value={editValue}
              onChange={(e) => onEditValueChange(e.target.value)}
              autoFocus
            />
          </div>
        ) : (
          <span
            className={`task-title ${task.completed ? 'completed' : ''}`}
            title={task.title}
          >
            {task.title}
          </span>
        )}

        {/* Task metadata */}
        <span className="task-meta">
          {task.createdAt}
        </span>
      </div>

      {/* Task action buttons */}
      <div className="task-actions">
        {isEditing ? (
          <>
            <button
              className="btn btn-save"
              onClick={() => onSaveEditing(task.id)}
              title="Save changes"
            >
              💾 Save
            </button>
            <button
              className="btn btn-cancel"
              onClick={onCancelEditing}
              title="Cancel editing"
            >
              ✕ Cancel
            </button>
          </>
        ) : (
          <>
            <button
              className="btn btn-edit"
              onClick={() => onStartEditing(task.id, task.title)}
              title="Edit this task"
            >
              ✏️ Edit
            </button>
            <button
              className="btn btn-delete"
              onClick={() => onDeleteTask(task.id)}
              title="Delete this task"
            >
              🗑️ Delete
            </button>
          </>
        )}
      </div>
    </li>
  );
}

export default TaskItem;
