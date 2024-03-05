import logo from './logo.svg';
import './App.css';
import Navbar from './Utils/Navbar';
import Homepage from './Components/Homepage';
import Footbar from './Utils/Footbar';

function App() {
  return (
    <div className="App bg-slate-50" style={{ minWidth: '432px' }}>
      <div>
        <Navbar />
      </div>
      <div className='vh-100 p-3'>
        <Homepage />
      </div>
      <div>
        <Footbar />
      </div>
    </div>
  );
}

export default App;
