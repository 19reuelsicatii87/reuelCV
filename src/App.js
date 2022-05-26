import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Home from './Pages/Home';
import ScrumMaster from './Pages/ScrumMaster';
import TestManager from './Pages/TestManager';
import AutomationArchitect from './Pages/AutomationArchitect';
import FullstackDeveloper from './Pages/FullstackDeveloper';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          {/* Unprotected Routes - Business Page*/}
          {/* ============================*/}
          <Route path='/scrum-master' element={<ScrumMaster />} />
          <Route path='/test-manager' element={<TestManager />} />
          <Route path='/automation-architect' element={<AutomationArchitect />} />
          <Route path='/fullstack-developer' element={<FullstackDeveloper />} />

          {/* Unprotected Routes - Dashboard Page*/}
          {/* ============================*/}


          {/* Unprotected and root Routes */}
          {/* ============================*/}
          <Route path='/' element={<Home />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
