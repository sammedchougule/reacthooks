import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Usestatehook from './Hooks/Usestatehook';
import Useeffecthook from './Hooks/Useeffecthook';
import Usememohook from './Hooks/Usememohook';

function App() {

  return (
    <Router>
      <div className="App"> 
        <Routes>
          <Route path="/usestate"  element={<Usestatehook/>} />
          <Route path="/useeffect" element={<Useeffecthook/>} />
          <Route path="/usememo" element={<Usememohook/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
