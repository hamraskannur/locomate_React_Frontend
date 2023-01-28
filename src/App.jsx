import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import User from './Routes/User';
import Admin from './Routes/Admin';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/*" element={<User />} />
        </Routes>
        <Routes>
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
