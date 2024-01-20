import logo from './logo.svg';
import './App.css';
import TaskComponent from './pure/task';
import {Task} from './models/Task'

function App() {
const  taskPrueba= new Task('tarea1 la mas basica para prueba','basica','false','normal');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TaskComponent task={taskPrueba}>hhh</TaskComponent>
        
      </header>
    </div>
  );
}

export default Ap