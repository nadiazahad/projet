import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const TaskForm = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(addTask(taskText));
      setTaskText('');
    }
  };

  return (
    <div className="container mt-3">
      <div className="card bg-info">
        <div className="card-body">
          <div className="input-group mb-3">
            <input 
              type="text"
              value={taskText}
              onChange={e => setTaskText(e.target.value)}
              placeholder="Ajouter une nouvelle tâche"
              className="form-control"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" onClick={handleAddTask}>
                <FontAwesomeIcon icon={faPlus} /> Ajouter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;