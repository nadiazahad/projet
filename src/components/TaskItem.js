import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask, editTask } from '../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingText, setEditingText] = useState(task.text);
  const dispatch = useDispatch();

  const handleToggleTask = () => {
    dispatch(toggleTask(task.id));
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEditTask = () => {
    dispatch(editTask(task.id, editingText));
    setIsEditing(false);
  };

  return (
    <div className={`list-group-item d-flex align-items-center justify-content-between ${task.completed ? 'bg-info' : ''} border rounded p-3 mb-2`}>
      <input type="checkbox" checked={task.completed} onChange={handleToggleTask} className="mr-3" />
      {isEditing ? (
        <input
          type="text"
          value={editingText}
          onChange={(e) => setEditingText(e.target.value)}
          autoFocus
          className="form-control mr-3"
        />
      ) : (
        <span>{task.text}</span>
      )}
      <div>
        {!isEditing && (
          <>
            <button className="btn btn-primary" onClick={() => setIsEditing(true)}>
              <FontAwesomeIcon icon={faEdit} /> Modifier
            </button>
            <button className="btn btn-danger ml-2" onClick={handleDeleteTask}>
              <FontAwesomeIcon icon={faTrash} /> Supprimer
            </button>
          </>
        )}
        {isEditing && (
          <button className="btn btn-primary" onClick={handleEditTask}>
            <FontAwesomeIcon icon={faCheck} /> Valider
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskItem;
