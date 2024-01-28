import './App.css';
import LogoLumon from './components/lglumon';
import Structure from './components/structure';

function App() {
  return (
    <div className="App">
      <LogoLumon/>
      <div className="container-principal">
      <div className="title-container">
        <h1>Task System</h1>
      </div>
      <Structure/>
      </div>
    </div>
  );
}

export default App;
