import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          {/* Unprotected Routes - Business Page*/}
          {/* ============================*/}

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
