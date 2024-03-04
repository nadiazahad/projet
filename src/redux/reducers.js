const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const newTask = action.payload;
      localStorage.setItem('tasks', JSON.stringify([...state.tasks, newTask]));
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    case 'DELETE_TASK':
      const taskId = action.payload;
      const updatedTasksAfterDelete = state.tasks.filter((task) => task.id !== taskId);
      localStorage.setItem('tasks', JSON.stringify(updatedTasksAfterDelete));
      return {
        ...state,
        tasks: updatedTasksAfterDelete,
      };
    case 'TOGGLE_TASK':
      const toggledTaskId = action.payload;
      const updatedTaskListAfterToggle = state.tasks.map((task) =>
        task.id === toggledTaskId ? { ...task, completed: !task.completed } : task
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTaskListAfterToggle));
      return {
        ...state,
        tasks: updatedTaskListAfterToggle,
      };
    case 'EDIT_TASK':
      const { id, newText } = action.payload;
      const updatedTasksAfterEdit = state.tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTasksAfterEdit));
      return {
        ...state,
        tasks: updatedTasksAfterEdit,
      };
    default:
      return state;
  }
};

export default taskReducer;
