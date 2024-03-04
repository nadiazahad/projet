import React from 'react';
import { Provider } from 'react-redux';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container mt-5"> 
        <h1 className="text-center mb-4">Gestionnaire de Tâches</h1> 
        <TaskForm />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
