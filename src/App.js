import logo from './logo.svg';
import './App.css';
import FunctionalComp from './Components/FunctionalComp';
import {ClassComp, ClassComp1} from './Components/ClassComp';
import Click from './Components/Click';

function App() {
  return (
    <div>
      <h1>Javatpoint</h1>
      <FunctionalComp></FunctionalComp>
      <ClassComp></ClassComp>
      <ClassComp1></ClassComp1>
      <Click></Click>
    </div>
  );
}

export default App;
