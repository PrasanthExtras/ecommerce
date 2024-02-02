import { Routes,Route } from 'react-router-dom';
import Details from './Components/Details';
import './App.css';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Details/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
