import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [filter, setFilter] = useState('all');
  const tasks = useSelector(state => state.tasks);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'uncompleted') {
      return !task.completed;
    }
    return true;
  });

  return (
    <div className="container mt-3">
      <select className="form-control mb-3" value={filter} onChange={e => setFilter(e.target.value)}>
        <option value="all">Toutes</option>
        <option value="completed">Terminées</option>
        <option value="uncompleted">Non terminées</option>
      </select>
      <ul className="list-group">
        {filteredTasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;