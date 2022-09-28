import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import ToDoList from './components/todolist';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ToDoList />
    </div>
  );
}

export default App;
