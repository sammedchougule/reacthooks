import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import UseStateHook from './Hooks/UseStateHook';
import UseEffectHook from './Hooks/UseEffectHook';
import UseMemoHook from './Hooks/UseMemoHook';

function App() {

  return (
    <Router>
      <div className="App"> 
        <Routes>
          <Route path="/"  element={<UseStateHook/>} />
          <Route path="/useeffect" element={<UseEffectHook/>} />
          <Route path="/usememo" element={<UseMemoHook/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
